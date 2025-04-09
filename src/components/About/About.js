import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
// import { motion } from "framer-motion"; // (Opcional) Para animações

function About() {
  return (
    <Container data-aos="fade-up-right" fluid className="about-section">
      <Particle />
      <Container>
        {/* Título da seção */}
        <Row data-aos="fade-up-right" className="text-center my-4">
          <Col>
            <h1 data-aos="fade-up-right" className="display-5 fw-bold">
              SAIBA QUEM <span className="purple">SOU</span>
            </h1>
          </Col>
        </Row>

        {/* Sobre + Imagem */}
        <Row data-aos="fade-up-right" className="align-items-center justify-content-center mb-5">
          <Col data-aos="fade-up-right" md={6} className="mb-4 mb-md-0">
            <AboutCard />
          </Col>
          <Col data-aos="fade-up-right" md={5} className="text-center">
            <img
              data-aos="fade-up-right"
              src={laptopImg}
              alt="Sobre mim"
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "300px", objectFit: "contain" }}
            />
          </Col>
        </Row>

        {/* Skills Técnicas */}
        <Row data-aos="fade-up-right" className="text-center my-5">
          <Col data-aos="fade-up-right">
            <h1 className="project-heading">
              Minhas <span className="purple">Skills Técnicas</span>
            </h1>
          </Col>
        </Row>
        <Techstack />

        {/* Ferramentas */}
        <Row data-aos="fade-up-right" className="text-center my-5">
          <Col data-aos="fade-up-right">
            <h1  data-aos="fade-up-right" className="project-heading">
              <span className="purple">Ferramentas</span> que utilizo
            </h1>
          </Col>
        </Row>
        <Toolstack />

        {/* Github */}
        <Github />
      </Container>
    </Container>
  );
}

export default About;
