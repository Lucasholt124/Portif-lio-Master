

export default async function handler(req, res) {
  // 1. Verifique se o método da requisição é POST ou GET, conforme seu front-end.
  // Vamos usar GET por simplicidade aqui.
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  // 2. Pegue o token secreto das variáveis de ambiente do SERVIDOR.
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Note que não tem 'REACT_APP_'

  if (!GITHUB_TOKEN) {
    console.error("Token do GitHub não configurado no servidor.");
    // Não exponha o erro detalhado para o cliente.
    return res.status(500).json({ message: 'Erro interno do servidor.' });
  }

  // 3. A query do GraphQL para buscar as contribuições.
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
    // 4. Faça a chamada para a API do GitHub a partir do servidor.
    const githubResponse = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!githubResponse.ok) {
      // Se a resposta do GitHub não for 'OK', lance um erro.
      const errorBody = await githubResponse.text();
      console.error("Erro da API do GitHub:", errorBody);
      throw new Error(`Falha na API do GitHub: ${githubResponse.statusText}`);
    }

    const { data } = await githubResponse.json();

    if (!data?.viewer?.contributionsCollection?.contributionCalendar?.weeks) {
      console.error("Estrutura de dados inesperada do GitHub:", data);
      throw new Error("Dados de contribuição não encontrados na resposta.");
    }

    // 5. Retorne os dados de sucesso para o seu front-end.
    res.status(200).json({
      weeks: data.viewer.contributionsCollection.contributionCalendar.weeks,
    });

  } catch (error) {
    console.error("Erro ao processar a requisição:", error.message);
    res.status(500).json({ message: 'Erro ao buscar dados do GitHub.' });
  }
}