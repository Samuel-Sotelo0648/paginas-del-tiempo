require('dotenv').config();
const express = require('express');
const path = require('path');
const chatRoutes = require('./routes/chat-routes');

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const projectRoot = path.resolve(__dirname, '..');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json({ limit: '20kb' }));
app.use('/api/chat', chatRoutes);
app.use(express.static(projectRoot));
app.get('/', (_req, res) => res.sendFile(path.join(projectRoot, 'index.html')));
app.listen(PORT, () => console.log(`Páginas del Tiempo disponible en http://localhost:${PORT}`));
