// Dados pessoais
export const personalInfo = {
  name: "Arthur Nobrega",
  title: "Desenvolvedor Full Stack & Arquiteto de Infraestrutura",
  subtitle: "Transformando ideias complexas em soluções eficientes e impactantes",
  location: "João Pessoa, Paraíba, Brasil",
  email: "develfullstack.arthur@gmail.com",
  phone: "+55 (83) 97601-3341",
  github: "https://github.com/ARTHURNOBREGA1268",
  linkedin: "https://www.linkedin.com/in/arthur-n%C3%B3brega-061193265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  bio: "Desde cedo me encontrei no mundo da tecnologia com uma curiosidade insaciável por entender como as coisas funcionam e como poderiam ser melhoradas. Sou desenvolvedor Fullstack com experiência sólida em backend, frontend, automação e infraestrutura de servidores. Meu foco é construir soluções escaláveis, eficientes e inteligentes que realmente façam diferença, sempre mantendo o equilíbrio entre o humano e o tecnológico.",
};

// Stack tecnológico
export const techStack = {
  frontend: [
    { name: "React", level: 95, color: "#61dafb" },
    { name: "React Native", level: 90, color: "#61dafb" },
    { name: "TypeScript", level: 90, color: "#3178c6" },
    { name: "JavaScript", level: 95, color: "#f7df1e" },
    { name: "Sass/SCSS", level: 85, color: "#cc6699" },
    { name: "Bootstrap", level: 90, color: "#7952b3" },
    { name: "Componentização", level: 95, color: "#ec5990" },
  ],
  backend: [
    { name: "Node.js", level: 95, color: "#339933" },
    { name: "NestJS", level: 90, color: "#e0234e" },
    { name: "Express", level: 90, color: "#000000" },
    { name: "Sequelize ORM", level: 90, color: "#52b0e7" },
    { name: "RESTful APIs", level: 95, color: "#009688" },
    { name: "Automação", level: 95, color: "#d63aff" },
  ],
  infrastructure: [
    { name: "Docker", level: 90, color: "#2496ed" },
    { name: "NGINX", level: 85, color: "#009639" },
    { name: "SSL/HTTPS", level: 85, color: "#ffb100" },
    { name: "Linux (Debian/Ubuntu)", level: 90, color: "#e95420" },
    { name: "CI/CD", level: 85, color: "#2088ff" },
    { name: "Monitoramento", level: 90, color: "#f05032" },
  ],
  database: [
    { name: "PostgreSQL", level: 95, color: "#336791" },
    { name: "Database Design", level: 90, color: "#f29111" },
    { name: "Performance", level: 90, color: "#4479a1" },
    { name: "Migrations", level: 85, color: "#ff6b6b" },
  ],
};

// Projeto principal
export const mainProject = {
  name: "Dr. Carango",
  subtitle: "Sistema de Gestão Automotiva",
  description: "Sistema SaaS completo para gestão de oficinas automotivas com agendamentos, controle de estoque, vendas e financeiro.",
  image: "/images/dr-carango-preview.png", // Adicionar depois
  technologies: ["React", "Node.js", "PostgreSQL", "Express", "Sequelize", "Bootstrap", "JWT"],
  highlights: [
    "75+ migrações de banco de dados otimizadas",
    "61 tabelas inter-relacionadas",
    "Sistema de autenticação triplo (JWT + Session + Parceiro)",
    "Calendário interativo com FullCalendar",
    "Sistema de créditos e débitos",
    "Gestão multinível de usuários",
    "Dashboard com métricas em tempo real",
    "Controle avançado de estoque",
  ],
  metrics: {
    tables: 61,
    migrations: 75,
    apiEndpoints: 120,
    components: 50,
    linesOfCode: 25000,
  },
  architecture: {
    backend: "Node.js + Express + Sequelize",
    frontend: "React + TypeScript + Bootstrap",
    database: "PostgreSQL com triggers e stored procedures",
    security: "JWT + Criptografia AES-GCM + Rotação de chaves",
  },
};

