# Portfolio

Portfolio personal (Next.js 16, export estático, TypeScript). Repo: Mikilix2006/Portfolio. Responder en español.

@.claude/rules/workflow.md

## Estructura
- `app/[lang]/` — página por idioma (`es`, `en`), generada con `generateStaticParams`.
- `app/page.tsx` — raíz: redirige según idioma del navegador.
- `data/projects.ts` — lista de proyectos (única fuente de las tarjetas).
- `data/dictionary.ts` — textos de la interfaz por idioma.

## Convenciones
- Sin dependencias extra salvo necesidad real; estilos en `app/globals.css` (variables CSS, claro/oscuro).
- Todo texto visible existe en ES y EN.
- Enlaces externos con `rel="noopener noreferrer"`.
- Antes de dar algo por hecho: `npm run typecheck && npm run build`.

## Despliegue
- Producción: www.planetamiguel.com, Caddy sirve `/var/www/portfolio` (SSH root solo con clave). `rebufo.planetamiguel.com` es la app MotoGP Stats, NO el portfolio.
- Método decidido: compilar y subir `out/` por SSH (sin GitHub Pages). No desplegar sin confirmación.
- Pasos: desplegar desde `main` actualizado y con el PR ya fusionado; `npm run typecheck && npm run build`; borrar de `out/` los `.psd` y `.mdp` (archivos de trabajo de `public/primera-web/`, no se publican); `tar czf - -C out . | ssh root@www.planetamiguel.com` y en el servidor extraer en `/var/www/portfolio.new`, `chown -R caddy:caddy`, y cambiar `portfolio` por `portfolio.new` (la anterior queda en `portfolio.old`).
- Después: comprobar con `curl` que `/es/`, `/en/` y `/primera-web/index.html` devuelven 200. Marcha atrás: `mv portfolio portfolio.bad && mv portfolio.old portfolio`. Borrar `portfolio.old` solo cuando el usuario lo confirme.
- La primera web (`public/primera-web/`) se enlaza como `/primera-web/index.html`: el servidor de desarrollo no sirve índices de carpetas de `public/`.
