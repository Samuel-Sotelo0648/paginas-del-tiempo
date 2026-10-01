/* ===============================================================================================
   PÁGINAS DEL TIEMPO - CATÁLOGO Y CONEXIÓN CON ADMINISTRACIÓN
   Sincroniza en tiempo real libros y categorías entre admin.html y la tienda pública
   =============================================================================================== */

var LIBROS_KEY = window.LIBROS_KEY = window.LIBROS_KEY || 'paginas_libros_v4';
var CATEGORIAS_KEY = window.CATEGORIAS_KEY = window.CATEGORIAS_KEY || 'paginas_categorias_v1';
var CARRITO_KEY = window.CARRITO_KEY = window.CARRITO_KEY || 'paginas_carrito';
var FAVORITOS_KEY = window.FAVORITOS_KEY = window.FAVORITOS_KEY || 'paginas_favoritos';

var LIBROS_DEFECTO = window.LIBROS_DEFECTO = window.LIBROS_DEFECTO || [
  { id: 101, isbn: "9788415618836", titulo: "Drácula", autor: "Bram Stoker", precio: 35000, descripcion: "Clásico del terror gótico ambientado en Transilvania e Inglaterra.", stock: 8, categoria: "Terror", encuadernacion: "Dura", estado: "Excelente" },
  { id: 102, isbn: "9788478884452", titulo: "Harry Potter y la Piedra Filosofal", autor: "J.K. Rowling", precio: 50000, descripcion: "El inicio del joven mago en el Colegio Hogwarts de Magia y Hechicería.", stock: 10, categoria: "Fantasía", encuadernacion: "Blanda", estado: "Bueno" },
  { id: 103, isbn: "9788491990437", titulo: "Breves respuestas a las grandes preguntas", autor: "Stephen Hawking", precio: 42000, descripcion: "Reflexiones finales del célebre físico sobre el universo y el futuro de la humanidad.", stock: 6, categoria: "Ciencia", encuadernacion: "Dura", estado: "Excelente" },
  { id: 104, isbn: "9788437604947", titulo: "Veinte poemas de amor y una canción desesperada", autor: "Pablo Neruda", precio: 25000, descripcion: "Una de las obras cumbre de la poesía amorosa en lengua castellana.", stock: 7, categoria: "Poesía", encuadernacion: "Blanda", estado: "Bueno" },
  { id: 105, isbn: "9788491050292", titulo: "Orgullo y prejuicio", autor: "Jane Austen", precio: 38000, descripcion: "Inmortal historia sobre las apariencias, el amor y los prejuicios sociales.", stock: 9, categoria: "Romance", encuadernacion: "Dura", estado: "Excelente" },
  { id: 106, isbn: "9788499924212", titulo: "Sapiens: De animales a dioses", autor: "Yuval Noah Harari", precio: 60000, descripcion: "Un recorrido fascinante por la historia y evolución de nuestra especie.", stock: 5, categoria: "Historia", encuadernacion: "Dura", estado: "Excelente" },
  { id: 107, isbn: "9788401021282", titulo: "Mi historia", autor: "Michelle Obama", precio: 47000, descripcion: "Memorias íntimas y reflexivas de la ex primera dama de los Estados Unidos.", stock: 4, categoria: "Biografía", encuadernacion: "Blanda", estado: "Bueno" },
  { id: 108, isbn: "9788498381498", titulo: "El principito", autor: "Antoine de Saint-Exupéry", precio: 30000, descripcion: "Relato poético e ilustrado sobre la inocencia, el amor y la amistad.", stock: 15, categoria: "Infantil", encuadernacion: "Dura", estado: "Excelente" },
  { id: 109, isbn: "9788418118036", titulo: "Hábitos atómicos", autor: "James Clear", precio: 55000, descripcion: "Guía práctica y probada para conseguir cambios extraordinarios día a día.", stock: 12, categoria: "Autoayuda", encuadernacion: "Blanda", estado: "Excelente" },
  { id: 110, isbn: "9788403522121", titulo: "Padre rico, padre pobre", autor: "Robert T. Kiyosaki", precio: 40000, descripcion: "Lecciones indispensables sobre educación financiera y mentalidad de abundancia.", stock: 11, categoria: "Economía", encuadernacion: "Dura", estado: "Bueno" },
  { id: 1, isbn: "9788420471839", titulo: "Cien años de soledad", autor: "Gabriel García Márquez", precio: 45000, descripcion: "Obra maestra del realismo mágico sobre la mítica familia Buendía en Macondo.", stock: 12, categoria: "Novela clásica", encuadernacion: "Dura", estado: "Excelente" },
  { id: 2, isbn: "9788424116040", titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", precio: 65000, descripcion: "El gran hidalgo de la literatura universal en sus inolvidables andanzas.", stock: 8, categoria: "Novela clásica", encuadernacion: "Dura", estado: "Bueno" },
  { id: 3, isbn: "9788497592208", titulo: "Los tres mosqueteros", autor: "Alexandre Dumas", precio: 48000, descripcion: "Aventuras épicas, honor y camaradería en la Francia del siglo XVII.", stock: 0, categoria: "Novela clásica", encuadernacion: "Blanda", estado: "Aceptable" },
  { id: 4, isbn: "9788445071403", titulo: "El señor de los anillos", autor: "J.R.R. Tolkien", precio: 85000, descripcion: "La gran epopeya de la Tierra Media y el viaje para destruir el Anillo Único.", stock: 5, categoria: "Fantasía", encuadernacion: "Dura", estado: "Excelente" }
];

var CATEGORIAS_DEFECTO = window.CATEGORIAS_DEFECTO = window.CATEGORIAS_DEFECTO || [
  "Terror", "Fantasía", "Ciencia", "Poesía", "Romance", "Historia", 
  "Biografía", "Infantil", "Autoayuda", "Economía", "Novela clásica", "Ficción"
];

/* ========================================================
   ACCESO A DATOS COMPARTIDOS
   ======================================================== */

function obtenerLibros() {
  const guardados = localStorage.getItem(LIBROS_KEY);
  if (guardados) {
    try {
      return JSON.parse(guardados);
    } catch {
      return [...LIBROS_DEFECTO];
    }
  }
  localStorage.setItem(LIBROS_KEY, JSON.stringify(LIBROS_DEFECTO));
  return [...LIBROS_DEFECTO];
}

function obtenerCategorias() {
  let categorias = [];
  const guardadas = localStorage.getItem(CATEGORIAS_KEY);
  if (guardadas) {
    try {
      categorias = JSON.parse(guardadas);
    } catch {
      categorias = [...CATEGORIAS_DEFECTO];
    }
  } else {
    categorias = [...CATEGORIAS_DEFECTO];
    localStorage.setItem(CATEGORIAS_KEY, JSON.stringify(categorias));
  }

  // Combinar con cualquier categoría presente en los libros para asegurar consistencia
  const libros = obtenerLibros();
  const catsDeLibros = libros.map(l => l.categoria).filter(Boolean);
  const setTotal = new Set([...categorias, ...catsDeLibros]);
  return Array.from(setTotal);
}

function formatearPrecio(num) {
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

function resolverPortada(libro) {
  if (libro.portada) return libro.portada;
  if (libro.isbn) return `https://covers.openlibrary.org/b/isbn/${encodeURIComponent(libro.isbn)}-M.jpg`;
  return window.location.pathname.includes('/pages/') 
    ? './../assets/img/hero-features/libro.png' 
    : './assets/img/hero-features/libro.png';
}

/* ========================================================
   CONSTRUCTOR DE TARJETA DE LIBRO
   ======================================================== */

function crearTarjetaLibroHTML(libro, opciones = {}) {
  const { esNuevo = false, descuento = 0, esMasVendido = false } = opciones;
  const portadaSrc = resolverPortada(libro);
  const disponible = (libro.stock || 0) > 0;
  const stockTexto = disponible ? `✓ En stock (${libro.stock})` : 'Agotado';
  const stockClase = disponible ? 'available' : 'out';

  // Badges
  let badgesHTML = '';
  if (esNuevo) {
    badgesHTML += '<span class="book-badge new">✨ Nuevo</span>';
  }
  if (descuento > 0) {
    badgesHTML += `<span class="book-badge discount">-${descuento}%</span>`;
  }
  if (esMasVendido) {
    badgesHTML += '<span class="book-badge bestseller">🔥 Popular</span>';
  }

  // Precios (con descuento visual si aplica)
  let precioHTML = '';
  if (descuento > 0) {
    const precioOriginal = Math.round(libro.precio / (1 - descuento / 100));
    precioHTML = `<span class="old-price">${formatearPrecio(precioOriginal)}</span> ${formatearPrecio(libro.precio)}`;
  } else {
    precioHTML = formatearPrecio(libro.precio);
  }

  // Favorito check (usuario activo)
  const favKey = (typeof obtenerFavoritosKey === 'function') ? obtenerFavoritosKey() : null;
  const favs = favKey ? JSON.parse(localStorage.getItem(favKey) || '[]') : [];
  const esFav = favs.includes(libro.id);

  return `
    <article class="book-card" data-id="${libro.id}" data-category="${escaparHTML(libro.categoria || '')}">
      <div class="book-card-cover">
        ${libro.categoria ? `<span class="book-badge category" title="${escaparHTML(libro.categoria)}">${escaparHTML(libro.categoria)}</span>` : ''}
        <div class="book-badges">${badgesHTML}</div>
        <img src="${portadaSrc}" 
             alt="Portada de ${escaparHTML(libro.titulo)}" 
             loading="lazy"
             onerror="this.onerror=null; this.src='./assets/img/hero-features/libro.png';">
      </div>

      <div class="book-card-info">
        <h3 class="book-card-title" title="${escaparHTML(libro.titulo)}">${escaparHTML(libro.titulo)}</h3>
        <p class="book-card-author">${escaparHTML(libro.autor || 'Autor desconocido')}</p>
        
        <div class="book-card-rating">
          ★★★★☆ <span class="rating-num">(${libro.estado || 'Bueno'})</span>
        </div>

        <div class="book-card-price-row">
          <div class="book-card-price">${precioHTML}</div>
          <div class="book-card-stock ${stockClase}">${stockTexto}</div>
        </div>

        <div class="book-card-actions">
          <button type="button" class="btn-card-detail" onclick="abrirModalDetalle(${libro.id})">Ver libro</button>
          <button type="button" class="btn-card-cart" onclick="agregarAlCarrito(${libro.id})" title="Añadir al carrito" ${!disponible ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></button>
          <button type="button" class="btn-card-fav ${esFav ? 'active' : ''}" onclick="toggleFavorito(${libro.id}, this)" title="Favorito">${esFav ? iconoCorazonLleno() : iconoCorazonVacio()}</button>
        </div>

      </div>
    </article>
  `;
}

/* ========================================================
   RENDERIZADOR PRINCIPAL PARA INDEX.HTML
   ======================================================== */

let categoriaSeleccionada = null;
let terminoBusqueda = '';

function renderizarCategoriasHome() {
  const ul = document.getElementById('categoriesList');
  if (!ul) return;

  const categorias = obtenerCategorias();
  const libros = obtenerLibros();

  // Calcular conteo por categoría
  const conteos = {};
  libros.forEach(l => {
    if (l.categoria) {
      conteos[l.categoria] = (conteos[l.categoria] || 0) + 1;
    }
  });

  ul.innerHTML = '';

  // Opción "Todas las categorías"
  const liTodas = document.createElement('li');
  const aTodas = document.createElement('a');
  aTodas.href = 'javascript:void(0)';
  aTodas.innerHTML = `<span>🌟 Todas</span> <span class="count">${libros.length}</span>`;
  if (!categoriaSeleccionada) aTodas.classList.add('active');
  aTodas.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    seleccionarCategoria(null);
  });
  liTodas.appendChild(aTodas);
  ul.appendChild(liTodas);

  categorias.forEach(cat => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = 'javascript:void(0)';
    const total = conteos[cat] || 0;
    a.innerHTML = `<span>${escaparHTML(cat)}</span> <span class="count">${total}</span>`;
    if (categoriaSeleccionada === cat) a.classList.add('active');

    a.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      seleccionarCategoria(cat);
    });

    li.appendChild(a);
    ul.appendChild(li);
  });
}

