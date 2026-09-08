import type { Locale } from "@/types/locale";

interface SecurityItem {
  title: string;
  description: Record<Locale, string>;
  evidence?: string[];
}

interface CybersecurityContent {
  sectionNumber: string;
  heading: string;
  intro: string;
  handsOnLabel: string;
  handsOnDescription: string;
  studyingLabel: string;
  studyingDescription: string;
  progressLabel: string;
  completedLabel: string;
  currentLabel: string;
  lastUpdatedLabel: string;
  evidenceLabel: string;
  readJournal: string;
  viewCaseStudy: string;
  philosophy: string;
}

export const cybersecurityContent: Record<Locale, CybersecurityContent> = {
  en: {
    sectionNumber: "03 / Cybersecurity",
    heading: "Learning Security by Doing It",
    intro: "Building security foundations through hands-on practice first, then extending them through structured study.",
    handsOnLabel: "Hands-On",
    handsOnDescription: "Practical work I can point to and explain.",
    studyingLabel: "Currently Studying",
    studyingDescription: "Areas I’m actively strengthening, not claiming as completed expertise.",
    progressLabel: "Bandit progress",
    completedLabel: "Completed through",
    currentLabel: "Current level",
    lastUpdatedLabel: "Updated",
    evidenceLabel: "Evidence",
    readJournal: "Read the Journal",
    viewCaseStudy: "View Case Study",
    philosophy: "I don’t just want to know what works. I want to understand why it works.",
  },
  fr: {
    sectionNumber: "03 / Cybersécurité",
    heading: "Apprendre la sécurité par la pratique",
    intro: "Je construis d’abord mes bases en sécurité par la pratique, puis je les approfondis avec un apprentissage structuré.",
    handsOnLabel: "Pratique",
    handsOnDescription: "Des travaux concrets que je peux montrer et expliquer.",
    studyingLabel: "En cours d’apprentissage",
    studyingDescription: "Des domaines que je renforce activement, sans les présenter comme une expertise acquise.",
    progressLabel: "Progression Bandit",
    completedLabel: "Terminé jusqu’au niveau",
    currentLabel: "Niveau actuel",
    lastUpdatedLabel: "Mis à jour",
    evidenceLabel: "Preuves",
    readJournal: "Lire le journal",
    viewCaseStudy: "Voir l’étude de cas",
    philosophy: "Je ne veux pas seulement savoir ce qui fonctionne. Je veux comprendre pourquoi cela fonctionne.",
  },
};

export const linuxPractice: SecurityItem = {
  title: "Linux Practice",
  description: {
    en: "Terminal workflows, filesystem navigation, permissions, local environments and system exploration outside guided challenges.",
    fr: "Pratique du terminal, navigation dans le système de fichiers, permissions, environnements locaux et exploration du système en dehors des défis guidés.",
  },
  evidence: ["Filesystem", "Permissions", "Bash", "SSH", "Local environments"],
};

export const studyingAreas: SecurityItem[] = [
  {
    title: "Linux Security",
    description: {
      en: "Understanding systems, files, permissions and the command line from a security perspective.",
      fr: "Comprendre les systèmes, fichiers, permissions et la ligne de commande sous l’angle de la sécurité.",
    },
  },
  {
    title: "Web Security",
    description: {
      en: "Learning to think beyond how applications work to how their assumptions and boundaries can fail.",
      fr: "Apprendre à dépasser le fonctionnement d’une application pour comprendre comment ses hypothèses et ses limites peuvent échouer.",
    },
  },
  {
    title: "Networking",
    description: {
      en: "Strengthening my understanding of IP addresses, DNS, HTTP, HTTPS and how systems communicate.",
      fr: "Renforcer ma compréhension des adresses IP, du DNS, de HTTP, HTTPS et de la communication entre systèmes.",
    },
  },
];
