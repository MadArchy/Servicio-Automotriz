# Instrucciones para Cambiar la Cuenta de GitHub

## Opción 1: Usar tu propia cuenta (dankod31)

### Paso 1: Crear tu repositorio en GitHub
1. Ve a [github.com](https://github.com) e **inicia sesión con tu cuenta `dankod31`**
2. Haz clic en **"+"** → **"New repository"**
3. Completa:
   - **Repository name**: `servicio-automotriz-cucuta` (o el nombre que prefieras)
   - **Description**: "Sitio web de servicios automotrices en Cúcuta"
   - **Visibility**: Public o Private
   - **NO marques** "Initialize this repository with a README"
   - Haz clic en **"Create repository"**

### Paso 2: Configurar el remoto con tu repositorio

Después de crear el repositorio, ejecuta:

```bash
git remote add origin https://github.com/dankod31/servicio-automotriz-cucuta.git
git branch -M main
git push -u origin main
```

Cuando te pida credenciales:
- **Usuario**: `dankod31`
- **Contraseña**: Usa un **Personal Access Token** (no tu contraseña normal)

### Cómo crear un Personal Access Token:
1. Ve a GitHub → **Settings** (tu perfil) → **Developer settings**
2. **Personal access tokens** → **Tokens (classic)**
3. **Generate new token** → **Generate new token (classic)**
4. Dale un nombre (ej: "Mi PC")
5. Selecciona permisos: **repo** (marca toda la casilla)
6. Haz clic en **"Generate token"**
7. **Copia el token** (solo se muestra una vez)
8. Úsalo como contraseña cuando Git te lo pida

---

## Opción 2: Usar la cuenta MadArchy (si tienes acceso)

Si tienes acceso al repositorio `MadArchy/Servicio-Automotriz.git`:

```bash
git remote add origin https://github.com/MadArchy/Servicio-Automotriz.git
git branch -M main
git push -u origin main
```

Usa las credenciales de la cuenta **MadArchy** cuando te las pida.

---

## Verificar configuración actual

```bash
git config --global user.name
git config --global user.email
git remote -v
```

## Cambiar configuración de Git (si es necesario)

```bash
git config --global user.name "dankod31"
git config --global user.email "tu-email@ejemplo.com"
```

