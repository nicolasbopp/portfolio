import Link from "next/link";
import { locales, person, type Dictionary, type Locale } from "@/content";

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
  return (
    <header className="site-header">
      <Link className="wordmark" href={sections ? "#top" : `/${lang}`}>
        {person.name}
      </Link>
      <div className="header-end">
        {sections && (
          <nav className="site-nav" aria-label={t.ui.nav.label}>
            <a href="#skills">{t.ui.nav.skills}</a>
            <a href="#work">{t.ui.nav.work}</a>
            <a href="#experience">{t.ui.nav.experience}</a>
            <a href="#publications">{t.ui.nav.publications}</a>
            <a href="#contact">{t.ui.nav.contact}</a>
          </nav>
        )}
        <nav className="lang-switch" aria-label={t.ui.languageLabel}>
          {locales.map((l) =>
            l === lang ? (
              <span key={l} aria-current="true" lang={l} title={LANGUAGE_NAMES[l]}>
                {l.toUpperCase()}
              </span>
            ) : (
              <Link key={l} href={`/${l}${path}`} hrefLang={l} lang={l} title={LANGUAGE_NAMES[l]}>
                {l.toUpperCase()}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter({ lang, t }: { lang: Locale; t: Dictionary }) {
  return (
    <footer className="site-footer">
      <span>© 2026 {person.name}</span>
      <span className="footer-links">
        <Link href={`/${lang}/imprint`}>{t.ui.footer.imprint}</Link>
        <Link href={`/${lang}/privacy`}>{t.ui.footer.privacy}</Link>
      </span>
    </footer>
  );
}

/** Simple text page used for the privacy notice and the imprint. */
export function ProsePage({
  lang,
  t,
  path,
  doc,
}: {
  lang: Locale;
  t: Dictionary;
  path: string;
  doc: { title: string; sections: { heading?: string; body: string }[] };
}) {
  return (
    <div className="page">
      <SiteHeader lang={lang} t={t} path={path} />
      <main className="prose">
        <h1>{doc.title}</h1>
        {doc.sections.map((s, i) => (
          <section key={i}>
            {s.heading && <h2>{s.heading}</h2>}
            <p className="prose-body">{s.body}</p>
          </section>
        ))}
        <p className="prose-back">
          <Link href={`/${lang}`}>{t.ui.backHome}</Link>
        </p>
      </main>
      <SiteFooter lang={lang} t={t} />
    </div>
  );
}
