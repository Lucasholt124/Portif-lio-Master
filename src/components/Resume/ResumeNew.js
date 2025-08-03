import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Curriculo-Lucas-Aragão-Atualização.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import styles from "./Resume.module.css"; // Importando o CSS Module

// 1. Componente de botão reutilizável para seguir o princípio DRY
function DownloadCVButton() {
  return (
    <Row className="justify-content-center my-4">
      <Button
        variant="primary"
        href={pdf}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.downloadBtn}
        aria-label="Fazer download do meu currículo em PDF"
      >
        <AiOutlineDownload />
        &nbsp;Download CV
      </Button>
    </Row>
  );
}

function Resume() {
  // 2. Lógica de responsividade removida do JS. O CSS cuida disso agora.
  // O código fica muito mais limpo e sem a necessidade de 'useState' e 'useEffect'.

  return (
    <Container fluid className={styles.resumeSection} data-aos="fade-up">
      <Particle />

      {/* 3. Componente de botão reutilizado */}
      <DownloadCVButton />

      {/* 4. Mensagem específica para mobile, controlada via CSS */}
      <p className={styles.mobileMessage}>
        Para uma melhor visualização, por favor, faça o download do currículo.
      </p>

      {/*
        5. O contêiner do iframe agora é controlado por CSS.
        Ele será automaticamente escondido em telas pequenas.
      */}
      <div className={styles.pdfViewerContainer}>
        <iframe
          src={pdf}
          title="Visualizador do meu Currículo em PDF"
          className={styles.pdfViewer}
        />
      </div>

      {/* 6. Botão de download no final para facilitar o acesso em telas grandes */}
      <DownloadCVButton />
    </Container>
  );
}

export default Resume;