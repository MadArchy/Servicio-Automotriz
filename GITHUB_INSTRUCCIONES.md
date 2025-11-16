# Instrucciones para subir el proyecto a GitHub

## Pasos para crear y conectar el repositorio en GitHub

### 1. Crear el repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Haz clic en el botón **"+"** (arriba a la derecha) y selecciona **"New repository"**
3. Completa el formulario:
   - **Repository name**: `autotech-servicios-cucuta` (o el nombre que prefieras)
   - **Description**: "Sitio web profesional de servicios automotrices en Cúcuta"
   - **Visibility**: Elige **Public** o **Private** según prefieras
   - **NO marques** la casilla "Initialize this repository with a README" (ya tenemos uno)
   - Haz clic en **"Create repository"**

### 2. Conectar el repositorio local con GitHub

Después de crear el repositorio en GitHub, ejecuta estos comandos en la terminal (reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub):

```bash
cd "c:\Users\DANKO\Desktop\pagina para mi papa\web 2"
git remote add origin https://github.com/TU_USUARIO/autotech-servicios-cucuta.git
git branch -M main
git push -u origin main
```

### 3. Si GitHub te pide autenticación

Si te pide usuario y contraseña, puedes:
- Usar un **Personal Access Token** (recomendado):
  1. Ve a GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
  2. Genera un nuevo token con permisos de `repo`
  3. Úsalo como contraseña cuando Git te lo pida

### 4. Verificar que todo se subió correctamente

Ve a tu repositorio en GitHub y verifica que todos los archivos estén ahí.

### 5. Comandos útiles para futuras actualizaciones

Cuando hagas cambios y quieras subirlos:

```bash
cd "c:\Users\DANKO\Desktop\pagina para mi papa\web 2"
git add .
git commit -m "Descripción de los cambios"
git push
```

---

**Nota**: Los archivos en `node_modules/` NO se subirán a GitHub gracias al `.gitignore`. Esto es correcto, ya que se pueden reinstalar con `npm install`.

