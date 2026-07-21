import type { BlogPost } from "@/types/content";
import {
  bodyBigosGuideDe,
  bodyDutchOvenDe,
  bodyErsatzprodukteDe,
  bodyFleischwolfDe,
  bodyFreezerMealPrepDe,
  bodyGusseisenDe,
  bodyKielbasaArtenDe,
  bodyKiszenieDe,
  bodyPierogiFormenDe,
  bodyPierogiGuideDe,
  bodyPolnischeSuppenDe,
  bodyRosolTechnikDe,
  bodySmietanaSchmandDe,
  bodySonntagsessenDe,
  bodyTlustyCzwartekDe,
  bodyWielkanocDe,
  bodyZakwasZurekDe,
} from "./blog-bodies-wave2-de";
import {
  bodyBigosGuidePl,
  bodyDutchOvenPl,
  bodyErsatzproduktePl,
  bodyFleischwolfPl,
  bodyFreezerMealPrepPl,
  bodyGusseisenPl,
  bodyKielbasaArtenPl,
  bodyKiszeniePl,
  bodyPierogiFormenPl,
  bodyPierogiGuidePl,
  bodyPolnischeSuppenPl,
  bodyRosolTechnikPl,
  bodySmietanaSchmandPl,
  bodySonntagsessenPl,
  bodyTlustyCzwartekPl,
  bodyWielkanocPl,
  bodyZakwasZurekPl,
} from "./blog-bodies-wave2-pl";

const pierogiRecipes = [
  "recipe-pierogi",
  "recipe-pierogi-meat",
  "recipe-pierogi-cabbage",
  "recipe-pierogi-jagody",
] as const;

