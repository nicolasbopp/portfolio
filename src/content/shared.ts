// Facts that are the same in every language.

export const person = {
  name: "Nicolas Bopp",
  github: "https://github.com/nicolasbopp",
  linkedin: "https://www.linkedin.com/in/nicolas-bopp-dev/",
};

export const thesisPdf =
  "https://github.com/nicolasbopp/nicolasbopp/blob/main/docs/Bopp_2024_BSc_Thesis_Pics3D-Viewer.pdf";

export const personalis = {
  authors:
    "Meier P., Kruta J., Bopp N., Martin T., Carapito R., Rizzi M., Voll R. E., Schwarting A., Korganow A.-S., Schkommodau E., Miho E.",
  title: "Personalis: medical software for autoimmune diseases",
  venue: "BMC Medical Informatics and Decision Making",
  year: "2026",
  href: "https://link.springer.com/article/10.1186/s12911-026-03806-5",
  doi: "10.1186/s12911-026-03806-5",
};

const tech = {
  languages: ["Python", "TypeScript", "JavaScript", "Java", "SQL"],
  frontend: ["React", "React Native", "React Three Fiber", "Redux", "Tailwind CSS"],
  backend: ["Node.js", "Express", "Flask"],
  ml: ["PyTorch", "TensorFlow", "pandas"],
  databases: ["PostgreSQL", "MySQL", "MongoDB"],
  infrastructure: ["Docker", "Kubernetes", "Nginx", "Microsoft Azure", "Linux"],
  tooling: ["Git", "GitHub", "GitLab", "Postman"],
};

export function skillTable(labels: Record<keyof typeof tech, string>) {
  return (Object.keys(tech) as (keyof typeof tech)[]).map((k) => ({ area: labels[k], items: tech[k] }));
}
