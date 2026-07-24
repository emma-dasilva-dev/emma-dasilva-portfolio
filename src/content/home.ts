import type {
  ContactLink,
  Locale,
  NavigationItem,
  Principle,
  Story,
  ThreadMilestone,
} from "@/types/portfolio";

interface HomeCopy {
  header: {
    menu: string;
    close: string;
    primaryNavigation: string;
    mobileNavigation: string;
    closeNavigation: string;
  };

  hero: {
    eyebrow: string;
    name: string;
    headlineLead: string;
    headlineStrong: string;
    supporting: string;
    primaryAction: string;
    secondaryAction: string;
    portraitAlt: string;
  };

  work: {
    label: string;
    title: string;
    intro: string;
    projectAction: string;
  };

  thinking: {
    label: string;
    title: string;
    intro: string;
  };

  stories: {
    label: string;
    title: string;
    intro: string;
  };

  contact: {
    label: string;
    title: string;
    body: string;
  };

  footer: {
    motto: string;
  };
}

export const HOME_COPY: Record<Locale, HomeCopy> = {
  en: {
    header: {
      menu: "MENU",
      close: "CLOSE",
      primaryNavigation: "Primary navigation",
      mobileNavigation: "Mobile navigation",
      closeNavigation: "Close navigation menu",
    },

    hero: {
      eyebrow: "PORTFOLIO / 2026",
      name: "EMMA DA SILVA",

      headlineLead:
        "From concept to code, I build thoughtful digital experiences with",

      headlineStrong:
        "uncompromising quality.",

      supporting:
        "Front-end developer and emerging software engineer turning ideas into refined, responsive and purposeful digital products.",

      primaryAction:
        "View my work",

      secondaryAction:
        "Read my story",

      portraitAlt:
        "Portrait of Emma Da Silva",
    },

    work: {
      label: "SELECTED WORK",
      title: "A few things I've built.",

      intro:
        "Projects that pushed me to think beyond the first working version and consider the complete experience.",

      projectAction:
        "Open live project",
    },

    thinking: {
      label: "HOW I THINK",
      title:
        "The thinking behind the interface.",

      intro:
        "I care about what happens between “it works” and “it feels right.” These principles shape the way I approach every product I build.",
    },

    stories: {
      label:
        "WHAT SHAPED HOW I BUILD",

      title:
        "A few moments that changed the way I approach the work.",

      intro:
        "Not a timeline. Just a handful of experiences that changed how I think about difficulty, learning and what it means for something to feel finished.",
    },

    contact: {
      label: "CONTACT",

      title:
        "Have an idea, opportunity or problem worth solving?",

      body:
        "I’m open to thoughtful collaborations, technical opportunities and conversations that lead somewhere useful.",
    },

    footer: {
      motto:
        "Good enough is never the final version.",
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
      closeNavigation:
        "Fermer le menu de navigation",
    },

    hero: {
      eyebrow: "PORTFOLIO / 2026",
      name: "EMMA DA SILVA",

      headlineLead:
        "De l’idée au code, je conçois des expériences numériques réfléchies avec",

      headlineStrong:
        "une exigence de qualité sans compromis.",

      supporting:
        "Développeuse front-end et ingénieure logiciel en devenir, je transforme les idées en produits numériques soignés, responsifs et utiles.",

      primaryAction:
        "Voir mes projets",

      secondaryAction:
        "Découvrir mon histoire",

      portraitAlt:
        "Portrait d’Emma Da Silva",
    },

    work: {
      label:
        "PROJETS SÉLECTIONNÉS",

      title:
        "Quelques projets que j’ai construits.",

      intro:
        "Des projets qui m’ont poussée à aller au-delà d’une première version fonctionnelle pour penser l’expérience dans son ensemble.",

      projectAction:
        "Ouvrir le projet",
    },

    thinking: {
      label:
        "MA FAÇON DE PENSER",

      title:
        "La réflexion derrière l’interface.",

      intro:
        "Je m’intéresse à tout ce qui se passe entre « ça fonctionne » et « ça semble juste ». Ces principes guident ma manière de construire chaque produit.",
    },

    stories: {
      label:
        "CE QUI A FAÇONNÉ MA FAÇON DE CRÉER",

      title:
        "Quelques moments qui ont changé ma manière d’aborder le travail.",

      intro:
        "Pas une chronologie. Seulement quelques expériences qui ont changé ma manière de voir la difficulté, l’apprentissage et ce que signifie réellement terminer quelque chose.",
    },

    contact: {
      label: "CONTACT",

      title:
        "Une idée, une opportunité ou un problème qui mérite d’être résolu ?",

      body:
        "Je suis ouverte aux collaborations réfléchies, aux opportunités techniques et aux conversations qui peuvent mener à quelque chose d’utile.",
    },

    footer: {
      motto:
        "Assez bien n’est jamais la version finale.",
    },
  },
};

