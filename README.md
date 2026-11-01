# Adri Calero · Portfolio

Sitio personal estático (HTML + CSS + JS, sin build). Se publica en Vercel.

## Estructura

```
index.html       contenido del sitio
css/styles.css   estilos (tokens de color en :root, modo oscuro incluido)
js/main.js       botones "Copiar" de mail y teléfono
fotos/           imágenes (retrato y charlas)
```

## Ver en local

```bash
npx serve .
```

y abrir http://localhost:3000.

## Publicar en Vercel

1. Subir este repo a GitHub.
2. En vercel.com → **Add New… → Project** → importar el repo.
3. Framework Preset: **Other**. Sin build command; output directory: la raíz (`.`).
4. Deploy. Cada push a `main` vuelve a publicar solo.
