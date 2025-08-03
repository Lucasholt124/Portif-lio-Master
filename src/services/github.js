
export const fetchGitHubContributions = async () => {
  try {
    // No seu front-end, você chamará seu próprio endpoint de proxy.
    const response = await fetch("/api/github-contributions");

    if (!response.ok) {
      throw new Error("Falha ao buscar os dados de contribuições do GitHub.");
    }

    const data = await response.json();
    return data.weeks;
  } catch (error) {
    console.error("Erro no serviço de contribuições:", error);
    // Re-lança o erro para que o componente possa tratá-lo.
    throw error;
  }
};