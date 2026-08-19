import type { BlogPost } from "@/types/content";
import {
  bodyPierogiTeigDe,
  bodyPolenladenDe,
  bodyTwarogDe,
  bodyWigiliaDe,
} from "./blog-bodies-de";
import {
  bodyPierogiTeigPl,
  bodyPolenladenPl,
  bodyTwarogPl,
  bodyWigiliaPl,
} from "./blog-bodies-pl";
import { bodyTeigmaschineUpgradeDe } from "./blog-bodies-wave2-de";
import { bodyTeigmaschineUpgradePl } from "./blog-bodies-wave2-pl";
import { seedBlogPostsWave2 } from "./seed-blog-wave2";
import { seedBlogPostsW3a } from "./seed-blog-w3a";
import { seedBlogPostsW3b } from "./seed-blog-w3b";
import { seedBlogPostsW3c } from "./seed-blog-w3c";
import { seedBlogPostsW5 } from "./seed-blog-w5";
import { seedBlogPostsW6 } from "./seed-blog-w6";
/** Wave 8 C — Pączki Technik; Integrator E confirms merge with A–D. */
import { seedBlogPostsW8 } from "./seed-blog-w8";
/** Wave 16 — Diaspora mistakes (silo-safe). */
import { seedBlogPostsW16 } from "./seed-blog-w16";

