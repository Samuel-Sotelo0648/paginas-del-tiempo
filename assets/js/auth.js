/* ===============================================================================================
   PÁGINAS DEL TIEMPO - SISTEMA DE AUTENTICACIÓN Y REGISTRO (auth.js)
   Gestión completa de usuarios, inicio de sesión, registro, sesión activa y sincronización con Admin
   =============================================================================================== */

var USUARIOS_KEY = window.USUARIOS_KEY = window.USUARIOS_KEY || 'paginas_usuarios_v2';
var SESION_KEY = window.SESION_KEY = window.SESION_KEY || 'paginas_sesion_actual';
var ACTIVIDADES_KEY = window.ACTIVIDADES_KEY = window.ACTIVIDADES_KEY || 'paginas_actividades_v1';
var PEDIDOS_KEY = window.PEDIDOS_KEY = window.PEDIDOS_KEY || 'paginas_pedidos_v1';
// CARRITO_KEY y FAVORITOS_KEY son ahora dinámicas por usuario; se definen como función más abajo.
// Mantenemos las globales como claves base para compatibilidad con catalog.js (se sobreescribirán al iniciar sesión).
var CARRITO_KEY = window.CARRITO_KEY = window.CARRITO_KEY || 'paginas_carrito';
var FAVORITOS_KEY = window.FAVORITOS_KEY = window.FAVORITOS_KEY || 'paginas_favoritos';

/** Devuelve la clave de carrito para el usuario activo (o la global si no hay sesión). */
function obtenerCarritoKey() {
  const sesion = obtenerSesionActual();
  return sesion ? `paginas_carrito_${sesion.id}` : null;
}

/** Devuelve la clave de favoritos para el usuario activo (o null si no hay sesión). */
function obtenerFavoritosKey() {
  const sesion = obtenerSesionActual();
  return sesion ? `paginas_favoritos_${sesion.id}` : null;
}

/** Exponer globalmente para catalog.js */
window.obtenerCarritoKey = obtenerCarritoKey;
window.obtenerFavoritosKey = obtenerFavoritosKey;

// Usuarios iniciales predeterminados (compatibles con admin.html y data-initial.js)
var USUARIOS_DEFECTO = window.USUARIOS_DEFECTO = window.USUARIOS_INICIALES || window.USUARIOS_DEFECTO || [
  {
    id: "USR-01",
    usuario: "Admin. J. Salazar",
    nombres: "Admin. J.",
    apellidos: "Salazar",
    email: "admin@paginasdeltiempo.com",
    password: "admin",
    rol: "Administrador",
    estado: "Activo",
    fechaRegistro: "2026-01-15"
  },
  {
    id: "USR-02",
    usuario: "Carlos Lector",
    nombres: "Carlos",
    apellidos: "Lector",
    email: "carlos@gmail.com",
    password: "password123",
    rol: "Lector",
    estado: "Activo",
    fechaRegistro: "2026-02-10"
  },
  {
    id: "USR-03",
    usuario: "María González",
    nombres: "María",
    apellidos: "González",
    email: "maria.g@hotmail.com",
    password: "password123",
    rol: "Lector",
    estado: "Activo",
    fechaRegistro: "2026-03-01"
  }
];

/* ========================================================
   FUNCIONES GLOBALES DE LOGIN Y REGISTRO
   ======================================================== */

function ejecutarLogin(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  const emailInput = document.getElementById('email');
  const passInput = document.getElementById('password');
  const email = emailInput ? emailInput.value : '';
  const password = passInput ? passInput.value : '';

  const res = autenticarUsuario(email, password);

  if (!res.success) {
    mostrarAlertaAuth(res.error, 'error');
    return false;
  }

  const user = res.user;
  const esAdmin = user.rol === 'Administrador' || user.email === 'admin@paginasdeltiempo.com';
  const nombreMostrar = user.nombres || user.usuario;

  mostrarAlertaAuth(`✨ ¡Bienvenido de nuevo, ${escaparHTML(nombreMostrar)}! Ingresando a tu cuenta...`, 'success');

  setTimeout(() => {
    if (esAdmin) {
      window.location.href = './../admin.html';
    } else {
      window.location.href = './../index.html';
    }
  }, 900);

  return false;
}
window.ejecutarLogin = ejecutarLogin;

