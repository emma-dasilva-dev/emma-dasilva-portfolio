import type { Locale } from "@/types/locale";

interface WorkContent {
  sectionNumber: string;
  heading: string;
  intro: string;
  challengeLabel: string;
  stayChallenge: string;
  liveSite: string;
  github: string;
  viewCaseStudy: string;
  architectureLabel: string;
  rolesLabel: string;
}

export const workContent: Record<Locale, WorkContent> = {
  en: {
    sectionNumber: "02 / Software Projects",
    heading: "Selected Software Projects",
    intro: "Finished software I’ve designed, built and can explain.",
    challengeLabel: "What challenged me most",
    stayChallenge:
      "Connecting the frontend, API, authentication, permissions and database while keeping user roles and reservation data consistent.",
    liveSite: "Live Site",
    github: "GitHub",
    viewCaseStudy: "View Case Study",
    architectureLabel: "System flow",
    rolesLabel: "Roles",
  },
  fr: {
    sectionNumber: "02 / Projets logiciels",
    heading: "Projets logiciels sélectionnés",
    intro: "Des logiciels finalisés que j’ai conçus, développés et que je peux expliquer.",
    challengeLabel: "Mon principal défi",
    stayChallenge:
      "Relier le frontend, l’API, l’authentification, les permissions et la base de données tout en gardant les rôles et les réservations cohérents.",
    liveSite: "Voir le site",
    github: "GitHub",
    viewCaseStudy: "Voir l’étude de cas",
    architectureLabel: "Flux système",
    rolesLabel: "Rôles",
  },
};