// Competências técnicas detalhadas
export const technicalSkills = [
  {
    category: "Arquitetura de Software",
    rating: 5,
    skills: [
      "Design de sistemas escaláveis",
      "Modelagem de banco de dados complexa",
      "RESTful API design",
      "Microserviços",
      "Clean Architecture",
      "SOLID Principles",
    ],
  },
  {
    category: "Backend Development",
    rating: 5,
    skills: [
      "Node.js + Express",
      "Sequelize ORM",
      "PostgreSQL avançado",
      "Triggers e Stored Procedures",
      "Transaction Management",
      "Error Handling Patterns",
    ],
  },
  {
    category: "Frontend Development",
    rating: 5,
    skills: [
      "React + TypeScript",
      "React Hooks avançados",
      "React Router v7",
      "Form validation (React Hook Form + Yup)",
      "State Management",
      "Performance Optimization",
    ],
  },
  {
    category: "Segurança",
    rating: 5,
    skills: [
      "JWT Authentication",
      "Criptografia AES-GCM",
      "Key Rotation",
      "SQL Injection Prevention",
      "XSS Protection",
      "CORS Configuration",
    ],
  },
  {
    category: "DevOps & Tools",
    rating: 4,
    skills: [
      "Git & GitHub",
      "Docker",
      "CI/CD",
      "Environment Management",
      "Logging & Monitoring",
      "Database Migrations",
    ],
  },
];

// Conquistas e métricas
export const achievements = [
  {
    title: "Sistema Empresarial Completo",
    description: "Desenvolvido sistema SaaS do zero com 25.000+ linhas de código",
    icon: "FaTrophy",
  },
  {
    title: "Arquitetura Escalável",
    description: "Design de banco com 61 tabelas e relacionamentos complexos",
    icon: "🏗️",
  },
  {
    title: "Segurança Robusta",
    description: "Implementação de múltiplas camadas de segurança e criptografia",
    icon: "🔒",
  },
  {
    title: "Performance Otimizada",
    description: "Queries SQL otimizadas e sistema de cache eficiente",
    icon: "FaBolt",
  },
  {
    title: "Clean Code",
    description: "Código organizado seguindo best practices da indústria",
    icon: "FaStar",
  },
  {
    title: "UX Excepcional",
    description: "Interface intuitiva e responsiva com ótima experiência do usuário",
    icon: "FaPalette",
  },
];

// Features implementadas
export const features = [
  {
    title: "Sistema de Autenticação Completo",
    description: "Autenticação tripla com JWT, recuperação de senha, verificação de email e múltiplos níveis de acesso",
    technologies: ["JWT", "Bcrypt", "Email Service"],
  },
  {
    title: "Calendário Interativo",
    description: "Agendamentos com drag & drop, visualização multi-recurso, validação de horários em tempo real",
    technologies: ["FullCalendar", "React", "Real-time Updates"],
  },
  {
    title: "Sistema de Créditos/Débitos",
    description: "Controle financeiro completo com rastreamento de movimentações, saldos e validade de créditos",
    technologies: ["PostgreSQL", "Triggers", "Transactions"],
  },
  {
    title: "Gestão de Vendas",
    description: "Sistema completo com múltiplos tipos de pagamento, parcelamento e geração de documentos",
    technologies: ["Node.js", "PDF Generation", "Email"],
  },
  {
    title: "Controle de Estoque Avançado",
    description: "Gestão de estoque com lotes, validade, movimentações e alertas de reposição",
    technologies: ["PostgreSQL", "Real-time Updates"],
  },
  {
    title: "Dashboard com Métricas",
    description: "Visualização de KPIs, gráficos interativos e relatórios customizáveis",
    technologies: ["Recharts", "React", "Data Aggregation"],
  },
];