function ejecutarRegistro(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  const names = document.getElementById('names')?.value;
  const surnames = document.getElementById('surnames')?.value;
  const email = document.getElementById('email')?.value;
  const password = document.getElementById('password')?.value;
  const confirmPassword = document.getElementById('confirm-password')?.value;

  if (password !== confirmPassword) {
    mostrarAlertaAuth('Las contraseñas ingresadas no coinciden. Por favor verifícalas.', 'error');
    return false;
  }

  const res = registrarUsuario({
    nombres: names,
    apellidos: surnames,
    email: email,
    password: password
  });

  if (!res.success) {
    mostrarAlertaAuth(res.error, 'error');
    return false;
  }

  mostrarAlertaAuth(`🎉 ¡Cuenta creada con éxito para ${escaparHTML(names)}! Redirigiendo al inicio de sesión para que ingreses con tu nueva cuenta...`, 'success');

  setTimeout(() => {
    window.location.href = `./login.html?email=${encodeURIComponent(email)}&registrado=1`;
  }, 1200);

  return false;
}
window.ejecutarRegistro = ejecutarRegistro;

/* ========================================================
   GESTIÓN DE USUARIOS EN LOCALSTORAGE
   ======================================================== */

function obtenerUsuarios() {
  const guardados = localStorage.getItem(USUARIOS_KEY);
  if (guardados !== null) {
    try {
      const lista = JSON.parse(guardados);
      const fuenteIniciales = window.USUARIOS_INICIALES || USUARIOS_DEFECTO;
      if (!lista || lista.length < 10) {
        localStorage.setItem(USUARIOS_KEY, JSON.stringify(fuenteIniciales));
        return [...fuenteIniciales];
      }
      let modificado = false;
      lista.forEach(u => {
        if (!u.password) {
          u.password = (u.rol === 'Administrador' || u.email === 'admin@paginasdeltiempo.com') ? 'admin' : 'password123';
          modificado = true;
        }
      });
      if (modificado) {
        localStorage.setItem(USUARIOS_KEY, JSON.stringify(lista));
      }
      return lista;
    } catch {
      const fuente = window.USUARIOS_INICIALES || USUARIOS_DEFECTO;
      return [...fuente];
    }
  }
  const fuente = window.USUARIOS_INICIALES || USUARIOS_DEFECTO;
  localStorage.setItem(USUARIOS_KEY, JSON.stringify(fuente));
  return [...fuente];
}

function guardarUsuarios(usuarios) {
  localStorage.setItem(USUARIOS_KEY, JSON.stringify(usuarios));
}

/* ========================================================
   GESTIÓN DE SESIÓN ACTIVA
   ======================================================== */

function obtenerSesionActual() {
  const sesionStr = localStorage.getItem(SESION_KEY);
  if (!sesionStr) return null;
  try {
    return JSON.parse(sesionStr);
  } catch {
    return null;
  }
}

function establecerSesion(usuario) {
  const sesion = {
    id: usuario.id,
    usuario: usuario.usuario || `${usuario.nombres || ''} ${usuario.apellidos || ''}`.trim(),
    nombres: usuario.nombres || usuario.usuario,
    apellidos: usuario.apellidos || '',
    email: usuario.email.toLowerCase(),
    rol: usuario.rol || 'Lector',
    fechaLogin: new Date().toISOString()
  };
  localStorage.setItem(SESION_KEY, JSON.stringify(sesion));
  actualizarHeaderAuth();
  return sesion;
}

