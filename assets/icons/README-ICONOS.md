# 🎨 Iconos de las Cards de Servicios

## 📍 Ubicación
Todos los iconos SVG están almacenados en un único archivo:
```
assets/icons/icon-sprites.svg
```

## ✅ Estado Actual
**¡Buenas noticias!** Los iconos ya están implementados y funcionando. **NO necesitas descargar nada adicional.**

Todos los iconos están en formato SVG y se cargan desde el archivo `icon-sprites.svg`.

---

## 📋 Iconos Usados en las Cards de Servicios

### 1. Card 1 - Aire Acondicionado J.J Automotriz
**Icono:** `icon-wind` (Viento/Aire)
**Ubicación en código:** Línea 266 de `index.html`
**Color:** Cyan (#06b6d4)
**Referencia SVG:** `assets/icons/icon-sprites.svg#icon-wind`

```html
<svg class="icon icon-cyan" aria-hidden="true">
    <use href="assets/icons/icon-sprites.svg#icon-wind"></use>
</svg>
```

### 2. Card 2 - ElectróAutos Chacon
**Icono:** `icon-microchip` (Microchip/Electrónica)
**Ubicación en código:** Línea 301 de `index.html`
**Color:** Blue (#3b82f6)
**Referencia SVG:** `assets/icons/icon-sprites.svg#icon-microchip`

```html
<svg class="icon icon-blue" aria-hidden="true">
    <use href="assets/icons/icon-sprites.svg#icon-microchip"></use>
</svg>
```

### 3. Card 3 - Alarmas Rivera
**Icono:** `icon-shield-alt` (Escudo/Protección)
**Ubicación en código:** Línea 334 de `index.html`
**Color:** Purple (#a855f7)
**Referencia SVG:** `assets/icons/icon-sprites.svg#icon-shield-alt`

```html
<svg class="icon icon-purple" aria-hidden="true">
    <use href="assets/icons/icon-sprites.svg#icon-shield-alt"></use>
</svg>
```

### 4. Card 4 - Martin Soldadura
**Icono:** `icon-fire` (Fuego/Soldadura)
**Ubicación en código:** Línea 369 de `index.html`
**Color:** Orange (#f97316)
**Referencia SVG:** `assets/icons/icon-sprites.svg#icon-fire`

```html
<svg class="icon icon-orange" aria-hidden="true">
    <use href="assets/icons/icon-sprites.svg#icon-fire"></use>
</svg>
```

---

## 🔍 Cómo Funciona

Los iconos usan el sistema de **SVG Sprites**, lo que significa:

1. **Un solo archivo** (`icon-sprites.svg`) contiene todos los iconos
2. Cada icono tiene un **ID único** (`icon-wind`, `icon-microchip`, etc.)
3. El código HTML usa `<use>` para referenciar cada icono por su ID
4. Esto es más eficiente que tener múltiples archivos SVG

---

## 🎨 Personalización de Colores

Los colores de los iconos se controlan mediante clases CSS:

- `icon-cyan` → #06b6d4 (Aire Acondicionado)
- `icon-blue` → #3b82f6 (Electrónica)
- `icon-purple` → #a855f7 (Alarmas)
- `icon-orange` → #f97316 (Soldadura)

Los colores están definidos en `styles.css` en la sección de iconos.

---

## 🔧 Verificación

Para verificar que los iconos funcionan correctamente:

1. ✅ El archivo `assets/icons/icon-sprites.svg` existe
2. ✅ Los IDs de los iconos coinciden:
   - `icon-wind`
   - `icon-microchip`
   - `icon-shield-alt`
   - `icon-fire`
3. ✅ Las rutas en el HTML son correctas:
   - `assets/icons/icon-sprites.svg#icon-wind`
   - `assets/icons/icon-sprites.svg#icon-microchip`
   - `assets/icons/icon-sprites.svg#icon-shield-alt`
   - `assets/icons/icon-sprites.svg#icon-fire`

---

## 🆕 Si Quieres Cambiar un Icono

Si deseas cambiar algún icono por otro:

1. Abre `assets/icons/icon-sprites.svg`
2. Encuentra el `<symbol id="icon-XXXX">` que quieres cambiar
3. Reemplaza el contenido del `<path>` con el SVG del nuevo icono
4. Guarda el archivo

**Importante:** Mantén el mismo `id` del symbol para que el HTML lo encuentre.

---

## 📊 Estructura del Archivo

```
assets/icons/
└── icon-sprites.svg          ← Archivo principal con todos los iconos
    ├── icon-bars             (Menú)
    ├── icon-times            (Cerrar)
    ├── icon-chevron-left     (Flecha izquierda)
    ├── icon-chevron-right    (Flecha derecha)
    ├── icon-microchip        ← Card Electrónica
    ├── icon-wind             ← Card Aire Acondicionado
    ├── icon-shield-alt       ← Card Alarmas
    ├── icon-fire             ← Card Soldadura
    ├── icon-whatsapp         (Botón WhatsApp)
    ├── icon-phone            (Contacto)
    ├── icon-envelope         (Email)
    ├── icon-map-marker       (Ubicación)
    ├── icon-clock            (Horario)
    ├── icon-facebook         (Redes sociales)
    ├── icon-instagram        (Redes sociales)
    └── icon-check-circle     (Toast/Notificación)
```

---

## ✅ Estado: Completado

Los iconos de las cards ya están implementados y funcionando. Solo asegúrate de que:

- ✅ El archivo `assets/icons/icon-sprites.svg` exista
- ✅ Las rutas en el HTML sean correctas
- ✅ Los estilos CSS estén cargados

**¡No necesitas hacer nada más!** Los iconos deberían verse perfectamente en las cards. 🎉

