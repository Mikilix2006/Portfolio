// Export estático: genera /out, que se sirve igual desde Caddy o GitHub Pages.
/** @type {import('next').NextConfig} */
export default { output: "export", images: { unoptimized: true } };
