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
      en: "A reservation and hospitality management platform for discovering accommodations in Benin, booking stays and managing reservations.",
      fr: "Une plateforme de réservation et de gestion hôtelière pour découvrir des hébergements au Bénin, réserver des séjours et gérer les réservations.",
    },
    technologies: ["React", "Node.js", "Express", "MySQL", "JWT"],
    status: "published",
    links: {
      live: "https://stay-rose.vercel.app/",
      github: "https://github.com/emma-dasilva-dev/stay",
    },
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
      en: "My documented progression through OverTheWire Bandit, focused on Linux, command-line problem solving and security fundamentals.",
      fr: "Ma progression documentée sur OverTheWire Bandit, axée sur Linux, la résolution de problèmes en ligne de commande et les fondamentaux de la sécurité.",
    },
    technologies: ["Linux", "SSH", "Bash"],
    status: "published",
    links: {
      journal: "https://emma-dasilva-dev.github.io/bandit-redline-journal/",
    },
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
