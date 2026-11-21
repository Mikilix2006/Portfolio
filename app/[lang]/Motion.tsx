"use client";
import { useEffect } from "react";

// Anima las secciones al entrar en pantalla y marca en el nav la que se está viendo.
export default function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js"); // sin JS todo queda visible
    const sections = document.querySelectorAll<HTMLElement>("section.section");

    const reveal = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add("in"); reveal.unobserve(e.target); }
    }, { threshold: 0.15 });
    sections.forEach((s) => reveal.observe(s));

    const links = document.querySelectorAll<HTMLAnchorElement>('.nav a[href^="#"]');
    const spy = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        links.forEach((a) => (a.getAttribute("href") === `#${e.target.id}` ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current")));
      }
    }, { rootMargin: "-45% 0px -50% 0px" }); // línea de lectura en mitad de la pantalla
    document.querySelectorAll<HTMLElement>("section[id]").forEach((s) => spy.observe(s));

    return () => { reveal.disconnect(); spy.disconnect(); root.classList.remove("js"); };
  }, []);
  return null;
}
