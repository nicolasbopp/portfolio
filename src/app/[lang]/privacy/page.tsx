import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProsePage } from "@/components/SiteChrome";
import { getDictionary, hasLocale } from "@/content";

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return { title: `${getDictionary(lang).privacy.title}, Nicolas Bopp` };
}

export default async function Privacy({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  return <ProsePage lang={lang} t={t} path="/privacy" doc={t.privacy} />;
}
