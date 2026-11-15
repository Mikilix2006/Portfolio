// Raíz: elige idioma según el navegador. Sin JS, enlaces manuales.
export default function Root() {
  const script = `location.replace((navigator.language||"es").startsWith("en")?"/en/":"/es/")`;
  return (
    <main>
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <p><a href="/es/">Español</a> · <a href="/en/">English</a></p>
    </main>
  );
}
