import { Container, Row, Card, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCode, FaArrowRight } from 'react-icons/fa';
import { projects } from '../data/projectsData';
import { Link } from 'react-router-dom';
import '../styles/project-section.css';

const ProjectSection = () => {
    return (
        <section id="projetos" className="section bg-light">
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
                        <FaCode className="text-primary me-3" />
                        Projetos
                    </h2>
                    <p className="lead text-muted">Projetos em que participei e suas tecnologias</p>
                </motion.div>

                {/* Grid de projetos */}
                <div className="projects-container">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                to={`/projetos/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-decoration-none"
                            >
                                <Card className="project-card h-100">
                                    <Card.Body className="d-flex flex-column">
                                        <h3 className="h5 fw-bold mb-2">{project.title}</h3>
                                        <p className="text-muted small mb-3">
                                            {project.description.length > 100
                                                ? `${project.description.substring(0, 100)}...`
                                                : project.description}
                                        </p>
                                        
                                        <div className="mb-3 flex-grow-1">
                                            <div className="d-flex flex-wrap gap-1">
                                                {project.technologies.slice(0, 3).map((tech, idx) => (
                                                    <Badge
                                                        key={idx}
                                                        bg="primary"
                                                        className="rounded-pill px-2 py-1 small"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                ))}
                                                {project.technologies.length > 3 && (
                                                    <Badge
                                                        bg="secondary"
                                                        className="rounded-pill px-2 py-1 small"
                                                    >
                                                        +{project.technologies.length - 3}
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center text-primary">
                                            <span className="small fw-bold">Ver detalhes</span>
                                            <FaArrowRight size={12} className="ms-2" />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-5"
                >
                    <p className="lead mb-4">
                        Interessado em trabalhar juntos em um projeto incrível?
                    </p>
                    <button
                        onClick={() => {
                            const element = document.getElementById('contato');
                            if (element) {
                                const offset = 80;
                                const elementPosition = element.getBoundingClientRect().top;
                                const offsetPosition = elementPosition + window.pageYOffset - offset;
                                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                            }
                        }}
                        className="btn btn-primary btn-lg"
                    >
                        Vamos Conversar!
                    </button>
                </motion.div>
            </Container>
        </section>
    );
};

export default ProjectSection;