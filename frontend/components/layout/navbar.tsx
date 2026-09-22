import Link from "next/link";
import LanguageSwitcher from "./language-switcher";

type NavbarProps = {
  locale: string;
  dictionary: {
    nav: {
      home: string;
      work: string;
      about: string;
      contact: string;
    };
  };
};

export default function Navbar({ locale, dictionary }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b thin-line bg-black/30 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href={`/${locale}`} className="text-sm font-semibold tracking-[0.2em] uppercase">
          Ajin Babu
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href={`/${locale}#home`} className="nav-link">
            {dictionary.nav.home}
          </a>
          <a href={`/${locale}#work`} className="nav-link">
            {dictionary.nav.work}
          </a>
          <a href={`/${locale}#about`} className="nav-link">
            {dictionary.nav.about}
          </a>
          <a href={`/${locale}#contact`} className="nav-link">
            {dictionary.nav.contact}
          </a>
        </nav>

        <LanguageSwitcher locale={locale} />
      </div>
    </header>
  );
}