import type { Recipe } from "@/types/content";

/** Wave 6 Wigilia money pages: Makowiec + Uszka (after baking pillar). */
export const seedRecipesWave6: Recipe[] = [
  {
    id: "recipe-makowiec",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1756137939545-f2daf3d0742c?w=1600&q=80",
    prepMinutes: 45,
    cookMinutes: 50,
    servings: 12,
    regionIds: [],
    occasionIds: ["occasion-wigilia"],
    techniqueIds: ["technique-teig"],
    categoryIds: ["category-suess", "category-vegetarisch"],
    videoUrl: null,
    translations: {
      de: {
        title: "Makowiec",
        slug: "makowiec",
        excerpt:
          "Gerollter Mohnkuchen — Hefeteig, dichte Mohnmasse, festlich für Wigilia.",
        steps: [
          {
            text: "Mohn mit heißer Milch aufquellen lassen, abkühlen, mit Zucker, Butter und Ei zu streichfähiger Masse rühren.",
            tip: "Masse soll nicht tropfen und nicht krümeln — siehe [Makowiec-Technik](/de/blog/makowiec-technik).",
          },
          {
            text: "Hefeteig aus Mehl, Milch, Butter, Zucker, Ei und Hefe kneten, gehen lassen bis verdoppelt.",
          },
          {
            text: "Teig rechteckig ausrollen, Mohnmasse mit Randabstand verstreichen, fest rollen, Naht nach unten.",
          },
          {
            text: "Mit Ei bestreichen, bei mittlere Hitze goldbraun backen, abkühlen, erst dann in Scheiben schneiden.",
            tip: "Zu heiß = außen dunkel, innen roh. Stäbchenprobe im Teigteil.",
          },
        ],
        seoTitle: "Makowiec Rezept | Mohnkuchen gerollt | Alemniam",
        seoDescription:
          "Makowiec backen — polnischer Mohnkuchen, bilingual mit DE-Einkauf und Wigilia-Kontext.",
      },
      pl: {
        title: "Makowiec",
        slug: "makowiec",
        excerpt:
          "Rolada makowa — ciasto drożdżowe, gęsta masa, świątecznie na Wigilię.",
        steps: [
          {
            text: "Zalej mak gorącym mlekiem, ostudź, wymieszaj z cukrem, masłem i jajkiem na smarowną masę.",
            tip: "Masa nie może kapać ani kruszyć — zobacz [technikę makowca](/pl/blog/makowiec-technika).",
          },
          {
            text: "Wyrób ciasto drożdżowe z mąki, mleka, masła, cukru, jajka i drożdży, odczekaj aż podwoi objętość.",
          },
          {
            text: "Rozwałkuj prostokąt, rozsmaruj masę z zapasem od brzegu, zwiń mocno, spód na łączeniu.",
          },
          {
            text: "Posmaruj jajkiem, piecz na złoto w średniej temperaturze, ostudź, kroić dopiero potem.",
            tip: "Za gorąco = wierzch ciemny, środek surowy. Patyczek w części ciasta.",
          },
        ],
        seoTitle: "Makowiec przepis | Rolada makowa | Alemniam",
        seoDescription:
          "Makowiec — polska rolada makowa, dwujęzycznie z zakupami w DE i kontekstem Wigilii.",
      },
    },
    ingredients: [
      {
        id: "mk-1",
        name: { de: "Blauer Mohn (gemahlen)", pl: "Mak niebieski (mielony)" },
        amount: 300,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen / Backregal — frisch mahlen oder fertig gemahlen",
      },
      {
        id: "mk-2",
        name: { de: "Milch", pl: "Mleko" },
        amount: 250,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "mk-3",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "mk-4",
        name: { de: "Butter", pl: "Masło" },
        amount: 100,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "mk-5",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 120,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "mk-6",
        name: { de: "Eier", pl: "Jajka" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "mk-7",
        name: { de: "Frischhefe", pl: "Drożdże świeże" },
        amount: 25,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "oder Trockenhefe nach Packung",
      },
      {
        id: "mk-8",
        name: { de: "Rosinen (optional)", pl: "Rodzynki (opcjonalnie)" },
        amount: 50,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-20T18:00:00.000Z",
    updatedAt: "2026-07-20T18:00:00.000Z",
  },
  {
    id: "recipe-uszka",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1716834092803-08c8dca5226f?w=1600&q=80",
    prepMinutes: 60,
    cookMinutes: 15,
    servings: 6,
    regionIds: [],
    occasionIds: ["occasion-wigilia", "occasion-post"],
    techniqueIds: ["technique-teig", "technique-fuellen"],
    categoryIds: ["category-vegetarisch", "category-hauptgerichte"],
    videoUrl: null,
    translations: {
      de: {
        title: "Uszka mit Pilzen",
        slug: "uszka",
        excerpt:
          "Kleine Teigtaschen mit Pilzfüllung — klassisch zu klarem Barszcz an Wigilia.",
        steps: [
          {
            text: "Getrocknete Pilze einweichen, fein hacken, mit Zwiebel schmoren, abkühlen, abschmecken.",
            tip: "Füllung muss trocken sein — nass reißt der Teig.",
          },
          {
            text: "Pierogi-Teig kneten und ruhen lassen — kleinere Kreise als bei Ruskie ausstechen.",
            tip: "Technik-Feeling: [Pierogi-Teig](/de/blog/pierogi-teig); Uszka sind eigene Rezeptseite.",
          },
          {
            text: "Wenig Füllung setzen, zu Öhrchen falten, Ränder fest verschließen.",
          },
          {
            text: "In leicht siedendem Salzwasser garen bis sie aufschwimmen; separat zu heißem [Barszcz](/de/rezepte/barszcz-czerwony) servieren.",
            tip: "Nicht stundenlang in der Suppe stehen lassen — Teig weicht.",
          },
        ],
        seoTitle: "Uszka Rezept | Pilz-Teigtaschen Wigilia | Alemniam",
        seoDescription:
          "Uszka mit Pilzen — kleine Pierogi zu Barszcz, bilingual mit DE-Einkauf.",
      },
      pl: {
        title: "Uszka z grzybami",
        slug: "uszka",
        excerpt:
          "Małe pierogi z farszem grzybowym — klasycznie do klarownego barszczu na Wigilię.",
        steps: [
          {
            text: "Namocz suszone grzyby, drobno posiekaj, duś z cebulą, ostudź, dopraw.",
            tip: "Farsz musi być suchy — mokry rozrywa ciasto.",
          },
          {
            text: "Wyrób ciasto na pierogi i odczekaj — wykrawaj mniejsze koła niż na ruskie.",
            tip: "Wyczucie: [ciasto na pierogi](/pl/blog/ciasto-na-pierogi); uszka to osobna Rezeptseite.",
          },
          {
            text: "Nakładaj mało farszu, zawiń w uszka, szczelnie zlep brzegi.",
          },
          {
            text: "Gotuj w lekko wrzącej osolonej wodzie aż wypłyną; podawaj osobno z gorącym [barszczem](/pl/rezepte/barszcz-czerwony).",
            tip: "Nie trzymaj godzinami w zupie — ciasto mięknie.",
          },
        ],
        seoTitle: "Uszka przepis | Pierogi grzybowe Wigilia | Alemniam",
        seoDescription:
          "Uszka z grzybami — małe pierogi do barszczu, dwujęzycznie z zakupami w DE.",
      },
    },
    ingredients: [
      {
        id: "us-1",
        name: { de: "Getrocknete Pilze", pl: "Suszone grzyby" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen — Steinpilze / Mischpilze",
      },
      {
        id: "us-2",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "us-3",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 300,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "us-4",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "us-5",
        name: { de: "Wasser", pl: "Woda" },
        amount: 120,
        unit: { de: "ml", pl: "ml" },
        group: "pantry",
      },
      {
        id: "us-6",
        name: { de: "Öl", pl: "Olej" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "us-7",
        name: { de: "Butter oder Öl zum Schmoren", pl: "Masło lub olej do duszenia" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "dairy",
      },
      {
        id: "us-8",
        name: { de: "Salz, Pfeffer", pl: "Sól, pieprz" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-20T18:10:00.000Z",
    updatedAt: "2026-07-20T18:10:00.000Z",
  },
];
