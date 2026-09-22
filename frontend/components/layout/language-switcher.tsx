"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  locale: string;
};

export default function LanguageSwitcher({ locale }: Props) {
  const pathname = usePathname();

  const alternatePath = (targetLocale: "en" | "de") => {
    const segments = pathname.split("/");
    segments[1] = targetLocale;
    return segments.join("/") || `/${targetLocale}`;
  };

  return (
    <div className="flex items-center gap-2">
      <motion.div whileTap={{ scale: 0.96 }}>
        <Link
          href={alternatePath("en")}
          className={`lang-button ${locale === "en" ? "lang-button--active" : ""}`}
        >
          🇬🇧 English
        </Link>
      </motion.div>

      <motion.div whileTap={{ scale: 0.96 }}>
        <Link
          href={alternatePath("de")}
          className={`lang-button ${locale === "de" ? "lang-button--active" : ""}`}
        >
          🇩🇪 Deutsch
        </Link>
      </motion.div>
    </div>
  );
}