import type { BlogPost } from "@/types/content";
import {
  bodyPierogiTeigDe,
  bodyPolenladenDe,
  bodyTeigmaschineDe,
  bodyTwarogDe,
  bodyWigiliaDe,
} from "./blog-bodies-de";
import {
  bodyPierogiTeigPl,
  bodyPolenladenPl,
  bodyTeigmaschinePl,
  bodyTwarogPl,
  bodyWigiliaPl,
} from "./blog-bodies-pl";

export const seedBlogPosts: BlogPost[] = [
  {
    id: "post-pierogi-teig",
    status: "published",
    postType: "guide",
    coverImage:
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1600&q=80",
    siloIds: ["dishFamily", "technique"],
    relatedRecipeIds: [
      "recipe-pierogi",
      "recipe-pierogi-meat",
      "recipe-pierogi-cabbage",
    ],
    relatedPostIds: ["post-teigmaschine", "post-twarog", "post-polenladen"],
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
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80",
    siloIds: ["gear"],
    relatedRecipeIds: [
      "recipe-pierogi",
      "recipe-pierogi-meat",
      "recipe-pierogi-cabbage",
    ],
    relatedPostIds: ["post-pierogi-teig", "post-wigilia", "post-polenladen"],
    relatedProductIds: [
      "aff-stand-mixer",
      "aff-rolling-pin",
      "aff-pierogi-form",
      "aff-potato-ricer",
    ],
    clusterIds: ["technique-teig"],
    translations: {
      de: {
        title: "Teigmaschine für Pierogi: lohnt sich das?",
        slug: "teigmaschine-pierogi",
        excerpt:
          "Kaufberatung ohne Hype: Kriterien, Budget-, Allround- und Family-Batch-Stufen — und wann die Hände reichen.",
        seoTitle: "Teigmaschine Pierogi Kaufberatung | Alemniam",
        seoDescription:
          "Welche Teigmaschine für Pierogi? Schüsselgröße, Drehmoment, Knethaken, Reinigung. Empfehlungen für Wigilia-Mengen und Alltag in DE.",
        body: bodyTeigmaschineDe.trim(),
      },
      pl: {
        title: "Robot do ciasta na pierogi: czy warto?",
        slug: "robot-do-ciasta-pierogi",
        excerpt:
          "Poradnik zakupowy bez hype’u: kryteria, budżet, allround i family-batch — oraz kiedy wystarczą ręce.",
        seoTitle: "Robot do ciasta pierogi — poradnik zakupowy | Alemniam",
        seoDescription:
          "Jaki robot do ciasta na pierogi? Misa, moment obrotowy, hak, mycie. Na ilości wigilijne i codzienność w Niemczech.",
        body: bodyTeigmaschinePl.trim(),
      },
    },
    publishedAt: "2026-07-05T10:00:00.000Z",
    updatedAt: "2026-07-19T18:00:00.000Z",
  },
  {
    id: "post-twarog",
    status: "published",
    postType: "lexicon",
    coverImage:
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=1600&q=80",
    siloIds: ["ingredient", "diaspora"],
    relatedRecipeIds: ["recipe-pierogi", "recipe-nalesniki", "recipe-pierogi-meat"],
    relatedPostIds: ["post-polenladen", "post-pierogi-teig", "post-wigilia"],
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
    updatedAt: "2026-07-19T18:00:00.000Z",
  },
  {
    id: "post-polenladen",
    status: "published",
    postType: "diaspora",
    coverImage:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=80",
    siloIds: ["diaspora"],
    relatedRecipeIds: [
      "recipe-pierogi",
      "recipe-bigos",
      "recipe-zurek",
      "recipe-barszcz",
    ],
    relatedPostIds: ["post-twarog", "post-wigilia", "post-pierogi-teig"],
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
      "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=1600&q=80",
    siloIds: ["culture", "occasion"],
    relatedRecipeIds: [
      "recipe-pierogi-cabbage",
      "recipe-barszcz",
      "recipe-pierogi",
      "recipe-zurek",
    ],
    relatedPostIds: ["post-pierogi-teig", "post-polenladen", "post-teigmaschine"],
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
