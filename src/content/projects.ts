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
    title: "Bandit Redline Journal",
    subtitle: {
      en: "A practical cybersecurity journal documenting my progress through the OverTheWire Bandit wargame.",
      fr: "Un journal pratique de cybersécurité documentant ma progression à travers le wargame OverTheWire Bandit.",
    },
    summary: {
      en: "I created Bandit Redline to document how I approach Linux and security challenges, including the commands I use, the reasoning behind them and what I learn from each level.",
      fr: "J’ai créé Bandit Redline pour documenter ma manière d’aborder les défis Linux et de sécurité, notamment les commandes utilisées, le raisonnement derrière celles-ci et ce que j’apprends à chaque niveau.",
    },
    technologies: ["Linux", "Bash", "SSH", "Git"],
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
