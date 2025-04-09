import React from "react";
import { Card, Button } from "react-bootstrap";

function ProjectCard({ imgPath, title, description, ghLink, demoLink }) {
  return (
    <Card data-aos="fade-down-right" className="project-card-view shadow-sm border-0 rounded-4">
      <a
        href={demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="d-block"
        style={{ borderRadius: "12px", overflow: "hidden" }}
      >
        <div
          data-aos="fade-down-right"
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "#f8f9fa",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <img
            src={imgPath}
            alt={`Preview de ${title}`}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </a>

      <Card.Body>
        <Card.Title className="fw-semibold fs-5 mb-2 text-center">{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", fontSize: "0.95rem" }}>
          {description}
        </Card.Text>

        <div className="d-flex justify-content-center gap-3 mt-3">
          {ghLink && (
            <Button
              variant="outline-primary"
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
            >
              GitHub
            </Button>
          )}
          {demoLink && (
            <Button
              variant="outline-success"
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
            >
              Ver Site
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
