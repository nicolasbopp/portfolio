import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import TechIcon from "@/components/TechIcon";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import BackToTop from "@/components/BackToTop";
import HeroName from "@/components/HeroName";
import { getDictionary, hasLocale, localePath, person, siteUrl } from "@/content";

function highlightSelf(authors: string) {
  const [before, after] = authors.split("Bopp N.");
  if (after === undefined) return authors;
  return (
    <>
      {before}
      <strong>Bopp N.</strong>
      {after}
    </>
  );
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  const current = t.experience.filter((r) => r.since);

  // Structured data so search engines read this page as a person's profile.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    inLanguage: lang,
    mainEntity: {
      "@type": "Person",
      name: person.name,
      jobTitle: t.profile.role,
      description: t.meta.description,
      url: siteUrl,
      sameAs: [person.linkedin, person.github],
      address: { "@type": "PostalAddress", addressLocality: "Basel", addressCountry: "CH" },
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "FHNW University of Applied Sciences and Arts Northwestern Switzerland",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "FHNW University of Applied Sciences and Arts Northwestern Switzerland",
      },
      knowsAbout: ["Medical informatics", "Medical imaging", "Clinical decision support", "Software engineering"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\u003c") }}
      />
      <a className="skip-link" href="#main">
        {t.ui.skip}
      </a>

      <SiteHeader lang={lang} t={t} sections />

      <div className="hero-field" id="hero-field">
        <div className="page">
          <section className="hero" id="top" aria-labelledby="hero-title">
            <HeroName id="hero-title" name={person.name} />
            <div className="hero-about">
              <p className="hero-role">
                {t.profile.role}
                <span className="hero-location">{t.profile.location}</span>
              </p>
              <p className="hero-intro">{t.profile.intro}</p>
              <p className="hero-links">
                <a className="button" href="#contact">
                  {t.ui.getInTouch}
                </a>
                <a href={person.linkedin}>LinkedIn</a>
                <a href={person.github}>GitHub</a>
              </p>
            </div>
            {current.length > 0 && (
              <aside className="hero-now" aria-labelledby="now-title">
                <h2 id="now-title">{t.ui.currently}</h2>
                <ul>
                  {current.map((r) => (
                    <li key={r.title}>
                      <p className="now-title">{r.title}</p>
                      <p className="now-org">
                        {r.org}, {t.ui.since} {r.since}
                      </p>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </section>
        </div>
      </div>

      <div className="page">
        <main id="main" tabIndex={-1}>
          <section className="section" id="skills" aria-labelledby="skills-title">
            <h2 id="skills-title" className="section-title">
              {t.ui.sections.skills}
            </h2>
            <div className="skills">
              {t.skills.map((s) => (
                <div className="skill-group" key={s.area}>
                  <h3>{s.area}</h3>
                  <ul>
                    {s.items.map((item) => (
                      <li key={item}>
                        <TechIcon name={item} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="section" id="work" aria-labelledby="work-title">
            <h2 id="work-title" className="section-title">
              {t.ui.sections.work}
            </h2>
            <div className="projects">
              {t.projects.map((p) => (
                <article className="project" key={p.title}>
                  <header className="project-head">
                    <p className="project-meta">
                      <span>{p.period}</span>
                      {p.status && <span className="status">{p.status}</span>}
                    </p>
                    <h3>{p.title}</h3>
                    <p className="project-context">{p.context}</p>
                  </header>
                  <div className="project-body">
                    <p className="project-summary">{p.summary}</p>
                    <ul className="stack" aria-label={t.ui.technologies}>
                      {p.stack.map((s) => (
                        <li key={s}>
                          <TechIcon name={s} />
                          {s}
                        </li>
                      ))}
                    </ul>
                    {p.links && (
                      <p className="project-links">
                        {p.links.map((l) => (
                          <a key={l.href} href={l.href}>
                            {l.label}
                          </a>
                        ))}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="experience" aria-labelledby="exp-title">
            <h2 id="exp-title" className="section-title">
              {t.ui.sections.experience}
            </h2>
            <div className="cv">
              <ol className="cv-list">
                {t.experience.map((r) => (
                  <li key={r.title} data-current={r.since ? true : undefined}>
                    <p className="cv-period">{r.period}</p>
                    <div>
                      <h3>{r.title}</h3>
                      <p className="cv-org">{r.org}</p>
                      {r.detail && <p className="cv-detail">{r.detail}</p>}
                    </div>
                  </li>
                ))}
              </ol>
              <h3 className="cv-subhead">{t.ui.sections.education}</h3>
              <ol className="cv-list">
                {t.education.map((r) => (
                  <li key={r.title}>
                    <p className="cv-period">{r.period}</p>
                    <div>
                      <h3>{r.title}</h3>
                      <p className="cv-org">{r.org}</p>
                      {r.award && <p className="cv-award">{r.award}</p>}
                      {r.detail && <p className="cv-detail">{r.detail}</p>}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="section" id="publications" aria-labelledby="pub-title">
            <h2 id="pub-title" className="section-title">
              {t.ui.sections.publications}
            </h2>
            <div>
              {t.publications.map((p) => (
                <article className="citation" key={p.doi} lang="en">
                  <h3>
                    <a href={p.href}>{p.title}</a>
                  </h3>
                  <p className="citation-authors">{highlightSelf(p.authors)}</p>
                  <p className="citation-venue">
                    {p.venue}, {p.year}
                  </p>
                  <p className="citation-doi">
                    <a href={`https://doi.org/${p.doi}`}>doi:{p.doi}</a>
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="section section-contact" id="contact" aria-labelledby="contact-title">
            <h2 id="contact-title" className="section-title">
              {t.ui.sections.contact}
            </h2>
            <div>
              <p className="contact-lede">{t.ui.contactLede}</p>
              <ContactForm lang={lang} t={t.form} privacyHref={localePath(lang, "/privacy")} />
              <p className="contact-alt">
                {t.ui.contactAlt} <a href={person.linkedin}>LinkedIn</a>.
              </p>
            </div>
          </section>
        </main>

        <SiteFooter lang={lang} t={t} />
      </div>
      <BackToTop label={t.ui.backToTop} />
    </>
  );
}
