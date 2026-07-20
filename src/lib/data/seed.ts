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
import { seedRecipesWave5 } from "./seed-recipes-wave5";
import { seedRecipesWave6 } from "./seed-recipes-wave6";
import { seedRecipesWave7 } from "./seed-recipes-wave7";

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
      "https://images.unsplash.com/photo-1631453717818-536547643874?w=1600&q=80",
    prepMinutes: 20,
    cookMinutes: 25,
    servings: 4,
    familyId: "family-placki",
    variantLabel: { de: "Ziemniaczane", pl: "ziemniaczane" },
    variantImage:
      "https://images.unsplash.com/photo-1631453717818-536547643874?w=400&q=80",
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-panieren"],
    categoryIds: [
      "category-schnell",
      "category-hauptgerichte",
      "category-vegetarisch",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Placki ziemniaczane",
        slug: "ziemniaczane",
        excerpt:
          "Knusprige Kartoffelpuffer. Mit Śmietana, Gulasch oder pur mit Zucker.",
        steps: [
          {
            text: "Kartoffeln und Zwiebel reiben, Masse kräftig ausdrücken.",
            tip: "Wasser ist der Feind der Knusprigkeit — Küchentuch nutzen.",
          },
          { text: "Mit Ei, Mehl, Salz und Pfeffer verrühren. 5 Minuten ruhen." },
          {
            text: "In heißem Öl (3–5 mm) goldbraun ausbacken.",
            tip: "Nicht zu dick. Sonst bleiben sie innen roh.",
          },
          {
            text: "Heiß mit Sauerrahm, [Gulasch](/de/rezepte/gulasz-wieprzowy) oder Zucker servieren.",
          },
        ],
        seoTitle: "Placki ziemniaczane Rezept | Alemniam",
        seoDescription:
          "Polnische Kartoffelpuffer — Variante klassisch, bilingual mit DE-Einkauf.",
        article: `## Placki ziemniaczane — der Klassiker

Rohe Kartoffeln, gerieben, gebunden mit Ei und wenig Mehl — in heißem Öl gebraten. Außen knusprig, innen weich. In der Diaspora oft das erste polnische Gericht, das Nachbarn mögen.

### Technik in Kurzform

Festkochende Kartoffeln, Masse **gründlich ausdrücken**, Pfanne wirklich heiß. Ausführlich: [Placki-Guide](/de/blog/placki-guide) · [Gusseisen](/de/blog/gusseisenpfanne).

### Servieren

Śmietana (Schmand) klassisch. Deftig mit [Gulasz](/de/rezepte/gulasz-wieprzowy). Süß mit Zucker — in manchen Familien normal.

### Weitere Varianten

Oben wechseln: [Zucchini](/de/rezepte/placki/cukinia), [Käse](/de/rezepte/placki/mit-kaese), [Apfel](/de/rezepte/placki/mit-apfel).`,
      },
      pl: {
        title: "Placki ziemniaczane",
        slug: "ziemniaczane",
        excerpt:
          "Chrupiące placki z surowych ziemniaków. Ze śmietaną, gulaszem albo cukrem.",
        steps: [
          {
            text: "Starte ziemniaki i cebulę, mocno odciśnij masę.",
            tip: "Woda to wróg chrupkości — użyj ściereczki.",
          },
          { text: "Wymieszaj z jajkiem, mąką, solą i pieprzem. Odstaw 5 min." },
          {
            text: "Smaż na złoto na gorącym oleju (3–5 mm).",
            tip: "Nie za grube. Inaczej zostaną surowe w środku.",
          },
          {
            text: "Podawaj gorące ze śmietaną, [gulaszem](/pl/rezepte/gulasz-wieprzowy) albo cukrem.",
          },
        ],
        seoTitle: "Placki ziemniaczane przepis | Alemniam",
        seoDescription:
          "Placki ziemniaczane — wariant klasyczny, dwujęzycznie ze wskazówkami DE.",
        article: `## Placki ziemniaczane — klasyk

Surowe ziemniaki starte, związane jajkiem i odrobiną mąki — smażone na gorącym oleju. Na zewnątrz chrupko, w środku miękko.

### Technika

Ziemniaki raczej mączyste, masa **dobrze odciśnięta**, patelnia naprawdę gorąca. Więcej: [Przewodnik placki](/pl/blog/placki-przewodnik) · [Patelnia żeliwna](/pl/blog/patelnia-zelivna).

### Podanie

Śmietana klasycznie. Obok [gulasz](/pl/rezepte/gulasz-wieprzowy). Na słodko z cukrem — w wielu domach norma.

### Inne warianty

Przełącz u góry: [cukinia](/pl/rezepte/placki/cukinia), [ser](/pl/rezepte/placki/ser), [jabłka](/pl/rezepte/placki/jablka).`,
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
          {
            text: "Heiß servieren — mit [Uszka](/de/rezepte/uszka) in der Schale oder mit Kartoffeln.",
            tip: "Uszka separat kochen; Mengen und Falten auf der Uszka-Seite.",
          },
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
          {
            text: "Podawaj gorący — z [uszkami](/pl/rezepte/uszka) w misce albo z ziemniakami.",
            tip: "Uszka gotuj osobno; ilości i lepienie na stronie uszek.",
          },
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
    familyId: "family-nalesniki",
    variantLabel: { de: "Twaróg", pl: "z twarogiem" },
    variantImage:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80",
    regionIds: [],
    occasionIds: [],
    techniqueIds: ["technique-teig", "technique-freezer"],
    categoryIds: [
      "category-schnell",
      "category-suess",
      "category-vegetarisch",
    ],
    relatedPostIds: [
      "post-nalesniki-guide",
      "post-twarog",
      "post-smietana-schmand",
      "post-ersatzprodukte-de",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Naleśniki mit Twaróg",
        slug: "twarog",
        excerpt: "Dünne Pfannkuchen mit süßer Quarkfüllung.",
        steps: [
          { text: "Teig aus Milch, Eiern und Mehl ruhen lassen." },
          { text: "Dünne Pfannkuchen backen." },
          {
            text: "Twaróg mit Zucker und Vanille mischen.",
            tip: "Etwas Sauerrahm macht die Füllung cremiger.",
          },
          { text: "Füllen, rollen, optional in Butter anbraten." },
        ],
        seoTitle: "Naleśniki mit Twaróg Rezept | Alemniam",
        seoDescription:
          "Polnische Pfannkuchen mit Quark — Variante Twaróg, bilingual mit DE-Einkauf.",
      },
      pl: {
        title: "Naleśniki z twarogiem",
        slug: "twarog",
        excerpt: "Cienkie naleśniki ze słodkim twarogiem.",
        steps: [
          { text: "Zrób ciasto z mleka, jajek i mąki, odstaw." },
          { text: "Usmaż cienkie naleśniki." },
          {
            text: "Wymieszaj twaróg z cukrem i wanilią.",
            tip: "Odrobina śmietany daje kremowość.",
          },
          { text: "Nadziewaj, zawiń, opcjonalnie podsmaż na maśle." },
        ],
        seoTitle: "Naleśniki z twarogiem przepis | Alemniam",
        seoDescription:
          "Naleśniki z twarogiem — wariant klasyczny, dwujęzycznie.",
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
  {
    id: "recipe-gulasz",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1607628311673-4fc15faa5791?w=1600&q=80",
    prepMinutes: 25,
    cookMinutes: 90,
    servings: 6,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-schmoren"],
    categoryIds: ["category-hauptgerichte"],
    videoUrl: null,
    translations: {
      de: {
        title: "Gulasz wieprzowy",
        slug: "gulasz-wieprzowy",
        excerpt:
          "Polnischer Schweinegulasch — langsam geschmort, perfekt zu Placki.",
        steps: [
          {
            text: "Schweinefleisch würfeln, salzen, pfeffern. In heißem Öl anbraten.",
          },
          {
            text: "Zwiebel und Paprika hinzufügen, kurz mitdünsten.",
          },
          {
            text: "Tomatenmark, Paprikapulver, Knoblauch und Lorbeer zugeben. Mit Brühe ablöschen.",
            tip: "Paprika kurz rösten — sonst bitter.",
          },
          {
            text: "Zugedeckt 60–90 Min schmoren, bis das Fleisch zart ist.",
          },
          {
            text: "Mit [Placki](/de/rezepte/placki/ziemniaczane) und Śmietana servieren.",
          },
        ],
        seoTitle: "Gulasz wieprzowy Rezept | Alemniam",
        seoDescription:
          "Polnischer Schweinegulasch — Schmor-Rezept bilingual mit DE-Einkauf.",
        article: `## Gulasz wieprzowy — Sonntag mit Placki

Langsam geschmortes Schweinefleisch in Paprikasoße — in vielen polnischen Haushalten der Partner zu Kartoffelpuffern. Nicht identisch mit ungarischem Gulasch: mehr Soße, weniger Schärfe, oft Tomatenmark.

### Schmoren in DE

Schmortopf oder [Dutch Oven](/de/blog/dutch-oven-kaufberatung). Schweinenacken oder Schulter — fett hält saftig. Kiełbasa optional als Extra, siehe [Kiełbasa-Arten](/de/blog/kielbasa-arten).

### Timing

Am Vortag schmeckt oft besser. Placki frisch braten, Gulasch warm halten.

### Verwandtes

[Placki-Familie](/de/rezepte/placki/ziemniaczane) · [Sonntagsessen](/de/blog/sonntagsessen-polnisch).`,
      },
      pl: {
        title: "Gulasz wieprzowy",
        slug: "gulasz-wieprzowy",
        excerpt:
          "Polski gulasz wieprzowy — duszony powoli, idealny do placków.",
        steps: [
          {
            text: "Pokrój mięso w kostkę, posól, popieprz. Obsmaż na gorącym oleju.",
          },
          {
            text: "Dodaj cebulę i paprykę, lekko zeszklij.",
          },
          {
            text: "Dodaj koncentrat, paprykę w proszku, czosnek i liść laurowy. Zalej bulionem.",
            tip: "Paprykę podsmaż chwilę — inaczej gorzka.",
          },
          {
            text: "Duś pod przykryciem 60–90 min, aż mięso miękkie.",
          },
          {
            text: "Podawaj z [plackami](/pl/rezepte/placki/ziemniaczane) i śmietaną.",
          },
        ],
        seoTitle: "Gulasz wieprzowy przepis | Alemniam",
        seoDescription:
          "Gulasz wieprzowy — przepis na duszone mięso, dwujęzycznie ze wskazówkami DE.",
        article: `## Gulasz wieprzowy — niedziela z plackami

Wolno duszone wieprzowina w sosie paprykowym — w wielu domach towarzysz placków ziemniaczanych. To nie węgierski gulasz: więcej sosu, mniej ostrości, często koncentrat pomidorowy.

### Duszenie w DE

Garnek żeliwny albo [Dutch oven](/pl/blog/garnek-do-duszenia). Łopatka lub kark — tłuszcz trzyma soczystość. Opcjonalnie kiełbasa, zob. [Rodzaje kiełbasy](/pl/blog/rodzaje-kielbasy).

### Czas

Nazajutrz często lepszy. Placki smaż świeżo, gulasz trzymaj ciepły.

### Powiązane

[Rodzina placków](/pl/rezepte/placki/ziemniaczane) · [Obiad niedzielny](/pl/blog/obiad-niedzielny).`,
      },
    },
    ingredients: [
      {
        id: "gu-1",
        name: { de: "Schweinefleisch (Schulter/Nacken)", pl: "Mięso wieprzowe (łopatka/kark)" },
        amount: 800,
        unit: { de: "g", pl: "g" },
        group: "other",
      },
      {
        id: "gu-2",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "gu-3",
        name: { de: "Paprika", pl: "Papryka" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "gu-4",
        name: { de: "Tomatenmark", pl: "Koncentrat pomidorowy" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "gu-5",
        name: { de: "Paprikapulver edelsüß", pl: "Papryka słodka" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "spices",
      },
      {
        id: "gu-6",
        name: { de: "Knoblauch", pl: "Czosnek" },
        amount: 3,
        unit: { de: "Zehen", pl: "ząbki" },
        group: "produce",
      },
      {
        id: "gu-7",
        name: { de: "Rinder- oder Gemüsebrühe", pl: "Bulion wołowy lub warzywny" },
        amount: 400,
        unit: { de: "ml", pl: "ml" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-20T10:00:00.000Z",
    updatedAt: "2026-07-20T10:00:00.000Z",
  },
  {
    id: "recipe-kotlet-mielony",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1588346301655-83add6be44f7?w=1600&q=80",
    prepMinutes: 20,
    cookMinutes: 20,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-panieren"],
    categoryIds: ["category-schnell", "category-hauptgerichte"],
    videoUrl: null,
    translations: {
      de: {
        title: "Kotlet mielony",
        slug: "kotlet-mielony",
        excerpt:
          "Polnische Hacksteaks paniert — Alltagsklassiker neben Schabowy.",
        steps: [
          {
            text: "Hack mit eingeweichtem Brötchen, Ei, Zwiebel, Salz und Pfeffer verkneten.",
            tip: "Masse 30 Min kalt stellen — hält Form beim Braten.",
          },
          { text: "Flache Kotlets formen, durch Mehl, Ei und Panade ziehen." },
          {
            text: "In Butterschmalz oder Öl goldbraun braten.",
            tip: "Nicht zu heiß — Panade soll nicht verbrennen.",
          },
          { text: "Mit Kartoffeln, Mizeria oder Ketchup servieren." },
        ],
        seoTitle: "Kotlet mielony Rezept | Alemniam",
        seoDescription:
          "Kotlet mielony paniert — Rezept bilingual mit Panier-Technik.",
        article: `## Kotlet mielony — Alltagsteller

Hacksteaks paniert — nicht zu verwechseln mit [Schabowy](/de/rezepte/kotlet-schabowy): hier gemischtes Hack, dort geklopftes Schnitzel. In der Diaspora schnell, günstig, kinderfreundlich.

### Panade

Technik wie beim Schabowy: Mehl, Ei, Semmelbrösel. Ausführlich: [Panieren-Guide](/de/blog/panieren-schabowy). [Gusseisenpfanne](/de/blog/gusseisenpfanne) für gleichmäßige Kruste.

### Brötchen einweichen

Altes Brötchen oder Semmel in Milch — macht den Kotlet saftig. Ohne Brötchen wird er trocken und fest.

### Sonntag

Passt zu [Rosół](/de/rezepte/rosol) als zweites Gericht oder solo mit Salat.`,
      },
      pl: {
        title: "Kotlet mielony",
        slug: "kotlet-mielony",
        excerpt:
          "Mielone kotlety panierowane — codzienny klasyk obok schabowego.",
        steps: [
          {
            text: "Wymieszaj mięso z namoczoną bułką, jajkiem, cebulą, solą i pieprzem.",
            tip: "Odstaw 30 min w lodówce — łatwiej smażyć.",
          },
          { text: "Formuj płaskie kotlety, obtocz w mące, jajku i bułce." },
          {
            text: "Smaż na złoto na smalcu lub oleju.",
            tip: "Nie za mocno — panierka nie może się przypalić.",
          },
          { text: "Podawaj z ziemniakami, mizerią albo keczupem." },
        ],
        seoTitle: "Kotlet mielony przepis | Alemniam",
        seoDescription:
          "Kotlet mielony panierowany — przepis dwujęzyczny z techniką panierowania.",
        article: `## Kotlet mielony — talerz na co dzień

Kotlety z mielonego mięsa w panierce — nie to samo co [schabowy](/pl/rezepte/kotlet-schabowy): tu mielone, tam rozbite kotlety. W diasporze szybko, tanio, dla dzieci.

### Panierka

Jak u schabowego: mąka, jajko, bułka tarta. Więcej: [Panierowanie](/pl/blog/panierowanie-kotlet). [Patelnia żeliwna](/pl/blog/patelnia-zelivna).

### Bułka

Namoczona kajzerka trzyma soczystość. Bez bułki kotlet będzie twardy.

### Niedziela

Obok [rosół](/pl/rezepte/rosol) albo solo z surówką.`,
      },
    },
    ingredients: [
      {
        id: "km-1",
        name: { de: "Hackfleisch gemischt", pl: "Mięso mielone" },
        amount: 600,
        unit: { de: "g", pl: "g" },
        group: "other",
        storeHintDe: "Hack gemischt / Schwein-Rind",
      },
      {
        id: "km-2",
        name: { de: "Brötchen (alt)", pl: "Bułka (czerstwa)" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "pantry",
      },
      {
        id: "km-3",
        name: { de: "Milch", pl: "Mleko" },
        amount: 100,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "km-4",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "km-5",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "km-6",
        name: { de: "Semmelbrösel", pl: "Bułka tarta" },
        amount: 100,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-20T10:00:00.000Z",
    updatedAt: "2026-07-20T10:00:00.000Z",
  },
  {
    id: "recipe-kluski-slaskie",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1612872087338-bb623d2a77d5?w=1600&q=80",
    prepMinutes: 40,
    cookMinutes: 15,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-teig"],
    categoryIds: ["category-hauptgerichte", "category-vegetarisch"],
    videoUrl: null,
    translations: {
      de: {
        title: "Kluski śląskie",
        slug: "kluski-slaskie",
        excerpt:
          "Schlesische Kartoffelklöße mit Mulde — klassische Beilage zu Rosół.",
        steps: [
          {
            text: "Kartoffeln kochen, abkühlen lassen, durch Presse drücken.",
          },
          {
            text: "Mit Kartoffelstärke, Ei und Salz zu glattem Teig kneten.",
            tip: "Teig nicht zu weich — sonst zerfallen die Klöße.",
          },
          {
            text: "Kugeln formen, in der Mitte mit Finger Mulde drücken.",
          },
          {
            text: "In leicht siedendem Salzwasser gar ziehen, bis sie oben schwimmen.",
          },
          {
            text: "Mit [Rosół](/de/rezepte/rosol) und gebratener Zwiebel servieren.",
          },
        ],
        seoTitle: "Kluski śląskie Rezept | Alemniam",
        seoDescription:
          "Schlesische Kartoffelklöße — Beilage-Rezept bilingual mit DE-Einkauf.",
        article: `## Kluski śląskie — Mulde in der Mitte

Gekochte Kartoffeln, Stärke, Ei — geknetet, zur Kugel geformt, mit charakteristischer Mulde. Aus Schlesien, in der Diaspora oft neben [Rosół](/de/rezepte/rosol) auf dem Sonntagsteller.

### Stärke vs. Mehl

Kartoffelstärke (Speisestärke) aus dem Supermarkt — nicht zu viel, sonst gummiartig. Teig soll fest, aber formbar sein.

### Kochen

Nicht stark kochen — sanft sieden. Klöße kurz nach dem Schwimmen herausnehmen.

### Beilage

Gebratene Zwiebel, Schmalz, oder Pilzsoße. Siehe [Rosół-Technik](/de/blog/rosol-technik).`,
      },
      pl: {
        title: "Kluski śląskie",
        slug: "kluski-slaskie",
        excerpt:
          "Śląskie knedle ziemniaczane z dziurką — klasyk obok rosołu.",
        steps: [
          {
            text: "Ugotuj ziemniaki, ostudź, przeciśnij przez praskę.",
          },
          {
            text: "Zagnieć ze skrobią, jajkiem i solą na gładkie ciasto.",
            tip: "Ciasto nie za miękkie — inaczej knedle pękną.",
          },
          {
            text: "Formuj kulki, palcem zrób wgłębienie.",
          },
          {
            text: "Gotuj w osolonej wodzie na wolnym ogniu, aż wypłyną.",
          },
          {
            text: "Podawaj z [rosółem](/pl/rezepte/rosol) i podsmażoną cebulą.",
          },
        ],
        seoTitle: "Kluski śląskie przepis | Alemniam",
        seoDescription:
          "Kluski śląskie — przepis na knedle z dziurką, dwujęzycznie.",
        article: `## Kluski śląskie — dziurka po środku

Ugotowane ziemniaki, skrobia, jajko — ugniecione, uformowane w kulkę z charakterystycznym wgłębieniem. Ze Śląska, w diasporze często obok [rosołu](/pl/rezepte/rosol).

### Skrobia

Skrobia ziemniaczana ze sklepu — nie za dużo, bo będą gumowate. Ciasto ma być twarde, ale plastyczne.

### Gotowanie

Delikatnie, na wolnym ogniu. Wyjmij zaraz po wypłynięciu.

### Dodatki

Cebula na smalcu, sos grzybowy. [Jak ugotować rosół](/pl/blog/jak-ugotowac-rosol).`,
      },
    },
    ingredients: [
      {
        id: "ks-1",
        name: { de: "Kartoffeln", pl: "Ziemniaki" },
        amount: 1,
        unit: { de: "kg", pl: "kg" },
        group: "produce",
      },
      {
        id: "ks-2",
        name: { de: "Kartoffelstärke", pl: "Skrobia ziemniaczana" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Speisestärke",
      },
      {
        id: "ks-3",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
    ],
    createdAt: "2026-07-20T10:00:00.000Z",
    updatedAt: "2026-07-20T10:00:00.000Z",
  },
  {
    id: "recipe-racuchy",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&q=80",
    prepMinutes: 90,
    cookMinutes: 20,
    servings: 4,
    regionIds: [],
    occasionIds: [],
    techniqueIds: ["technique-teig"],
    categoryIds: ["category-suess", "category-vegetarisch"],
    videoUrl: null,
    translations: {
      de: {
        title: "Racuchy z jabłkami",
        slug: "racuchy-jablka",
        excerpt:
          "Hefige Apfelpfannkuchen — fluffig, goldbraun, mit Puderzucker.",
        steps: [
          {
            text: "Hefe in lauwarmer Milch mit Zucker auflösen, 10 Min gehen lassen.",
          },
          {
            text: "Mehl, Ei, Prise Salz und Vanille zugeben, glatten Teig kneten. 45 Min gehen lassen.",
          },
          {
            text: "Äpfel schälen, entkernen, in dünne Spalten schneiden.",
          },
          {
            text: "Teig portionsweise in heißer Pfanne backen, Apfelspalten hineinlegen, wenden.",
            tip: "Mittlere Hitze — innen durch, außen gold.",
          },
          { text: "Warm mit Puderzucker servieren." },
        ],
        seoTitle: "Racuchy z jabłkami Rezept | Alemniam",
        seoDescription:
          "Polnische Apfel-Racuchy — Hefeteig-Rezept bilingual für DE-Küchen.",
        article: `## Racuchy — Hefe, Apfel, Pfanne

Racuchy sind **Hefeteig-Pfannkuchen** mit Apfel — fluffiger als [Placki mit Apfel](/de/rezepte/placki/mit-apfel). In der Diaspora beliebt zum Nachmittagskaffee oder als süßes Abendessen.

### Hefe in DE

Trockenhefe funktioniert — lauwarme Milch, nicht heiß. Teig braucht Ruhe; ohne Geduld werden sie flach.

### Äpfel

Fest und säuerlich. Nicht zu dicke Spalten — sonst bleibt der Teig roh.

### Anlässe

Nahe an [Tłusty Czwartek](/de/blog/tlusty-czwartek)-Tradition, aber ganzjährig machbar.`,
      },
      pl: {
        title: "Racuchy z jabłkami",
        slug: "racuchy-jablka",
        excerpt:
          "Drożdżowe racuchy z jabłkiem — puszyste, złote, z cukrem pudrem.",
        steps: [
          {
            text: "Rozpuść drożdże w ciepłym mleku z cukrem, odstaw 10 min.",
          },
          {
            text: "Dodaj mąkę, jajko, sól i wanilię, zagnieć. Odstaw 45 min.",
          },
          {
            text: "Obierz jabłka, usuń gniazda, pokrój w cienkie ćwiartki.",
          },
          {
            text: "Smaż porcje ciasta, włóż jabłko, przewróć.",
            tip: "Średni ogień — środek upieczony, skórka złota.",
          },
          { text: "Podawaj ciepłe z cukrem pudrem." },
        ],
        seoTitle: "Racuchy z jabłkami przepis | Alemniam",
        seoDescription:
          "Racuchy z jabłkami na drożdżach — przepis dwujęzyczny.",
        article: `## Racuchy — drożdże, jabłko, patelnia

Racuchy to **racuchy drożdżowe** z jabłkiem — bardziej puszyste niż [placki z jabłkami](/pl/rezepte/placki/jablka). W diasporze na popołudniową kawę albo słodki obiad.

### Drożdże w DE

Suszone drożdże działają — mleko ciepłe, nie gorące. Ciasto potrzebuje czasu.

### Jabłka

Twarde, kwaśne. Nie za grube kawałki — inaczej surowe w środku.

### Okazje

Blisko tradycji [Tłusty Czwartek](/pl/blog/tlusty-czwartek), ale przez cały rok.`,
      },
    },
    ingredients: [
      {
        id: "ra-1",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 300,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "ra-2",
        name: { de: "Milch", pl: "Mleko" },
        amount: 250,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "ra-3",
        name: { de: "Hefe (frisch oder trocken)", pl: "Drożdże" },
        amount: 20,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Frischhefe oder 1 Päckchen Trockenhefe",
        substitute: {
          de: "7 g Trockenhefe",
          pl: "7 g drożdży suszonych",
        },
      },
      {
        id: "ra-4",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 30,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "ra-5",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "ra-6",
        name: { de: "Äpfel", pl: "Jabłka" },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
    ],
    createdAt: "2026-07-20T10:00:00.000Z",
    updatedAt: "2026-07-20T10:00:00.000Z",
  },
  {
    id: "recipe-chlodnik",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1625944525533-217feca6f147?w=1600&q=80",
    prepMinutes: 30,
    cookMinutes: 0,
    servings: 4,
    regionIds: [],
    occasionIds: [],
    techniqueIds: ["technique-bulion"],
    categoryIds: ["category-suppen", "category-vegetarisch"],
    videoUrl: null,
    translations: {
      de: {
        title: "Chłodnik litewski",
        slug: "chlodnik-litewski",
        excerpt:
          "Kalte Rote-Bete-Suppe mit Gurke, Dill und Śmietana — Sommerklassiker.",
        steps: [
          {
            text: "Gekochte Rote Bete fein reiben oder pürieren. Mit Kefir oder Joghurt und Brühe verrühren.",
          },
          {
            text: "Gurke, Radieschen, Dill und hartgekochtes Ei in feine Würfel schneiden.",
          },
          {
            text: "Gemüse unter die kalte Basis mischen. Mit Salz, Zitrone und Zucker abschmecken.",
            tip: "Mindestens 2 Stunden kalt stellen — schmeckt besser am nächsten Tag.",
          },
          { text: "Mit gekochter Kartoffel und extra Śmietana servieren." },
        ],
        seoTitle: "Chłodnik litewski Rezept | Alemniam",
        seoDescription:
          "Kalte polnische Rote-Bete-Suppe — Rezept bilingual mit Śmietana-Hinweisen.",
        article: `## Chłodnik — kalte Suppe für heiße Diaspora-Sommer

Rote Bete, Kefir oder Joghurt, Gurke, Dill — rosa, kühl, säuerlich-frisch. Nicht [Barszcz czerwony](/de/rezepte/barszcz-czerwony) (heiß und klar), sondern Sommersuppe im Becher.

### Śmietana und Kefir

[Śmietana vs. Schmand](/de/blog/smietana-schmand) — hier zählt Säure und Cremigkeit. Kefir aus dem Supermarkt funktioniert; im Polenladen oft bessere Śmietana zum Finish.

### Rote Bete

Vorgekocht aus dem Glas spart Zeit — frisch gekocht schmeckt erdig-süßer. Suppe muss **gut gekühlt** sein.

### Servieren

Mit halber Kartoffel und Ei — leichtes Hauptgericht, kein Vorspeisen-Schnipsel.`,
      },
      pl: {
        title: "Chłodnik litewski",
        slug: "chlodnik-litewski",
        excerpt:
          "Zimny chłodnik na burakach z ogórkiem, koperkiem i śmietaną — klasyk lata.",
        steps: [
          {
            text: "Ugotowane buraki zetrzyj lub zblenduj. Wymieszaj z kefired lub jogurtem i bulionem.",
          },
          {
            text: "Ogórek, rzodkiewkę, koperek i jajko na twardo drobno pokrój.",
          },
          {
            text: "Warzywa dodaj do zimnej bazy. Dopraw solą, cytryną i cukrem.",
            tip: "Minimum 2 h w lodówce — lepszy następnego dnia.",
          },
          { text: "Podawaj z ugotowanym ziemniakiem i extra śmietaną." },
        ],
        seoTitle: "Chłodnik litewski przepis | Alemniam",
        seoDescription:
          "Chłodnik na burakach — zimna zupa, przepis dwujęzyczny.",
        article: `## Chłodnik — zimna zupa na gorące lato w diasporze

Buraki, kefir lub jogurt, ogórek, koperek — różowy, chłodny, kwaśno-świeży. To nie [barszcz czerwony](/pl/rezepte/barszcz-czerwony) (gorący i klarowny), tylko letnia zupa w misce.

### Śmietana i kefir

[Śmietana czy Schmand](/pl/blog/smietana-czy-schmand). Kefir ze supermarketu działa; w polskim sklepie często lepsza śmietana na wierzch.

### Buraki

Gotowane z słoika oszczędza czas — świeże smakują bardziej ziemiście. Zupa musi być **mocno schłodzona**.

### Podanie

Z połówką ziemniaka i jajkiem — lekki obiad, nie tylko przystawka.`,
      },
    },
    ingredients: [
      {
        id: "ch-1",
        name: { de: "Gekochte Rote Bete", pl: "Buraki ugotowane" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "produce",
        storeHintDe: "Vorgekocht im Glas oder frisch",
      },
      {
        id: "ch-2",
        name: { de: "Kefir oder Naturjoghurt", pl: "Kefir lub jogurt naturalny" },
        amount: 500,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "ch-3",
        name: { de: "Gurke", pl: "Ogórek" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "ch-4",
        name: { de: "Radieschen", pl: "Rzodkiewka" },
        amount: 4,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "ch-5",
        name: { de: "Dill", pl: "Koper" },
        amount: 1,
        unit: { de: "Bund", pl: "pęczek" },
        group: "produce",
      },
      {
        id: "ch-6",
        name: { de: "Sauerrahm", pl: "Śmietana" },
        amount: 150,
        unit: { de: "g", pl: "g" },
        group: "dairy",
        storeHintDe: "Schmand / saure Sahne",
      },
      {
        id: "ch-7",
        name: { de: "Eier", pl: "Jajka" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
    ],
    createdAt: "2026-07-20T10:00:00.000Z",
    updatedAt: "2026-07-20T10:00:00.000Z",
  },
];

export const seedRecipes: Recipe[] = [
  ...baseRecipes,
  ...seedFamilyVariantRecipes,
  ...seedRecipesWave5,
  ...seedRecipesWave6,
  ...seedRecipesWave7,
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
        "post-barszcz-technik",
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
  if (recipe.id === "recipe-makowiec") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-makowiec-technik",
        "post-wigilia",
        "post-faworki-technik",
        "post-ersatzprodukte-de",
        "post-polenladen",
      ],
      occasionIds: Array.from(
        new Set([...recipe.occasionIds, "occasion-wigilia"]),
      ),
    };
  }
  if (recipe.id === "recipe-uszka") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-barszcz-technik",
        "post-wigilia",
        "post-pierogi-teig",
        "post-polenladen",
        "post-freezer-meal-prep",
      ],
      occasionIds: Array.from(
        new Set([...recipe.occasionIds, "occasion-wigilia"]),
      ),
      techniqueIds: Array.from(
        new Set([...recipe.techniqueIds, "technique-teig", "technique-fuellen"]),
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
        "post-panieren",
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
      relatedPostIds: [
        "post-placki-guide",
        "post-gusseisen",
        "post-sonntagsessen",
        "post-kasza",
        "post-smietana-schmand",
      ],
    };
  }
  if (recipe.id === "recipe-gulasz") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-placki-guide",
        "post-sonntagsessen",
        "post-dutch-oven",
        "post-kielbasa-arten",
        "post-gusseisen",
      ],
      occasionIds: Array.from(
        new Set([...recipe.occasionIds, "occasion-niedziela"]),
      ),
      techniqueIds: Array.from(
        new Set([...recipe.techniqueIds, "technique-schmoren"]),
      ),
    };
  }
  if (recipe.id === "recipe-kotlet-mielony") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-panieren",
        "post-gusseisen",
        "post-sonntagsessen",
        "post-fleischwolf",
        "post-wielkanoc",
      ],
      occasionIds: Array.from(
        new Set([...recipe.occasionIds, "occasion-niedziela"]),
      ),
      techniqueIds: Array.from(
        new Set([...recipe.techniqueIds, "technique-panieren"]),
      ),
    };
  }
  if (recipe.id === "recipe-kluski-slaskie") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-rosol-technik",
        "post-sonntagsessen",
        "post-kasza",
        "post-polnische-suppen",
      ],
      occasionIds: Array.from(
        new Set([...recipe.occasionIds, "occasion-niedziela"]),
      ),
    };
  }
  if (recipe.id === "recipe-racuchy") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-tlusty-czwartek",
        "post-twarog",
        "post-ersatzprodukte-de",
      ],
    };
  }
  if (recipe.id === "recipe-chlodnik") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-smietana-schmand",
        "post-polnische-suppen",
        "post-barszcz-technik",
        "post-ersatzprodukte-de",
      ],
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
      relatedPostIds: [
        "post-faworki-technik",
        "post-tlusty-czwartek",
        "post-ersatzprodukte-de",
      ],
      occasionIds: Array.from(
        new Set([...recipe.occasionIds, "occasion-tlusty-czwartek"]),
      ),
    };
  }
  if (recipe.id === "recipe-fasolka") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-fasolka-guide",
        "post-kielbasa-arten",
        "post-polenladen",
        "post-majeranek",
        "post-dutch-oven",
      ],
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
  if (recipe.id === "recipe-pierogi-leniwe") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-twarog",
        "post-nalesniki-guide",
        "post-pierogi-guide",
        "post-ersatzprodukte-de",
      ],
    };
  }
  if (recipe.id === "recipe-kopytka") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-placki-guide",
        "post-sonntagsessen",
        "post-dutch-oven",
        "post-kasza",
      ],
    };
  }
  if (recipe.id === "recipe-lazanki") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-kiszenie",
        "post-bigos-guide",
        "post-polenladen",
        "post-sonntagsessen",
      ],
    };
  }
  if (recipe.id === "recipe-pyzy") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-fleischwolf",
        "post-sonntagsessen",
        "post-freezer-meal-prep",
        "post-majeranek",
      ],
    };
  }
  if (recipe.id === "recipe-zrazy") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-sonntagsessen",
        "post-dutch-oven",
        "post-majeranek",
        "post-rosol-technik",
      ],
    };
  }
  if (recipe.id === "recipe-karp") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-wigilia",
        "post-majeranek",
        "post-polenladen",
        "post-ersatzprodukte-de",
      ],
      occasionIds: Array.from(
        new Set([...recipe.occasionIds, "occasion-wigilia"]),
      ),
    };
  }
  if (recipe.id === "recipe-krokiety") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-nalesniki-guide",
        "post-barszcz-technik",
        "post-panieren",
        "post-kiszenie",
        "post-wigilia",
      ],
      techniqueIds: Array.from(
        new Set([
          ...recipe.techniqueIds,
          "technique-teig",
          "technique-panieren",
        ]),
      ),
    };
  }
  if (recipe.id === "recipe-sernik") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-makowiec-technik",
        "post-twarog",
        "post-ersatzprodukte-de",
        "post-wielkanoc",
        "post-polenladen",
      ],
    };
  }
  if (recipe.id === "recipe-sledz") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-wigilia",
        "post-polenladen",
        "post-ersatzprodukte-de",
        "post-smietana-schmand",
      ],
      occasionIds: Array.from(
        new Set([...recipe.occasionIds, "occasion-wigilia"]),
      ),
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
