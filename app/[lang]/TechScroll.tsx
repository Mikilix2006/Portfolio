"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";

type Group = { title: string; items: readonly { name: string; icon: string }[] };

// Sección "pegada" a la pantalla: el scroll recorre las categorías sin mover el contenido.
export default function TechScroll({ id, heading, groups }: { id: string; heading: string; groups: Group[] }) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
      setActive(Math.min(groups.length - 1, Math.floor(p * groups.length)));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, [groups.length]);

  const state = (i: number) => (i === active ? "active" : i < active ? "before" : "after");

  return (
    <section id={id} ref={ref} className="tech" style={{ "--n": groups.length } as CSSProperties}>
      <div className="tech-stick">
        <div className="tech-left">
          <h2 className="kicker">{heading}</h2>
          <div className="tech-titles">
            {groups.map((g, i) => (
              <p key={g.title} className="tech-title" data-s={state(i)} aria-hidden={i !== active}>{g.title}</p>
            ))}
          </div>
          <ol className="dots" aria-hidden="true">
            {groups.map((g, i) => <li key={g.title} data-on={i === active} />)}
          </ol>
        </div>
        <div className="tech-sets">
          {groups.map((g, gi) => (
            <ul key={g.title} className="chips tech-set" data-s={state(gi)} aria-label={g.title} aria-hidden={gi !== active}>
              {g.items.map((x, i) => (
                <li key={x.name} style={{ "--i": i } as CSSProperties}>
                  <img src={`/icons/${x.icon}.svg`} alt="" width={64} height={64} />
                  <span>{x.name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
