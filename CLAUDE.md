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
- Método (script al servidor vs GitHub Pages) sin decidir. No desplegar sin confirmación.
