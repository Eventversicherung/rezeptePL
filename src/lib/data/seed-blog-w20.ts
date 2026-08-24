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
          "In Deutschland entscheidet die Type auf der Tüte mit. Type 550 hält Pierogi und Pączki, Kartoffelstärke die śląskie, und reine 405 reißt oft an der Naht.",
        seoTitle: "Mehltypen DE | 405 und 550 | Alemniam",
        seoDescription:
          "Welche Mehlsorte in Deutschland in Pierogi, Kluski und Pączki gehört. Type 405, 550 und Kartoffelstärke erklärt, ohne Rezeptmengen.",
        body: bodyMehltypenDe.trim(),
      },
      pl: {
        title: "Typy mąki w DE: 405, 550, skrobia",
        slug: "typy-maki-w-niemczech",
        excerpt:
          "W Niemczech typ na worku decyduje razem z ilością. Typ 550 utrzymuje pierogi i pączki, skrobia ziemniaczana śląskie, a sama 405 często pęka na szwie.",
        seoTitle: "Typy mąki DE | 405 i 550 | Alemniam",
        seoDescription:
          "Jaką mąkę w Niemczech brać do pierogów, klusek i pączków. Typ 405, 550 i skrobia ziemniaczana obok przepisów, bez ilości.",
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
          "Welche Steinpilze sich lohnen, wie du sie einweichst und warum das dunkle Wasser in den Topf gehört, nicht in den Abfluss.",
        seoTitle: "Getrocknete Pilze | Borowiki Guide | Alemniam",
        seoDescription:
          "Getrocknete Steinpilze in Deutschland kaufen, einweichen und als Brühe nutzen. Lexikon neben Uszka und Pilzsuppe, auf Deutsch und Polnisch.",
        body: bodyPilzeDe.trim(),
      },
      pl: {
        title: "Suszone grzyby: borowiki, moczenie, wywar",
        slug: "suszone-grzyby",
        excerpt:
          "Które borowiki warto kupić, jak je namoczyć i dlaczego ciemna woda idzie do garnka, nie do zlewu.",
        seoTitle: "Suszone grzyby | Borowiki | Alemniam",
        seoDescription:
          "Suszone borowiki w Niemczech kupić, namoczyć i użyć jako wywar. Leksykon obok uszek i zupy grzybowej, po niemiecku i polsku.",
        body: bodyPilzePl.trim(),
      },
    },
    publishedAt: "2026-08-23T16:10:00.000Z",
    updatedAt: "2026-08-23T21:30:00.000Z",
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
          "Polnischer Majonez bindet die Sałatka anders als deutsche Mayonnaise oder Remoulade. Welches Glas in die Schüssel gehört und wann Joghurt sie verändert.",
        seoTitle: "Majonez kaufen DE | Sałatka Guide | Alemniam",
        seoDescription:
          "Majonez in Deutschland für Sałatka jarzynowa und gefüllte Eier. Was Remoulade nicht ersetzt und wann Joghurt den Charakter der Schüssel ändert.",
        body: bodyMajonezDe.trim(),
      },
      pl: {
        title: "Majonez w DE: remulada, jogurt, sałatka",
        slug: "majonez-w-niemczech",
        excerpt:
          "Polski majonez wiąże sałatkę jarzynową inaczej niż niemiecki majonez albo remulada. Który słoik należy do miski i kiedy jogurt ją zmienia.",
        seoTitle: "Majonez w Niemczech | Sałatka | Alemniam",
        seoDescription:
          "Majonez w Niemczech do sałatki jarzynowej i jajek faszerowanych. Czym remulada nie zastąpi słoika i kiedy jogurt zmienia charakter miski.",
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
          "Nach der Schicht braucht der Tisch 25 Minuten, nicht den Sonntag. Leczo, Zapiekanka oder Eier aus Polenladen und Supermarkt.",
        seoTitle: "Nach der Schicht | 25 Minuten | Alemniam",
        seoDescription:
          "Was nach der Schicht in 25 Minuten satt macht. Leczo, Zapiekanka und Kaszanka aus Polenladen und REWE, ohne Sonntagsbraten.",
        body: bodySchichtDe.trim(),
      },
      pl: {
        title: "Po zmianie: 25 minut z dwóch siatek",
        slug: "po-zmianie",
        excerpt:
          "Po zmianie stół potrzebuje 25 minut, nie niedzieli. Leczo, zapiekanka albo jajka ze sklepu polskiego i supermarketu.",
        seoTitle: "Po zmianie | 25 minut | Alemniam",
        seoDescription:
          "Co po zmianie syci w 25 minut. Leczo, zapiekanka i kaszanka ze sklepu polskiego i REWE, bez niedzielnego kotleta.",
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
          "Zwischen dem 26. und 30. Dezember essen wir Reste, nicht ein zweites Fest. Barszcz, Uszka und Karpfen prüfen, Sylwester später planen.",
        seoTitle: "Zwischen den Feiertagen | Reste | Alemniam",
        seoDescription:
          "Was nach der Wigilia noch auf den Tisch darf. Reste, Hygiene und Freezer vom 26. bis 30. Dezember, ohne das Silvestermenü vorwegzunehmen.",
        body: bodyZwischenFeiertagenDe.trim(),
      },
      pl: {
        title: "Między świętami: resztki bez drugiego święta",
        slug: "miedzy-swietami",
        excerpt:
          "Od 26 do 30 grudnia jesz to, co jeszcze dobre, nie drugie święto. Barszcz, uszka i karp do sprawdzenia, sylwester osobno.",
        seoTitle: "Między świętami | Resztki | Alemniam",
        seoDescription:
          "Co po Wigilii jeszcze może na stół. Resztki, higiena i mrożenie od 26 do 30 grudnia, bez wyprzedzania menu sylwestrowego.",
        body: bodyZwischenFeiertagenPl.trim(),
      },
    },
    publishedAt: "2026-08-23T16:40:00.000Z",
    updatedAt: "2026-08-23T16:40:00.000Z",
  },
];
