import type { ProjectCaseStudy } from "../../types/content";

export const projects = [
  {
    slug: "stay",
    number: "01",
    eyebrow: "APPLICATION FULL-STACK",
    title: "STAY",
    shortTitle: "STAY",
    description:
      "Une plateforme de gestion hôtelière et de réservations pour les clients, les employés et les administrateurs.",
    role: "Développement full-stack",
    stack: ["React", "Vite", "Node.js", "Express.js", "MySQL"],
    status: "Déployé",
    year: "2026",
    liveLabel: "Site en ligne",
    liveUrl: "https://staybj.vercel.app",
    sourceLabel: "GitHub",
    sourceUrl: "https://github.com/emma-dasilva-dev/stay",
    sections: [
      {
        label: "01 / VUE D’ENSEMBLE",
        title: "Le projet",
        body:
          "STAY est une plateforme hôtelière full-stack structurée autour de la gestion des réservations et d’expériences distinctes pour les clients, les employés et les administrateurs.",
      },
      {
        label: "02 / CONSTRUCTION",
        title: "Fonctionnalités principales",
        items: [
          "Authentification",
          "Réservations",
          "Gestion des rôles",
          "Routes protégées",
          "Tableau de bord employé",
          "Fonctions d’administration",
        ],
      },
      {
        label: "03 / ARCHITECTURE",
        title: "Flux du système",
        architecture: ["React + Vite", "Node.js + Express.js", "MySQL"],
      },
      {
        label: "04 / DÉFI",
        title: "Gérer plusieurs niveaux d’accès",
        body:
          "Un défi important consistait à structurer l’authentification et les permissions afin de séparer les parcours client, employé et administrateur dans une seule application.",
      },
      {
        label: "05 / RÉSULTAT",
        title: "Ce que j’en retiens",
        body:
          "STAY m’a appris comment une interface, une API, l’authentification, les données relationnelles et des déploiements séparés fonctionnent ensemble dans un système complet.",
      },
    ],
  },
  {
    slug: "bandit-learning-journal",
    number: "02",
    eyebrow: "OVERTHEWIRE · BANDIT",
    title: "OverTheWire — Bandit Learning Journal",
    shortTitle: "Bandit Learning Journal",
    description:
      "Un journal bilingue d’apprentissage Linux et cybersécurité qui documente ma progression dans le wargame OverTheWire Bandit.",
    focus: "Linux · CLI · SSH · Fondamentaux de sécurité",
    progress: "Niveau 0 → Niveau 14",
    languages: "EN / FR",
    status: "Publié",
    year: "2026",
    liveLabel: "Journal en ligne",
    liveUrl: "https://emma-dasilva-dev.github.io/bandit-redline-journal/",
    sourceLabel: "GitHub",
    sourceUrl: "https://github.com/emma-dasilva-dev/bandit-redline-journal",
    sections: [
      {
        label: "01 / VUE D’ENSEMBLE",
        title: "Ce que le journal documente",
        body:
          "Le journal retrace mon apprentissage des niveaux 0 jusqu’au niveau 13 → 14, en mettant l’accent sur la compréhension des commandes plutôt que sur la publication de mots de passe ou de réponses directes.",
      },
      {
        label: "02 / APPROCHE",
        title: "Apprendre → comprendre → documenter",
        body:
          "Chaque entrée transforme un défi en une courte explication du raisonnement, des concepts de ligne de commande utilisés et de ce que j’ai appris.",
      },
      {
        label: "03 / CONCEPTS",
        title: "Axes techniques",
        items: [
          "Navigation Linux",
          "Permissions",
          "SSH",
          "Traitement de texte",
          "Pipes et redirections",
          "Encodage et compression",
          "Outils en ligne de commande",
        ],
      },
      {
        label: "04 / DOCUMENTATION",
        title: "Utile sans devenir une liste de réponses",
        body:
          "Le journal évite volontairement de publier de vrais mots de passe. L’objectif est d’expliquer le raisonnement à d’autres débutants tout en préservant l’intérêt du défi.",
      },
      {
        label: "05 / RÉSULTAT",
        title: "Ce que j’en retiens",
        body:
          "Le projet a renforcé ma maîtrise de Linux, mon raisonnement en ligne de commande, ma rédaction technique et ma capacité à expliquer clairement une même idée en anglais et en français.",
      },
    ],
  },
] satisfies ProjectCaseStudy[];