// Código de exemplo (highlights)
export const codeExamples = [
  {
    title: "Sistema de Transações com Rollback",
    language: "javascript",
    code: `// Transaction wrapper com tratamento robusto de erros
const withTransaction = (handler) => async (req, res) => {
  const t = await sequelize.transaction();
  try {
    await handler(req, res, t);
    await t.commit();
  } catch (erro) {
    await t.rollback();
    
    // Tratamento inteligente de erros
    const statusCode = erro.statusCode || 500;
    const mensagem = erro.mensagemUsuario || 'Erro interno';
    
    // Log para auditoria
    logger.error('Erro na transação', {
      erro: erro.message,
      stack: erro.stack,
      usuario: req.usuario?.id
    });
    
    res.status(statusCode).json({ mensagem, detalhes: erro.message });
  }
};`,
  },
  {
    title: "Validação Dinâmica de Formulários",
    language: "javascript",
    code: `// Schema Yup com validação condicional
const agendamentoSchema = yup.object().shape({
  clienteId: yup.number().required("Cliente é obrigatório"),
  servicoId: yup.number().required("Serviço é obrigatório"),
  
  // Validação condicional baseada em contexto
  divisaoId: yup.number().when('servicoTipo', {
    is: 'agendavel',
    then: (schema) => schema.required("Divisão obrigatória para serviços agendáveis"),
    otherwise: (schema) => schema.notRequired()
  }),
  
  // Validação cross-field
  horaFim: yup.string()
    .required("Hora de término obrigatória")
    .test('hora-maior', 'Hora fim deve ser maior que início', function(value) {
      const { horaInicio } = this.parent;
      return value > horaInicio;
    })
});`,
  },
  {
    title: "Criptografia AES-GCM Segura",
    language: "javascript",
    code: `// Sistema de criptografia com rotação de chaves
const encryptData = (data) => {
  const algorithm = 'aes-256-gcm';
  const key = deriveKey(MASTER_KEY, SALT);
  const iv = crypto.randomBytes(12);
  
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  
  let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  const authTag = cipher.getAuthTag();
  
  return {
    encrypted,
    iv: iv.toString('hex'),
    authTag: authTag.toString('hex'),
    version: getCurrentKeyVersion()
  };
};`,
  },
];

// Linha do tempo de desenvolvimento
export const timeline = [
  {
    period: "Fase 1 - Planejamento",
    duration: "2 semanas",
    achievements: [
      "Modelagem completa do banco de dados",
      "Definição da arquitetura do sistema",
      "Escolha das tecnologias",
      "Criação de wireframes",
    ],
  },
  {
    period: "Fase 2 - Backend Core",
    duration: "4 semanas",
    achievements: [
      "75+ migrações de banco de dados",
      "Sistema de autenticação completo",
      "APIs RESTful implementadas",
      "Sistema de transações e triggers",
    ],
  },
  {
    period: "Fase 3 - Frontend Core",
    duration: "4 semanas",
    achievements: [
      "Componentes React reutilizáveis",
      "Integração com APIs",
      "Sistema de formulários com validação",
      "Interface responsiva",
    ],
  },
  {
    period: "Fase 4 - Features Avançadas",
    duration: "6 semanas",
    achievements: [
      "Calendário interativo com FullCalendar",
      "Sistema de créditos/débitos",
      "Dashboard com métricas",
      "Controle de estoque avançado",
    ],
  },
  {
    period: "Fase 5 - Segurança & Otimização",
    duration: "3 semanas",
    achievements: [
      "Criptografia AES-GCM implementada",
      "Otimização de queries SQL",
      "Sistema de auditoria completo",
      "Testes e correções",
    ],
  },
];

// Depoimentos (opcional)
export const testimonials = [
  {
    name: "Cliente/Empresa",
    role: "CEO",
    text: "Excelente trabalho! O sistema superou nossas expectativas.",
    avatar: "/images/avatar1.png",
  },
];

// Contato
export const contact = {
  email: "seu.email@exemplo.com",
  phone: "+55 (83) 9xxxx-xxxx",
  location: "João Pessoa, PB",
  availability: "Disponível para novos projetos",
  preferredContact: "Email ou LinkedIn",
};