"use client";

import Reveal from "@/components/motion/reveal";

type ContactSectionProps = {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    emailText: string;
    linkedinText: string;
    instagramText: string;
  };
};

export default function ContactSection({ content }: ContactSectionProps) {
  return (
    <section id="contact" className="section-space pt-14">
      <div className="container-shell">
        <Reveal>
          <div className="surface-card contact-shell p-5 md:p-7">
            <div className="contact-grid">
              <div className="max-w-[760px]">
                <p className="eyebrow">{content.eyebrow}</p>
                <h2 className="section-title max-w-[13ch]">{content.title}</h2>
                <p className="section-copy max-w-[54ch]">{content.description}</p>
              </div>

              <div className="contact-actions">
                <a
                  href="mailto:ajin91726@gmail.com"
                  className="primary-button"
                >
                  <span>{content.emailText}</span>
                  <span aria-hidden="true">↗</span>
                </a>

                <a
                  href="https://linkedin.com/in/ajin-babu7"
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button"
                >
                  <span>{content.linkedinText}</span>
                  <span aria-hidden="true">↗</span>
                </a>

                <a
                  href="https://www.instagram.com/__aj.i.n_"
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button"
                >
                  <span>{content.instagramText}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="contact-footer-line">
              <span className="contact-footer-line__label">
                Open to learning, building, and growing.
              </span>
              <span className="contact-footer-line__bar" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}