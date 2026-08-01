import type { PortfolioProject } from "@/types/portfolio";

export const projects: readonly PortfolioProject[] = [
  {
    id: "stay",
    number: "01",
    title: {
      en: "STAY",
      fr: "STAY",
    },
    category: {
      en: "Full-stack hospitality platform",
      fr: "Plateforme hôtelière full-stack",
    },
    description: {
      en: "A bilingual hospitality and reservation management platform designed for premium hotels and resorts in Benin.",
      fr: "Une plateforme bilingue de gestion hôtelière et de réservations conçue pour des hôtels et resorts premium au Bénin.",
    },
    context: {
      en: "Built during my internship at CASHLESS. I worked on authentication, user roles, reservation management, employee access, database structure, and administration features.",
      fr: "Réalisé pendant mon stage chez CASHLESS. J’ai travaillé sur l’authentification, les rôles utilisateurs, la gestion des réservations, l’accès employé, la structure de la base de données et les fonctions d’administration.",
    },
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
      "Railway",
      "Vercel",
    ],
    status: "live",
    link: {
      label: {
        en: "Visit live project",
        fr: "Voir le projet",
      },
      href: "https://staybj.vercel.app",
    },
  },
  {
    id: "bandit-redline-journal",
    number: "02",
    title: {
      en: "Bandit Redline Journal",
      fr: "Journal Bandit Redline",
    },
    category: {
      en: "Cybersecurity learning journal",
      fr: "Journal d’apprentissage en cybersécurité",
    },
    description: {
      en: "A structured record of my progress through OverTheWire Bandit, documenting Linux commands, reasoning, mistakes, and security concepts.",
      fr: "Un suivi structuré de ma progression sur OverTheWire Bandit, avec les commandes Linux, le raisonnement, les erreurs et les notions de sécurité.",
    },
    technologies: ["Linux", "Bash", "SSH", "Git", "GitHub Pages"],
    status: "live",
    link: {
      label: {
        en: "Read the journal",
        fr: "Lire le journal",
      },
      href: "https://emma-dasilva-dev.github.io/bandit-redline-journal/",
    },
  },
  {
    id: "custom-unix-shell",
    number: "03",
    title: {
      en: "Custom Unix Shell",
      fr: "Shell Unix personnalisé",
    },
    category: {
      en: "Systems programming",
      fr: "Programmation système",
    },
    description: {
      en: "An in-progress Unix shell written in C to deepen my understanding of processes, commands, paths, input handling, and low-level program behaviour.",
      fr: "Un shell Unix en cours de développement, écrit en C pour approfondir ma compréhension des processus, des commandes, des chemins, des entrées et du fonctionnement bas niveau.",
    },
    technologies: ["C", "Linux", "Bash", "GCC", "Make"],
    status: "development",
  },
];