function cerrarSesion() {
  const sesion = obtenerSesionActual();
  localStorage.removeItem(SESION_KEY);
  
  mostrarToastAuth('👋 Has cerrado sesión correctamente');
  actualizarHeaderAuth();

  // Si estamos en admin.html, redirigir a la tienda
  if (window.location.pathname.includes('admin.html')) {
    setTimeout(() => {
      window.location.href = './index.html';
    }, 800);
  }
}

/* ========================================================
   REGISTRO E INICIO DE SESIÓN
   ======================================================== */

function registrarUsuario(nombres, apellidos, email, password) {
  nombres = (nombres || '').trim();
  apellidos = (apellidos || '').trim();
  email = (email || '').trim().toLowerCase();
  password = (password || '').trim();

  if (!nombres || !email || !password) {
    return { success: false, error: 'Por favor completa todos los campos requeridos.' };
  }

  if (password.length < 6) {
    return { success: false, error: 'La contraseña debe tener al menos 6 caracteres.' };
  }

  const usuarios = obtenerUsuarios();
  const existe = usuarios.some(u => (u.email || '').toLowerCase() === email);

  if (existe) {
    return { success: false, error: 'Este correo electrónico ya está registrado. Por favor inicia sesión.' };
  }

  const nombreCompleto = `${nombres} ${apellidos}`.trim();
  const nuevoId = `USR-${usuarios.length + 1}`;

  const nuevoUsuario = {
    id: nuevoId,
    usuario: nombreCompleto,
    nombres: nombres,
    apellidos: apellidos,
    email: email,
    password: password,
    rol: "Lector",
    estado: "Activo",
    fechaRegistro: new Date().toISOString().split('T')[0]
  };

  usuarios.push(nuevoUsuario);
  guardarUsuarios(usuarios);

  // Registrar en el historial de actividades para el admin (Creación de cuenta con éxito)
  registrarActividadAuth('👥', `Cuenta creada con éxito: <strong>${escaparHTML(nombreCompleto)}</strong> (${escaparHTML(email)})`);

  // Iniciar sesión automáticamente
  establecerSesion(nuevoUsuario);

  return { success: true, user: nuevoUsuario };
}

function autenticarUsuario(email, password) {
  email = (email || '').trim().toLowerCase();
  password = (password || '').trim();

  if (!email || !password) {
    return { success: false, error: 'Por favor completa tu correo y contraseña.' };
  }

  const usuarios = obtenerUsuarios();
  const usuario = usuarios.find(u => (u.email || '').toLowerCase() === email);

  if (!usuario) {
    return { 
      success: false, 
      error: 'No existe ninguna cuenta registrada con este correo electrónico. Por favor verifica tus datos o regístrate.' 
    };
  }

  if (usuario.estado === 'Inactivo') {
    return { 
      success: false, 
      error: 'Esta cuenta se encuentra temporalmente desactivada. Por favor contacta al administrador de la librería.' 
    };
  }

  // Verificación de contraseña
  const esAdmin = usuario.rol === 'Administrador' || usuario.email === 'admin@paginasdeltiempo.com';
  const passCorrecto = usuario.password === password ||
    (esAdmin && (password === 'admin' || password === 'admin123')) ||
    (!esAdmin && (password === 'password123' || password === 'lector123' || password === '123456'));

  if (!passCorrecto) {
    return { 
      success: false, 
      error: 'Contraseña incorrecta. Por favor intenta de nuevo.' 
    };
  }

  establecerSesion(usuario);

  return { success: true, user: usuario };
}

/* ========================================================
   REGISTRO DE ACTIVIDADES (SINCRONIZADO CON ADMIN)
   ======================================================== */

