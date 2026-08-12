export type NavigationContent = {
  menu: string;
  close: string;
  home: string;
  work: string;
  about: string;
  journey: string;
  stack: string;
  contact: string;
};

export type HeroContent = {
  sectionLabel: string;
  terminalCommand: string;
  name: string;
  role: string;
  description: string;
  scrollLabel: string;
};

export type HomeContent = {
  navigation: NavigationContent;
  hero: HeroContent;
};