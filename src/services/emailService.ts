import emailjs from '@emailjs/browser';

// Configurações do EmailJS - busca das variáveis de ambiente
const EMAILJS_CONFIG = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

// Interface para os dados do formulário
export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

// Interface para resposta do serviço
export interface EmailServiceResponse {
    success: boolean;
    message: string;
    error?: string;
}

/**
 * Inicializa o EmailJS com a chave pública
 */
export const initEmailJS = (): void => {
    if (EMAILJS_CONFIG.publicKey) {
        emailjs.init(EMAILJS_CONFIG.publicKey);
        console.log('✅ EmailJS inicializado com sucesso');
    } else {
        console.warn('⚠️ EmailJS Public Key não configurada');
    }
};

/**
 * Valida os dados do formulário
 */
const validateFormData = (data: ContactFormData): string | null => {
    // Validar nome
    if (!data.name || data.name.trim().length < 2) {
        return 'Nome deve ter pelo menos 2 caracteres';
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        return 'Email inválido';
    }

    // Validar assunto
    if (!data.subject || data.subject.trim().length < 3) {
        return 'Assunto deve ter pelo menos 3 caracteres';
    }

    // Validar mensagem
    if (!data.message || data.message.trim().length < 10) {
        return 'Mensagem deve ter pelo menos 10 caracteres';
    }

    return null;
};

/**
 * Envia o email usando EmailJS
 */
export const sendContactEmail = async (
    formData: ContactFormData
): Promise<EmailServiceResponse> => {
    try {
        // Validar dados do formulário
        const validationError = validateFormData(formData);
        if (validationError) {
            return {
                success: false,
                message: validationError,
            };
        }

        // Verificar se as configurações estão definidas
        if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
            console.error('❌ EmailJS não configurado:', {
                serviceId: !!EMAILJS_CONFIG.serviceId,
                templateId: !!EMAILJS_CONFIG.templateId,
                publicKey: !!EMAILJS_CONFIG.publicKey,
            });

            return {
                success: false,
                message: 'Serviço de email não configurado. Entre em contato diretamente por email.',
                error: 'SERVICE_NOT_CONFIGURED',
            };
        }

        // Preparar template params com a data/hora formatada
        const now = new Date();
        const templateParams = {
            from_name: formData.name.trim(),
            from_email: formData.email.trim(),
            subject: formData.subject.trim(),
            message: formData.message.trim(),
            to_name: 'Equipe', // Customize conforme necessário
            reply_to: formData.email.trim(),
            time: now.toLocaleString('pt-BR', {
                dateStyle: 'short',
                timeStyle: 'short',
            }),
        };

        console.log('📧 Tentando enviar email...');
        console.log('📋 Configurações:', {
            serviceId: EMAILJS_CONFIG.serviceId,
            templateId: EMAILJS_CONFIG.templateId,
            publicKey: EMAILJS_CONFIG.publicKey ? '✓ Configurada' : '✗ NÃO configurada',
        });
        console.log('📝 Dados do formulário:', {
            name: templateParams.from_name,
            email: templateParams.from_email,
            subject: templateParams.subject,
            messageLength: templateParams.message.length,
        });

        // Enviar email através do EmailJS
        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            templateParams
        );

        // Verificar resposta
        if (response.status === 200) {
            console.log('✅ Email enviado com sucesso!', response);
            return {
                success: true,
                message: 'Email enviado com sucesso! Entraremos em contato em breve.',
            };
        }

        console.error('❌ Resposta inesperada do EmailJS:', response);
        return {
            success: false,
            message: 'Erro ao enviar email. Tente novamente.',
            error: 'UNEXPECTED_RESPONSE',
        };
    } catch (error: any) {
        console.error('❌ Erro ao enviar email:', error);
        console.error('Detalhes do erro:', {
            status: error?.status,
            text: error?.text,
            message: error?.message,
        });

        // Mensagens de erro mais amigáveis baseadas no status
        let errorMessage = 'Erro ao enviar email. Por favor, tente novamente mais tarde.';

        if (error?.status) {
            switch (error.status) {
                case 400:
                    errorMessage = 'Erro de validação. Verifique se as configurações do EmailJS estão corretas (Service ID, Template ID, Public Key).';
                    console.error('Erro 400: Verifique se:', {
                        serviceId: EMAILJS_CONFIG.serviceId,
                        templateId: EMAILJS_CONFIG.templateId,
                        publicKey: EMAILJS_CONFIG.publicKey ? 'Configurada' : 'NÃO configurada',
                        templateVariables: 'Verifique se o template tem as variáveis: from_name, from_email, subject, message, reply_to, time',
                    });
                    break;
                case 401:
                    errorMessage = 'Erro de autenticação. Verifique a Public Key do EmailJS.';
                    break;
                case 404:
                    errorMessage = 'Serviço ou Template não encontrado. Verifique o Service ID e Template ID.';
                    break;
                case 412:
                    errorMessage = 'Template inválido. Verifique as variáveis do template no EmailJS.';
                    break;
                case 413:
                    errorMessage = 'Mensagem muito grande. Reduza o tamanho da mensagem.';
                    break;
                case 429:
                    errorMessage = 'Limite de emails atingido. Tente novamente mais tarde.';
                    break;
                default:
                    errorMessage = `Erro ${error.status}: ${error.text || 'Erro desconhecido'}`;
            }
        } else if (error instanceof Error) {
            if (error.message.includes('Failed to fetch')) {
                errorMessage = 'Erro de conexão. Verifique sua internet e tente novamente.';
            } else if (error.message.includes('Invalid')) {
                errorMessage = 'Erro de configuração. Entre em contato diretamente por email.';
            }
        }

        return {
            success: false,
            message: errorMessage,
            error: error?.text || error?.message || 'UNKNOWN_ERROR',
        };
    }
};

/**
 * Envia email de teste para validar configuração
 */
export const sendTestEmail = async (): Promise<EmailServiceResponse> => {
    console.log('🧪 Enviando email de teste...');

    const testData: ContactFormData = {
        name: 'Teste Sistema',
        email: 'teste@exemplo.com',
        subject: 'Email de Teste do Sistema',
        message: 'Esta é uma mensagem de teste do sistema de contato. Se você recebeu este email, a configuração está correta!',
    };

    return sendContactEmail(testData);
};

/**
 * Verifica se o EmailJS está configurado corretamente
 */
export const isEmailJSConfigured = (): boolean => {
    const isConfigured = !!(
        EMAILJS_CONFIG.serviceId &&
        EMAILJS_CONFIG.templateId &&
        EMAILJS_CONFIG.publicKey
    );

    if (!isConfigured) {
        console.warn('⚠️ EmailJS não está totalmente configurado:', {
            serviceId: !!EMAILJS_CONFIG.serviceId,
            templateId: !!EMAILJS_CONFIG.templateId,
            publicKey: !!EMAILJS_CONFIG.publicKey,
        });
    }

    return isConfigured;
};

/**
 * Obtém informações sobre a configuração do EmailJS (para debug)
 */
export const getEmailJSConfig = () => {
    return {
        isConfigured: isEmailJSConfigured(),
        hasServiceId: !!EMAILJS_CONFIG.serviceId,
        hasTemplateId: !!EMAILJS_CONFIG.templateId,
        hasPublicKey: !!EMAILJS_CONFIG.publicKey,
    };
};