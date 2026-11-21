"use client";
import { useRef, type CSSProperties } from "react";
import { stepState, useScrollStep } from "./useScrollStep";

type Year = { year: string; events: readonly string[] };

// Mismo patrón que TechScroll: el año a la izquierda y su línea temporal a la derecha.
export default function TimelineScroll({ id, heading, years, today }: { id: string; heading: string; years: Year[]; today: string }) {
  const ref = useRef<HTMLElement>(null);
  const active = useScrollStep(ref, years.length);

  return (
    <section id={id} ref={ref} className="tech" style={{ "--n": years.length } as CSSProperties}>
      <div className="tech-stick">
        <div className="tech-left">
          <h2 className="kicker">{heading}</h2>
          <div className="tech-titles">
            {years.map((y, i) => (
              <p key={y.year} className="tech-title year" data-s={stepState(i, active)} aria-hidden={i !== active}>{y.year}</p>
            ))}
          </div>
          <ol className="dots" aria-hidden="true">
            {years.map((y, i) => <li key={y.year} data-on={i === active} />)}
          </ol>
        </div>
        <div className="tech-sets">
          {years.map((y, yi) => (
            <ul key={y.year} className={`timeline tech-set${yi > 0 ? " has-prev" : ""}${yi < years.length - 1 ? " has-next" : ""}`} data-s={stepState(yi, active)} aria-label={y.year} aria-hidden={yi !== active}>
              {y.events.map((e, i) => <li key={e} style={{ "--i": i } as CSSProperties}>{e}</li>)}
              {yi === years.length - 1 && <li className="now" style={{ "--i": y.events.length } as CSSProperties}>{today}</li>}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
