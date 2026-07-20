import type {
  CommunitySubmission,
  Profile,
  Recipe,
  SavedRecipe,
  ShoppingList,
} from "@/types/content";
import { seedClusters as expandedClusters } from "./seed-clusters";
import { seedBlogPosts } from "./seed-blog";
import {
  seedFamilies,
  seedFamilyVariantRecipes,
} from "./seed-families";

export const seedClusters = expandedClusters;
export { seedFamilies, seedBlogPosts };

const baseRecipes: Recipe[] = [
  {
    id: "recipe-pierogi",
    status: "published",
    coverImage: "/recipes/pierogi-ruskie.jpg",
    prepMinutes: 45,
    cookMinutes: 20,
    servings: 4,
    familyId: "family-pierogi",
    variantLabel: { de: "Ruskie", pl: "ruskie" },
    variantImage: "/recipes/pierogi-ruskie.jpg",
    regionIds: [],
    occasionIds: ["occasion-wigilia", "occasion-niedziela"],
    techniqueIds: ["technique-teig", "technique-freezer"],
    categoryIds: ["category-hauptgerichte", "category-vegetarisch"],
    relatedPostIds: [
      "post-pierogi-guide",
      "post-pierogi-formen",
      "post-teigmaschine",
      "post-freezer-meal-prep",
      "post-freezer-boxen",
      "post-pierogi-teig",
      "post-twarog",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Pierogi Ruskie",
        slug: "ruskie",
        excerpt:
          "Klassische Pierogi mit Kartoffel und Twaróg. Weich, würzig, zum Teilen.",
        steps: [
          {
            text: "Kartoffeln schälen, kochen und heiß stampfen.",
            tip: "Nicht zu wässrig. Abtropfen lassen.",
          },
          {
            text: "Twaróg zerdrücken, mit Kartoffel, Zwiebel und Salz mischen.",
          },
          {
            text: "Teig aus Mehl, Ei, Wasser und Öl kneten, 20 Min ruhen lassen.",
            tip: "Teig sollte weich, nicht klebrig sein.",
          },
          {
            text: "Kreise ausstechen, füllen, Ränder fest zusammendrücken.",
          },
          {
            text: "In Salzwasser garen, bis sie aufsteigen. Mit Butter und Zwiebel servieren.",
          },
        ],
        seoTitle: "Pierogi Ruskie Rezept | Alemniam",
        seoDescription:
          "Pierogi Ruskie kochen und einkaufen. Bilingual mit DE-Ladenhinweisen.",
        article: `## Pierogi Ruskie — die Hausvariante

Kartoffeln, Twaróg, Zwiebel. Kein Spektakel, dafür der Geschmack, den viele mit „Zuhause“ verbinden. Oben kannst du zu Fleisch oder Kraut-Pilze wechseln — dieselbe Familie, anderer Tag.

### Twaróg in DE

Lies den [Twaróg-Guide](/de/blog/twarog-deutschland). Quark gut abtropfen.

### Teig

Schritt [Pierogi-Teig](/de/blog/pierogi-teig) · [Teigmaschine](/de/blog/teigmaschine-pierogi) · [Technik Teig](/de/techniken/teig).

### Geschwister

Nur über den Varianten-Switcher: Fleisch, Kraut & Pilze.`,
      },
      pl: {
        title: "Pierogi ruskie",
        slug: "ruskie",
        excerpt:
          "Klasyczne pierogi z ziemniakami i twarogiem. Miękkie, sycące, do dzielenia.",
        steps: [
          {
            text: "Obierz ziemniaki, ugotuj i ugnieć na gorąco.",
            tip: "Odsącz dobrze. Masa nie może być wodnista.",
          },
          {
            text: "Rozduś twaróg, wymieszaj z ziemniakami, cebulą i solą.",
          },
          {
            text: "Zagnieć ciasto z mąki, jajka, wody i oleju, odstaw na 20 min.",
            tip: "Ciasto ma być miękkie, nie klejące.",
          },
          {
            text: "Wykrawaj kółka, nadziewaj, szczelnie sklej brzegi.",
          },
          {
            text: "Gotuj w osolonej wodzie, aż wypłyną. Podawaj z masłem i cebulą.",
          },
        ],
        seoTitle: "Pierogi ruskie przepis | Alemniam",
        seoDescription:
          "Pierogi ruskie. Gotowanie i zakupy, dwujęzycznie ze wskazówkami DE.",
        article: `## Pierogi ruskie — wariant domowy

Ziemniaki, twaróg, cebula. Bez widowiska — smak, który wielu łączy z domem. U góry przełączysz na mięso albo kapustę z grzybami.

### Twaróg w DE

[Poradnik twaróg](/pl/blog/twarog-w-niemczech). Quark dobrze odsącz.

### Ciasto

[Ciasto na pierogi](/pl/blog/ciasto-na-pierogi) · [Robot](/pl/blog/robot-do-ciasta-pierogi) · [Technika](/pl/techniken/ciasto).`,
      },
    },
    ingredients: [
      {
        id: "pi-1",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "pi-2",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "pi-3",
        name: { de: "Kartoffeln", pl: "Ziemniaki" },
        amount: 600,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "pi-4",
        name: { de: "Twaróg", pl: "Twaróg" },
        amount: 250,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Quark (Magerquark / Speisequark)",
        substitute: {
          de: "Magerquark, gut abgetropft",
          pl: "Chudy twaróg lub Quark dobrze odsączony",
        },
      },
      {
        id: "pi-5",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "pi-6",
        name: { de: "Butter", pl: "Masło" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
    ],
    createdAt: "2026-01-10T10:00:00.000Z",
    updatedAt: "2026-01-10T10:00:00.000Z",
  },
  {
    id: "recipe-bigos",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=1600&q=80",
    prepMinutes: 30,
    cookMinutes: 120,
    servings: 6,
    regionIds: [],
    occasionIds: [],
    techniqueIds: [],
    categoryIds: ["category-hauptgerichte"],
    videoUrl: null,
    translations: {
      de: {
        title: "Bigos",
        slug: "bigos",
        excerpt:
          "Polnischer Krauteintopf. Am besten einen Tag vorher gekocht.",
        steps: [
          { text: "Speck und Fleisch anbraten, herausnehmen." },
          {
            text: "Zwiebel und Pilze anschwitzen, Sauerkraut und Weißkohl zugeben.",
          },
          {
            text: "Fleisch zurück, mit Brühe, Lorbeer und Gewürzen schmoren.",
            tip: "Mindestens 1,5 Stunden. Besser über Nacht ruhen lassen.",
          },
          { text: "Abschmecken und mit Brot servieren." },
        ],
        seoTitle: "Bigos Rezept | Alemniam",
        seoDescription:
          "Bigos klassisch. Rezept mit Einkaufshilfe für Deutschland.",
      },
      pl: {
        title: "Bigos",
        slug: "bigos",
        excerpt: "Polski gulasz z kapusty. Najlepiej dzień wcześniej.",
        steps: [
          { text: "Podsmaż boczek i mięso, odłóż na bok." },
          {
            text: "Zeszklij cebulę i grzyby, dodaj kapustę kiszoną i świeżą.",
          },
          {
            text: "Włóż mięso z powrotem, duś z bulionem i przyprawami.",
            tip: "Minimum 1,5 h. Najlepiej odstaw na noc.",
          },
          { text: "Dopraw i podawaj z chlebem." },
        ],
        seoTitle: "Bigos przepis | Alemniam",
        seoDescription: "Klasyczny bigos. Przepis i lista zakupów.",
      },
    },
    ingredients: [
      {
        id: "bi-1",
        name: { de: "Sauerkraut", pl: "Kapusta kiszona" },
        amount: 800,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Sauerkraut / Kiszoná im Polenladen",
      },
      {
        id: "bi-2",
        name: { de: "Weißkohl", pl: "Kapusta biała" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "bi-3",
        name: { de: "Schweinefleisch", pl: "Wieprzowina" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "other",
      },
      {
        id: "bi-4",
        name: { de: "Speck", pl: "Boczek" },
        amount: 150,
        unit: { de: "g", pl: "g" },
        group: "other",
      },
      {
        id: "bi-5",
        name: { de: "Getrocknete Pilze", pl: "Suszone grzyby" },
        amount: 30,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Steinpilze getrocknet",
      },
      {
        id: "bi-6",
        name: { de: "Lorbeerblatt", pl: "Liść laurowy" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
    ],
    createdAt: "2026-01-12T10:00:00.000Z",
    updatedAt: "2026-01-12T10:00:00.000Z",
  },
  {
    id: "recipe-zurek",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1600&q=80",
    prepMinutes: 20,
    cookMinutes: 50,
    servings: 4,
    regionIds: ["region-slask"],
    occasionIds: ["occasion-wigilia"],
    techniqueIds: [],
    categoryIds: ["category-suppen"],
    videoUrl: null,
    translations: {
      de: {
        title: "Żurek",
        slug: "zurek",
        excerpt: "Sauerteigsuppe mit Weißwurst und Ei. Warm und klar.",
        steps: [
          {
            text: "Żur-Ansatz mit Wasser und Gewürzen aufkochen.",
            tip: "Fertigen Żur gibt’s im Polenladen.",
          },
          { text: "Wurst und Kartoffeln mitgaren." },
          { text: "Mit Knoblauch und Majoran abschmecken, Ei dazugeben." },
        ],
        seoTitle: "Żurek Rezept | Alemniam",
        seoDescription: "Żurek kochen. Mit Tipps wo man Żur in DE findet.",
      },
      pl: {
        title: "Żurek",
        slug: "zurek",
        excerpt: "Zupa na zakwasie z białą kiełbasą i jajkiem.",
        steps: [
          {
            text: "Zagotuj zakwas żuru z wodą i przyprawami.",
            tip: "Gotowy żur kupisz w polskim sklepie.",
          },
          { text: "Ugotuj kiełbasę i ziemniaki w zupie." },
          { text: "Dopraw czosnkiem i majerankiem, dodaj jajko." },
        ],
        seoTitle: "Żurek przepis | Alemniam",
        seoDescription: "Żurek. Przepis i lista zakupów dwujęzycznie.",
      },
    },
    ingredients: [
      {
        id: "zu-1",
        name: { de: "Żur-Ansatz", pl: "Zakwas na żur" },
        amount: 500,
        unit: { de: "ml", pl: "ml" },
        group: "polish",
        storeHintDe: "Żurek / Sauerteigsuppe-Ansatz",
        substitute: {
          de: "Roggenmehl-Sauerteig selbst ansetzen (3–4 Tage)",
          pl: "Własny zakwas żytni (3–4 dni)",
        },
      },
      {
        id: "zu-2",
        name: { de: "Weiße Wurst", pl: "Biała kiełbasa" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Weißwurst polnisch / biała kiełbasa",
      },
      {
        id: "zu-3",
        name: { de: "Kartoffeln", pl: "Ziemniaki" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "zu-4",
        name: { de: "Majoran", pl: "Majeranek" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
      {
        id: "zu-5",
        name: { de: "Eier", pl: "Jajka" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
    ],
    createdAt: "2026-01-14T10:00:00.000Z",
    updatedAt: "2026-01-14T10:00:00.000Z",
  },
  {
    id: "recipe-oscypek",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=1600&q=80",
    prepMinutes: 10,
    cookMinutes: 15,
    servings: 2,
    regionIds: ["region-podhale"],
    occasionIds: [],
    techniqueIds: [],
    categoryIds: ["category-schnell", "category-vegetarisch"],
    videoUrl: null,
    translations: {
      de: {
        title: "Gegrillter Oscypek mit Preiselbeeren",
        slug: "oscypek-preiselbeeren",
        excerpt: "Schneller Podhale-Teller. Rauchig, süß-sauer.",
        steps: [
          { text: "Oscypek in Scheiben schneiden." },
          {
            text: "In der Pfanne oder auf dem Grill goldbraun braten.",
            tip: "Nicht zu heiß. Der Käse soll nur anschmelzen.",
          },
          { text: "Mit Preiselbeeren und Roggenbrot servieren." },
        ],
        seoTitle: "Oscypek mit Preiselbeeren | Alemniam",
        seoDescription: "Gegrillter Oscypek. Schnelles Podhale-Rezept.",
      },
      pl: {
        title: "Oscypek z żurawiną",
        slug: "oscypek-zurawina",
        excerpt: "Szybki talerz z Podhala. Wędzony, słodko-kwaśny.",
        steps: [
          { text: "Pokrój oscypek w plastry." },
          {
            text: "Opiecz na patelni lub grillu na złoto.",
            tip: "Nie za mocno. Ser ma tylko się podtopić.",
          },
          { text: "Podawaj z żurawiną i chlebem żytnim." },
        ],
        seoTitle: "Oscypek z żurawiną | Alemniam",
        seoDescription: "Oscypek z żurawiną. Szybki przepis z Podhala.",
      },
    },
    ingredients: [
      {
        id: "os-1",
        name: { de: "Oscypek", pl: "Oscypek" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Geräucherter Schafskäse / Oscypek",
        substitute: {
          de: "Geräucherter Halloumi oder Bundz",
          pl: "Wędzony halloumi lub bundz",
        },
      },
      {
        id: "os-2",
        name: { de: "Preiselbeeren", pl: "Żurawina" },
        amount: 80,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Preiselbeeren / Cranberry-Kompott",
      },
      {
        id: "os-3",
        name: { de: "Roggenbrot", pl: "Chleb żytni" },
        amount: 4,
        unit: { de: "Scheiben", pl: "kromki" },
        group: "pantry",
      },
    ],
    createdAt: "2026-01-16T10:00:00.000Z",
    updatedAt: "2026-01-16T10:00:00.000Z",
  },
  {
    id: "recipe-placki",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1600&q=80",
    prepMinutes: 20,
    cookMinutes: 25,
    servings: 4,
    regionIds: [],
    occasionIds: [],
    techniqueIds: [],
    categoryIds: [
      "category-schnell",
      "category-hauptgerichte",
      "category-vegetarisch",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Placki ziemniaczane",
        slug: "placki-ziemniaczane",
        excerpt: "Knusprige Kartoffelpuffer. Mit Sauerrahm oder Gulasch.",
        steps: [
          { text: "Kartoffeln und Zwiebel reiben, gut ausdrücken." },
          { text: "Mit Ei, Mehl und Salz verrühren." },
          {
            text: "In heißem Öl goldbraun ausbacken.",
            tip: "Nicht zu dick. Sonst bleiben sie innen roh.",
          },
          { text: "Heiß mit Sauerrahm servieren." },
        ],
        seoTitle: "Placki ziemniaczane Rezept | Alemniam",
        seoDescription: "Polnische Kartoffelpuffer. Rezept und Einkaufsliste.",
      },
      pl: {
        title: "Placki ziemniaczane",
        slug: "placki-ziemniaczane",
        excerpt: "Chrupiące placki. Ze śmietaną lub gulaszem.",
        steps: [
          { text: "Zetrzyj ziemniaki i cebulę, dobrze odciśnij." },
          { text: "Wymieszaj z jajkiem, mąką i solą." },
          {
            text: "Smaż na złoto na gorącym oleju.",
            tip: "Nie za grube. Inaczej zostaną surowe w środku.",
          },
          { text: "Podawaj gorące ze śmietaną." },
        ],
        seoTitle: "Placki ziemniaczane przepis | Alemniam",
        seoDescription: "Placki ziemniaczane. Przepis i lista zakupów.",
      },
    },
    ingredients: [
      {
        id: "pl-1",
        name: { de: "Kartoffeln", pl: "Ziemniaki" },
        amount: 800,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "pl-2",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "pl-3",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "pl-4",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "pl-5",
        name: { de: "Sauerrahm", pl: "Śmietana" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "dairy",
        storeHintDe: "Schmand / saure Sahne 20%",
      },
    ],
    createdAt: "2026-02-01T10:00:00.000Z",
    updatedAt: "2026-02-01T10:00:00.000Z",
  },
  {
    id: "recipe-golabki",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1600&q=80",
    prepMinutes: 40,
    cookMinutes: 60,
    servings: 4,
    regionIds: [],
    occasionIds: [],
    techniqueIds: [],
    categoryIds: ["category-hauptgerichte"],
    videoUrl: null,
    translations: {
      de: {
        title: "Gołąbki",
        slug: "golabki",
        excerpt: "Kohlrouladen mit Reis und Fleisch in Tomatensoße.",
        steps: [
          { text: "Weißkohl blanchieren, Blätter lösen." },
          { text: "Füllung aus Hack, Reis und Zwiebel würzen." },
          { text: "Rollen wickeln, in Tomatensoße schmoren.", tip: "Ca. 50–60 Min. Bei mittlerer Hitze." },
          { text: "Mit Dill und Brot servieren." },
        ],
        seoTitle: "Gołąbki Rezept | Alemniam",
        seoDescription: "Polnische Kohlrouladen. Kochen und einkaufen.",
      },
      pl: {
        title: "Gołąbki",
        slug: "golabki",
        excerpt: "Gołąbki z ryżem i mięsem w sosie pomidorowym.",
        steps: [
          { text: "Blanszuj kapustę, oddziel liście." },
          { text: "Przygotuj farsz z mięsa, ryżu i cebuli." },
          { text: "Zawiń rolki, duś w sosie pomidorowym.", tip: "Ok. 50–60 min na średnim ogniu." },
          { text: "Podawaj z koperkiem i chlebem." },
        ],
        seoTitle: "Gołąbki przepis | Alemniam",
        seoDescription: "Gołąbki. Przepis i lista zakupów.",
      },
    },
    ingredients: [
      {
        id: "go-1",
        name: { de: "Weißkohl", pl: "Kapusta biała" },
        amount: 1,
        unit: { de: "Kopf", pl: "główka" },
        group: "produce",
      },
      {
        id: "go-2",
        name: { de: "Hackfleisch gemischt", pl: "Mięso mielone" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "other",
      },
      {
        id: "go-3",
        name: { de: "Reis", pl: "Ryż" },
        amount: 120,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "go-4",
        name: { de: "Passierte Tomaten", pl: "Passata" },
        amount: 500,
        unit: { de: "ml", pl: "ml" },
        group: "pantry",
      },
      {
        id: "go-5",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
    ],
    createdAt: "2026-02-03T10:00:00.000Z",
    updatedAt: "2026-02-03T10:00:00.000Z",
  },
  {
    id: "recipe-barszcz",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1590412200988-a436970781fa?w=1600&q=80",
    prepMinutes: 25,
    cookMinutes: 45,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-wigilia"],
    techniqueIds: [],
    categoryIds: ["category-suppen", "category-vegetarisch"],
    videoUrl: null,
    translations: {
      de: {
        title: "Barszcz czerwony",
        slug: "barszcz-czerwony",
        excerpt: "Klarer Rote-Bete-Eintopf. Klassisch zur Wigilia mit Uszka.",
        steps: [
          { text: "Rote Bete schälen, würfeln, mit Brühe kochen." },
          { text: "Mit Knoblauch, Essig und Zucker abschmecken.", tip: "Soll säuerlich-süß sein, nicht matt." },
          { text: "Absieben für klare Brühe oder stückig lassen." },
          { text: "Mit Uszka oder Kartoffeln servieren." },
        ],
        seoTitle: "Barszcz czerwony Rezept | Alemniam",
        seoDescription: "Polnischer Barszcz. Rezept mit DE-Einkaufstipps.",
      },
      pl: {
        title: "Barszcz czerwony",
        slug: "barszcz-czerwony",
        excerpt: "Klarowny barszcz. Klasycznie na Wigilię z uszkami.",
        steps: [
          { text: "Obierz buraki, pokrój, gotuj w bulionie." },
          { text: "Dopraw czosnkiem, octem i cukrem.", tip: "Ma być kwaśno-słodki, nie mdły." },
          { text: "Przecedź dla klarownego barszczu lub zostaw z warzywami." },
          { text: "Podawaj z uszkami lub ziemniakami." },
        ],
        seoTitle: "Barszcz czerwony przepis | Alemniam",
        seoDescription: "Barszcz czerwony. Przepis i zakupy.",
      },
    },
    ingredients: [
      {
        id: "ba-1",
        name: { de: "Rote Bete", pl: "Buraki" },
        amount: 600,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "ba-2",
        name: { de: "Gemüsebrühe", pl: "Bulion warzywny" },
        amount: 1.2,
        unit: { de: "l", pl: "l" },
        group: "pantry",
      },
      {
        id: "ba-3",
        name: { de: "Knoblauch", pl: "Czosnek" },
        amount: 2,
        unit: { de: "Zehen", pl: "ząbki" },
        group: "produce",
      },
      {
        id: "ba-4",
        name: { de: "Essig", pl: "Ocet" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
        storeHintDe: "Weinessig / Apfelessig",
      },
      {
        id: "ba-5",
        name: { de: "Allspice", pl: "Ziele angielskie" },
        amount: 4,
        unit: { de: "Körner", pl: "szt." },
        group: "spices",
        storeHintDe: "Piment ganz",
      },
    ],
    createdAt: "2026-02-05T10:00:00.000Z",
    updatedAt: "2026-02-05T10:00:00.000Z",
  },
  {
    id: "recipe-schabowy",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=1600&q=80",
    prepMinutes: 20,
    cookMinutes: 20,
    servings: 4,
    regionIds: [],
    occasionIds: [],
    techniqueIds: [],
    categoryIds: ["category-schnell", "category-hauptgerichte"],
    videoUrl: null,
    translations: {
      de: {
        title: "Kotlet schabowy",
        slug: "kotlet-schabowy",
        excerpt: "Polnisches Schnitzel. Mit Kartoffeln und Krautsalat.",
        steps: [
          { text: "Schnitzel klopfen, salzen, pfeffern." },
          { text: "Durch Mehl, Ei und Panade ziehen." },
          { text: "In Butterschmalz goldbraun braten.", tip: "Nicht zu heiß. Panade soll nicht verbrennen." },
          { text: "Mit Zitrone und Beilagen servieren." },
        ],
        seoTitle: "Kotlet schabowy Rezept | Alemniam",
        seoDescription: "Polnisches Schnitzel. Rezept und Einkaufsliste.",
      },
      pl: {
        title: "Kotlet schabowy",
        slug: "kotlet-schabowy",
        excerpt: "Klasyczny schabowy. Z ziemniakami i surówką.",
        steps: [
          { text: "Rozbij kotlety, posól, popieprz." },
          { text: "Obtocz w mące, jajku i bułce tartej." },
          { text: "Smaż na złoto na smalcu lub maśle klarowanym.", tip: "Nie za mocno. Panierka nie może się przypalić." },
          { text: "Podawaj z cytryną i dodatkami." },
        ],
        seoTitle: "Kotlet schabowy przepis | Alemniam",
        seoDescription: "Kotlet schabowy. Przepis i zakupy.",
      },
    },
    ingredients: [
      {
        id: "sc-1",
        name: { de: "Schweineschnitzel", pl: "Kotlety wieprzowe" },
        amount: 4,
        unit: { de: "Stück", pl: "szt." },
        group: "other",
      },
      {
        id: "sc-2",
        name: { de: "Eier", pl: "Jajka" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "sc-3",
        name: { de: "Semmelbrösel", pl: "Bułka tarta" },
        amount: 120,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "sc-4",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 60,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "sc-5",
        name: { de: "Butterschmalz", pl: "Smalec / masło klarowane" },
        amount: 80,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
    ],
    createdAt: "2026-02-07T10:00:00.000Z",
    updatedAt: "2026-02-07T10:00:00.000Z",
  },
  {
    id: "recipe-nalesniki",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1600&q=80",
    prepMinutes: 15,
    cookMinutes: 25,
    servings: 4,
    regionIds: [],
    occasionIds: [],
    techniqueIds: ["technique-teig"],
    categoryIds: [
      "category-schnell",
      "category-suess",
      "category-vegetarisch",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Naleśniki mit Twaróg",
        slug: "nalesniki-twarog",
        excerpt: "Dünne Pfannkuchen mit süßer Quarkfüllung.",
        steps: [
          { text: "Teig aus Milch, Eiern und Mehl ruhen lassen." },
          { text: "Dünne Pfannkuchen backen." },
          { text: "Twaróg mit Zucker und Vanille mischen.", tip: "Etwas Sauerrahm macht die Füllung cremiger." },
          { text: "Füllen, rollen, optional in Butter anbraten." },
        ],
        seoTitle: "Naleśniki mit Twaróg | Alemniam",
        seoDescription: "Polnische Pfannkuchen mit Quark. Rezept und Liste.",
      },
      pl: {
        title: "Naleśniki z twarogiem",
        slug: "nalesniki-twarog",
        excerpt: "Cienkie naleśniki ze słodkim twarogiem.",
        steps: [
          { text: "Zrób ciasto z mleka, jajek i mąki, odstaw." },
          { text: "Usmaż cienkie naleśniki." },
          { text: "Wymieszaj twaróg z cukrem i wanilią.", tip: "Odrobina śmietany daje kremowość." },
          { text: "Nadziewaj, zawiń, opcjonalnie podsmaż na maśle." },
        ],
        seoTitle: "Naleśniki z twarogiem | Alemniam",
        seoDescription: "Naleśniki z twarogiem. Przepis i zakupy.",
      },
    },
    ingredients: [
      {
        id: "na-1",
        name: { de: "Milch", pl: "Mleko" },
        amount: 400,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "na-2",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "na-3",
        name: { de: "Eier", pl: "Jajka" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "na-4",
        name: { de: "Twaróg", pl: "Twaróg" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Speisequark / Magerquark",
      },
      {
        id: "na-5",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
    ],
    createdAt: "2026-02-09T10:00:00.000Z",
    updatedAt: "2026-02-09T10:00:00.000Z",
  },
  {
    id: "recipe-rosol",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=1600&q=80",
    prepMinutes: 20,
    cookMinutes: 120,
    servings: 6,
    regionIds: [],
    occasionIds: [],
    techniqueIds: [],
    categoryIds: ["category-suppen"],
    videoUrl: null,
    translations: {
      de: {
        title: "Rosół",
        slug: "rosol",
        excerpt: "Klare Hühnerbrühe mit Nudeln. Sonntagsklassiker.",
        steps: [
          { text: "Huhn mit Gemüse kalt aufsetzen, langsam köcheln." },
          { text: "Schaum abschöpfen, 1,5–2 Std. Ziehen lassen.", tip: "Nicht sprudelnd kochen. Bleibt klar." },
          { text: "Absieben, würzen, mit Fadenudeln servieren." },
          { text: "Mit Petersilie und etwas Karotte anrichten." },
        ],
        seoTitle: "Rosół Rezept | Alemniam",
        seoDescription: "Polnische Hühnerbrühe. Rezept und Einkaufshilfe.",
      },
      pl: {
        title: "Rosół",
        slug: "rosol",
        excerpt: "Klarowny rosół z makaronem. Niedzielny klasyk.",
        steps: [
          { text: "Zalej kurczaka z warzywami zimną wodą, gotuj powoli." },
          { text: "Zbieraj szumowiny, gotuj 1,5–2 godz.", tip: "Bez burzenia. Będzie klarowny." },
          { text: "Przecedź, dopraw, podawaj z nitkami." },
          { text: "Udekoruj pietruszką i marchewką." },
        ],
        seoTitle: "Rosół przepis | Alemniam",
        seoDescription: "Rosół. Przepis i lista zakupów.",
      },
    },
    ingredients: [
      {
        id: "ro-1",
        name: { de: "Suppenhuhn", pl: "Kurczak na rosół" },
        amount: 1.2,
        unit: { de: "kg", pl: "kg" },
        group: "other",
      },
      {
        id: "ro-2",
        name: { de: "Karotten", pl: "Marchew" },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "ro-3",
        name: { de: "Petersilienwurzel", pl: "Pietruszka" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
        storeHintDe: "Petersilienwurzel / Pastinake als Alternative",
      },
      {
        id: "ro-4",
        name: { de: "Sellerie", pl: "Seler" },
        amount: 0.25,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "ro-5",
        name: { de: "Fadenudeln", pl: "Makaron nitki" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Suppennudeln / Zartmacher",
      },
    ],
    createdAt: "2026-02-11T10:00:00.000Z",
    updatedAt: "2026-02-11T10:00:00.000Z",
  },
  {
    id: "recipe-fasolka",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=1600&q=80",
    prepMinutes: 15,
    cookMinutes: 40,
    servings: 4,
    regionIds: [],
    occasionIds: [],
    techniqueIds: [],
    categoryIds: ["category-schnell", "category-hauptgerichte"],
    videoUrl: null,
    translations: {
      de: {
        title: "Fasolka po bretońsku",
        slug: "fasolka-po-bretonsku",
        excerpt: "Bohnen mit Wurst in würziger Tomatensoße. Sättigend und schnell.",
        steps: [
          { text: "Zwiebel und Speck anbraten." },
          { text: "Wurst und Tomatenmark zugeben." },
          { text: "Bohnen und Gewürze einkochen.", tip: "Majoran nicht vergessen." },
          { text: "Mit Brot servieren." },
        ],
        seoTitle: "Fasolka po bretońsku | Alemniam",
        seoDescription: "Polnische Bohnen mit Wurst. Rezept und Liste.",
      },
      pl: {
        title: "Fasolka po bretońsku",
        slug: "fasolka-po-bretonsku",
        excerpt: "Fasola z kiełbasą w sosie pomidorowym. Sycąco i szybko.",
        steps: [
          { text: "Podsmaż cebulę i boczek." },
          { text: "Dodaj kiełbasę i koncentrat pomidorowy." },
          { text: "Duś z fasolą i przyprawami.", tip: "Nie zapomnij majeranku." },
          { text: "Podawaj z chlebem." },
        ],
        seoTitle: "Fasolka po bretońsku przepis | Alemniam",
        seoDescription: "Fasolka po bretońsku. Przepis i zakupy.",
      },
    },
    ingredients: [
      {
        id: "fa-1",
        name: { de: "Weiße Bohnen (Glas/Dose)", pl: "Fasola jaś / biała" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "fa-2",
        name: { de: "Polnische Wurst", pl: "Kiełbasa" },
        amount: 300,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Kabanos oder Krakauer",
      },
      {
        id: "fa-3",
        name: { de: "Tomatenmark", pl: "Koncentrat pomidorowy" },
        amount: 3,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "fa-4",
        name: { de: "Speck", pl: "Boczek" },
        amount: 100,
        unit: { de: "g", pl: "g" },
        group: "other",
      },
      {
        id: "fa-5",
        name: { de: "Majoran", pl: "Majeranek" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
    ],
    createdAt: "2026-02-13T10:00:00.000Z",
    updatedAt: "2026-02-13T10:00:00.000Z",
  },
  {
    id: "recipe-faworki",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1600&q=80",
    prepMinutes: 15,
    cookMinutes: 30,
    servings: 50,
    regionIds: [],
    occasionIds: ["occasion-tlusty-czwartek"],
    techniqueIds: ["technique-teig"],
    categoryIds: ["category-schnell", "category-suess"],
    videoUrl: null,
    translations: {
      de: {
        title: "Faworki",
        slug: "faworki",
        excerpt:
          "Knusprige Schleifen mit Puderzucker. Klassiker für Tłusty Czwartek.",
        steps: [
          {
            text: "Mehl, Eigelb, saure Sahne, Backpulver, Zucker und Wodka etwa 10 Minuten zu einem glatten Teig kneten.",
            tip: "Wodka hilft beim Frittieren: der Teig nimmt weniger Öl auf.",
          },
          {
            text: "Teig halbieren und jedes Stück hauchdünn ausrollen (Nudelholz oder Pastamaschine).",
          },
          {
            text: "In Rechtecke ca. 10×3 cm schneiden. Längs mittig einschneiden (Rand lassen) und ein Ende durchziehen — so entsteht die Schlinge.",
          },
          {
            text: "Öl auf 170–180 °C erhitzen. Faworki 1–2 Minuten pro Seite goldgelb frittieren.",
            tip: "Holzstäbchen testen: viele Blasen = heiß genug. Nicht überfüllen.",
          },
          {
            text: "Auf Küchenpapier abtropfen und noch warm großzügig mit Puderzucker bestäuben.",
          },
        ],
        seoTitle: "Faworki Rezept | Polnisches Fasnachtsgebäck | Alemniam",
        seoDescription:
          "Faworki (Chruściki) selbst machen. Knusprig, mit Puderzucker — inkl. Einkaufshilfe für DE.",
        article: `## Faworki — Schleifen für den Fettsdonnerstag

Faworki (auch Chrust oder Chruściki) sind dünne, frittierte Teigschlingen mit Puderzucker. Traditionell an Tłusty Czwartek, aber jederzeit ein knuspriger Grund zum Feiern.

### Teig

Eigelb und saure Sahne machen den Teig zart. Ein Schuss Wodka (oder Rum) ist kein Geschmackstrick, sondern Technik: weniger Öl im fertigen Gebäck.

### Formen

Hauchdünn ausrollen. Dicke Stellen bleiben innen teigig. Die Schlinge entsteht, wenn du ein Ende durch den Mittelschnitt ziehst.

### Frittieren

170–180 °C. Zu heiß = außen dunkel, innen roh. Zu kalt = ölig. Portionweise arbeiten, abtropfen, warm bestäuben.

### Haltbarkeit

In einer Dose 2–4 Tage. Gut verpackt einfrieren: ca. 2 Monate.`,
      },
      pl: {
        title: "Faworki",
        slug: "faworki",
        excerpt:
          "Chrupiące chruściki z cukrem pudrem. Klasyk na Tłusty Czwartek.",
        steps: [
          {
            text: "Zagnieć mąkę, żółtka, śmietanę, proszek do pieczenia, cukier i wódkę ok. 10 min na gładkie ciasto.",
            tip: "Wódka pomaga przy smażeniu: ciasto wchłania mniej tłuszczu.",
          },
          {
            text: "Podziel ciasto na pół i rozwałkuj papierowo cienko (wałek lub maszynka do makaronu).",
          },
          {
            text: "Pokrój na prostokąty ok. 10×3 cm. Naciąć wzdłuż na środku i przeciągnąć jeden koniec — powstaje pętla.",
          },
          {
            text: "Rozgrzej olej do 170–180 °C. Smaż 1–2 minuty z każdej strony na złoto.",
            tip: "Test patyczkiem: dużo bąbelków = wystarczająco gorąco.",
          },
          {
            text: "Odsącz na papierze i jeszcze ciepłe obficie posyp cukrem pudrem.",
          },
        ],
        seoTitle: "Faworki przepis | Chruściki | Alemniam",
        seoDescription:
          "Faworki (chruściki) w domu. Chrupiące, z cukrem pudrem — z listą zakupów w DE.",
        article: `## Faworki — chruściki na Tłusty Czwartek

Faworki (też chrust / chruściki) to cienkie, smażone pętle z ciasta posypane cukrem pudrem. Tradycyjnie na Tłusty Czwartek — i zawsze, gdy chce się czegoś chrupiącego.

### Ciasto

Żółtka i śmietana dają delikatność. Odrobina wódki (lub rumu) to technika: mniej tłuszczu w gotowym wypieku.

### Formowanie

Rozwałkuj bardzo cienko. Grubsze miejsca zostają surowe w środku. Pętla powstaje po przeciągnięciu końca przez nacięcie.

### Smażenie

170–180 °C. Za gorąco = ciemno na zewnątrz, surowe w środku. Za chłodno = tłuste. Smaż partiami, odsącz, posyp na ciepło.

### Przechowywanie

W puszce 2–4 dni. Zamrożone w folii: ok. 2 miesiące.`,
      },
    },
    ingredients: [
      {
        id: "fw-1",
        name: { de: "Weizenmehl (Type 550)", pl: "Mąka pszenna" },
        amount: 250,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "fw-2",
        name: { de: "Eigelb", pl: "Żółtka" },
        amount: 5,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "fw-3",
        name: { de: "Saure Sahne", pl: "Śmietana kwaśna" },
        amount: 60,
        unit: { de: "g", pl: "g" },
        group: "dairy",
        storeHintDe: "Schmand / saure Sahne 20%",
      },
      {
        id: "fw-4",
        name: { de: "Backpulver", pl: "Proszek do pieczenia" },
        amount: 5,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "fw-5",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 20,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "fw-6",
        name: { de: "Wodka", pl: "Wódka" },
        amount: 10,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Neutraler Wodka; alternativ Rum",
        substitute: {
          de: "Rum oder Apfelessig (1 EL)",
          pl: "Rum albo ocet jabłkowy (1 łyżka)",
        },
      },
      {
        id: "fw-7",
        name: { de: "Frittieröl", pl: "Olej do smażenia" },
        amount: 1,
        unit: { de: "l", pl: "l" },
        group: "pantry",
      },
      {
        id: "fw-8",
        name: { de: "Puderzucker", pl: "Cukier puder" },
        amount: 80,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
    ],
    createdAt: "2026-02-15T10:00:00.000Z",
    updatedAt: "2026-02-15T10:00:00.000Z",
  },
];

export const seedRecipes: Recipe[] = [
  ...baseRecipes,
  ...seedFamilyVariantRecipes,
].map((recipe) => {
  if (recipe.id === "recipe-nalesniki") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-nalesniki-guide",
        "post-twarog",
        "post-smietana-schmand",
        "post-ersatzprodukte-de",
      ],
    };
  }
  if (recipe.id === "recipe-bigos") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-bigos-guide",
        "post-dutch-oven",
        "post-kielbasa-arten",
        "post-kiszenie",
        "post-ferment-glaeser",
        "post-kasza",
        "post-polenladen",
      ],
    };
  }
  if (recipe.id === "recipe-zurek") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-zakwas-zurek",
        "post-polnische-suppen",
        "post-kielbasa-arten",
        "post-ferment-glaeser",
        "post-polenladen",
      ],
    };
  }
  if (recipe.id === "recipe-barszcz") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-polnische-suppen",
        "post-smietana-schmand",
        "post-wigilia",
        "post-polenladen",
      ],
      occasionIds: Array.from(
        new Set([...recipe.occasionIds, "occasion-wigilia"]),
      ),
    };
  }
  if (recipe.id === "recipe-rosol") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-rosol-technik",
        "post-polnische-suppen",
        "post-sonntagsessen",
        "post-dutch-oven",
      ],
      occasionIds: Array.from(
        new Set([...recipe.occasionIds, "occasion-niedziela"]),
      ),
      techniqueIds: Array.from(
        new Set([...recipe.techniqueIds, "technique-bulion"]),
      ),
    };
  }
  if (recipe.id === "recipe-schabowy") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-gusseisen",
        "post-sonntagsessen",
        "post-wielkanoc",
      ],
      occasionIds: Array.from(
        new Set([...recipe.occasionIds, "occasion-niedziela"]),
      ),
    };
  }
  if (recipe.id === "recipe-placki") {
    return {
      ...recipe,
      relatedPostIds: ["post-gusseisen", "post-sonntagsessen", "post-kasza"],
    };
  }
  if (recipe.id === "recipe-golabki") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-golabki-guide",
        "post-sonntagsessen",
        "post-smietana-schmand",
        "post-dutch-oven",
        "post-rosol-technik",
        "post-kasza",
      ],
      occasionIds: Array.from(
        new Set([...recipe.occasionIds, "occasion-niedziela"]),
      ),
    };
  }
  if (recipe.id === "recipe-faworki") {
    return {
      ...recipe,
      relatedPostIds: ["post-tlusty-czwartek"],
    };
  }
  if (recipe.id === "recipe-fasolka") {
    return {
      ...recipe,
      relatedPostIds: ["post-kielbasa-arten", "post-polenladen"],
    };
  }
  if (recipe.id === "recipe-oscypek") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-oscypek",
        "post-gusseisen",
        "post-polenladen",
        "post-ersatzprodukte-de",
      ],
    };
  }
  return recipe;
});

export const seedProfiles: Profile[] = [
  {
    id: "user-admin",
    email: "admin@alemniam.local",
    role: "admin",
    displayName: "Admin",
    preferredLocale: "de",
  },
  {
    id: "user-demo",
    email: "demo@alemniam.local",
    role: "user",
    displayName: "Demo",
    preferredLocale: "pl",
  },
];

export const seedSaved: SavedRecipe[] = [];
export const seedLists: ShoppingList[] = [];
export const seedSubmissions: CommunitySubmission[] = [];
