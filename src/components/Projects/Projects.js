import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ImagemSite from "../../Assets/Projects/ImagemSite.png";
import ImagemSite1 from "../../Assets/Projects/ImagemSite1.png";

function Projects() {
  return (
    <Container data-aos="fade-down-right" fluid className="project-section">
      <Particle />
      <Container>
        <h1 data-aos="fade-down-right" className="project-heading">
          Como <strong className="purple">Funciona</strong>
        </h1>
        <p style={{ color: "white", marginBottom: "40px" }}>
          Aqui estão dois sistemas completos de E-commerce que desenvolvi. Clique para explorar detalhes.
        </p>

        <Row className="justify-content-center g-4">
          <Col md={6} lg={4} className="project-card" data-aos="zoom-out-down">
            <ProjectCard
              data-aos="fade-down-right"
              imgPath={ImagemSite}
              title="E-Commerce de Peças de Caminhão"
              description="Feito com Next.js 15, React 19, Tailwind, Prisma, PostgreSQL, Sanity e Asaas (PIX, cartão, boleto)."
              ghLink="https://github.com/Lucasholt124/meu-sass"
              demoLink="https://meu-sass.vercel.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card" data-aos="zoom-out-down">
            <ProjectCard
              data-aos="fade-down-right"
              imgPath={ImagemSite1}
              title="Loja Virtual de Autopeças"
              description="Loja responsiva com Next.js, Tailwind, Sanity CMS e integração com pagamentos via Asaas."
              ghLink="https://github.com/Lucasholt124/Loja"
              demoLink="https://loja-ashen-omega.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
