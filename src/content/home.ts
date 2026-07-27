import type {
  ContactLink,
  Locale,
  NavigationItem,
  ProcessItem,
} from "@/types/portfolio";

interface HomeCopy {
  header: {
    menu: string;
    close: string;
    primaryNavigation: string;
    mobileNavigation: string;
  };

  hero: {
    role: string;
    description: string;
    focusLine: string;
    primaryAction: string;
    secondaryAction: string;
    portraitAlt: string;
  };

  work: {
    label: string;
    title: string;
    visitProject: string;
  };

  process: {
    label: string;
    title: string;
  };

  contact: {
    label: string;
    title: string;
    description: string;
  };

  footer: {
    message: string;
  };
}

export const HOME_COPY: Record<
  Locale,
  HomeCopy
> = {
  en: {
    header: {
      menu: "MENU",
      close: "CLOSE",
      primaryNavigation:
        "Primary navigation",
      mobileNavigation:
        "Mobile navigation",
    },

    hero: {
      role:
        "Full-Stack Developer & Software Engineer",

      description:
        "Passionate about the intersection of elegant design and scalable software engineering. As a full-stack developer, I bring digital ideas to life, crafting seamless user interfaces and building reliable back-end architecture to deliver complete, high-performance web applications.",

      focusLine:
        "Driven by curiosity. Focused on impact.",

      primaryAction:
        "SEE MY WORK",

      secondaryAction:
        "LET'S CONNECT",

      portraitAlt:
        "Portrait of Emma Da Silva",
    },

    work: {
      label: "WORK",
      title: "Selected work",
      visitProject:
        "VISIT PROJECT",
    },

    process: {
      label: "PROCESS",
      title: "How I work",
    },

    contact: {
      label: "CONTACT",

      title:
        "Have something worth building?",

      description:
        "Open to internships, collaborations and thoughtful technical opportunities.",
    },

    footer: {
      message:
        "Built with intention. Refined with care.",
    },
  },

  fr: {
    header: {
      menu: "MENU",
      close: "FERMER",
      primaryNavigation:
        "Navigation principale",
      mobileNavigation:
        "Navigation mobile",
    },

    hero: {
      role:
        "Développeuse Full-Stack & Ingénieure Logiciel",

      description:
        "Passionnée par la rencontre entre le design soigné et l’ingénierie logicielle évolutive, je conçois des interfaces fluides et des systèmes back-end fiables pour créer des applications web complètes et performantes.",

      focusLine:
        "Guidée par la curiosité. Concentrée sur l’impact.",

      primaryAction:
        "VOIR MES PROJETS",

      secondaryAction:
        "ME CONTACTER",

      portraitAlt:
        "Portrait d’Emma Da Silva",
    },

    work: {
      label: "PROJETS",
      title:
        "Projets sélectionnés",
      visitProject:
        "VISITER LE PROJET",
    },

    process: {
      label: "PROCESSUS",
      title:
        "Ma façon de travailler",
    },

    contact: {
      label: "CONTACT",

      title:
        "Un projet qui mérite d’être construit ?",

      description:
        "Ouverte aux stages, collaborations et opportunités techniques pertinentes.",
    },

    footer: {
      message:
        "Conçu avec intention. Affiné avec soin.",
    },
  },
};

export const NAV_ITEMS: NavigationItem[] =
  [
    {
      id: "work",

      label: {
        en: "WORK",
        fr: "PROJETS",
      },
    },

    {
      id: "process",

      label: {
        en: "PROCESS",
        fr: "PROCESSUS",
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

export const PROCESS_ITEMS: ProcessItem[] =
  [
    {
      id: "purpose",

      number: "01",

      title: {
        en:
          "Build with purpose",

        fr:
          "Construire avec intention",
      },

      description: {
        en:
          "Every decision should improve clarity, usability or identity.",

        fr:
          "Chaque décision doit améliorer la clarté, l’utilisabilité ou l’identité.",
      },
    },

    {
      id: "details",

      number: "02",

      title: {
        en:
          "Refine the details",

        fr:
          "Soigner les détails",
      },

      description: {
        en:
          "Spacing, responsiveness and interaction quality are part of the product.",

        fr:
          "Les espacements, la responsivité et les interactions font partie du produit.",
      },
    },

    {
      id: "testing",

      number: "03",

      title: {
        en:
          "Test beyond one screen",

        fr:
          "Tester au-delà d’un seul écran",
      },

      description: {
        en:
          "The experience must remain reliable across devices and real usage.",

        fr:
          "L’expérience doit rester fiable sur différents appareils et usages.",
      },
    },
  ];

export const CONTACT_LINKS: ContactLink[] =
  [
    {
      id: "email",

      href:
        "mailto:emma.dasilva.dev@gmail.com",

      external: false,

      label: {
        en: "EMAIL",
        fr: "EMAIL",
      },

      value:
        "emma.dasilva.dev@gmail.com",
    },

    {
      id: "github",

      href:
        "https://github.com/emma-dasilva-dev",

      external: true,

      label: {
        en: "GITHUB",
        fr: "GITHUB",
      },

      value:
        "emma-dasilva-dev",
    },

    {
      id: "linkedin",

      href:
        "https://www.linkedin.com/in/emmadasilvadev/",

      external: true,

      label: {
        en: "LINKEDIN",
        fr: "LINKEDIN",
      },

      value:
        "emmadasilvadev",
    },
  ];
