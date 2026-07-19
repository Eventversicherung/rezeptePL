import type {
  Cluster,
  CommunitySubmission,
  Profile,
  Recipe,
  SavedRecipe,
  ShoppingList,
} from "@/types/content";

export const seedClusters: Cluster[] = [
  {
    id: "region-slask",
    kind: "region",
    slug: { de: "schlesien", pl: "slask" },
    title: { de: "Schlesien", pl: "Śląsk" },
    description: {
      de: "Herzhafte Hausmannskost aus Schlesien — Roladen, Klöße und Sonntagsessen.",
      pl: "Sycąca kuchnia śląska — rolady, kluski i niedzielne obiady.",
    },
    seoTitle: {
      de: "Schlesische Rezepte | Alemniam",
      pl: "Przepisy śląskie | Alemniam",
    },
    seoDescription: {
      de: "Authentische schlesische Gerichte zum Kochen und Einkaufen.",
      pl: "Autentyczne dania śląskie do gotowania i zakupów.",
    },
  },
  {
    id: "region-podhale",
    kind: "region",
    slug: { de: "podhale", pl: "podhale" },
    title: { de: "Podhale", pl: "Podhale" },
    description: {
      de: "Bergküche aus der Tatra — Oscypek, Sauerkraut und würzige Eintöpfe.",
      pl: "Kuchnia góralska z Tatr — oscypek, kapusta i aromatyczne gulasze.",
    },
    seoTitle: {
      de: "Podhale Rezepte | Alemniam",
      pl: "Przepisy z Podhala | Alemniam",
    },
    seoDescription: {
      de: "Góralskie Klassiker für zu Hause in Deutschland.",
      pl: "Góralskie klasyki do przygotowania w domu.",
    },
  },
  {
    id: "occasion-wigilia",
    kind: "occasion",
    slug: { de: "wigilia", pl: "wigilia" },
    title: { de: "Wigilia", pl: "Wigilia" },
    description: {
      de: "Weihnachtsabend-Gerichte — Barszcz, Pierogi, Karp und mehr.",
      pl: "Potrawy wigilijne — barszcz, pierogi, karp i więcej.",
    },
    seoTitle: {
      de: "Wigilia Rezepte | Alemniam",
      pl: "Przepisy wigilijne | Alemniam",
    },
    seoDescription: {
      de: "Polnische Weihnachtsrezepte bilingual zum Vorbereiten und Einkaufen.",
      pl: "Polskie przepisy wigilijne dwujęzycznie — gotowanie i zakupy.",
    },
  },
  {
    id: "technique-teig",
    kind: "technique",
    slug: { de: "teig", pl: "ciasto" },
    title: { de: "Teig", pl: "Ciasto" },
    description: {
      de: "Pierogi-, Noodle- und Hefeteige — mit Tipps für die deutsche Küche.",
      pl: "Ciasta na pierogi, kluski i drożdżowe — ze wskazówkami.",
    },
    seoTitle: {
      de: "Polnische Teige | Alemniam",
      pl: "Polskie ciasta | Alemniam",
    },
    seoDescription: {
      de: "Techniken für Teige der polnischen Küche.",
      pl: "Techniki ciasta w polskiej kuchni.",
    },
  },
];

