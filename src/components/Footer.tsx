import { Container, Row, Col } from 'react-bootstrap';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
        <footer className="bg-dark text-white position-relative">
            {/* Botão scroll to top */}
            <button
                onClick={scrollToTop}
                className="btn btn-primary rounded-circle position-absolute d-flex align-items-center justify-content-center"
                style={{
                    width: '50px',
                    height: '50px',
                    top: '-25px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                }}
                aria-label="Voltar ao topo"
            >
                <FaArrowUp size={20} />
            </button>

            <Container className="py-5">
                <Row className="g-4">
                    {/* Coluna sobre */}
                    <Col lg={4}>
                        <h3 className="h5 fw-bold mb-3 text-gradient">Sobre</h3>
                        <p className="text-white-50 mb-3">
                            Desenvolvedor Full Stack apaixonado por criar soluções tecnológicas
                            que fazem a diferença. Especializado em sistemas empresariais complexos.
                        </p>
                        <div className="d-flex gap-3">
                            <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center"
                                style={{ width: '40px', height: '40px' }}
                            >
                                <FaGithub size={18} />
                            </a>
                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center"
                                style={{ width: '40px', height: '40px' }}
                            >
                                <FaLinkedin size={18} />
                            </a>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center"
                                style={{ width: '40px', height: '40px' }}
                            >
                                <FaEnvelope size={18} />
                            </a>
                        </div>
                    </Col>

                    {/* Coluna links rápidos */}
                    <Col lg={4}>
                        <h3 className="h5 fw-bold mb-3 text-gradient">Links Rápidos</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a
                                    href="#sobre"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection('sobre');
                                    }}
                                    className="text-white-50 text-decoration-none d-inline-block"
                                    style={{ transition: 'all 0.3s ease' }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = '#fff';
                                        e.currentTarget.style.paddingLeft = '8px';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                                        e.currentTarget.style.paddingLeft = '0';
                                    }}
                                >
                                    ▸ Sobre Mim
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#habilidades"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection('habilidades');
                                    }}
                                    className="text-white-50 text-decoration-none d-inline-block"
                                    style={{ transition: 'all 0.3s ease' }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = '#fff';
                                        e.currentTarget.style.paddingLeft = '8px';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                                        e.currentTarget.style.paddingLeft = '0';
                                    }}
                                >
                                    ▸ Habilidades
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#projeto"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection('projeto');
                                    }}
                                    className="text-white-50 text-decoration-none d-inline-block"
                                    style={{ transition: 'all 0.3s ease' }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = '#fff';
                                        e.currentTarget.style.paddingLeft = '8px';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                                        e.currentTarget.style.paddingLeft = '0';
                                    }}
                                >
                                    ▸ Expertise
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#projetos"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection('projetos');
                                    }}
                                    className="text-white-50 text-decoration-none d-inline-block"
                                    style={{ transition: 'all 0.3s ease' }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = '#fff';
                                        e.currentTarget.style.paddingLeft = '8px';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                                        e.currentTarget.style.paddingLeft = '0';
                                    }}
                                >
                                    ▸ Projetos
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#servicos"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection('servicos');
                                    }}
                                    className="text-white-50 text-decoration-none d-inline-block"
                                    style={{ transition: 'all 0.3s ease' }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = '#fff';
                                        e.currentTarget.style.paddingLeft = '8px';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                                        e.currentTarget.style.paddingLeft = '0';
                                    }}
                                >
                                    ▸ Serviços
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#contato"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection('contato');
                                    }}
                                    className="text-white-50 text-decoration-none d-inline-block"
                                    style={{ transition: 'all 0.3s ease' }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = '#fff';
                                        e.currentTarget.style.paddingLeft = '8px';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                                        e.currentTarget.style.paddingLeft = '0';
                                    }}
                                >
                                    ▸ Contato
                                </a>
                            </li>
                        </ul>
                    </Col>

                    {/* Coluna contato */}
                    <Col lg={4}>
                        <h3 className="h5 fw-bold mb-3 text-gradient">Contato</h3>
                        <ul className="list-unstyled text-white-50">
                            <li className="mb-2">
                                <FaEnvelope className="me-2 text-primary" />
                                {personalInfo.email}
                            </li>
                            <li className="mb-2">
                                <FaEnvelope className="me-2 text-primary" />
                                {personalInfo.phone}
                            </li>
                            <li className="mb-2">
                                <FaEnvelope className="me-2 text-primary" />
                                {personalInfo.location}
                            </li>
                        </ul>
                        <div className="mt-4 p-3 bg-white bg-opacity-10 rounded">
                            <p className="mb-0 small">
                                <strong className="text-white">Disponível para novos projetos!</strong>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Bottom bar */}
            <div className="border-top border-white border-opacity-10">
                <Container>
                    <div className="py-4 text-center text-white-50">
                        <p className="mb-0">
                            © {currentYear} {personalInfo.name}
                        </p>
                    </div>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;