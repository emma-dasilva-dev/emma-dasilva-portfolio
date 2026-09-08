import type { Locale } from "@/types/locale";

interface WorkContent {
  sectionNumber: string;
  heading: string;
  intro: string;
  challengeLabel: string;
  stayChallenge: string;
  banditChangeLabel: string;
  banditChange: string;
  liveSite: string;
  github: string;
  viewCaseStudy: string;
  readJournal: string;
  architectureLabel: string;
  rolesLabel: string;
  progressLabel: string;
  completedLabel: string;
  currentLabel: string;
  commandsLabel: string;
}

export const workContent: Record<Locale, WorkContent> = {
  en: {
    sectionNumber: "02 / Work",
    heading: "Selected Work",
    intro: "Projects that represent what I can actually build, solve and explain.",
    challengeLabel: "What challenged me most",
    stayChallenge:
      "Connecting the frontend, API, authentication, permissions and database while keeping user roles and reservation data consistent.",
    banditChangeLabel: "What it changed",
    banditChange:
      "Bandit taught me to inspect first, gather evidence, and let what I discover determine the next step.",
    liveSite: "Live Site",
    github: "GitHub",
    viewCaseStudy: "View Case Study",
    readJournal: "Read the Journal",
    architectureLabel: "System flow",
    rolesLabel: "Roles",
    progressLabel: "Progress",
    completedLabel: "Completed through",
    currentLabel: "Current",
    commandsLabel: "Practised",
  },
  fr: {
    sectionNumber: "02 / Projets",
    heading: "Projets sélectionnés",
    intro: "Des projets qui montrent ce que je sais réellement construire, résoudre et expliquer.",
    challengeLabel: "Mon principal défi",
    stayChallenge:
      "Relier le frontend, l’API, l’authentification, les permissions et la base de données tout en gardant les rôles et les réservations cohérents.",
    banditChangeLabel: "Ce que cela a changé",
    banditChange:
      "Bandit m’a appris à observer d’abord, rassembler des preuves et laisser ce que je découvre guider l’étape suivante.",
    liveSite: "Voir le site",
    github: "GitHub",
    viewCaseStudy: "Voir l’étude de cas",
    readJournal: "Lire le journal",
    architectureLabel: "Flux système",
    rolesLabel: "Rôles",
    progressLabel: "Progression",
    completedLabel: "Terminé jusqu’au niveau",
    currentLabel: "Niveau actuel",
    commandsLabel: "Pratiqué",
  },
};
