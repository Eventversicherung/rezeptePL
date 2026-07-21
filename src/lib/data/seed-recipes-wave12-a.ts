import type { Recipe } from "@/types/content";

/**
 * Wave 12 Paket A — Suppen-Klassiker (+2).
 * - recipe-zupa-grzybowa — klare Pilzsuppe (getrocknete Pilze; Wigilia-/Herbst-Linie) ≠ Barszcz/Flaki
 * - recipe-grochowka — Grochówka mit Rauchwurst ≠ Fasolka/Kapuśniak
 *
 * Integrator E: merge into seed aggregator + recipe-articles + related maps.
 * Affiliate: guide-only (no relatedProductIds).
 * NO SEED_VERSION bump here. No commit/push.
 */
export const seedRecipesWave12A: Recipe[] = [
  {
    id: "recipe-zupa-grzybowa",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1761545832874-02e1d41dc649?w=1600&q=80",
    prepMinutes: 25,
    cookMinutes: 50,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-wigilia", "occasion-niedziela"],
    techniqueIds: ["technique-bulion"],
    categoryIds: ["category-suppen", "category-vegetarisch"],
    relatedPostIds: [
      "post-polnische-suppen",
      "post-wigilia",
      "post-polenladen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Zupa grzybowa",
        slug: "zupa-grzybowa",
        excerpt:
          "Klare polnische Pilzsuppe aus eingeweichten Trockenpilzen — Wigilia- und Herbstteller, mit Nudeln oder Kartoffeln. Klar ≠ Barszcz und ≠ Flaki.",
        steps: [
          {
            text: "Getrocknete Steinpilze (Borowiki) in warmem Wasser 20–30 Minuten einweichen; Pilze herausnehmen, Flüssigkeit durch ein feines Sieb oder Tuch abseihen und aufbewahren. Pilze grob schneiden.",
            tip: "Gute Trockenpilze oft im [Polenladen](/de/blog/polenladen-einkaufen). Das ist nicht [Barszcz](/de/rezepte/barszcz-czerwony) (Bete) und nicht [Flaki](/de/rezepte/flaki) (Kutteln).",
          },
          {
            text: "Zwiebel und Karotte in Butter oder Öl glasig dünsten; Pilze zugeben, kurz mitrösten. Mit der Pilzflüssigkeit und etwas Wasser oder leichter Gemüsebrühe auffüllen; Lorbeer und Pfeffer dazugeben.",
            tip: "Überblick SuppenÜberblick: [Polnische Suppen](/de/blog/polnische-suppen). Hier nur der enge Rezept Pilz.",
          },
          {
            text: "20–30 Minuten sanft köcheln, bis die Pilze weich und der Fond aromatisch sind. Optional kleine Nudeln oder Kartoffelwürfel mitgaren. Mit Salz abschmecken; Säure nur sparsam (Prise Zitrone), nicht wie Kiszone-Linien.",
            tip: "Kiszone-Nachbar: [Ogórkowa](/de/rezepte/ogorkowa) — anderes Gericht. Menürahmen festlich: [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
          },
          {
            text: "Heiß mit Dill oder Petersilie servieren. Für Wigilia oft klar und ohne Sahne; im Alltag optional einen Löffel temperierte Śmietana einrühren — nicht kochend.",
            tip: "Śmietana temperieren wie im [Śmietana/Schmand](/de/blog/smietana-schmand)-Guide; Fokus bleibt Zupa grzybowa.",
          },
        ],
        seoTitle: "Zupa grzybowa Rezept | Polnische Pilzsuppe | Alemniam",
        seoDescription:
          "Zupa grzybowa — klare Pilzsuppe aus Trockenpilzen. Bilingual, Wigilia-tauglich, klar ≠ Barszcz und ≠ Flaki.",
      },
      pl: {
        title: "Zupa grzybowa",
        slug: "zupa-grzybowa",
        excerpt:
          "Klarowna polska zupa z namoczonych suszonych grzybów — talerz wigilijny i jesienny, z makaronem lub ziemniakami. Jasno ≠ barszcz i ≠ flaki.",
        steps: [
          {
            text: "Suszone borowiki namocz w ciepłej wodzie 20–30 minut; grzyby wyjmij, płyn przecedź przez sito lub gazę i zachowaj. Grzyby pokrój grubo.",
            tip: "Dobre suszone grzyby często w [sklepie polskim](/pl/blog/sklep-polski-zakupy). To nie [barszcz](/pl/rezepte/barszcz-czerwony) (burak) i nie [flaki](/pl/rezepte/flaki).",
          },
          {
            text: "Cebulę i marchew zeszklij na maśle lub oleju; dodaj grzyby, krótko podsmaż. Zalej płynem z moczenia i odrobiną wody lub lekkiego bulionu; dodaj liść laurowy i pieprz.",
            tip: "Przegląd zup zostaje w przeglądzie: [polskie zupy](/pl/blog/polskie-zupy). Tu tylko wąski Rezept grzybowy.",
          },
          {
            text: "Gotuj łagodnie 20–30 minut, aż grzyby zmiękną, a wywar nabierze aromatu. Opcjonalnie drobny makaron lub kostka ziemniaka. Dopraw solą; kwasu tylko szczypta (cytryna), nie jak linie kiszone.",
            tip: "Sąsiad kiszony: [ogórkowa](/pl/rezepte/ogorkowa). Rama świąteczna: [menu wigilijne](/pl/blog/menu-wigilijne).",
          },
          {
            text: "Podawaj gorącą z koperkiem lub pietruszką. Na Wigilię często klarowna, bez śmietany; na co dzień opcjonalnie łyżka ocieplonej śmietany — nie do wrzątku.",
            tip: "Śmietanę zahartuj jak w [śmietana/Schmand](/pl/blog/smietana-czy-schmand); tu zostaje zupa grzybowa.",
          },
        ],
        seoTitle: "Zupa grzybowa przepis | Zupa z suszonych grzybów | Alemniam",
        seoDescription:
          "Zupa grzybowa — klarowna z suszonych grzybów. Dwujęzycznie, na Wigilię, jasno ≠ barszcz i ≠ flaki.",
      },
    },
    ingredients: [
      {
        id: "zg-1",
        name: {
          de: "Getrocknete Steinpilze (Borowiki)",
          pl: "Suszone borowiki",
        },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Polenladen — Qualität vor Menge",
      },
      {
        id: "zg-2",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "zg-3",
        name: { de: "Karotte", pl: "Marchew" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "zg-4",
        name: { de: "Butter oder Öl", pl: "Masło lub olej" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "dairy",
      },
      {
        id: "zg-5",
        name: {
          de: "Wasser / leichte Gemüsebrühe (zusätzlich zur Pilzflüssigkeit)",
          pl: "Woda / lekki bulion warzywny (oprócz płynu z moczenia)",
        },
        amount: 1.2,
        unit: { de: "l", pl: "l" },
        group: "pantry",
      },
      {
        id: "zg-6",
        name: {
          de: "Kleine Suppennudeln oder Kartoffelwürfel (optional)",
          pl: "Drobny makaron lub kostka ziemniaka (opcjonalnie)",
        },
        amount: 80,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        substitute: {
          de: "Ohne Einlage — klarer Wigilia-Teller",
          pl: "Bez dodatku — klarowny talerz wigilijny",
        },
      },
      {
        id: "zg-7",
        name: {
          de: "Lorbeer, Salz, Pfeffer, Dill",
          pl: "Liść laurowy, sól, pieprz, koperek",
        },
        amount: 1,
        unit: { de: "nach Geschmack", pl: "do smaku" },
        group: "spices",
      },
      {
        id: "zg-8",
        name: {
          de: "Śmietana zum Servieren (optional, Alltag)",
          pl: "Śmietana do podania (opcjonalnie, na co dzień)",
        },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "dairy",
        storeHintDe: "Temperieren — nicht kochend einrühren",
      },
    ],
    createdAt: "2026-07-21T10:00:00.000Z",
    updatedAt: "2026-07-21T10:00:00.000Z",
  },
  {
    id: "recipe-grochowka",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1712334619829-831fa0625a0f?w=1600&q=80",
    prepMinutes: 20,
    cookMinutes: 90,
    servings: 6,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-bulion"],
    categoryIds: ["category-suppen"],
    relatedPostIds: [
      "post-polnische-suppen",
      "post-kielbasa-arten",
      "post-sonntagsessen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Grochówka",
        slug: "grochowka",
        excerpt:
          "Klassische polnische Erbsensuppe aus gelben Trockenerbsen mit Rauchwurst und Kartoffeln — deftig, batchbar, klar ≠ Fasolka und ≠ Kapuśniak.",
        steps: [
          {
            text: "Gelbe Trockenerbsen (groch) über Nacht einweichen oder nach Packungsangabe; abgießen. Mit frischem Wasser aufsetzen, Zwiebel, Karotte, Lorbeer und Majoran dazugeben; ruhig köcheln, bis die Erbsen weich fallen.",
            tip: "Das sind Erbsen, keine Bohnen: [Fasolka po bretonsku](/de/rezepte/fasolka-po-bretonsku) bleibt anderer Cook. Überblick: [Polnische Suppen](/de/blog/polnische-suppen).",
          },
          {
            text: "Kartoffelwürfel zugeben und weich kochen. Parallel geräucherte Kiełbasa oder Speckwürfel anbraten; Wurstscheiben und Fond-Anteil in den Topf geben.",
            tip: "Welche Wurst wohin: [Kiełbasa-Arten](/de/blog/kielbasa-arten). Einkauf oft [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "Optional einen Teil der Erbsen mit dem Pürierstab anstoßen — dick, aber nicht Babybrei. Mit Salz, Pfeffer und Majoran abschmecken; Säure nur sparsam, nicht Kiszone-Kraut-Linie.",
            tip: "≠ [Kapuśniak](/de/rezepte/kapusniak) (Sauerkrautsuppe). Menüplatz: [polnisches Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
          {
            text: "Heiß mit frischem Dill oder Majoran servieren; Brot dazu. Reste halten sich und werden oft am zweiten Tag runder — Freezer portionsweise möglich.",
            tip: "Fehlt geräucherte Wurst: ehrlich ersetzen laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de) — Fokus bleibt Grochówka.",
          },
        ],
        seoTitle: "Grochówka Rezept | Polnische Erbsensuppe | Alemniam",
        seoDescription:
          "Grochówka — Erbsensuppe mit Rauchwurst und Kartoffeln. Bilingual, Diaspora-Einkauf DE, klar ≠ Fasolka/Kapuśniak.",
      },
      pl: {
        title: "Grochówka",
        slug: "grochowka",
        excerpt:
          "Klasyczna polska zupa z grochu z wędzoną kiełbasą i ziemniakami — treściwa, na zapas, jasno ≠ fasolka i ≠ kapuśniak.",
        steps: [
          {
            text: "Groch namocz na noc lub według opakowania; odlej. Zalej świeżą wodą, dodaj cebulę, marchew, liść laurowy i majeranek; gotuj spokojnie do miękkości grochu.",
            tip: "To groch, nie fasola: [fasolka po bretonsku](/pl/rezepte/fasolka-po-bretonsku) to inny cook. Przegląd: [polskie zupy](/pl/blog/polskie-zupy).",
          },
          {
            text: "Dodaj kostkę ziemniaka i dogotuj. Równolegle podsmaż wędzoną kiełbasę lub słoninę; plastry i część tłuszczu w garnek.",
            tip: "Która kiełbasa gdzie: [rodzaje kiełbasy](/pl/blog/rodzaje-kielbasy). Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Opcjonalnie część grochu blenduj — gęsto, nie na papkę. Dopraw solą, pieprzem i majerankiem; kwasu mało, nie linia kapusty kiszonej.",
            tip: "≠ [kapuśniak](/pl/rezepte/kapusniak). Miejsce w menu: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
          },
          {
            text: "Podawaj gorącą z koperkiem lub majerankiem; chleb obok. Resztki często lepsze nazajutrz — freezer porcjami.",
            tip: "Brak wędzonki: uczciwa zamiana według [zamienników](/pl/blog/zamienniki-skladnikow) — tu zostaje grochówka.",
          },
        ],
        seoTitle: "Grochówka przepis | Zupa grochowa | Alemniam",
        seoDescription:
          "Grochówka — zupa z grochu z kiełbasą i ziemniakami. Dwujęzycznie, zakupy w DE, jasno ≠ fasolka/kapuśniak.",
      },
    },
    ingredients: [
      {
        id: "gh-1",
        name: {
          de: "Gelbe Trockenerbsen (groch)",
          pl: "Groch żółty suszony",
        },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Polenladen oder Supermarkt-Hülsenfrüchte",
      },
      {
        id: "gh-2",
        name: {
          de: "Geräucherte Kiełbasa oder Speck",
          pl: "Wędzona kiełbasa lub słonina",
        },
        amount: 250,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen — siehe Kiełbasa-Arten",
        substitute: {
          de: "Mild geräucherter Schinken — ehrlich benennen",
          pl: "Łagodna wędzonka — nazwać uczciwie",
        },
      },
      {
        id: "gh-3",
        name: { de: "Kartoffeln", pl: "Ziemniaki" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "gh-4",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "gh-5",
        name: { de: "Karotte", pl: "Marchew" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "gh-6",
        name: {
          de: "Wasser oder leichte Brühe",
          pl: "Woda lub lekki wywar",
        },
        amount: 2,
        unit: { de: "l", pl: "l" },
        group: "pantry",
      },
      {
        id: "gh-7",
        name: {
          de: "Majoran, Lorbeer, Salz, Pfeffer, Dill",
          pl: "Majeranek, liść laurowy, sól, pieprz, koperek",
        },
        amount: 1,
        unit: { de: "nach Geschmack", pl: "do smaku" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-21T10:00:00.000Z",
    updatedAt: "2026-07-21T10:00:00.000Z",
  },
];
