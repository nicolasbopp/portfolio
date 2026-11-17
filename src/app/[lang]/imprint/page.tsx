import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProsePage } from "@/components/SiteChrome";
import { getDictionary, hasLocale } from "@/content";

export async function generateMetadata({ params }: PageProps<"/[lang]/imprint">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return { title: `${getDictionary(lang).imprint.title}, Nicolas Bopp` };
}

export default async function Imprint({ params }: PageProps<"/[lang]/imprint">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  return <ProsePage lang={lang} t={t} path="/imprint" doc={t.imprint} />;
}
