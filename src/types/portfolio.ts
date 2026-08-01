export type Locale = "en" | "fr";

export type LocalizedText = Readonly<Record<Locale, string>>;

export type ProjectStatus = "live" | "development";

export interface NavigationItem {
  id: string;
  label: LocalizedText;
}

export interface ProjectLink {
  label: LocalizedText;
  href: string;
}

export interface Project {
  id: string;
  number: string;
  title: LocalizedText;
  category: LocalizedText;
  description: LocalizedText;
  context?: LocalizedText;
  technologies: readonly string[];
  status?: ProjectStatus;
  href?: string;
  action?: LocalizedText;
  link?: ProjectLink;
}

export type PortfolioProject = Project;

export interface JourneyStep {
  id: string;
  number: string;
  title: LocalizedText;
  description: LocalizedText;
}

export type JourneyItem = JourneyStep;

export interface ToolGroup {
  id: string;
  title: LocalizedText;
  technologies: readonly string[];
}

export interface ContactFormPayload {
  email: string;
  subject: string;
  message: string;
  company?: string;
  startedAt: number;
}

export type ContactFieldErrors = Partial<
  Record<"email" | "subject" | "message" | "form", string>
>;