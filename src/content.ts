// All page copy lives here so it can be updated without touching layout code.

export const profile = {
  name: "Nicolas Bopp",
  role: "Medical informatics engineer",
  location: "Basel, Switzerland",
  intro:
    "I build software for clinical research: imaging pipelines, annotation tools and decision support, from the model to the interface people actually use.",
  github: "https://github.com/nicolasbopp",
  linkedin: "https://www.linkedin.com/in/nicolas-bopp-dev/",
};

export type Project = {
  title: string;
  context: string;
  period: string;
  summary: string;
  stack: string[];
  status?: string;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Annotation and visualisation platform for pelvic floor MRI",
    context: "MSc thesis, University Hospital Zurich",
    period: "2026",
    status: "In progress",
    summary:
      "A machine-learning enhanced platform for annotating and visualising pelvic floor MRI, combining deep-learning segmentation pipelines with a React and Python annotation interface.",
    stack: ["PyTorch", "Python", "React", "TypeScript"],
  },
  {
    title: "Pics3D-Viewer",
    context: "BSc thesis, University Hospital Zurich, grade 6.0",
    period: "2024",
    summary:
      "A web viewer for data from the Pelvic Inclination Correction System. Researchers explore pelvic anatomy as a 3D model, measure distances and angles, and compare datasets side by side. Evaluated with end users in iterative usability tests.",
    stack: ["React", "TypeScript", "React Three Fiber", "MUI"],
    links: [
      {
        label: "Read the thesis (PDF, German)",
        href: "https://github.com/nicolasbopp/nicolasbopp/blob/main/docs/Bopp_2024_BSc_Thesis_Pics3D-Viewer.pdf",
      },
    ],
  },
  {
    title: "NodeRegrets",
    context: "Independent project",
    period: "2026",
    summary:
      "Dependency health checks for Node.js projects: what is outdated, what is vulnerable, and what changed since your version. Matches OSV.dev advisories to the exact installed version, checks transitive dependencies and peer compatibility, and ships as a CLI.",
    stack: ["TypeScript", "Node.js", "OSV.dev"],
    links: [
      { label: "noderegrets.dev", href: "https://noderegrets.dev" },
    ],
  },
];

export const publications = [
  {
    authors:
      "Meier P., Kruta J., Bopp N., Martin T., Carapito R., Rizzi M., Voll R. E., Schwarting A., Korganow A.-S., Schkommodau E., Miho E.",
    title: "Personalis: medical software for autoimmune diseases",
    venue: "BMC Medical Informatics and Decision Making",
    year: "2026",
    href: "https://link.springer.com/article/10.1186/s12911-026-03806-5",
    doi: "10.1186/s12911-026-03806-5",
  },
];

export type Role = {
  title: string;
  org: string;
  period: string;
  detail?: string;
  award?: string;
};

export const experience: Role[] = [
  {
    title: "Research assistant, sensor systems for diagnosis and therapy",
    org: "FHNW",
    period: "Jul 2026 – present",
    detail: "Model generation algorithm for body-scan based orthopaedics, with BellwaldTEC.",
  },
  {
    title: "Master's thesis researcher",
    org: "University Hospital Zurich",
    period: "Feb 2026 – present",
    detail: "Machine-learning platform for annotating and visualising pelvic floor MRI.",
  },
  {
    title: "Research assistant, aiHealthLab",
    org: "FHNW",
    period: "Oct 2024 – Jun 2026",
    detail: "Clinical decision support for AL amyloidosis in the EUREKA consortium.",
  },
  {
    title: "Bachelor's thesis researcher",
    org: "University Hospital Zurich",
    period: "Apr 2024 – Jul 2024",
    detail: "Pics3D-Viewer for 3D visualisation of pelvic anatomy.",
  },
  {
    title: "Apprentice application developer",
    org: "daco systems ag",
    period: "Aug 2015 – Aug 2019",
    detail: "Enterprise logistics software with Omnis Studio, Java and relational databases.",
  },
];

export const education: Role[] = [
  { title: "MSc Medical Informatics", org: "FHNW", period: "2024 – 2026" },
  {
    title: "BSc Life Sciences, Medical Informatics",
    org: "FHNW",
    period: "2021 – 2024",
    award: "Top graduate: Straumann RDI Award for the best performance in the Medical Informatics BSc, 2024",
    detail: "Student buddy for first-semester students.",
  },
  {
    title: "Federal Diploma in Computer Science (EFZ), Application Development",
    org: "daco systems ag",
    period: "2015 – 2019",
  },
];

export const skills: { area: string; items: string[] }[] = [
  { area: "Languages", items: ["Python", "TypeScript", "JavaScript", "Java", "SQL"] },
  { area: "Frontend", items: ["React", "React Native", "React Three Fiber", "Redux", "Tailwind CSS"] },
  { area: "Backend", items: ["Node.js", "Express", "Flask"] },
  { area: "Machine learning and data", items: ["PyTorch", "TensorFlow", "pandas"] },
  { area: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { area: "Infrastructure", items: ["Docker", "Kubernetes", "Nginx", "Microsoft Azure", "Linux"] },
  { area: "Tooling", items: ["Git", "GitHub", "GitLab", "Postman"] },
];
