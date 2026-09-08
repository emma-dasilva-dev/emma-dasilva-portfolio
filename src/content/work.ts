import type { Locale } from "@/types/locale";

interface WorkContent {
  heading: string;
  intro: string;
  liveSite: string;
  github: string;
  journal: string;
}

export const workContent: Record<Locale, WorkContent> = {
  en: {
    heading: "Projects",
    intro: "Finished work I can show, explain and stand behind.",
    liveSite: "Live Site",
    github: "GitHub",
    journal: "Read the Journal",
  },
  fr: {
    heading: "Projets",
    intro: "Des travaux finalisés que je peux montrer, expliquer et défendre.",
    liveSite: "Voir le site",
    github: "GitHub",
    journal: "Lire le journal",
  },
};
