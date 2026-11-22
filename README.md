# ARCADE — Colección de juegos web

Sitio estático con videojuegos HTML5 originales, sin dependencias de terceros. Apto para celulares y computadores. Diseñado para agregar nuevos juegos sin modificar la portada.

## Juegos disponibles

- **Laberinto Arácnido**: versión intermedia (15 × 15), 4 vidas, tres niveles y controles táctiles.
- **Las Estrellas Perdidas**: tres mundos de plataformas, enemigos, monedas y controles táctiles.
- **Blocks Arcade**: piezas giratorias, eliminación de filas, niveles y puntuación.
- **HUELLA · Supervivencia**: supervivencia adaptativa de hasta cinco minutos, nueve memorias y cinco generaciones de cazadores.

## Agregar un juego más adelante

1. Cree `juegos/nombre-del-juego.html`, autocontenido en HTML/CSS/JS (controles táctiles y enlace de regreso `../index.html`).
2. Agregue una ilustración SVG de portada en `assets/nombre-del-juego.svg` (recomendado 340 × 240).
3. Abra `catalogo.js` y añada un objeto dentro de `window.ARCADE_GAMES`:

```js
{
  "slug": "nombre-del-juego",
  "title": "Nombre del juego",
  "category": "Plataformas",
  "description": "Descripción de la aventura.",
  "badges": ["3 niveles", "Controles táctiles"],
  "art": "generic"
}
```

4. Ejecute `node scripts/check-site.mjs` para verificar rutas, duplicados y nombres no deseados.
5. Haga commit y push a `main`. Cloudflare Pages publicará automáticamente los cambios, una vez conectada la integración Git.

No se requiere editar `index.html` cada vez que se agrega un juego. La búsqueda se activa al existir cinco o más juegos.

## Publicación en Cloudflare Pages

- Repositorio recomendado: `antoniogv-dev/arcade-juegos`, independiente de los repositorios institucionales.
- En Cloudflare: **Workers & Pages** → **Create** → **Pages** → conectar con GitHub, elegir `arcade-juegos`.
- Framework: **None**.
- Comando de compilación: dejar vacío (es HTML estático).
- Directorio de salida: `.` (raíz del repositorio).
- Rama de producción: `main`.

Después del despliegue inicial, cada cambio confirmado en `main` se publicará automáticamente. Para comprobar en local, abrir `index.html` o usar un servidor HTTP sencillo (`python -m http.server 8000`).

## Archivos

- `index.html`: portada adaptable.
- `catalogo.js`: listado de juegos, editable para ampliaciones.
- `app.js`: muestra el catálogo y el buscador.
- `juegos/`: cada juego completo e independiente.
- `assets/`: portadas SVG.
- `_headers`: cabeceras de seguridad y caché para Cloudflare.
- `.github/workflows/validate.yml`: revisa el proyecto al subir cambios.

No se requiere base de datos ni se recopilan datos personales. Las puntuaciones se almacenan en el navegador del jugador cuando el juego lo permite.