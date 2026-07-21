import type { BlogPost } from "@/types/content";
import {
  bodyBarszczTechnikDe,
  bodyPanierenDe,
  bodyPlackiGuideDe,
} from "./blog-bodies-w3c-de";
import {
  bodyBarszczTechnikPl,
  bodyPanierenPl,
  bodyPlackiGuidePl,
} from "./blog-bodies-w3c-pl";

export const seedBlogPostsW3c: BlogPost[] = [
  {
    id: "post-panieren",
    status: "published",
    postType: "guide",
    coverImage:
      "https://images.unsplash.com/photo-1604908177528-946fc9d68799?w=1600&q=80",
    siloIds: ["technique"],
    relatedRecipeIds: [
      "recipe-schabowy",
      "recipe-kotlet-mielony",
      "recipe-mizeria",
      "recipe-klopsy",
    ],
    relatedPostIds: [
      "post-gusseisen",
      "post-sonntagsessen",
      "post-wielkanoc",
      "post-ersatzprodukte-de",
    ],
    relatedProductIds: ["aff-cast-iron"],
    clusterIds: ["technique-panieren", "occasion-niedziela"],
    translations: {
      de: {
        title: "Panieren wie beim Schabowy: knusprig, saftig, wiederholbar",
        slug: "panieren-schabowy",
        excerpt:
          "Dreifach-Panade, Fleisch vorbereiten, braten und typische Fehler — Technik für Kotlet schabowy in DE.",
        seoTitle: "Panieren Schabowy Technik | Guide | Alemniam",
        seoDescription:
          "Panieren für Schabowy: Mehl, Ei, Semmelbrösel, Hitze und Ruhe. Technik-Guide ohne Rezept-Doppelung — für Sonntag und Wielkanoc.",
        body: bodyPanierenDe.trim(),
      },
      pl: {
        title: "Panierowanie jak do schabowego: chrupiąco, soczyście, powtarzalnie",
        slug: "panierowanie-kotlet",
        excerpt:
          "Panierka w trzech krokach, mięso, smażenie i typowe błędy — technika kotleta schabowego w DE.",
        seoTitle: "Panierowanie kotlet schabowy | Poradnik | Alemniam",
        seoDescription:
          "Panierowanie schabowego: mąka, jajko, bułka tarta, temperatura i odpoczynek. Poradnik techniki bez powielania przepisu.",
        body: bodyPanierenPl.trim(),
      },
    },
    publishedAt: "2026-07-27T09:00:00.000Z",
    updatedAt: "2026-07-27T09:00:00.000Z",
  },
  {
    id: "post-barszcz-technik",
    status: "published",
    postType: "guide",
    coverImage:
      "https://images.unsplash.com/photo-1608818580423-ccfb08a254af?w=1600&q=80",
    siloIds: ["technique"],
    relatedRecipeIds: [
      "recipe-barszcz",
      "recipe-uszka",
      "recipe-krokiety",
      "recipe-pierogi-cabbage",
      "recipe-botwinka",
    ],
    relatedPostIds: [
      "post-polnische-suppen",
      "post-smietana-schmand",
      "post-wigilia",
      "post-polenladen",
    ],
    relatedProductIds: [],
    clusterIds: ["technique-bulion", "occasion-wigilia"],
    translations: {
      de: {
        title: "Barszcz klar halten: Technik neben dem Rezept",
        slug: "barszcz-technik",
        excerpt:
          "Klarheit, Buraki in DE, Wigilia-Logik — Mengen und Schritte im Barszcz-Rezept.",
        seoTitle: "Barszcz Technik | Klare Brühe | Alemniam",
        seoDescription:
          "Barszcz-Technik: Klarheit, Einkauf, Wigilia. Kochen mit Mengen im Barszcz-Rezept.",
        body: bodyBarszczTechnikDe.trim(),
      },
      pl: {
        title: "Jak utrzymać klarowny barszcz: technika obok przepisu",
        slug: "jak-ugotowac-barszcz",
        excerpt:
          "Klarowność, buraki w DE, logika Wigilii — ilości i kroki w przepisie na barszcz.",
        seoTitle: "Barszcz technika | Klarowny wywar | Alemniam",
        seoDescription:
          "Technika barszczu: klarowność, zakupy, Wigilia. Gotowanie z ilościami w przepisie na barszcz.",
        body: bodyBarszczTechnikPl.trim(),
      },
    },
    publishedAt: "2026-07-27T10:00:00.000Z",
    updatedAt: "2026-07-27T10:00:00.000Z",
  },
  {
    id: "post-placki-guide",
    status: "published",
    postType: "guide",
    coverImage:
      "https://images.unsplash.com/photo-1573080496219-b83aa30643ae?w=1600&q=80",
    siloIds: ["dishFamily", "technique"],
    relatedRecipeIds: [
      "recipe-placki",
      "recipe-placki-cukinia",
      "recipe-placki-ser",
      "recipe-placki-jablka",
      "recipe-gulasz",
      "recipe-placek-po-wegiersku",
    ],
    relatedPostIds: [
      "post-gusseisen",
      "post-kasza",
      "post-sonntagsessen",
      "post-smietana-schmand",
    ],
    relatedProductIds: ["aff-cast-iron"],
    clusterIds: ["occasion-niedziela"],
    translations: {
      de: {
        title: "Placki ziemniaczane: vs. Reibekuchen und Varianten",
        slug: "placki-guide",
        excerpt:
          "Unterschied zu Reibekuchen, Varianten und typische Fehler — Kochen mit Mengen im Placki-Rezept.",
        seoTitle: "Placki Überblick | Varianten | Alemniam",
        seoDescription:
          "Placki vs. Reibekuchen, Varianten und Fehler. Mengen und Schritte im Placki-Rezept.",
        body: bodyPlackiGuideDe.trim(),
      },
      pl: {
        title: "Placki ziemniaczane: vs. Reibekuchen i warianty",
        slug: "placki-przewodnik",
        excerpt:
          "Różnica wobec Reibekuchen, warianty i typowe błędy — gotowanie z ilościami w przepisie na placki.",
        seoTitle: "Placki przegląd | Warianty | Alemniam",
        seoDescription:
          "Placki vs. Reibekuchen, warianty i błędy. Ilości i kroki w przepisie na placki.",
        body: bodyPlackiGuidePl.trim(),
      },
    },
    publishedAt: "2026-07-27T11:00:00.000Z",
    updatedAt: "2026-07-27T11:00:00.000Z",
  },
];
