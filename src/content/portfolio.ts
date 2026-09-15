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
  experience: { heading: string; intro: string; items: ExperienceItem[] };
  about: { heading: string; paragraphs: string[]; quote: string };
  stack: { heading: string; intro: string; groups: StackGroup[] };
  contact: { heading: string; copy: string; links: { label: string; href: string }[]; location: string };
}

export const portfolioContent: Record<Locale, PortfolioContent> = {
  en: {
    experience: {
      heading: "Experience",
      intro: "A technical path from programming fundamentals to professional software work and a growing cybersecurity focus.",
      items: [
        {
          period: "2025",
          title: "Independent Learning",
          role: "C Programming & Linux",
          description: "Started programming in September 2025, building foundations in C and Linux while learning how to work from the command line and understand software beyond the interface.",
        },
        {
          period: "Feb — May 2026",
          title: "CJEPE-BENIN",
          role: "Programming Training",
          description: "Completed structured training in C, HTML, CSS, JavaScript, Git and GitHub. Practical exercises and projects strengthened my programming fundamentals and introduced a more disciplined development workflow.",
          link: { label: "Visit website", href: "https://cjepebenin.site/" },
        },
        {
          period: "Jul — Sep 2026",
          title: "Cashless",
          role: "Software Development Intern",
          description: "Worked in a professional product environment across APIs, databases, authentication, deployment and full-stack development. I also designed the architecture and reminder logic for a modular automated reminder system, giving me practical exposure to system design and service-oriented thinking.",
          link: { label: "Visit website", href: "https://cashless.africa" },
        },
      ],
    },
    about: {
      heading: "About",
      paragraphs: [
        "I’m Emma Da Silva, a cybersecurity and computer engineering student with a foundation in software development. I started with C and Linux before expanding into JavaScript, TypeScript and web technologies through training, projects and internship work.",
        "Cybersecurity is my primary direction. I’m currently strengthening the systems and networking fundamentals behind it through Linux, Bash, SSH, networking concepts and practical security exercises such as OverTheWire Bandit, with particular interest in Linux, network and web security.",
        "My software engineering background remains useful because security depends on understanding how systems are built. Working with applications, APIs, databases and authentication gives me context for examining how software behaves, where weaknesses can appear and how technical decisions affect security.",
      ],
      quote: "Building the engineering foundation first, then learning to secure it.",
    },
    stack: {
      heading: "Stack",
      intro: "Technologies and tools I have actually used, grouped by the role they play in my current technical foundation.",
      groups: [
        { label: "Languages", items: ["C", "JavaScript", "TypeScript", "HTML", "CSS"] },
        { label: "Systems & Security", items: ["Linux", "Bash", "SSH"] },
        { label: "Frontend", items: ["React", "Next.js", "Vite", "React Router", "CSS Modules", "Tailwind CSS"] },
        { label: "Backend & Data", items: ["Node.js", "Express.js", "REST APIs", "MySQL"] },
        { label: "Authentication", items: ["JWT", "bcrypt"] },
        { label: "Development Tools", items: ["Git", "GitHub", "VS Code", "Postman", "npm", "Vercel", "Railway", "GCC", "Nano"] },
      ],
    },
    contact: {
      heading: "Let’s connect.",
      copy: "I’m open to internships and technical collaborations in cybersecurity, systems, computer engineering and software development.",
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
      intro: "Un parcours technique allant des fondamentaux de la programmation au travail logiciel en environnement professionnel, avec une orientation croissante vers la cybersécurité.",
      items: [
        {
          period: "2025",
          title: "Apprentissage autonome",
          role: "Programmation C & Linux",
          description: "J’ai commencé la programmation en septembre 2025 en construisant mes bases en C et Linux, tout en apprenant à travailler en ligne de commande et à comprendre le logiciel au-delà de son interface.",
        },
        {
          period: "Fév — Mai 2026",
          title: "CJEPE-BENIN",
          role: "Formation en programmation",
          description: "J’ai suivi une formation structurée en C, HTML, CSS, JavaScript, Git et GitHub. Les exercices et projets pratiques ont renforcé mes fondamentaux en programmation et m’ont permis d’adopter un processus de développement plus rigoureux.",
          link: { label: "Visiter le site", href: "https://cjepebenin.site/" },
        },
        {
          period: "Juil — Sep 2026",
          title: "Cashless",
          role: "Stagiaire en développement logiciel",
          description: "J’ai travaillé dans un environnement produit professionnel sur les APIs, les bases de données, l’authentification, le déploiement et le développement full-stack. J’ai également conçu l’architecture et la logique d’un système modulaire de rappels automatisés, ce qui m’a apporté une première expérience pratique de la conception de systèmes et d’une approche orientée services.",
          link: { label: "Visiter le site", href: "https://cashless.africa" },
        },
      ],
    },
    about: {
      heading: "À propos",
      paragraphs: [
        "Je suis Emma Da Silva, étudiante en cybersécurité et génie informatique avec des bases en développement logiciel. J’ai commencé avec le C et Linux avant d’élargir mes compétences à JavaScript, TypeScript et aux technologies web à travers des formations, projets et expériences de stage.",
        "La cybersécurité est mon orientation principale. Je renforce actuellement les fondamentaux systèmes et réseaux qui la soutiennent à travers Linux, Bash, SSH, les concepts réseau et des exercices pratiques de sécurité comme OverTheWire Bandit, avec un intérêt particulier pour la sécurité Linux, réseau et web.",
        "Mon expérience en génie logiciel reste utile car la sécurité exige de comprendre comment les systèmes sont construits. Le travail avec les applications, APIs, bases de données et mécanismes d’authentification me donne le contexte nécessaire pour analyser le comportement des logiciels, identifier où des faiblesses peuvent apparaître et comprendre l’impact des choix techniques sur la sécurité.",
      ],
      quote: "Construire d’abord les bases d’ingénierie, puis apprendre à les sécuriser.",
    },
    stack: {
      heading: "Stack",
      intro: "Les technologies et outils que j’ai réellement utilisés, regroupés selon leur rôle dans mes bases techniques actuelles.",
      groups: [
        { label: "Langages", items: ["C", "JavaScript", "TypeScript", "HTML", "CSS"] },
        { label: "Systèmes & Sécurité", items: ["Linux", "Bash", "SSH"] },
        { label: "Frontend", items: ["React", "Next.js", "Vite", "React Router", "CSS Modules", "Tailwind CSS"] },
        { label: "Backend & Données", items: ["Node.js", "Express.js", "REST APIs", "MySQL"] },
        { label: "Authentification", items: ["JWT", "bcrypt"] },
        { label: "Outils de développement", items: ["Git", "GitHub", "VS Code", "Postman", "npm", "Vercel", "Railway", "GCC", "Nano"] },
      ],
    },
    contact: {
      heading: "Restons en contact.",
      copy: "Je suis ouverte aux stages et collaborations techniques en cybersécurité, systèmes, génie informatique et développement logiciel.",
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
