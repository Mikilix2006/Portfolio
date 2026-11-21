import type { Lang } from "./dictionary";

// Trayectoria: un año por paso del scroll. Todo texto en ES y EN.
const REBUFO = "https://github.com/Mikilix2006/MotoGP-Paradise";
const GAME = "https://github.com/Mikilix2006/GameOfLife";
const REPO = "https://github.com/Mikilix2006/Proyecto1DIW-DWEC";
export type Event = string | { text: string; href: string };

// [gh] marca dónde va el icono de GitHub (si falta, va al final). *texto* marca lo más importante de cada hito (se resalta al pintarlo).
export const timeline: { year: string; events: Record<Lang, Event[]> }[] = [
  { year: "2024", events: {
    es: ["Empiezo *DAW*: arranca mi camino como desarrollador."],
    en: ["I start *DAW*: my developer journey begins."],
  } },
  { year: "2025", events: {
    es: ["Termino mi *primera web*.", "Cierro *1º de DAW*.", "Empiezo *2º de DAW*.", { text: "Hago mi primer juego con IA: *Game of Life* [gh].", href: GAME }],
    en: ["I finish my *first website*.", "I complete *DAW year 1*.", "I start *DAW year 2*.", { text: "I make my first game with AI: *Game of Life* [gh].", href: GAME }],
  } },
  { year: "2026", events: {
    es: [{ text: "*Proyecto integrador* [gh] con 2 compañeros, en GitHub.", href: REPO }, "Prácticas en *Essenzial* como desarrollador web.", "Termino *DAW*.", { text: "Comienzo *«Rebufo»* [gh], entre otros proyectos.", href: REBUFO }, "Empiezo la *Ingeniería de Sistemas de IA*."],
    en: [{ text: "*Capstone project* [gh] with 2 teammates, on GitHub.", href: REPO }, "Internship at *Essenzial* as a web developer.", "I finish *DAW*.", { text: "I begin *“Rebufo”* [gh], among other projects.", href: REBUFO }, "I start *AI Systems Engineering*."],
  } },
];
