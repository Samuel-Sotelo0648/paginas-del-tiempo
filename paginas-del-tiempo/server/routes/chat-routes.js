const express = require('express');
const { getAssistantReply } = require('../services/ai-service');
const router = express.Router();

router.post('/', async (req, res) => {
  const { message, history } = req.body || {};
  if (typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'Escribe una pregunta para el asistente.' });
  }
  if (message.length > 1000) return res.status(400).json({ error: 'El mensaje es demasiado largo.' });
  if (!process.env.OPENAI_API_KEY) return res.status(503).json({ error: 'Falta configurar OPENAI_API_KEY en el archivo .env.' });
  try {
    const reply = await getAssistantReply(message.trim(), history);
    return res.json({ reply });
  } catch (error) {
    console.error('Error del asistente:', error.message);
    return res.status(502).json({ error: 'El asistente no pudo responder. Revisa la configuración de la API e inténtalo de nuevo.' });
  }
});

module.exports = router;
