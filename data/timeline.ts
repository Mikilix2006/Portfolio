import type { Lang } from "./dictionary";

// Trayectoria: un año por paso del scroll. Todo texto en ES y EN.
export const timeline: { year: string; events: Record<Lang, string[]> }[] = [
  { year: "2024", events: {
    es: ["Empiezo DAW: arranca mi camino como desarrollador."],
    en: ["I start DAW: my developer journey begins."],
  } },
  { year: "2025", events: {
    es: ["Termino mi primera web.", "Cierro 1º de DAW.", "Empiezo 2º de DAW."],
    en: ["I finish my first website.", "I complete DAW year 1.", "I start DAW year 2."],
  } },
  { year: "2026", events: {
    es: ["Proyecto integrador con 2 compañeros, en GitHub.", "Termino DAW.", "Arranca «Rebufo».", "Empiezo el Grado en Ingeniería de Sistemas de IA."],
    en: ["Capstone project with 2 teammates, on GitHub.", "I finish DAW.", "“Rebufo” kicks off.", "I start the AI Systems Engineering degree."],
  } },
];
