import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import styles from "./AboutCard.module.css"; // 1. Importando o CSS Module


function AboutCard() {
  return (
    <Card className={styles.card}>
      <Card.Body className={styles.cardBody}>
        <p className={styles.introText}>
          Olá! Sou <span className="purple">Lucas Aragão</span>, um desenvolvedor criativo de{" "}
          <span className="purple">Ribeirópolis-SE, Brasil</span>.
          Minha missão é transformar ideias em realidade através de código limpo e funcional.
          <br />
          Como <strong className="purple">freelancer</strong>, tenho a liberdade de me associar a projetos inovadores e entregar valor diretamente aos meus parceiros.
          <br />
          Recentemente, concluí minha graduação em <b>Análise e Desenvolvimento de Sistemas (ADS)</b>, consolidando a base técnica que aplico todos os dias.
          <br />
          <br />
          Além do código, minhas paixões incluem:
        </p>

        <ul className={styles.activityList}>
          <li className={styles.activityItem}>
            <ImPointRight aria-hidden="true" /> Mergulhar em ecossistemas de novas tecnologias
          </li>
          <li className={styles.activityItem}>
            <ImPointRight aria-hidden="true" /> Expandir meus horizontes através da leitura
          </li>
        </ul>

        <figure className={styles.quoteFigure}>
          <blockquote className={styles.quoteText}>
            <p>"Você não precisa ser o mais forte nem o mais genial, apenas precisa ter disciplina!"</p>
          </blockquote>
          <figcaption className={styles.quoteAuthor}>— Lucas Aragão</figcaption>
        </figure>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;