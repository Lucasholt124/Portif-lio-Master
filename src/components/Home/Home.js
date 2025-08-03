import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import styles from "./Home.module.css"; // 1. Importando o CSS Module

function Home() {
  return (
    // Usar <section> é ótimo para semântica.
    <section id="home">
      <Container fluid className="home-section">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            {/*
              2. Aplicando a animação no contêiner pai (Col)
                 para um efeito mais suave e coeso.
            */}
            <Col md={7} className={styles.homeHeader} data-aos="fade-right">
              {/*
                3. Semântica corrigida: a saudação é um parágrafo (`p`)
                   e o nome é o título principal (`h1`).
              */}
              <p className={`${styles.heading} mb-3`}>
                Olá!{" "}
                <span className={styles.wave} role="img" aria-label="acenando">
                  👋🏻
                </span>
              </p>

              <h1 className={styles.headingName}>
                Eu sou <strong className={styles.mainName}>Lucas Aragão</strong>
              </h1>

              {/* 4. Usando classe do CSS Module em vez de estilo inline. */}
              <div className={styles.typeContainer}>
                <Type />
              </div>
            </Col>

            <Col md={5} className="text-center" data-aos="fade-left">
              <img
                src={homeLogo}
                /* 5. Texto alternativo mais descritivo. */
                alt="Ilustração de um desenvolvedor trabalhando em seu notebook"
                /* 6. Usando classe do CSS Module e a classe do Bootstrap. */
                className={`img-fluid ${styles.homeImage}`}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* O componente Home2 continua aqui, o que é uma boa prática de componentização. */}
      <Home2 />
    </section>
  );
}

export default Home;