import type {
  JourneyStep,
  Locale,
  NavigationItem,
  Project,
  ToolGroup,
} from "@/types/portfolio";

import { EN } from "./en";
import { FR } from "./fr";

export const COPY = {
  en: EN,
  fr: FR,
} as const;

export const NAVIGATION: readonly NavigationItem[] = [
  {
    id: "projects",
    label: {
      en: "PROJECTS",
      fr: "PROJETS",
    },
  },
  {
    id: "about",
    label: {
      en: "ABOUT",
      fr: "À PROPOS",
    },
  },
  {
    id: "journey",
    label: {
      en: "JOURNEY",
      fr: "PARCOURS",
    },
  },
  {
    id: "tools",
    label: {
      en: "TOOLS",
      fr: "OUTILS",
    },
  },
  {
    id: "contact",
    label: {
      en: "CONTACT",
      fr: "CONTACT",
    },
  },
];

export const PROJECTS: readonly Project[] = [
  {
    id: "stay",
    number: "01",

    title: {
      en: "STAY",
      fr: "STAY",
    },

    category: {
      en: "FULL-STACK HOSPITALITY PLATFORM",
      fr: "PLATEFORME HÔTELIÈRE FULL STACK",
    },

    description: {
      en: "Built during my internship at CASHLESS, STAY is a hospitality and reservation management platform designed around real operational needs. It brings together authentication, role-based access, reservation workflows, employee management, database structure, and administrative tools within one complete system.",
      fr: "Réalisé pendant mon stage chez CASHLESS, STAY est une plateforme de gestion hôtelière et de réservations pensée pour répondre à des besoins concrets. Elle réunit l’authentification, la gestion des rôles, les réservations, les employés, la structure de la base de données et les outils d’administration au sein d’un même système.",
    },

    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MySQL",
    ],

    status: "live",

    href: "https://staybj.vercel.app",

    action: {
      en: "VIEW PROJECT",
      fr: "VOIR LE PROJET",
    },
  },

  {
    id: "bandit",
    number: "02",

    title: {
      en: "BANDIT REDLINE JOURNAL",
      fr: "BANDIT REDLINE JOURNAL",
    },

    category: {
      en: "CYBERSECURITY LEARNING PROJECT",
      fr: "PROJET D’APPRENTISSAGE EN CYBERSÉCURITÉ",
    },

    description: {
      en: "A structured journal documenting my progress through the OverTheWire Bandit challenges. It records the commands, reasoning, mistakes, and security concepts that have shaped my understanding of Linux, command-line environments, and practical problem-solving.",
      fr: "Un journal structuré retraçant ma progression sur les défis OverTheWire Bandit. Il rassemble les commandes, le raisonnement, les erreurs et les concepts de sécurité qui ont renforcé ma compréhension de Linux, des environnements en ligne de commande et de la résolution de problèmes.",
    },

    technologies: [
      "Linux",
      "Bash",
      "HTML",
      "CSS",
    ],

    status: "live",

    href:
      "https://emma-dasilva-dev.github.io/bandit-redline-journal/",

    action: {
      en: "VIEW PROJECT",
      fr: "VOIR LE PROJET",
    },
  },

  {
    id: "shell",
    number: "03",

    title: {
      en: "CUSTOM UNIX SHELL",
      fr: "CUSTOM UNIX SHELL",
    },

    category: {
      en: "SYSTEMS PROGRAMMING PROJECT",
      fr: "PROJET DE PROGRAMMATION SYSTÈME",
    },

    description: {
      en: "An ongoing project focused on building a minimalist Unix shell in C. Through it, I am exploring process management, system calls, command execution, input and output handling, and the foundations behind command-line environments.",
      fr: "Un projet en cours de développement consacré à la création d’un shell Unix minimaliste en C. Il me permet d’explorer la gestion des processus, les appels système, l’exécution des commandes, les entrées et sorties, ainsi que les bases des environnements en ligne de commande.",
    },

    technologies: [
      "C",
      "Linux",
      "Bash",
      "GCC",
      "Makefiles",
    ],

    status: "development",
  },
];

