/* eslint-disable no-unused-vars */
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

    try {
      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const result = await response.json();

      if (!result?.data?.viewer?.contributionsCollection?.contributionCalendar?.weeks) {
        console.error("Erro ao buscar contribuições do GitHub:", result);
        return [];
      }

      return result.data.viewer.contributionsCollection.contributionCalendar.weeks;
    } catch (error) {
      console.error("Erro na requisição GraphQL:", error);
      return [];
    }
  };
