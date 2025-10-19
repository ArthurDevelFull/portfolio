import { Container, Row, Col, Badge } from 'react-bootstrap';
import { FaRocket, FaCalendar, FaDollarSign, FaShoppingCart, FaBoxes, FaChartBar, FaBullseye, FaLock, FaBolt, FaMobileAlt, FaPalette } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { features } from '../data/portfolioData';
import '../styles/FeaturesSection.css';

const FeaturesSection = () => {
    const icons = [
        FaRocket,
        FaCalendar,
        FaDollarSign,
        FaShoppingCart,
        FaBoxes,
        FaChartBar,
    ];

    return (
        <section id="features" className="section bg-white">
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
                        <FaRocket className="text-primary me-3" />
                        Features Implementadas
                    </h2>
                    <p className="lead text-muted">Funcionalidades completas do sistema</p>
                </motion.div>

                {/* Grid de features */}
                <Row className="features-grid">
                    {features.map((feature, index) => {
                        const Icon = icons[index];
                        return (
                            <Col key={index} className="feature-col">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="h-100"
                                >
                                    <div className="feature-card p-4">
                                        <div className="feature-content">
                                            {/* Ícone */}
                                            <div className="feature-icon">
                                                <Icon className="text-primary" size={28} />
                                            </div>

                                            {/* Título */}
                                            <h3 className="fw-bold">{feature.title}</h3>

                                            {/* Descrição */}
                                            <p className="text-muted">
                                                {feature.description}
                                            </p>

                                            {/* Tecnologias */}
                                            <div className="feature-technologies d-flex flex-wrap gap-2">
                                                {feature.technologies.map((tech, techIndex) => (
                                                    <Badge
                                                        key={techIndex}
                                                        bg="light"
                                                        text="dark"
                                                        className="feature-badge"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Col>
                        );
                    })}
                </Row>

                {/* Resumo de funcionalidades */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-5"
                >
                    <div className="custom-card p-5 text-white" style={{
                        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
                    }}>
                        <Row className="align-items-center">
                            <Col lg={8}>
                                <h3 className="h4 fw-bold mb-3">Desenvolvimento Completo e Profissional</h3>
                                <p className="mb-0 opacity-90" style={{ fontSize: '1.05rem' }}>
                                    Todas as funcionalidades são desenvolvidas com foco em{' '}
                                    <strong>qualidade</strong>, <strong>segurança</strong>,{' '}
                                    <strong>performance</strong> e <strong>experiência do usuário</strong>.
                                    Incluindo testes automatizados, validações robustas, tratamento de erros
                                    completo, logs detalhados para auditoria e documentação técnica.
                                </p>
                            </Col>
                            <Col lg={4} className="text-lg-end mt-4 mt-lg-0">
                                <div className="display-1 opacity-75"><FaBullseye /></div>
                            </Col>
                        </Row>
                    </div>
                </motion.div>

                {/* Diferenciais */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-5"
                >
                    <h3 className="h4 fw-bold text-center mb-4">Diferenciais do Sistema</h3>
                    <Row className="g-4">
                        <Col md={6} lg={3}>
                            <div className="text-center p-4">
                                <div className="display-4 mb-3"><FaLock /></div>
                                <h4 className="h6 fw-bold mb-2">Segurança Avançada</h4>
                                <p className="text-muted small mb-0">
                                    Criptografia AES-GCM, autenticação tripla, rotação de chaves
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={3}>
                            <div className="text-center p-4">
                                <div className="display-4 mb-3"><FaBolt /></div>
                                <h4 className="h6 fw-bold mb-2">Alta Performance</h4>
                                <p className="text-muted small mb-0">
                                    Queries otimizadas, índices estratégicos, cache inteligente
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={3}>
                            <div className="text-center p-4">
                                <div className="display-4 mb-3"><FaMobileAlt /></div>
                                <h4 className="h6 fw-bold mb-2">Responsivo</h4>
                                <p className="text-muted small mb-0">
                                    Interface adaptável para desktop, tablet e mobile
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={3}>
                            <div className="text-center p-4">
                                <div className="display-4 mb-3"><FaPalette /></div>
                                <h4 className="h6 fw-bold mb-2">UX Excepcional</h4>
                                <p className="text-muted small mb-0">
                                    Design intuitivo, feedback visual, validações em tempo real
                                </p>
                            </div>
                        </Col>
                    </Row>
                </motion.div>
            </Container>
        </section>
    );
};

export default FeaturesSection;