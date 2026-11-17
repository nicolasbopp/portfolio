import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import TechIcon from "@/components/TechIcon";
import { education, experience, profile, projects, publications, skills } from "@/content";

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

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="page">
        <header className="site-header">
          <a className="wordmark" href="#top">
            {profile.name}
          </a>
          <nav className="site-nav" aria-label="Sections">
            <a href="#skills">Skills</a>
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#publications">Publications</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main id="main">
          <section className="hero" id="top" aria-labelledby="hero-title">
            <div>
              <h1 id="hero-title">{profile.name}</h1>
              <p className="role">{profile.role}</p>
              <p className="location">{profile.location}</p>
              <p className="intro">{profile.intro}</p>
              <p className="links">
                <a href={profile.linkedin}>LinkedIn</a>
                <a href={profile.github}>GitHub</a>
                <a href="#contact">Get in touch</a>
              </p>
            </div>
            <aside className="current" aria-labelledby="current-title">
              <h2 id="current-title">Currently</h2>
              <ul>
                {experience
                  .filter((r) => r.period.includes("present"))
                  .map((r) => (
                    <li key={r.title}>
                      <p className="current-title">{r.title}</p>
                      <p className="current-org">
                        {r.org}, since {r.period.replace(" – present", "")}
                      </p>
                    </li>
                  ))}
              </ul>
            </aside>
          </section>

          <section className="section" id="skills" aria-labelledby="skills-title">
            <h2 id="skills-title">Skills</h2>
            <div className="section-body">
              <table className="skills">
                <tbody>
                  {skills.map((s) => (
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
            <h2 id="work-title">Selected work</h2>
            <div className="section-body">
              <ul className="projects">
                {projects.map((p) => (
                  <li className="project" key={p.title}>
                    <span className="period">{p.period}</span>
                    <div>
                      <h3>
                        {p.title}
                        {p.status && <span className="status">{p.status}</span>}
                      </h3>
                      <p className="context">{p.context}</p>
                      <p className="summary">{p.summary}</p>
                      <ul className="stack" aria-label="Technologies">
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
            <h2 id="exp-title">Experience</h2>
            <div className="section-body">
              <ol className="timeline">
                {experience.map((r) => (
                  <li key={r.title} className={r.period.includes("present") ? "current" : undefined}>
                    <h3>{r.title}</h3>
                    <p className="meta">
                      {r.org}, {r.period}
                    </p>
                    {r.detail && <p className="detail">{r.detail}</p>}
                  </li>
                ))}
              </ol>
              <h3 className="subhead">Education</h3>
              <ol className="timeline">
                {education.map((r) => (
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
            <h2 id="pub-title">Publications</h2>
            <div className="section-body">
              {publications.map((p) => (
                <article className="citation" key={p.doi}>
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
            <h2 id="contact-title">Contact</h2>
            <div className="section-body">
              <p className="lede">
                Questions about a project, research collaboration or a role: write me and I will reply by email.
              </p>
              <ContactForm />
              <p className="contact-alt">
                Or reach me on <a href={profile.linkedin}>LinkedIn</a>.
              </p>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <span>© 2026 {profile.name}</span>
          <Link href="/privacy">Privacy</Link>
        </footer>
      </div>
    </>
  );
}
