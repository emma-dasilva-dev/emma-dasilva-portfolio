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
    intro: "Hands-on technical work that documents how I learn, investigate and solve problems.",
    liveSite: "Live Site",
    github: "GitHub",
    journal: "Read the Journal",
  },
  fr: {
    heading: "Projets",
    intro: "Des travaux techniques concrets qui montrent comment j’apprends, j’analyse et je résous des problèmes.",
    liveSite: "Voir le site",
    github: "GitHub",
    journal: "Lire le journal",
  },
};
