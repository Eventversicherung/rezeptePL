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
        title: "Gołąbki-Guide: Sonntag, Sauce und Batch",
        slug: "golabki-guide",
        excerpt:
          "Gołąbki am Tisch: Sauce-Wege, Varianten, Batch und typische Fehler — Mengen und Schritte im Rezept.",
        seoTitle: "Gołąbki Guide | Sauce, Varianten, Batch | Alemniam",
        seoDescription:
          "Gołąbki im Überblick: Tomate oder Rosół, vegetarisch, Freezer. Kochen mit Mengen im Gołąbki-Rezept.",
        body: bodyGolabkiGuideDe.trim(),
      },
      pl: {
        title: "Przewodnik po gołąbkach: niedziela, sos, batch",
        slug: "golabki-przewodnik",
        excerpt:
          "Gołąbki przy stole: sosy, warianty, batch i typowe błędy — ilości i kroki w przepisie.",
        seoTitle: "Gołąbki przewodnik | Sos, warianty, batch | Alemniam",
        seoDescription:
          "Przegląd gołąbków: pomidor lub rosół, wege, zamrażarka. Gotowanie z ilościami w przepisie na gołąbki.",
        body: bodyGolabkiGuidePl.trim(),
      },
    },
    publishedAt: "2026-07-25T09:00:00.000Z",
    updatedAt: "2026-07-21T12:00:00.000Z",
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
      "recipe-nalesniki-dzem",
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
        title: "Naleśniki-Guide: Varianten, Alltag, Diaspora",
        slug: "nalesniki-guide",
        excerpt:
          "Naleśniki vs. deutsche Eierkuchen: welche Füllung wann, typische Fehler über Varianten — kochen auf den Rezepten.",
        seoTitle: "Naleśniki Guide | Varianten & Alltag | Alemniam",
        seoDescription:
          "Naleśniki im Überblick: Twaróg, Fleisch, Spinat, Dżem. Mengen und Schritte in den Rezepten — hier die Orientierung.",
        body: bodyNalesnikiGuideDe.trim(),
      },
      pl: {
        title: "Przewodnik po naleśnikach: warianty i codzienność",
        slug: "nalesniki-przewodnik",
        excerpt:
          "Naleśniki vs Eierkuchen: który farsz kiedy, typowe błędy — gotowanie w przepisach, tu orientacja.",
        seoTitle: "Naleśniki przewodnik | Warianty i codzienność | Alemniam",
        seoDescription:
          "Przegląd naleśników: twaróg, mięso, szpinak, dżem. Ilości i kroki w przepisach — tutaj mapa wariantów.",
        body: bodyNalesnikiGuidePl.trim(),
      },
    },
    publishedAt: "2026-07-25T10:00:00.000Z",
    updatedAt: "2026-07-21T12:00:00.000Z",
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
