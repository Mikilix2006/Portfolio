export const langs = ["es", "en"] as const;
export type Lang = (typeof langs)[number];

export const dict = {
  es: {
    hi: "Hola, soy", name: "Miguel", role: "desarrollador de software", roleLead: "Construyo aplicaciones web de principio a fin:",
    roleTail: "datos, backend e interfaz.", scroll: "Desliza", work: "Proyectos", workLead: "Cosas que he construido.",
    repo: "Repositorio", wip: "En construcción", demo: "Ver demo", about: "Sobre mí", aboutText: "Me gusta convertir datos en productos útiles y bien cuidados. Cada proyecto vive en su propio repositorio, abierto para que lo revises.",
    made: "Hecho con Next.js", skip: "Saltar al contenido",
  },
  en: {
    hi: "Hi, I'm", name: "Miguel", role: "software developer", roleLead: "I build web apps end to end:",
    roleTail: "data, backend and interface.", scroll: "Scroll", work: "Work", workLead: "Things I've built.",
    repo: "Repository", wip: "Under construction", demo: "Live demo", about: "About", aboutText: "I like turning data into useful, well-crafted products. Every project lives in its own open repository for you to review.",
    made: "Made with Next.js", skip: "Skip to content",
  },
} satisfies Record<Lang, Record<string, string>>;