function seleccionarCategoria(cat) {
  const currentY = window.pageYOffset || document.documentElement.scrollTop;
  categoriaSeleccionada = cat;
  renderizarCategoriasHome();
  renderizarLibrosHome();
  // Mantener la posición de desplazamiento exactamente igual sin saltos
  window.scrollTo({ top: currentY, behavior: 'instant' });
  requestAnimationFrame(() => {
    window.scrollTo({ top: currentY, behavior: 'instant' });
  });
}

function renderizarLibrosHome() {
  const libros = obtenerLibros();

  // Si hay filtro activo por categoría o búsqueda
  const hayFiltro = Boolean(categoriaSeleccionada || terminoBusqueda);

  // Filtrado general si aplica
  let librosFiltrados = [...libros];
  if (categoriaSeleccionada) {
    librosFiltrados = librosFiltrados.filter(l => (l.categoria || '').toLowerCase() === categoriaSeleccionada.toLowerCase());
  }
  if (terminoBusqueda) {
    const q = terminoBusqueda.toLowerCase();
    librosFiltrados = librosFiltrados.filter(l => 
      (l.titulo || '').toLowerCase().includes(q) ||
      (l.autor || '').toLowerCase().includes(q) ||
      (l.isbn || '').toLowerCase().includes(q) ||
      (l.categoria || '').toLowerCase().includes(q)
    );
  }

  // Elementos de la página
  const secDestacados = document.querySelector('.book-section[data-type="featured"]');
  const secMasVendidos = document.querySelector('.book-list[data-type="best-sellers"]');
  const secDescuentos = document.querySelector('.book-list[data-type="discounts"]');
  const secMejorCalificados = document.querySelector('.book-list[data-type="top-rated"]');
  const secNuevos = document.querySelector('.book-list[data-type="new-releases"]');

  if (hayFiltro) {
    // Modo filtrado: actualizar la sección del explorador con los libros de la categoría
    if (secDestacados) {
      const headerEl = secDestacados.querySelector('.section-header');
      if (headerEl) {
        const tituloTexto = categoriaSeleccionada 
          ? `Libros en "${escaparHTML(categoriaSeleccionada)}" <span style="font-size:0.9rem; font-weight:normal; color:var(--text-muted);">(${librosFiltrados.length} encontrados)</span>` 
          : `Resultados de búsqueda <span style="font-size:0.9rem; font-weight:normal; color:var(--text-muted);">(${librosFiltrados.length} encontrados)</span>`;
        
        headerEl.innerHTML = `
          <h2>${tituloTexto}</h2>
          <button type="button" class="btn-clear-filter" onclick="limpiarFiltros()" style="background:var(--brown-dark); color:var(--bg-main); border:none; padding:0.4rem 0.8rem; border-radius:6px; cursor:pointer; font-family:inherit; font-size:0.85rem;">✕ Mostrar todos</button>
        `;
      }

      const grid = secDestacados.querySelector('.books-grid');
      if (grid) {
        if (librosFiltrados.length === 0) {
          grid.innerHTML = `<div class="empty-grid-msg" style="padding:2rem; text-align:center; color:var(--text-muted); font-style:italic;">📖 No se encontraron libros disponibles en esta categoría. Puedes agregarlos desde el panel de administración.</div>`;
        } else {
          grid.innerHTML = librosFiltrados.map(l => crearTarjetaLibroHTML(l, { esNuevo: l.id > 100 })).join('');
        }
      }
    }

    // Mantener las secciones inferiores visibles para que la página NO colapse su altura ni haga saltos bruscos
    [secMasVendidos, secDescuentos, secMejorCalificados, secNuevos].forEach(sec => {
      if (sec) sec.style.display = '';
    });

  } else {
    // Modo normal: restaurar encabezados
    if (secDestacados) {
      const headerEl = secDestacados.querySelector('.section-header');
      if (headerEl) {
        headerEl.innerHTML = `
          <h2>Libros Destacados</h2>
          <a href="./pages/book-categories.html" class="view-all">Ver todos →</a>
        `;
      }
      const grid = secDestacados.querySelector('.books-grid');
      if (grid) {
        const destacados = libros.slice(0, 4);
        grid.innerHTML = destacados.map(l => crearTarjetaLibroHTML(l, { esNuevo: l.id > 100 })).join('');
      }
    }

    // 2. Más vendidos (Muestra libros populares)
    if (secMasVendidos) {
      const grid = secMasVendidos.querySelector('.books-grid');
      if (grid) {
        const populares = libros.filter(l => l.stock > 6).slice(0, 4);
        grid.innerHTML = populares.map(l => crearTarjetaLibroHTML(l, { esMasVendido: true })).join('');
      }
    }

    // 3. Descuentos (Aplica descuento visual del 15% o 20%)
    if (secDescuentos) {
      const grid = secDescuentos.querySelector('.books-grid');
      if (grid) {
        const enOferta = libros.slice(4, 8);
        grid.innerHTML = enOferta.map((l, idx) => crearTarjetaLibroHTML(l, { descuento: idx % 2 === 0 ? 20 : 15 })).join('');
      }
    }

    // 4. Mejor calificados (Libros en estado excelente)
    if (secMejorCalificados) {
      const grid = secMejorCalificados.querySelector('.books-grid');
      if (grid) {
        const excelentes = libros.filter(l => l.estado === 'Excelente').slice(0, 4);
        grid.innerHTML = excelentes.map(l => crearTarjetaLibroHTML(l)).join('');
      }
    }

    // 5. Nuevos libros (Ordenados por id o los más recientemente agregados desde admin)
    if (secNuevos) {
      const grid = secNuevos.querySelector('.books-grid');
      if (grid) {
        const recientes = libros.slice(0, 4);
        grid.innerHTML = recientes.map(l => crearTarjetaLibroHTML(l, { esNuevo: true })).join('');
      }
    }
  }
}

