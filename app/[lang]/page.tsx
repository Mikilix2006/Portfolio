import { dict, type Lang } from "@/data/dictionary";
import { projects } from "@/data/projects";

export default async function Home({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const t = dict[lang];
  const other = lang === "es" ? "en" : "es";
  return (
    <>
      <a className="skip" href="#work">{t.skip}</a>
      <nav className="nav">
        <a href="#work">{t.work}</a>
        <a href="#about">{t.about}</a>
        <a href={`/${other}/`} hrefLang={other} lang={other}>{other.toUpperCase()}</a>
      </nav>
      <main>
        <section className="hero">
          <h1 className="reveal">{t.hi} <em>{t.name}</em>.</h1>
          <p className="lead reveal" style={{ animationDelay: ".15s" }}>
            {t.roleLead} <strong>{t.role}</strong> — {t.roleTail}
          </p>
          <span className="scroll" aria-hidden="true">{t.scroll}</span>
        </section>

        <section id="work" className="section">
          <h2>{t.work}</h2>
          <p className="sub">{t.workLead}</p>
          <ul className="grid">
            {projects.map((p, i) => (
              <li key={p.id} className={`card reveal${p.wip ? " wip" : ""}`} style={{ animationDelay: `${0.1 * i}s` }}>
                {p.wip && <p className="tape"><span>🚧 {t.wip}</span></p>}
                <h3>{p.text[lang].name}</h3>
                <p>{p.text[lang].description}</p>
                <p className="stack">{p.stack.join(" · ")}</p>
                <p className="links">
                  {p.demo && <a className="btn" href={p.demo} target="_blank" rel="noopener noreferrer">{t.demo} →</a>}
                  <a className="btn ghost" href={p.repo} target="_blank" rel="noopener noreferrer">{t.repo}</a>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="about" className="section">
          <h2>{t.about}</h2>
          <p className="about">{t.aboutText}</p>
        </section>
      </main>
      <footer>© MMXXVI · {t.made}</footer>
    </>
  );
}
