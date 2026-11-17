import { personalis, skillTable, thesisPdf } from "./shared";
import type { Dictionary } from "./types";

// Swiss Standard German: "ss" instead of "ß".
export const de: Dictionary = {
  meta: {
    title: "Nicolas Bopp, Medizininformatik",
    description:
      "Nicolas Bopp entwickelt Software für die klinische Forschung: Pipelines für medizinische Bildgebung, Annotationswerkzeuge und klinische Entscheidungsunterstützung.",
  },
  ui: {
    skip: "Zum Inhalt springen",
    nav: {
      label: "Abschnitte",
      skills: "Skills",
      work: "Projekte",
      experience: "Werdegang",
      publications: "Publikationen",
      contact: "Kontakt",
    },
    languageLabel: "Sprache",
    currently: "Aktuell",
    since: "seit",
    getInTouch: "Kontakt aufnehmen",
    sections: {
      skills: "Skills",
      work: "Ausgewählte Projekte",
      experience: "Berufserfahrung",
      education: "Ausbildung",
      publications: "Publikationen",
      contact: "Kontakt",
    },
    technologies: "Technologien",
    contactLede:
      "Fragen zu einem Projekt, zu einer Forschungszusammenarbeit oder zu einer Stelle: Schreiben Sie mir, ich antworte per E-Mail.",
    contactAlt: "Oder erreichen Sie mich auf",
    footer: { privacy: "Datenschutz", imprint: "Impressum" },
    backHome: "Zurück zur Startseite",
  },
  form: {
    name: "Name",
    email: "E-Mail",
    message: "Nachricht",
    send: "Nachricht senden",
    sending: "Nachricht wird gesendet",
    sent: "Nachricht gesendet. Ich antworte an die angegebene Adresse.",
    offline: "Keine Verbindung. Prüfen Sie Ihr Netzwerk und senden Sie erneut.",
    genericError: "Die Nachricht konnte nicht gesendet werden. Versuchen Sie es später erneut.",
    note: "Name, E-Mail und Nachricht werden mir per E-Mail zugestellt und nicht auf dieser Website gespeichert. Siehe",
    privacyLink: "Datenschutzerklärung",
  },
  profile: {
    role: "Medizininformatiker",
    location: "Basel, Schweiz",
    intro:
      "Ich entwickle Software für die klinische Forschung: Bildverarbeitungs-Pipelines, Annotationswerkzeuge und Entscheidungsunterstützung, vom Modell bis zur Oberfläche, mit der Menschen tatsächlich arbeiten.",
  },
  projects: [
    {
      title: "Annotations- und Visualisierungsplattform für Beckenboden-MRT",
      context: "Masterarbeit, Universitätsspital Zürich",
      period: "2026",
      status: "In Arbeit",
      summary:
        "Eine Plattform mit maschinellem Lernen zur Annotation und Visualisierung von Beckenboden-MRT. Sie verbindet Deep-Learning-Segmentierungspipelines mit einer Annotationsoberfläche in React und Python.",
      stack: ["PyTorch", "Python", "React", "TypeScript"],
    },
    {
      title: "Pics3D-Viewer",
      context: "Bachelorarbeit, Universitätsspital Zürich, Note 6.0",
      period: "2024",
      summary:
        "Ein Web-Viewer für Daten des Pelvic Inclination Correction System. Forschende erkunden die Beckenanatomie als 3D-Modell, messen Distanzen und Winkel und vergleichen Datensätze nebeneinander. In iterativen Usability-Tests mit Endnutzenden evaluiert.",
      stack: ["React", "TypeScript", "React Three Fiber", "MUI"],
      links: [{ label: "Bachelorarbeit lesen (PDF)", href: thesisPdf }],
    },
    {
      title: "NodeRegrets",
      context: "Eigenes Projekt",
      period: "2026",
      summary:
        "Prüft die Abhängigkeiten von Node.js-Projekten: was veraltet ist, was verwundbar ist und was sich seit der eigenen Version geändert hat. Gleicht Meldungen von OSV.dev mit der exakt installierten Version ab, prüft indirekte Abhängigkeiten und Kompatibilität und läuft auch als CLI.",
      stack: ["TypeScript", "Node.js", "OSV.dev"],
      links: [{ label: "noderegrets.dev", href: "https://noderegrets.dev" }],
    },
  ],
  publications: [personalis],
  experience: [
    {
      title: "Wissenschaftlicher Assistent, Sensorsysteme für Diagnose und Therapie",
      org: "FHNW",
      period: "Jul. 2026 – heute",
      since: "Jul. 2026",
      detail: "Algorithmus zur Modellgenerierung für orthopädische Lösungen aus Körperscans, mit BellwaldTEC.",
    },
    {
      title: "Masterarbeit",
      org: "Universitätsspital Zürich",
      period: "Feb. 2026 – heute",
      since: "Feb. 2026",
      detail: "Plattform mit maschinellem Lernen zur Annotation und Visualisierung von Beckenboden-MRT.",
    },
    {
      title: "Wissenschaftlicher Assistent, aiHealthLab",
      org: "FHNW",
      period: "Okt. 2024 – Jun. 2026",
      detail: "Klinische Entscheidungsunterstützung für AL-Amyloidose im EUREKA-Konsortium.",
    },
    {
      title: "Bachelorarbeit",
      org: "Universitätsspital Zürich",
      period: "Apr. 2024 – Jul. 2024",
      detail: "Pics3D-Viewer zur 3D-Visualisierung der Beckenanatomie.",
    },
    {
      title: "Lehre als Informatiker Applikationsentwicklung",
      org: "daco systems ag",
      period: "Aug. 2015 – Aug. 2019",
      detail: "Logistik-Unternehmenssoftware mit Omnis Studio, Java und relationalen Datenbanken.",
    },
  ],
  education: [
    { title: "MSc Medizininformatik", org: "FHNW", period: "2024 – 2026" },
    {
      title: "BSc Life Sciences, Medizininformatik",
      org: "FHNW",
      period: "2021 – 2024",
      award: "Jahrgangsbester: Straumann RDI Award für die beste Leistung im Bachelor Medizininformatik, 2024",
      detail: "Student Buddy für Studierende im ersten Semester.",
    },
    {
      title: "Informatiker EFZ, Applikationsentwicklung",
      org: "daco systems ag",
      period: "2015 – 2019",
    },
  ],
  skills: skillTable({
    languages: "Sprachen",
    frontend: "Frontend",
    backend: "Backend",
    ml: "Machine Learning und Daten",
    databases: "Datenbanken",
    infrastructure: "Infrastruktur",
    tooling: "Werkzeuge",
  }),
  privacy: {
    title: "Datenschutzerklärung",
    sections: [
      {
        body: "Diese Website wird von Nicolas Bopp, Basel, Schweiz, betrieben. Sie verwendet keine Cookies, keine Analysewerkzeuge und kein Tracking.",
      },
      {
        heading: "Kontaktformular",
        body: "Wenn Sie eine Nachricht senden, werden Ihr Name, Ihre E-Mail-Adresse und Ihre Nachricht an den E-Mail-Dienst Resend (Resend, Inc., USA) übermittelt und mir zugestellt. Sie werden nur zur Beantwortung verwendet und nicht auf dieser Website gespeichert. Ich lösche Nachrichten, sobald die Unterhaltung abgeschlossen ist, ausser wir arbeiten weiter zusammen.",
      },
      {
        heading: "Hosting",
        body: "Der Hosting-Anbieter verarbeitet technische Daten wie IP-Adressen in Server-Logs, um die Website auszuliefern und vor Missbrauch zu schützen.",
      },
      {
        heading: "Ihre Rechte",
        body: "Sie können Auskunft über die zu Ihnen gespeicherten Daten verlangen und diese berichtigen oder löschen lassen. Schreiben Sie mir dazu über das Kontaktformular oder auf LinkedIn.",
      },
    ],
  },
  imprint: {
    title: "Impressum",
    sections: [
      { heading: "Verantwortlich für diese Website", body: "Nicolas Bopp\nBasel, Schweiz" },
      { heading: "Kontakt", body: "Über das Kontaktformular auf dieser Website oder auf LinkedIn." },
      {
        heading: "Haftungsausschluss",
        body: "Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für Vollständigkeit, Richtigkeit und Aktualität kann ich jedoch keine Gewähr übernehmen. Links auf externe Websites dienen der Information; für deren Inhalte sind ausschliesslich die jeweiligen Betreiber verantwortlich.",
      },
      {
        heading: "Urheberrecht",
        body: "Texte und Code dieser Website stammen von Nicolas Bopp, sofern nicht anders angegeben. Die Technologie-Logos sind Marken ihrer jeweiligen Inhaber und stammen von Simple Icons.",
      },
    ],
  },
};