function limpiarFiltros() {
  const currentY = window.pageYOffset || document.documentElement.scrollTop;
  categoriaSeleccionada = null;
  terminoBusqueda = '';
  const searchInputs = document.querySelectorAll('.search input');
  searchInputs.forEach(input => { input.value = ''; });
  renderizarCategoriasHome();
  renderizarLibrosHome();
  window.scrollTo({ top: currentY, behavior: 'instant' });
  requestAnimationFrame(() => {
    window.scrollTo({ top: currentY, behavior: 'instant' });
  });
}

/* ========================================================
   MODAL DE DETALLE DE LIBRO
   ======================================================== */

function asegurarModalEnDOM() {
  let modal = document.getElementById('modalDetalleLibro');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'modalDetalleLibro';
    modal.innerHTML = `
      <div class="modal-card">
        <h3>Detalle del Libro <button type="button" class="modal-close" onclick="cerrarModalDetalle()">&times;</button></h3>
        <div class="book-modal-content">
          <div class="book-modal-cover">
            <img id="modalLibroPortada" src="./assets/img/hero-features/libro.png" alt="Portada del libro">
          </div>
          <div class="book-modal-details">
            <h2 id="modalLibroTitulo" style="font-size: 1.4rem; color: var(--text-strong); margin-bottom: 0.2rem;">Título del libro</h2>
            <p class="author" id="modalLibroAutor">Autor</p>
            <div class="book-modal-meta">
              <div><span class="label">Categoría:</span> <span id="modalLibroCategoria">—</span></div>
              <div><span class="label">ISBN:</span> <span id="modalLibroIsbn">—</span></div>
              <div><span class="label">Encuadernación:</span> <span id="modalLibroEncuadernacion">—</span></div>
              <div><span class="label">Estado físico:</span> <span id="modalLibroEstado">—</span></div>
              <div><span class="label">Disponibilidad:</span> <span id="modalLibroStock">—</span></div>
            </div>
            <p class="book-modal-synopsis" id="modalLibroSinopsis">Sinopsis o descripción bibliográfica del ejemplar...</p>
            <div class="book-modal-footer">
              <div class="book-modal-price" id="modalLibroPrecio">$0</div>
              <button type="button" class="btn-modal-add" id="modalBtnAgregarCarrito"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="vertical-align:middle;margin-right:0.35rem"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    `;
    modal.addEventListener('click', function(e) {
      if (e.target === this) cerrarModalDetalle();
    });
    document.body.appendChild(modal);
  }
  return modal;
}

