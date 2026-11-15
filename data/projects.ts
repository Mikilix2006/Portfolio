export type Project = {
  id: string;
  repo: string;
  demo?: string;
  stack: string[];
  text: Record<"es" | "en", { name: string; description: string }>;
};

// Para añadir un proyecto: una entrada nueva aquí. Nada más.
export const projects: Project[] = [
  {
    id: "motogp-paradise",
    repo: "https://github.com/Mikilix2006/MotoGP-Paradise",
    demo: "https://rebufo.planetamiguel.com",
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
];
