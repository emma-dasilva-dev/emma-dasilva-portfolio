import type { Locale } from "@/types/locale";

interface FoundationDictionary {
  skipToContent: string;
  foundationLabel: string;
  foundationTitle: string;
  foundationCopy: string;
  caseStudyLabel: string;
  caseStudyCopy: string;
}

const dictionaries: Record<Locale, FoundationDictionary> = {
  en: {
    skipToContent: "Skip to main content",
    foundationLabel: "Phase 3 / Foundation",
    foundationTitle: "Portfolio foundation is ready.",
    foundationCopy:
      "Routing, localization, design tokens, fonts and content types are in place. Visual section implementation comes next.",
    caseStudyLabel: "Case study foundation",
    caseStudyCopy:
      "This route is intentionally structural for now. Full case-study content and visual treatment will be implemented in a later stage.",
  },
  fr: {
    skipToContent: "Aller au contenu principal",
    foundationLabel: "Phase 3 / Fondation",
    foundationTitle: "La fondation du portfolio est prête.",
    foundationCopy:
      "Le routage, la localisation, les jetons de design, les polices et les types de contenu sont en place. L’implémentation visuelle des sections viendra ensuite.",
    caseStudyLabel: "Fondation de l’étude de cas",
    caseStudyCopy:
      "Cette route reste volontairement structurelle pour le moment. Le contenu complet et le traitement visuel de l’étude de cas seront ajoutés lors d’une étape ultérieure.",
  },
};

export function getDictionary(locale: Locale): FoundationDictionary {
  return dictionaries[locale];
}
