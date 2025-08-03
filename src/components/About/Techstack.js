import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiMongodb,
  SiNpm,
  SiPrisma,
  SiSanity,
  SiStripe,
} from "react-icons/si";
import { FaUserShield } from "react-icons/fa"; // Representando o Clerk

function Techstack() {
  return (
    <Row  data-aos="flip-left" style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrisma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSanity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStripe />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaUserShield />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNpm />
      </Col>
    </Row>
  );
}

export default Techstack;
