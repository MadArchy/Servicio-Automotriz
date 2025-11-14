# AutoTech · Servicios Automotrices en Cúcuta

Sitio web estático que presenta la oferta de servicios automotrices de AutoTech en Cúcuta. Incluye información destacada, portafolio de servicios, formulario de contacto y medios de comunicación directa.

## Estructura del proyecto

- `index.html`: Documento principal con la estructura semántica, metadatos SEO y componentes accesibles (navegación, hero, servicios, contacto y pie de página).
- `styles.css`: Hojas de estilo con variables CSS, temas visuales, diseño responsive, efectos neon y ajustes para `prefers-reduced-motion`.
- `script.js`: Lógica de interacción (menú móvil accesible, carrusel con soporte para teclado, resaltado de servicios, formulario con toast, animaciones y optimizaciones).
- `assets/`: Carpeta sugerida para favicon, imágenes optimizadas y recursos compartidos (crear según sea necesario).

## Mejoras aplicadas

- **SEO y datos estructurados**
  - Metatags de descripción, keywords, canonical, Open Graph y Twitter.
  - Marcado `JSON-LD` (`AutomotiveBusiness`) para mejorar el posicionamiento local.
  - Título ajustado y jerarquía de encabezados (`h1` en hero, secciones con `aria-labelledby`).
- **Accesibilidad**
  - Enlaces de salto, atributos `aria-*`, manejo de foco visible y roles adecuados.
  - Navegación responsive con botón accesible, cierre con `Escape` y control de `aria-expanded`.
  - Slider con `aria-live`, tabs accesibles y respeto a `prefers-reduced-motion`.
  - Toast con `role="status"`, mapa embebido accesible y formulario con ayudas descriptivas.
- **Desempeño**
  - Script cargado con `defer`, reducción de animaciones cuando corresponde y optimización del carrusel.
  - Recomendaciones para usar imágenes comprimidas/WebP y caché de fuentes.
  - Preparación para enlazar políticas legales reales y redes sociales con `rel="noopener"`.
- **Contenido y pie de página**
  - Datos de contacto reales, mapa de Google embebido, enlaces sociales y legales.
  - Menú principal disponible también en escritorio, call-to-action consistentes hacia WhatsApp y FAQ.

## Puesta en marcha

1. Clona o descarga el repositorio.
2. Guarda tus recursos en `assets/` (favicon `favicon.ico`, imagen `og-image.jpg`, logotipos, etc.).
3. Abre `index.html` en tu navegador preferido o usa un servidor estático (`npx serve`, `live-server`, VSCode Live Preview).

## Personalización rápida

- **Identidad**: reemplaza textos de marca, enlaces de redes sociales y números de WhatsApp.
- **Servicios**: ajusta títulos, descripciones y bullets por cada especialidad.
- **Formularios**: integra un backend o servicios como Formspree/EmailJS; actualiza los endpoints y gestiona respuestas/errores.
- **SEO**: sustituye URLs canónicas y open graph por dominios reales; añade palabras clave locales adicionales.
- **Políticas**: crea las páginas `politica-de-privacidad.html`, `terminos-y-condiciones.html` y `politica-de-cookies.html`.

## Recomendaciones de pruebas

- **Lighthouse** (Chrome DevTools) para revisar performance, accesibilidad y SEO.
- **Validadores**: [validator.w3.org](https://validator.w3.org/) para HTML y [wave.webaim.org](https://wave.webaim.org/) para accesibilidad.
- **Pruebas manuales**: navegación con teclado, lector de pantalla (NVDA/VoiceOver) y dispositivos móviles.

## Próximos pasos sugeridos

- Implementar **formularios funcionales** con envío real y respuestas personalizadas.
- Añadir **analítica** (Google Analytics/Matomo) y seguimiento de eventos (WhatsApp, cotizaciones).
- Desplegar versión minificada de CSS/JS (Vite, Parcel o Webpack) y habilitar cache busting.
- Preparar un **blog o sección de noticias** para reforzar SEO y contenidos de valor.
- Incorporar testimonios, preguntas frecuentes ampliadas y un comparativo rápido de servicios.

---

Mantén este README actualizado a medida que evolucione el proyecto y documenta cualquier nueva dependencia o proceso de despliegue. ¡Éxitos con AutoTech!

