export type Locale = "en" | "fr";

export type Theme = "light" | "dark";

export type LocalizedText = Record<
  Locale,
  string
>;

export type SectionId =
  | "home"
  | "work"
  | "process"
  | "contact";

export interface NavigationItem {
  id: Exclude<
    SectionId,
    "home"
  >;

  label: LocalizedText;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  year: string;
  liveUrl: string;
  category: LocalizedText;
  description: LocalizedText;
  technologies: string[];
}

export interface ProcessItem {
  id: string;
  number: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface ContactLink {
  id: string;
  href: string;
  external: boolean;
  label: LocalizedText;
  value: string;
}
