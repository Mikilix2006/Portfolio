import { useEffect, useState, type RefObject } from "react";

// Índice del paso activo (0..n-1) según cuánto se ha recorrido una sección alta con contenido fijo.
export function useScrollStep(ref: RefObject<HTMLElement | null>, n: number) {
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
      setActive(Math.min(n - 1, Math.floor(p * n)));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, [ref, n]);
  return active;
}

export const stepState = (i: number, active: number) => (i === active ? "active" : i < active ? "before" : "after");