export const seedBlogPostsWave2: BlogPost[] = [
  {
    id: "post-pierogi-guide",
    status: "published",
    postType: "guide",
    coverImage:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1600&q=80",
    siloIds: ["dishFamily"],
    relatedRecipeIds: [...pierogiRecipes],
    relatedPostIds: [
      "post-pierogi-teig",
      "post-freezer-meal-prep",
      "post-teigmaschine",
      "post-pierogi-formen",
      "post-freezer-boxen",
    ],
    relatedProductIds: ["aff-pierogi-form", "aff-stand-mixer", "aff-rolling-pin"],
    clusterIds: ["technique-teig"],
    translations: {
      de: {
        title: "Pierogi-Guide: Varianten, Teig und Alltag in DE",
        slug: "pierogi-guide",
        excerpt:
          "Der Überblick zu Pierogi: welche Füllung wann, wie Teig und Freezer zusammenspielen, und welche Kaufberatungen wirklich helfen.",
        seoTitle: "Pierogi Rezept Guide | Überblick & Varianten | Alemniam",
        seoDescription:
          "Pierogi Rezept als Guide: Ruskie, Fleisch, Kraut, Teig, Freezer und Formen. Klarer Überblick für Haushalte in Deutschland.",
        body: bodyPierogiGuideDe.trim(),
      },
      pl: {
        title: "Przewodnik po pierogach: warianty, ciasto, codzienność w DE",
        slug: "przewodnik-pierogi",
        excerpt:
          "Przegląd pierogów: który farsz kiedy, jak łączą się ciasto i mrożenie oraz które poradniki zakupowe naprawdę pomagają.",
        seoTitle: "Pierogi przepis przewodnik | Warianty | Alemniam",
        seoDescription:
          "Pierogi przepis jako przewodnik: ruskie, mięso, kapusta, ciasto, mrożenie i foremki. Jasny przegląd dla domów w Niemczech.",
        body: bodyPierogiGuidePl.trim(),
      },
    },
    publishedAt: "2026-07-20T09:00:00.000Z",
    updatedAt: "2026-07-20T09:00:00.000Z",
  },
  {
    id: "post-freezer-meal-prep",
    status: "published",
    postType: "guide",
    coverImage:
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=1600&q=80",
    siloIds: ["technique"],
    relatedRecipeIds: [...pierogiRecipes],
    relatedPostIds: [
      "post-pierogi-guide",
      "post-pierogi-teig",
      "post-teigmaschine",
      "post-freezer-boxen",
    ],
    relatedProductIds: ["aff-freezer-boxes", "aff-pierogi-form"],
    clusterIds: ["technique-freezer"],
    translations: {
      de: {
        title: "Pierogi einfrieren: Batch, Boxen, später kochen",
        slug: "freezer-meal-prep",
        excerpt:
          "So frieren wir Pierogi richtig ein: Roh vs. vorgekocht, Abstände auf dem Blech, Beschriftung und Kochen aus dem Freezer.",
        seoTitle: "Pierogi einfrieren | Freezer Meal Prep | Alemniam",
        seoDescription:
          "Pierogi einfrieren Schritt für Schritt: Batch-Produktion, Boxen, Auftauen und Kochen. Ideal für Wigilia und Alltag in DE.",
        body: bodyFreezerMealPrepDe.trim(),
      },
      pl: {
        title: "Mrożenie pierogów: partie, pudełka, gotowanie później",
        slug: "mrozenie-pierogow",
        excerpt:
          "Jak mrozić pierogi poprawnie: surowe vs. podgotowane, odstępy na blacie, etykiety i gotowanie z zamrażarki.",
        seoTitle: "Mrożenie pierogów | Meal prep | Alemniam",
        seoDescription:
          "Mrożenie pierogów krok po kroku: produkcja partiami, pudełka, rozmrażanie i gotowanie. Na Wigilię i codzienność w DE.",
        body: bodyFreezerMealPrepPl.trim(),
      },
    },
    publishedAt: "2026-07-20T10:00:00.000Z",
    updatedAt: "2026-07-20T10:00:00.000Z",
  },
  {
    id: "post-pierogi-formen",
    status: "published",
    postType: "buying-guide",
    coverImage:
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=1600&q=80",
    siloIds: ["gear"],
    relatedRecipeIds: [...pierogiRecipes],
    relatedPostIds: [
      "post-pierogi-guide",
      "post-pierogi-teig",
      "post-teigmaschine",
    ],
    relatedProductIds: ["aff-pierogi-form", "aff-rolling-pin", "aff-stand-mixer"],
    clusterIds: ["technique-teig"],
    translations: {
      de: {
        title: "Beste Pierogi-Formen 2026: Kaufberatung & Test",
        slug: "pierogi-formen",
        excerpt:
          "Welche Pierogi-Form lohnt sich? Kriterien, Budget-/Allround-/Batch-Stufen und ehrliche Praxiskriterien für Haushalte in DE.",
        seoTitle: "Beste Pierogi-Formen 2026 | Test & Kaufberatung | Alemniam",
        seoDescription:
          "Beste Pierogi-Formen 2026: Größe, Material, Reinigung, Mengen. Empfehlungen Budget bis Family-Batch — mit Test-Slot.",
        body: bodyPierogiFormenDe.trim(),
      },
      pl: {
        title: "Najlepsze foremki do pierogów 2026: poradnik i test",
        slug: "foremki-do-pierogow",
        excerpt:
          "Która foremka do pierogów się opłaca? Kryteria, budżet/allround/batch i uczciwe kryteria praktyczne dla domów w DE.",
        seoTitle: "Najlepsze foremki do pierogów 2026 | Test | Alemniam",
        seoDescription:
          "Najlepsze foremki do pierogów 2026: rozmiar, materiał, mycie, ilości. Rekomendacje od budżetu do family-batch.",
        body: bodyPierogiFormenPl.trim(),
      },
    },
    publishedAt: "2026-07-20T11:00:00.000Z",
    updatedAt: "2026-07-20T11:00:00.000Z",
  },
  {
    id: "post-polnische-suppen",
    status: "published",
    postType: "guide",
    coverImage:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1600&q=80",
    siloIds: ["dishFamily"],
    relatedRecipeIds: [
      "recipe-zurek",
      "recipe-barszcz",
      "recipe-rosol",
      "recipe-ogorkowa",
      "recipe-kapusniak",
      "recipe-botwinka",
      "recipe-flaki",
      "recipe-zupa-pomidorowa",
      "recipe-zupa-grzybowa",
      "recipe-grochowka",
      "recipe-kluski-kladzione",
      "recipe-krupnik",
      "recipe-szczawiowa",
      "recipe-koperkowa",
    ],
    relatedPostIds: [
      "post-rosol-technik",
      "post-barszcz-technik",
      "post-zakwas-zurek",
      "post-sonntagsessen",
    ],
    relatedProductIds: ["aff-dutch-oven"],
    clusterIds: ["technique-bulion"],
    translations: {
      de: {
        title: "Polnische Suppen: Überblick für den Alltag",
        slug: "polnische-suppen",
        excerpt:
          "Żurek, Barszcz, Rosół und Co.: wann welche Suppe, wie Brühe trägt und welche Guides tiefer gehen.",
        seoTitle: "Polnische Suppen | Überblick & Rezepte | Alemniam",
        seoDescription:
          "Polnische Suppen erklärt: Żurek, Barszcz, Rosół. Überblick mit Links zu Technik, Zakwas und Rezepten — bilingual.",
        body: bodyPolnischeSuppenDe.trim(),
      },
      pl: {
        title: "Polskie zupy: przegląd na codzienność",
        slug: "polskie-zupy",
        excerpt:
          "Żurek, barszcz, rosół i więcej: kiedy która zupa, jak działa wywar i które poradniki idą głębiej.",
        seoTitle: "Polskie zupy | Przegląd i przepisy | Alemniam",
        seoDescription:
          "Polskie zupy: żurek, barszcz, rosół. Przegląd z linkami do techniki, zakwasu i przepisów — dwujęzycznie.",
        body: bodyPolnischeSuppenPl.trim(),
      },
    },
    publishedAt: "2026-07-21T09:00:00.000Z",
    updatedAt: "2026-07-21T09:00:00.000Z",
  },
  {
    id: "post-rosol-technik",
    status: "published",
    postType: "guide",
    coverImage:
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=1600&q=80",
    siloIds: ["technique"],
    relatedRecipeIds: [
      "recipe-rosol",
      "recipe-golabki",
      "recipe-bigos",
      "recipe-kluski-kladzione",
    ],
    relatedPostIds: [
      "post-polnische-suppen",
      "post-barszcz-technik",
      "post-sonntagsessen",
      "post-dutch-oven",
    ],
    relatedProductIds: ["aff-dutch-oven"],
    clusterIds: ["technique-bulion", "occasion-niedziela"],
    translations: {
      de: {
        title: "Rosół richtig kochen: klar, ruhig, wiederholbar",
        slug: "rosol-technik",
        excerpt:
          "Technik für klaren Rosół: Fleischwahl, Temperatur, Abschäumen, Gemüsezeitpunkt und Reste sinnvoll nutzen.",
        seoTitle: "Rosół richtig kochen | Technik Guide | Alemniam",
        seoDescription:
          "Rosół richtig kochen: klare Brühe ohne Trübung, Zeitplan und Tipps für Sonntag in Deutschland.",
        body: bodyRosolTechnikDe.trim(),
      },
      pl: {
        title: "Jak ugotować rosół: jasny, spokojny, powtarzalny",
        slug: "jak-ugotowac-rosol",
        excerpt:
          "Technika jasnego rosołu: mięso, temperatura, zbieranie piany, moment warzyw i sensowne wykorzystanie resztek.",
        seoTitle: "Jak ugotować rosół | Poradnik techniki | Alemniam",
        seoDescription:
          "Jak ugotować rosół: jasny wywar bez mętności, harmonogram i wskazówki na niedzielę w Niemczech.",
        body: bodyRosolTechnikPl.trim(),
      },
    },
    publishedAt: "2026-07-21T10:00:00.000Z",
    updatedAt: "2026-07-21T10:00:00.000Z",
  },
  {
    id: "post-zakwas-zurek",
    status: "published",
    postType: "lexicon",
    coverImage:
      "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=1600&q=80",
    siloIds: ["ingredient", "technique"],
    relatedRecipeIds: ["recipe-zurek", "recipe-fasolka"],
    relatedPostIds: [
      "post-polnische-suppen",
      "post-polenladen",
      "post-kielbasa-arten",
    ],
    relatedProductIds: [],
    clusterIds: ["technique-kiszenie"],
    translations: {
      de: {
        title: "Zakwas für Żurek: selbst ansetzen oder kaufen?",
        slug: "zakwas-zurek",
        excerpt:
          "Was Zakwas ist, wie wir ihn sauber führen, wann der Polenladen hilft — und typische Fehler vermeiden.",
        seoTitle: "Zakwas Żurek | Ansetzen & Kaufen | Alemniam",
        seoDescription:
          "Zakwas für Żurek erklärt: selbst ansetzen, erkennen, kaufen. Hygiene, Timing und Einsatz im Rezept.",
        body: bodyZakwasZurekDe.trim(),
      },
      pl: {
        title: "Zakwas na żurek: robić samemu czy kupić?",
        slug: "zakwas-na-zurek",
        excerpt:
          "Czym jest zakwas, jak prowadzić go czysto, kiedy pomaga sklep polski — i jak unikać typowych błędów.",
        seoTitle: "Zakwas na żurek | Domowy i kupny | Alemniam",
        seoDescription:
          "Zakwas na żurek: zakładanie, rozpoznawanie, zakup. Higiena, czas i użycie w przepisie.",
        body: bodyZakwasZurekPl.trim(),
      },
    },
    publishedAt: "2026-07-21T11:00:00.000Z",
    updatedAt: "2026-07-21T11:00:00.000Z",
  },
  {
    id: "post-bigos-guide",
    status: "published",
    postType: "guide",
    coverImage:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=1600&q=80",
    siloIds: ["dishFamily"],
    relatedRecipeIds: ["recipe-bigos", "recipe-fasolka", "recipe-golabki"],
    relatedPostIds: [
      "post-dutch-oven",
      "post-kielbasa-arten",
      "post-kiszenie",
      "post-polenladen",
    ],
    relatedProductIds: ["aff-dutch-oven"],
    clusterIds: ["technique-schmoren"],
    translations: {
      de: {
        title: "Bigos-Guide: Zeit, Varianten und besserer Topf",
        slug: "bigos-guide",
        excerpt:
          "Bigos verstehen: Kapusta, Fleisch, Ruhezeiten, Aufwärmen und warum ein guter Schmortopf hilft.",
        seoTitle: "Bigos Guide | Technik & Varianten | Alemniam",
        seoDescription:
          "Bigos Guide: Varianten, Zeitplan, Kapusta-Qualität und Schmortopf. Ergänzt das Bigos-Rezept — ohne Cannibalization.",
        body: bodyBigosGuideDe.trim(),
      },
      pl: {
        title: "Przewodnik po bigosie: czas, warianty, lepszy garnek",
        slug: "bigos-przewodnik",
        excerpt:
          "Zrozumieć bigos: kapusta, mięso, dojrzewanie, odgrzewanie i dlaczego pomaga dobry garnek do duszenia.",
        seoTitle: "Bigos przewodnik | Technika i warianty | Alemniam",
        seoDescription:
          "Bigos przewodnik: warianty, harmonogram, jakość kapusty i garnek. Uzupełnia przepis — bez kanibalizacji słów kluczowych.",
        body: bodyBigosGuidePl.trim(),
      },
    },
    publishedAt: "2026-07-21T12:00:00.000Z",
    updatedAt: "2026-07-21T12:00:00.000Z",
  },
  {
    id: "post-smietana-schmand",
    status: "published",
    postType: "lexicon",
    coverImage:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=1600&q=80",
    siloIds: ["ingredient", "diaspora"],
    relatedRecipeIds: [
      "recipe-barszcz",
      "recipe-golabki",
      "recipe-nalesniki",
      "recipe-pierogi",
      "recipe-mizeria",
      "recipe-zupa-pomidorowa",
      "recipe-szczawiowa",
    ],
    relatedPostIds: [
      "post-ersatzprodukte-de",
      "post-polenladen",
      "post-twarog",
    ],
    relatedProductIds: [],
    clusterIds: [],
    translations: {
      de: {
        title: "Śmietana, Schmand & Crème fraîche: was wofür?",
        slug: "smietana-schmand",
        excerpt:
          "Welche deutsche Milchprodukt-Alternative zu Śmietana passt zu Suppe, Soße und Pierogi — ohne das Gericht zu ertränken.",
        seoTitle: "Śmietana Alternative Deutschland | Schmand Guide | Alemniam",
        seoDescription:
          "Śmietana vs Schmand vs Crème fraîche in DE. Wann welches Produkt für Barszcz, Gołąbki und Pierogi.",
        body: bodySmietanaSchmandDe.trim(),
      },
      pl: {
        title: "Śmietana, Schmand i crème fraîche: co do czego?",
        slug: "smietana-czy-schmand",
        excerpt:
          "Który niemiecki nabiał zastąpi śmietanę w zupie, sosie i do pierogów — bez zalania dania.",
        seoTitle: "Śmietana czy Schmand | Poradnik DE | Alemniam",
        seoDescription:
          "Śmietana vs Schmand vs crème fraîche w Niemczech. Kiedy który produkt do barszczu, gołąbków i pierogów.",
        body: bodySmietanaSchmandPl.trim(),
      },
    },
    publishedAt: "2026-07-22T09:00:00.000Z",
    updatedAt: "2026-07-22T09:00:00.000Z",
  },
  {
    id: "post-kielbasa-arten",
    status: "published",
    postType: "lexicon",
    coverImage:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=1600&q=80",
    siloIds: ["ingredient", "diaspora"],
    relatedRecipeIds: [
      "recipe-zurek",
      "recipe-fasolka",
      "recipe-bigos",
      "recipe-kaszanka",
      "recipe-grochowka",
      "recipe-biala-kielbasa",
      "recipe-leczo",
    ],
    relatedPostIds: [
      "post-polenladen",
      "post-bigos-guide",
      "post-zakwas-zurek",
    ],
    relatedProductIds: [],
    clusterIds: [],
    translations: {
      de: {
        title: "Kiełbasa-Arten: was für Żurek, Bigos und Alltag?",
        slug: "kielbasa-arten",
        excerpt:
          "Weiße, geräucherte, dünne, Krakauer — welche Wurst wohin gehört und woran wir Qualität im Polenladen erkennen.",
        seoTitle: "Kiełbasa Arten Polenladen | Guide | Alemniam",
        seoDescription:
          "Kiełbasa Arten erklärt: biała, wędzona, krakowska. Einsatz in Żurek und Bigos, Qualität erkennen in DE.",
        body: bodyKielbasaArtenDe.trim(),
      },
      pl: {
        title: "Rodzaje kiełbasy: do żurku, bigosu i na co dzień",
        slug: "rodzaje-kielbasy",
        excerpt:
          "Biała, wędzona, cienka, krakowska — która gdzie pasuje i jak rozpoznać jakość w sklepie polskim.",
        seoTitle: "Rodzaje kiełbasy | Sklep polski | Alemniam",
        seoDescription:
          "Rodzaje kiełbasy: biała, wędzona, krakowska. Do żurku i bigosu, jakość w Niemczech.",
        body: bodyKielbasaArtenPl.trim(),
      },
    },
    publishedAt: "2026-07-22T10:00:00.000Z",
    updatedAt: "2026-07-22T10:00:00.000Z",
  },
  {
    id: "post-ersatzprodukte-de",
    status: "published",
    postType: "diaspora",
    coverImage:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1600&q=80",
    siloIds: ["diaspora"],
    relatedRecipeIds: [
      "recipe-pierogi",
      "recipe-nalesniki",
      "recipe-bigos",
      "recipe-zurek",
      "recipe-makaron-z-serem",
      "recipe-makaron-z-makiem",
      "recipe-szarlotka",
      "recipe-szczawiowa",
      "recipe-kutia",
      "recipe-napoleonka",
      "recipe-cwikla",
      "recipe-wuzetka",
      "recipe-drozdzowka",
      "recipe-zapiekanka",
      "recipe-pieczen-rzymska",
      "recipe-kisiel",
    ],
    relatedPostIds: [
      "post-polenladen",
      "post-twarog",
      "post-smietana-schmand",
      "post-kielbasa-arten",
    ],
    relatedProductIds: [],
    clusterIds: [],
    translations: {
      de: {
        title: "Polnische Zutaten ersetzen in Deutschland",
        slug: "ersatzprodukte-de",
        excerpt:
          "Wenn der Polenladen zu weit ist: sinnvolle Ersatzprodukte für Twaróg, Kapusta, Śmietana und mehr — ohne Geschmack zu zerstören.",
        seoTitle: "Polnische Zutaten ersetzen DE | Alternativen | Alemniam",
        seoDescription:
          "Ersatzprodukte für polnische Küche in DE: Twaróg, Kapusta, Śmietana, Kiełbasa. Funktion zuerst, dann Produkt.",
        body: bodyErsatzprodukteDe.trim(),
      },
      pl: {
        title: "Zamienniki polskich składników w Niemczech",
        slug: "zamienniki-skladnikow",
        excerpt:
          "Gdy sklep polski jest daleko: sensowne zamienniki twarogu, kapusty, śmietany i więcej — bez psucia smaku.",
        seoTitle: "Zamienniki składników DE | Alternatywy | Alemniam",
        seoDescription:
          "Zamienniki polskiej kuchni w DE: twaróg, kapusta, śmietana, kiełbasa. Najpierw funkcja, potem produkt.",
        body: bodyErsatzproduktePl.trim(),
      },
    },
    publishedAt: "2026-07-22T11:00:00.000Z",
    updatedAt: "2026-07-22T11:00:00.000Z",
  },
  {
    id: "post-wielkanoc",
    status: "published",
    postType: "culture",
    coverImage:
      "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=1600&q=80",
    siloIds: ["culture", "occasion"],
    relatedRecipeIds: [
      "recipe-zurek",
      "recipe-schabowy",
      "recipe-barszcz",
      "recipe-mizeria",
      "recipe-babka",
      "recipe-mazurek",
      "recipe-salatka-jarzynowa",
      "recipe-botwinka",
      "recipe-chalka",
      "recipe-pasztet",
      "recipe-biala-kielbasa",
      "recipe-jajka-faszerowane",
      "recipe-cwikla",
    ],
    relatedPostIds: [
      "post-zakwas-zurek",
      "post-sonntagsessen",
      "post-polenladen",
      "post-kielbasa-arten",
    ],
    relatedProductIds: [],
    clusterIds: ["occasion-wielkanoc"],
    translations: {
      de: {
        title: "Wielkanoc Speiseplan: ruhig feiern in DE",
        slug: "wielkanoc-speiseplan",
        excerpt:
          "Osterfrühstück und Festessen planen: Żurek, Weißwurst, Schabowy — ohne den ganzen Familientisch nachzubauen.",
        seoTitle: "Polnische Ostern Rezepte | Wielkanoc Speiseplan | Alemniam",
        seoDescription:
          "Wielkanoc Speiseplan für Deutschland: Żurek, biała kiełbasa, Schabowy. Machbar, bilingual, ohne Chaos.",
        body: bodyWielkanocDe.trim(),
      },
      pl: {
        title: "Menu wielkanocne: spokojne święta w DE",
        slug: "menu-wielkanocne",
        excerpt:
          "Plan śniadania i obiadu: żurek, biała kiełbasa, schabowy — bez odtwarzania całego rodzinnego stołu.",
        seoTitle: "Przepisy wielkanocne | Menu | Alemniam",
        seoDescription:
          "Menu wielkanocne w Niemczech: żurek, biała kiełbasa, schabowy. Wykonalne, dwujęzycznie, bez chaosu.",
        body: bodyWielkanocPl.trim(),
      },
    },
    publishedAt: "2026-07-23T09:00:00.000Z",
    updatedAt: "2026-07-23T09:00:00.000Z",
  },
  {
    id: "post-tlusty-czwartek",
    status: "published",
    postType: "culture",
    coverImage:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1600&q=80",
    siloIds: ["culture", "occasion"],
    relatedRecipeIds: [
      "recipe-faworki",
      "recipe-paczki",
      "recipe-nalesniki",
    ],
    relatedPostIds: [
      "post-paczek-technik",
      "post-faworki-technik",
      "post-sonntagsessen",
      "post-polenladen",
    ],
    relatedProductIds: [],
    clusterIds: ["occasion-tlusty-czwartek"],
    translations: {
      de: {
        title: "Tłusty Czwartek: Pączki, Faworki, kleiner Ritus",
        slug: "tlusty-czwartek",
        excerpt:
          "Fetter Donnerstag ohne Tagesprojekt: kaufen oder selbst machen, Faworki, Sicherheit beim Frittieren.",
        seoTitle: "Tłusty Czwartek Rezepte | Pączki & Faworki | Alemniam",
        seoDescription:
          "Tłusty Czwartek in DE: Pączki, Faworki, Zeitplan. Rezepte und Tipps ohne Chaos.",
        body: bodyTlustyCzwartekDe.trim(),
      },
      pl: {
        title: "Tłusty Czwartek: pączki, faworki, mały rytuał",
        slug: "tlusty-czwartek-przepisy",
        excerpt:
          "Tłusty czwartek bez projektu na cały dzień: kupić czy robić, faworki, bezpieczeństwo przy smażeniu.",
        seoTitle: "Tłusty Czwartek przepisy | Pączki i faworki | Alemniam",
        seoDescription:
          "Tłusty Czwartek w DE: pączki, faworki, plan. Przepisy i wskazówki bez chaosu.",
        body: bodyTlustyCzwartekPl.trim(),
      },
    },
    publishedAt: "2026-07-23T10:00:00.000Z",
    updatedAt: "2026-07-23T10:00:00.000Z",
  },
  {
    id: "post-sonntagsessen",
    status: "published",
    postType: "culture",
    coverImage:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80",
    siloIds: ["culture", "occasion"],
    relatedRecipeIds: [
      "recipe-rosol",
      "recipe-schabowy",
      "recipe-golabki",
      "recipe-pierogi",
      "recipe-mizeria",
      "recipe-kapusta-zasmażana",
      "recipe-buraczki",
      "recipe-zeberka",
      "recipe-rolada-slaska",
      "recipe-schab-pieczony",
      "recipe-kaszanka",
      "recipe-salatka-jarzynowa",
      "recipe-golonka",
      "recipe-grochowka",
      "recipe-krupnik",
      "recipe-szarlotka",
      "recipe-napoleonka",
      "recipe-klopsy",
      "recipe-kluski-kladzione",
      "recipe-chalka",
      "recipe-pasztet",
      "recipe-leczo",
      "recipe-jajka-faszerowane",
      "recipe-wuzetka",
      "recipe-drozdzowka",
      "recipe-placek-po-wegiersku",
      "recipe-zapiekanka",
      "recipe-kaczka",
      "recipe-pieczen-rzymska",
      "recipe-koperkowa",
    ],
    relatedPostIds: [
      "post-rosol-technik",
      "post-polnische-suppen",
      "post-pierogi-guide",
      "post-gusseisen",
    ],
    relatedProductIds: ["aff-cast-iron", "aff-dutch-oven"],
    clusterIds: ["occasion-niedziela"],
    translations: {
      de: {
        title: "Polnisches Sonntagsessen: Speiseplan & ruhiger Ritus",
        slug: "sonntagsessen-polnisch",
        excerpt:
          "Eine URL für Speise und Ritual: Rosół, Schabowy, Gołąbki oder Pierogi — planbar für den Sonntag in DE.",
        seoTitle: "Polnisches Sonntagsessen | Speiseplan | Alemniam",
        seoDescription:
          "Polnisches Sonntagsessen planen: Rosół, Schabowy, Gołąbki. Speiseplan und kurzer Ritus — ohne Doppel-Artikel.",
        body: bodySonntagsessenDe.trim(),
      },
      pl: {
        title: "Polski obiad niedzielny: menu i spokojny rytuał",
        slug: "obiad-niedzielny",
        excerpt:
          "Jeden adres dla menu i rytuału: rosół, schabowy, gołąbki albo pierogi — planowalnie na niedzielę w DE.",
        seoTitle: "Polski obiad niedzielny | Menu | Alemniam",
        seoDescription:
          "Polski obiad niedzielny: rosół, schabowy, gołąbki. Menu i krótki rytuał — bez podwójnych artykułów.",
        body: bodySonntagsessenPl.trim(),
      },
    },
    publishedAt: "2026-07-23T11:00:00.000Z",
    updatedAt: "2026-07-23T11:00:00.000Z",
  },
  {
    id: "post-kiszenie",
    status: "published",
    postType: "guide",
    coverImage:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1600&q=80",
    siloIds: ["technique"],
    relatedRecipeIds: [
      "recipe-bigos",
      "recipe-pierogi-cabbage",
      "recipe-barszcz",
      "recipe-ogorkowa",
      "recipe-kapusniak",
      "recipe-kapusta-zasmażana",
    ],
    relatedPostIds: [
      "post-bigos-guide",
      "post-zakwas-zurek",
      "post-polenladen",
      "post-ferment-glaeser",
    ],
    relatedProductIds: [],
    clusterIds: ["technique-kiszenie"],
    translations: {
      de: {
        title: "Kiszenie zu Hause: Kapusta, Ogórki, saubere Technik",
        slug: "kiszenie-guide",
        excerpt:
          "Fermentieren im deutschen Haushalt: Salz, Temperatur, Gläser, Sicherheit — und was wir für Bigos selbst machen.",
        seoTitle: "Kiszenie zu Hause | Fermentieren Guide | Alemniam",
        seoDescription:
          "Kiszenie Guide: Kapusta und Ogórki zu Hause fermentieren. Hygiene, Timing, Einsatz in Bigos und Pierogi.",
        body: bodyKiszenieDe.trim(),
      },
      pl: {
        title: "Kiszenie w domu: kapusta, ogórki, czysta technika",
        slug: "kiszenie-w-domu",
        excerpt:
          "Fermentacja w niemieckim mieszkaniu: sól, temperatura, słoiki, bezpieczeństwo — i co robimy sami pod bigos.",
        seoTitle: "Kiszenie w domu | Poradnik | Alemniam",
        seoDescription:
          "Kiszenie: kapusta i ogórki w domu. Higiena, czas, użycie w bigosie i pierogach.",
        body: bodyKiszeniePl.trim(),
      },
    },
    publishedAt: "2026-07-24T09:00:00.000Z",
    updatedAt: "2026-07-24T09:00:00.000Z",
  },
  {
    id: "post-fleischwolf",
    status: "published",
    postType: "buying-guide",
    coverImage:
      "https://images.unsplash.com/photo-1556911220-bff31c8120b0?w=1600&q=80",
    siloIds: ["gear"],
    relatedRecipeIds: [
      "recipe-pierogi-meat",
      "recipe-golabki",
      "recipe-rosol",
      "recipe-pieczen-rzymska",
    ],
    relatedPostIds: [
      "post-pierogi-guide",
      "post-teigmaschine",
      "post-pierogi-formen",
    ],
    relatedProductIds: ["aff-stand-mixer"],
    clusterIds: [],
    translations: {
      de: {
        title: "Fleischwolf für Pierogi-Füllung: Kaufberatung 2026",
        slug: "fleischwolf-kaufberatung",
        excerpt:
          "Wann ein Fleischwolf Sinn macht, welche Kriterien zählen und Budget-/Allround-/Batch-Stufen für Füllungen.",
        seoTitle: "Fleischwolf Kaufberatung | Pierogi Füllung | Alemniam",
        seoDescription:
          "Fleischwolf für Pierogi-Füllung: Kriterien, Stufen, Tests-Slot. Wann Hände und Messer reichen.",
        body: bodyFleischwolfDe.trim(),
      },
      pl: {
        title: "Wilk do mięsa — poradnik do farszu na pierogi 2026",
        slug: "wilk-do-miesa",
        excerpt:
          "Kiedy maszynka ma sens, jakie kryteria liczą się naprawdę i poziomy budżet/allround/batch pod farsze.",
        seoTitle: "Wilk do mięsa poradnik | Farsz na pierogi | Alemniam",
        seoDescription:
          "Wilk do mięsa do farszu na pierogi: kryteria, poziomy, slot testów. Kiedy wystarczą ręce i nóż.",
        body: bodyFleischwolfPl.trim(),
      },
    },
    publishedAt: "2026-07-24T10:00:00.000Z",
    updatedAt: "2026-07-24T10:00:00.000Z",
  },
  {
    id: "post-dutch-oven",
    status: "published",
    postType: "buying-guide",
    coverImage:
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=1600&q=80",
    siloIds: ["gear"],
    relatedRecipeIds: [
      "recipe-bigos",
      "recipe-rosol",
      "recipe-golabki",
      "recipe-rolada-slaska",
      "recipe-golonka",
      "recipe-placek-po-wegiersku",
    ],
    relatedPostIds: [
      "post-bigos-guide",
      "post-rosol-technik",
      "post-gusseisen",
    ],
    relatedProductIds: ["aff-dutch-oven", "aff-cast-iron"],
    clusterIds: ["technique-schmoren"],
    translations: {
      de: {
        title: "Beste Schmortöpfe für Bigos 2026",
        slug: "dutch-oven-kaufberatung",
        excerpt:
          "Dutch Oven und Schmortopf für Bigos, Rosół-Reste und Gołąbki: Material, Größe, Budget- bis Batch-Stufen.",
        seoTitle: "Beste Schmortöpfe Bigos 2026 | Dutch Oven | Alemniam",
        seoDescription:
          "Beste Schmortöpfe für Bigos 2026: Gusseisen vs Emaille, Literzahl, Pflege. Kaufberatung mit Test-Slot.",
        body: bodyDutchOvenDe.trim(),
      },
      pl: {
        title: "Najlepsze garnki do bigosu / dutch oven 2026",
        slug: "garnek-do-duszenia",
        excerpt:
          "Dutch oven i garnek do duszenia pod bigos, resztki rosołu i gołąbki: materiał, rozmiar, poziomy budżetu.",
        seoTitle: "Garnek do bigosu 2026 | Dutch oven | Alemniam",
        seoDescription:
          "Najlepsze garnki do bigosu 2026: żeliwo vs emalia, litry, pielęgnacja. Poradnik ze slotem testów.",
        body: bodyDutchOvenPl.trim(),
      },
    },
    publishedAt: "2026-07-24T11:00:00.000Z",
    updatedAt: "2026-07-24T11:00:00.000Z",
  },
  {
    id: "post-gusseisen",
    status: "published",
    postType: "buying-guide",
    coverImage:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80",
    siloIds: ["gear"],
    relatedRecipeIds: [
      "recipe-placki",
      "recipe-placki-cukinia",
      "recipe-placki-ser",
      "recipe-placki-jablka",
      "recipe-schabowy",
      "recipe-kotlet-mielony",
      "recipe-oscypek",
    ],
    relatedPostIds: [
      "post-panieren",
      "post-placki-guide",
      "post-sonntagsessen",
      "post-dutch-oven",
      "post-teigmaschine",
    ],
    relatedProductIds: ["aff-cast-iron"],
    clusterIds: ["technique-panieren"],
    translations: {
      de: {
        title: "Beste Gusseisenpfanne für Placki & Schabowy 2026",
        slug: "gusseisenpfanne",
        excerpt:
          "Gusseisen für Placki, Schabowy und Oscypek: Größe, Einbrennen, Pflege und Empfehlungsstufen 2026.",
        seoTitle: "Beste Gusseisenpfanne 2026 | Placki & Schabowy | Alemniam",
        seoDescription:
          "Beste Gusseisenpfanne für Placki und Schabowy 2026: Kriterien, Budget bis Allround, Tests-Slot und Pflege.",
        body: bodyGusseisenDe.trim(),
      },
      pl: {
        title: "Najlepsza patelnia żeliwna do placków i schabowego 2026",
        slug: "patelnia-zelivna",
        excerpt:
          "Żeliwo do placków, schabowego i oscypka: rozmiar, wypalanie, pielęgnacja i poziomy rekomendacji 2026.",
        seoTitle: "Patelnia żeliwna 2026 | Placki i schabowy | Alemniam",
        seoDescription:
          "Najlepsza patelnia żeliwna do placków i schabowego 2026: kryteria, budżet, slot testów i pielęgnacja.",
        body: bodyGusseisenPl.trim(),
      },
    },
    publishedAt: "2026-07-24T12:00:00.000Z",
    updatedAt: "2026-07-24T12:00:00.000Z",
  },
];
