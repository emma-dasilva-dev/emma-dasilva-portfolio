import type { ProjectCaseStudy } from "../../types/content";

export const projects = [
  {
    slug: "stay",
    number: "01",
    eyebrow: "FULL-STACK APPLICATION",
    title: "STAY",
    shortTitle: "STAY",
    description:
      "A hospitality and reservation management platform for guests, employees, and administrators.",
    role: "Full-stack development",
    stack: ["React", "Vite", "Node.js", "Express.js", "MySQL"],
    status: "Deployed",
    year: "2026",
    liveLabel: "Live site",
    liveUrl: "https://staybj.vercel.app",
    sourceLabel: "GitHub",
    sourceUrl: "https://github.com/emma-dasilva-dev/stay",
    sections: [
      {
        label: "01 / OVERVIEW",
        title: "What it is",
        body:
          "STAY is a full-stack hospitality platform designed around reservation management and distinct guest, employee, and administrator experiences.",
      },
      {
        label: "02 / BUILD",
        title: "Core functionality",
        items: [
          "Authentication",
          "Reservations",
          "Role-based access",
          "Protected routes",
          "Employee dashboard",
          "Administrator features",
        ],
      },
      {
        label: "03 / ARCHITECTURE",
        title: "System flow",
        architecture: ["React + Vite", "Node.js + Express.js", "MySQL"],
      },
      {
        label: "04 / CHALLENGE",
        title: "Access across multiple roles",
        body:
          "A key challenge was structuring authentication and permissions so guest, employee, and administrator flows remained separate while sharing one application.",
      },
      {
        label: "05 / OUTCOME",
        title: "What I took from it",
        body:
          "Building STAY taught me how frontend interfaces, backend services, authentication, relational data, and separate deployments work together as one system.",
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
      "A bilingual Linux and cybersecurity learning journal documenting my progress through the OverTheWire Bandit wargame.",
    focus: "Linux · CLI · SSH · Security fundamentals",
    progress: "Level 0 → Level 14",
    languages: "EN / FR",
    status: "Published",
    year: "2026",
    liveLabel: "Live journal",
    liveUrl: "https://emma-dasilva-dev.github.io/bandit-redline-journal/",
    sourceLabel: "GitHub",
    sourceUrl: "https://github.com/emma-dasilva-dev/bandit-redline-journal",
    sections: [
      {
        label: "01 / OVERVIEW",
        title: "What the journal documents",
        body:
          "The journal records the learning process behind Bandit levels 0 through 13 → 14, with emphasis on understanding commands rather than publishing passwords or direct answer dumps.",
      },
      {
        label: "02 / APPROACH",
        title: "Learn → understand → document",
        body:
          "Each entry turns a challenge into a short explanation of the reasoning, the command-line concepts involved, and what I learned from the level.",
      },
      {
        label: "03 / CONCEPTS",
        title: "Technical focus",
        items: [
          "Linux navigation",
          "Permissions",
          "SSH",
          "Text processing",
          "Pipes and redirection",
          "Encoding and compression",
          "Command-line tooling",
        ],
      },
      {
        label: "04 / DOCUMENTATION",
        title: "Useful without becoming an answer dump",
        body:
          "The journal deliberately avoids publishing real passwords. The goal is to make the reasoning easier for another beginner to follow while preserving the learning challenge.",
      },
      {
        label: "05 / OUTCOME",
        title: "What I took from it",
        body:
          "The project strengthened my Linux confidence, command-line reasoning, technical writing, and ability to explain the same idea clearly in English and French.",
      },
    ],
  },
] satisfies ProjectCaseStudy[];
