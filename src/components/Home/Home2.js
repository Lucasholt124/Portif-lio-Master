import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Projects/WhatsApp Image 2024-02-09 at 12.31.24.jpeg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import styles from "./About.module.css"; // 1. Importando o CSS Module

function About() { // 2. Nome do componente alterado para 'About'
  return (
    <Container fluid className={styles.aboutSection} id="about">
      <Container>
        <Row>
          {/* 3. Animação aplicada somente na coluna principal */}
          <Col md={8} className={styles.aboutDescription} data-aos="fade-right">
            {/* 4. Título agora é um h2 e usa classe CSS */}
            <h2 className={styles.heading}>
              DEIXE-ME <span className="purple">APRESENTAR-ME</span>
            </h2>
            <p className={styles.aboutBody}>
              Sou um entusiasta da programação, com um foco especial em <strong className="purple">Front-End</strong>.
              <br />
              <br />
              Domino as tecnologias fundamentais da web, como{" "}
              <em>
                <strong className="purple">HTML, CSS e JavaScript</strong>
              </em>.
              <br />
              <br />
              Meu interesse principal é construir novas <strong className="purple">tecnologias e produtos para a web</strong>,
              combinando desenvolvimento com conceitos de <strong className="purple">Marketing Digital</strong>.
              <br />
              <br />
              Para isso, utilizo <strong className="purple">React.js</strong> e seu ecossistema, incluindo frameworks como{" "}
              <strong className="purple">Next.js</strong>, para criar aplicações modernas e performáticas.
            </p>
          </Col>

          {/* 5. Animação aplicada somente na coluna da imagem */}
          <Col md={4} className="myAvtar" data-aos="fade-left">
            <Tilt>
              <img
                src={myImg}
                className={`img-fluid ${styles.profilePic}`}
                alt="Minha foto de perfil - Lucas Aragão" // 6. Alt text mais descritivo
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          {/* 7. Animação aplicada somente na coluna das redes sociais */}
          <Col md={12} className={styles.socialSection} data-aos="fade-up">
            <h2>ENCONTRE-ME EM</h2>
            <p>
              Sinta-se à vontade para se <span className="purple">conectar</span> comigo
            </p>
            <ul className={styles.socialLinks}>
              <li className={styles.socialIcons}>
                <a
                  href="https://github.com/Lucasholt124"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour"
                  aria-label="Meu perfil no Github" // 8. Acessibilidade
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className={styles.socialIcons}>
                <a
                  href="https://www.linkedin.com/in/lucas-arag%C3%A3o-a608822a6/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour"
                  aria-label="Meu perfil no LinkedIn" // 8. Acessibilidade
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className={styles.socialIcons}>
                <a
                  href="https://www.instagram.com/lucas_aragaotm/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour"
                  aria-label="Meu perfil no Instagram" // 8. Acessibilidade
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

export default About; // 9. Exportando o novo nome do componente