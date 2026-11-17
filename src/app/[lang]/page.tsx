import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import TechIcon from "@/components/TechIcon";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { getDictionary, hasLocale, person } from "@/content";

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

  return (
    <>
      <a className="skip-link" href="#main">
        {t.ui.skip}
      </a>
      <div className="page">
        <SiteHeader lang={lang} t={t} sections />

        <main id="main">
          <section className="hero" id="top" aria-labelledby="hero-title">
            <div>
              <h1 id="hero-title">{person.name}</h1>
              <p className="role">{t.profile.role}</p>
              <p className="location">{t.profile.location}</p>
              <p className="intro">{t.profile.intro}</p>
              <p className="links">
                <a href={person.linkedin}>LinkedIn</a>
                <a href={person.github}>GitHub</a>
                <a href="#contact">{t.ui.getInTouch}</a>
              </p>
            </div>
            {current.length > 0 && (
              <aside className="current" aria-labelledby="current-title">
                <h2 id="current-title">{t.ui.currently}</h2>
                <ul>
                  {current.map((r) => (
                    <li key={r.title}>
                      <p className="current-title">{r.title}</p>
                      <p className="current-org">
                        {r.org}, {t.ui.since} {r.since}
                      </p>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </section>

          <section className="section" id="skills" aria-labelledby="skills-title">
            <h2 id="skills-title">{t.ui.sections.skills}</h2>
            <div className="section-body">
              <table className="skills">
                <tbody>
                  {t.skills.map((s) => (
                    <tr key={s.area}>
                      <th scope="row">{s.area}</th>
                      <td>
                        <ul className="skill-list">
                          {s.items.map((item) => (
                            <li key={item}>
                              <TechIcon name={item} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="section" id="work" aria-labelledby="work-title">
            <h2 id="work-title">{t.ui.sections.work}</h2>
            <div className="section-body">
              <ul className="projects">
                {t.projects.map((p) => (
                  <li className="project" key={p.title}>
                    <span className="period">{p.period}</span>
                    <div>
                      <h3>
                        {p.title}
                        {p.status && <span className="status">{p.status}</span>}
                      </h3>
                      <p className="context">{p.context}</p>
                      <p className="summary">{p.summary}</p>
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
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="section" id="experience" aria-labelledby="exp-title">
            <h2 id="exp-title">{t.ui.sections.experience}</h2>
            <div className="section-body">
              <ol className="timeline">
                {t.experience.map((r) => (
                  <li key={r.title} className={r.since ? "current" : undefined}>
                    <h3>{r.title}</h3>
                    <p className="meta">
                      {r.org}, {r.period}
                    </p>
                    {r.detail && <p className="detail">{r.detail}</p>}
                  </li>
                ))}
              </ol>
              <h3 className="subhead">{t.ui.sections.education}</h3>
              <ol className="timeline">
                {t.education.map((r) => (
                  <li key={r.title}>
                    <h3>{r.title}</h3>
                    <p className="meta">
                      {r.org}, {r.period}
                    </p>
                    {r.award && <p className="award">{r.award}</p>}
                    {r.detail && <p className="detail">{r.detail}</p>}
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="section" id="publications" aria-labelledby="pub-title">
            <h2 id="pub-title">{t.ui.sections.publications}</h2>
            <div className="section-body">
              {t.publications.map((p) => (
                <article className="citation" key={p.doi} lang="en">
                  <h3 className="title">
                    <a href={p.href}>{p.title}</a>
                  </h3>
                  <p className="authors">{highlightSelf(p.authors)}</p>
                  <p className="venue">
                    {p.venue}, {p.year}
                  </p>
                  <p className="doi">
                    <a href={`https://doi.org/${p.doi}`}>doi:{p.doi}</a>
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="contact" aria-labelledby="contact-title">
            <h2 id="contact-title">{t.ui.sections.contact}</h2>
            <div className="section-body">
              <p className="lede">{t.ui.contactLede}</p>
              <ContactForm lang={lang} t={t.form} />
              <p className="contact-alt">
                {t.ui.contactAlt} <a href={person.linkedin}>LinkedIn</a>.
              </p>
            </div>
          </section>
        </main>

        <SiteFooter lang={lang} t={t} />
      </div>
    </>
  );
}
