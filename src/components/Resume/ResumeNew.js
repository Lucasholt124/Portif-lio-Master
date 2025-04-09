/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Curriculo-Lucas-Aragão-Atualização.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [iframeHeight, setIframeHeight] = useState("800px");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIframeHeight(width < 768 ? "600px" : "800px");
    };

    handleResize(); // chama uma vez no início
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container data-aos="flip-down" fluid className="resume-section text-center">
      <Particle />

      <Row data-aos="flip-down" className="justify-content-center mb-4">
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>

      <div className="d-flex justify-content-center px-2" style={{ overflowX: "auto" }}>
        <iframe
          src={pdf}
          title="Currículo"
          width="100%"
          height={iframeHeight}
          style={{ border: "none", maxWidth: "1000px" }}
        />
      </div>

      <Row className="justify-content-center mt-4">
        <Button
          aria-label="Download do Currículo"
          variant="primary"
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  );
}

export default ResumeNew;