const seedBlogPostsLive: BlogPost[] = [
  {
    id: "post-pierogi-teig",
    status: "published",
    postType: "guide",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/blog/post-pierogi-teig/ba5876fe-10c2-4ed4-8025-632c2caae7b6.webp",
    siloIds: ["dishFamily", "technique"],
    relatedRecipeIds: [
      "recipe-pierogi",
      "recipe-pierogi-meat",
      "recipe-pierogi-cabbage",
    ],
    relatedPostIds: [
      "post-pierogi-guide",
      "post-teigmaschine",
      "post-freezer-meal-prep",
      "post-pierogi-formen",
    ],
    relatedProductIds: ["aff-rolling-pin", "aff-pierogi-form", "aff-stand-mixer"],
    clusterIds: ["technique-teig"],
    translations: {
      de: {
        title: "Pierogi-Teig: weich, elastisch, ohne Drama",
        slug: "pierogi-teig",
        excerpt:
          "Pierogi-Teig richtig kneten für die deutsche Küche: Mengen, Mehltypen, Ruhezeit, Ausrollen, Freezer und typische Fehler — Schritt für Schritt.",
        seoTitle: "Pierogi Teig Rezept | Weich & elastisch | Alemniam",
        seoDescription:
          "Pierogi-Teig Rezept mit Tipps für Mehl 405/550, Kneten, Ruhen, Ausrollen und Freezer-Batches. Ideal für Ruskie, Fleisch und Wigilia.",
        body: bodyPierogiTeigDe.trim(),
      },
      pl: {
        title: "Ciasto na pierogi: miękkie, elastyczne, bez dramatu",
        slug: "ciasto-na-pierogi",
        excerpt:
          "Jak zrobić ciasto na pierogi w niemieckiej kuchni: proporcje, mąka, odpoczynek, wałkowanie, mrożenie i typowe błędy — krok po kroku.",
        seoTitle: "Ciasto na pierogi przepis | Miękkie i elastyczne | Alemniam",
        seoDescription:
          "Przepis na ciasto na pierogi z wskazówkami do mąki w DE, wyrabiania, odpoczynku i mrożenia. Pod ruskie, mięso i Wigilię.",
        body: bodyPierogiTeigPl.trim(),
      },
    },
    publishedAt: "2026-07-01T10:00:00.000Z",
    updatedAt: "2026-07-19T18:00:00.000Z",
  },
  {
    id: "post-teigmaschine",
    status: "published",
    postType: "buying-guide",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/blog/post-teigmaschine/5e38d094-ee79-4c83-88ed-ef36d24e654b.webp",
    siloIds: ["gear"],
    relatedRecipeIds: [
      "recipe-pierogi",
      "recipe-pierogi-meat",
      "recipe-pierogi-cabbage",
    ],
    relatedPostIds: [
      "post-pierogi-guide",
      "post-pierogi-teig",
      "post-pierogi-formen",
      "post-freezer-meal-prep",
    ],
    relatedProductIds: [
      "aff-stand-mixer",
      "aff-rolling-pin",
      "aff-pierogi-form",
      "aff-potato-ricer",
    ],
    clusterIds: ["technique-teig"],
    translations: {
      de: {
        title: "Beste Teigmaschinen für Pierogi 2026 (Kaufberatung & Test)",
        slug: "teigmaschine-pierogi",
        excerpt:
          "Best-of 2026 ohne Hype: Kriterien, Budget-, Allround- und Family-Batch-Stufen — Tests & Erfahrungen vorbereitet.",
        seoTitle: "Beste Teigmaschinen Pierogi 2026 | Test & Kaufberatung | Alemniam",
        seoDescription:
          "Beste Teigmaschinen für Pierogi 2026: Schüssel, Drehmoment, Knethaken, Reinigung. Budget bis Family-Batch — mit Test-Slot.",
        body: bodyTeigmaschineUpgradeDe.trim(),
      },
      pl: {
        title: "Najlepsze roboty do ciasta na pierogi 2026 (poradnik i test)",
        slug: "robot-do-ciasta-pierogi",
        excerpt:
          "Best-of 2026 bez hype’u: kryteria, budżet, allround i family-batch — Testy i doświadczenia przygotowane.",
        seoTitle: "Najlepsze roboty do ciasta pierogi 2026 | Test | Alemniam",
        seoDescription:
          "Najlepsze roboty do ciasta na pierogi 2026: misa, moment, hak, mycie. Od budżetu do family-batch — ze slotem testów.",
        body: bodyTeigmaschineUpgradePl.trim(),
      },
    },
    publishedAt: "2026-07-05T10:00:00.000Z",
    updatedAt: "2026-07-20T12:00:00.000Z",
  },
  {
    id: "post-twarog",
    status: "published",
    postType: "lexicon",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/blog/post-twarog/8948afdf-bc98-4abc-a5eb-10ce0213e069.webp",
    siloIds: ["ingredient", "diaspora"],
    relatedRecipeIds: [
      "recipe-pierogi",
      "recipe-nalesniki",
      "recipe-pierogi-meat",
      "recipe-makaron-z-serem",
    ],
    relatedPostIds: [
      "post-polenladen",
      "post-ersatzprodukte-de",
      "post-pierogi-guide",
      "post-smietana-schmand",
    ],
    relatedProductIds: ["aff-potato-ricer"],
    clusterIds: [],
    translations: {
      de: {
        title: "Twaróg in Deutschland: was kaufen?",
        slug: "twarog-deutschland",
        excerpt:
          "Quark ist nicht gleich Twaróg. So findest du die richtige Konsistenz für Pierogi Ruskie und Naleśniki — im Polenladen und Supermarkt.",
        seoTitle: "Twaróg Alternative Deutschland | Quark Guide | Alemniam",
        seoDescription:
          "Twaróg vs. Speisequark vs. Magerquark in DE. Abtropfen, Fehler vermeiden, Einkaufen für Pierogi und Naleśniki — klar erklärt.",
        body: bodyTwarogDe.trim(),
      },
      pl: {
        title: "Twaróg w Niemczech: co kupić?",
        slug: "twarog-w-niemczech",
        excerpt:
          "Quark to nie zawsze twaróg. Jak znaleźć właściwą konsystencję do pierogów ruskich i naleśników — w sklepie polskim i markecie.",
        seoTitle: "Twaróg w Niemczech Quark | Poradnik | Alemniam",
        seoDescription:
          "Twaróg vs Speisequark vs Magerquark. Odsączanie, błędy, zakupy pod pierogi i naleśniki — jasno i praktycznie.",
        body: bodyTwarogPl.trim(),
      },
    },
    publishedAt: "2026-07-08T10:00:00.000Z",
    updatedAt: "2026-07-20T23:00:00.000Z",
  },
  {
    id: "post-polenladen",
    status: "published",
    postType: "diaspora",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/blog/post-polenladen/a241ecc3-c9c5-4acd-ac5f-94ba76f76790.webp",
    siloIds: ["diaspora"],
    relatedRecipeIds: [
      "recipe-pierogi",
      "recipe-bigos",
      "recipe-zurek",
      "recipe-barszcz",
      "recipe-kaszanka",
      "recipe-makaron-z-makiem",
      "recipe-szarlotka",
      "recipe-kutia",
      "recipe-napoleonka",
      "recipe-leczo",
      "recipe-jajka-faszerowane",
      "recipe-cwikla",
      "recipe-wuzetka",
      "recipe-drozdzowka",
      "recipe-zapiekanka",
      "recipe-placek-po-wegiersku",
      "recipe-koperkowa",
      "recipe-kisiel",
      "recipe-kaczka",
      "recipe-pieczen-rzymska",
      "recipe-galareta",
      "recipe-salatka-sledziowa",
      "recipe-marchewka-groszek",
      "recipe-fasolka-szparagowa",
    ],
    relatedPostIds: [
      "post-twarog",
      "post-ersatzprodukte-de",
      "post-kielbasa-arten",
      "post-wigilia",
    ],
    relatedProductIds: ["aff-freezer-boxes", "aff-dutch-oven"],
    clusterIds: [],
    translations: {
      de: {
        title: "Polenladen vs. REWE: was wo kaufen?",
        slug: "polenladen-einkaufen",
        excerpt:
          "Praktischer Einkaufsguide für polnische Haushalte in Deutschland: Kielbasa, Twaróg, Kapusta, Zakwas — und was im Supermarkt völlig reicht.",
        seoTitle: "Polenladen Einkaufen Guide | REWE & Kaufland | Alemniam",
        seoDescription:
          "Polenladen vs REWE/Kaufland: Was lohnt sich wirklich? Listen für Sonntag & Wigilia, Qualität erkennen, Ersatzprodukte, Rezepte zum Kochen.",
        body: bodyPolenladenDe.trim(),
      },
      pl: {
        title: "Sklep polski vs REWE: co gdzie kupić?",
        slug: "sklep-polski-zakupy",
        excerpt:
          "Praktyczny przewodnik zakupów dla polskich domów w Niemczech: kiełbasa, twaróg, kapusta, zakwas — i to, co spokojnie bierzesz w markecie.",
        seoTitle: "Sklep polski zakupy Niemcy | REWE i Kaufland | Alemniam",
        seoDescription:
          "Sklep polski vs REWE/Kaufland: co naprawdę warto? Listy na niedzielę i Wigilię, jakość, zamienniki, przepisy do gotowania.",
        body: bodyPolenladenPl.trim(),
      },
    },
    publishedAt: "2026-07-10T10:00:00.000Z",
    updatedAt: "2026-07-19T18:00:00.000Z",
  },
  {
    id: "post-wigilia",
    status: "published",
    postType: "culture",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/blog/post-wigilia/5d4a7a91-2d49-4f18-a8b0-a1d265c65de8.webp",
    siloIds: ["culture", "occasion"],
    relatedRecipeIds: [
      "recipe-pierogi-cabbage",
      "recipe-barszcz",
      "recipe-uszka",
      "recipe-makowiec",
      "recipe-makaron-z-makiem",
      "recipe-kutia",
      "recipe-karp",
      "recipe-sledz",
      "recipe-pierogi",
      "recipe-piernik",
      "recipe-ryba-po-grecku",
      "recipe-kompot-z-suszu",
      "recipe-zupa-grzybowa",
      "recipe-kisiel",
      "recipe-salatka-sledziowa",
      "recipe-galareta",
    ],
    relatedPostIds: [
      "post-pierogi-guide",
      "post-makowiec-technik",
      "post-freezer-meal-prep",
      "post-freezer-boxen",
      "post-polenladen",
      "post-wielkanoc",
    ],
    relatedProductIds: ["aff-pierogi-form", "aff-freezer-boxes", "aff-stand-mixer"],
    clusterIds: ["occasion-wigilia"],
    translations: {
      de: {
        title: "Wigilia Speiseplan: ruhig planen, klar kochen",
        slug: "wigilia-speiseplan",
        excerpt:
          "Zwölf Gerichte als Orientierung, nicht als Wettkampf. Zeitplan, Freezer, Barszcz und Pierogi — für Haushalte in Deutschland.",
        seoTitle: "Wigilia Rezepte Speiseplan | Polnisch kochen | Alemniam",
        seoDescription:
          "Wigilia Speiseplan mit Zeitlinie, Einkauf und Freezer-Tipps. Barszcz, Pierogi mit Kraut und Pilzen — bilingual und machbar in DE.",
        body: bodyWigiliaDe.trim(),
      },
      pl: {
        title: "Menu wigilijne: spokojny plan, jasne gotowanie",
        slug: "menu-wigilijne",
        excerpt:
          "Dwanaście potraw jako punkt odniesienia, nie zawody. Harmonogram, mrożenie, barszcz i pierogi — dla domów w Niemczech.",
        seoTitle: "Wigilia przepisy menu | Plan bez chaosu | Alemniam",
        seoDescription:
          "Menu wigilijne z harmonogramem, zakupami i mrożeniem. Barszcz, pierogi z kapustą i grzybami — dwujęzycznie, wykonalnie w DE.",
        body: bodyWigiliaPl.trim(),
      },
    },
    publishedAt: "2026-07-12T10:00:00.000Z",
    updatedAt: "2026-07-19T18:00:00.000Z",
  },
];

export const seedBlogPosts: BlogPost[] = [
  ...seedBlogPostsLive,
  ...seedBlogPostsWave2,
  ...seedBlogPostsW3a,
  ...seedBlogPostsW3b,
  ...seedBlogPostsW3c,
  ...seedBlogPostsW5,
  ...seedBlogPostsW6,
  ...seedBlogPostsW8,
  ...seedBlogPostsW16,
];
