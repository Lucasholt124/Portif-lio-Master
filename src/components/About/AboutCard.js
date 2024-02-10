import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Olá a todos, eu sou<span className="purple"> Lucas Aragão </span>
            de <span className="purple"> Sergipe, Brasil.</span>
            <br />
            Atualmente sou desenvolvedor de software no Brasil
            <br />
            Faço faculdade na Estácio De Sã, atualmente no 3 Período em Analise e desenvolvimento de sietemas(ADS)
            <br />
            <br />
             Além disso, algumas outras atividades que adoro fazer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Pentester
            </li>
            <li className="about-activity">
              <ImPointRight /> Jogar jogos nas horas vagas
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Você não precisa ser o mais forte e nem o mais genial, apenas precisa ter disciplina!"{" "}
          </p>
          <footer className="blockquote-footer">Lucas Aragão</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
