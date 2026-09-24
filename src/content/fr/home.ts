import type { HomeContent } from "../../types/content";

export const homeContent = {
  navigation: {
    menu: "Menu",
    close: "Fermer",
    ariaLabel: "Navigation du portfolio",
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
    sectionLabel: "02 / PROJETS",
    heading: "Projets sélectionnés",
    intro:
      "Des projets qui montrent ma façon d’apprendre, de construire, de documenter et de résoudre des problèmes entre développement logiciel et cybersécurité.",
    roleLabel: "Rôle",
    stackLabel: "Stack",
    statusLabel: "Statut",
    yearLabel: "Année",
    viewCaseStudy: "Voir l’étude de cas",
  },

  about: {
    sectionLabel: "03 / À PROPOS",
    heading: "Je construis pour comprendre.",
    paragraphs: [
      "Je me suis intéressée à la tech parce que je voulais comprendre ce qui se passait derrière l’écran. J’ai continué à suivre les questions qui m’intriguaient et à apprendre un peu plus à chaque fois.",
      "Le C, Linux, le développement web et les bases de l’informatique m’ont appris à lire correctement les erreurs, à tester mes idées et à rester sur un problème jusqu’à le comprendre.",
      "C’est cette même curiosité qui m’a attirée vers la cybersécurité. Je veux comprendre non seulement comment les logiciels sont construits, mais aussi comment les systèmes échouent et comment les protéger.",
    ],
    currentlyLabel: "Actuellement",
    currently: ["Cybersécurité", "Développement logiciel", "Linux"],
    basedLabel: "Basée à",
    based: "Cotonou, Bénin",
    languagesLabel: "Langues",
    languages: "Français · Anglais",
    portraitAlt: "Portrait d’Emma Da Silva",
  },

  journey: {
    sectionLabel: "04 / PARCOURS",
    heading: "Apprendre en construisant.",
    intro:
      "Une courte chronologie des expériences qui ont façonné ma façon de travailler et ce que j’apprends aujourd’hui.",
    items: [
      {
        date: "2025 → 2026",
        title: "Apprentissage autonome",
        subtitle: "Développement logiciel",
        description:
          "Construction de bases en HTML, CSS, JavaScript, C, Linux, Bash, Git et développement web à travers des projets pratiques.",
        stack: ["C", "Linux", "JavaScript", "Git"],
        kind: "self",
      },
      {
        date: "2026",
        title: "CJEPE",
        subtitle: "Formation professionnelle",
        description:
          "Renforcement de mes compétences pratiques en développement grâce à une formation professionnelle structurée.",
        kind: "training",
      },
      {
        date: "2026",
        title: "Cashless Africa",
        subtitle: "Stage en développement logiciel",
        description:
          "Travail sur de vraies fonctionnalités produit, notamment des systèmes de rappels et des expériences frontend.",
        stack: ["Next.js", "TypeScript", "Node.js"],
        kind: "internship",
      },
      {
        date: "2026 → Aujourd’hui",
        title: "Université",
        subtitle: "Cybersécurité",
        description:
          "Études en cybersécurité tout en continuant à construire des logiciels et à approfondir ma compréhension des systèmes.",
        kind: "education",
      },
    ],
  },

  stack: {
    sectionLabel: "05 / STACK",
    heading: "Les outils que j’utilise",
    description:
      "Une stack pratique façonnée par ce que je construis et les systèmes que j’apprends à comprendre.",
    groups: [
      {
        label: "Frontend",
        technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
      },
      {
        label: "Backend & données",
        technologies: ["Node.js", "Express.js", "MySQL", "C"],
      },
      {
        label: "Systèmes & outils",
        technologies: ["Linux", "Bash", "Git"],
      },
    ],
  },

  contact: {
    sectionLabel: "06 / CONTACT",
    heading: "Envie de travailler ensemble ?",
    lineOne: "Je suis ouverte aux projets, collaborations et opportunités qui me permettent de continuer à apprendre en construisant.",
    lineTwo: "Le moyen le plus simple de me contacter est par e-mail.",
    getInTouch: "Me contacter",
    github: "GitHub",
    linkedin: "LinkedIn",
  },

  footer: {
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "E-mail",
    copyright: "©2026 Emma Da Silva",
  },
} satisfies HomeContent;
