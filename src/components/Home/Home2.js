import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Projects/WhatsApp Image 2024-02-09 at 12.31.24.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            DEIXE-ME  <span className="purple"> APRESENTAR - ME </span> 
            </h1>
            <p className="home-about-body">
            Me indentifico com a programação Front-End
              <br />
              <br />Sou fluente em clássicos como
              <i>
                <b className="purple"> HTML,CSS, Javascript </b>
              </i>
              <br />
              <br />
              Minha área de interesse é construir novas &nbsp;
              <i>
                <b className="purple">Tecnologias e produtos da Web </b> e
                 também em áreas relacionadas{" "}
                <b className="purple">
                  a Pentest.
                </b>
              </i>
              <br />
              <br />
              Sempre que possível, aplico também minhas habilidades pelo desenvolvimento de produtos
               com <b className="purple">React, </b> e
              <i>
                <b className="purple">
                  {" "}
                  Biblioteca e estruturas Javascript modernas, 
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js e Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCONTRE ME EM</h1>
            <p>
            Sinta-se livre para <span className="purple">conectar-(se) </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Lucasholt124"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>     
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lucas-arag%C3%A3o-a608822a6/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
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