function abrirModalDetalle(idLibro) {
  const libros = obtenerLibros();
  const libro = libros.find(l => l.id === idLibro);
  if (!libro) return;

  const modal = asegurarModalEnDOM();
  if (!modal) return;

  const titEl = document.getElementById('modalLibroTitulo');
  if (titEl) titEl.textContent = libro.titulo || 'Sin título';

  const autEl = document.getElementById('modalLibroAutor');
  if (autEl) autEl.textContent = libro.autor || 'Autor desconocido';

  const catEl = document.getElementById('modalLibroCategoria');
  if (catEl) catEl.textContent = libro.categoria || 'General';

  const isbnEl = document.getElementById('modalLibroIsbn');
  if (isbnEl) isbnEl.textContent = libro.isbn || '—';

  const encEl = document.getElementById('modalLibroEncuadernacion');
  if (encEl) encEl.textContent = libro.encuadernacion || 'Blanda';

  const estEl = document.getElementById('modalLibroEstado');
  if (estEl) estEl.textContent = libro.estado || 'Bueno';

  const precEl = document.getElementById('modalLibroPrecio');
  if (precEl) precEl.textContent = formatearPrecio(libro.precio);

  const sinopEl = document.getElementById('modalLibroSinopsis');
  if (sinopEl) sinopEl.textContent = libro.descripcion || 'Sin descripción bibliográfica disponible.';

  const stockEl = document.getElementById('modalLibroStock');
  if (stockEl) {
    const disp = (libro.stock || 0) > 0;
    stockEl.textContent = disp ? `${libro.stock} unidades disponibles` : 'Agotado';
    stockEl.style.color = disp ? '#166534' : '#991b1b';
  }

  const portadaImg = document.getElementById('modalLibroPortada');
  if (portadaImg) {
    portadaImg.src = resolverPortada(libro);
    portadaImg.onerror = function() {
      this.onerror = null;
      this.src = window.location.pathname.includes('/pages/') 
        ? './../assets/img/hero-features/libro.png' 
        : './assets/img/hero-features/libro.png';
    };
  }

  const btnAdd = document.getElementById('modalBtnAgregarCarrito');
  if (btnAdd) {
    btnAdd.onclick = () => {
      agregarAlCarrito(libro.id);
      cerrarModalDetalle();
    };
  }

  modal.classList.add('active');
}

