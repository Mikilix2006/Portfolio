"use client";
import { useRef, type CSSProperties } from "react";
import { stepState, useScrollStep } from "./useScrollStep";

type Group = { title: string; items: readonly { name: string; icon: string }[] };

// Sección "pegada" a la pantalla: el scroll recorre las categorías sin mover el contenido.
export default function TechScroll({ id, heading, groups }: { id: string; heading: string; groups: Group[] }) {
  const ref = useRef<HTMLElement>(null);
  const active = useScrollStep(ref, groups.length);
  const state = (i: number) => stepState(i, active);

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
