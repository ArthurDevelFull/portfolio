import type { Route } from "./+types/home";
import Header from "../../src/components/Header";
import HeroSection from "../../src/components/HeroSection";
import AboutSection from "../../src/components/AboutSection";
import SkillsSection from "../../src/components/SkillsSection";
import ProjectSection from "../../src/components/ProjectSection";
import FeaturesSection from "../../src/components/FeaturesSection";
import ProcessSection from "../../src/components/ProcessSection";
import ContactSection from "../../src/components/ContactSection";
import Footer from "../../src/components/Footer";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Arthur Nobrega" },
    { name: "description", content: "Desenvolvedor Full Stack Sênior especializado em criar soluções tecnológicas escaláveis, seguras e de alta performance" },
    { name: "keywords", content: "desenvolvedor full stack, react, node.js, postgresql, typescript, arquitetura de software" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <FeaturesSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </>
  );
}