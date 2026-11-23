export type Project = {
  id: string;
  repo: string;
  demo?: string;
  wip?: boolean;
  noDemo?: boolean; // sin demo desplegada: muestra el botón prohibido
  stack: string[];
  text: Record<"es" | "en", { name: string; description: string }>;
};

// Para añadir un proyecto: una entrada nueva aquí. Nada más.
export const projects: Project[] = [
  {
    id: "motogp-paradise",
    repo: "https://github.com/Mikilix2006/MotoGP-Paradise",
    demo: "https://rebufo.planetamiguel.com",
    wip: true,
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
    text: {
      es: {
        name: "MotoGP Stats (Rebufo)",
        description:
          "App web de estadísticas de MotoGP: calendario, pilotos, equipos y resultados importados de la API oficial a PostgreSQL.",
      },
      en: {
        name: "MotoGP Stats (Rebufo)",
        description:
          "MotoGP statistics web app: calendar, riders, teams and results imported from the official API into PostgreSQL.",
      },
    },
  },
  {
    id: "madrid-aredl",
    repo: "https://github.com/Mikilix2006/MadridAREDL",
    demo: "https://madridaredl.planetamiguel.com",
    wip: true,
    stack: ["Python", "discord.py", "MongoDB", "Flask"],
    text: {
      es: {
        name: "Madrid AREDL",
        description:
          "Bot de Discord para la comunidad Madrid AREDL de Geometry Dash: registra el hardest de cada miembro, lo verifica con la API de AREDL y lo guarda en MongoDB.",
      },
      en: {
        name: "Madrid AREDL",
        description:
          "Discord bot for the Madrid AREDL Geometry Dash community: records each member's hardest level, verifies it against the AREDL API and stores it in MongoDB.",
      },
    },
  },
  {
    id: "tope",
    repo: "https://github.com/Mikilix2006/Tope",
    wip: true,
    noDemo: true,
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
    text: {
      es: {
        name: "Tope",
        description:
          "App web de gimnasio: rutinas personalizadas de calistenia, CrossFit y fuerza, registro de entrenos, medidas y objetivos con su evolución. Pensada para el móvil e instalable como PWA.",
      },
      en: {
        name: "Tope",
        description:
          "Gym web app: custom calisthenics, CrossFit and strength routines, workout logging, body measurements and goals with progress tracking. Mobile-first and installable as a PWA.",
      },
    },
  },
];
