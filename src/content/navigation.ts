import type { NavigationItem } from "@/types/content";

export const navigationItems: NavigationItem[] = [
  { id: "home", label: { en: "Home", fr: "Accueil" }, href: "#home" },
  { id: "work", label: { en: "Projects", fr: "Projets" }, href: "#work" },
  {
    id: "experience",
    label: { en: "Experience", fr: "Expérience" },
    href: "#experience",
  },
  { id: "about", label: { en: "About", fr: "À propos" }, href: "#about" },
  { id: "stack", label: { en: "Stack", fr: "Stack" }, href: "#stack" },
  { id: "contact", label: { en: "Contact", fr: "Contact" }, href: "#contact" },
];
