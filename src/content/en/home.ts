import type { HomeContent } from "../../types/content";

export const homeContent = {
  navigation: {
    menu: "Menu",
    close: "Close",
    ariaLabel: "Primary navigation",
    items: [
      { id: "home", number: "01", label: "Home", path: "/home" },
      { id: "work", number: "02", label: "Work", path: "/work" },
      { id: "about", number: "03", label: "About", path: "/about" },
      { id: "journey", number: "04", label: "Journey", path: "/journey" },
      { id: "stack", number: "05", label: "Stack", path: "/stack" },
      { id: "contact", number: "06", label: "Contact", path: "/contact" },
    ],
  },
  hero: {
    sectionLabel: "01 / HOME",
    terminalCommand: "whoami",
    name: "Emma Da Silva",
    role: "Junior Developer",
    description:
      "Curiosity brought me into tech, but building is what keeps me here.",
    scroll: "Scroll",
  },
  work: {
    sectionLabel: "02 / SELECTED WORK",
    heading: "Selected work",
    intro: "Two projects, two different parts of how I learn and build.",
    viewCaseStudy: "View case study",
    roleLabel: "Role",
    stackLabel: "Stack",
    statusLabel: "Status",
    yearLabel: "Year",
  },
  about: {
    sectionLabel: "03 / ABOUT",
    heading: "About me",
    paragraphs: [
      "I’m Emma, a junior developer interested in understanding not only how to build software, but how the systems behind it work.",
      "I learn by building, debugging, and documenting what I discover while strengthening my foundations in software engineering, Linux, C, and cybersecurity.",
    ],
    currentlyLabel: "Currently",
    currently: ["Software engineering", "Linux", "C", "Cybersecurity"],
    basedLabel: "Based",
    based: "Benin",
    languagesLabel: "Languages",
    languages: "English / French",
    portraitAlt: "Portrait of Emma Da Silva",
  },
  journey: {
    sectionLabel: "04 / JOURNEY",
    heading: "Journey",
    intro:
      "A compact view of the formal and self-directed work shaping my development.",
    items: [
      {
        date: "2025",
        title: "Baccalauréat général",
        kind: "formal",
      },
      {
        date: "SINCE 2025",
        title: "Self-Directed Learning",
        subtitle: "Independent technical learning",
        description:
          "Building technical foundations independently alongside formal training and professional work.",
        stack: [
          "Linux",
          "C",
          "Git / GitHub",
          "CLI",
          "Debugging",
          "Cybersecurity fundamentals",
        ],
        kind: "self",
      },
      {
        date: "FEB — MAY 2026",
        title: "CJEPE",
        subtitle: "Web Development Training",
        stack: ["HTML", "CSS", "JavaScript", "Introduction to C"],
        kind: "formal",
      },
      {
        date: "JUL 2026 — PRESENT",
        title: "CASHLESS",
        subtitle: "Full-Stack Development Internship",
        description:
          "Application development, frontend/backend integration, authentication, role-based access, databases, and professional project workflows.",
        kind: "formal",
      },
    ],
  },
  stack: {
    sectionLabel: "05 / STACK",
    heading: "Tools I use",
    description:
      "Technologies I’ve worked with to build, debug, and deploy my projects.",
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
        label: "Database",
        technologies: ["MySQL"],
      },
      {
        label: "Programming & Systems",
        technologies: ["C", "Linux"],
      },
      {
        label: "Tools & Deployment",
        technologies: ["Git", "GitHub", "VS Code", "Vercel", "Railway"],
      },
    ],
  },
  contact: {
    sectionLabel: "06 / CONTACT",
    heading: "Let’s connect.",
    lineOne: "Have a project, an opportunity, or simply want to talk tech?",
    lineTwo:
      "I’m always interested in meaningful ideas, thoughtful collaborations, and conversations that lead somewhere.",
    getInTouch: "Get in touch",
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
