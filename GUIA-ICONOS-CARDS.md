# 📍 Guía: Iconos de las Cards de Servicios

## ✅ ¡Buenas Noticias!

Los iconos de las cards **YA están implementados** y funcionando. **NO necesitas descargar ni colocar archivos adicionales.**

Todos los iconos están en formato SVG dentro del archivo `assets/icons/icon-sprites.svg`.

---

## 📂 Ubicación del Archivo de Iconos

```
📁 web 2/
  📁 assets/
    📁 icons/
      📄 icon-sprites.svg          ← AQUÍ están todos los iconos
```

**Ruta completa:** `assets/icons/icon-sprites.svg`

---

## 🎯 Iconos Usados en las Cards

### Card 1 - Aire Acondicionado J.J Automotriz
- **Icono:** Viento/Aire (`icon-wind`)
- **Color:** Cyan
- **Ubicación en HTML:** Línea 266
- **Ubicación SVG:** `icon-sprites.svg#icon-wind`

### Card 2 - ElectróAutos Chacon
- **Icono:** Microchip/Electrónica (`icon-microchip`)
- **Color:** Blue
- **Ubicación en HTML:** Línea 301
- **Ubicación SVG:** `icon-sprites.svg#icon-microchip`

### Card 3 - Alarmas Rivera
- **Icono:** Escudo/Protección (`icon-shield-alt`)
- **Color:** Purple
- **Ubicación en HTML:** Línea 334
- **Ubicación SVG:** `icon-sprites.svg#icon-shield-alt`

### Card 4 - Martin Soldadura
- **Icono:** Fuego/Soldadura (`icon-fire`)
- **Color:** Orange
- **Ubicación en HTML:** Línea 369
- **Ubicación SVG:** `icon-sprites.svg#icon-fire`

---

## ✅ Verificación Rápida

1. **Verifica que existe el archivo:**
   ```
   assets/icons/icon-sprites.svg
   ```

2. **Abre el archivo** y verifica que contenga estos IDs:
   - ✅ `icon-wind`
   - ✅ `icon-microchip`
   - ✅ `icon-shield-alt`
   - ✅ `icon-fire`

3. **Verifica las rutas en el HTML** (deben ser exactamente así):
   - `assets/icons/icon-sprites.svg#icon-wind`
   - `assets/icons/icon-sprites.svg#icon-microchip`
   - `assets/icons/icon-sprites.svg#icon-shield-alt`
   - `assets/icons/icon-sprites.svg#icon-fire`

---

## 🎨 Cómo Funciona el Sistema de Iconos

Los iconos usan **SVG Sprites**, que es:

1. **Un solo archivo** contiene todos los iconos (más eficiente)
2. Cada icono tiene un **ID único**
3. El HTML usa `<use href="#id">` para cargar cada icono
4. **Ventaja:** Solo se carga un archivo en lugar de muchos

---

## 🔍 Estructura Visual

```
assets/icons/
└── icon-sprites.svg          ← Archivo principal
    │
    ├── <symbol id="icon-wind">        ← Card Aire Acondicionado
    │   └── <path>...</path>
    │
    ├── <symbol id="icon-microchip">   ← Card Electrónica
    │   └── <path>...</path>
    │
    ├── <symbol id="icon-shield-alt">  ← Card Alarmas
    │   └── <path>...</path>
    │
    └── <symbol id="icon-fire">        ← Card Soldadura
        └── <path>...</path>
```

---

## 🎯 Código de Ejemplo

Así es como se usa cada icono en el HTML:

```html
<!-- Card Aire Acondicionado -->
<div class="card-icon">
    <svg class="icon icon-cyan" aria-hidden="true">
        <use href="assets/icons/icon-sprites.svg#icon-wind"></use>
    </svg>
</div>

<!-- Card Electrónica -->
<div class="card-icon">
    <svg class="icon icon-blue" aria-hidden="true">
        <use href="assets/icons/icon-sprites.svg#icon-microchip"></use>
    </svg>
</div>

<!-- Card Alarmas -->
<div class="card-icon">
    <svg class="icon icon-purple" aria-hidden="true">
        <use href="assets/icons/icon-sprites.svg#icon-shield-alt"></use>
    </svg>
</div>

<!-- Card Soldadura -->
<div class="card-icon">
    <svg class="icon icon-orange" aria-hidden="true">
        <use href="assets/icons/icon-sprites.svg#icon-fire"></use>
    </svg>
</div>
```

---

## 🚨 Solución de Problemas

### ❌ Problema: "Los iconos no se muestran"
**✅ Solución:**
1. Verifica que el archivo `assets/icons/icon-sprites.svg` existe
2. Revisa la consola del navegador (F12) para ver errores
3. Verifica que las rutas en el HTML sean correctas

### ❌ Problema: "Icono se ve en blanco"
**✅ Solución:**
1. Verifica que el ID del icono existe en `icon-sprites.svg`
2. Asegúrate de que el ID coincida exactamente (mayúsculas/minúsculas)
3. Verifica que los estilos CSS estén cargados

### ❌ Problema: "Icono con color incorrecto"
**✅ Solución:**
1. Verifica que las clases CSS estén aplicadas:
   - `icon-cyan` (aire acondicionado)
   - `icon-blue` (electrónica)
   - `icon-purple` (alarmas)
   - `icon-orange` (soldadura)
2. Revisa `styles.css` sección de iconos

---

## 🎨 Personalización

Si quieres cambiar el color de un icono, edita en `styles.css`:

```css
.icon-cyan {
    fill: #06b6d4;  /* Cambia este color */
}

.icon-blue {
    fill: #3b82f6;  /* Cambia este color */
}

.icon-purple {
    fill: #a855f7;  /* Cambia este color */
}

.icon-orange {
    fill: #f97316;  /* Cambia este color */
}
```

---

## 📊 Resumen

| Card | Icono | ID SVG | Color | Estado |
|------|-------|--------|-------|--------|
| Aire Acondicionado | Viento | `icon-wind` | Cyan | ✅ Implementado |
| Electrónica | Microchip | `icon-microchip` | Blue | ✅ Implementado |
| Alarmas | Escudo | `icon-shield-alt` | Purple | ✅ Implementado |
| Soldadura | Fuego | `icon-fire` | Orange | ✅ Implementado |

---

## ✅ Conclusión

**Los iconos ya están implementados y funcionando.** Solo necesitas:

1. ✅ Asegurarte de que `assets/icons/icon-sprites.svg` existe
2. ✅ Verificar que las rutas en el HTML sean correctas
3. ✅ Listo, los iconos deberían verse perfectamente

**No necesitas descargar, copiar ni colocar ningún archivo adicional.** 🎉

