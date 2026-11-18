import Link from "next/link";
import { lang as rootLang } from "next/root-params";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { defaultLocale, getDictionary, hasLocale, localePath } from "@/content";

export default async function NotFound() {
  const value = await rootLang();
  const lang = value && hasLocale(value) ? value : defaultLocale;
  const t = getDictionary(lang);

  return (
    <>
      <SiteHeader lang={lang} t={t} />
      <div className="page">
        <main className="not-found">
          <p className="not-found-code" aria-hidden="true">
            404
          </p>
          <h1>{t.ui.notFound.title}</h1>
          <p className="not-found-body">{t.ui.notFound.body}</p>
          <p className="not-found-action">
            <Link href={localePath(lang)}>{t.ui.backHome}</Link>
          </p>
        </main>
        <SiteFooter lang={lang} t={t} />
      </div>
    </>
  );
}
