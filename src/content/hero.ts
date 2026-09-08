import type { Locale } from "@/types/locale";

interface HeroContent {
  eyebrow: string;
  greetingPrefix: string;
  name: string;
  titlePrimary: string;
  titleSecondary: string;
  supportingCopy: string;
  locationLabel: string;
  location: string;
  statusLabel: string;
  status: string;
  cta: string;
  sectionMarker: string;
}

export const heroContent: Record<Locale, HeroContent> = {
  en: {
    eyebrow: "Software Engineering × Cybersecurity",
    greetingPrefix: "Hi 👋, I’m",
    name: "Emma Da Silva.",
    titlePrimary: "Junior Full-Stack Software Engineer",
    titleSecondary: "building my expertise in cybersecurity.",
    supportingCopy: "I build thoughtful digital experiences and explore the systems behind them.",
    locationLabel: "Location",
    location: "Cotonou, Benin",
    statusLabel: "Status",
    status: "Available for internships & collaborative projects.",
    cta: "See what I’m building",
    sectionMarker: "01 / Home",
  },
  fr: {
    eyebrow: "Ingénierie logicielle × Cybersécurité",
    greetingPrefix: "Salut 👋, moi c’est",
    name: "Emma Da Silva.",
    titlePrimary: "Ingénieure logiciel full-stack junior",
    titleSecondary: "et je développe mon expertise en cybersécurité.",
    supportingCopy:
      "Je conçois des expériences numériques réfléchies et j’explore les systèmes qui les font fonctionner.",
    locationLabel: "Localisation",
    location: "Cotonou, Bénin",
    statusLabel: "Disponibilité",
    status: "Disponible pour des stages et des projets collaboratifs.",
    cta: "Voir ce que je construis",
    sectionMarker: "01 / Accueil",
  },
};
