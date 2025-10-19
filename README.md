# 💼 Portfólio Profissional - Desenvolvedor Full Stack

[![React Router](https://img.shields.io/badge/React_Router-7.9-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

<div align="center">
  <img src="public/favicon.ico" alt="Logo" width="100" height="100">
  <p><strong>Portfólio interativo e moderno desenvolvido com React Router e TailwindCSS</strong></p>
  <p>
    <a href="https://seu-portfolio.com">Ver Demo</a>
    ·
    <a href="#-funcionalidades">Funcionalidades</a>
    ·
    <a href="#-tecnologias">Tecnologias</a>
    ·
    <a href="#-contato">Contato</a>
  </p>
</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Começando](#-começando)
- [Instalação](#-instalação)
- [Desenvolvimento](#-desenvolvimento)
- [Build e Deploy](#-build-e-deploy)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Configuração](#-configuração)
- [Contato](#-contato)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

Portfólio profissional desenvolvido para apresentar projetos, habilidades e experiências como Desenvolvedor Full Stack. O projeto foi construído com foco em performance, SEO, responsividade e experiência do usuário.

### ✨ Destaques

- 🚀 **Server-Side Rendering (SSR)** para melhor SEO e performance
- ⚡ **Hot Module Replacement (HMR)** para desenvolvimento ágil
- 🎨 **Design Moderno** com animações suaves e interface intuitiva
- 📱 **100% Responsivo** otimizado para todos os dispositivos
- 🔒 **TypeScript** para maior segurança e produtividade
- 📧 **Integração com EmailJS** para formulário de contato funcional
- 🎭 **Framer Motion** para animações fluidas e profissionais

---

## 🚀 Funcionalidades

### Seções Principais

- **Hero Section**: Apresentação impactante com animações e call-to-action
- **Sobre Mim**: Informações profissionais, experiência e objetivos
- **Habilidades**: Exibição visual de competências técnicas com barras de progresso
- **Projetos**: Showcase de projetos com detalhes, tecnologias e links
- **Recursos**: Destaques das principais características e diferenciais
- **Processo**: Metodologia de trabalho e abordagem profissional
- **Contato**: Formulário funcional integrado com EmailJS

### Funcionalidades Técnicas

- ✅ Roteamento dinâmico com React Router v7
- ✅ Páginas de detalhes de projetos individuais
- ✅ Sistema de navegação responsivo com menu mobile
- ✅ Formulário de contato com validação e envio de emails
- ✅ Animações e transições suaves com Framer Motion
- ✅ Syntax highlighting para snippets de código
- ✅ SEO otimizado com meta tags dinâmicas
- ✅ Performance otimizada com lazy loading

---

## 🛠️ Tecnologias

### Core

- **[React 19](https://react.dev/)** - Biblioteca JavaScript para interfaces
- **[React Router 7](https://reactrouter.com/)** - Roteamento e SSR
- **[TypeScript 5.9](https://www.typescriptlang.org/)** - Superset JavaScript tipado
- **[Vite 7](https://vitejs.dev/)** - Build tool e dev server

### Styling

- **[TailwindCSS 4.1](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Bootstrap 5.3](https://getbootstrap.com/)** - Framework CSS responsivo
- **[React Bootstrap 2.10](https://react-bootstrap.github.io/)** - Componentes React Bootstrap
- **[Framer Motion 12](https://www.framer.com/motion/)** - Biblioteca de animações

### Utilitários

- **[EmailJS 4.4](https://www.emailjs.com/)** - Envio de emails sem backend
- **[React Icons 5.5](https://react-icons.github.io/react-icons/)** - Biblioteca de ícones
- **[React Syntax Highlighter 15.6](https://github.com/react-syntax-highlighter/react-syntax-highlighter)** - Destacador de sintaxe
- **[Classnames 2.5](https://github.com/JedWatson/classnames)** - Utilitário para classes CSS condicionais

### DevOps

- **Docker** - Containerização
- **Node.js 20+** - Runtime JavaScript

---

## 🎬 Começando

### Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** 20.0 ou superior
- **npm** ou **yarn** ou **pnpm**
- **Git**

### Verificar versões

```bash
node --version  # v20.0.0 ou superior
npm --version   # 10.0.0 ou superior
```

---

## 📥 Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/meu-portfolio.git
cd meu-portfolio
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

> **Nota**: Obtenha suas credenciais em [EmailJS](https://www.emailjs.com/)

---

## 💻 Desenvolvimento

### Iniciar servidor de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em:
- **Local**: http://localhost:5173
- **Network**: http://192.168.x.x:5173

### Features de desenvolvimento

- ⚡ **Hot Module Replacement (HMR)** - Atualizações instantâneas
- 🔍 **TypeScript Check** - Verificação de tipos em tempo real
- 🎨 **Tailwind JIT** - Compilação just-in-time do CSS
- 📱 **Responsive Preview** - Teste em diferentes dispositivos

### Scripts disponíveis

```bash
npm run dev         # Inicia servidor de desenvolvimento
npm run build       # Cria build de produção
npm run start       # Inicia servidor de produção
npm run typecheck   # Verifica tipos TypeScript
```

---

## 🏗️ Build e Deploy

### Build para produção

```bash
npm run build
```

Isso irá gerar:

```
build/
├── client/    # Assets estáticos (HTML, CSS, JS, imagens)
└── server/    # Código server-side (SSR)
```

### Iniciar servidor de produção

```bash
npm run start
```

O servidor estará disponível na porta **3000** por padrão.

### Deploy com Docker

#### Build da imagem

```bash
docker build -t meu-portfolio .
```

#### Executar container

```bash
docker run -p 3000:3000 meu-portfolio
```

#### Docker Compose (opcional)

```yaml
version: '3.8'
services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

```bash
docker-compose up -d
```

### Plataformas de Deploy

Este projeto pode ser facilmente deployado em:

- **[Vercel](https://vercel.com/)** - Recomendado para React Router
- **[Netlify](https://www.netlify.com/)** - Deploy contínuo com Git
- **[Railway](https://railway.app/)** - Deploy de containers Docker
- **[Fly.io](https://fly.io/)** - Deploy global com CDN
- **[AWS](https://aws.amazon.com/)** - ECS, EC2, ou Amplify
- **[Google Cloud Run](https://cloud.google.com/run)** - Serverless containers
- **[Azure](https://azure.microsoft.com/)** - Container Apps ou App Service

#### Deploy Vercel (Recomendado)

```bash
npm i -g vercel
vercel
```

---

## 📁 Estrutura do Projeto

```
meu-portfolio/
├── app/                      # Código fonte principal
│   ├── routes/              # Rotas da aplicação
│   │   ├── home.tsx        # Página inicial
│   │   └── project.tsx     # Detalhes do projeto
│   ├── app.css             # Estilos globais
│   ├── root.tsx            # Componente raiz
│   └── routes.ts           # Configuração de rotas
│
├── src/                     # Componentes e utilitários
│   ├── components/         # Componentes React
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   │
│   ├── pages/              # Páginas específicas
│   │   └── ProjectDetail.tsx
│   │
│   └── data/               # Dados estáticos
│       ├── projects.ts
│       └── skills.ts
│
├── public/                  # Assets estáticos
│   ├── favicon.ico
│   └── images/
│
├── .env                     # Variáveis de ambiente
├── .gitignore              # Arquivos ignorados pelo Git
├── Dockerfile              # Configuração Docker
├── package.json            # Dependências e scripts
├── tsconfig.json           # Configuração TypeScript
├── vite.config.ts          # Configuração Vite
└── react-router.config.ts  # Configuração React Router
```

---

## ⚙️ Configuração

### TailwindCSS

O projeto usa Tailwind v4 com configuração via Vite plugin:

```typescript
// vite.config.ts
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
});
```

### React Router

Configuração de SSR e rotas:

```typescript
// react-router.config.ts
export default {
  ssr: true, // Server-Side Rendering habilitado
} satisfies Config;
```

### TypeScript

Configuração estrita para maior segurança:

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2022",
    "module": "ES2022",
    "jsx": "react-jsx"
  }
}
```

### EmailJS

Configure em `src/components/ContactSection.tsx`:

```typescript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

---

## 🎨 Customização

### Cores e Temas

As cores principais estão definidas em `app/app.css`:

```css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #8b5cf6;
  --dark-bg: #0f172a;
  --light-bg: #f8fafc;
}
```

### Adicionar Novo Projeto

Edite `src/data/projects.ts`:

```typescript
export const projects = [
  {
    id: 1,
    title: "Meu Novo Projeto",
    description: "Descrição breve",
    image: "/images/projeto.jpg",
    technologies: ["React", "Node.js"],
    features: ["Feature 1", "Feature 2"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://..."
  }
];
```

### Modificar Habilidades

Edite `src/data/skills.ts`:

```typescript
export const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 }
];
```

---

## 📞 Contato

### Desenvolvedor

**Nome**: Seu Nome
- 📧 Email: seu-email@exemplo.com
- 💼 LinkedIn: [linkedin.com/in/seu-perfil](https://linkedin.com/in/seu-perfil)
- 🐙 GitHub: [@seu-usuario](https://github.com/seu-usuario)
- 🌐 Portfolio: [seu-portfolio.com](https://seu-portfolio.com)

### Formulário de Contato

O portfólio inclui um formulário de contato funcional integrado com EmailJS. Preencha o formulário diretamente no site para entrar em contato.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. **Fork** o projeto
2. Crie sua **Feature Branch** (`git checkout -b feature/NovaFuncionalidade`)
3. **Commit** suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. **Push** para a Branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um **Pull Request**

---

## 📝 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🙏 Agradecimentos

- [React Router Team](https://reactrouter.com/) - Framework incrível
- [TailwindCSS](https://tailwindcss.com/) - Por facilitar o styling
- [EmailJS](https://www.emailjs.com/) - Integração simples de emails
- [Framer Motion](https://www.framer.com/motion/) - Animações incríveis
- Comunidade Open Source - Por todo o suporte e ferramentas

---

## 📊 Status do Projeto

![Status](https://img.shields.io/badge/Status-Ativo-success?style=for-the-badge)
![Manutenção](https://img.shields.io/badge/Manutenção-Sim-success?style=for-the-badge)
![Versão](https://img.shields.io/badge/Versão-1.0.0-blue?style=for-the-badge)

---

<div align="center">
  <p>Desenvolvido com ❤️ usando React Router</p>
  <p>© 2025 - Todos os direitos reservados</p>
</div>