function cerrarModalDetalle() {
  const modal = document.getElementById('modalDetalleLibro');
  if (modal) modal.classList.remove('active');
}

/* ========================================================
   INTERACCIONES (CARRITO, FAVORITOS, TOASTS)
   ======================================================== */

function agregarAlCarrito(idLibro) {
  // Verificar sesión activa
  const carritoKey = (typeof obtenerCarritoKey === 'function') ? obtenerCarritoKey() : null;
  if (!carritoKey) {
    const isPagesDir = window.location.pathname.includes('/pages/');
    const loginUrl = isPagesDir ? './login.html' : './pages/login.html';
    if (typeof mostrarToast === 'function') mostrarToast('🔒 Inicia sesión para agregar libros al carrito.');
    setTimeout(() => { window.location.href = loginUrl; }, 1200);
    return;
  }

  const libros = obtenerLibros();
  const libro = libros.find(l => l.id === idLibro);
  if (!libro) return;

  const carrito = JSON.parse(localStorage.getItem(carritoKey) || '[]');
  carrito.push({ id: libro.id, titulo: libro.titulo, precio: libro.precio, fecha: new Date().toISOString() });
  localStorage.setItem(carritoKey, JSON.stringify(carrito));

  if (typeof actualizarHeaderAuth === 'function') actualizarHeaderAuth();
  mostrarToast(`🛒 ¡"${libro.titulo}" se añadió a tu carrito!`);
}

