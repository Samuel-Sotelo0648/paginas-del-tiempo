# 📚 Páginas del Tiempo

Marketplace de libros antiguos y usados enfocado en dar una segunda vida a obras literarias que aún tienen historias por contar.

---

## 📝 Descripción del proyecto

**Páginas del Tiempo** es una plataforma inspirada en la preservación de la literatura y la reutilización de libros antiguos, clásicos descatalogados y ediciones difíciles de encontrar.  

El proyecto nace con la idea de conectar lectores apasionados con libros que conservan historia, valor cultural y emocional, permitiendo que nuevas personas puedan descubrir obras que ya no circulan fácilmente en librerías tradicionales.  

Más que una tienda de libros usados, el objetivo es construir una experiencia enfocada en:

- 📖 La conservación de obras literarias.  
- ♻️ La reutilización y segunda vida de los libros.  
- 🕰️ La búsqueda y acceso a ediciones especiales.  
- 🤝 La creación de una comunidad de amantes de la literatura.  

Actualmente el proyecto se encuentra en su primera etapa de desarrollo frontend, implementado únicamente con **HTML5** y **CSS3**, siguiendo buenas prácticas de organización de archivos, control de versiones y trabajo por ramas.  

Este proyecto hace parte del proceso formativo del programa de desarrollo de software en la academia **CESDE**, bajo un enfoque de aprendizaje basado en proyectos.

---

## 🛠️ Tecnologías utilizadas

- HTML5  
- CSS3  
- Git  
- GitHub  
- Jira  
- Visual Studio Code  

---

## 🌿 Estrategia de ramas

El proyecto utiliza una estrategia basada en **GitFlow simplificado**:

- **Main**: Versión estable y lista para producción.  
- **dev**: Rama de integración de todas las funcionalidades.  
- **feat/***: Ramas para desarrollo de tareas específicas.  

**Flujo de trabajo:**  
```bash
feat/* → dev → main
```

---

## 📂 Estructura del proyecto

```bash
Paginas del Tiempo Frontend/
│
├── assets/
│   │
│   ├── css/
│   │   │
│   │   ├── base/
│   │   │   ├── global.css
│   │   │   ├── reset.css
│   │   │   └── variables.css
│   │   │
│   │   ├── components/
│   │   │   └── book-list.css
│   │   │
│   │   ├── layout/
│   │   │   ├── footer.css
│   │   │   ├── header.css
│   │   │   ├── navigation.css
│   │   │   └── search.css
│   │   │
│   │   ├── pages/
│   │   │   ├── about-us.css
│   │   │   ├── auth.css
│   │   │   ├── book-categories.css
│   │   │   ├── contact.css
│   │   │   └── home.css
│   │   │
│   │   └── style.css
│   │
│   └── img/
│       ├── contact-channels/
│       ├── favicon/
│       ├── hero-features/
│       ├── icons/
│       ├── logo/
│       ├── our-story/
│       ├── our-values/
│       └── why-us/
│
├── pages/
│   ├── about-us.html
│   ├── book-categories.html
│   ├── contact.html
│   ├── login.html
│   └── register.html
│
├── index.html
│
└── README.md
```

---

## 📁 Organización del proyecto

La arquitectura del proyecto fue diseñada utilizando una **estructura modular** para facilitar el mantenimiento, la escalabilidad y el trabajo colaborativo.

Una **estructura modular** en desarrollo de software significa que el proyecto está organizado en **módulos independientes**, cada uno con una responsabilidad clara y específica.

### Organización de estilos CSS

- **base/** → Configuraciones globales del proyecto, variables CSS y reseteo de estilos.  
- **components/** → Componentes reutilizables de la interfaz.  
- **layout/** → Estructuras principales (header, footer, nav, search).  
- **pages/** → Estilos específicos por página.  

### Organización de recursos gráficos
Las imágenes están separadas por secciones para mantener una estructura clara y facilitar la administración de recursos visuales del proyecto.

---

## 🎯 Objetivos del proyecto

- Aplicar buenas prácticas de desarrollo frontend.  
- Implementar una arquitectura escalable.  
- Usar control de versiones con Git y GitHub.  
- Simular flujo de trabajo colaborativo con ramas.  
- Construir un marketplace funcional de forma progresiva.  

---

## 📌 Estado del proyecto

🚧 **En desarrollo**