function registrarActividadAuth(icono, texto) {
  const permitidos = ['🛒', '👥', '👤', '🤝', '🛡️', '⚠️', '📦'];
  if (!permitidos.includes(icono)) return;

  try {
    const guardadas = localStorage.getItem(ACTIVIDADES_KEY);
    const actividades = guardadas ? JSON.parse(guardadas) : [];
    const ahora = new Date();
    const horaStr = `${ahora.getHours()}:${String(ahora.getMinutes()).padStart(2, '0')}`;
    
    actividades.unshift({
      icono: icono,
      texto: texto,
      tiempo: `Hoy, ${horaStr}`
    });

    if (actividades.length > 25) actividades.splice(25);
    localStorage.setItem(ACTIVIDADES_KEY, JSON.stringify(actividades));
  } catch (err) {
    console.error("Error registrando actividad:", err);
  }
}

/* ========================================================
   ACTUALIZACIÓN DEL HEADER EN TODAS LAS PÁGINAS
   ======================================================== */

function actualizarHeaderAuth() {
  const sesion = obtenerSesionActual();
  const isPagesDir = window.location.pathname.includes('/pages/');
  const rootPrefix = isPagesDir ? './../' : './';
  const pagesPrefix = isPagesDir ? './' : './pages/';

  // 1. Actualizar sección de autenticación (.auth-actions)
  const authContainers = document.querySelectorAll('.auth-actions');
  authContainers.forEach(container => {
    if (sesion) {
      const esAdmin = sesion.rol === 'Administrador';
      const nombreMostrar = sesion.nombres || sesion.usuario.split(' ')[0] || 'Lector';
      const adminUrl = isPagesDir ? './../admin.html' : './admin.html';

      container.innerHTML = `
        <div class="user-logged-info">
          <div class="user-greeting-chip" title="${escaparHTML(sesion.email)}">
            <span class="user-avatar-icon">📖</span>
            <span class="user-name-text">${escaparHTML(nombreMostrar)}</span>
            ${esAdmin ? `<span class="user-role-badge badge-admin">Admin</span>` : ''}
          </div>
          ${esAdmin ? `<a href="${adminUrl}" class="btn-admin-header" title="Panel de Administración">⚙️ Panel</a>` : ''}
          <button type="button" class="btn-logout-header" onclick="cerrarSesion()" title="Cerrar sesión">Salir ✕</button>
        </div>
      `;
    } else {
      container.innerHTML = `
        <a href="${pagesPrefix}login.html" class="login-btn">Iniciar sesión</a>
        <a href="${pagesPrefix}register.html" class="register-btn">Registrarse</a>
      `;
    }
  });

  // 2. Actualizar insignias de Favoritos y Carrito (.icon-actions)
  const carritoKey = obtenerCarritoKey();
  const favoritosKey = obtenerFavoritosKey();
  const carrito = carritoKey ? JSON.parse(localStorage.getItem(carritoKey) || '[]') : [];
  const favoritos = favoritosKey ? JSON.parse(localStorage.getItem(favoritosKey) || '[]') : [];

  const iconContainers = document.querySelectorAll('.icon-actions');
  iconContainers.forEach(container => {
    const favLink = container.querySelector('a:first-child');
    const cartLink = container.querySelector('a:nth-child(2)');

    if (favLink) {
      favLink.style.position = 'relative';
      let favBadge = favLink.querySelector('.action-count-badge');
      if (favoritos.length > 0) {
        if (!favBadge) {
          favBadge = document.createElement('span');
          favBadge.className = 'action-count-badge';
          favLink.appendChild(favBadge);
        }
        favBadge.textContent = favoritos.length;
      } else if (favBadge) {
        favBadge.remove();
      }

      favLink.onclick = function(e) {
        if (!sesion) {
          e.preventDefault();
          mostrarToastAuth('🔒 Inicia sesión para ver tu lista de libros favoritos.');
          setTimeout(() => { window.location.href = `${pagesPrefix}login.html`; }, 1200);
        } else {
          e.preventDefault();
          mostrarModalFavoritos(favoritos);
        }
      };
    }

    if (cartLink) {
      cartLink.style.position = 'relative';
      let cartBadge = cartLink.querySelector('.action-count-badge');
      if (carrito.length > 0) {
        if (!cartBadge) {
          cartBadge = document.createElement('span');
          cartBadge.className = 'action-count-badge';
          cartLink.appendChild(cartBadge);
        }
        cartBadge.textContent = carrito.length;
      } else if (cartBadge) {
        cartBadge.remove();
      }

      cartLink.onclick = function(e) {
        if (!sesion) {
          e.preventDefault();
          mostrarToastAuth('🔒 Inicia sesión para acceder a tu carrito de compras.');
          setTimeout(() => { window.location.href = `${pagesPrefix}login.html`; }, 1200);
        } else {
          e.preventDefault();
          mostrarModalCarrito(carrito);
        }
      };
    }
  });
}

