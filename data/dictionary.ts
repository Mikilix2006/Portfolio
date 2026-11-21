export const langs = ["es", "en"] as const;
export type Lang = (typeof langs)[number];

export const dict = {
  es: {
    hi: "Hola, soy", name: "Miguel", role: "desarrollador de software", roleLead: "Construyo aplicaciones web de principio a fin:",
    roleTail: "datos, backend e interfaz.", scroll: "Desliza", work: "Proyectos", workLead: "Cosas que he construido.",
    repo: "Repositorio", wip: "En construcción", demo: "Ver demo", noDemo: "¡Ojo! Esta aplicación aún no está desplegada. Vuelve pronto.", about: "Sobre mí", aboutText: "Soy Miguel, desarrollador full-stack y estudiante de Ingeniería de Sistemas de IA. Convierto mis aficiones en productos útiles para otras personas, de la base de datos a la interfaz. Cada proyecto vive en su propio repositorio abierto para que lo revises. En mi tiempo libre desarrollo pequeñas ideas y resuelvo katas en Codewars.",
    path: "Trayectoria", today: "HOY",
    tech: "Tecnologías", techLead: "Con lo que trabajo.", techMain: "Principal", techAI: "IA", techBackend: "Backend", techFront: "Frontend", techLearn: "Aprendiendo", techTools: "Herramientas",
    social: "Redes", socialLead: "Donde encontrarme.", socialHint: "Haz clic en los iconos para abrir mis perfiles",
    top: "Volver arriba", made: "Hecho con Next.js", skip: "Saltar al contenido",
  },
  en: {
    hi: "Hi, I'm", name: "Miguel", role: "software developer", roleLead: "I build web apps end to end:",
    roleTail: "data, backend and interface.", scroll: "Scroll", work: "Work", workLead: "Things I've built.",
    repo: "Repository", wip: "Under construction", demo: "Live demo", noDemo: "Heads up! This app isn't deployed yet. Check back soon.", about: "About", aboutText: "I'm Miguel, a full-stack developer and AI Systems Engineering student. I turn my hobbies into products that are useful to other people, from the database to the interface. Every project lives in its own open repository for you to review. In my free time I build small project ideas and solve katas on Codewars.",
    path: "Journey", today: "TODAY",
    tech: "Tech", techLead: "What I work with.", techMain: "Main", techAI: "AI", techBackend: "Backend", techFront: "Frontend", techLearn: "Learning", techTools: "Tools",
    social: "Social", socialLead: "Where to find me.", socialHint: "Click the icons to open my profiles",
    top: "Back to top", made: "Made with Next.js", skip: "Skip to content",
  },
} satisfies Record<Lang, Record<string, string>>;
