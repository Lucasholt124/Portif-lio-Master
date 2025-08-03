import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards"; // Verifique se o nome do arquivo é ProjectCard ou ProjectCards
import Particle from "../Particle";

// 1. ESTRUTURA DE DADOS: Todas as informações dos projetos ficam aqui.
// Fácil de adicionar, remover ou editar projetos no futuro!
const projectData = [
  {
    title: "JV Peças - E-Commerce de Autopeças",
    description: "Plataforma de e-commerce completa para venda de peças de caminhão. Desenvolvida com Next.js e Tailwind, com gerenciamento de produtos via Sanity CMS e banco de dados PostgreSQL. Integração robusta de pagamentos com Asaas (PIX, Cartão e Boleto).",
    ghLink: "https://github.com/Lucasholt124/meu-sass", // Troque se o repo for outro
    demoLink: "https://www.jvpecaseacessorios.com.br/", // A URL usada para gerar a imagem
  },
  {
    title: "Loja Virtual de Roupas",
    description: "Loja virtual moderna e totalmente responsiva, construída com Next.js e Tailwind para uma interface rápida. O conteúdo é gerenciado pelo Sanity CMS e os pagamentos são processados de forma segura via Asaas.",
    ghLink: "https://github.com/Lucasholt124/Loja",
    demoLink: "https://loja-ashen-omega.vercel.app/", // A URL usada para gerar a imagem
  },
  {
    title: "ImpulsionaWeb - Landing Pages",
    description: "Serviço de criação de landing pages de alta conversão. Utiliza Next.js para performance e SEO, e integra-se com a API da Asaas para automação de cobranças e gerenciamento de assinaturas dos clientes.",
    ghLink: null, // Exemplo de projeto sem link público para o GitHub
    demoLink: "https://mysite-eog7.vercel.app/",
  },
  {
    title: "Central de Links - SaaS de Link na Bio",
    description: "SaaS completo que permite aos usuários criar uma página 'link na bio'. Construído com a T3 Stack (Next.js, tRPC), usa Convex como banco de dados real-time, Clerk para autenticação e Stripe para monetização.",
    ghLink: "https://github.com/Lucasholt124/Freelink",
    demoLink: "https://Freelinnk.com",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* Textos mais profissionais e diretos */}
        <h1 className="project-heading">
          Meus <strong className="purple">Trabalhos</strong> em Destaque
        </h1>
        <p style={{ color: "white", textAlign: "center", marginBottom: "40px" }}>
          Abaixo estão alguns dos projetos que tive o prazer de construir,
          aplicando tecnologias modernas para resolver problemas reais.
        </p>

        {/* 2. RENDERIZAÇÃO LIMPA E ANIMADA */}
        <Row className="justify-content-center g-4">
          {projectData.map((project, index) => (
            // A animação é aplicada em cada card, criando um efeito de "stagger" (um após o outro)
            <Col md={6} lg={4} className="project-card" key={index} data-aos="fade-up">
              <ProjectCard
                // 3. IMPLEMENTAÇÃO DA FEATURE:
                // Note que NÃO passamos 'imgPath'.
                // O ProjectCard usará o 'demoLink' para chamar sua API de screenshot.
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;