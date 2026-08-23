import type { BlogPost } from "@/types/content";
import {
  bodyMajonezDe,
  bodyMehltypenDe,
  bodyPilzeDe,
  bodySchichtDe,
  bodyZwischenFeiertagenDe,
} from "./blog-bodies-w20-de";
import {
  bodyMajonezPl,
  bodyMehltypenPl,
  bodyPilzePl,
  bodySchichtPl,
  bodyZwischenFeiertagenPl,
} from "./blog-bodies-w20-pl";

export const seedBlogPostsW20: BlogPost[] = [
  {
    id: "post-mehltypen",
    status: "published",
    postType: "lexicon",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/blog/post-mehltypen/98471951-2d5b-47f1-a018-574899971bec.webp",
    siloIds: ["ingredient", "technique"],
    relatedRecipeIds: [
      "recipe-pierogi",
      "recipe-kluski-slaskie",
      "recipe-kopytka",
      "recipe-kluski-kladzione",
      "recipe-paczki",
      "recipe-makowiec",
    ],
    relatedPostIds: [
      "post-pierogi-teig",
      "post-kluski",
      "post-paczek-technik",
      "post-makowiec-technik",
    ],
    relatedProductIds: [],
    clusterIds: ["technique-teig"],
    translations: {
      de: {
        title: "Mehltypen in DE: 405, 550, Stärke",
        slug: "mehltypen-deutschland",
        excerpt:
          "Welche Tüte für Pierogi, Kluski und Pączki: Type 405, 550, Kartoffelstärke, typische Fehler in deutschen Küchen.",
        seoTitle: "Mehltypen DE | 405 und 550 | Alemniam",
        seoDescription:
          "Mehl in Deutschland: Type 405, 550, Kartoffelstärke. Lexikon für Pierogi, Kluski, Pączki, bilingual, ohne Rezeptduplikat.",
        body: bodyMehltypenDe.trim(),
      },
      pl: {
        title: "Typy mąki w DE: 405, 550, skrobia",
        slug: "typy-maki-w-niemczech",
        excerpt:
          "Który worek na pierogi, kluski i pączki: typ 405, 550, skrobia ziemniaczana, typowe błędy w niemieckich kuchniach.",
        seoTitle: "Typy mąki DE | 405 i 550 | Alemniam",
        seoDescription:
          "Mąka w Niemczech: typ 405, 550, skrobia. Leksykon na pierogi, kluski, pączki, dwujęzycznie, bez duplikatu przepisu.",
        body: bodyMehltypenPl.trim(),
      },
    },
    publishedAt: "2026-08-23T16:00:00.000Z",
    updatedAt: "2026-08-23T16:00:00.000Z",
  },
  {
    id: "post-pilze",
    status: "published",
    postType: "lexicon",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/blog/post-pilze/a9611279-f01a-4f5e-9566-f6e5e2b58668.webp",
    siloIds: ["ingredient", "technique"],
    relatedRecipeIds: [
      "recipe-zupa-grzybowa",
      "recipe-uszka",
      "recipe-barszcz",
      "recipe-rosol",
      "recipe-grzyby-marynowane",
    ],
    relatedPostIds: [
      "post-wigilia",
      "post-polnische-suppen",
      "post-barszcz-technik",
      "post-rosol-technik",
    ],
    relatedProductIds: [],
    clusterIds: ["occasion-wigilia", "technique-bulion"],
    translations: {
      de: {
        title: "Getrocknete Pilze: Borowiki, Einweichen, Brühe",
        slug: "getrocknete-pilze",
        excerpt:
          "Steinpilze kaufen, einweichen, Brühe sieben: was Uszka, Barszcz und Zupa grzybowa brauchen, und warum das Glas ein anderes Gericht ist.",
        seoTitle: "Getrocknete Pilze | Borowiki Guide | Alemniam",
        seoDescription:
          "Suszone borowiki in Deutschland: Packung, Einweichen, Brühe. Lexikon neben Uszka und Pilzsuppe, bilingual.",
        body: bodyPilzeDe.trim(),
      },
      pl: {
        title: "Suszone grzyby: borowiki, moczenie, wywar",
        slug: "suszone-grzyby",
        excerpt:
          "Borowiki kupić, namoczyć, wywar przecedzić: czego potrzebują uszka, barszcz i zupa grzybowa, i dlaczego słoik to inne danie.",
        seoTitle: "Suszone grzyby | Borowiki | Alemniam",
        seoDescription:
          "Suszone borowiki w Niemczech: opakowanie, moczenie, wywar. Leksykon obok uszek i zupy grzybowej, dwujęzycznie.",
        body: bodyPilzePl.trim(),
      },
    },
    publishedAt: "2026-08-23T16:10:00.000Z",
    updatedAt: "2026-08-23T16:10:00.000Z",
  },
  {
    id: "post-majonez",
    status: "published",
    postType: "lexicon",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/blog/post-majonez/067ea59c-b63e-4d42-9280-daa5e3b7510b.webp",
    siloIds: ["ingredient"],
    relatedRecipeIds: [
      "recipe-salatka-jarzynowa",
      "recipe-jajka-faszerowane",
      "recipe-tatar",
    ],
    relatedPostIds: [
      "post-smietana-schmand",
      "post-wielkanoc",
      "post-imieniny",
      "post-polenladen",
    ],
    relatedProductIds: [],
    clusterIds: ["occasion-imieniny", "occasion-wielkanoc"],
    translations: {
      de: {
        title: "Majonez in DE: Remoulade, Joghurt, Salat",
        slug: "majonez-deutschland",
        excerpt:
          "Welches Glas die Sałatka bindet: polnischer Majonez, deutsche Mayonnaise, Remoulade, Joghurt. Parallel zu Śmietana.",
        seoTitle: "Majonez kaufen DE | Sałatka Guide | Alemniam",
        seoDescription:
          "Majonez in Deutschland: Glas, Remoulade, Joghurt. Lexikon für Sałatka und Eier, bilingual, ohne Rezeptduplikat.",
        body: bodyMajonezDe.trim(),
      },
      pl: {
        title: "Majonez w DE: remulada, jogurt, sałatka",
        slug: "majonez-w-niemczech",
        excerpt:
          "Który słoik wiąże sałatkę: polski majonez, niemiecki majonez, remulada, jogurt. Równolegle do śmietany.",
        seoTitle: "Majonez w Niemczech | Sałatka | Alemniam",
        seoDescription:
          "Majonez w Niemczech: słoik, remulada, jogurt. Leksykon do sałatki i jajek, dwujęzycznie, bez duplikatu przepisu.",
        body: bodyMajonezPl.trim(),
      },
    },
    publishedAt: "2026-08-23T16:20:00.000Z",
    updatedAt: "2026-08-23T16:20:00.000Z",
  },
  {
    id: "post-schicht",
    status: "published",
    postType: "culture",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/blog/post-schicht/602c2a17-0451-485d-b241-7e6ce88a1c73.webp",
    siloIds: ["culture"],
    relatedRecipeIds: [
      "recipe-leczo",
      "recipe-zapiekanka",
      "recipe-nalesniki",
      "recipe-placki",
      "recipe-kaszanka",
    ],
    relatedPostIds: [
      "post-polenladen",
      "post-sonntagsessen",
      "post-kielbasa-arten",
      "post-twarog",
    ],
    relatedProductIds: [],
    clusterIds: [],
    translations: {
      de: {
        title: "Nach der Schicht: 25 Minuten aus zwei Tüten",
        slug: "nach-der-schicht",
        excerpt:
          "Feierabend ohne Sonntag: Leczo, Zapiekanka, Kaszanka, Eier. Was Polenladen und REWE in 25 Minuten tragen.",
        seoTitle: "Nach der Schicht | 25 Minuten | Alemniam",
        seoDescription:
          "Polnisch nach der Schicht: Leczo, Zapiekanka, Kaszanka. Alltagsspeiseplan aus Polenladen und REWE, bilingual.",
        body: bodySchichtDe.trim(),
      },
      pl: {
        title: "Po zmianie: 25 minut z dwóch siatek",
        slug: "po-zmianie",
        excerpt:
          "Wieczór bez niedzieli: leczo, zapiekanka, kaszanka, jajka. Co sklep polski i REWE niosą w 25 minut.",
        seoTitle: "Po zmianie | 25 minut | Alemniam",
        seoDescription:
          "Po polsku po zmianie: leczo, zapiekanka, kaszanka. Plan codzienny ze sklepu polskiego i REWE, dwujęzycznie.",
        body: bodySchichtPl.trim(),
      },
    },
    publishedAt: "2026-08-23T16:30:00.000Z",
    updatedAt: "2026-08-23T16:30:00.000Z",
  },
  {
    id: "post-zwischen-feiertagen",
    status: "published",
    postType: "culture",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/blog/post-zwischen-feiertagen/4b7246ee-c4e0-4903-88dd-1aa58512fc4b.webp",
    siloIds: ["occasion", "culture"],
    relatedRecipeIds: [
      "recipe-barszcz",
      "recipe-uszka",
      "recipe-karp",
      "recipe-sledz",
      "recipe-kutia",
      "recipe-kompot-z-suszu",
    ],
    relatedPostIds: [
      "post-wigilia",
      "post-sylwester",
      "post-hering",
      "post-freezer-meal-prep",
    ],
    relatedProductIds: [],
    clusterIds: ["occasion-wigilia"],
    translations: {
      de: {
        title: "Zwischen den Feiertagen: Reste ohne zweites Fest",
        slug: "zwischen-den-feiertagen",
        excerpt:
          "26. bis 30. Dezember: Barszcz, Uszka, Karpfenreste, Kompot. Aufessen, einfrieren, Sylwester nicht vorwegnehmen.",
        seoTitle: "Zwischen den Feiertagen | Reste | Alemniam",
        seoDescription:
          "Nach der Wigilia: Reste, Hygiene, Freezer. Speiseplan 26. bis 30. Dezember, bilingual, ohne Sylwester-Menü.",
        body: bodyZwischenFeiertagenDe.trim(),
      },
      pl: {
        title: "Między świętami: resztki bez drugiego święta",
        slug: "miedzy-swietami",
        excerpt:
          "26 do 30 grudnia: barszcz, uszka, resztki karpia, kompot. Zjadać, mrozić, nie wyprzedzać sylwestra.",
        seoTitle: "Między świętami | Resztki | Alemniam",
        seoDescription:
          "Po Wigilii: resztki, higiena, mrożenie. Plan 26 do 30 grudnia, dwujęzycznie, bez menu sylwestrowego.",
        body: bodyZwischenFeiertagenPl.trim(),
      },
    },
    publishedAt: "2026-08-23T16:40:00.000Z",
    updatedAt: "2026-08-23T16:40:00.000Z",
  },
];
