import Hero from "@/components/home/hero";
import WorkSection from "@/components/home/work-section";
import LearningSignalsSection from "@/components/home/learning-signals-section";
import AboutSection from "@/components/about/about-section";
import ContactSection from "@/components/contact/contact-section";
import { getDictionary } from "@/lib/dictionary";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} content={dictionary.hero} />
      <WorkSection locale={locale} content={dictionary.work} />
      <LearningSignalsSection content={dictionary.learningSignals} />
      <AboutSection content={dictionary.about} />
      <ContactSection content={dictionary.contact} />
    </>
  );
}