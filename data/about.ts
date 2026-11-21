import type { Lang } from "./dictionary";

// Datos rápidos de "Sobre mí" (tarjetas). `href` opcional.
export const facts: Record<Lang, { label: string; text: string; href?: string }[]> = {
  es: [
    { label: "Estudio", text: "Ingeniería de Sistemas de IA en la UFV." },
    { label: "Experiencia", text: "Prácticas como desarrollador web en Essenzial." },
    { label: "Creo", text: "Vídeos de ciencia hechos con IA en @ciencia.compilada.", href: "https://www.instagram.com/ciencia.compilada" },
  ],
  en: [
    { label: "Study", text: "AI Systems Engineering at UFV." },
    { label: "Experience", text: "Internship as a web developer at Essenzial." },
    { label: "I create", text: "Science videos made with AI at @ciencia.compilada.", href: "https://www.instagram.com/ciencia.compilada" },
  ],
};