export const seedRecipes: Recipe[] = [
  {
    id: "recipe-pierogi",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1600&q=80",
    prepMinutes: 45,
    cookMinutes: 20,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-wigilia"],
    techniqueIds: ["technique-teig"],
    videoUrl: null,
    translations: {
      de: {
        title: "Pierogi Ruskie",
        slug: "pierogi-ruskie",
        excerpt:
          "Klassische Pierogi mit Kartoffel und Twaróg — weich, würzig, zum Teilen.",
        steps: [
          {
            text: "Kartoffeln schälen, kochen und heiß stampfen.",
            tip: "Nicht zu wässrig — abtropfen lassen.",
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
          "Pierogi Ruskie kochen und einkaufen — bilingual mit DE-Ladenhinweisen.",
      },
      pl: {
        title: "Pierogi ruskie",
        slug: "pierogi-ruskie",
        excerpt:
          "Klasyczne pierogi z ziemniakami i twarogiem — miękkie, sycące, do dzielenia.",
        steps: [
          {
            text: "Obierz ziemniaki, ugotuj i ugnieć na gorąco.",
            tip: "Odsącz dobrze — masa nie może być wodnista.",
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
          "Pierogi ruskie — gotowanie i zakupy, dwujęzycznie ze wskazówkami DE.",
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
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1600&q=80",
    prepMinutes: 30,
    cookMinutes: 120,
    servings: 6,
    regionIds: [],
    occasionIds: [],
    techniqueIds: [],
    videoUrl: null,
    translations: {
      de: {
        title: "Bigos",
        slug: "bigos",
        excerpt:
          "Polnischer Krauteintopf — am besten einen Tag vorher gekocht.",
        steps: [
          { text: "Speck und Fleisch anbraten, herausnehmen." },
          {
            text: "Zwiebel und Pilze anschwitzen, Sauerkraut und Weißkohl zugeben.",
          },
          {
            text: "Fleisch zurück, mit Brühe, Lorbeer und Gewürzen schmoren.",
            tip: "Mindestens 1,5 Stunden — besser über Nacht ruhen lassen.",
          },
          { text: "Abschmecken und mit Brot servieren." },
        ],
        seoTitle: "Bigos Rezept | Alemniam",
        seoDescription:
          "Bigos klassisch — Rezept mit Einkaufshilfe für Deutschland.",
      },
      pl: {
        title: "Bigos",
        slug: "bigos",
        excerpt: "Polski gulasz z kapusty — najlepiej dzień wcześniej.",
        steps: [
          { text: "Podsmaż boczek i mięso, odłóż na bok." },
          {
            text: "Zeszklij cebulę i grzyby, dodaj kapustę kiszoną i świeżą.",
          },
          {
            text: "Włóż mięso z powrotem, duś z bulionem i przyprawami.",
            tip: "Minimum 1,5 h — najlepiej odstaw na noc.",
          },
          { text: "Dopraw i podawaj z chlebem." },
        ],
        seoTitle: "Bigos przepis | Alemniam",
        seoDescription: "Klasyczny bigos — przepis i lista zakupów.",
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
      "https://images.unsplash.com/photo-1547591623-1f4d8b2b2c0a?w=1600&q=80",
    prepMinutes: 20,
    cookMinutes: 50,
    servings: 4,
    regionIds: ["region-slask"],
    occasionIds: ["occasion-wigilia"],
    techniqueIds: [],
    videoUrl: null,
    translations: {
      de: {
        title: "Żurek",
        slug: "zurek",
        excerpt: "Sauerteigsuppe mit Weißwurst und Ei — warm und klar.",
        steps: [
          {
            text: "Żur-Ansatz mit Wasser und Gewürzen aufkochen.",
            tip: "Fertigen Żur gibt’s im Polenladen.",
          },
          { text: "Wurst und Kartoffeln mitgaren." },
          { text: "Mit Knoblauch und Majoran abschmecken, Ei dazugeben." },
        ],
        seoTitle: "Żurek Rezept | Alemniam",
        seoDescription: "Żurek kochen — mit Tipps wo man Żur in DE findet.",
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
        seoDescription: "Żurek — przepis i lista zakupów dwujęzycznie.",
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
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=1600&q=80",
    prepMinutes: 10,
    cookMinutes: 15,
    servings: 2,
    regionIds: ["region-podhale"],
    occasionIds: [],
    techniqueIds: [],
    videoUrl: null,
    translations: {
      de: {
        title: "Gegrillter Oscypek mit Preiselbeeren",
        slug: "oscypek-preiselbeeren",
        excerpt: "Schneller Podhale-Teller — rauchig, süß-sauer.",
        steps: [
          { text: "Oscypek in Scheiben schneiden." },
          {
            text: "In der Pfanne oder auf dem Grill goldbraun braten.",
            tip: "Nicht zu heiß — der Käse soll nur anschmelzen.",
          },
          { text: "Mit Preiselbeeren und Roggenbrot servieren." },
        ],
        seoTitle: "Oscypek mit Preiselbeeren | Alemniam",
        seoDescription: "Gegrillter Oscypek — schnelles Podhale-Rezept.",
      },
      pl: {
        title: "Oscypek z żurawiną",
        slug: "oscypek-zurawina",
        excerpt: "Szybki talerz z Podhala — wędzony, słodko-kwaśny.",
        steps: [
          { text: "Pokrój oscypek w plastry." },
          {
            text: "Opiecz na patelni lub grillu na złoto.",
            tip: "Nie za mocno — ser ma tylko się podtopić.",
          },
          { text: "Podawaj z żurawiną i chlebem żytnim." },
        ],
        seoTitle: "Oscypek z żurawiną | Alemniam",
        seoDescription: "Oscypek z żurawiną — szybki przepis z Podhala.",
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
    id: "recipe-draft-demo",
    status: "draft",
    coverImage:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80",
    prepMinutes: 15,
    cookMinutes: 30,
    servings: 2,
    regionIds: [],
    occasionIds: [],
    techniqueIds: [],
    videoUrl: null,
    translations: {
      de: {
        title: "Entwurf: Placki ziemniaczane",
        slug: "placki-entwurf",
        excerpt: "Admin-Entwurf zum Testen.",
        steps: [{ text: "Noch nicht fertig." }],
        seoTitle: "Placki Entwurf",
        seoDescription: "Draft",
      },
      pl: {
        title: "Szkic: Placki ziemniaczane",
        slug: "placki-szkic",
        excerpt: "Szkic admina do testów.",
        steps: [{ text: "Jeszcze nie gotowe." }],
        seoTitle: "Placki szkic",
        seoDescription: "Szkic",
      },
    },
    ingredients: [],
    createdAt: "2026-02-01T10:00:00.000Z",
    updatedAt: "2026-02-01T10:00:00.000Z",
  },
];

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
