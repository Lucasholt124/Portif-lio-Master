import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col, Container } from "react-bootstrap";

function Github() {
  return (
    <Container  data-aos="flip-left" className="text-center my-5">
      <Row  data-aos="flip-left" className="justify-content-center">
        <Col lg={8}>
          <h1 className="project-heading mb-4">
            Dias que <strong className="purple">codifiquei</strong>
          </h1>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              display: "inline-block",
              overflowX: "auto",
            }}
          >
            <GitHubCalendar
              username="Lucasholt124"
              blockSize={15}
              blockMargin={5}
              color="#c084f5"
              fontSize={16}
              style={{ maxWidth: "100%" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Github;
