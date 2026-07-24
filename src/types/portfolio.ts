export type Locale = "en" | "fr";

export type LocalizedText = Record<Locale, string>;

export type SectionId =
  | "home"
  | "work"
  | "thinking"
  | "stories"
  | "contact";

export interface NavigationItem {
  id: Exclude<SectionId, "home">;
  label: LocalizedText;
}

export interface ThreadMilestone {
  id: SectionId;
  label: LocalizedText;
}

export interface Project {
  id: string;
  title: string;
  year: string;
  image: string;
  liveUrl: string;
  technologies: string[];
  type: LocalizedText;
  role: LocalizedText;
  summary: LocalizedText;
  imageAlt: LocalizedText;
}

export interface Principle {
  id: string;
  number: string;
  title: LocalizedText;
  body: LocalizedText;
}

export interface Story {
  id: string;
  number: string;
  eyebrow: LocalizedText;
  title: LocalizedText;
  body: LocalizedText;
}

export interface ContactLink {
  id: string;
  href: string;
  external: boolean;
  label: LocalizedText;
}