import type { Locale } from "@/types/locale";

interface ExperienceItem {
  period: string;
  title: string;
  role: string;
  description: string;
  link?: { label: string; href: string };
}

interface StackGroup {
  label: string;
  items: string[];
}

interface PortfolioContent {
  experience: {
    heading: string;
    intro: string;
    items: ExperienceItem[];
  };
  about: {
    heading: string;
    paragraphs: string[];
    quote: string;
  };
  stack: {
    heading: string;
    intro: string;
    groups: StackGroup[];
  };
  contact: {
    heading: string;
    copy: string;
    links: { label: string; href: string }[];
    location: string;
  };
}

export const portfolioContent: Record<Locale, PortfolioContent> = {
  en: {
    experience: {
      heading: "Experience",
      intro: "A progression from self-directed learning to structured training and professional development work.",
      items: [
        {
          period: "2025",
          title: "Independent Learning",
          role: "C Programming & Linux",
          description: "Started programming in September 2025, learning C fundamentals, Linux command-line workflows, HTML, CSS and JavaScript through hands-on practice.",
        },
        {
          period: "Feb — May 2026",
          title: "CJEPE-BENIN",
          role: "Programming Training",
          description: "Trained in C, HTML, CSS, JavaScript, Git and GitHub, and built ByteRush, an educational web game for beginners.",
        },
        {
          period: "Jul — Sep 2026",
          title: "Cashless",
          role: "Full-Stack Development Intern",
          description: "Applied my development skills in a professional environment across full-stack applications, API work, authentication, deployment and system architecture.",
          link: { label: "cashless.africa", href: "https://cashless.africa" },
        },
      ],
    },
    about: {
      heading: "About",
      paragraphs: [
        "I did not start from a technical background. I studied literature in high school and seriously began exploring programming in 2025 after returning to a course I had access to for years.",
        "Development pulled me in because I enjoy turning ideas into things people can actually use. Building full-stack applications then made me curious about everything underneath the interface: APIs, databases, authentication, operating systems and networks.",
        "That curiosity is what led me toward cybersecurity. I want to keep building software while developing the depth to understand how systems behave, fail and can be protected.",
      ],
      quote: "I want to be able to build systems and understand them deeply enough to protect them.",
    },
    stack: {
      heading: "Stack",
      intro: "Technologies and tools I have actually used and can comfortably return to.",
      groups: [
        { label: "Languages", items: ["JavaScript", "TypeScript", "C", "HTML", "CSS"] },
        { label: "Frontend", items: ["React", "Next.js", "Vite", "React Router", "CSS Modules", "Tailwind CSS"] },
        { label: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
        { label: "Data", items: ["MySQL"] },
        { label: "Systems", items: ["Linux", "Bash", "SSH"] },
        { label: "Application Security", items: ["JWT", "bcrypt"] },
        { label: "Development Tools", items: ["Git", "GitHub", "VS Code", "Postman", "npm", "Vercel", "Railway", "GCC", "Nano"] },
      ],
    },
    contact: {
      heading: "Let’s connect.",
      copy: "I’m open to internships, collaborative projects, freelance work and conversations around software development and cybersecurity.",
      links: [
        { label: "Email", href: "mailto:emma.dasilva.dev@gmail.com" },
        { label: "GitHub", href: "https://github.com/emma-dasilva-dev" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/emmadasilvadev" },
        { label: "Instagram", href: "https://www.instagram.com/emmadev.bj" },
      ],
      location: "Cotonou, Benin",
    },
  },
  fr: {
    experience: {
      heading: "Expérience",
      intro: "Une progression entre apprentissage autonome, formation structurée et développement en environnement professionnel.",
      items: [
        {
          period: "2025",
          title: "Apprentissage autonome",
          role: "Programmation C & Linux",
          description: "J’ai commencé la programmation en septembre 2025 avec les bases du C, Linux, HTML, CSS et JavaScript à travers une pratique régulière.",
        },
        {
          period: "Fév — Mai 2026",
          title: "CJEPE-BENIN",
          role: "Formation en programmation",
          description: "Formation en C, HTML, CSS, JavaScript, Git et GitHub, avec la création de ByteRush, un jeu web éducatif pour débutants.",
        },
        {
          period: "Juil — Sep 2026",
          title: "Cashless",
          role: "Stagiaire développeuse full-stack",
          description: "Mise en pratique de mes compétences dans un environnement professionnel : applications full-stack, APIs, authentification, déploiement et architecture système.",
          link: { label: "cashless.africa", href: "https://cashless.africa" },
        },
      ],
    },
    about: {
      heading: "À propos",
      paragraphs: [
        "Je ne viens pas à l’origine d’un parcours technique. J’ai étudié la littérature au lycée et j’ai commencé à explorer sérieusement la programmation en 2025 en reprenant un cours auquel j’avais accès depuis plusieurs années.",
        "Le développement m’a attirée parce que j’aime transformer des idées en outils réellement utilisables. En construisant des applications full-stack, je suis devenue de plus en plus curieuse de ce qui se passe sous l’interface : APIs, bases de données, authentification, systèmes d’exploitation et réseaux.",
        "C’est cette curiosité qui m’a menée vers la cybersécurité. Je veux continuer à construire des logiciels tout en développant la profondeur nécessaire pour comprendre comment les systèmes fonctionnent, échouent et peuvent être protégés.",
      ],
      quote: "Je veux pouvoir construire des systèmes et les comprendre assez profondément pour pouvoir les protéger.",
    },
    stack: {
      heading: "Stack",
      intro: "Les technologies et outils que j’ai réellement utilisés et que je peux reprendre avec aisance.",
      groups: [
        { label: "Langages", items: ["JavaScript", "TypeScript", "C", "HTML", "CSS"] },
        { label: "Frontend", items: ["React", "Next.js", "Vite", "React Router", "CSS Modules", "Tailwind CSS"] },
        { label: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
        { label: "Données", items: ["MySQL"] },
        { label: "Systèmes", items: ["Linux", "Bash", "SSH"] },
        { label: "Sécurité applicative", items: ["JWT", "bcrypt"] },
        { label: "Outils", items: ["Git", "GitHub", "VS Code", "Postman", "npm", "Vercel", "Railway", "GCC", "Nano"] },
      ],
    },
    contact: {
      heading: "Restons en contact.",
      copy: "Je suis ouverte aux stages, projets collaboratifs, missions freelance et échanges autour du développement logiciel et de la cybersécurité.",
      links: [
        { label: "Email", href: "mailto:emma.dasilva.dev@gmail.com" },
        { label: "GitHub", href: "https://github.com/emma-dasilva-dev" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/emmadasilvadev" },
        { label: "Instagram", href: "https://www.instagram.com/emmadev.bj" },
      ],
      location: "Cotonou, Bénin",
    },
  },
};
