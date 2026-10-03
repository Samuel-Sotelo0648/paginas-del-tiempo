(() => {
  const panel = document.getElementById('chatbotPanel');
  const launcher = document.getElementById('chatbotLauncher');
  const close = document.getElementById('chatbotClose');
  const form = document.getElementById('chatbotForm');
  const input = document.getElementById('chatbotInput');
  const messages = document.getElementById('chatbotMessages');
  const send = document.getElementById('chatbotSend');
  const history = [];

  function setOpen(open) {
    panel.classList.toggle('is-open', open);
    launcher.setAttribute('aria-expanded', String(open));
    if (open) input.focus();
  }
  function addMessage(text, role) {
    const item = document.createElement('div');
    item.className = `chatbot-message ${role}`;
    item.textContent = text;
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
    return item;
  }
  const isDirectExpress = (window.location.protocol === 'http:' || window.location.protocol === 'https:') && window.location.port === '3000';
  const apiUrl = isDirectExpress ? '/api/chat' : 'http://localhost:3000/api/chat';

  launcher.addEventListener('click', () => setOpen(!panel.classList.contains('is-open')));
  close.addEventListener('click', () => setOpen(false));
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const message = input.value.trim();
    if (!message || send.disabled) return;
    addMessage(message, 'user');
    history.push({ role: 'user', content: message });
    input.value = '';
    send.disabled = true;
    const pending = addMessage('Estoy buscando una respuesta…', 'bot');
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, history: history.slice(-10, -1) })
      });

      let data = null;
      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok) {
        if (response.status === 405 || response.status === 404) {
          throw new Error('No se pudo encontrar el endpoint del asistente. Verifica que hayas iniciado el servidor con "npm start" (puerto 3000).');
        }
        throw new Error((data && data.error) || `Error del servidor (${response.status}).`);
      }

      if (!data || !data.reply) {
        throw new Error('El asistente no devolvió una respuesta válida.');
      }

      pending.textContent = data.reply;
      history.push({ role: 'assistant', content: data.reply });
    } catch (error) {
      if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        pending.textContent = 'No pude conectar con el servidor en http://localhost:3000. Verifica que hayas iniciado la aplicación con "npm start" en la terminal.';
      } else {
        pending.textContent = error.message;
      }
    } finally {
      send.disabled = false;
      input.focus();
      messages.scrollTop = messages.scrollHeight;
    }
  });
})();