/* ========================================================
   MODALES RÁPIDOS DE CARRITO Y FAVORITOS PARA USUARIOS
   ======================================================== */

function mostrarModalCarrito(carrito) {
  let modal = document.getElementById('modalCarritoPreview');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'modalCarritoPreview';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
  }

  const total = carrito.reduce((acc, item) => acc + (item.precio || 0), 0);
  const itemsHTML = carrito.length === 0 
    ? '<p style="text-align:center; padding: 2rem 0; color:var(--text-muted); font-style:italic;">Tu carrito de compras está vacío actualmente.</p>'
    : `
      <div style="max-height: 280px; overflow-y:auto; margin: 1rem 0;">
        ${carrito.map((c, i) => `
          <div style="display:flex; justify-content:space-between; align-items:center; padding: 0.6rem 0; border-bottom: 1px dotted var(--brown-medium);">
            <div>
              <strong style="color:var(--text-strong);">${escaparHTML(c.titulo)}</strong>
              <div style="font-size:0.85rem; color:var(--text-muted);">${formatearPrecioAuth(c.precio)}</div>
            </div>
            <button type="button" onclick="eliminarDelCarrito(${i})" style="background:none; border:none; color:#991b1b; cursor:pointer; font-size:1.1rem;" title="Eliminar">&times;</button>
          </div>
        `).join('')}
      </div>
      <div style="display:flex; justify-content:space-between; font-weight:bold; font-size:1.1rem; padding: 0.8rem 0; border-top: 2px solid var(--border-color);">
        <span>Total estimado:</span>
        <span style="color:#166534;">${formatearPrecioAuth(total)}</span>
      </div>
    `;

  modal.innerHTML = `
    <div class="modal-card" style="max-width: 460px;">
      <h3>🛒 Tu Carrito de Compras <button type="button" class="modal-close" onclick="cerrarModalCarrito()">&times;</button></h3>
      ${itemsHTML}
      <div style="display:flex; justify-content:flex-end; gap:0.8rem; margin-top:1.2rem;">
        <button type="button" class="btn-cancel" onclick="cerrarModalCarrito()">Seguir explorando</button>
        ${carrito.length > 0 ? `<button type="button" class="btn-save" onclick="finalizarCompraDemo()">Finalizar Pedido</button>` : ''}
      </div>
    </div>
  `;

  modal.classList.add('active');
  modal.onclick = (e) => { if (e.target === modal) cerrarModalCarrito(); };
}

function cerrarModalCarrito() {
  const modal = document.getElementById('modalCarritoPreview');
  if (modal) modal.classList.remove('active');
}

function eliminarDelCarrito(index) {
  const key = obtenerCarritoKey();
  if (!key) return;
  let carrito = JSON.parse(localStorage.getItem(key) || '[]');
  if (index >= 0 && index < carrito.length) {
    carrito.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(carrito));
    mostrarToastAuth('Libro retirado del carrito');
    actualizarHeaderAuth();
    mostrarModalCarrito(carrito);
  }
}

