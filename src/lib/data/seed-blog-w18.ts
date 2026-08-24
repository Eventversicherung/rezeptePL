import type { BlogPost } from "@/types/content";
import {
  bodyGrillDe,
  bodyImieninyDe,
  bodyKomuniaDe,
  bodyMohnDe,
  bodySernikKaesekuchenDe,
} from "./blog-bodies-w18-de";
import {
  bodyGrillPl,
  bodyImieninyPl,
  bodyKomuniaPl,
  bodyMohnPl,
  bodySernikKaesekuchenPl,
} from "./blog-bodies-w18-pl";

export const seedBlogPostsW18: BlogPost[] = [
  {
    id: "post-grill",
    status: "published",
    postType: "culture",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/blog/post-grill/da817592-51cf-47ce-a735-7334310f925f.webp",
    siloIds: ["occasion", "culture"],
    relatedRecipeIds: [
      "recipe-kaszanka",
      "recipe-oscypek",
      "recipe-leczo",
      "recipe-zeberka",
      "recipe-surowka",
      "recipe-ogorki-kiszone",
      "recipe-ogorki-malosolne",
    ],
    relatedPostIds: [
      "post-kielbasa-arten",
      "post-oscypek",
      "post-polenladen",
      "post-sonntagsessen",
    ],
    relatedProductIds: [],
    clusterIds: ["occasion-grill"],
    translations: {
      de: {
        title: "Polnisch grillen in DE: Kiełbasa, Oscypek, Beilagen",
        slug: "polnisch-grillen",
        excerpt:
          "Auf Balkon und im Garten reicht eine gute Kiełbasa. Dazu kommen ehrlich benannter Oscypek und eine kühle, saure Beilage, ohne Show und ohne Chaos.",
        seoTitle: "Polnisch grillen | Kiełbasa und Oscypek | Alemniam",
        seoDescription:
          "Polnisch grillen in Deutschland: Kiełbasa, Oscypek, Surówka, Kiszone. Speiseplan für Balkon und Garten, bilingual, ohne Rezeptduplikat.",
        body: bodyGrillDe.trim(),
      },
      pl: {
        title: "Grill po polsku w DE: kiełbasa, oscypek, dodatki",
        slug: "grill-po-polsku",
        excerpt:
          "Na balkonie i w ogrodzie wystarczy dobra kiełbasa. Obok stoi uczciwie nazwany oscypek i jeden chłodny, kwaśny dodatek, bez pokazu i bez chaosu.",
        seoTitle: "Grill po polsku | Kiełbasa i oscypek | Alemniam",
        seoDescription:
          "Grill po polsku w Niemczech: kiełbasa, oscypek, surówka, kiszone. Plan menu na balkon i ogród, dwujęzycznie, bez duplikatu przepisu.",
        body: bodyGrillPl.trim(),
      },
    },
    publishedAt: "2026-08-23T11:00:00.000Z",
    updatedAt: "2026-08-23T11:00:00.000Z",
  },
  {
    id: "post-imieniny",
    status: "published",
    postType: "culture",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/blog/post-imieniny/6776eab8-3207-4057-b058-0dcbf26f5629.webp",
    siloIds: ["occasion", "culture"],
    relatedRecipeIds: [
      "recipe-sernik",
      "recipe-szarlotka",
      "recipe-wuzetka",
      "recipe-pasztet",
      "recipe-jajka-faszerowane",
      "recipe-placki",
    ],
    relatedPostIds: [
      "post-sernik-kaesekuchen",
      "post-sonntagsessen",
      "post-twarog",
      "post-polenladen",
    ],
    relatedProductIds: [],
    clusterIds: ["occasion-imieniny"],
    translations: {
      de: {
        title: "Imieniny Speiseplan: Kaffee, ein Kuchen, etwas Herzhaftes",
        slug: "imieniny-speiseplan",
        excerpt:
          "Am Namenstag in Deutschland reichen Kaffee, ein guter Kuchen und etwas Herzhaftes. Der Tag bleibt kleiner als ein Geburtstag und passt in eine Wohnung nach der Arbeit.",
        seoTitle: "Imieniny Speiseplan | Namenstag in DE | Alemniam",
        seoDescription:
          "Imieniny Speiseplan für Deutschland: Sernik oder Szarlotka, Pasztet, Kaffee. Machbar, bilingual, ohne Eventstress.",
        body: bodyImieninyDe.trim(),
      },
      pl: {
        title: "Menu na imieniny: kawa, jedno ciasto, coś słonego",
        slug: "menu-imieniny",
        excerpt:
          "Na imieniny w Niemczech wystarczą kawa, jedno dobre ciasto i coś na słono. Dzień zostaje mniejszy niż urodziny i mieści się w mieszkaniu po pracy.",
        seoTitle: "Menu na imieniny | Imieniny w DE | Alemniam",
        seoDescription:
          "Menu na imieniny w Niemczech: sernik albo szarlotka, pasztet, kawa. Wykonalne, dwujęzycznie, bez stresu wydarzenia.",
        body: bodyImieninyPl.trim(),
      },
    },
    publishedAt: "2026-08-23T11:10:00.000Z",
    updatedAt: "2026-08-23T11:10:00.000Z",
  },
  {
    id: "post-mohn",
    status: "published",
    postType: "lexicon",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/blog/post-mohn/18a78e53-fca6-4358-bd35-f51f953d1ab1.webp",
    siloIds: ["ingredient"],
    relatedRecipeIds: [
      "recipe-makowiec",
      "recipe-makaron-z-makiem",
      "recipe-kutia",
    ],
    relatedPostIds: [
      "post-makowiec-technik",
      "post-wigilia",
      "post-polenladen",
      "post-ersatzprodukte-de",
    ],
    relatedProductIds: [],
    clusterIds: ["occasion-wigilia"],
    translations: {
      de: {
        title: "Mohn in Deutschland: kaufen, mahlen, einsetzen",
        slug: "mohn-deutschland",
        excerpt:
          "Für Makowiec, Makaron z makiem und Kutia brauchst du frischen Blaumohn, ganz oder gemahlen. Im Polenladen oder im Supermarkt entscheiden Geruch und Datum, nicht das Etikett allein.",
        seoTitle: "Mohn kaufen DE | Makowiec und Kutia | Alemniam",
        seoDescription:
          "Mohn in Deutschland kaufen und einsetzen: ganz oder gemahlen, Frische, Lagerung, Makowiec, Kutia. Praxisnah, bilingual, ohne Rezeptduplikat.",
        body: bodyMohnDe.trim(),
      },
      pl: {
        title: "Mak w Niemczech: kupić, zmielić, użyć",
        slug: "mak-w-niemczech",
        excerpt:
          "Do makowca, makaronu z makiem i kutii potrzebujesz świeżego maku niebieskiego, całego albo mielonego. W sklepie polskim albo w supermarkecie decydują zapach i data, nie sama etykieta.",
        seoTitle: "Mak w Niemczech | Makowiec i kutia | Alemniam",
        seoDescription:
          "Mak w Niemczech: cały albo mielony, świeżość, przechowywanie, makowiec, kutia. Praktycznie, dwujęzycznie, bez duplikatu przepisu.",
        body: bodyMohnPl.trim(),
      },
    },
    publishedAt: "2026-08-23T11:20:00.000Z",
    updatedAt: "2026-08-23T11:20:00.000Z",
  },
  {
    id: "post-sernik-kaesekuchen",
    status: "published",
    postType: "lexicon",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/blog/post-sernik-kaesekuchen/fab773e6-6d86-4041-9230-ace052815423.webp",
    siloIds: ["ingredient", "dishFamily"],
    relatedRecipeIds: [
      "recipe-sernik",
      "recipe-szarlotka",
      "recipe-wuzetka",
      "recipe-makaron-z-serem",
    ],
    relatedPostIds: [
      "post-twarog",
      "post-imieniny",
      "post-wielkanoc",
      "post-smietana-schmand",
    ],
    relatedProductIds: [],
    clusterIds: ["occasion-imieniny", "occasion-wielkanoc"],
    translations: {
      de: {
        title: "Sernik vs. Käsekuchen: Twaróg, Quark, warum anders",
        slug: "sernik-vs-kaesekuchen",
        excerpt:
          "Warum polnischer Sernik anders schmeckt als deutscher Käsekuchen: Twaróg statt Speisequark, Boden, Risse, Imieniny und wann Backen sich lohnt.",
        seoTitle: "Sernik vs Käsekuchen | Twaróg Guide | Alemniam",
        seoDescription:
          "Sernik und Käsekuchen unterscheiden: Twaróg, Speisequark, Risse, Imieniny. Lexikon neben dem Rezept, bilingual, für Küchen in DE.",
        body: bodySernikKaesekuchenDe.trim(),
      },
      pl: {
        title: "Sernik a Käsekuchen: twaróg, quark, dlaczego inaczej",
        slug: "sernik-a-kaesekuchen",
        excerpt:
          "Dlaczego polski sernik smakuje inaczej niż niemiecki Käsekuchen: twaróg zamiast Speisequark, spód, pęknięcia, imieniny i kiedy pieczenie ma sens.",
        seoTitle: "Sernik a Käsekuchen | Twaróg | Alemniam",
        seoDescription:
          "Sernik i Käsekuchen: twaróg, Speisequark, pęknięcia, imieniny. Leksykon obok przepisu, dwujęzycznie, dla kuchni w DE.",
        body: bodySernikKaesekuchenPl.trim(),
      },
    },
    publishedAt: "2026-08-23T11:30:00.000Z",
    updatedAt: "2026-08-23T11:30:00.000Z",
  },
  {
    id: "post-komunia",
    status: "published",
    postType: "culture",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/blog/post-komunia/bf7c4c51-51a7-4d20-833f-6400f3a9753d.webp",
    siloIds: ["occasion", "culture"],
    relatedRecipeIds: [
      "recipe-pasztet",
      "recipe-jajka-faszerowane",
      "recipe-salatka-jarzynowa",
      "recipe-galareta",
      "recipe-sernik",
      "recipe-szarlotka",
    ],
    relatedPostIds: [
      "post-wielkanoc",
      "post-imieniny",
      "post-sonntagsessen",
      "post-polenladen",
    ],
    relatedProductIds: [],
    clusterIds: ["occasion-komunia"],
    translations: {
      de: {
        title: "Kommunion Speiseplan: ruhiges Buffet in DE",
        slug: "kommunion-speiseplan",
        excerpt:
          "Nach der Kommunion in Deutschland hält ein ruhiges, kaltes Buffet den Tag besser als ein warmes Menü. Pastete, Eier, Salat, ein Kuchen und geteilte Arbeit halten den Familientisch freundlich.",
        seoTitle: "Kommunion Speiseplan | Buffet in DE | Alemniam",
        seoDescription:
          "Kommunion Buffet in Deutschland: Pasztet, Eier, Salat, ein Kuchen. Speiseplan für gemischte Familien, bilingual, ohne Menümarathon.",
        body: bodyKomuniaDe.trim(),
      },
      pl: {
        title: "Menu na komunię: spokojny bufet w DE",
        slug: "menu-komunia",
        excerpt:
          "Po komunii w Niemczech spokojny, zimny bufet trzyma dzień lepiej niż ciepłe menu. Pasztet, jajka, sałatka, jedno ciasto i podział pracy utrzymują stół rodzinny przyjaznym.",
        seoTitle: "Menu na komunię | Bufet w DE | Alemniam",
        seoDescription:
          "Bufet komunijny w Niemczech: pasztet, jajka, sałatka, jedno ciasto. Plan menu dla mieszanych rodzin, dwujęzycznie, bez maratonu dań.",
        body: bodyKomuniaPl.trim(),
      },
    },
    publishedAt: "2026-08-23T11:40:00.000Z",
    updatedAt: "2026-08-23T11:40:00.000Z",
  },
];
