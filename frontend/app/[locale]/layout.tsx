import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import OrbCursor from "@/components/cursor/orb-cursor";
import AIAssistant from "@/components/assistant/ai-assistant";
import { getDictionary } from "@/lib/dictionary";

const locales = ["en", "de"] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <html lang={locale}>
      <body>
        <OrbCursor />
        <Navbar locale={locale} dictionary={dictionary} />
        <main>{children}</main>
        <Footer locale={locale} dictionary={dictionary} />
        <AIAssistant locale={locale} />
      </body>
    </html>
  );
}