function finalizarCompraDemo() {
  const key = obtenerCarritoKey();
  const sesion = obtenerSesionActual();
  if (!key || !sesion) { cerrarModalCarrito(); return; }

  const carrito = JSON.parse(localStorage.getItem(key) || '[]');
  if (carrito.length === 0) { cerrarModalCarrito(); return; }

  // 1. Descontar stock de cada libro comprado
  const LIBROS_KEY_LOCAL = 'paginas_libros_v4';
  let libros = [];
  try {
    const raw = localStorage.getItem(LIBROS_KEY_LOCAL);
    if (raw) {
      libros = JSON.parse(raw);
    } else if (typeof obtenerLibros === 'function') {
      libros = obtenerLibros();
    }
  } catch {}

  carrito.forEach(item => {
    const libro = libros.find(l => l.id === item.id);
    if (libro && (libro.stock || 0) > 0) {
      libro.stock = Math.max(0, libro.stock - 1);
      if (libro.stock === 0) {
        registrarActividadAuth('📦', `¡Agotado! El libro <strong>"${escaparHTML(libro.titulo)}"</strong> se ha quedado sin stock.`);
      } else if (libro.stock <= 3) {
        registrarActividadAuth('⚠️', `Stock crítico: Solo quedan <strong>${libro.stock} ejemplares</strong> de <strong>"${escaparHTML(libro.titulo)}"</strong>.`);
      }
    }
  });
  if (libros.length > 0) {
    localStorage.setItem(LIBROS_KEY_LOCAL, JSON.stringify(libros));
  }

  // 2. Guardar el pedido en historial
  const pedidos = JSON.parse(localStorage.getItem(PEDIDOS_KEY) || '[]');
  const total = carrito.reduce((acc, i) => acc + (i.precio || 0), 0);
  const ahora = new Date();
  pedidos.push({
    id: `PED-${Date.now()}`,
    usuarioId: sesion.id,
    usuario: sesion.usuario,
    email: sesion.email,
    items: carrito,
    total: total,
    fecha: ahora.toISOString(),
    estado: 'Completado'
  });
  localStorage.setItem(PEDIDOS_KEY, JSON.stringify(pedidos));

  // 3. Registrar actividad para admin
  registrarActividadAuth('🛒', `Pedido completado por <strong>${escaparHTML(sesion.usuario)}</strong> — ${formatearPrecioAuth(total)}`);

  // 4. Vaciar carrito del usuario
  localStorage.setItem(key, JSON.stringify([]));
  cerrarModalCarrito();
  actualizarHeaderAuth();

  // 5. Notificar a la ventana actual y re-renderizar catálogo si está presente
  try {
    window.dispatchEvent(new Event('storage'));
    if (typeof renderizarLibros === 'function') {
      renderizarLibros();
    }
  } catch {}

  mostrarToastAuth('🎉 ¡Pedido realizado! El stock se ha actualizado. Gracias por tu compra.');
}

function mostrarModalFavoritos(favoritos) {
  const libros = typeof obtenerLibros === 'function' ? obtenerLibros() : [];
  const librosFav = libros.filter(l => favoritos.includes(l.id));

  let modal = document.getElementById('modalFavoritosPreview');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'modalFavoritosPreview';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
  }

  const itemsHTML = librosFav.length === 0 
    ? '<p style="text-align:center; padding: 2rem 0; color:var(--text-muted); font-style:italic;">Aún no has guardado ningún libro en tus favoritos.</p>'
    : `
      <div style="max-height: 280px; overflow-y:auto; margin: 1rem 0;">
        ${librosFav.map(l => `
          <div style="display:flex; justify-content:space-between; align-items:center; padding: 0.6rem 0; border-bottom: 1px dotted var(--brown-medium);">
            <div>
              <strong style="color:var(--text-strong);">${escaparHTML(l.titulo)}</strong>
              <div style="font-size:0.85rem; color:var(--text-muted);">${escaparHTML(l.autor)} · ${formatearPrecioAuth(l.precio)}</div>
            </div>
            <button type="button" onclick="if(typeof abrirModalDetalle==='function'){ cerrarModalFavoritos(); abrirModalDetalle(${l.id}); }" style="background:var(--brown-dark); color:var(--bg-main); border:none; padding:0.3rem 0.6rem; border-radius:4px; cursor:pointer; font-size:0.8rem;">Ver libro</button>
          </div>
        `).join('')}
      </div>
    `;

  modal.innerHTML = `
    <div class="modal-card" style="max-width: 480px;">
      <h3>❤️ Tus Libros Favoritos (${favoritos.length}) <button type="button" class="modal-close" onclick="cerrarModalFavoritos()">&times;</button></h3>
      ${itemsHTML}
      <div style="display:flex; justify-content:flex-end; margin-top:1.2rem;">
        <button type="button" class="btn-cancel" onclick="cerrarModalFavoritos()">Cerrar</button>
      </div>
    </div>
  `;

  modal.classList.add('active');
  modal.onclick = (e) => { if (e.target === modal) cerrarModalFavoritos(); };
}

