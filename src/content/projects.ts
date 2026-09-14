import type { BanditProgress, Project } from "@/types/content";

export const banditProgress: BanditProgress = {
  completedThrough: 13,
  currentLevel: 14,
  lastUpdated: "2026-09-04",
};

export const projects = [
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
