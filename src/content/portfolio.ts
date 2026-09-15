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
          description: "Completed structured programming training in C, HTML, CSS, JavaScript, Git and GitHub, strengthening my fundamentals through practical exercises and projects. I also built ByteRush, an educational web game designed to introduce beginners to HTML, CSS and JavaScript.",
          link: { label: "Visit website", href: "https://cjepebenin.site/" },
        },
        {
          period: "Jul — Sep 2026",
          title: "Cashless",
          role: "Full-Stack Development Intern",
          description: "Moved from guided learning into a professional development environment, applying my skills to real projects and product requirements. I worked on full-stack development, APIs, databases, authentication and deployment. I was also tasked with designing a smart automated reminder system for the Cashless application, introducing me to system architecture, reminder logic and automated user communication workflows.",
          link: { label: "Visit website", href: "https://cashless.africa" },
        },
      ],
    },
    about: {
      heading: "About",
      paragraphs: [
        "I’m Emma Da Silva, a student focused on cybersecurity and computer engineering. My technical foundation began with software development, working with C, JavaScript, TypeScript and web technologies. Through projects and internship experience, I’ve worked with frontend and backend development, databases, APIs, authentication and development tooling.",
        "Cybersecurity is now my primary direction, with a growing focus on Linux security, networking and web security. I’m strengthening the fundamentals behind these areas through practical work with Linux, Bash, SSH, networking concepts and security exercises such as OverTheWire Bandit.",
        "I prefer learning through implementation and problem-solving. When something fails, I try to understand the underlying cause rather than only finding a temporary fix. This approach has shaped how I work across programming, debugging, Linux environments and technical projects.",
        "Software engineering remains an important part of my development. Understanding how applications, APIs, databases and systems are built provides useful context for understanding how they can fail or be secured. My goal is to develop a strong foundation across computer engineering and software systems while progressively specializing in cybersecurity.",
      ],
      quote: "Engineering + Security — building a stronger understanding of systems from both sides.",
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
      copy: "I’m open to internships, technical collaborations and conversations around cybersecurity, systems, computer engineering and software development.",
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
          description: "J’ai suivi une formation structurée en C, HTML, CSS, JavaScript, Git et GitHub, qui m’a permis de renforcer mes bases à travers des exercices et projets pratiques. J’y ai également créé ByteRush, un jeu web éducatif conçu pour initier les débutants au HTML, CSS et JavaScript.",
          link: { label: "Visiter le site", href: "https://cjepebenin.site/" },
        },
        {
          period: "Juil — Sep 2026",
          title: "Cashless",
          role: "Stagiaire développeuse full-stack",
          description: "J’ai évolué d’un apprentissage guidé vers un environnement professionnel, où j’ai pu appliquer mes compétences à des projets et besoins concrets. J’ai travaillé sur le développement full-stack, les APIs, les bases de données, l’authentification et le déploiement. J’ai également été chargée de concevoir un système intelligent et automatisé de rappels pour l’application Cashless, ce qui m’a permis d’aborder l’architecture système, la logique des rappels et l’automatisation des communications avec les utilisateurs.",
          link: { label: "Visiter le site", href: "https://cashless.africa" },
        },
      ],
    },
    about: {
      heading: "À propos",
      paragraphs: [
        "Je suis Emma Da Silva, étudiante orientée vers la cybersécurité et le génie informatique. Mes bases techniques ont commencé avec le développement logiciel, notamment le C, JavaScript, TypeScript et les technologies web. À travers mes projets et mes expériences de stage, j’ai travaillé sur le frontend et le backend, les bases de données, les APIs, l’authentification et les outils de développement.",
        "La cybersécurité est désormais mon orientation principale, avec un intérêt croissant pour la sécurité Linux, les réseaux et la sécurité web. Je renforce actuellement les fondamentaux de ces domaines par une pratique de Linux, Bash, SSH, des concepts réseau et des exercices de sécurité comme OverTheWire Bandit.",
        "Je préfère apprendre par l’implémentation et la résolution de problèmes. Lorsqu’un élément ne fonctionne pas, j’essaie d’en comprendre la cause plutôt que de me limiter à une correction temporaire. Cette approche influence ma manière de travailler en programmation, débogage, environnements Linux et projets techniques.",
        "Le génie logiciel reste une partie importante de mon développement. Comprendre comment les applications, APIs, bases de données et systèmes sont construits apporte un contexte utile pour comprendre leurs défaillances et leur sécurisation. Mon objectif est de construire des bases solides en génie informatique et en systèmes logiciels tout en me spécialisant progressivement en cybersécurité.",
      ],
      quote: "Ingénierie + Sécurité — développer une compréhension plus complète des systèmes des deux côtés.",
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
      copy: "Je suis ouverte aux stages, collaborations techniques et échanges autour de la cybersécurité, des systèmes, du génie informatique et du développement logiciel.",
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
