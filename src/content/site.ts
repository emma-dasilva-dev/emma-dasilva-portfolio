import type { Locale } from "@/types/portfolio";

export const NAVIGATION = [
  { id: "projects", en: "Projects", fr: "Projets" },
  { id: "about", en: "About", fr: "À propos" },
  { id: "stack", en: "Stack", fr: "Compétences" },
  { id: "journey", en: "Journey", fr: "Parcours" },
  { id: "contact", en: "Contact", fr: "Contact" },
] as const;

export const COPY = {
  en: {
    meta: {
      title: "Emma Da Silva | Junior Full Stack Developer",
      description:
        "Portfolio of Emma Da Silva, a junior full stack developer based in Cotonou, Benin.",
    },
    header: {
      menu: "Menu",
      close: "Close",
      navigation: "Primary navigation",
    },
    hero: {
      eyebrow: "I am",
      name: "Emma",
      role: "Junior Full Stack Developer",
      intro:
        "I build practical digital products while learning how software works from interface to infrastructure.",
      explore: "Explore selected work",
      location: "Cotonou, Benin",
    },
    projects: {
      eyebrow: "Selected work",
      title: "Projects",
      intro:
        "A compact selection of projects that reflect how I learn, solve problems, and build.",
      live: "Live",
      development: "In development",
      view: "View project",
      items: [
        {
          number: "01",
          title: "STAY",
          category: "Full-stack hospitality platform",
          description:
            "A bilingual reservation and hotel management platform built during my internship at CASHLESS.",
          detail:
            "Authentication, user roles, reservations, employee access, database structure, and administration.",
          technologies: ["React", "Node.js", "Express", "MySQL"],
          status: "live",
          href: "https://staybj.vercel.app",
        },
        {
          number: "02",
          title: "Bandit Redline Journal",
          category: "Cybersecurity learning journal",
          description:
            "A structured journal documenting my progress through OverTheWire Bandit.",
          detail:
            "Linux commands, reasoning, mistakes, and security concepts explained as I learn them.",
          technologies: ["Linux", "Bash", "SSH", "Git"],
          status: "live",
          href:
            "https://emma-dasilva-dev.github.io/bandit-redline-journal/",
        },
        {
          number: "03",
          title: "Custom Unix Shell",
          category: "Systems programming",
          description:
            "An in-progress shell written in C to understand processes, commands, paths, and terminal behaviour.",
          detail:
            "Built as a deeper study of low-level programming and Unix concepts.",
          technologies: ["C", "Linux", "GCC", "Make"],
          status: "development",
          href: null,
        },
      ],
    },
    about: {
      eyebrow: "About",
      title: "Learning deeply. Building carefully.",
      paragraphs: [
        "I am Emma, a self-driven developer interested in how digital systems are designed, connected, and improved.",
        "My path started with web development and expanded into C, Linux, cybersecurity, and full-stack engineering.",
        "I completed training in web development and cybersecurity, then built STAY during my internship at CASHLESS.",
        "I am continuing to strengthen my skills in systems programming, software architecture, security, and modern web development.",
      ],
      portraitAlt: "Portrait of Emma Da Silva",
    },
    stack: {
      eyebrow: "Technical stack",
      title: "Tools I use",
      groups: [
        {
          title: "Frontend",
          items: [
            "Next.js",
            "React",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
          ],
        },
        { title: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
        { title: "Database", items: ["MySQL"] },
        {
          title: "Systems",
          items: ["C", "Linux", "Ubuntu", "Bash", "GCC", "Make"],
        },
        {
          title: "Workflow",
          items: ["Git", "GitHub", "Vercel", "Railway"],
        },
      ],
    },
    journey: {
      eyebrow: "Journey",
      title: "Curiosity became a practice.",
      intro:
        "Each stage has moved me from simply using technology toward understanding how it works.",
      steps: [
        {
          number: "01",
          title: "Curiosity",
          text:
            "I began by asking how websites, applications, and digital systems were created.",
        },
        {
          number: "02",
          title: "Web foundations",
          text:
            "I learned HTML, CSS, and JavaScript, then started building complete interfaces.",
        },
        {
          number: "03",
          title: "Systems and security",
          text:
            "C, Linux, Bash, and cybersecurity introduced me to deeper technical foundations.",
        },
        {
          number: "04",
          title: "Internship and STAY",
          text:
            "At CASHLESS, I built a full-stack platform with authentication, roles, reservations, and administration.",
        },
        {
          number: "05",
          title: "Building deeper knowledge",
          text:
            "I am now improving my systems knowledge, architecture skills, and security awareness.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "What should exist that does not yet?",
      intro:
        "I am open to technical collaborations, thoughtful projects, and opportunities to keep learning.",
      email: "Email",
      subject: "Subject",
      message: "Message",
      submit: "Send message",
      submitting: "Sending…",
      success: "Your message was sent successfully.",
      error: "The message could not be sent. Please try again.",
      emailInvalid: "Enter a valid email address.",
      subjectInvalid: "The subject must contain 3 to 120 characters.",
      messageInvalid: "The message must contain 10 to 2,000 characters.",
    },
    footer: {
      statement: "Open to technical collaborations.",
      top: "Back to top",
    },
  },
  fr: {
    meta: {
      title: "Emma Da Silva | Développeuse Full Stack Junior",
      description:
        "Portfolio d’Emma Da Silva, développeuse full stack junior basée à Cotonou, au Bénin.",
    },
    header: {
      menu: "Menu",
      close: "Fermer",
      navigation: "Navigation principale",
    },
    hero: {
      eyebrow: "Je suis",
      name: "Emma",
      role: "Développeuse Full Stack Junior",
      intro:
        "Je conçois des produits numériques utiles tout en approfondissant ma compréhension du logiciel, de l’interface à l’infrastructure.",
      explore: "Découvrir mes projets",
      location: "Cotonou, Bénin",
    },
    projects: {
      eyebrow: "Projets sélectionnés",
      title: "Projets",
      intro:
        "Une sélection compacte de projets qui montre ma manière d’apprendre, de résoudre des problèmes et de construire.",
      live: "En ligne",
      development: "En développement",
      view: "Voir le projet",
      items: [
        {
          number: "01",
          title: "STAY",
          category: "Plateforme hôtelière full stack",
          description:
            "Une plateforme bilingue de réservation et de gestion hôtelière réalisée pendant mon stage chez CASHLESS.",
          detail:
            "Authentification, rôles utilisateurs, réservations, accès des employés, base de données et administration.",
          technologies: ["React", "Node.js", "Express", "MySQL"],
          status: "live",
          href: "https://staybj.vercel.app",
        },
        {
          number: "02",
          title: "Bandit Redline Journal",
          category: "Journal d’apprentissage en cybersécurité",
          description:
            "Un journal structuré qui présente ma progression sur OverTheWire Bandit.",
          detail:
            "Commandes Linux, raisonnement, erreurs et notions de sécurité expliqués au fil de mon apprentissage.",
          technologies: ["Linux", "Bash", "SSH", "Git"],
          status: "live",
          href:
            "https://emma-dasilva-dev.github.io/bandit-redline-journal/",
        },
        {
          number: "03",
          title: "Custom Unix Shell",
          category: "Programmation système",
          description:
            "Un shell en cours de développement, écrit en C pour comprendre les processus, les commandes, les chemins et le fonctionnement d’un terminal.",
          detail:
            "Un projet conçu pour approfondir la programmation bas niveau et les concepts Unix.",
          technologies: ["C", "Linux", "GCC", "Make"],
          status: "development",
          href: null,
        },
      ],
    },
    about: {
      eyebrow: "À propos",
      title: "Apprendre en profondeur. Construire avec soin.",
      paragraphs: [
        "Je suis Emma, une développeuse autonome qui s’intéresse à la manière dont les systèmes numériques sont conçus, connectés et améliorés.",
        "Mon parcours a commencé avec le développement web, puis s’est élargi vers le C, Linux, la cybersécurité et le développement full stack.",
        "J’ai terminé une formation en développement web et en cybersécurité, puis j’ai construit STAY pendant mon stage chez CASHLESS.",
        "Je continue aujourd’hui à renforcer mes compétences en programmation système, en architecture logicielle, en sécurité et en développement web moderne.",
      ],
      portraitAlt: "Portrait d’Emma Da Silva",
    },
    stack: {
      eyebrow: "Compétences techniques",
      title: "Outils que j’utilise",
      groups: [
        {
          title: "Frontend",
          items: [
            "Next.js",
            "React",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
          ],
        },
        { title: "Backend", items: ["Node.js", "Express.js", "API REST"] },
        { title: "Base de données", items: ["MySQL"] },
        {
          title: "Systèmes",
          items: ["C", "Linux", "Ubuntu", "Bash", "GCC", "Make"],
        },
        {
          title: "Outils",
          items: ["Git", "GitHub", "Vercel", "Railway"],
        },
      ],
    },
    journey: {
      eyebrow: "Parcours",
      title: "La curiosité est devenue une pratique.",
      intro:
        "Chaque étape m’a permis de passer de l’utilisation de la technologie à une meilleure compréhension de son fonctionnement.",
      steps: [
        {
          number: "01",
          title: "Curiosité",
          text:
            "J’ai commencé par chercher à comprendre comment les sites, les applications et les systèmes numériques étaient créés.",
        },
        {
          number: "02",
          title: "Bases du web",
          text:
            "J’ai appris HTML, CSS et JavaScript, puis j’ai commencé à créer des interfaces complètes.",
        },
        {
          number: "03",
          title: "Systèmes et sécurité",
          text:
            "Le C, Linux, Bash et la cybersécurité m’ont fait découvrir des bases techniques plus profondes.",
        },
        {
          number: "04",
          title: "Stage et projet STAY",
          text:
            "Chez CASHLESS, j’ai construit une plateforme full stack avec authentification, rôles, réservations et administration.",
        },
        {
          number: "05",
          title: "Approfondir mes connaissances",
          text:
            "Je développe maintenant mes compétences en systèmes, en architecture et en sécurité.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Qu’est-ce qui devrait exister, mais n’existe pas encore ?",
      intro:
        "Je suis ouverte aux collaborations techniques, aux projets réfléchis et aux opportunités qui me permettent de continuer à apprendre.",
      email: "Adresse e-mail",
      subject: "Sujet",
      message: "Message",
      submit: "Envoyer le message",
      submitting: "Envoi en cours…",
      success: "Votre message a bien été envoyé.",
      error: "Le message n’a pas pu être envoyé. Veuillez réessayer.",
      emailInvalid: "Veuillez entrer une adresse e-mail valide.",
      subjectInvalid: "Le sujet doit contenir entre 3 et 120 caractères.",
      messageInvalid: "Le message doit contenir entre 10 et 2 000 caractères.",
    },
    footer: {
      statement: "Ouverte aux collaborations techniques.",
      top: "Retour en haut",
    },
  },
} as const satisfies Record<Locale, unknown>;
