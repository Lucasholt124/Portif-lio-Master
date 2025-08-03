import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";

// --- O COMPONENTE WRAPPER PODE SER REMOVIDO OU MANTIDO, POIS A LÓGICA SERÁ DIFERENTE ---
// Vou manter a simplicidade por enquanto, adicionando o link direto na imagem.

// Um componente para exibir enquanto a imagem real carrega
const ImageLoader = () => (
  <div className={styles.imagePlaceholder}>
    Carregando prévia do site...
  </div>
);

function ProjectCard({ imgPath, title, description, ghLink, demoLink }) {
  // 1. A URL da imagem será construída dinamicamente.
  // Se houver um demoLink, criamos a URL da nossa API.
  // Se não, usamos o imgPath como fallback.
  const dynamicImgSrc = demoLink
    ? `/api/screenshot?url=${encodeURIComponent(demoLink)}`
    : imgPath;

  return (
    <Card className={styles.projectCard}>
      {/* 2. O contêiner da imagem agora é um link se demoLink existir */}
      <a
        href={demoLink || ghLink}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.imageLink} // Adicionamos uma classe para o link
      >
        <div className={styles.cardImageContainer}>
          {/*
            3. A mágica acontece aqui.
            Usamos a URL dinâmica. A tag <img> é inteligente, se a fonte
            for uma API que redireciona para uma imagem, ela funciona.
          */}
          {dynamicImgSrc ? (
            <img
              src={dynamicImgSrc}
              alt={`Prévia do projeto ${title}`}
              className={styles.cardImage}
              // Opcional: Adiciona um efeito de fade-in quando a imagem carrega
              onLoad={(e) => (e.currentTarget.style.opacity = 1)}
            />
          ) : (
            // Exibe um placeholder se não houver nem demoLink nem imgPath
            <div className={styles.noImageAvailable}>Sem prévia disponível</div>
          )}
        </div>
      </a>

      <Card.Body>
        <Card.Title className="fw-semibold fs-5 mb-2 text-center">{title}</Card.Title>
        <Card.Text className={styles.cardText}>
          {description}
        </Card.Text>

        <div className={styles.buttonGroup}>
          {ghLink && (
            <Button
              className={styles.btn}
              href={ghLink}
              target="_blank"
              aria-label={`Ver o código do projeto ${title} no GitHub`}
            >
              GitHub
            </Button>
          )}
          {demoLink && (
            <Button
              className={styles.btn}
              href={demoLink}
              target="_blank"
              aria-label={`Ver a demonstração ao vivo do projeto ${title}`}
            >
              Ver Site
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

// 4. Atualizando os PropTypes. imgPath agora é opcional.
ProjectCard.propTypes = {
  imgPath: PropTypes.string, // Não é mais obrigatório
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ghLink: PropTypes.string,
  demoLink: PropTypes.string,
};

ProjectCard.defaultProps = {
  ghLink: null,
  demoLink: null,
  imgPath: null, // Valor padrão nulo
};

export default ProjectCard;