function toggleFavorito(idLibro, btnEl) {
  // Verificar sesión activa
  const favKey = (typeof obtenerFavoritosKey === 'function') ? obtenerFavoritosKey() : null;
  if (!favKey) {
    const isPagesDir = window.location.pathname.includes('/pages/');
    const loginUrl = isPagesDir ? './login.html' : './pages/login.html';
    if (typeof mostrarToast === 'function') mostrarToast('🔒 Inicia sesión para guardar libros en favoritos.');
    setTimeout(() => { window.location.href = loginUrl; }, 1200);
    return;
  }

  let favs = JSON.parse(localStorage.getItem(favKey) || '[]');
  const idx = favs.indexOf(idLibro);
  if (idx > -1) {
    favs.splice(idx, 1);
    if (btnEl) {
      btnEl.innerHTML = iconoCorazonVacio();
      btnEl.classList.remove('active');
    }
    mostrarToast('Eliminado de favoritos');
  } else {
    favs.push(idLibro);
    if (btnEl) {
      btnEl.innerHTML = iconoCorazonLleno();
      btnEl.classList.add('active');
    }
    mostrarToast('❤️ Guardado en tus favoritos');
  }
  localStorage.setItem(favKey, JSON.stringify(favs));
  if (typeof actualizarHeaderAuth === 'function') actualizarHeaderAuth();
}

