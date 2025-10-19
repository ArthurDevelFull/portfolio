import { Container, Row, Col } from 'react-bootstrap';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaPhone, FaAward, FaRocket, FaCode, FaCheckCircle, FaBullseye } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { achievements } from '../data/projectsData';
import '../styles/AboutSection.css';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="sobre" className="section bg-light">
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
            <FaUser className="text-primary me-3" />
            Sobre Mim
          </h2>
          <p className="lead text-muted">Conheça minha trajetória e experiência</p>
        </motion.div>

        <Row className="g-4">
          {/* Coluna de informações pessoais */}
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="custom-card p-4 h-100">
                <h3 className="h4 fw-bold mb-4">
                  <FaRocket className="text-primary me-2" />
                  Informações de Contato
                </h3>

                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-start">
                    <div
                      className="bg-primary bg-opacity-10 rounded p-2 me-3"
                      style={{ minWidth: '40px' }}
                    >
                      <FaMapMarkerAlt className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="mb-0 text-muted small">Localização</p>
                      <p className="mb-0 fw-medium">{personalInfo.location}</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start">
                    <div
                      className="bg-primary bg-opacity-10 rounded p-2 me-3"
                      style={{ minWidth: '40px' }}
                    >
                      <FaEnvelope className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="mb-0 text-muted small">Email</p>
                      <p className="mb-0 fw-medium">{personalInfo.email}</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start">
                    <div
                      className="bg-primary bg-opacity-10 rounded p-2 me-3"
                      style={{ minWidth: '40px' }}
                    >
                      <FaPhone className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="mb-0 text-muted small">Telefone</p>
                      <p className="mb-0 fw-medium">{personalInfo.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-top">
                  <p className="text-muted mb-2">
                    <FaCode className="me-2 text-primary" />
                    Especialização
                  </p>
                  <p className="fw-medium mb-0">{personalInfo.subtitle}</p>
                </div>
              </div>
            </motion.div>
          </Col>

          {/* Coluna de biografia */}
          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="custom-card p-4 h-100">
                <h3 className="h4 fw-bold mb-4">
                  <FaAward className="text-primary me-2" />
                  Minha História
                </h3>
                <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  {personalInfo.bio}
                </p>

                <div className="mb-4">
                  <h4 className="h6 fw-bold text-primary mb-3">O que me diferencia?</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <FaCheckCircle className="text-success me-2" />
                      <strong>Visão Holística:</strong> Entendo o negócio além do código
                    </li>
                    <li className="mb-2">
                      <FaCheckCircle className="text-success me-2" />
                      <strong>Qualidade Técnica:</strong> Código limpo, testável e manutenível
                    </li>
                    <li className="mb-2">
                      <FaCheckCircle className="text-success me-2" />
                      <strong>Segurança Proativa:</strong> Proteção em todas as camadas
                    </li>
                    <li className="mb-2">
                      <FaCheckCircle className="text-success me-2" />
                      <strong>Performance:</strong> Soluções otimizadas e escaláveis
                    </li>
                    <li className="mb-2">
                      <FaCheckCircle className="text-success me-2" />
                      <strong>Comunicação:</strong> Documentação clara e trabalho em equipe
                    </li>
                  </ul>
                </div>

                <div className="alert alert-info mb-0">
                  <p className="mb-0">
                    <strong><FaBullseye className="text-primary me-1" /> Filosofia:</strong> Tecnologia é meio, não fim. O objetivo é criar
                    soluções que resolvem problemas reais e agregam valor tangível ao negócio.
                  </p>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* Grid de conquistas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-5"
        >
          <h3 className="h4 fw-bold text-center mb-4">Conquistas e Destaques</h3>
          <Row className="g-4 achievements-grid">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.Icon;
              return (
                <Col key={index} className="achievement-col">
                  <motion.div variants={itemVariants} className="h-100">
                    <div className="custom-card p-4 text-center h-100 achievement-card">
                      <div className="display-4 mb-3">
                        {IconComponent && <IconComponent className="text-primary" />}
                      </div>
                      <h4 className="h6 fw-bold mb-2">{achievement.title}</h4>
                      <p className="text-muted small mb-0">{achievement.description}</p>
                    </div>
                  </motion.div>
                </Col>
              );
            })}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutSection;