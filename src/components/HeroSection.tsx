import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaCode, FaRocket, FaEnvelope, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import arthurImage from '../assets/images/Arthur.jpg';

const HeroSection = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <section
            id="home"
            className="bg-gradient-multi text-white position-relative overflow-hidden"
            style={{
                minHeight: '100vh',
                paddingTop: '120px',
                paddingBottom: '80px',
            }}
        >
            {/* Background decorativo */}
            <div className="position-absolute w-100 h-100 top-0 start-0 opacity-10">
                <div
                    className="position-absolute"
                    style={{
                        width: '500px',
                        height: '500px',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
                        top: '-200px',
                        right: '-200px',
                        borderRadius: '50%',
                    }}
                />
                <div
                    className="position-absolute"
                    style={{
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)',
                        bottom: '-150px',
                        left: '-150px',
                        borderRadius: '50%',
                    }}
                />
            </div>

            <Container className="position-relative">
                <Row className="align-items-center">
                    <Col lg={8} className="mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Badge de status */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="mb-4"
                            >
                                <span className="badge bg-white bg-opacity-25 px-4 py-2 rounded-pill">
                                    <FaCode className="me-2" />
                                    Desenvolvedor Full Stack
                                </span>
                            </motion.div>

                            {/* Seção com imagem e textos principais */}
                            <div className="d-flex align-items-center justify-content-center gap-4 mb-4">
                                {/* Imagem */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    <img
                                        src={arthurImage}
                                        alt={personalInfo.name}
                                        style={{
                                            width: '200px',
                                            height: '200px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            border: '4px solid rgba(255,255,255,0.3)',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                        }}
                                    />
                                </motion.div>

                                {/* Textos principais */}
                                <div className="text-start">
                                    {/* Título principal */}
                                    <motion.h1
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        className="display-1 fw-bold mb-2"
                                        style={{ lineHeight: '1.2' }}
                                    >
                                        {personalInfo.name}
                                    </motion.h1>

                                    {/* Subtítulo */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        className="lead fs-3 mb-2 opacity-90"
                                    >
                                        {personalInfo.title}
                                    </motion.p>

                                    {/* Descrição */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.5 }}
                                        className="fs-5 mb-0 opacity-75"
                                    >
                                        {personalInfo.subtitle}
                                    </motion.p>
                                </div>
                            </div>

                            {/* Botões de ação */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="d-flex gap-3 justify-content-center flex-wrap mt-5"
                            >
                                <Button
                                    size="lg"
                                    variant="light"
                                    className="px-5 py-3 rounded-pill fw-semibold shadow-lg"
                                    onClick={() => scrollToSection('projeto')}
                                    style={{
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                                    }}
                                >
                                    <FaRocket className="me-2" />
                                    Ver Projetos
                                </Button>

                                <Button
                                    size="lg"
                                    variant="outline-light"
                                    className="px-5 py-3 rounded-pill fw-semibold"
                                    onClick={() => scrollToSection('contato')}
                                    style={{
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }}
                                >
                                    <FaEnvelope className="me-2" />
                                    Entrar em Contato
                                </Button>
                            </motion.div>

                            {/* Links sociais */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="mt-5 pt-4 border-top border-white border-opacity-25"
                            >
                                <p className="mb-3 opacity-75">Encontre-me em:</p>
                                <div className="d-flex gap-3 justify-content-center">
                                    <a
                                        href={personalInfo.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline-light btn-lg rounded-circle d-flex align-items-center justify-content-center"
                                        style={{ width: '56px', height: '56px' }}
                                    >
                                        <FaGithub size={24} />
                                    </a>
                                    <a
                                        href={personalInfo.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline-light btn-lg rounded-circle d-flex align-items-center justify-content-center"
                                        style={{ width: '56px', height: '56px' }}
                                    >
                                        <FaCode size={24} />
                                    </a>
                                </div>

                                {/* Scroll indicator */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
                                    className="mt-4"
                                >
                                    <div className="text-center">
                                        <p className="mb-2 opacity-75 small">Role para baixo</p>
                                        <div className="animate-bounce">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;