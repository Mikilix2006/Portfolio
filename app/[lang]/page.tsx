import { dict, type Lang } from "@/data/dictionary";
import { techGroups } from "@/data/tech";
import { projects } from "@/data/projects";
import NoDemo from "./NoDemo";
import BackToTop from "./BackToTop";
import Motion from "./Motion";
import TechScroll from "./TechScroll";
import TimelineScroll from "./TimelineScroll";
import { timeline } from "@/data/timeline";

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
        <a href="#path">{t.path}</a>
        <a href="#tech">{t.tech}</a>
        <a href="#social">{t.social}</a>
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
                  {p.noDemo && <NoDemo label={t.demo} message={t.noDemo} />}
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

        <TimelineScroll id="path" heading={t.path} today={t.today} years={timeline.map((y) => ({ year: y.year, events: y.events[lang] }))} />

        <TechScroll id="tech" heading={t.tech} groups={techGroups.map((g) => ({ title: t[g.label], items: g.items }))} />

        <section id="social" className="section">
          <h2>{t.social}</h2>
          <p className="sub">{t.socialLead}</p>
          <ul className="socials">
            {[
              ["GitHub", "github", "https://github.com/Mikilix2006"],
              ["LinkedIn", "linkedin", "https://www.linkedin.com/in/miguel-gonz%C3%A1lez-delgado-00b7a13b0"],
              ["Codewars", "codewars", "https://www.codewars.com/users/Mikilix"],
              ["Instagram", "instagram", "https://www.instagram.com/ciencia.compilada"],
            ].map(([name, icon, href]) => (
              <li key={name}>
                <a href={href} aria-label={name} title={name} target="_blank" rel="noopener noreferrer">
                  <img src={`/icons/${icon}.svg`} alt="" width={40} height={40} />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Motion />
      <BackToTop label={t.top} />
      <footer>© MMXXVI · {t.made}</footer>
    </>
  );
}