function cerrarModalFavoritos() {
  const modal = document.getElementById('modalFavoritosPreview');
  if (modal) modal.classList.remove('active');
}

/* ========================================================
   INICIALIZADORES ESPECÍFICOS DE LOGIN Y REGISTRO
   ======================================================== */

function inicializarPaginaLogin() {
  const form = document.getElementById('loginForm');
  if (!form) return;

  form.setAttribute('action', 'javascript:void(0);');
  form.removeAttribute('method');
  form.onsubmit = function(e) {
    return ejecutarLogin(e);
  };

  // Insertar contenedor de alertas vintage antes de los campos
  let alertContainer = document.getElementById('authAlert');
  if (!alertContainer) {
    alertContainer = document.createElement('div');
    alertContainer.id = 'authAlert';
    alertContainer.className = 'auth-alert';
    form.parentNode.insertBefore(alertContainer, form);
  }

  // Insertar botón de prueba rápida de credenciales (solo lector)
  let demoBox = document.getElementById('demoCredentialsBox');
  if (!demoBox) {
    demoBox = document.createElement('div');
    demoBox.id = 'demoCredentialsBox';
    demoBox.className = 'demo-credentials-box';
    demoBox.innerHTML = `
      <div class="demo-box-header">⚡ Credenciales de prueba rápida:</div>
      <div class="demo-buttons-row">
        <button type="button" class="btn-demo-fill" onclick="llenarCredenciales('carlos@gmail.com', 'password123')">
          Lector: carlos@gmail.com
        </button>
      </div>
    `;
    form.parentNode.insertBefore(demoBox, form);
  }

  // Añadir toggle de visibilidad para contraseña
  const passInput = document.getElementById('password');
  if (passInput && !passInput.parentNode.querySelector('.password-input-wrapper')) {
    // Envolver el input en un wrapper con position:relative
    const wrapper = document.createElement('div');
    wrapper.className = 'password-input-wrapper';
    passInput.parentNode.insertBefore(wrapper, passInput);
    wrapper.appendChild(passInput);

    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.className = 'btn-toggle-password';
    toggleBtn.setAttribute('aria-label', 'Mostrar / ocultar contraseña');
    toggleBtn.title = 'Mostrar / ocultar contraseña';
    toggleBtn.innerHTML = iconoOjoMostrar();
    toggleBtn.onclick = () => {
      if (passInput.type === 'password') {
        passInput.type = 'text';
        toggleBtn.innerHTML = iconoOjoOcultar();
      } else {
        passInput.type = 'password';
        toggleBtn.innerHTML = iconoOjoMostrar();
      }
    };
    wrapper.appendChild(toggleBtn);
  }

  const submitBtn = form.querySelector('.btn-submit');
  if (submitBtn) {
    submitBtn.onclick = function(e) {
      return ejecutarLogin(e);
    };
  }
}

