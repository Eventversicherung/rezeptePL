import type { Recipe } from "@/types/content";

/**
 * Wave 9 Paket C — Babka money page (Wielkanoc Hefegugelhupf).
 * Integrator E merges into seed-recipes-wave9 / seed.ts.
 * No new blog pillar; no SEED_VERSION bump here.
 */
export const seedRecipesWave9C: Recipe[] = [
  {
    id: "recipe-babka",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1586985289906-406988974504?w=1600&q=80",
    prepMinutes: 40,
    cookMinutes: 55,
    servings: 12,
    regionIds: [],
    occasionIds: ["occasion-wielkanoc"],
    techniqueIds: ["technique-teig"],
    categoryIds: ["category-suess", "category-vegetarisch"],
    relatedPostIds: [
      "post-wielkanoc",
      "post-makowiec-technik",
      "post-polenladen",
      "post-ersatzprodukte-de",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Babka",
        slug: "babka",
        excerpt:
          "Babka wielkanocna — luftiger Hefegugelhupf aus der Form, festlich für Ostern in DE-Küchen.",
        steps: [
          {
            text: "Hefe in lauwarmer Milch mit etwas Zucker auflösen, 10 Minuten gehen lassen, bis sie schäumt.",
            tip: "Milch nur lauwarm — zu heiß tötet Hefe. Hefe-Feeling descriptiv: [Makowiec-Technik](/de/blog/makowiec-technik) (Rollenkuchen-Owner bleibt Makowiec).",
          },
          {
            text: "Mit Mehl, restlichem Zucker, Eiern, weicher Butter, Prise Salz und Vanille/Zitronenschale zu glattem, elastischem Teig kneten. Abgedeckt gehen lassen, bis verdoppelt (ca. 60–90 Min).",
          },
          {
            text: "Gugelhupf- oder Babka-Form gut fetten und mehlieren. Teig einfüllen (höchstens ⅔ voll), nochmals 20–30 Min gehen lassen, bis die Form gut gefüllt wirkt.",
            tip: "Keine Mohnspirale — das bleibt [Makowiec](/de/rezepte/makowiec). Käsekuchen-Linie: [Sernik](/de/rezepte/sernik).",
          },
          {
            text: "Bei 170–180 °C (Umluft etwas niedriger) goldbraun backen, ca. 45–55 Min. Stäbchenprobe im Teigkern; bei zu dunkler Kruste Folie auflegen.",
          },
          {
            text: "10 Minuten in der Form ruhen, stürzen, abkühlen. Mit Puderzucker oder leichter Glasur servieren — oft am [Wielkanoc](/de/blog/wielkanoc-speiseplan)-Tisch.",
            tip: "Hefe-Einkauf und Form: [Polenladen](/de/blog/polenladen-einkaufen).",
          },
        ],
        seoTitle: "Babka Rezept | Babka wielkanocna Hefegugelhupf | Alemniam",
        seoDescription:
          "Babka selbst backen: Hefeteig in der Form, bilingual mit DE-Einkauf und Wielkanoc-Kontext — ohne Makowiec-Kannibalismus.",
      },
      pl: {
        title: "Babka",
        slug: "babka",
        excerpt:
          "Babka wielkanocna — puszyste ciasto drożdżowe z formy, świątecznie na Wielkanoc w kuchniach DE.",
        steps: [
          {
            text: "Rozpuść drożdże w letnim mleku z odrobiną cukru, odstaw 10 min aż spienieją.",
            tip: "Mleko tylko letnie — za gorące zabija drożdże. Wyczucie drożdży opisowo: [technika makowca](/pl/blog/makowiec-technika) (owner rolady zostaje makowiec).",
          },
          {
            text: "Zagnieć z mąką, resztą cukru, jajkami, miękkim masłem, szczyptą soli oraz wanilią/skórką cytryny na gładkie, elastyczne ciasto. Przykryte odstaw aż podwoi objętość (ok. 60–90 min).",
          },
          {
            text: "Formę babkową lub keksową dobrze natłuść i oprósz mąką. Włóż ciasto (max ⅔ wysokości), odczekaj 20–30 min drugiego wyrastania.",
            tip: "Bez spirali makowej — to zostaje przy [makowcu](/pl/rezepte/makowiec). Linia sernika: [sernik](/pl/rezepte/sernik).",
          },
          {
            text: "Piecz w 170–180 °C (termoobieg nieco niżej) na złoto, ok. 45–55 min. Patyczek w środku; przy zbyt ciemną skórką nałóż folię.",
          },
          {
            text: "10 min w formie, wyjmij, ostudź. Posyp cukrem pudrem lub lekko polukruj — często przy [menu wielkanocnym](/pl/blog/menu-wielkanocne).",
            tip: "Zakupy drożdży i formy: [sklep polski](/pl/blog/sklep-polski-zakupy).",
          },
        ],
        seoTitle: "Babka przepis | Babka wielkanocna z formy | Alemniam",
        seoDescription:
          "Babka w domu: ciasto drożdżowe w formie, dwujęzycznie z zakupami w DE i kontekstem Wielkanocy — bez kanibalizacji makowca.",
      },
    },
    ingredients: [
      {
        id: "bk-1",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 450,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "bk-2",
        name: { de: "Milch", pl: "Mleko" },
        amount: 180,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "bk-3",
        name: { de: "Frischhefe", pl: "Drożdże świeże" },
        amount: 25,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "oder Trockenhefe nach Packung",
      },
      {
        id: "bk-4",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 100,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "bk-5",
        name: { de: "Eier", pl: "Jajka" },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "bk-6",
        name: { de: "Butter (weich)", pl: "Masło (miękkie)" },
        amount: 100,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "bk-7",
        name: { de: "Vanillezucker oder Vanille", pl: "Cukier waniliowy / wanilia" },
        amount: 1,
        unit: { de: "Päckchen", pl: "opak." },
        group: "pantry",
      },
      {
        id: "bk-8",
        name: {
          de: "Abrieb einer Bio-Zitrone (optional)",
          pl: "Skórka z cytryny bio (opcjonalnie)",
        },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "bk-9",
        name: { de: "Puderzucker zum Bestäuben", pl: "Cukier puder do posypania" },
        amount: 30,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "bk-10",
        name: {
          de: "Butter/Mehl für die Form",
          pl: "Masło/mąka do formy",
        },
        amount: 1,
        unit: { de: "EL", pl: "łyżka" },
        group: "pantry",
        storeHintDe: "Gugelhupf- oder Babka-Form gut vorbereiten",
      },
    ],
    createdAt: "2026-07-20T22:00:00.000Z",
    updatedAt: "2026-07-20T22:00:00.000Z",
  },
];
