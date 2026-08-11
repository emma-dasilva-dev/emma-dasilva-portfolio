import type { HomeContent } from "../../types/content";

export const homeContent = {
  navigation: {
    menu: "Menu",
    close: "Fermer",
    ariaLabel: "Navigation principale",
    items: [
      { id: "home", number: "01", label: "Accueil", path: "/accueil" },
      { id: "work", number: "02", label: "Projets", path: "/projets" },
      { id: "about", number: "03", label: "À propos", path: "/a-propos" },
      { id: "journey", number: "04", label: "Parcours", path: "/parcours" },
      { id: "stack", number: "05", label: "Stack", path: "/stack" },
      { id: "contact", number: "06", label: "Contact", path: "/contact" },
    ],
  },
  hero: {
    sectionLabel: "01 / ACCUEIL",
    terminalCommand: "whoami",
    name: "Emma Da Silva",
    role: "Développeuse junior",
    description:
      "La curiosité m’a menée vers la tech, mais c’est construire qui m’y fait rester.",
    scroll: "Défiler",
  },
  work: {
    sectionLabel: "02 / PROJETS SÉLECTIONNÉS",
    heading: "Projets sélectionnés",
    intro:
      "Deux projets qui montrent deux facettes différentes de ma façon d’apprendre et de construire.",
    viewCaseStudy: "Voir l’étude de cas",
    roleLabel: "Rôle",
    stackLabel: "Stack",
    statusLabel: "Statut",
    yearLabel: "Année",
  },
  about: {
    sectionLabel: "03 / À PROPOS",
    heading: "À propos de moi",
    paragraphs: [
      "Je suis Emma, développeuse junior, et je cherche à comprendre non seulement comment construire un logiciel, mais aussi comment fonctionnent les systèmes qui se trouvent derrière.",
      "J’apprends en construisant, en déboguant et en documentant ce que je découvre, tout en renforçant mes bases en ingénierie logicielle, Linux, C et cybersécurité.",
    ],
    currentlyLabel: "Actuellement",
    currently: ["Ingénierie logicielle", "Linux", "C", "Cybersécurité"],
    basedLabel: "Basée",
    based: "Bénin",
    languagesLabel: "Langues",
    languages: "Anglais / Français",
    portraitAlt: "Portrait d’Emma Da Silva",
  },
  journey: {
    sectionLabel: "04 / PARCOURS",
    heading: "Parcours",
    intro:
      "Un aperçu concis des expériences formelles et de l’apprentissage autonome qui façonnent mon évolution.",
    items: [
      {
        date: "2025",
        title: "Baccalauréat général",
        kind: "formal",
      },
      {
        date: "DEPUIS 2025",
        title: "Apprentissage autonome",
        subtitle: "Apprentissage technique indépendant",
        description:
          "Je construis mes bases techniques de manière autonome en parallèle de ma formation et de mon expérience professionnelle.",
        stack: [
          "Linux",
          "C",
          "Git / GitHub",
          "CLI",
          "Débogage",
          "Fondamentaux de cybersécurité",
        ],
        kind: "self",
      },
      {
        date: "FÉV — MAI 2026",
        title: "CJEPE",
        subtitle: "Formation en développement web",
        stack: ["HTML", "CSS", "JavaScript", "Initiation au C"],
        kind: "formal",
      },
      {
        date: "JUIL 2026 — AUJOURD’HUI",
        title: "CASHLESS",
        subtitle: "Stage en développement full-stack",
        description:
          "Développement d’applications, intégration frontend/backend, authentification, gestion des rôles, bases de données et méthodes de travail professionnelles.",
        kind: "formal",
      },
    ],
  },
  stack: {
    sectionLabel: "05 / STACK",
    heading: "Outils que j’utilise",
    description:
      "Technologies avec lesquelles j’ai travaillé pour construire, déboguer et déployer mes projets.",
    groups: [
      {
        label: "Frontend",
        technologies: [
          "React",
          "Vite",
          "TypeScript",
          "JavaScript",
          "HTML",
          "CSS",
          "CSS Modules",
          "Tailwind CSS",
        ],
      },
      {
        label: "Backend",
        technologies: ["Node.js", "Express.js"],
      },
      {
        label: "Base de données",
        technologies: ["MySQL"],
      },
      {
        label: "Programmation & Systèmes",
        technologies: ["C", "Linux"],
      },
      {
        label: "Outils & Déploiement",
        technologies: ["Git", "GitHub", "VS Code", "Vercel", "Railway"],
      },
    ],
  },
  contact: {
    sectionLabel: "06 / CONTACT",
    heading: "Restons en contact.",
    lineOne:
      "Un projet, une opportunité, ou simplement envie de parler tech ?",
    lineTwo:
      "Je suis toujours intéressée par les idées qui ont du sens, les collaborations réfléchies et les conversations qui mènent quelque part.",
    getInTouch: "Me contacter",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  footer: {
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
    copyright: "© 2026 Emma Da Silva",
  },
} satisfies HomeContent;
