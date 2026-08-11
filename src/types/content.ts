export type NavigationItem = {
  id: "home" | "work" | "about" | "journey" | "stack" | "contact";
  number: string;
  label: string;
  path: string;
};

export type HomeContent = {
  navigation: {
    menu: string;
    close: string;
    ariaLabel: string;
    items: NavigationItem[];
  };
  hero: {
    sectionLabel: string;
    terminalCommand: string;
    name: string;
    role: string;
    description: string;
    scroll: string;
  };
  work: {
    sectionLabel: string;
    heading: string;
    intro: string;
    viewCaseStudy: string;
    roleLabel: string;
    stackLabel: string;
    statusLabel: string;
    yearLabel: string;
  };
  about: {
    sectionLabel: string;
    heading: string;
    paragraphs: string[];
    currentlyLabel: string;
    currently: string[];
    basedLabel: string;
    based: string;
    languagesLabel: string;
    languages: string;
    portraitAlt: string;
  };
  journey: {
    sectionLabel: string;
    heading: string;
    intro: string;
    items: {
      date: string;
      title: string;
      subtitle?: string;
      description?: string;
      stack?: string[];
      kind?: "formal" | "self";
    }[];
  };
  stack: {
    sectionLabel: string;
    heading: string;
    description: string;
    groups: {
      label: string;
      technologies: string[];
    }[];
  };
  contact: {
    sectionLabel: string;
    heading: string;
    lineOne: string;
    lineTwo: string;
    getInTouch: string;
    github: string;
    linkedin: string;
  };
  footer: {
    github: string;
    linkedin: string;
    email: string;
    copyright: string;
  };
};

export type ProjectCaseStudy = {
  slug: "stay" | "bandit-learning-journal";
  number: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  description: string;
  role?: string;
  focus?: string;
  stack?: string[];
  progress?: string;
  languages?: string;
  status: string;
  year: string;
  liveLabel: string;
  liveUrl: string;
  sourceLabel: string;
  sourceUrl: string;
  sections: {
    label: string;
    title: string;
    body?: string;
    items?: string[];
    architecture?: string[];
  }[];
};
