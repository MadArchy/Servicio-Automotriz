# 📍 Guía: Dónde Colocar las Imágenes del Slider

## 📂 Ubicación Exacta

Las imágenes del slider deben colocarse en esta ruta:

```
📁 web 2/
  📁 assets/
    📁 images/
      📁 slider/
        📷 electronica.jpg          ← Coloca aquí
        📷 aire-acondicionado.jpg   ← Coloca aquí
        📷 alarmas.jpg              ← Coloca aquí
        📷 soldadura.jpg            ← Coloca aquí
```

## 🎯 Ruta Completa

Desde la raíz del proyecto:
```
assets/images/slider/
```

## 📝 Nombres de Archivos Requeridos

El código HTML busca estos nombres exactos (respetar mayúsculas y minúsculas):

1. **`electronica.jpg`** - Para el slide de ElectróAutos Chacon
2. **`aire-acondicionado.jpg`** - Para el slide de Aire Acondicionado J.J
3. **`alarmas.jpg`** - Para el slide de Alarmas Rivera
4. **`soldadura.jpg`** - Para el slide de Martin Soldadura

## ✅ Pasos para Agregar las Imágenes

1. **Abre la carpeta del proyecto**
   - Navega a: `c:\Users\DANKO\Desktop\pagina para mi papa\web 2\`

2. **Ve a la carpeta del slider**
   - Entra a: `assets\images\slider\`

3. **Copia las imágenes**
   - Copia tus imágenes de electrónica automotriz, aire acondicionado, alarmas y soldadura
   - Péguelas en la carpeta `assets\images\slider\`

4. **Renombra los archivos**
   - Asegúrate de que tengan exactamente estos nombres:
     - `electronica.jpg`
     - `aire-acondicionado.jpg`
     - `alarmas.jpg`
     - `soldadura.jpg`

## 🔍 Cómo Verificar

Abre la carpeta `assets/images/slider/` y verifica que veas estos 4 archivos:

```
✅ electronica.jpg
✅ aire-acondicionado.jpg
✅ alarmas.jpg
✅ soldadura.jpg
```

## 💡 Consejos

- **Formato:** JPG funciona perfectamente (también puedes usar PNG o WebP)
- **Tamaño:** Recomendado 1920x1080 px o mayor para mejor calidad
- **Peso:** Optimiza las imágenes para que carguen rápido (menos de 500KB cada una)
- **Aspecto:** Imágenes horizontales (formato 16:9) se ven mejor

## 🚨 Problemas Comunes

**❌ Problema:** "Las imágenes no se muestran"
- **✅ Solución:** Verifica que los nombres coincidan exactamente (incluye guiones y minúsculas)

**❌ Problema:** "Error 404 - archivo no encontrado"
- **✅ Solución:** Asegúrate de que las imágenes estén en `assets/images/slider/` (no en una subcarpeta)

**❌ Problema:** "Imagen se ve borrosa"
- **✅ Solución:** Usa imágenes de al menos 1920px de ancho

## 📍 Ubicación Actual en el Código

Las imágenes están referenciadas en `index.html` en estas líneas:

- **Línea 118:** `url('assets/images/slider/electronica.jpg')`
- **Línea 138:** `url('assets/images/slider/aire-acondicionado.jpg')`
- **Línea 158:** `url('assets/images/slider/alarmas.jpg')`
- **Línea 178:** `url('assets/images/slider/soldadura.jpg')`

¡Una vez que agregues las imágenes con estos nombres exactos, el slider funcionará perfectamente! 🎉

