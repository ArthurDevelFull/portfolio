import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { 
    FaReact, 
    FaNodeJs, 
    FaDatabase,
    FaDocker,
    FaCloud,
    FaGithub
} from 'react-icons/fa';
import { DiRedis } from 'react-icons/di';
import { motion } from 'framer-motion';
import '../styles/SkillsSection.css';

const SkillsSection = () => {
    const skills = [
        {
            icon: FaReact,
            name: "React & React Native",
            description: "Desenvolvimento de interfaces modernas e responsivas com foco em performance e reusabilidade",
            tags: ["Components", "Hooks", "Redux", "Mobile"]
        },
        {
            icon: FaNodeJs,
            name: "Node.js",
            description: "APIs RESTful e microsserviços com foco em escalabilidade e performance",
            tags: ["Express", "NestJS", "Microservices"]
        },
        {
            icon: FaDatabase,
            name: "PostgreSQL",
            description: "Design de schemas complexos e otimização de queries",
            tags: ["Complex Queries", "Indexing", "Performance"]
        },
        {
            icon: DiRedis,
            name: "Redis",
            description: "Cache e gerenciamento de sessões em tempo real",
            tags: ["Caching", "Pub/Sub", "Sessions"]
        },
        {
            icon: FaDocker,
            name: "Containers",
            description: "Containerização e orquestração de aplicações",
            tags: ["Docker", "Kubernetes", "Docker Compose"]
        },
        {
            icon: FaCloud,
            name: "Cloud Services",
            description: "Arquitetura e deploy de aplicações em nuvem",
            tags: ["AWS", "Azure", "GCP"]
        },
        {
            icon: FaGithub,
            name: "CI/CD",
            description: "Automação de deploy e garantia de qualidade",
            tags: ["GitHub Actions", "Jenkins", "Testing"]
        }
    ];

    return (
        <section id="habilidades" className="section bg-white">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-5"
                >
                    <h2 className="display-4 fw-bold mb-3">
                        <FaReact className="text-primary me-3" />
                        Competências Técnicas
                    </h2>
                    <p className="lead text-muted">Especialidades e tecnologias dominadas</p>
                </motion.div>

                <Carousel
                    indicators={false}
                    controls={false}
                    interval={5000}
                    className="skills-carousel"
                >
                    {Array.from({ length: Math.ceil(skills.length / 3) }).map((_, slideIndex) => (
                        <Carousel.Item key={slideIndex}>
                            <Row className="g-4 justify-content-center px-4">
                                {skills.slice(slideIndex * 3, (slideIndex + 1) * 3).map((skill, index) => (
                                    <Col key={index} md={4}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            style={{ width: '100%', height: '100%' }}
                                        >
                                            <Card className="h-100 shadow-sm border-0" style={{ height: '280px' }}>
                                                <Card.Body className="p-4 d-flex flex-column">
                                                    <div className="d-flex align-items-center mb-3">
                                                        {skill.icon && (
                                                            <div className="skill-icon-wrapper me-3">
                                                                <skill.icon className="text-primary h3 mb-0" />
                                                            </div>
                                                        )}
                                                        <h5 className="card-title fw-bold mb-0">{skill.name}</h5>
                                                    </div>
                                                    <p className="card-text text-muted mb-3 flex-grow-1">{skill.description}</p>
                                                    <div className="d-flex flex-wrap gap-2">
                                                        {skill.tags.map((tag, idx) => (
                                                            <span key={idx} className="badge bg-primary bg-opacity-10 text-primary">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </motion.div>
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                    ))}
                </Carousel>



                {/* Estatísticas rápidas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-5"
                >
                    <Row className="text-center g-4">
                        <Col md={3} sm={6}>
                            <div className="p-4">
                                <h3 className="display-4 fw-bold text-primary mb-2">6+</h3>
                                <p className="text-muted mb-0">Projetos SaaS</p>
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <div className="p-4">
                                <h3 className="display-4 fw-bold text-success mb-2">30+</h3>
                                <p className="text-muted mb-0">Tecnologias Dominadas</p>
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <div className="p-4">
                                <h3 className="display-4 fw-bold text-info mb-2">100+</h3>
                                <p className="text-muted mb-0">Automações Criadas</p>
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <div className="p-4">
                                <h3 className="display-4 fw-bold text-warning mb-2">10+</h3>
                                <p className="text-muted mb-0">Servidores Gerenciados</p>
                            </div>
                        </Col>
                    </Row>
                </motion.div>
            </Container>
        </section>
    );
};

export default SkillsSection;