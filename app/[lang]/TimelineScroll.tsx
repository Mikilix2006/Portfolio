"use client";
import { Fragment, useEffect, useRef, type CSSProperties } from "react";
import type { Event } from "@/data/timeline";
import { stepState, useScrollStep } from "./useScrollStep";

type Year = { year: string; events: readonly Event[] };

// Mismo patrón que TechScroll: el año a la izquierda y su línea temporal a la derecha.
export default function TimelineScroll({ id, heading, years, today }: { id: string; heading: string; years: Year[]; today: string }) {
  const ref = useRef<HTMLElement>(null);
  const active = useScrollStep(ref, years.length);
  const setsRef = useRef<HTMLDivElement>(null);

  // Si los puntos de un año no caben en la pantalla, esa lista pasa a tener su propio scroll (data-scroll).
  useEffect(() => {
    const box = setsRef.current;
    if (!box) return;
    const measure = () => box.querySelectorAll<HTMLElement>(".timeline").forEach((ul) => {
      ul.dataset.scroll = "false";
      const last = ul.lastElementChild as HTMLElement | null;
      ul.dataset.scroll = String(!!last && last.offsetTop + last.offsetHeight > ul.clientHeight + 1);
    });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(box);
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, [years]);

  return (
    <section id={id} ref={ref} className="tech compact" style={{ "--n": years.length } as CSSProperties}>
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
        <div className="tech-sets" ref={setsRef}>
          {years.map((y, yi) => (
            <ul key={y.year} className={`timeline tech-set${yi > 0 ? " has-prev" : ""}${yi < years.length - 1 ? " has-next" : ""}`} data-s={stepState(yi, active)} aria-label={y.year} aria-hidden={yi !== active}>
              {y.events.map((e, i) => {
                const { text, href } = typeof e === "string" ? { text: e, href: undefined } : e;
                return (
                  <li key={text} style={{ "--i": i } as CSSProperties}>
                    {(text.includes("[gh]") ? text : `${text}[gh]`).split("[gh]").map((chunk, c) => (
                      <Fragment key={c}>
                        {c > 0 && href && <a className={`gh${text.includes("[gh]") ? " inline" : ""}`} href={href} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" />}
                        {chunk.split("*").map((part, k) => (k % 2 ? <strong key={k}>{part}</strong> : part))}
                      </Fragment>
                    ))}
                  </li>
                );
              })}
              {yi === years.length - 1 && <li className="now" style={{ "--i": y.events.length } as CSSProperties}>{today}</li>}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
