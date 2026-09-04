import type { Locale, LocalizedText } from "@/types/locale";

export type SectionId =
  | "home"
  | "work"
  | "cybersecurity"
  | "experience"
  | "about"
  | "stack"
  | "contact";

export interface NavigationItem {
  id: SectionId;
  label: LocalizedText;
  href: `#${SectionId}`;
}

export interface ProjectImage {
  src: string;
  alt: LocalizedText;
  width: number;
  height: number;
}

export interface SEOContent {
  title: string;
  description: string;
}

export type LocalizedSEO = Record<Locale, SEOContent>;

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: LocalizedText;
  summary: LocalizedText;
  technologies: string[];
  status: "published";
  links: {
    live?: string;
    github?: string;
    journal?: string;
  };
  image?: ProjectImage;
  seo: LocalizedSEO;
}

export interface BanditProgress {
  completedThrough: number;
  currentLevel: number;
  lastUpdated: string;
}

export interface Experience {
  id: string;
  organization: string;
  role: LocalizedText;
  type: "independent-learning" | "training" | "internship";
  startDate: string;
  endDate?: string;
  location?: LocalizedText;
  description: LocalizedText;
  technologies: string[];
  externalUrl?: string;
}

export interface StackItem {
  name: string;
}

export interface StackGroup {
  id: string;
  title: LocalizedText;
  items: StackItem[];
}

export interface CybersecurityArea {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  category: "hands-on" | "studying";
}

export interface SocialLink {
  platform: "github" | "linkedin" | "instagram" | "email";
  label: string;
  href: string;
}
