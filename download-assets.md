# Guía para Descargar Recursos Externos

## Imágenes del Slider

Las imágenes del slider están actualmente en Unsplash. Para descargarlas localmente:

### Opción 1: Descarga Manual
1. Visita estas URLs y descarga las imágenes:
   - Slide 1 (Electrónica): https://images.unsplash.com/photo-1759477444312-73e240a8ec46?w=1920
   - Slide 2 (Aire Acondicionado): https://images.unsplash.com/photo-1715597964018-b9ecfd21574e?w=1920
   - Slide 3 (Alarmas): https://images.unsplash.com/photo-1640815169249-24705979d176?w=1920
   - Slide 4 (Soldadura): https://images.unsplash.com/photo-1641893823219-38b433f736c0?w=1920

2. Guarda las imágenes como:
   - `assets/images/slider/electronica.jpg`
   - `assets/images/slider/aire-acondicionado.jpg`
   - `assets/images/slider/alarmas.jpg`
   - `assets/images/slider/soldadura.jpg`

3. Optimiza las imágenes usando herramientas como:
   - [Squoosh](https://squoosh.app/) - Para compresión
   - [ImageOptim](https://imageoptim.com/) - Para optimización
   - Convierte a WebP para mejor compresión

### Opción 2: Usar un script (Node.js)

```bash
npm install axios sharp
```

Luego ejecuta el script de descarga (se creará automáticamente).

## Fuentes de Google Fonts

Las fuentes ya están configuradas para descargarse localmente. El build system se encargará de esto.

Si quieres descargarlas manualmente:
1. Visita: https://fonts.google.com/
2. Busca "Orbitron" e "Inter"
3. Descarga los archivos y guárdalos en `assets/fonts/`