function iconoCorazonLleno() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#991b1b" stroke="#991b1b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
}

function iconoCorazonVacio() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
}

function mostrarToast(mensaje) {
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

/* ========================================================
   RENDERIZADOR PARA PÁGINA DE CATEGORÍAS (book-categories.html)
   ======================================================== */

function renderizarBookCategoriesPage() {
  const container = document.querySelector('.categories-container');
  if (!container) return;

  const categorias = obtenerCategorias();
  const libros = obtenerLibros();

  let html = '<h1>Explorar libros por categoría</h1>';

  categorias.forEach(cat => {
    const librosCat = libros.filter(l => (l.categoria || '').toLowerCase() === cat.toLowerCase());
    const slug = cat.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

    html += `
      <section class="book-list" id="cat-${slug}" data-category="${escaparHTML(cat)}">
        <div class="section-header">
          <h2>${escaparHTML(cat)} <span style="font-size:0.9rem; font-weight:normal; color:var(--text-muted);">(${librosCat.length} ejemplares)</span></h2>
        </div>
        <div class="books-grid">
          ${librosCat.length > 0 
            ? librosCat.map(l => crearTarjetaLibroHTML(l)).join('')
            : '<div class="empty-grid-msg">📖 Aún no hay libros registrados en esta categoría. Puedes agregarlos desde el Panel de Administración.</div>'}
        </div>
      </section>
    `;
  });

  container.innerHTML = html;
}

/* ========================================================
   BUSCADOR EN VIVO CON RESULTADOS PEQUEÑOS FLOTANTES
   ======================================================== */

function iniciarBuscadorConResultadosFlotantes() {
  const searchContainers = document.querySelectorAll('.search');
  if (!searchContainers.length) return;

  searchContainers.forEach(container => {
    const input = container.querySelector('input[type="search"], input');
    if (!input) return;

    // Crear o recuperar el contenedor dropdown
    let dropdown = container.querySelector('.search-dropdown');
    if (!dropdown) {
      dropdown = document.createElement('div');
      dropdown.className = 'search-dropdown';
      container.appendChild(dropdown);
    }

    function actualizarResultados() {
      const q = input.value.trim().toLowerCase();
      if (!q) {
        dropdown.classList.remove('active');
        dropdown.innerHTML = '';
        return;
      }

      const libros = obtenerLibros();
      const resultados = libros.filter(l => 
        (l.titulo || '').toLowerCase().includes(q) ||
        (l.autor || '').toLowerCase().includes(q) ||
        (l.isbn || '').toLowerCase().includes(q) ||
        (l.categoria || '').toLowerCase().includes(q)
      );

      if (resultados.length === 0) {
        dropdown.innerHTML = `
          <div class="search-no-results">
            🔍 No encontramos libros para "<strong>${escaparHTML(input.value.trim())}</strong>"
          </div>
        `;
      } else {
        const limite = resultados.slice(0, 6);
        let itemsHTML = `
          <div class="search-dropdown-header">
            <span>Resultados (${resultados.length})</span>
            <span>Haz clic para abrir el libro</span>
          </div>
        `;

        limite.forEach(libro => {
          const portada = resolverPortada(libro);
          const fallback = window.location.pathname.includes('/pages/') 
            ? './../assets/img/hero-features/libro.png' 
            : './assets/img/hero-features/libro.png';

          itemsHTML += `
            <div class="search-item" data-id="${libro.id}" role="button" tabindex="0">
              <img src="${portada}" 
                   alt="Portada" 
                   class="search-item-thumb"
                   onerror="this.onerror=null; this.src='${fallback}';">
              <div class="search-item-details">
                <div class="search-item-title">${escaparHTML(libro.titulo)}</div>
                <div class="search-item-meta">${escaparHTML(libro.autor)}</div>
                ${libro.categoria ? `<span class="search-item-badge">${escaparHTML(libro.categoria)}</span>` : ''}
              </div>
              <div class="search-item-price">${formatearPrecio(libro.precio)}</div>
            </div>
          `;
        });

        dropdown.innerHTML = itemsHTML;

        // Añadir evento clic a cada elemento del resultado para abrir el libro directamente
        dropdown.querySelectorAll('.search-item').forEach(item => {
          item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const id = parseInt(this.dataset.id);
            dropdown.classList.remove('active');
            abrirModalDetalle(id);
          });
        });
      }

      dropdown.classList.add('active');
    }

    input.addEventListener('input', function() {
      actualizarResultados();
    });

    input.addEventListener('focus', function() {
      if (this.value.trim()) actualizarResultados();
    });

    input.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        dropdown.classList.remove('active');
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const firstItem = dropdown.querySelector('.search-item');
        if (firstItem) {
          firstItem.click();
        } else if (document.getElementById('categoriesList')) {
          terminoBusqueda = this.value.trim();
          renderizarLibrosHome();
          dropdown.classList.remove('active');
        }
      }
    });

    const searchBtn = container.querySelector('button[type="submit"], button');
    if (searchBtn) {
      searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const firstItem = dropdown.querySelector('.search-item');
        if (firstItem) {
          firstItem.click();
        } else if (document.getElementById('categoriesList')) {
          terminoBusqueda = input.value.trim();
          renderizarLibrosHome();
          dropdown.classList.remove('active');
        }
      });
    }
  });

  // Cerrar dropdown al hacer clic fuera del buscador
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.search')) {
      document.querySelectorAll('.search-dropdown').forEach(d => d.classList.remove('active'));
    }
  });
}

