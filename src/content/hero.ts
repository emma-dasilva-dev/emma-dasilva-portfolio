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
    eyebrow: "Cybersecurity × Computer Engineering",
    greetingPrefix: "Hi 👋, I’m",
    name: "Emma Da Silva.",
    titlePrimary: "Cybersecurity & Computer Engineering Student",
    titleSecondary: "building strong foundations across systems, networks and software.",
    supportingCopy: "I’m learning how systems work from the inside out so I can understand, build and secure them.",
    locationLabel: "Location",
    location: "Cotonou, Benin",
    statusLabel: "Direction",
    status: "Focused on cybersecurity, systems and hands-on technical growth.",
    cta: "Explore my work",
    sectionMarker: "Home",
  },
  fr: {
    eyebrow: "Cybersécurité × Génie informatique",
    greetingPrefix: "Salut 👋, moi c’est",
    name: "Emma Da Silva.",
    titlePrimary: "Étudiante en cybersécurité & génie informatique",
    titleSecondary: "je construis des bases solides en systèmes, réseaux et développement logiciel.",
    supportingCopy: "J’apprends à comprendre les systèmes de l’intérieur afin de pouvoir les construire, les analyser et les sécuriser.",
    locationLabel: "Localisation",
    location: "Cotonou, Bénin",
    statusLabel: "Direction",
    status: "Priorité à la cybersécurité, aux systèmes et à la pratique technique.",
    cta: "Explorer mon travail",
    sectionMarker: "Accueil",
  },
};
