import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheck, FaStar, FaTools } from 'react-icons/fa';
import { projects } from '../data/projectsData';

const ProjectDetail = () => {
    const { projectSlug } = useParams();
    const project = projects.find(
        p => p.title.toLowerCase().replace(/\s+/g, '-') === projectSlug
    );

    if (!project) {
        return (
            <Container className="py-5 text-center">
                <h1>Projeto não encontrado</h1>
                <Link to="/" className="btn btn-primary mt-3">
                    Voltar para Home
                </Link>
            </Container>
        );
    }

    return (
        <div className="min-vh-100 bg-light py-5">
            <Container>
                {/* Botão Voltar */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        to="/"
                        className="btn btn-outline-primary mb-4 d-inline-flex align-items-center gap-2"
                    >
                        <FaArrowLeft />
                        Voltar
                    </Link>
                </motion.div>

                {/* Cabeçalho do Projeto */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-lg shadow-sm p-5 mb-5"
                >
                    <h1 className="display-4 fw-bold mb-3">{project.title}</h1>
                    <p className="lead text-muted mb-4">{project.description}</p>
                    
                    <div className="d-flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                            <Badge
                                key={index}
                                bg="primary"
                                className="rounded-pill px-3 py-2"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </motion.div>

                <Row className="g-4">
                    {/* Funcionalidades */}
                    <Col lg={6}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-white rounded-lg shadow-sm p-4 h-100"
                        >
                            <h2 className="h4 fw-bold mb-4">
                                <FaTools className="text-primary me-2" />
                                Funcionalidades
                            </h2>
                            <ul className="list-unstyled mb-0">
                                {project.features.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                        className="mb-3 d-flex align-items-start"
                                    >
                                        <FaCheck className="text-success me-2 mt-1" />
                                        <span>{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </Col>

                    {/* Destaques */}
                    <Col lg={6}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-white rounded-lg shadow-sm p-4 h-100"
                        >
                            <h2 className="h4 fw-bold mb-4">
                                <FaStar className="text-warning me-2" />
                                Destaques
                            </h2>
                            <ul className="list-unstyled mb-0">
                                {project.highlights.map((highlight, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                        className="mb-3 d-flex align-items-start"
                                    >
                                        <FaStar className="text-warning me-2 mt-1" />
                                        <span>{highlight}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProjectDetail;