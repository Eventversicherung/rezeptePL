import type { BlogPost } from "@/types/content";
import {
  bodyFasolkaGuideDe,
  bodyFaworkiTechnikDe,
  bodyMajeranekDe,
} from "./blog-bodies-w5-de";
import {
  bodyFasolkaGuidePl,
  bodyFaworkiTechnikPl,
  bodyMajeranekPl,
} from "./blog-bodies-w5-pl";

export const seedBlogPostsW5: BlogPost[] = [
  {
    id: "post-faworki-technik",
    status: "published",
    postType: "guide",
    coverImage:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1600&q=80",
    siloIds: ["technique", "occasion"],
    relatedRecipeIds: [
      "recipe-faworki",
      "recipe-paczki",
      "recipe-racuchy",
      "recipe-nalesniki",
    ],
    relatedPostIds: [
      "post-tlusty-czwartek",
      "post-paczek-technik",
      "post-ersatzprodukte-de",
      "post-smietana-schmand",
    ],
    relatedProductIds: [],
    clusterIds: ["occasion-tlusty-czwartek", "technique-teig"],
    translations: {
      de: {
        title: "Faworki-Technik: dünner Teig, heißes Fett, sofort Zucker",
        slug: "faworki-technik",
        excerpt:
          "Teig, Temperatur und typische Fehler — Technik-Guide zu Faworki für Tłusty Czwartek in DE.",
        seoTitle: "Faworki Technik Guide | Chrust | Alemniam",
        seoDescription:
          "Faworki richtig ausbacken: Teig dünn, Fett heiß, Puderzucker sofort. Ergänzt Rezept und Tłusty-Czwartek-Artikel.",
        body: bodyFaworkiTechnikDe.trim(),
      },
      pl: {
        title: "Technika faworków: cienkie ciasto, gorący tłuszcz, cukier od razu",
        slug: "faworki-technika",
        excerpt:
          "Ciasto, temperatura i typowe błędy — przewodnik techniki faworków na Tłusty Czwartek w DE.",
        seoTitle: "Faworki technika | Chrust | Alemniam",
        seoDescription:
          "Jak smażyć faworki: cienkie ciasto, gorący tłuszcz, cukier puder. Uzupełnia przepis i artykuł o Tłustym Czwartku.",
        body: bodyFaworkiTechnikPl.trim(),
      },
    },
    publishedAt: "2026-07-28T09:00:00.000Z",
    updatedAt: "2026-07-28T09:00:00.000Z",
  },
  {
    id: "post-fasolka-guide",
    status: "published",
    postType: "guide",
    coverImage:
      "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=1600&q=80",
    siloIds: ["dishFamily", "ingredient"],
    relatedRecipeIds: [
      "recipe-fasolka",
      "recipe-bigos",
      "recipe-golabki",
      "recipe-zrazy",
    ],
    relatedPostIds: [
      "post-kielbasa-arten",
      "post-majeranek",
      "post-polenladen",
      "post-dutch-oven",
    ],
    relatedProductIds: ["aff-dutch-oven"],
    clusterIds: ["technique-schmoren"],
    translations: {
      de: {
        title: "Fasolka po bretońsku: Bohnen, Wurst, Majoran, Geduld",
        slug: "fasolka-po-bretonsku",
        excerpt:
          "Einkauf, Bohnen, Kiełbasa und Würzen — Pillar-Guide zur Fasolka in DE, ohne Rezept zu duplizieren.",
        seoTitle: "Fasolka po bretońsku Guide | Alemniam",
        seoDescription:
          "Fasolka Guide: Bohnen, Tomate, Kiełbasa, Majeranek. Ergänzt Rezept und Einkauf in Deutschland.",
        body: bodyFasolkaGuideDe.trim(),
      },
      pl: {
        title: "Fasolka po bretońsku: fasola, kiełbasa, majeranek, cierpliwość",
        slug: "fasolka-po-bretonsku",
        excerpt:
          "Zakupy, fasola, kiełbasa i doprawianie — przewodnik po fasolce w DE, bez powielania przepisu.",
        seoTitle: "Fasolka po bretońsku przewodnik | Alemniam",
        seoDescription:
          "Przewodnik fasolka: fasola, pomidor, kiełbasa, majeranek. Uzupełnia przepis i zakupy w Niemczech.",
        body: bodyFasolkaGuidePl.trim(),
      },
    },
    publishedAt: "2026-07-28T10:00:00.000Z",
    updatedAt: "2026-07-28T10:00:00.000Z",
  },
  {
    id: "post-majeranek",
    status: "published",
    postType: "lexicon",
    coverImage:
      "https://images.unsplash.com/photo-1596040033229-a0b3b83e0aa3?w=1600&q=80",
    siloIds: ["ingredient"],
    relatedRecipeIds: [
      "recipe-golabki",
      "recipe-fasolka",
      "recipe-zrazy",
      "recipe-pierogi-meat",
      "recipe-zeberka",
      "recipe-rolada-slaska",
      "recipe-schab-pieczony",
      "recipe-flaki",
      "recipe-kaszanka",
      "recipe-golonka",
      "recipe-leczo",
    ],
    relatedPostIds: [
      "post-fasolka-guide",
      "post-golabki-guide",
      "post-kielbasa-arten",
      "post-polenladen",
    ],
    relatedProductIds: [],
    clusterIds: [],
    translations: {
      de: {
        title: "Majeranek: das stille Gewürz für Fleisch, Gołąbki und Fasolka",
        slug: "majeranek",
        excerpt:
          "Majoran vs. Oregano, Dosierung und Einkauf in DE — Lexikon für polnische Hausküche.",
        seoTitle: "Majeranek Lexikon | Majoran polnisch | Alemniam",
        seoDescription:
          "Majeranek verstehen: Wann würzen, wie dosieren, wo kaufen. Verbindet Gołąbki, Fasolka, Zrazy und Einkauf.",
        body: bodyMajeranekDe.trim(),
      },
      pl: {
        title: "Majeranek: cicha przyprawa do mięsa, gołąbków i fasolki",
        slug: "majeranek-leksykon",
        excerpt:
          "Majeranek vs oregano, dawkowanie i zakupy w DE — leksykon polskiej kuchni domowej.",
        seoTitle: "Majeranek leksykon | Przyprawa | Alemniam",
        seoDescription:
          "Majeranek: kiedy doprawiać, jak dawkować, gdzie kupić. Łączy gołąbki, fasolkę, zrazy i zakupy.",
        body: bodyMajeranekPl.trim(),
      },
    },
    publishedAt: "2026-07-28T11:00:00.000Z",
    updatedAt: "2026-07-28T11:00:00.000Z",
  },
];