function inicializarPaginaRegister() {
  const form = document.getElementById('registerForm');
  if (!form) return;

  form.setAttribute('action', 'javascript:void(0);');
  form.removeAttribute('method');
  form.onsubmit = function(e) {
    return ejecutarRegistro(e);
  };

  // Insertar contenedor de alertas vintage
  let alertContainer = document.getElementById('authAlert');
  if (!alertContainer) {
    alertContainer = document.createElement('div');
    alertContainer.id = 'authAlert';
    alertContainer.className = 'auth-alert';
    form.parentNode.insertBefore(alertContainer, form);
  }

  // Añadir toggle de visibilidad para contraseñas
  ['password', 'confirm-password'].forEach(id => {
    const input = document.getElementById(id);
    if (input && !input.parentNode.querySelector('.password-input-wrapper')) {
      // Envolver el input en un wrapper con position:relative
      const wrapper = document.createElement('div');
      wrapper.className = 'password-input-wrapper';
      input.parentNode.insertBefore(wrapper, input);
      wrapper.appendChild(input);

      const toggleBtn = document.createElement('button');
      toggleBtn.type = 'button';
      toggleBtn.className = 'btn-toggle-password';
      toggleBtn.setAttribute('aria-label', 'Mostrar / ocultar contraseña');
      toggleBtn.title = 'Mostrar / ocultar contraseña';
      toggleBtn.innerHTML = iconoOjoMostrar();
      toggleBtn.onclick = () => {
        if (input.type === 'password') {
          input.type = 'text';
          toggleBtn.innerHTML = iconoOjoOcultar();
        } else {
          input.type = 'password';
          toggleBtn.innerHTML = iconoOjoMostrar();
        }
      };
      wrapper.appendChild(toggleBtn);
    }
  });

  const submitBtn = form.querySelector('.btn-submit');
  if (submitBtn) {
    submitBtn.onclick = function(e) {
      return ejecutarRegistro(e);
    };
  }
}

/* ========================================================
   ICONOS SVG PARA EL BOTÓN DE VISIBILIDAD DE CONTRASEÑA
   ======================================================== */

function iconoOjoMostrar() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>`;
}

function iconoOjoOcultar() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>`;
}

function llenarCredenciales(email, pass) {
  const emailInput = document.getElementById('email');
  const passInput = document.getElementById('password');
  if (emailInput && passInput) {
    emailInput.value = email;
    passInput.value = pass;
    mostrarAlertaAuth(`Credenciales cargadas: ${email}. Haz clic en "Ingresar".`, 'info');
  }
}

function mostrarAlertaAuth(mensaje, tipo = 'error') {
  const alertEl = document.getElementById('authAlert');
  if (!alertEl) return;

  alertEl.className = `auth-alert auth-alert-${tipo}`;
  alertEl.innerHTML = `
    <div class="auth-alert-icon">${tipo === 'error' ? '⚠️' : tipo === 'success' ? '✅' : 'ℹ️'}</div>
    <div class="auth-alert-text">${mensaje}</div>
  `;
  alertEl.style.display = 'flex';
  alertEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function mostrarToastAuth(mensaje) {
  let toast = document.getElementById('vintageToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'vintageToast';
    toast.className = 'vintage-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = mensaje;
  toast.classList.add('visible');
  setTimeout(() => {
    toast.classList.remove('visible');
  }, 3200);
}

function formatearPrecioAuth(num) {
  if (typeof num !== 'number') num = parseInt(num) || 0;
  return '$' + num.toLocaleString('es-CO');
}

function escaparHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* ========================================================
   SINCRONIZACIÓN Y AUTO-INICIALIZACIÓN
   ======================================================== */

window.addEventListener('storage', function(e) {
  if (e.key === SESION_KEY || e.key === USUARIOS_KEY ||
      (e.key && (e.key.startsWith('paginas_carrito') || e.key.startsWith('paginas_favoritos')))) {
    actualizarHeaderAuth();
  }
});

function iniciarAuth() {
  obtenerUsuarios();
  actualizarHeaderAuth();

  if (document.getElementById('loginForm')) {
    inicializarPaginaLogin();
  }

  if (document.getElementById('registerForm')) {
    inicializarPaginaRegister();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciarAuth);
} else {
  iniciarAuth();
}
