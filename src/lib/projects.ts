import type { ProjectCaseStudy } from "../types/content";

export const projectSlugs = [
  "stay",
  "bandit-learning-journal",
] as const;

export type ProjectSlug = (typeof projectSlugs)[number];

export function isProjectSlug(value: string): value is ProjectSlug {
  return projectSlugs.includes(value as ProjectSlug);
}

export function findProject(
  projects: ProjectCaseStudy[],
  slug: ProjectSlug
): ProjectCaseStudy | undefined {
  return projects.find((project) => project.slug === slug);
}
