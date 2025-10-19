import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { personalInfo, contact } from '../data/portfolioData';
import { useState, useEffect } from 'react';
import { sendContactEmail, initEmailJS, isEmailJSConfigured } from '../services/emailService';
import type { ContactFormData } from '../services/emailService';

const ContactSection = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');

    // Inicializar EmailJS quando o componente montar
    useEffect(() => {
        initEmailJS();

        // Verificar se está configurado
        if (!isEmailJSConfigured()) {
            console.warn('EmailJS não está configurado. Verifique as variáveis de ambiente.');
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');
        setErrorMessage('');
        setSuccessMessage('');

        try {
            // Enviar email usando EmailJS
            const result = await sendContactEmail(formData);

            if (result.success) {
                setFormStatus('sent');
                setSuccessMessage(result.message);

                // Limpar formulário após sucesso
                setFormData({ name: '', email: '', subject: '', message: '' });

                // Resetar status após 5 segundos
                setTimeout(() => {
                    setFormStatus('idle');
                    setSuccessMessage('');
                }, 5000);
            } else {
                setFormStatus('error');
                setErrorMessage(result.message);

                // Resetar status de erro após 5 segundos
                setTimeout(() => {
                    setFormStatus('idle');
                    setErrorMessage('');
                }, 5000);
            }
        } catch (error) {
            console.error('Erro ao enviar email:', error);
            setFormStatus('error');
            setErrorMessage('Erro inesperado ao enviar mensagem. Tente novamente.');

            setTimeout(() => {
                setFormStatus('idle');
                setErrorMessage('');
            }, 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Verificar se o formulário tem todos os campos preenchidos
    const isFormFilled = () => {
        return (
            formData.name.trim() !== '' &&
            formData.email.trim() !== '' &&
            formData.subject.trim() !== '' &&
            formData.message.trim() !== ''
        );
    };

    return (
        <section id="contato" className="section bg-light">
            <Container>
                {/* Título da seção */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-5"
                >
                    <h2 className="display-4 fw-bold mb-3">
                        <FaEnvelope className="text-primary me-3" />
                        Entre em Contato
                    </h2>
                    <p className="lead text-muted">{contact.availability}</p>
                </motion.div>

                <Row className="g-4">
                    {/* Informações de contato */}
                    <Col lg={5}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="custom-card p-4 h-100">
                                <h3 className="h4 fw-bold mb-4">Informações de Contato</h3>

                                {/* Email */}
                                <div className="d-flex align-items-start mb-4">
                                    <div
                                        className="bg-primary bg-opacity-10 rounded p-3 me-3"
                                        style={{ minWidth: '56px' }}
                                    >
                                        <FaEnvelope className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <p className="mb-1 text-muted small">Email</p>
                                        <a
                                            href={`mailto:${personalInfo.email}`}
                                            className="fw-medium text-decoration-none"
                                        >
                                            {personalInfo.email}
                                        </a>
                                    </div>
                                </div>

                                {/* Telefone */}
                                <div className="d-flex align-items-start mb-4">
                                    <div
                                        className="bg-success bg-opacity-10 rounded p-3 me-3"
                                        style={{ minWidth: '56px' }}
                                    >
                                        <FaPhone className="text-success" size={24} />
                                    </div>
                                    <div>
                                        <p className="mb-1 text-muted small">Telefone</p>
                                        <a
                                            href={`tel:${personalInfo.phone}`}
                                            className="fw-medium text-decoration-none"
                                        >
                                            {personalInfo.phone}
                                        </a>
                                    </div>
                                </div>

                                {/* Localização */}
                                <div className="d-flex align-items-start mb-4">
                                    <div
                                        className="bg-info bg-opacity-10 rounded p-3 me-3"
                                        style={{ minWidth: '56px' }}
                                    >
                                        <FaMapMarkerAlt className="text-info" size={24} />
                                    </div>
                                    <div>
                                        <p className="mb-1 text-muted small">Localização</p>
                                        <p className="fw-medium mb-0">{personalInfo.location}</p>
                                    </div>
                                </div>

                                {/* Redes sociais */}
                                <div className="mt-5 pt-4 border-top">
                                    <h4 className="h6 fw-bold mb-3">Conecte-se comigo</h4>
                                    <div className="d-flex gap-3">
                                        <a
                                            href={personalInfo.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline-dark btn-lg rounded-circle d-flex align-items-center justify-content-center"
                                            style={{ width: '56px', height: '56px' }}
                                            aria-label="GitHub"
                                        >
                                            <FaGithub size={24} />
                                        </a>
                                        <a
                                            href={personalInfo.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline-primary btn-lg rounded-circle d-flex align-items-center justify-content-center"
                                            style={{ width: '56px', height: '56px' }}
                                            aria-label="LinkedIn"
                                        >
                                            <FaLinkedin size={24} />
                                        </a>
                                    </div>
                                </div>

                                {/* Informação adicional */}
                                <div className="mt-4 p-3 bg-light rounded">
                                    <p className="mb-2 small">
                                        <strong>Disponibilidade:</strong>
                                    </p>
                                    <p className="mb-0 text-muted small">
                                        Disponível para novos projetos e oportunidades de colaboração
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </Col>

                    {/* Formulário de contato */}
                    <Col lg={7}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="custom-card p-4 h-100">
                                <h3 className="h4 fw-bold mb-4">Envie uma mensagem</h3>

                                <Form onSubmit={handleSubmit}>
                                    <Row className="g-3">
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label className="fw-medium">Nome *</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Seu nome completo"
                                                    required
                                                    minLength={2}
                                                    size="lg"
                                                    disabled={formStatus === 'sending'}
                                                />
                                                <Form.Text className="text-muted">
                                                    Mínimo 2 caracteres
                                                </Form.Text>
                                            </Form.Group>
                                        </Col>

                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label className="fw-medium">Email *</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="seu.email@exemplo.com"
                                                    required
                                                    size="lg"
                                                    disabled={formStatus === 'sending'}
                                                />
                                                <Form.Text className="text-muted">
                                                    Email válido necessário
                                                </Form.Text>
                                            </Form.Group>
                                        </Col>

                                        <Col xs={12}>
                                            <Form.Group>
                                                <Form.Label className="fw-medium">Assunto *</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    placeholder="Assunto da mensagem"
                                                    required
                                                    minLength={3}
                                                    size="lg"
                                                    disabled={formStatus === 'sending'}
                                                />
                                                <Form.Text className="text-muted">
                                                    Mínimo 3 caracteres
                                                </Form.Text>
                                            </Form.Group>
                                        </Col>

                                        <Col xs={12}>
                                            <Form.Group>
                                                <Form.Label className="fw-medium">Mensagem *</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    rows={6}
                                                    placeholder="Digite sua mensagem aqui..."
                                                    required
                                                    minLength={10}
                                                    size="lg"
                                                    disabled={formStatus === 'sending'}
                                                />
                                                <Form.Text className="text-muted">
                                                    Mínimo 10 caracteres ({formData.message.length}/10)
                                                </Form.Text>
                                            </Form.Group>
                                        </Col>

                                        <Col xs={12}>
                                            <Button
                                                type="submit"
                                                size="lg"
                                                className="w-100 btn-gradient"
                                                disabled={formStatus === 'sending' || !isFormFilled()}
                                            >
                                                <span>
                                                    {formStatus === 'sending' ? (
                                                        <>
                                                            <span className="spinner-border spinner-border-sm me-2" />
                                                            Enviando...
                                                        </>
                                                    ) : formStatus === 'sent' ? (
                                                        <>✓ Mensagem Enviada!</>
                                                    ) : (
                                                        <>
                                                            <FaPaperPlane className="me-2" />
                                                            Enviar Mensagem
                                                        </>
                                                    )}
                                                </span>
                                            </Button>
                                        </Col>

                                        {/* Mensagem de Sucesso */}
                                        {formStatus === 'sent' && successMessage && (
                                            <Col xs={12}>
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="alert alert-success mb-0"
                                                >
                                                    <strong>✓ Sucesso!</strong> {successMessage}
                                                </motion.div>
                                            </Col>
                                        )}

                                        {/* Mensagem de Erro */}
                                        {formStatus === 'error' && errorMessage && (
                                            <Col xs={12}>
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="alert alert-danger mb-0"
                                                >
                                                    <strong>✗ Erro!</strong> {errorMessage}
                                                </motion.div>
                                            </Col>
                                        )}

                                        {/* Aviso se EmailJS não estiver configurado */}
                                        {!isEmailJSConfigured() && formStatus === 'idle' && (
                                            <Col xs={12}>
                                                <div className="alert alert-warning mb-0">
                                                    <strong>⚠️ Atenção!</strong> O serviço de email ainda não está configurado.
                                                    Configure as variáveis de ambiente do EmailJS.
                                                </div>
                                            </Col>
                                        )}
                                    </Row>
                                </Form>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactSection;