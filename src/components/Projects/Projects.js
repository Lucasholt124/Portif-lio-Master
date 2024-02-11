import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spotify from "../../Assets/Projects/Captura de Tela (12).png";
import chatbatepapo from "../../Assets/Projects/Captura de Tela (14).png";
import portifolio from "../../Assets/Projects/Captura de Tela (11).png";
import calculadora from "../../Assets/Projects/Captura de Tela (9).png";
import applewhatch from "../../Assets/Projects/Captura de Tela (15).png";
import agenciadigital from "../../Assets/Projects/Captura de Tela (10).png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        Como <strong className="purple">Funciona </strong>
        </h1>
        <p style={{ color: "white" }}>
        Aqui estão alguns projetos em que trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculadora}
              isBlog={false}
              title="Calculadora"
              description="Calculadora simples com Design inovador, #calculadoranaweb, fiquem a vontade para explorar todos os meus projetos e funcionalidades, Desenvolvida com Html5, Css3 e JavaScript."
              ghLink="https://github.com/Lucasholt124/Calculadora"
              demoLink="https://calculadora-587dac.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agenciadigital}
              isBlog={false}
              title="Agência-digital"
              description="Minha Agência pessoal, desenvolvida e atualizada apenas utilizando Html5, Css3 e javaScript."
              ghLink="https://github.com/Lucasholt124/Projeto"
              demoLink="https://minhaagencia-cffaa8.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portifolio}
              isBlog={false}
              title="Portfólio"
              description="Meu antigo Portifólio falando algumas curiosidades sobre meus projetos e a mim, Desenvolvido com Html e Css"
              ghLink="https://github.com/Lucasholt124/Portifolio"
              demoLink="https://meuportifolio-96499c.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify"
              description="Copia do Front do Spotify real, desenvolvido com o html css e javascript."
              ghLink="https://github.com/Lucasholt124/Spotify" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={applewhatch}
              isBlog={false}
              title="Apple-Whatch"
              description="Copia Front da página Apple-Whatch, deselvonvido com html css e javascript."
              ghLink="https://github.com/Lucasholt124/Apple-Whatch"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbatepapo}
              isBlog={false}
              title="Chat-Bate-Papo"
              description="Chat-Bate-Papo online desenvoldido por mim, utilizando as tecnologias Html, Css ReactJS, NodeJs "
              ghLink="https://github.com/Lucasholt124/Chat-Bate-Papo"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
