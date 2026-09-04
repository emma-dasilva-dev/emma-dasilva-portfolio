import type { BanditProgress, Project } from "@/types/content";

export const banditProgress: BanditProgress = {
  completedThrough: 13,
  currentLevel: 14,
  lastUpdated: "2026-09-04",
};

export const projects = [
  {
    id: "stay",
    slug: "stay",
    title: "STAY",
    subtitle: {
      en: "Full-Stack Hospitality Platform",
      fr: "Plateforme hôtelière full-stack",
    },
    summary: {
      en: "A reservation and hospitality management platform built as a practical full-stack project.",
      fr: "Une plateforme de réservation et de gestion hôtelière conçue comme projet pratique full-stack.",
    },
    technologies: ["React", "Node.js", "Express", "MySQL", "JWT"],
    status: "published",
    links: {},
    seo: {
      en: {
        title: "STAY | Emma Da Silva",
        description: "STAY full-stack hospitality platform case study.",
      },
      fr: {
        title: "STAY | Emma Da Silva",
        description: "Étude de cas de la plateforme hôtelière full-stack STAY.",
      },
    },
  },
  {
    id: "bandit-redline",
    slug: "bandit-redline",
    title: "Bandit Redline",
    subtitle: {
      en: "Linux & Cybersecurity Practice",
      fr: "Pratique Linux & cybersécurité",
    },
    summary: {
      en: "Documented progression through OverTheWire Bandit focused on Linux and security fundamentals.",
      fr: "Progression documentée sur OverTheWire Bandit, axée sur Linux et les fondamentaux de la sécurité.",
    },
    technologies: ["Linux", "SSH", "Bash"],
    status: "published",
    links: {},
    seo: {
      en: {
        title: "Bandit Redline | Emma Da Silva",
        description: "Linux and cybersecurity practice through OverTheWire Bandit.",
      },
      fr: {
        title: "Bandit Redline | Emma Da Silva",
        description: "Pratique Linux et cybersécurité à travers OverTheWire Bandit.",
      },
    },
  },
] satisfies Project[];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
