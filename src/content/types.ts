export type Project = {
  title: string;
  context: string;
  period: string;
  summary: string;
  stack: string[];
  status?: string;
  links?: { label: string; href: string }[];
};

export type Role = {
  title: string;
  org: string;
  period: string;
  /** Set for ongoing roles; shown in the "Currently" block of the hero. */
  since?: string;
  detail?: string;
  award?: string;
};

export type Publication = {
  authors: string;
  title: string;
  venue: string;
  year: string;
  href: string;
  doi: string;
};

export type LegalDoc = {
  title: string;
  /** Line under the title, e.g. "Last updated November 2026". */
  updated?: string;
  sections: { heading: string; body: string; email?: string }[];
};

export type Dictionary = {
  meta: { title: string; description: string };
  ui: {
    skip: string;
    nav: { label: string; skills: string; work: string; experience: string; publications: string; contact: string };
    languageLabel: string;
    theme: { toDark: string; toLight: string };
    currently: string;
    since: string;
    getInTouch: string;
    sections: {
      skills: string;
      work: string;
      experience: string;
      education: string;
      publications: string;
      contact: string;
    };
    technologies: string;
    backToTop: string;
    contactLede: string;
    contactAlt: string;
    footer: { privacy: string; imprint: string };
    backHome: string;
    notFound: { title: string; body: string };
  };
  form: {
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    sent: string;
    offline: string;
    genericError: string;
    note: string;
    privacyLink: string;
  };
  profile: {
    role: string;
    location: string;
    intro: string;
  };
  projects: Project[];
  publications: Publication[];
  experience: Role[];
  education: Role[];
  skills: { area: string; items: string[] }[];
  privacy: LegalDoc;
  imprint: LegalDoc;
};
