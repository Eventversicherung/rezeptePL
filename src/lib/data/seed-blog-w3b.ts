import type { BlogPost } from "@/types/content";
import {
  bodyFermentGlaeserDe,
  bodyFreezerBoxenDe,
  bodyKaszaDe,
} from "./blog-bodies-w3b-de";
import {
  bodyFermentGlaeserPl,
  bodyFreezerBoxenPl,
  bodyKaszaPl,
} from "./blog-bodies-w3b-pl";

export const seedBlogPostsW3b: BlogPost[] = [
  {
    id: "post-freezer-boxen",
    status: "published",
    postType: "buying-guide",
    coverImage:
      "https://images.unsplash.com/photo-1610557898930-061537b2f3ba?w=1600&q=80",
    siloIds: ["gear"],
    relatedRecipeIds: [
      "recipe-pierogi",
      "recipe-pierogi-meat",
      "recipe-pierogi-cabbage",
    ],
    relatedPostIds: [
      "post-freezer-meal-prep",
      "post-pierogi-guide",
      "post-wigilia",
      "post-pierogi-formen",
    ],
    relatedProductIds: ["aff-freezer-boxes"],
    clusterIds: ["technique-freezer"],
    translations: {
      de: {
        title: "Beste Freezer-Boxen für Pierogi 2026",
        slug: "freezer-boxen-kaufberatung",
        excerpt:
          "Gefrierdosen für Pierogi-Batches: Material, Stapelbarkeit, Etikettierung — Budget bis Wigilia-Stufe.",
        seoTitle: "Beste Freezer-Boxen Pierogi 2026 | Kaufberatung | Alemniam",
        seoDescription:
          "Beste Freezer-Boxen für Pierogi 2026: Kriterien, Stufen, Tests-Slot. Ergänzt den Freezer-Guide — klar für DE-Haushalte.",
        body: bodyFreezerBoxenDe.trim(),
      },
      pl: {
        title: "Najlepsze pojemniki do mrożenia pierogów 2026",
        slug: "pojemniki-do-mrozenia",
        excerpt:
          "Pojemniki na batch pierogów: materiał, stos, etykiety — od budżetu po Wigilię.",
        seoTitle: "Pojemniki do mrożenia pierogów 2026 | Poradnik | Alemniam",
        seoDescription:
          "Najlepsze pojemniki do mrożenia pierogów 2026: kryteria, poziomy, slot testów. Uzupełnia poradnik mrożenia.",
        body: bodyFreezerBoxenPl.trim(),
      },
    },
    publishedAt: "2026-07-26T09:00:00.000Z",
    updatedAt: "2026-07-26T09:00:00.000Z",
  },
  {
    id: "post-ferment-glaeser",
    status: "published",
    postType: "buying-guide",
    coverImage:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&q=80",
    siloIds: ["gear"],
    relatedRecipeIds: [
      "recipe-bigos",
      "recipe-pierogi-cabbage",
      "recipe-zurek",
    ],
    relatedPostIds: [
      "post-kiszenie",
      "post-zakwas-zurek",
      "post-bigos-guide",
      "post-polenladen",
    ],
    relatedProductIds: ["aff-ferment-jars"],
    clusterIds: ["technique-kiszenie"],
    translations: {
      de: {
        title: "Beste Fermentiergläser für Kiszenie 2026",
        slug: "fermentier-glaeser-kaufberatung",
        excerpt:
          "Gläser, Deckel und Gärventile für Kapusta, Ogórki und Zakwas — Kriterien und Stufen für DE.",
        seoTitle: "Beste Fermentiergläser Kiszenie 2026 | Kaufberatung | Alemniam",
        seoDescription:
          "Fermentiergläser Kaufberatung 2026: Schraub vs. Bügel, Gärdeckel, Multi-Batch. Ergänzt Kiszenie-Guide.",
        body: bodyFermentGlaeserDe.trim(),
      },
      pl: {
        title: "Najlepsze słoiki do kiszenia 2026",
        slug: "sloiki-do-kiszenia",
        excerpt:
          "Słoiki, pokrywy i zawory do kapusty, ogórków i zakwasu — kryteria i poziomy w DE.",
        seoTitle: "Słoiki do kiszenia 2026 | Poradnik kupiecki | Alemniam",
        seoDescription:
          "Słoiki do kiszenia 2026: wkrętka vs klamra, nakładki, multi-batch. Uzupełnia kiszenie w domu.",
        body: bodyFermentGlaeserPl.trim(),
      },
    },
    publishedAt: "2026-07-26T10:00:00.000Z",
    updatedAt: "2026-07-26T10:00:00.000Z",
  },
  {
    id: "post-kasza",
    status: "published",
    postType: "lexicon",
    coverImage:
      "https://images.unsplash.com/photo-1596797038530-2c14fded7a3e?w=1600&q=80",
    siloIds: ["ingredient", "diaspora"],
    relatedRecipeIds: ["recipe-golabki", "recipe-placki", "recipe-bigos"],
    relatedPostIds: [
      "post-golabki-guide",
      "post-polenladen",
      "post-ersatzprodukte-de",
      "post-bigos-guide",
    ],
    relatedProductIds: [],
    clusterIds: [],
    translations: {
      de: {
        title: "Kasza gryczana: kaufen, kochen, einsetzen",
        slug: "kasza-buchweizen",
        excerpt:
          "Buchweizen in DE: Einkauf, Vorbereitung, Gołąbki-Füllung und Beilage — Lexikon ohne Rezept-Doppelung.",
        seoTitle: "Kasza gryczana Guide | Buchweizen | Alemniam",
        seoDescription:
          "Kasza gryczana: Polenladen vs Supermarkt, kochen ohne Matsch, Gołąbki und Kasza z grochem — ruhig und praxisnah.",
        body: bodyKaszaDe.trim(),
      },
      pl: {
        title: "Kasza gryczana: kupić, ugotować, użyć",
        slug: "kasza-gryczana",
        excerpt:
          "Gryka w DE: sklep, przygotowanie, farsz gołąbkowy i dodatek — leksykon bez powielania przepisu.",
        seoTitle: "Kasza gryczana przepis przewodnik | Alemniam",
        seoDescription:
          "Kasza gryczana: sklep polski vs supermarket, gotowanie bez papki, gołąbki i kasza z grochem — spokojnie i praktycznie.",
        body: bodyKaszaPl.trim(),
      },
    },
    publishedAt: "2026-07-26T11:00:00.000Z",
    updatedAt: "2026-07-26T11:00:00.000Z",
  },
];
