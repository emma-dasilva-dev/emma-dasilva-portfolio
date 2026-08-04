export type Locale = "en" | "fr";

export type LocalizedText = Readonly<Record<Locale, string>>;

export type SectionId =
  | "home"
  | "who"
  | "build"
  | "think"
  | "tools"
  | "contact";

export interface NavigationItem {
  id: Exclude<SectionId, "home">;
  label: LocalizedText;
}

export interface Project {
  id: string;
  title: string;
  category: LocalizedText;
  description: LocalizedText;
  context: LocalizedText;
  technologies: readonly string[];
  liveUrl?: string;
  action?: LocalizedText;
  status?: LocalizedText;
}

export interface Principle {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface ToolGroup {
  id: string;
  title: LocalizedText;
  technologies: readonly string[];
}

export interface ContactLink {
  id: string;
  href: string;
  external: boolean;
  label: LocalizedText;
  value: string;
}
