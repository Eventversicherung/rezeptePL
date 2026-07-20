import type { Recipe } from "@/types/content";

/** Wave 5 standalone money pages (leniwe, kopytka, łazanki, pyzy, zrazy). */
export const seedRecipesWave5: Recipe[] = [
  {
    id: "recipe-pierogi-leniwe",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?w=1600&q=80",
    prepMinutes: 25,
    cookMinutes: 15,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-teig"],
    categoryIds: [
      "category-schnell",
      "category-hauptgerichte",
      "category-vegetarisch",
      "category-suess",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Pierogi leniwe",
        slug: "pierogi-leniwe",
        excerpt:
          "Twaróg-Klößchen ohne Falten — schnell, mild, kinderfreundlich.",
        steps: [
          {
            text: "Twaróg mit Ei, Mehl und einer Prise Salz zu weichem Teig verkneten.",
            tip: "Teig soll nicht kleben — bei Bedarf Mehl nachlegen, nicht übertreiben.",
          },
          { text: "Zu einer Rolle formen, schräg in Stücke schneiden." },
          {
            text: "In leicht siedendem Salzwasser garen, bis sie aufschwimmen.",
          },
          {
            text: "Mit Butterbröseln, Zucker oder saurer Sahne servieren.",
            tip: "Gefüllte Obst-Knödel sind etwas anderes: [Knedle ze śliwkami](/de/rezepte/knedle-sliwki). Teigfamilie: [Pierogi-Guide](/de/blog/pierogi-guide).",
          },
        ],
        seoTitle: "Pierogi leniwe Rezept | Alemniam",
        seoDescription:
          "Pierogi leniwe mit Twaróg — ohne Falten, bilingual mit DE-Einkauf.",
      },
      pl: {
        title: "Pierogi leniwe",
        slug: "pierogi-leniwe",
        excerpt:
          "Kluseczki z twarogu bez lepienia — szybko, łagodnie, dla dzieci.",
        steps: [
          {
            text: "Zagnieć twaróg z jajkiem, mąką i szczyptą soli na miękkie ciasto.",
            tip: "Ciasto nie może kleić — dosyp mąki ostrożnie.",
          },
          { text: "Uformuj wałek, pokrój skośnie w kawałki." },
          {
            text: "Gotuj w lekko wrzącej osolonej wodzie aż wypłyną.",
          },
          {
            text: "Podawaj z bułką tartą na maśle, cukrem albo śmietaną.",
            tip: "Knedle z owocem to osobna strona: [knedle ze śliwkami](/pl/rezepte/knedle-sliwki). Rodzina ciast: [przewodnik pierogi](/pl/blog/przewodnik-pierogi).",
          },
        ],
        seoTitle: "Pierogi leniwe przepis | Alemniam",
        seoDescription:
          "Pierogi leniwe z twarogu — bez lepienia, dwujęzycznie.",
      },
    },
    ingredients: [
      {
        id: "pln-1",
        name: { de: "Twaróg", pl: "Twaróg" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Speisequark abgetropft / Magerquark",
      },
      {
        id: "pln-2",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 150,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "pln-3",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "pln-4",
        name: { de: "Butter", pl: "Masło" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "pln-5",
        name: { de: "Semmelbrösel", pl: "Bułka tarta" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-20T15:00:00.000Z",
    updatedAt: "2026-07-20T15:00:00.000Z",
  },
  {
    id: "recipe-kopytka",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?w=1600&q=80",
    prepMinutes: 35,
    cookMinutes: 20,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-teig"],
    categoryIds: ["category-hauptgerichte", "category-vegetarisch"],
    videoUrl: null,
    translations: {
      de: {
        title: "Kopytka",
        slug: "kopytka",
        excerpt:
          "Kartoffel-Teigstückchen — klassische Beilage zu Gulasz und Butterzwiebeln.",
        steps: [
          {
            text: "Kartoffeln kochen, ausdampfen, durch Presse drücken.",
          },
          {
            text: "Mit Mehl, Ei und Salz zu Teig kneten — nicht zu weich.",
            tip: "Zu viel Mehl macht sie gummiartig.",
          },
          { text: "Rollen formen, schräg schneiden, in Salzwasser garen." },
          {
            text: "Mit Butterzwiebeln oder [Gulasz](/de/rezepte/gulasz-wieprzowy) servieren.",
          },
        ],
        seoTitle: "Kopytka Rezept | Alemniam",
        seoDescription:
          "Kopytka aus Kartoffeln — Beilage zu Gulasz, bilingual.",
      },
      pl: {
        title: "Kopytka",
        slug: "kopytka",
        excerpt:
          "Kluseczki ziemniaczane — klasyk do gulaszu i cebuli na maśle.",
        steps: [
          {
            text: "Ugotuj ziemniaki, odparuj, przepuść przez praskę.",
          },
          {
            text: "Zagnieć z mąką, jajkiem i solą — nie za miękko.",
            tip: "Za dużo mąki robi je gumowate.",
          },
          { text: "Uformuj wałki, pokrój skośnie, gotuj w osolonej wodzie." },
          {
            text: "Podawaj z cebulą na maśle albo [gulaszem](/pl/rezepte/gulasz-wieprzowy).",
          },
        ],
        seoTitle: "Kopytka przepis | Alemniam",
        seoDescription:
          "Kopytka ziemniaczane — dodatek do gulaszu, dwujęzycznie.",
      },
    },
    ingredients: [
      {
        id: "ko-1",
        name: { de: "Kartoffeln", pl: "Ziemniaki" },
        amount: 800,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "ko-2",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "ko-3",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "ko-4",
        name: { de: "Butter", pl: "Masło" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "ko-5",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
    ],
    createdAt: "2026-07-20T15:10:00.000Z",
    updatedAt: "2026-07-20T15:10:00.000Z",
  },
  {
    id: "recipe-lazanki",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=1600&q=80",
    prepMinutes: 20,
    cookMinutes: 35,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-schmoren"],
    categoryIds: ["category-hauptgerichte"],
    videoUrl: null,
    translations: {
      de: {
        title: "Łazanki mit Kapusta",
        slug: "lazanki",
        excerpt:
          "Quadratische Nudeln mit Kraut und optional Speck — Diaspora-Alltagsteller.",
        steps: [
          {
            text: "Sauerkraut abtropfen, mit Zwiebel und optional Speck schmoren.",
          },
          {
            text: "Łazanki oder quadratische Bandnudeln in Salzwasser al dente kochen.",
            tip: "Polenladen hat oft fertige łazanki; sonst Bandnudeln breit schneiden.",
          },
          { text: "Nudeln unter das Kraut heben, mit Pfeffer abschmecken." },
          { text: "Heiß mit Dill oder pur servieren." },
        ],
        seoTitle: "Łazanki Rezept | Alemniam",
        seoDescription:
          "Łazanki z kapustą — Nudeln mit Kraut, bilingual mit DE-Einkauf.",
      },
      pl: {
        title: "Łazanki z kapustą",
        slug: "lazanki",
        excerpt:
          "Kwadratowe makarony z kapustą i opcjonalnie boczkiem — talerz diasporowy.",
        steps: [
          {
            text: "Odsącz kapustę, duś z cebulą i opcjonalnie boczkiem.",
          },
          {
            text: "Ugotuj łazanki al dente w osolonej wodzie.",
            tip: "W sklepie polskim bywają gotowe łazanki; inaczej szeroki makaron.",
          },
          { text: "Wymieszaj z kapustą, dopraw pieprzem." },
          { text: "Podawaj gorące z koperkiem albo same." },
        ],
        seoTitle: "Łazanki przepis | Alemniam",
        seoDescription:
          "Łazanki z kapustą — makaron z kapustą, dwujęzycznie.",
      },
    },
    ingredients: [
      {
        id: "la-1",
        name: { de: "Łazanki / Bandnudeln", pl: "Łazanki / makaron" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen oder breite Bandnudeln",
      },
      {
        id: "la-2",
        name: { de: "Sauerkraut", pl: "Kapusta kiszona" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "polish",
      },
      {
        id: "la-3",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "la-4",
        name: { de: "Speck (optional)", pl: "Boczek (opcjonalnie)" },
        amount: 100,
        unit: { de: "g", pl: "g" },
        group: "other",
      },
      {
        id: "la-5",
        name: { de: "Öl oder Schmalz", pl: "Olej lub smalec" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-20T15:20:00.000Z",
    updatedAt: "2026-07-20T15:20:00.000Z",
  },
  {
    id: "recipe-pyzy",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=1600&q=80",
    prepMinutes: 50,
    cookMinutes: 30,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-teig", "technique-fuellen"],
    categoryIds: ["category-hauptgerichte"],
    videoUrl: null,
    translations: {
      de: {
        title: "Pyzy mit Fleisch",
        slug: "pyzy",
        excerpt:
          "Große Kartoffelklöße mit Fleischfüllung — Projekt für den ruhigen Sonntag.",
        steps: [
          {
            text: "Kartoffeln kochen und reiben mischen (oder fertige Pyzy-Masse nach Gefühl).",
            tip: "Teig muss halten — zu weich zerfällt im Wasser.",
          },
          {
            text: "Hack mit Zwiebel anbraten, abkühlen, zu Kugeln formen.",
          },
          {
            text: "Kartoffelmasse um die Füllung legen, glatt schließen.",
          },
          {
            text: "In leicht siedendem Wasser garen, bis sie schwimmen. Mit Butterzwiebeln servieren.",
          },
        ],
        seoTitle: "Pyzy mit Fleisch Rezept | Alemniam",
        seoDescription:
          "Pyzy z mięsem — große Kartoffelklöße, bilingual.",
      },
      pl: {
        title: "Pyzy z mięsem",
        slug: "pyzy",
        excerpt:
          "Duże kluski ziemniaczane z farszem — projekt na spokojną niedzielę.",
        steps: [
          {
            text: "Ugotuj i zetrzyj ziemniaki, zagnieć masę.",
            tip: "Masa musi trzymać — za miękka pęka w wodzie.",
          },
          {
            text: "Przesmaż mięso z cebulą, ostudź, uformuj kulki.",
          },
          {
            text: "Owiń farsz masą ziemniaczaną, gładko zamknij.",
          },
          {
            text: "Gotuj w lekko wrzącej wodzie aż wypłyną. Podawaj z cebulą na maśle.",
          },
        ],
        seoTitle: "Pyzy z mięsem przepis | Alemniam",
        seoDescription:
          "Pyzy z mięsem — duże kluski ziemniaczane, dwujęzycznie.",
      },
    },
    ingredients: [
      {
        id: "py-1",
        name: { de: "Kartoffeln", pl: "Ziemniaki" },
        amount: 1000,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "py-2",
        name: { de: "Kartoffelstärke", pl: "Skrobia ziemniaczana" },
        amount: 80,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "py-3",
        name: { de: "Hackfleisch", pl: "Mięso mielone" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "other",
      },
      {
        id: "py-4",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "py-5",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "py-6",
        name: { de: "Butter", pl: "Masło" },
        amount: 50,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
    ],
    createdAt: "2026-07-20T15:30:00.000Z",
    updatedAt: "2026-07-20T15:30:00.000Z",
  },
  {
    id: "recipe-zrazy",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&q=80",
    prepMinutes: 40,
    cookMinutes: 90,
    servings: 4,
    regionIds: ["region-slask"],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-schmoren", "technique-fuellen"],
    categoryIds: ["category-hauptgerichte"],
    videoUrl: null,
    translations: {
      de: {
        title: "Zrazy zawijane",
        slug: "zrazy",
        excerpt:
          "Rinderrouladen polnisch — Senf, Speck, Gurke, lange geschmort.",
        steps: [
          {
            text: "Rinderplätzchen klopfen, mit Senf bestreichen, Speck und Gewürzgurke belegen.",
          },
          {
            text: "Fest rollen, mit Zahnstocher oder Garn fixieren, rundum anbraten.",
          },
          {
            text: "Mit Brühe ablöschen, zugedeckt 75–90 Minuten schmoren.",
            tip: "Fleisch soll mit der Gabel weich sein — nicht nach der Uhr allein.",
          },
          {
            text: "Soße abschmecken, mit [Kluski](/de/rezepte/kluski-slaskie) oder Kartoffeln servieren.",
          },
        ],
        seoTitle: "Zrazy zawijane Rezept | Alemniam",
        seoDescription:
          "Zrazy — polnische Rinderrouladen, bilingual mit Schmor-Technik.",
      },
      pl: {
        title: "Zrazy zawijane",
        slug: "zrazy",
        excerpt:
          "Wołowe zrazy — musztarda, boczek, ogórek, długo duszone.",
        steps: [
          {
            text: "Rozbij plastry wołowiny, posmaruj musztardą, połóż boczek i ogórek.",
          },
          {
            text: "Zwiń szczelnie, zepnij, obsmaż ze wszystkich stron.",
          },
          {
            text: "Zalej bulionem, duś pod przykryciem 75–90 minut.",
            tip: "Mięso ma być miękkie widelcem — nie tylko według zegara.",
          },
          {
            text: "Dopraw sos, podawaj z [klusami](/pl/rezepte/kluski-slaskie) albo ziemniakami.",
          },
        ],
        seoTitle: "Zrazy zawijane przepis | Alemniam",
        seoDescription:
          "Zrazy wołowe — duszenie, dwujęzycznie.",
      },
    },
    ingredients: [
      {
        id: "zr-1",
        name: { de: "Rinderplätzchen", pl: "Plastry wołowiny" },
        amount: 800,
        unit: { de: "g", pl: "g" },
        group: "other",
      },
      {
        id: "zr-2",
        name: { de: "Senf", pl: "Musztarda" },
        amount: 3,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "zr-3",
        name: { de: "Speck", pl: "Boczek" },
        amount: 120,
        unit: { de: "g", pl: "g" },
        group: "other",
      },
      {
        id: "zr-4",
        name: { de: "Gewürzgurken", pl: "Ogórki kiszone" },
        amount: 4,
        unit: { de: "Stück", pl: "szt." },
        group: "polish",
      },
      {
        id: "zr-5",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "zr-6",
        name: { de: "Brühe", pl: "Bulion" },
        amount: 400,
        unit: { de: "ml", pl: "ml" },
        group: "pantry",
      },
      {
        id: "zr-7",
        name: { de: "Majoran", pl: "Majeranek" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-20T15:40:00.000Z",
    updatedAt: "2026-07-20T15:40:00.000Z",
  },
];