export const NAV_ITEMS: NavigationItem[] = [
  {
    id: "work",
    label: {
      en: "WORK",
      fr: "PROJETS",
    },
  },

  {
    id: "thinking",
    label: {
      en: "THINKING",
      fr: "RÉFLEXION",
    },
  },

  {
    id: "stories",
    label: {
      en: "STORIES",
      fr: "HISTOIRES",
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

export const THREAD_MILESTONES: ThreadMilestone[] = [
  {
    id: "home",
    label: {
      en: "INTRO",
      fr: "INTRO",
    },
  },

  {
    id: "work",
    label: {
      en: "WORK",
      fr: "PROJETS",
    },
  },

  {
    id: "thinking",
    label: {
      en: "THINKING",
      fr: "RÉFLEXION",
    },
  },

  {
    id: "stories",
    label: {
      en: "STORIES",
      fr: "HISTOIRES",
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

export const PRINCIPLES: Principle[] = [
  {
    id: "detail",

    number: "01",

    title: {
      en:
        "Detail is part of the product",

      fr:
        "Le détail fait partie du produit",
    },

    body: {
      en:
        "I refine the interactions, spacing, responsiveness and visual decisions that determine whether a product merely works or feels complete.",

      fr:
        "Je soigne les interactions, les espacements, la responsivité et les décisions visuelles qui déterminent si un produit fonctionne simplement ou s’il semble réellement abouti.",
    },
  },

  {
    id: "purpose",

    number: "02",

    title: {
      en:
        "Design must serve a purpose",

      fr:
        "Le design doit servir un objectif",
    },

    body: {
      en:
        "I avoid adding elements simply because they look impressive. Every interface decision should improve clarity, usability or identity.",

      fr:
        "J’évite d’ajouter des éléments simplement parce qu’ils sont impressionnants. Chaque décision d’interface doit améliorer la clarté, l’utilisabilité ou l’identité.",
    },
  },

  {
    id: "beyond-first-version",

    number: "03",

    title: {
      en:
        "I build beyond the first version",

      fr:
        "Je construis au-delà de la première version",
    },

    body: {
      en:
        "My process includes testing, restructuring and improving until the experience works across devices and real usage conditions.",

      fr:
        "Mon processus comprend les tests, la restructuration et l’amélioration jusqu’à ce que l’expérience fonctionne réellement sur différents appareils et dans des conditions d’utilisation réelles.",
    },
  },
];

export const STORIES: Story[] = [
  {
    id: "easier-path",

    number: "01",

    eyebrow: {
      en: "THE EASIER PATH",
      fr: "LE CHEMIN LE PLUS FACILE",
    },

    title: {
      en:
        "Difficulty was something I originally tried to avoid.",

      fr:
        "Au départ, j’essayais surtout d’éviter la difficulté.",
    },

    body: {
      en:
        "I chose literature because it felt safer than the calculations I wanted to avoid. Coding later taught me something I did not expect: difficulty is not always a warning to turn back. Sometimes it is simply the cost of becoming capable.",

      fr:
        "J’ai choisi la littérature parce qu’elle me semblait plus sûre que les calculs que je voulais éviter. Le code m’a ensuite appris quelque chose que je n’attendais pas : la difficulté n’est pas toujours un signal pour faire demi-tour. Parfois, c’est simplement le prix à payer pour devenir capable.",
    },
  },

  {
    id: "accidental-start",

    number: "02",

    eyebrow: {
      en:
        "STARTING ALMOST ACCIDENTALLY",

      fr:
        "COMMENCER PRESQUE PAR HASARD",
    },

    title: {
      en:
        "Curiosity did what a perfect plan never could.",

      fr:
        "La curiosité a fait ce qu’aucun plan parfait n’aurait pu faire.",
    },

    body: {
      en:
        "My mother had bought me a lifetime Tynker subscription years earlier. During a quiet period at home, I remembered it, opened it and started learning Python. There was no grand plan. I was simply curious enough to begin.",

      fr:
        "Ma mère m’avait acheté un abonnement à vie à Tynker plusieurs années auparavant. Pendant une période plus calme à la maison, je m’en suis souvenue, je l’ai ouvert et j’ai commencé à apprendre Python. Il n’y avait aucun grand plan. J’étais simplement assez curieuse pour commencer.",
    },
  },

  {
    id: "before-certainty",

    number: "03",

    eyebrow: {
      en:
        "BEFORE CERTAINTY",

      fr:
        "AVANT D’ÊTRE SÛRE",
    },

    title: {
      en:
        "I kept learning before I felt ready.",

      fr:
        "J’ai continué à apprendre avant de me sentir prête.",
    },

    body: {
      en:
        "I was warned that programming would be harder because I had not followed a science track. They were not entirely wrong. I was uncertain, intimidated and interested anyway, so I kept going.",

      fr:
        "On m’a prévenue que la programmation serait plus difficile parce que je n’avais pas suivi une filière scientifique. Ce n’était pas complètement faux. J’étais incertaine, intimidée, mais toujours intéressée. Alors j’ai continué.",
    },
  },

  {
    id: "beyond-working",

    number: "04",

    eyebrow: {
      en:
        "BEYOND “IT WORKS”",

      fr:
        "AU-DELÀ DE « ÇA MARCHE »",
    },

    title: {
      en:
        "Working became the beginning, not the finish line.",

      fr:
        "Fonctionner est devenu le début, pas la ligne d’arrivée.",
    },

    body: {
      en:
        "Projects like ByteRush and STAY changed my definition of finished. A feature working is only the first checkpoint. The experience still has to hold together across screens, details and real use.",

      fr:
        "Des projets comme ByteRush et STAY ont changé ma définition d’un travail terminé. Une fonctionnalité qui fonctionne n’est qu’une première étape. L’expérience doit encore rester cohérente sur différents écrans, dans les détails et dans une utilisation réelle.",
    },
  },
];

export const CONTACT_LINKS: ContactLink[] = [
  {
    id: "email",

    href:
      "mailto:emma.dasilva.dev@gmail.com",

    external: false,

    label: {
      en: "EMAIL",
      fr: "EMAIL",
    },
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
  },
];   