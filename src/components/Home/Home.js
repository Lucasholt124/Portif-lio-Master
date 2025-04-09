import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section id="home">
      <Container data-aos="fade-right" fluid className="home-section">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 className="heading mb-3">
                Olá!{" "}
                <span data-aos="fade-right" className="wave" role="img" aria-label="wave">
                  👋🏻
                </span>
              </h1>

              <h1 data-aos="fade-right" className="heading-name">
                Eu sou <strong className="main-name">Lucas Aragão</strong>
              </h1>

              <div data-aos="fade-right" style={{ paddingTop: 30, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} className="text-center">
              <img
                data-aos="fade-right"
                src={homeLogo}
                alt="Desenvolvedor Front-End"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
