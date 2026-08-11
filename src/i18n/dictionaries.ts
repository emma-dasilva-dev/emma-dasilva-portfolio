import type { Locale } from "./config";
import type { HomeContent, ProjectCaseStudy } from "../types/content";

const homeDictionaries = {
  en: () =>
    import("../content/en/home").then((module) => module.homeContent),
  fr: () =>
    import("../content/fr/home").then((module) => module.homeContent),
} satisfies Record<Locale, () => Promise<HomeContent>>;

const projectDictionaries = {
  en: () =>
    import("../content/en/projects").then((module) => module.projects),
  fr: () =>
    import("../content/fr/projects").then((module) => module.projects),
} satisfies Record<Locale, () => Promise<ProjectCaseStudy[]>>;

export function getHomeContent(locale: Locale) {
  return homeDictionaries[locale]();
}

export function getProjects(locale: Locale) {
  return projectDictionaries[locale]();
}
