# Publicación de ARCADE en Cloudflare Pages, plan gratuito

1. Entrar a https://dash.cloudflare.com/ > Workers & Pages > Create application > Pages > Connect to Git.
2. Seleccionar la cuenta GitHub y autorizar el repositorio `antoniogv-dev/arcade-juegos`.
3. Asignar el nombre `arcade-juegos` (si está libre); framework preset: None; build command: vacío; output directory: `.`.
4. Publicar. Cloudflare entrega la URL `https://arcade-juegos.pages.dev` si el subdominio está disponible. Confirmar la dirección real al finalizar.
5. Las nuevas confirmaciones en la rama `main` se publicarán automáticamente.

Para agregar un juego, crear su archivo `juegos/nuevo-juego.html`, su miniatura `assets/nuevo-juego.svg` y añadir su entrada en `catalogo.js`.
