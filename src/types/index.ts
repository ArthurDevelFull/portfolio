import type { IconType } from 'react-icons';

export interface Achievement {
    Icon: IconType | null;
    title: string;
    description: string;
}

export interface TechStack {
    name: string;
    level: number;
    color: string;
}

export interface Skill {
    category: string;
    items: string[];
}

export interface Project {
    title: string;
    description: string;
    features: string[];
    technologies: string[];
    highlights: string[];
}