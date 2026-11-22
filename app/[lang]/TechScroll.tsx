"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { stepState, useScrollStep } from "./useScrollStep";

type Pair = readonly [string, string];
type Group = { title: string; items: readonly { name: string; icon: string }[]; links?: readonly Pair[] };

// Cuerda curva entre pares de iconos (p. ej. PHP y Latte). Mide los iconos con offset*, que ignora el balanceo.
function Rope({ pairs }: { pairs: readonly Pair[] }) {
  const ref = useRef<SVGSVGElement>(null);
  const [paths, setPaths] = useState<string[]>([]);
  useEffect(() => {
    const ul = ref.current?.parentElement;
    if (!ul) return;
    const centre = (icon: string) => {
      const li = ul.querySelector<HTMLElement>(`[data-icon="${icon}"]`);
      const img = li?.querySelector<HTMLElement>("img");
      if (!li || !img) return null;
      const dx = img.offsetParent === li ? li.offsetLeft : 0; // por si el <li> hace de offsetParent
      const dy = img.offsetParent === li ? li.offsetTop : 0;
      return [dx + img.offsetLeft + img.offsetWidth / 2, dy + img.offsetTop + img.offsetHeight / 2];
    };
    const measure = () => {
      const out: string[] = [];
      for (const [a, b] of pairs) {
        const p = centre(a), q = centre(b);
        if (!p || !q) continue;
        const sag = Math.max(28, Math.hypot(q[0] - p[0], q[1] - p[1]) * 0.45); // cuelga como una cuerda floja
        out.push(`M${p[0]} ${p[1]} Q${(p[0] + q[0]) / 2} ${Math.max(p[1], q[1]) + sag} ${q[0]} ${q[1]}`);
      }
      setPaths(out);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(ul);
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, [pairs]);
  return (
    <svg ref={ref} className="rope" aria-hidden="true">
      {paths.map((d) => (<g key={d}><path d={d} className="rope-base" /><path d={d} className="rope-twist" /></g>))}
    </svg>
  );
}

// Sección "pegada" a la pantalla: el scroll recorre las categorías sin mover el contenido.
export default function TechScroll({ id, heading, groups }: { id: string; heading: string; groups: Group[] }) {
  const ref = useRef<HTMLElement>(null);
  const active = useScrollStep(ref, groups.length);
  const state = (i: number) => stepState(i, active);

  return (
    <section id={id} ref={ref} className="tech compact" style={{ "--n": groups.length } as CSSProperties}>
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
              {g.links && <Rope pairs={g.links} />}
              {g.items.map((x, i) => (
                <li key={x.name} data-icon={x.icon} style={{ "--i": i } as CSSProperties}>
                  <div className="tile"><img src={`/icons/${x.icon}.svg`} alt="" width={64} height={64} /></div>
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
