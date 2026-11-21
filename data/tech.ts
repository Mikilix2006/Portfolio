// `links`: pares de iconos unidos por una cuerda (Latte es un framework de PHP).
// Fuente: README del perfil de GitHub. `label` es una clave de dict; `icon` es public/icons/<icon>.svg.
export type Named = string | { es: string; en: string };
const t = (name: Named, icon: string) => ({ name, icon });
export const techGroups = [
  { label: "techMain", items: [t("Next.js", "nextjs"), t("TypeScript", "typescript"), t("PostgreSQL", "postgresql")] },
  { label: "techAI", items: [t("Claude", "claude"), t("Claude Code", "claude-code"), t({ es: "Programación agéntica", en: "Agentic programming" }, "agentic"), t("Skills", "skills"), t("MCP", "mcp")] },
  { label: "techBackend", items: [t("PHP", "php"), t("Latte", "latte"), t("Java", "java"), t("Python", "python"), t("MySQL", "mysql"), t("Oracle SQL", "oracle")], links: [["php", "latte"]] },
  { label: "techFront", items: [t("HTML", "html5"), t("CSS", "css3"), t("JavaScript", "javascript"), t("Bootstrap", "bootstrap")] },
  { label: "techLearn", items: [t("TensorFlow", "tensorflow"), t("C#", "csharp"), t({ es: "IA", en: "AI" }, "ai")] },
  { label: "techTools", items: [t("Git", "git"), t("GitHub", "github"), t("Bash", "bash"), t("AWS", "aws"), t("Figma", "figma"), t("WordPress", "wordpress"), t("VS Code", "vscode"), t("Eclipse", "eclipse"), t("PyCharm", "pycharm"), t("Visual Studio", "visualstudio")] },
] as const;
