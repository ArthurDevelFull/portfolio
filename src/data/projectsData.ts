import { FaServer, FaRocket, FaCogs, FaShieldAlt } from 'react-icons/fa';
import type { Achievement, Project, Skill } from '../types';

export const projects: Project[] = [
    {
        title: "Plataforma MVNO",
        description: "Plataforma de gerenciamento de operadora virtual (MVNO) para gerenciar usuários, planos, serviços e integração completa de frontend e backend.",
        features: [
            "Gerenciamento completo de assinaturas e planos",
            "Containers isolados com Docker",
            "Segurança via HTTPS",
            "Arquitetura escalável",
            "Integração completa frontend/backend"
        ],
        technologies: [
            "React",
            "Node.js",
            "NestJS",
            "PostgreSQL",
            "Docker",
            "HTTPS"
        ],
        highlights: [
            "Arquitetura modular e escalável",
            "Sistema completo de gestão de assinaturas",
            "Alta segurança e isolamento de serviços"
        ]
    },
    {
        title: "DrCarango",
        description: "Sistema inspirado no iFood para setor automotivo, focado na gestão de oficinas, agendamentos, ordens de serviço e parceiros.",
        features: [
            "Gestão de oficinas e agendamentos",
            "Sistema de ordens de serviço",
            "Produtos e serviços compostos",
            "Combos e pacotes reutilizáveis",
            "Controle de estoque e faturamento"
        ],
        technologies: [
            "React",
            "Node.js",
            "PostgreSQL",
            "Sequelize",
            "Docker"
        ],
        highlights: [
            "Hierarquia complexa de itens",
            "Integração de múltiplas tabelas",
            "Lógica avançada de estoque"
        ]
    },
    {
        title: "Framework de Gateway de Pagamentos",
        description: "Framework para integração de sistemas financeiros, facilitando a integração de APIs de pagamento com foco em segurança e escalabilidade.",
        features: [
            "Integração com múltiplas APIs de pagamento",
            "Sistema modular e extensível",
            "Controle completo de transações",
            "Alta segurança em processos financeiros"
        ],
        technologies: [
            "Node.js",
            "APIs REST",
            "Sistemas de Pagamento"
        ],
        highlights: [
            "Arquitetura modular",
            "Alta segurança em transações",
            "Fácil integração com novos serviços"
        ]
    },
    {
        title: "Plataforma de Anúncios em Totens",
        description: "Plataforma de exibição de anúncios geolocalizados permitindo que clientes escolham regiões específicas para publicação automática.",
        features: [
            "Seleção geolocalizada de anúncios",
            "Automação do processo de publicação",
            "Gerenciamento de planos",
            "Painel web de controle",
            "Escalabilidade tipo AWS"
        ],
        technologies: [
            "Node.js",
            "React",
            "Docker",
            "Automações customizadas"
        ],
        highlights: [
            "Sistema de geolocalização avançado",
            "Automação completa de processos",
            "Interface intuitiva de gerenciamento"
        ]
    },
    {
        title: "TV 3.0",
        description: "Sistema de TV privada com fluxo de vídeo multicast, permitindo transmissão de conteúdo personalizado via RTMP para m3u8.",
        features: [
            "Transmissão via OBS",
            "Conversão RTMP para m3u8",
            "Distribuição multicast UDP",
            "Streaming seguro",
            "Gerenciamento em tempo real"
        ],
        technologies: [
            "OBS",
            "RTMP",
            "m3u8",
            "Multicast UDP",
            "Linux",
            "Streaming"
        ],
        highlights: [
            "Sistema modular e escalável",
            "Streaming em tempo real",
            "Distribuição eficiente via multicast"
        ]
    },
    {
        title: "Automação e Monitoramento de Servidores",
        description: "Sistema de scripts e dashboards para monitoramento de infraestrutura, com geração de alertas e relatórios automáticos.",
        features: [
            "Alertas via Telegram",
            "Relatórios HTML de auditoria",
            "Monitoramento completo de recursos",
            "Deploy automatizado via CI/CD"
        ],
        technologies: [
            "Bash",
            "Prometheus",
            "Grafana",
            "Docker",
            "Telegram API"
        ],
        highlights: [
            "Monitoramento em tempo real",
            "Automação completa de relatórios",
            "Sistema robusto de alertas"
        ]
    }
];

export const achievements: Achievement[] = [
  {
    Icon: FaServer,
    title: "Infraestrutura Robusta",
    description: "Scripts avançados de monitoramento e automação de servidores com alertas via Telegram e relatórios HTML.",
  },
  {
    Icon: FaRocket,
    title: "Projetos Escaláveis",
    description: "Desenvolvimento de sistemas SaaS complexos com foco em performance e usabilidade.",
  },
  {
    Icon: FaCogs,
    title: "Automação Inteligente",
    description: "Criação de fluxos automatizados que reduzem tarefas manuais e otimizam recursos.",
  },
  {
    Icon: FaShieldAlt,
    title: "Segurança & DevOps",
    description: "Implementação de práticas seguras de desenvolvimento e CI/CD com GitHub Actions.",
  },
];

export const skills = [
  {
    category: "Desenvolvimento",
    items: [
      "Arquitetura de sistemas distribuídos",
      "APIs RESTful e WebSockets",
      "Frontend responsivo e otimizado",
      "Mobile com React Native",
      "Automação de processos",
    ],
  },
  {
    category: "Infraestrutura",
    items: [
      "Containerização com Docker",
      "Proxy reverso e SSL",
      "Monitoramento de servidores",
      "CI/CD e automação",
      "Linux e shell scripting",
    ],
  },
  {
    category: "Metodologia",
    items: [
      "Clean Code e SOLID",
      "Versionamento Git avançado",
      "Documentação técnica",
      "Code review",
      "Mentoria técnica",
    ],
  },
  {
    category: "Soft Skills",
    items: [
      "Aprendizado contínuo",
      "Resolução de problemas",
      "Comunicação clara",
      "Organização e disciplina",
      "Visão estratégica",
    ],
  },
];
