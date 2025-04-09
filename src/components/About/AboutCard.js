import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card data-aos="fade-up-right" className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p data-aos="fade-up-right" style={{ textAlign: "justify" }}>
            Olá a todos! Eu sou <span className="purple">Lucas Aragão</span>, de{" "}
            <span className="purple">Ribeirópolis-SE, Brasil</span>.
            <br />
            Atualmente sou desenvolvedor de software no Brasil.
            <br />
            Cursando <b>Análise e Desenvolvimento de Sistemas (ADS)</b> na Estácio de Sá,
            atualmente no 5º período.
            <br />
            <br />
            Além da programação, algumas atividades que adoro fazer:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Estudar
            </li>
            <li className="about-activity">
              <ImPointRight /> Jogar nas horas vagas
            </li>
          </ul>

          <p data-aos="fade-up-right" style={{ color: "rgb(155 126 172)" }}>
            "Você não precisa ser o mais forte nem o mais genial, apenas precisa ter disciplina!"
          </p>
          <footer data-aos="fade-up-right" className="blockquote-footer">Lucas Aragão</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