export const JOURNEY: readonly JourneyStep[] = [
  {
    id: "curiosity",
    number: "01",

    title: {
      en: "CURIOSITY",
      fr: "LA CURIOSITÉ",
    },

    description: {
      en: "Everything began with a simple question: How does this actually work? That question became the starting point for everything that followed.",
      fr: "Tout a commencé par une question simple : comment cela fonctionne-t-il réellement ? Cette question est devenue le point de départ de tout ce qui a suivi.",
    },
  },

  {
    id: "learning-to-build",
    number: "02",

    title: {
      en: "LEARNING TO BUILD",
      fr: "APPRENDRE À CONSTRUIRE",
    },

    description: {
      en: "Curiosity became consistency. I spent hours reading documentation, experimenting, fixing mistakes, and gradually learning how modern applications are structured from the interface to the backend.",
      fr: "La curiosité est devenue une pratique régulière. J’ai passé des heures à lire de la documentation, expérimenter, corriger mes erreurs et comprendre progressivement comment les applications modernes sont structurées, de l’interface au backend.",
    },
  },

  {
    id: "looking-deeper",
    number: "03",

    title: {
      en: "LOOKING DEEPER",
      fr: "ALLER PLUS LOIN",
    },

    description: {
      en: "As my understanding of web development grew, so did my interest in what happens underneath it. That naturally led me towards Linux, C programming, command-line environments, and cybersecurity.",
      fr: "À mesure que ma compréhension du développement web progressait, mon intérêt pour ce qui se passe en dessous grandissait aussi. Cela m’a naturellement menée vers Linux, le langage C, les environnements en ligne de commande et la cybersécurité.",
    },
  },

  {
    id: "real-world",
    number: "04",

    title: {
      en: "BUILDING FOR THE REAL WORLD",
      fr: "CONSTRUIRE POUR LE MONDE RÉEL",
    },

    description: {
      en: "My internship at CASHLESS gave me the opportunity to apply those foundations in a professional environment. Building STAY taught me that good software must do more than function. It must be reliable, maintainable, and designed around the people who use it.",
      fr: "Mon stage chez CASHLESS m’a permis d’appliquer ces bases dans un environnement professionnel. La réalisation de STAY m’a appris qu’un bon logiciel ne doit pas seulement fonctionner. Il doit être fiable, maintenable et pensé pour les personnes qui l’utilisent.",
    },
  },

  {
    id: "next",
    number: "05",

    title: {
      en: "WHAT COMES NEXT",
      fr: "LA SUITE",
    },

    description: {
      en: "I still consider myself at the beginning of this journey. There is far more to learn than I already know, and that is exactly what motivates me. Every project is another opportunity to question my assumptions, improve my judgment, and build with greater depth.",
      fr: "Je considère être encore au début de ce parcours. Il me reste bien plus à apprendre que ce que je sais déjà, et c’est précisément ce qui me motive. Chaque projet est une nouvelle occasion de remettre mes idées en question, d’affiner mon jugement et de construire avec davantage de profondeur.",
    },
  },
];

export const TOOLS: readonly ToolGroup[] = [
  {
    id: "frontend",

    title: {
      en: "FRONTEND",
      fr: "FRONTEND",
    },

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },

  {
    id: "backend",

    title: {
      en: "BACKEND",
      fr: "BACKEND",
    },

    technologies: [
      "Node.js",
      "Express.js",
    ],
  },

  {
    id: "database",

    title: {
      en: "DATABASE",
      fr: "BASE DE DONNÉES",
    },

    technologies: ["MySQL"],
  },

  {
    id: "systems",

    title: {
      en: "SYSTEMS",
      fr: "SYSTÈMES",
    },

    technologies: [
      "C",
      "Linux",
      "Bash",
      "GCC",
      "Makefiles",
    ],
  },
];

export const getCopy = (locale: Locale) => COPY[locale];