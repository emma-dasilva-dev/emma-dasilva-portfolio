import type { Locale } from "@/types/locale";

interface WorkContent {
  sectionNumber: string;
  heading: string;
  intro: string;
  liveSite: string;
  github: string;
  journal: string;
  progressLabel: string;
}

export const workContent: Record<Locale, WorkContent> = {
  en: {
    sectionNumber: "02 / Projects",
    heading: "Projects",
    intro: "Finished work I can show, explain and stand behind.",
    liveSite: "Live Site",
    github: "GitHub",
    journal: "Read the Journal",
    progressLabel: "Progress",
  },
  fr: {
    sectionNumber: "02 / Projets",
    heading: "Projets",
    intro: "Des travaux finalisés que je peux montrer, expliquer et défendre.",
    liveSite: "Voir le site",
    github: "GitHub",
    journal: "Lire le journal",
    progressLabel: "Progression",
  },
};
