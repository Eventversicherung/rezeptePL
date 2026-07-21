import type { Recipe } from "@/types/content";

/**
 * Wave 12 Paket B — Makaron z makiem + Szarlotka.
 * Isolated for Integrator E: do not import into seed.ts until merge.
 * Affiliate: guide-only (no relatedProductIds / no catalog recipeIds).
 * No new blog pillar.
 * Ownership: Makaron z makiem ≠ Makowiec (Rolle) ≠ Makaron z serem (Twaróg).
 * Szarlotka ≠ Racuchy ≠ Piernik ≠ Sernik ≠ Babka.
 * NO SEED_VERSION bump here. No commit/push.
 */
export const seedRecipesWave12B: Recipe[] = [
  {
    id: "recipe-makaron-z-makiem",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1630563775062-bbaf8ad3d73c?w=1600&q=80",
    prepMinutes: 15,
    cookMinutes: 20,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-wigilia"],
    techniqueIds: [],
    categoryIds: [
      "category-suess",
      "category-schnell",
      "category-vegetarisch",
      "category-hauptgerichte",
    ],
    relatedPostIds: [
      "post-wigilia",
      "post-makowiec-technik",
      "post-ersatzprodukte-de",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Makaron z makiem",
        slug: "makaron-z-makiem",
        excerpt:
          "Gekochte Nudeln mit Mohn, Butter und Zucker — klassische Wigilia-Mohnspeise. Klar ≠ Makowiec-Rolle und ≠ Makaron z serem.",
        steps: [
          {
            text: "Kurze Eiernudeln oder Bandnudeln in reichlich Salzwasser al dente kochen; abgießen, etwas Nudelwasser zurückhalten.",
            tip: "Das ist Pasta aus dem Topf — keine Hefe-Mohnrolle wie [Makowiec](/de/rezepte/makowiec). Menürahmen: [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
          },
          {
            text: "Mohn (blau, möglichst gemahlen) mit heißer Milch oder Wasser kurz aufquellen lassen, abtropfen; mit Zucker, geschmolzener Butter und optional Honig, Rosinen und Zitronenschale zu einer streichfähigen, nicht tropfenden Masse rühren.",
            tip: "Mohnqualität und Feiertagseinkauf: [Polenladen](/de/blog/polenladen-einkaufen). Masse-Feeling descriptiv wie im [Makowiec-Technik](/de/blog/makowiec-technik)-Guide — Primary bleibt Nudeln+Mohn, nicht Rollenkuchen.",
          },
          {
            text: "Heiße Nudeln mit der Mohnmasse und Butter vermengen; bei Bedarf ein Schuss Nudelwasser für Bindung. Abschmecken: süß, mohnig, nicht bitter.",
            tip: "Kein Twaróg hier — das wäre [Makaron z serem](/de/rezepte/makaron-z-serem). Ersatzlogik: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
          },
          {
            text: "Sofort warm servieren — auf Tellern, optional mit Puderzucker. Reste kalt oder kurz in der Pfanne mit Butter aufwärmen.",
          },
        ],
        seoTitle: "Makaron z makiem Rezept | Nudeln mit Mohn | Alemniam",
        seoDescription:
          "Makaron z makiem — Nudeln mit Mohn, Butter und Zucker. Wigilia-tauglich, bilingual. Klar getrennt von Makowiec und Makaron z serem.",
      },
      pl: {
        title: "Makaron z makiem",
        slug: "makaron-z-makiem",
        excerpt:
          "Ugotowany makaron z makiem, masłem i cukrem — klasyczna mohnowa potrawa wigilijna. Jasno ≠ makowiec-rolada i ≠ makaron z serem.",
        steps: [
          {
            text: "Ugotuj krótki makaron jajeczny lub wstążki al dente w osolonej wodzie; odcedź, zostaw odrobinę wody z gotowania.",
            tip: "To makaron z garnka — nie drożdżowa rolada jak [makowiec](/pl/rezepte/makowiec). Rama menu: [menu wigilijne](/pl/blog/menu-wigilijne).",
          },
          {
            text: "Mak (niebieski, najlepiej mielony) zalej gorącym mlekiem lub wodą, odsącz; wymieszaj z cukrem, roztopionym masłem oraz opcjonalnie miodem, rodzynkami i skórką cytryny do smarownej, nie cieknącej masy.",
            tip: "Jakość maku i zakupy świąteczne: [sklep polski](/pl/blog/sklep-polski-zakupy). Wyczucie masy opisowo jak w [technice makowca](/pl/blog/makowiec-technika) — primary zostaje makaron+mak, nie rolada.",
          },
          {
            text: "Wymieszaj gorący makaron z masą makową i masłem; w razie potrzeby dodaj odrobinę wody z gotowania. Dopraw: słodko, makowo, bez goryczy.",
            tip: "Bez twarogu — to byłby [makaron z serem](/pl/rezepte/makaron-z-serem). Zamienniki: [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
          },
          {
            text: "Podawaj od razu na ciepło — na talerzach, opcjonalnie z cukrem pudrem. Resztki na zimno albo krótko na patelni z masłem.",
          },
        ],
        seoTitle: "Makaron z makiem przepis | Makaron z makiem | Alemniam",
        seoDescription:
          "Makaron z makiem — makaron z makiem, masłem i cukrem. Na Wigilię, dwujęzycznie. Jasno osobno od makowca i makaronu z serem.",
      },
    },
    ingredients: [
      {
        id: "mzm-1",
        name: {
          de: "Kurze Eiernudeln oder Bandnudeln",
          pl: "Krótki makaron jajeczny lub wstążki",
        },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Supermarkt — keine Spezialform nötig",
      },
      {
        id: "mzm-2",
        name: {
          de: "Blauer Mohn, gemahlen",
          pl: "Mak niebieski, mielony",
        },
        amount: 150,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen — frisch gemahlen bevorzugt",
        substitute: {
          de: "Ganze Samen selbst mahlen — ehrlich benennen",
          pl: "Całe ziarna zmiel samodzielnie — nazwać uczciwie",
        },
      },
      {
        id: "mzm-3",
        name: { de: "Butter", pl: "Masło" },
        amount: 60,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "mzm-4",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 4,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "mzm-5",
        name: {
          de: "Milch oder Wasser (zum Aufquellen)",
          pl: "Mleko lub woda (do namoczenia)",
        },
        amount: 150,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "mzm-6",
        name: {
          de: "Honig (optional)",
          pl: "Miód (opcjonalnie)",
        },
        amount: 1,
        unit: { de: "EL", pl: "łyżka" },
        group: "pantry",
      },
      {
        id: "mzm-7",
        name: {
          de: "Rosinen (optional)",
          pl: "Rodzynki (opcjonalnie)",
        },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "mzm-8",
        name: {
          de: "Zitronenschale (optional)",
          pl: "Skórka cytryny (opcjonalnie)",
        },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-21T10:00:00.000Z",
    updatedAt: "2026-07-21T10:00:00.000Z",
  },
  {
    id: "recipe-szarlotka",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1694505396696-b093cca3d8ea?w=1600&q=80",
    prepMinutes: 35,
    cookMinutes: 50,
    servings: 12,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-suess", "category-vegetarisch"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-ersatzprodukte-de",
      "post-polenladen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Szarlotka",
        slug: "szarlotka",
        excerpt:
          "Polnischer Apfelkuchen vom Blech — Mürbeteig, saftige Äpfel, oft mit Streusel. Klar ≠ Racuchy, ≠ Piernik, ≠ Sernik.",
        steps: [
          {
            text: "Für den Teig Mehl, kalte Butter, Zucker, Ei und eine Prise Salz zu einem glatten Mürbeteig verkneten; zwei Drittel für den Boden, ein Drittel für den Deckel oder die Streusel beiseite. Teig 20–30 Minuten kühlen.",
            tip: "Das ist Ofenteig vom Blech — keine Hefe-Pfanne wie [Racuchy](/de/rezepte/racuchy-jablka) und kein Honig-Gewürz-[Piernik](/de/rezepte/piernik).",
          },
          {
            text: "Äpfel schälen, entkernen, in Scheiben oder Würfel schneiden; mit Zucker, Zimt und etwas Zitronensaft mischen. Optional Semmelbrösel oder Paniermehl dünn auf den Boden streuen, damit der Saft bindet.",
            tip: "Säure Äpfel (Boskoop, Elstar o. ä.) tragen besser. Einkauf Basis: [Polenladen](/de/blog/polenladen-einkaufen) optional für Gewürze; Ersatz: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
          },
          {
            text: "Boden in eine gefettete Form oder aufs Blech drücken; Apfelmasse verteilen; restlichen Teig als Gitter, Deckel oder Streusel darauf. Bei mittlerer Ofentemperatur goldbraun backen; Stäbchenprobe im Teig, Äpfel weich.",
            tip: "Sonntagskaffee-Feeling descriptiv: [polnisches Sonntagsessen](/de/blog/sonntagsessen-polnisch) — Primary bleibt Szarlotka.",
          },
          {
            text: "Auskühlen lassen, in Stücke schneiden; optional mit Puderzucker. Warm oder Zimmertemperatur zu Tee/Kaffee servieren.",
          },
        ],
        seoTitle: "Szarlotka Rezept | Polnischer Apfelkuchen | Alemniam",
        seoDescription:
          "Szarlotka — polnischer Apfelkuchen vom Blech mit Mürbeteig. Bilingual, klar getrennt von Racuchy, Piernik und Sernik.",
      },
      pl: {
        title: "Szarlotka",
        slug: "szarlotka",
        excerpt:
          "Polskie ciasto jabłkowe z blachy — kruche ciasto, soczyste jabłka, często z kruszonką. Jasno ≠ racuchy, ≠ piernik, ≠ sernik.",
        steps: [
          {
            text: "Na ciasto zagnieć mąkę, zimne masło, cukier, jajko i szczyptę soli na gładkie kruche ciasto; ⅔ na spód, ⅓ na wierzch lub kruszonkę. Chłodź 20–30 minut.",
            tip: "To ciasto z pieca z blachy — nie drożdże na patelni jak [racuchy](/pl/rezepte/racuchy-jablka) i nie miodowo-korzenny [piernik](/pl/rezepte/piernik).",
          },
          {
            text: "Jabłka obierz, wydrąż, pokrój w plastry lub kostkę; wymieszaj z cukrem, cynamonem i sokiem z cytryny. Opcjonalnie posyp spód bułką tartą, by związać sok.",
            tip: "Kwaśniejsze jabłka (Boskoop, Elstar itp.) niosą lepiej. Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy); zamienniki: [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
          },
          {
            text: "Wciśnij spód w natłuszczoną formę lub na blachę; rozłóż jabłka; resztę ciasta jako kratkę, pokrywę lub kruszonkę. Piecz na złoto w średniej temperaturze; patyczek w cieście, jabłka miękkie.",
            tip: "Kawowe niedzielne wyczucie opisowo: [obiad niedzielny](/pl/blog/obiad-niedzielny) — primary zostaje szarlotka.",
          },
          {
            text: "Ostudź, pokrój w kawałki; opcjonalnie cukier puder. Podawaj ciepło lub w temperaturze pokojowej do herbaty/kawy.",
          },
        ],
        seoTitle: "Szarlotka przepis | Ciasto jabłkowe | Alemniam",
        seoDescription:
          "Szarlotka — polskie ciasto jabłkowe z blachy na kruchym. Dwujęzycznie, jasno osobno od racuchów, piernika i sernika.",
      },
    },
    ingredients: [
      {
        id: "sz-1",
        name: { de: "Mehl Type 405/550", pl: "Mąka typ 405/550" },
        amount: 350,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "sz-2",
        name: { de: "Kalte Butter", pl: "Zimne masło" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "sz-3",
        name: { de: "Zucker (Teig + Äpfel)", pl: "Cukier (ciasto + jabłka)" },
        amount: 120,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "sz-4",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "sz-5",
        name: {
          de: "Äpfel (säuerlich, z. B. Boskoop/Elstar)",
          pl: "Jabłka (kwaśniejsze, np. Boskoop/Elstar)",
        },
        amount: 1.2,
        unit: { de: "kg", pl: "kg" },
        group: "produce",
        storeHintDe: "Supermarkt — säuerliche Sorten bevorzugen",
      },
      {
        id: "sz-6",
        name: { de: "Zimt", pl: "Cynamon" },
        amount: 1.5,
        unit: { de: "TL", pl: "łyżeczki" },
        group: "spices",
      },
      {
        id: "sz-7",
        name: {
          de: "Zitronensaft",
          pl: "Sok z cytryny",
        },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "produce",
      },
      {
        id: "sz-8",
        name: {
          de: "Semmelbrösel (optional, gegen Saft)",
          pl: "Bułka tarta (opcjonalnie, na sok)",
        },
        amount: 3,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "sz-9",
        name: { de: "Prise Salz", pl: "Szczypta soli" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-21T10:00:00.000Z",
    updatedAt: "2026-07-21T10:00:00.000Z",
  },
];
