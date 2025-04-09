import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGoogleclassroom,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiGoogleclassroom />, name: "Cursoria" },
    { icon: <SiVercel />, name: "Vercel" },
  ];

  return (
    <Row  data-aos="flip-left" className="justify-content-center pb-5">
      {tools.map((tool, index) => (
        <Col
          key={index}
          xs={6}
          sm={4}
          md={2}
          className="d-flex flex-column align-items-center mb-4"
        >
          <div
            style={{
              fontSize: "3rem",
              backgroundColor: "#2c2c54",
              padding: "20px",
              borderRadius: "1rem",
              color: "#c084f5",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              transition: "transform 0.3s ease",
            }}
            className="hover-scale"
          >
            {tool.icon}
          </div>
          <small
            style={{
              color: "#fff",
              marginTop: "10px",
              fontWeight: "500",
              fontSize: "0.95rem",
            }}
          >
            {tool.name}
          </small>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
