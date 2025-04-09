import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Curriculo-Lucas-Aragão-Atualização.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Escala dinâmica baseada no tamanho da tela
  const getScale = () => {
    if (windowWidth > 1024) return 1.2;
    if (windowWidth > 768) return 1;
    if (windowWidth > 500) return 0.8;
    return 0.6;
  };

  return (
    <Container data-aos="flip-down" fluid className="resume-section text-center">
      <Particle />

      <Row data-aos="flip-down" className="justify-content-center mb-4">
        <Button
          data-aos="flip-down"
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

      <div className="d-flex justify-content-center" style={{ overflowX: "auto" }}>
        <Document file={pdf}>
          <Page pageNumber={1} scale={getScale()} />
        </Document>
      </div>

      <Row className="justify-content-center mt-4">
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
    </Container>
  );
}

export default ResumeNew;
