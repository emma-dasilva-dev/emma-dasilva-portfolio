import type {
  ContactLink,
  NavigationItem,
  Principle,
  ToolGroup,
} from "@/types/portfolio";

interface HomeCopy {
  header: {
    menu: string;
    close: string;
    primaryNavigation: string;
    mobileNavigation: string;
  };

  hero: {
    prefix: string;
    name: string;
    role: string;
  };

  who: {
    label: string;
    paragraphs: readonly string[];
    portraitAlt: string;
  };

  build: {
    label: string;
    introduction: string;
  };

  think: {
    label: string;
    introduction: string;
  };

  tools: {
    label: string;
    introduction: string;
  };

  contact: {
    label: string;
    introduction: string;
    findMe: string;
  };

  footer: {
    message: string;
  };
}

export const HOME_COPY: Record<"en" | "fr", HomeCopy> = {
  en: {
    header: {
      menu: "MENU",
      close: "CLOSE",
      primaryNavigation: "Primary navigation",
      mobileNavigation: "Mobile navigation",
    },

    hero: {
      prefix: "I AM",
      name: "EMMA",
      role: "JUNIOR FULL STACK DEVELOPER",
    },

    who: {
      label: "WHO I AM",
      paragraphs: [
        "I did not begin this journey with a fixed destination. What started as curiosity gradually became a genuine interest in understanding how software is designed, how applications communicate, and what happens beyond the interface.",
        "Today, I build full-stack web applications while continuing to explore systems programming, Linux, cybersecurity, and software engineering. Every project gives me another opportunity to refine my thinking, strengthen my technical foundations, and build with more intention than before.",
      ],
      portraitAlt: "Portrait of Emma Da Silva",
    },

    build: {
      label: "WHAT I BUILD",
      introduction:
        "A selection of projects that reflects how I approach software: with curiosity, attention to detail, and a desire to understand what happens beneath the surface.",
    },

    think: {
      label: "HOW I THINK",
      introduction:
        "The principles behind the way I learn, solve problems, and approach the systems I build.",
    },

    tools: {
      label: "TOOLS I BUILD WITH",
      introduction:
        "The languages, frameworks, and systems I currently use to turn ideas into working software.",
    },

    contact: {
      label: "LET'S BUILD SOMETHING",
      introduction:
        "If you are working on something meaningful, have an idea worth exploring, or simply want to connect, I would be glad to hear from you.",
      findMe: "FIND ME ON",
    },

    footer: {
      message: "OPEN TO TECHNICAL COLLABORATIONS.",
    },
  },

  fr: {
    header: {
      menu: "MENU",
      close: "FERMER",
      primaryNavigation: "Navigation principale",
      mobileNavigation: "Navigation mobile",
    },

    hero: {
      prefix: "JE SUIS",
      name: "EMMA",
      role: "DÉVELOPPEUSE FULL STACK JUNIOR",
    },

    who: {
      label: "QUI JE SUIS",
      paragraphs: [
        "Je n’ai pas commencé ce parcours avec une destination clairement définie. Ce qui n’était au départ qu’une curiosité est progressivement devenu un véritable intérêt pour la manière dont les logiciels sont conçus, dont les applications communiquent et pour ce qui se passe au-delà de l’interface.",
        "Aujourd’hui, je développe des applications web full stack tout en approfondissant la programmation système, Linux, la cybersécurité et le génie logiciel. Chaque projet me permet d’affiner ma réflexion, de renforcer mes bases techniques et de construire avec davantage d’intention.",
      ],
      portraitAlt: "Portrait d’Emma Da Silva",
    },

    build: {
      label: "CE QUE JE CONSTRUIS",
      introduction:
        "Une sélection de projets qui reflètent ma manière d’aborder le logiciel : avec curiosité, précision et l’envie de comprendre ce qui se passe sous la surface.",
    },

    think: {
      label: "MA FAÇON DE PENSER",
      introduction:
        "Les principes qui guident ma manière d’apprendre, de résoudre des problèmes et d’aborder les systèmes que je construis.",
    },

    tools: {
      label: "MES OUTILS DE CONSTRUCTION",
      introduction:
        "Les langages, frameworks et systèmes que j’utilise aujourd’hui pour transformer des idées en logiciels fonctionnels.",
    },

    contact: {
      label: "CONSTRUISONS QUELQUE CHOSE",
      introduction:
        "Si vous travaillez sur un projet porteur de sens, avez une idée à explorer ou souhaitez simplement échanger, je serai ravie de vous lire.",
      findMe: "ME RETROUVER SUR",
    },

    footer: {
      message: "OUVERTE AUX COLLABORATIONS TECHNIQUES.",
    },
  },
};

