import type { HomeContent } from "../../types/content";

export const homeContent = {
  navigation: {
    menu: "Menu",
    close: "Close",
    ariaLabel: "Portfolio navigation",
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
    intro:
      "Projects that show how I learn, build, document, and solve problems across software development and cybersecurity.",
    roleLabel: "Role",
    stackLabel: "Stack",
    statusLabel: "Status",
    yearLabel: "Year",
    viewCaseStudy: "View case study",
  },

  about: {
    sectionLabel: "03 / ABOUT",
    heading: "I build to understand.",
    paragraphs: [
      "I got into tech because I was curious about what was happening behind the screen. I kept following the questions that interested me and learning a little more every time.",
      "C, Linux, web development, and computer fundamentals taught me to read errors properly, test ideas, and stay with a problem until I understand it.",
      "That same curiosity is what pulled me toward cybersecurity. I want to understand not only how software is built, but how systems fail and how they can be protected.",
    ],
    currentlyLabel: "Currently",
    currently: ["Cybersecurity", "Software development", "Linux"],
    basedLabel: "Based in",
    based: "Cotonou, Benin",
    languagesLabel: "Languages",
    languages: "English · French",
    portraitAlt: "Portrait of Emma Da Silva",
  },

  journey: {
    sectionLabel: "04 / JOURNEY",
    heading: "Learning by building.",
    intro:
      "A short timeline of the experiences that have shaped how I work and what I am learning next.",
    items: [
      {
        date: "2025 → 2026",
        title: "Independent learning",
        subtitle: "Software development",
        description:
          "Built foundations in HTML, CSS, JavaScript, C, Linux, Bash, Git, and web development through hands-on projects.",
        stack: ["C", "Linux", "JavaScript", "Git"],
        kind: "self",
      },
      {
        date: "2026",
        title: "CJEPE",
        subtitle: "Professional training",
        description:
          "Strengthened practical development skills through structured professional training.",
        kind: "training",
      },
      {
        date: "2026",
        title: "Cashless Africa",
        subtitle: "Software development internship",
        description:
          "Worked on real product features, including reminder systems and frontend experiences.",
        stack: ["Next.js", "TypeScript", "Node.js"],
        kind: "internship",
      },
      {
        date: "2026 → Present",
        title: "University",
        subtitle: "Cybersecurity",
        description:
          "Studying cybersecurity while continuing to build software and deepen my systems knowledge.",
        kind: "education",
      },
    ],
  },

  stack: {
    sectionLabel: "05 / STACK",
    heading: "Tools I work with",
    description:
      "A practical stack shaped by the things I build and the systems I am learning to understand.",
    groups: [
      {
        label: "Frontend",
        technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
      },
      {
        label: "Backend & data",
        technologies: ["Node.js", "Express.js", "MySQL", "C"],
      },
      {
        label: "Systems & tooling",
        technologies: ["Linux", "Bash", "Git"],
      },
    ],
  },

  contact: {
    sectionLabel: "06 / CONTACT",
    heading: "Interested in working together?",
    lineOne: "I am open to thoughtful projects, collaborations, and opportunities to keep learning by building.",
    lineTwo: "The easiest way to reach me is by email.",
    getInTouch: "Get in touch",
    github: "GitHub",
    linkedin: "LinkedIn",
  },

  footer: {
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
    copyright: "©2026 Emma Da Silva",
  },
} satisfies HomeContent;
