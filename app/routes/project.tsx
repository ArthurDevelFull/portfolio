import { useParams, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import ProjectDetail from '../../src/pages/ProjectDetail';

export default function ProjectRoute() {
    return <ProjectDetail />;
}

export function meta() {
    return [
        { title: "Detalhes do Projeto - Portfólio" },
        { name: "description", content: "Detalhes completos do projeto, incluindo tecnologias, funcionalidades e destaques." }
    ];
}