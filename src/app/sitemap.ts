import type { MetadataRoute } from "next";

import { projects } from "@/content/projects";
import { getSiteUrl } from "@/lib/site-url";
import { locales } from "@/types/locale";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const lastModified = new Date("2026-09-04");

  const homeRoutes: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: new URL(`/${locale}`, baseUrl).toString(),
    lastModified,
  }));

  const projectRoutes: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    projects.map((project) => ({
      url: new URL(`/${locale}/work/${project.slug}`, baseUrl).toString(),
      lastModified,
    })),
  );

  return [...homeRoutes, ...projectRoutes];
}
