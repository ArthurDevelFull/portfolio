import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Header.css'

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = () => {
        setExpanded(false);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // Offset fixo para o header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        handleNavClick();
    };

    return (
        <>
            <Navbar 
                expand="lg" 
                fixed="top"
                expanded={expanded}
                onToggle={(expanded) => setExpanded(expanded)}
                className={`custom-navbar ${scrolled ? 'navbar-scrolled' : ''}`}
            >
                <Container>
                    <Navbar.Brand 
                        as={Link} 
                        to="/" 
                        className="navbar-brand-custom"
                        onClick={handleNavClick}
                    >
                        <span className="brand-bracket">&lt;</span>
                        <span className="brand-text">Arthur Nobrega</span>
                        <span className="brand-bracket">/&gt;</span>
                    </Navbar.Brand>

                    <Navbar.Toggle 
                        aria-controls="basic-navbar-nav" 
                        className="custom-toggler"
                    >
                        <span className="navbar-toggler-icon-custom"></span>
                    </Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-lg-center">
                            <Nav.Link 
                                onClick={() => scrollToSection('home')}
                                className="nav-link-custom"
                            >
                                Início
                            </Nav.Link>
                            <Nav.Link 
                                onClick={() => scrollToSection('sobre')}
                                className="nav-link-custom"
                            >
                                Sobre
                            </Nav.Link>
                            <Nav.Link 
                                onClick={() => scrollToSection('habilidades')}
                                className="nav-link-custom"
                            >
                                Skills
                            </Nav.Link>
                            <Nav.Link 
                                onClick={() => scrollToSection('projetos')}
                                className="nav-link-custom"
                            >
                                Projetos
                            </Nav.Link>
                            <Nav.Link 
                                onClick={() => scrollToSection('contato')}
                                className="nav-link-custom"
                            >
                                Contato
                            </Nav.Link>

                            <div className="social-links d-flex gap-3 mt-3 mt-lg-0 ms-lg-4">
                                <a 
                                    href="https://github.com/seu-usuario" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                    aria-label="GitHub"
                                >
                                    <FaGithub size={20} />
                                </a>
                                <a 
                                    href="https://linkedin.com/in/seu-perfil" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin size={20} />
                                </a>
                                <a 
                                    href="mailto:seu-email@exemplo.com"
                                    className="social-icon"
                                    aria-label="Email"
                                >
                                    <FaEnvelope size={20} />
                                </a>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;