export const NAV_ITEMS: readonly NavigationItem[] = [
  { id: "who", label: { en: "WHO", fr: "QUI" } },
  { id: "build", label: { en: "BUILD", fr: "PROJETS" } },
  { id: "think", label: { en: "THINK", fr: "PENSER" } },
  { id: "tools", label: { en: "TOOLS", fr: "OUTILS" } },
  { id: "contact", label: { en: "CONTACT", fr: "CONTACT" } },
];

export const PRINCIPLES: readonly Principle[] = [
  {
    id: "curiosity",
    title: { en: "CURIOSITY", fr: "CURIOSITÉ" },
    description: {
      en: "Everything begins with one question: how does this actually work? That question still drives the way I learn.",
      fr: "Tout commence par une question : comment cela fonctionne-t-il réellement ? Cette question guide encore ma manière d’apprendre.",
    },
  },
  {
    id: "building",
    title: { en: "LEARNING BY BUILDING", fr: "APPRENDRE EN CONSTRUISANT" },
    description: {
      en: "Clarity comes from practice. I learn by experimenting, correcting mistakes, and turning ideas into working systems.",
      fr: "La clarté vient de la pratique. J’apprends en expérimentant, en corrigeant mes erreurs et en transformant des idées en systèmes fonctionnels.",
    },
  },
  {
    id: "systems",
    title: { en: "UNDERSTANDING SYSTEMS", fr: "COMPRENDRE LES SYSTÈMES" },
    description: {
      en: "I do not want to stop at the interface. I want to understand the processes, data, and decisions underneath it.",
      fr: "Je ne veux pas m’arrêter à l’interface. Je veux comprendre les processus, les données et les décisions qui se trouvent en dessous.",
    },
  },
  {
    id: "reliability",
    title: { en: "BUILDING FOR REAL USE", fr: "CONSTRUIRE POUR UN USAGE RÉEL" },
    description: {
      en: "Software should be reliable, maintainable, and clear to the people who depend on it.",
      fr: "Un logiciel doit être fiable, maintenable et clair pour les personnes qui en dépendent.",
    },
  },
];

export const TOOL_GROUPS: readonly ToolGroup[] = [
  {
    id: "languages",
    title: { en: "LANGUAGES", fr: "LANGAGES" },
    technologies: ["C", "TypeScript", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    id: "frameworks",
    title: { en: "FRAMEWORKS", fr: "FRAMEWORKS" },
    technologies: ["React", "Next.js", "Node.js", "Express.js", "Vite"],
  },
  {
    id: "systems",
    title: { en: "SYSTEMS", fr: "SYSTÈMES" },
    technologies: ["Linux", "Bash", "GCC", "Makefiles", "Git"],
  },
  {
    id: "data",
    title: { en: "DATA", fr: "DONNÉES" },
    technologies: ["MySQL", "REST APIs", "JWT"],
  },
];

export const CONTACT_LINKS: readonly ContactLink[] = [
  {
    id: "email",
    href: "mailto:emma.dasilva.dev@gmail.com",
    external: false,
    label: { en: "EMAIL", fr: "E-MAIL" },
    value: "emma.dasilva.dev@gmail.com",
  },
  {
    id: "github",
    href: "https://github.com/emma-dasilva-dev",
    external: true,
    label: { en: "GITHUB", fr: "GITHUB" },
    value: "emma-dasilva-dev",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/emmadasilvadev/",
    external: true,
    label: { en: "LINKEDIN", fr: "LINKEDIN" },
    value: "emmadasilvadev",
  },
];
