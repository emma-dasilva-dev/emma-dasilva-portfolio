export type NavigationItem = {
  id: "home" | "work" | "about" | "journey" | "stack" | "contact";
  number: string;
  label: string;
  path: string;
};

export type NavigationContent = {
  menu: string;
  close: string;
  ariaLabel: string;
  items: NavigationItem[];
};

export type HeroContent = {
  sectionLabel: string;
  terminalCommand: string;
  name: string;
  role: string;
  description: string;
  scroll: string;
};

export type WorkContent = {
  sectionLabel: string;
  heading: string;
  intro: string;
  roleLabel: string;
  stackLabel: string;
  statusLabel: string;
  yearLabel: string;
  viewCaseStudy: string;
};

export type AboutContent = {
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

export type JourneyItem = {
  date: string;
  title: string;
  subtitle?: string;
  description?: string;
  stack?: string[];
  kind?: "self" | "training" | "internship" | "education";
};

export type JourneyContent = {
  sectionLabel: string;
  heading: string;
  intro: string;
  items: JourneyItem[];
};

export type StackGroup = {
  label: string;
  technologies: string[];
};

export type StackContent = {
  sectionLabel: string;
  heading: string;
  description: string;
  groups: StackGroup[];
};

export type ContactContent = {
  sectionLabel: string;
  heading: string;
  lineOne: string;
  lineTwo: string;
  getInTouch: string;
  github: string;
  linkedin: string;
};

export type FooterContent = {
  github: string;
  linkedin: string;
  email: string;
  copyright: string;
};

export type HomeContent = {
  navigation: NavigationContent;
  hero: HeroContent;
  work: WorkContent;
  about: AboutContent;
  journey: JourneyContent;
  stack: StackContent;
  contact: ContactContent;
  footer: FooterContent;
};

export type ProjectSection = {
  label: string;
  title: string;
  body?: string;
  items?: string[];
  architecture?: string[];
};

export type ProjectCaseStudy = {
  slug: string;
  number: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  description: string;
  role?: string;
  stack?: string[];
  focus?: string;
  progress?: string;
  languages?: string;
  status: string;
  year: string;
  liveLabel: string;
  liveUrl: string;
  sourceLabel: string;
  sourceUrl: string;
  sections: ProjectSection[];
};
