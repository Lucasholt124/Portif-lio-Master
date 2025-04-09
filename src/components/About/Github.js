import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const fetchGitHubContributions = async (token) => {
  const query = `
    query {
      viewer {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();

  if (
    !data?.viewer?.contributionsCollection?.contributionCalendar?.weeks
  ) {
    console.error("Erro ao buscar dados do GitHub:", data);
    return [];
  }

  return data.viewer.contributionsCollection.contributionCalendar.weeks;
};

function CustomGitHubCalendar() {
  const [weeks, setWeeks] = useState([]);

  useEffect(() => {
    const token = process.env.REACT_APP_GITHUB_TOKEN;
    if (!token) {
      console.error("Token do GitHub não encontrado. Defina REACT_APP_GITHUB_TOKEN no .env.");
      return;
    }

    const fetchData = async () => {
      const weeksData = await fetchGitHubContributions(token);
      setWeeks(weeksData);
    };

    fetchData();
  }, []);

  return (
    <Container data-aos="fade-up" className="text-center my-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <h1 className="project-heading mb-4">
            Dias que <strong className="purple">codifiquei</strong>
          </h1>
          <div
            className="calendar-grid"
            style={{
              display: "flex",
              gap: "6px",
              overflowX: "auto",
              justifyContent: "center",
              padding: "16px",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.03)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            }}
          >
            {weeks.map((week, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                {week.contributionDays.map((day, j) => (
                  <div
                    key={j}
                    title={`${day.date}: ${day.contributionCount} commits`}
                    style={{
                      width: 16,
                      height: 16,
                      backgroundColor: day.color || "#ebedf0",
                      borderRadius: "4px",
                      transition: "transform 0.2s ease, background-color 0.2s ease",
                      cursor: "pointer",
                      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.15)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.2)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                ))}
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CustomGitHubCalendar;
