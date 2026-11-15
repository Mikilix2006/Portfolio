# Portfolio

Portfolio personal de Miguel (www.planetamiguel.com). Next.js con export estático, bilingüe (ES/EN), tema claro/oscuro automático.

Cada proyecto vive en su propio repositorio; aquí solo hay una tarjeta por proyecto con enlace al repo y a la demo.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build      # genera ./out (HTML estático)
npm run preview    # sirve ./out en local (no abrir out/index.html con doble clic: las rutas son absolutas)
```

## Añadir un proyecto

Añade una entrada en [data/projects.ts](data/projects.ts) (repo, demo, stack y textos ES/EN). Las tarjetas se generan solas.

## Publicación

`npm run build` produce `out/`, que se sirve tal cual. Opciones (aún sin decidir):

- Copiar `out/` a `/var/www/portfolio` en el servidor (Caddy).
- GitHub Pages con un workflow de Actions.

Nada se despliega sin confirmación explícita.

## Proyectos

- [MotoGP-Paradise](https://github.com/Mikilix2006/MotoGP-Paradise) — [demo](https://rebufo.planetamiguel.com)
