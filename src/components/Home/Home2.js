import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Projects/WhatsApp Image 2024-02-09 at 12.31.24.jpeg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container data-aos="fade-right" fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col data-aos="fade-right" md={8} className="home-about-description">
            <h1 data-aos="fade-right" style={{ fontSize: "2.6em" }}>
              DEIXE-ME <span className="purple">APRESENTAR-ME</span>
            </h1>
            <p className="home-about-body">
              Me identifico com a programação <b className="purple">Front-End</b>.
              <br />
              <br />
              Sou fluente nos clássicos como{" "}
              <i>
                <b className="purple">HTML, CSS e JavaScript</b>
              </i>.
              <br />
              <br />
              Minha área de interesse está na construção de{" "}
              <i>
                <b className="purple">tecnologias e produtos web</b>
              </i>, bem como em áreas relacionadas à{" "}
              <b className="purple">Marketing Digital</b>.
              <br />
              <br />
              Sempre que possível, aplico também minhas habilidades no desenvolvimento de produtos com{" "}
              <b data-aos="fade-right" className="purple">NextJS</b> e outras{" "}
              <i>
                <b data-aos="fade-right" className="purple">bibliotecas e estruturas modernas de JavaScript</b>
              </i>, como{" "}
              <i>
                <b data-aos="fade-right" className="purple">React.js e Next.js</b>
              </i>.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img data-aos="fade-right" src={myImg} className="img-fluid rounded-4" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col data-aos="fade-right" md={12} className="home-about-social">
            <h1 data-aos="fade-right">ENCONTRE-ME EM</h1>
            <p data-aos="fade-right">
              Sinta-se livre para <span className="purple">conectar-se</span> comigo
            </p>
            <ul data-aos="fade-right" className="home-about-social-links">
              <li data-aos="fade-right" className="social-icons">
                <a
                 data-aos="fade-right"
                  href="https://github.com/Lucasholt124"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li data-aos="fade-right" className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lucas-arag%C3%A3o-a608822a6/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li data-aos="fade-right" className="social-icons">
                <a
                 data-aos="fade-right"
                  href="https://www.instagram.com/lucas_aragaotm/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
