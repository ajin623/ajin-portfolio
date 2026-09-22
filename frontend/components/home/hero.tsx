"use client";

import { useEffect, useState } from "react";
import AIField from "./ai-field";

type HeroProps = {
  locale: string;
  content: {
    eyebrow: string;
    title: string;
    description: string;
    rotatingLines: string[];
    primaryCta: string;
    secondaryCta: string;
  };
};

export default function Hero({ locale, content }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!content.rotatingLines.length) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % content.rotatingLines.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [content.rotatingLines]);

  return (
    <section id="home" className="hero-section">
      <div className="container-shell">
        <div className="hero-grid">
          <div className="hero-copy-wrap">
            <p className="eyebrow">{content.eyebrow}</p>

            <h1 className="hero-title mt-4">{content.title}</h1>

            <p className="hero-copy mt-5">{content.description}</p>

            <div className="hero-rotating-line mt-6">
              <span className="hero-rotating-line__dot" />
              <span key={activeIndex} className="hero-rotating-line__text">
                {content.rotatingLines[activeIndex]}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`/${locale}#work`} className="primary-button">
                {content.primaryCta}
              </a>

              <a href={`/${locale}#contact`} className="secondary-button">
                {content.secondaryCta}
              </a>
            </div>
          </div>

          <div className="hero-visual-wrap">
            <div className="hero-visual__frame">
              <AIField />
              <div className="hero-visual__overlay" />

              <div className="hero-visual__meta">
                <div className="hero-visual__pill">
                  <span className="hero-visual__label-dot" />
                  <span>signal field</span>
                </div>

                <div className="hero-visual__mini-grid">
                  <div className="hero-visual__mini-card">
                    <span className="hero-visual__mini-label">focus</span>
                    <span className="hero-visual__mini-value">AI · Product</span>
                  </div>

                  <div className="hero-visual__mini-card">
                    <span className="hero-visual__mini-label">stage</span>
                    <span className="hero-visual__mini-value">early career</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}