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
    relatedRecipeIds: ["recipe-schabowy", "recipe-kotlet-mielony"],
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
    relatedRecipeIds: ["recipe-barszcz", "recipe-uszka", "recipe-pierogi-cabbage"],
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
        title: "Barszcz czerwony richtig kochen: klar, ruhig, wigilijny",
        slug: "barszcz-technik",
        excerpt:
          "Buraki, Klarheit, Śmietana am Teller und Wigilia-Logik — Technik für klaren Barszcz in DE.",
        seoTitle: "Barszcz klar kochen | Technik Guide | Alemniam",
        seoDescription:
          "Barszcz Technik: Rote Bete, Brühe, Abseihen, Aufwärmen. Ergänzt Suppen-Überblick und Rezept — machbar für Wigilia in DE.",
        body: bodyBarszczTechnikDe.trim(),
      },
      pl: {
        title: "Jak ugotować barszcz czerwony: klarowny, spokojny, wigilijny",
        slug: "jak-ugotowac-barszcz",
        excerpt:
          "Buraki, klarowność, śmietana w misce i logika Wigilii — technika barszczu w DE.",
        seoTitle: "Jak ugotować barszcz czerwony | Poradnik techniki | Alemniam",
        seoDescription:
          "Technika barszczu: buraki, wywar, przecieranie, podgrzewanie. Uzupełnia przegląd zup i przepis — na Wigilię w DE.",
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
        title: "Placki ziemniaczane: knusprig, gleichmäßig, ohne Matsch",
        slug: "placki-guide",
        excerpt:
          "Kartoffeln, Abtropfen, Pfanne und Servieren — Pillar-Guide für Placki in DE, ohne Rezept zu duplizieren.",
        seoTitle: "Placki ziemniaczane Guide | Pillar | Alemniam",
        seoDescription:
          "Placki Guide: Kartoffelmasse, Braten, Śmietana und Gulasch. Ergänzt Rezept und Gusseisen-Kaufberatung — ruhig und praxisnah.",
        body: bodyPlackiGuideDe.trim(),
      },
      pl: {
        title: "Placki ziemniaczane: chrupiące, równe, bez papki",
        slug: "placki-przewodnik",
        excerpt:
          "Ziemniaki, odcedzanie, patelnia i podawanie — przewodnik po plackach w DE, bez powielania przepisu.",
        seoTitle: "Placki ziemniaczane przepis przewodnik | Alemniam",
        seoDescription:
          "Przewodnik placki: masa, smażenie, śmietana i gulasz. Uzupełnia przepis i patelnię żeliwną — spokojnie i praktycznie.",
        body: bodyPlackiGuidePl.trim(),
      },
    },
    publishedAt: "2026-07-27T11:00:00.000Z",
    updatedAt: "2026-07-27T11:00:00.000Z",
  },
];
