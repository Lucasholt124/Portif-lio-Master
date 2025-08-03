// api/screenshot.js

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'A URL do site é obrigatória.' });
  }

  const accessKey = process.env.APIFLASH_ACCESS_KEY;

  if (!accessKey) {
    console.error("ERRO: Chave da API (APIFLASH_ACCESS_KEY) não encontrada.");
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }

  // Montando a URL final para a API do ApiFlash, baseado no seu exemplo.
  // Isso é mais seguro e profissional.
  const screenshotApiUrl = `https://api.apiflash.com/v1/urltoimage?access_key=${accessKey}&url=${encodeURIComponent(url)}&wait_until=page_loaded&response_type=image&format=jpeg&quality=85`;

  try {
    // Redireciona o navegador do usuário para a imagem gerada pelo ApiFlash.
    res.redirect(307, screenshotApiUrl);
  } catch (error) {
    console.error("Erro ao redirecionar para a API de screenshot:", error);
    res.status(502).json({ error: 'Falha ao processar a imagem do site.' });
  }
}