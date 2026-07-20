import type { BlogPost } from "@/types/content";
import {
  bodyGolabkiGuideDe,
  bodyNalesnikiGuideDe,
  bodyOscypekDe,
} from "./blog-bodies-w3a-de";
import {
  bodyGolabkiGuidePl,
  bodyNalesnikiGuidePl,
  bodyOscypekPl,
} from "./blog-bodies-w3a-pl";

export const seedBlogPostsW3a: BlogPost[] = [
  {
    id: "post-golabki-guide",
    status: "published",
    postType: "guide",
    coverImage:
      "https://images.unsplash.com/photo-1743148843470-8fd92a31c473?w=1600&q=80",
    siloIds: ["dishFamily"],
    relatedRecipeIds: ["recipe-golabki", "recipe-rosol", "recipe-bigos"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-dutch-oven",
      "post-smietana-schmand",
      "post-rosol-technik",
      "post-kasza",
    ],
    relatedProductIds: ["aff-dutch-oven"],
    clusterIds: ["occasion-niedziela", "technique-schmoren"],
    translations: {
      de: {
        title: "Gołąbki-Guide: Rollen, Sauce und Sonntag",
        slug: "golabki-guide",
        excerpt:
          "Überblick zu Gołąbki: Kohl vorbereiten, Füllung, Schichten, Sauce und Freezer — für den Alltag in Deutschland.",
        seoTitle: "Gołąbki Rezept Guide | Überblick & Technik | Alemniam",
        seoDescription:
          "Gołąbki Guide: Kohl, Füllung, Sauce, Varianten und Batch. Ergänzt das Rezept — klar für Haushalte in DE.",
        body: bodyGolabkiGuideDe.trim(),
      },
      pl: {
        title: "Przewodnik po gołąbkach: zawijanie, sos, niedziela",
        slug: "golabki-przewodnik",
        excerpt:
          "Przegląd gołąbków: kapusta, farsz, układanie, sos i zamrażarka — na codzienność w Niemczech.",
        seoTitle: "Gołąbki przepis przewodnik | Technika | Alemniam",
        seoDescription:
          "Gołąbki przewodnik: kapusta, farsz, sos, warianty i batch. Uzupełnia przepis — jasno dla domów w DE.",
        body: bodyGolabkiGuidePl.trim(),
      },
    },
    publishedAt: "2026-07-25T09:00:00.000Z",
    updatedAt: "2026-07-25T09:00:00.000Z",
  },
  {
    id: "post-nalesniki-guide",
    status: "published",
    postType: "guide",
    coverImage:
      "https://images.unsplash.com/photo-1770802858320-50848db704d5?w=1600&q=80",
    siloIds: ["dishFamily"],
    relatedRecipeIds: [
      "recipe-nalesniki",
      "recipe-nalesniki-mieso",
      "recipe-nalesniki-szpinak",
      "recipe-krokiety",
      "recipe-pierogi",
      "recipe-pierogi-leniwe",
    ],
    relatedPostIds: [
      "post-twarog",
      "post-smietana-schmand",
      "post-ersatzprodukte-de",
    ],
    relatedProductIds: ["aff-cast-iron"],
    clusterIds: ["technique-teig"],
    translations: {
      de: {
        title: "Naleśniki-Guide: dünner Teig, Füllung, Alltag",
        slug: "nalesniki-guide",
        excerpt:
          "Naleśniki vs. deutsche Pfannkuchen: Teig, Braten, süße und herzhafte Füllungen, Meal-Prep — mit Link zu Twaróg.",
        seoTitle: "Naleśniki Rezept Guide | Polnische Pfannkuchen | Alemniam",
        seoDescription:
          "Naleśniki Guide: Teig, Pfanne, Füllungen und Freezer. Ergänzt das Rezept — ohne Twaróg-Cannibalization.",
        body: bodyNalesnikiGuideDe.trim(),
      },
      pl: {
        title: "Przewodnik po naleśnikach: ciasto, farsz, codzienność",
        slug: "nalesniki-przewodnik",
        excerpt:
          "Naleśniki vs niemieckie Pfannkuchen: ciasto, smażenie, farsze słodkie i wytrawne, meal prep — z linkiem do twarogu.",
        seoTitle: "Naleśniki przepis przewodnik | Alemniam",
        seoDescription:
          "Naleśniki przewodnik: ciasto, patelnia, farsze i mrożenie. Uzupełnia przepis — bez kanibalizacji słowa „twaróg”.",
        body: bodyNalesnikiGuidePl.trim(),
      },
    },
    publishedAt: "2026-07-25T10:00:00.000Z",
    updatedAt: "2026-07-25T10:00:00.000Z",
  },
  {
    id: "post-oscypek",
    status: "published",
    postType: "lexicon",
    coverImage:
      "https://images.unsplash.com/photo-1718939046345-f607c89e92d9?w=1600&q=80",
    siloIds: ["ingredient", "diaspora"],
    relatedRecipeIds: ["recipe-oscypek", "recipe-placki"],
    relatedPostIds: [
      "post-gusseisen",
      "post-polenladen",
      "post-ersatzprodukte-de",
    ],
    relatedProductIds: ["aff-cast-iron"],
    clusterIds: [],
    translations: {
      de: {
        title: "Oscypek in Deutschland: kaufen, grillen, ersetzen",
        slug: "oscypek-deutschland",
        excerpt:
          "Was Oscypek ist, wie wir Qualität im Laden erkennen, Grill/Pfanne und sinnvolle Alternativen in DE.",
        seoTitle: "Oscypek kaufen Deutschland | Guide | Alemniam",
        seoDescription:
          "Oscypek in DE: g.U./PDO kurz erklärt, Einkauf, Grillen, Beilagen und Ersatz — ruhig und praxisnah.",
        body: bodyOscypekDe.trim(),
      },
      pl: {
        title: "Oscypek w Niemczech: kupić, opiekać, zamienić",
        slug: "oscypek-w-niemczech",
        excerpt:
          "Czym jest oscypek, jak rozpoznać jakość, grill/patelnia i sensowne zamienniki w DE.",
        seoTitle: "Oscypek w Niemczech | Poradnik | Alemniam",
        seoDescription:
          "Oscypek w DE: chroniona nazwa w skrócie, zakupy, opiekanie, dodatki i zamienniki — spokojnie i praktycznie.",
        body: bodyOscypekPl.trim(),
      },
    },
    publishedAt: "2026-07-25T11:00:00.000Z",
    updatedAt: "2026-07-25T11:00:00.000Z",
  },
];
