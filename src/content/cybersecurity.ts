import type { Locale } from "@/types/locale";

interface CybersecurityContent {
  sectionNumber: string;
  heading: string;
  intro: string;
  handsOnLabel: string;
  handsOnDescription: string;
  completedLabel: string;
  currentLabel: string;
  lastUpdatedLabel: string;
  evidenceLabel: string;
  readJournal: string;
  philosophy: string;
}

export const cybersecurityContent: Record<Locale, CybersecurityContent> = {
  en: {
    sectionNumber: "03 / Cybersecurity",
    heading: "Learning Security by Doing It",
    intro: "Documented hands-on work that shows how I approach Linux, command-line problem solving and security fundamentals.",
    handsOnLabel: "Hands-On Security",
    handsOnDescription: "Practical work I can point to, document and explain.",
    completedLabel: "Completed through",
    currentLabel: "Current level",
    lastUpdatedLabel: "Updated",
    evidenceLabel: "Evidence",
    readJournal: "Read the Journal",
    philosophy: "I don’t just want to know what works. I want to understand why it works.",
  },
  fr: {
    sectionNumber: "03 / Cybersécurité",
    heading: "Apprendre la sécurité par la pratique",
    intro: "Des travaux pratiques documentés qui montrent mon approche de Linux, de la résolution de problèmes en ligne de commande et des fondamentaux de la sécurité.",
    handsOnLabel: "Sécurité pratique",
    handsOnDescription: "Des travaux concrets que je peux montrer, documenter et expliquer.",
    completedLabel: "Terminé jusqu’au niveau",
    currentLabel: "Niveau actuel",
    lastUpdatedLabel: "Mis à jour",
    evidenceLabel: "Preuves",
    readJournal: "Lire le journal",
    philosophy: "Je ne veux pas seulement savoir ce qui fonctionne. Je veux comprendre pourquoi cela fonctionne.",
  },
};
