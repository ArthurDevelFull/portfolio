import { Container, Row, Col } from 'react-bootstrap';
import { FaCog, FaRocket, FaCheckCircle, FaLightbulb, FaStar, FaRuler, FaCode, FaLayerGroup, FaSync } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProcessSection = () => {
    const processes = [
        {
            icon: FaLightbulb,
            title: "Descoberta",
            description: "Análise de requisitos, entendimento do negócio e definição de objetivos",
            color: "warning",
            steps: [
                "Reuniões com stakeholders",
                "Levantamento de requisitos",
                "Análise de viabilidade",
                "Definição de escopo"
            ]
        },
        {
            icon: FaCog,
            title: "Planejamento",
            description: "Arquitetura, modelagem de dados e escolha de tecnologias",
            color: "info",
            steps: [
                "Modelagem do banco de dados",
                "Arquitetura do sistema",
                "Stack tecnológico",
                "Cronograma e sprints"
            ]
        },
        {
            icon: FaRocket,
            title: "Desenvolvimento",
            description: "Implementação iterativa seguindo metodologias ágeis",
            color: "primary",
            steps: [
                "Desenvolvimento em sprints",
                "Code reviews frequentes",
                "Testes automatizados",
                "Integração contínua"
            ]
        },
        {
            icon: FaCheckCircle,
            title: "Entrega",
            description: "Deploy, documentação e suporte pós-implantação",
            color: "success",
            steps: [
                "Testes de homologação",
                "Deploy em produção",
                "Documentação técnica",
                "Treinamento e suporte"
            ]
        }
    ];

    return (
        <section id="processo" className="section bg-white">
            <Container>
                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-5"
                >
                    <h2 className="display-4 fw-bold mb-3">
                        Processo de Desenvolvimento
                    </h2>
                    <p className="lead text-muted">
                        Metodologia estruturada para garantir qualidade e eficiência
                    </p>
                </motion.div>

                {/* Timeline de processos */}
                <Row className="g-4 position-relative">
                    {processes.map((process, index) => {
                        const Icon = process.icon;
                        return (
                            <Col key={index} lg={3} md={6}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="position-relative"
                                    style={{ zIndex: 1 }}
                                >
                                    <div className="custom-card p-4 h-100 text-center">
                                        {/* Número */}
                                        <div
                                            className={`badge bg-${process.color} rounded-circle d-inline-flex align-items-center justify-content-center mb-3`}
                                            style={{ width: '40px', height: '40px', fontSize: '1.2rem' }}
                                        >
                                            {index + 1}
                                        </div>

                                        {/* Ícone */}
                                        <div
                                            className={`bg-${process.color} bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3`}
                                            style={{ width: '80px', height: '80px' }}
                                        >
                                            <Icon className={`text-${process.color}`} size={36} />
                                        </div>

                                        {/* Título */}
                                        <h3 className="h5 fw-bold mb-3">{process.title}</h3>

                                        {/* Descrição */}
                                        <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
                                            {process.description}
                                        </p>

                                        {/* Steps */}
                                        <ul className="list-unstyled text-start mb-0">
                                            {process.steps.map((step, stepIndex) => (
                                                <li key={stepIndex} className="mb-2 small text-muted">
                                                    <span className={`text-${process.color} me-2`}>▸</span>
                                                    {step}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </Col>
                        );
                    })}
                </Row>

                {/* Metodologias utilizadas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-5 pt-5 border-top"
                >
                    <h3 className="h4 fw-bold text-center mb-4">Metodologias e Boas Práticas</h3>
                    <Row className="g-4">
                        <Col md={6} lg={3}>
                            <div className="custom-card p-4 text-center h-100">
                                <div className="mb-3"><FaRuler className="text-primary" /></div>
                                <h4 className="h6 fw-bold mb-2">Agile/Scrum</h4>
                                <p className="text-muted small mb-0">
                                    Desenvolvimento iterativo em sprints com entregas incrementais
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={3}>
                            <div className="custom-card p-4 text-center h-100">
                                <div className="mb-3"><FaStar className="text-warning" /></div>
                                <h4 className="h6 fw-bold mb-2">Clean Code</h4>
                                <p className="text-muted small mb-0">
                                    Código limpo, legível e de fácil manutenção
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={3}>
                            <div className="custom-card p-4 text-center h-100">
                                <div className="mb-3"><FaLayerGroup className="text-info" /></div>
                                <h4 className="h6 fw-bold mb-2">SOLID</h4>
                                <p className="text-muted small mb-0">
                                    Princípios de design orientado a objetos
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={3}>
                            <div className="custom-card p-4 text-center h-100">
                                <div className="mb-3"><FaSync className="text-success" /></div>
                                <h4 className="h6 fw-bold mb-2">CI/CD</h4>
                                <p className="text-muted small mb-0">
                                    Integração e deploy contínuos
                                </p>
                            </div>
                        </Col>
                    </Row>
                </motion.div>

                {/* Garantias */}
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
                        <Row>
                            <Col lg={8} className="mx-auto text-center">
                                <h3 className="h4 fw-bold mb-3">Compromisso com Qualidade</h3>
                                <p className="mb-4 opacity-90" style={{ fontSize: '1.05rem' }}>
                                    Todo projeto é desenvolvido com atenção aos detalhes, seguindo padrões da indústria
                                    e focado em entregar valor real ao negócio.
                                </p>
                                <Row className="g-3">
                                    <Col md={4}>
                                        <div className="p-3">
                                            <div className="h2 mb-2"><FaCheckCircle /></div>
                                            <p className="mb-0 small fw-semibold">Código Testado</p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="p-3">
                                            <div className="h2 mb-2"><FaCheckCircle /></div>
                                            <p className="mb-0 small fw-semibold">Documentação Completa</p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="p-3">
                                            <div className="h2 mb-2"><FaCheckCircle /></div>
                                            <p className="mb-0 small fw-semibold">Suporte Pós-Entrega</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default ProcessSection;