/* ========================================================
   SINCRONIZACIÓN EN TIEMPO REAL CON ADMIN
   ======================================================== */

window.addEventListener('storage', function(e) {
  if (e.key === LIBROS_KEY || e.key === CATEGORIAS_KEY) {
    if (document.getElementById('categoriesList')) {
      renderizarCategoriasHome();
      renderizarLibrosHome();
    }
    if (document.querySelector('.categories-container')) {
      renderizarBookCategoriesPage();
    }
    mostrarToast('📚 El catálogo se ha sincronizado en tiempo real');
  }
});

/* ========================================================
   INICIALIZACIÓN AL CARGAR LA PÁGINA
   ======================================================== */

function iniciarCatalogo() {
  // Asegurar que existan datos iniciales en localStorage
  obtenerLibros();
  obtenerCategorias();

  // Si estamos en index.html
  if (document.getElementById('categoriesList')) {
    renderizarCategoriasHome();
    renderizarLibrosHome();
  }

  // Si estamos en book-categories.html
  if (document.querySelector('.categories-container')) {
    renderizarBookCategoriesPage();
  }

  // Iniciar buscador flotante con resultados interactivos
  iniciarBuscadorConResultadosFlotantes();

  // Cerrar modal con overlay o escape
  document.getElementById('modalDetalleLibro')?.addEventListener('click', function(e) {
    if (e.target === this) cerrarModalDetalle();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') cerrarModalDetalle();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciarCatalogo);
} else {
  iniciarCatalogo();
}
