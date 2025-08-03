import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { fetchGitHubContributions } from "../../../src/services/github"; // Importa o serviço
import styles from "./CustomGitHubCalendar.module.css"; // Importa o CSS

// Componente para o estado de Carregamento
function LoadingSpinner() {
  return <div className={styles.loadingSpinner}>Carregando contribuições...</div>;
}

// Componente para o estado de Erro
function ErrorMessage({ message }) {
  return <div className={styles.errorMessage}>Ops! {message}</div>;
}

function CustomGitHubCalendar() {
  // 1. Estados para UI: loading, error e data
  const [weeks, setWeeks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weeksData = await fetchGitHubContributions();
        setWeeks(weeksData);
      } catch (err) {
        setError(err.message || "Não foi possível carregar os dados.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <LoadingSpinner />;
    }
    if (error) {
      return <ErrorMessage message={error} />;
    }
    return (
      <div className={styles.calendarGrid}>
        {weeks.map((week, i) => (
          <div key={i} className={styles.weekColumn}>
            {week.contributionDays.map((day, j) => (
              <div
                key={j}
                title={`${day.date}: ${day.contributionCount} contribuições`}
                className={styles.daySquare}
                style={{ backgroundColor: day.color || "#161b22" }} // Cor de fundo padrão do GitHub
              />
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <Container data-aos="fade-up" className="text-center my-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          {/* 2. Semântica: h1 -> h2 */}
          <h2 className="project-heading mb-4">
            Dias que <strong className="purple">codifiquei</strong>
          </h2>
          <div className={styles.calendarContainer}>
            {renderContent()}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CustomGitHubCalendar;