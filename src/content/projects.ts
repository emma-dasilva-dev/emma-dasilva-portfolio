import type {
  Project,
} from "@/types/portfolio";

export const PROJECTS: Project[] = [
  {
    id: "stay",

    title: "STAY",

    year: "2026",

    image:
      "/images/projects/stay/stay-cover.jpg",

    liveUrl:
      "https://staybj.vercel.app",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
    ],

    type: {
      en:
        "Full-stack hospitality platform",

      fr:
        "Plateforme hôtelière full-stack",
    },

    role: {
      en:
        "Product design & full-stack development",

      fr:
        "Conception produit & développement full-stack",
    },

    summary: {
      en:
        "A full-stack platform for discovering and managing premium stays, built from the public booking experience through authentication, reservations and internal operations.",

      fr:
        "Une plateforme full-stack dédiée à la découverte et à la gestion d’hébergements premium, construite de l’expérience publique de réservation jusqu’à l’authentification, aux réservations et aux opérations internes.",
    },

    imageAlt: {
      en:
        "Preview of the STAY hospitality platform",

      fr:
        "Aperçu de la plateforme hôtelière STAY",
    },
  },

  {
    id: "byterush",

    title: "ByteRush",

    year: "2026",

    image:
      "/images/projects/byterush/byterush-cover.jpg",

    liveUrl:
      "https://azatoys.com",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    type: {
      en:
        "Interactive coding game",

      fr:
        "Jeu interactif d’apprentissage du code",
    },

    role: {
      en:
        "Game concept, interface & front-end development",

      fr:
        "Concept du jeu, interface & développement front-end",
    },

    summary: {
      en:
        "An interactive coding game designed to help beginners learn HTML, CSS and JavaScript through challenges that turn programming concepts into play.",

      fr:
        "Un jeu interactif conçu pour aider les débutants à apprendre HTML, CSS et JavaScript grâce à des défis qui transforment les concepts de programmation en expérience ludique.",
    },

    imageAlt: {
      en:
        "Preview of the ByteRush coding game",

      fr:
        "Aperçu du jeu de programmation ByteRush",
    },
  },

  {
    id: "bandit",

    title:
      "Bandit Redline Journal",

    year: "2026",

    image:
      "/images/projects/bandit/bandit-cover.jpg",

    liveUrl:
      "https://emma-dasilva-dev.github.io/bandit-redline-journal/",

    technologies: [
      "Linux",
      "Bash",
      "Cybersecurity",
      "HTML",
      "CSS",
    ],

    type: {
      en:
        "Cybersecurity learning journal",

      fr:
        "Journal d’apprentissage en cybersécurité",
    },

    role: {
      en:
        "Learning system, interface & documentation",

      fr:
        "Système d’apprentissage, interface & documentation",
    },

    summary: {
      en:
        "A visual learning journal documenting my progress through OverTheWire Bandit, turning terminal commands, solutions and security concepts into a structured reference.",

      fr:
        "Un journal visuel documentant ma progression sur OverTheWire Bandit et transformant commandes terminal, solutions et concepts de sécurité en une référence structurée.",
    },

    imageAlt: {
      en:
        "Preview of the Bandit Redline Journal",

      fr:
        "Aperçu du Bandit Redline Journal",
    },
  },
];