export type Dictionary = {
  nav: {
    home: string;
    work: string;
    about: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    rotatingLines: string[];
    primaryCta: string;
    secondaryCta: string;
  };
  introStrip: {
    items: string[];
  };
  work: {
    eyebrow: string;
    title: string;
    description: string;
    projects: {
      title: string;
      category: string;
      summary: string;
      details: string[];
      outcome: string;
    }[];
  };
  learningSignals: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      id: string;
      label: string;
      value: string;
      text: string;
    }[];
  };
  attentionMap: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      id: string;
      label: string;
      text: string;
      x: string;
      y: string;
    }[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    stats: {
      label: string;
      value: string;
    }[];
  };
  learning: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      title: string;
      text: string;
    }[];
  };
  exploring: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      title: string;
      text: string;
    }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    emailText: string;
    linkedinText: string;
    instagramText: string;
  };
  footer: {
    smallLine: string;
  };
};