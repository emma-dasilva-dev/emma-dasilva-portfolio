import type { Locale } from "@/types/locale";

export function homePath(locale: Locale): `/${Locale}` {
  return `/${locale}`;
}

export function projectPath(locale: Locale, slug: string): string {
  return `/${locale}/work/${slug}`;
}
