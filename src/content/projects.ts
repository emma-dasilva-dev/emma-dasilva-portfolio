import type {
  Project,
} from "@/types/portfolio";

export const PROJECTS: Project[] =
  [
    {
      id: "stay",

      number: "01",

      title: "STAY",

      year: "2026",

      liveUrl:
        "https://staybj.vercel.app",

      category: {
        en:
          "Full-stack hospitality platform",

        fr:
          "Plateforme hôtelière full-stack",
      },

      description: {
        en:
          "Booking and operations across public and internal experiences.",

        fr:
          "Réservation et gestion des opérations à travers les expériences publiques et internes.",
      },

      technologies: [
        "React",
        "Node.js",
        "Express",
        "MySQL",
      ],
    },

    {
      id: "bandit",

      number: "02",

      title:
        "Bandit Redline Journal",

      year: "2026",

      liveUrl:
        "https://emma-dasilva-dev.github.io/bandit-redline-journal/",

      category: {
        en:
          "Cybersecurity learning project",

        fr:
          "Projet d’apprentissage en cybersécurité",
      },

      description: {
        en:
          "Linux commands, security concepts and OverTheWire solutions.",

        fr:
          "Commandes Linux, concepts de sécurité et solutions OverTheWire.",
      },

      technologies: [
        "Linux",
        "Bash",
        "HTML",
        "CSS",
      ],
    },
  ];
