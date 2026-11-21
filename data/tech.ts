// Fuente: README del perfil de GitHub. `label` es una clave de dict; `icon` es public/icons/<icon>.svg.
const t = (name: string, icon: string) => ({ name, icon });
export const techGroups = [
  { label: "techMain", items: [t("Next.js", "nextjs"), t("TypeScript", "typescript"), t("PostgreSQL", "postgresql"), t("Claude", "claude")] },
  { label: "techBackend", items: [t("Java", "java"), t("Python", "python"), t("PHP", "php"), t("MySQL", "mysql"), t("Oracle SQL", "oracle"), t("Latte", "latte")] },
  { label: "techFront", items: [t("HTML", "html5"), t("CSS", "css3"), t("JavaScript", "javascript"), t("Bootstrap", "bootstrap")] },
  { label: "techLearn", items: [t("TensorFlow", "tensorflow"), t("C#", "csharp")] },
  { label: "techTools", items: [t("Git", "git"), t("GitHub", "github"), t("Bash", "bash"), t("AWS", "aws"), t("Figma", "figma"), t("SQLite", "sqlite"), t("WordPress", "wordpress"), t("VS Code", "vscode"), t("Eclipse", "eclipse"), t("PyCharm", "pycharm"), t("Visual Studio", "visualstudio")] },
] as const;
