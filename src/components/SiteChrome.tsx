import Link from "next/link";
import { localePath, locales, person, type Dictionary, type Locale } from "@/content";
import type { LegalDoc } from "@/content/types";
import HeaderShell from "./HeaderShell";
import SectionNav from "./SectionNav";
import ThemeToggle from "./ThemeToggle";

const LANGUAGE_NAMES: Record<Locale, string> = { en: "English", de: "Deutsch" };

/** Header with the name, optional section links and the language switcher. */
export function SiteHeader({
  lang,
  t,
  path = "",
  sections = false,
}: {
  lang: Locale;
  t: Dictionary;
  /** Path after the locale, e.g. "/privacy", so the switcher stays on the same page. */
  path?: string;
  sections?: boolean;
}) {
  const nav = t.ui.nav;
  return (
    <HeaderShell overHero={sections}>
      <div className="page header-inner">
        <Link className="wordmark" href={sections ? "#top" : localePath(lang)}>
          {person.name}
        </Link>
        <div className="header-end">
          {sections && (
            <SectionNav
              label={nav.label}
              links={[
                { id: "skills", label: nav.skills },
                { id: "work", label: nav.work },
                { id: "experience", label: nav.experience },
                { id: "publications", label: nav.publications },
                { id: "contact", label: nav.contact },
              ]}
            />
          )}
          <div className="header-tools">
            <ThemeToggle labels={t.ui.theme} />
            <nav className="lang-switch" aria-label={t.ui.languageLabel}>
              {locales.map((l) =>
                l === lang ? (
                  <span key={l} aria-current="true" lang={l} title={LANGUAGE_NAMES[l]}>
                    {l.toUpperCase()}
                  </span>
                ) : (
                  // A full page load on purpose: each language has its own root layout, and a
                  // client-side switch would re-render <html> and drop the saved theme.
                  <a key={l} href={localePath(l, path)} hrefLang={l} lang={l} title={LANGUAGE_NAMES[l]}>
                    {l.toUpperCase()}
                  </a>
                ),
              )}
            </nav>
          </div>
        </div>
      </div>
    </HeaderShell>
  );
}

export function SiteFooter({ lang, t }: { lang: Locale; t: Dictionary }) {
  return (
    <footer className="site-footer">
      <span>© 2026 {person.name}</span>
      <span className="footer-links">
        <a href={person.linkedin}>LinkedIn</a>
        <a href={person.github}>GitHub</a>
        <Link href={localePath(lang, "/imprint")}>{t.ui.footer.imprint}</Link>
        <Link href={localePath(lang, "/privacy")}>{t.ui.footer.privacy}</Link>
      </span>
    </footer>
  );
}

/** Simple text page used for the privacy notice and the imprint. */
export function ProsePage({ lang, t, path, doc }: { lang: Locale; t: Dictionary; path: string; doc: LegalDoc }) {
  return (
    <>
      <SiteHeader lang={lang} t={t} path={path} />
      <div className="page">
        <main className="prose">
          <h1>{doc.title}</h1>
          {doc.updated && <p className="prose-updated">{doc.updated}</p>}
          <div className="prose-sections">
            {doc.sections.map((s, i) => (
              <section className="prose-section" key={i}>
                <h2>{s.heading}</h2>
                <div>
                  {s.email && (
                    <p className="prose-body">
                      <a href={`mailto:${s.email}`}>{s.email}</a>
                    </p>
                  )}
                  <p className="prose-body">{s.body}</p>
                </div>
              </section>
            ))}
          </div>
          <p className="prose-back">
            <Link href={localePath(lang)}>{t.ui.backHome}</Link>
          </p>
        </main>
        <SiteFooter lang={lang} t={t} />
      </div>
    </>
  );
}
