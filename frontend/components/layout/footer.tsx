type FooterProps = {
  locale: string;
  dictionary: {
    footer: {
      smallLine: string;
    };
  };
};

export default function Footer({ locale, dictionary }: FooterProps) {
  return (
    <footer className="border-t thin-line">
      <div className="container-shell py-6 flex items-center justify-between text-sm text-white/45">
        <p>{dictionary.footer.smallLine}</p>
        <p>© 2026</p>
      </div>
    </footer>
  );
}