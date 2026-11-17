import { personalis, skillTable, thesisPdf } from "./shared";
import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Nicolas Bopp, medical informatics",
    description:
      "Nicolas Bopp builds software for clinical research: medical imaging pipelines, annotation tools and clinical decision support.",
  },
  ui: {
    skip: "Skip to content",
    nav: {
      label: "Sections",
      skills: "Skills",
      work: "Work",
      experience: "Experience",
      publications: "Publications",
      contact: "Contact",
    },
    languageLabel: "Language",
    theme: { toDark: "Switch to dark mode", toLight: "Switch to light mode" },
    currently: "Currently",
    since: "since",
    getInTouch: "Get in touch",
    sections: {
      skills: "Skills",
      work: "Selected work",
      experience: "Experience",
      education: "Education",
      publications: "Publications",
      contact: "Contact",
    },
    technologies: "Technologies",
    contactLede: "Questions about a project, research collaboration or a role: write me and I will reply by email.",
    contactAlt: "Or reach me on",
    footer: { privacy: "Privacy", imprint: "Imprint" },
    backHome: "Back to the home page",
  },
  form: {
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send message",
    sending: "Sending message",
    sent: "Message sent. I will reply to the address you entered.",
    offline: "No connection. Check your network and send again.",
    genericError: "The message could not be sent. Try again later.",
    note: "Your name, email and message are sent to me by email and not stored on this site. See the",
    privacyLink: "privacy notice",
  },
  profile: {
    role: "Medical informatics engineer",
    location: "Basel, Switzerland",
    intro:
      "I build software for clinical research: imaging pipelines, annotation tools and decision support, from the model to the interface people actually use.",
  },
  projects: [
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
      links: [{ label: "Read the thesis (PDF, German)", href: thesisPdf }],
    },
    {
      title: "NodeRegrets",
      context: "Independent project",
      period: "2026",
      summary:
        "Dependency health checks for Node.js projects: what is outdated, what is vulnerable, and what changed since your version. Matches OSV.dev advisories to the exact installed version, checks transitive dependencies and peer compatibility, and ships as a CLI.",
      stack: ["TypeScript", "Node.js", "OSV.dev"],
      links: [{ label: "noderegrets.dev", href: "https://noderegrets.dev" }],
    },
  ],
  publications: [personalis],
  experience: [
    {
      title: "Research assistant, sensor systems for diagnosis and therapy",
      org: "FHNW",
      period: "Jul 2026 – present",
      since: "Jul 2026",
      detail: "Model generation algorithm for body-scan based orthopaedics, with BellwaldTEC.",
    },
    {
      title: "Master's thesis researcher",
      org: "University Hospital Zurich",
      period: "Feb 2026 – present",
      since: "Feb 2026",
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
  ],
  education: [
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
  ],
  skills: skillTable({
    languages: "Languages",
    frontend: "Frontend",
    backend: "Backend",
    ml: "Machine learning and data",
    databases: "Databases",
    infrastructure: "Infrastructure",
    tooling: "Tooling",
  }),
  privacy: {
    title: "Privacy notice",
    sections: [
      {
        body: "This site is run by Nicolas Bopp, Basel, Switzerland. It does not use cookies, analytics or tracking.",
      },
      {
        heading: "Contact form",
        body: "When you send a message, your name, email address and message are passed to the email service Resend (Resend, Inc., USA) and delivered to my inbox. They are used only to answer you and are not stored on this website. I delete messages once the conversation is over, unless we keep working together.",
      },
      {
        heading: "Hosting",
        body: "The hosting provider processes technical data such as IP addresses in server logs to deliver the site and protect it against abuse.",
      },
      {
        heading: "Your rights",
        body: "You can ask what data I hold about you, and have it corrected or deleted, by writing to me through the contact form or on LinkedIn.",
      },
    ],
  },
  imprint: {
    title: "Imprint",
    sections: [
      { heading: "Responsible for this site", body: "Nicolas Bopp\nBasel, Switzerland" },
      { heading: "Contact", email: "nicolas.bopp@pm.me", body: "Or through the contact form on this site or on LinkedIn." },
      {
        heading: "Disclaimer",
        body: "The content of this site was created with care, but I cannot guarantee that it is complete, correct or up to date. Links to external sites are provided for information; their operators are responsible for their content.",
      },
      {
        heading: "Copyright",
        body: "Text and code on this site are by Nicolas Bopp unless stated otherwise. Technology logos are trademarks of their owners and are shown from Simple Icons.",
      },
    ],
  },
};
