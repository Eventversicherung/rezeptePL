import type { Recipe, RecipeFamily } from "@/types/content";

export const seedFamilies: RecipeFamily[] = [
  {
    id: "family-pierogi",
    defaultVariantId: "recipe-pierogi",
    coverImage: "/recipes/pierogi-ruskie.jpg",
    regionIds: [],
    occasionIds: ["occasion-wigilia", "occasion-niedziela"],
    techniqueIds: ["technique-teig", "technique-freezer"],
    categoryIds: ["category-hauptgerichte", "category-vegetarisch"],
    variantIds: [
      "recipe-pierogi",
      "recipe-pierogi-meat",
      "recipe-pierogi-cabbage",
    ],
    relatedPostIds: [
      "post-pierogi-guide",
      "post-pierogi-teig",
      "post-teigmaschine",
      "post-pierogi-formen",
      "post-freezer-meal-prep",
      "post-freezer-boxen",
      "post-twarog",
    ],
    translations: {
      de: {
        title: "Pierogi",
        slug: "pierogi",
        excerpt:
          "Eine Familie, mehrere Füllungen. Ruskie, Fleisch oder Kraut mit Pilzen — oben wechseln, Inhalt folgt.",
        seoTitle: "Pierogi Rezepte | Alle Varianten | Alemniam",
        seoDescription:
          "Pierogi bilingual: Ruskie, mit Fleisch, mit Kraut und Pilzen. Kochen und Einkaufen in einer App.",
      },
      pl: {
        title: "Pierogi",
        slug: "pierogi",
        excerpt:
          "Jedna rodzina, kilka farszów. Ruskie, mięso albo kapusta z grzybami — przełącz u góry.",
        seoTitle: "Pierogi przepisy | Wszystkie warianty | Alemniam",
        seoDescription:
          "Pierogi dwujęzycznie: ruskie, z mięsem, z kapustą i grzybami. Gotowanie i zakupy.",
      },
    },
  },
];

/** Extra pierogi variants (Ruskie stays in seedRecipes, patched with familyId). */
export const seedFamilyVariantRecipes: Recipe[] = [
  {
    id: "recipe-pierogi-meat",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=1600&q=80",
    prepMinutes: 50,
    cookMinutes: 25,
    servings: 4,
    familyId: "family-pierogi",
    variantLabel: { de: "Fleisch", pl: "z mięsem" },
    variantImage:
      "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=400&q=80",
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-teig", "technique-freezer"],
    categoryIds: ["category-hauptgerichte"],
    relatedPostIds: [
      "post-pierogi-guide",
      "post-pierogi-formen",
      "post-teigmaschine",
      "post-fleischwolf",
      "post-freezer-meal-prep",
      "post-freezer-boxen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Pierogi mit Fleisch",
        slug: "fleisch",
        excerpt:
          "Herzhafter Klassiker mit gedünstetem Hack. Für Sonntag und große Teller.",
        steps: [
          {
            text: "Zwiebel fein würfeln, in Butter glasig dünsten.",
          },
          {
            text: "Hackfleisch anbraten, mit Zwiebel, Salz, Pfeffer und Majoran würzen. Abkühlen lassen.",
            tip: "Füllung muss kalt sein, sonst reißt der Teig.",
          },
          {
            text: "Pierogi-Teig kneten, ruhen lassen, ausrollen und Kreise ausstechen.",
          },
          {
            text: "Füllen, Ränder fest schließen, in Salzwasser garen bis sie aufschwimmen.",
          },
          {
            text: "Mit Butterzwiebeln oder klarer Soße servieren.",
          },
        ],
        seoTitle: "Pierogi mit Fleisch Rezept | Alemniam",
        seoDescription:
          "Pierogi z mięsem: Füllung, Teig, Kochen und Einkaufen — bilingual mit DE-Hinweisen.",
        article: `## Pierogi mit Fleisch — der Sonntagsklassiker

Pierogi mit Fleisch sind kein „schneller Snack“. Sie sind ein ruhiges Projekt für den Tag, an dem die Familie zusammenkommt. Die Füllung ist einfach: gut gedünstetes Fleisch, Zwiebel, Majoran. Kein Überwürzen — der Teig trägt den Geschmack.

### Warum diese Variante

In vielen Haushalten ist die Fleischfüllung die Variante für Gäste und Sonntag. Ruskie sind alltagstauglicher; Kraut und Pilze gehören zur Wigilia. Fleisch steht dazwischen: satt, klar, teilbar.

### Füllung richtig machen

Fleisch nicht roh in den Teig. Immer anbraten und abkühlen. Zu nasse Füllung weicht den Teig auf. Zu trockene Füllung schmeckt fade — ein Löffel Brühe oder Butter hilft.

### Einkaufen in Deutschland

Hack gemischt oder Rind/Schwein nach Geschmack. Majoran oft im Polenladen aromatischer. Butter und Zwiebel überall.

### Intern weiter

Wechsle oben zu [Ruskie](/de/rezepte/pierogi/ruskie) oder [Kraut-Pilze](/de/rezepte/pierogi/kraut-pilze). Technik: [Teig](/de/techniken/teig). Guide: [Pierogi-Teig](/de/blog/pierogi-teig) · [Teigmaschine](/de/blog/teigmaschine-pierogi).`,
      },
      pl: {
        title: "Pierogi z mięsem",
        slug: "mieso",
        excerpt:
          "Klasyczny farsz z duszonego mięsa. Na niedzielę i duże talerze.",
        steps: [
          {
            text: "Cebulę drobno pokrój, zeszklij na maśle.",
          },
          {
            text: "Przesmaż mięso mielone, dodaj cebulę, sól, pieprz i majeranek. Ostudź.",
            tip: "Farsz musi być zimny, inaczej ciasto pęka.",
          },
          {
            text: "Zagnieć ciasto na pierogi, odstaw, rozwałkuj i wykrawaj kółka.",
          },
          {
            text: "Nadziewaj, szczelnie sklejaj, gotuj w osolonej wodzie aż wypłyną.",
          },
          {
            text: "Podawaj z cebulką na maśle albo jasnym sosem.",
          },
        ],
        seoTitle: "Pierogi z mięsem przepis | Alemniam",
        seoDescription:
          "Pierogi z mięsem: farsz, ciasto, gotowanie i zakupy — dwujęzycznie.",
        article: `## Pierogi z mięsem — niedzielny klasyk

To nie jest „szybka przekąska”. To spokojny projekt na dzień, kiedy dom się zbiera. Farsz jest prosty: dobrze podsmażone mięso, cebula, majeranek. Bez przekombinowania.

### Dlaczego ten wariant

W wielu domach mięso to wariant gościnny i niedzielny. Ruskie są bardziej codzienne; kapusta z grzybami należy do Wigilii. Mięso jest po środku: sycące, czytelne, do dzielenia.

### Farsz

Mięsa nie wkładamy surowego. Zawsze podsmażyć i ostudzić. Mokry farsz rozmiękcza ciasto. Suchy smakuje blado — łyżka bulionu albo masła pomaga.

### Zakupy w Niemczech

Mielone mieszane albo wołowo-wieprzowe. Majeranek często lepszy w sklepie polskim.

### Dalej

Przełącz u góry na [ruskie](/pl/rezepte/pierogi/ruskie) albo [kapustę z grzybami](/pl/rezepte/pierogi/kapusta-grzyby). Technika: [ciasto](/pl/techniken/ciasto). Guide: [ciasto na pierogi](/pl/blog/ciasto-na-pierogi) · [robot do ciasta](/pl/blog/robot-do-ciasta-pierogi).`,
      },
    },
    ingredients: [
      {
        id: "pm-1",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "pm-2",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "pm-3",
        name: { de: "Hackfleisch gemischt", pl: "Mięso mielone" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "other",
        storeHintDe: "Hack gemischt / Schwein-Rind",
      },
      {
        id: "pm-4",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "pm-5",
        name: { de: "Majoran", pl: "Majeranek" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
        storeHintDe: "Polenladen oder Gewürzregal",
      },
      {
        id: "pm-6",
        name: { de: "Butter", pl: "Masło" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
    ],
    createdAt: "2026-01-12T10:00:00.000Z",
    updatedAt: "2026-07-19T10:00:00.000Z",
  },
  {
    id: "recipe-pierogi-cabbage",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=1600&q=80",
    prepMinutes: 55,
    cookMinutes: 25,
    servings: 4,
    familyId: "family-pierogi",
    variantLabel: { de: "Kraut & Pilze", pl: "kapusta i grzyby" },
    variantImage:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80",
    regionIds: [],
    occasionIds: ["occasion-wigilia", "occasion-post"],
    techniqueIds: ["technique-teig", "technique-freezer"],
    categoryIds: ["category-hauptgerichte", "category-vegetarisch"],
    relatedPostIds: [
      "post-pierogi-guide",
      "post-pierogi-formen",
      "post-teigmaschine",
      "post-freezer-meal-prep",
      "post-freezer-boxen",
      "post-kiszenie",
      "post-ferment-glaeser",
      "post-wigilia",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Pierogi mit Kraut und Pilzen",
        slug: "kraut-pilze",
        excerpt:
          "Wigilia-Klassiker: Sauerkraut und getrocknete Pilze. Würzig, festlich, ohne Fleisch.",
        steps: [
          {
            text: "Getrocknete Pilze einweichen, kochen, fein hacken. Sud aufheben.",
          },
          {
            text: "Sauerkraut abtropfen, mit Zwiebel und Pilzen dünsten, mit Sud abschmecken.",
            tip: "Nicht zu sauer — bei Bedarf kurz mit Wasser spülen.",
          },
          {
            text: "Teig bereiten, ruhen lassen, ausrollen.",
          },
          {
            text: "Füllen, schließen, in Salzwasser garen.",
          },
          {
            text: "Mit Öl oder Butterzwiebeln servieren — zur Wigilia oft ohne Speck.",
          },
        ],
        seoTitle: "Pierogi mit Kraut und Pilzen | Alemniam",
        seoDescription:
          "Pierogi z kapustą i grzybami: Wigilia-Rezept bilingual mit Einkaufshinweisen.",
        article: `## Pierogi mit Kraut und Pilzen

Diese Variante trägt den Tisch an Heiligabend. Sauerkraut, getrocknete Waldpilze, Geduld. Kein Fleisch — und trotzdem der tiefste Umami der Familie.

### Einkaufen in DE

Kapusta kiszona im Polenladen. Getrocknete Steinpilze oder Mischpilze dort oder online. Teigzutaten überall.

### Technik

Füllung gut auspressen. Nasse Füllung = platzen. Pilzsud sparsam zum Abschmecken, nicht zum Schwemmen.

### Weiter im Silo

[Ruskie](/de/rezepte/pierogi/ruskie) · [Fleisch](/de/rezepte/pierogi/fleisch) · [Wigilia Speiseplan](/de/blog/wigilia-speiseplan) · [Teig](/de/techniken/teig)`,
      },
      pl: {
        title: "Pierogi z kapustą i grzybami",
        slug: "kapusta-grzyby",
        excerpt:
          "Klasyk wigilijny: kapusta kiszona i suszone grzyby. Wyraziste, bez mięsa.",
        steps: [
          {
            text: "Namocz suszone grzyby, ugotuj, drobno posiekaj. Odłóż wywar.",
          },
          {
            text: "Odsącz kapustę, duś z cebulą i grzybami, dopraw wywarem.",
            tip: "Za kwaśną kapustę krótko przepłucz.",
          },
          {
            text: "Przygotuj ciasto, odstaw, rozwałkuj.",
          },
          {
            text: "Nadziewaj, sklejaj, gotuj w osolonej wodzie.",
          },
          {
            text: "Podawaj z olejem lub cebulką — na Wigilię często bez skwarków.",
          },
        ],
        seoTitle: "Pierogi z kapustą i grzybami przepis | Alemniam",
        seoDescription:
          "Pierogi wigilijne z kapustą i grzybami — dwujęzycznie, z zakupami w DE.",
        article: `## Pierogi z kapustą i grzybami

Ten wariant niesie stół wigilijny. Kapusta, suszone grzyby, cierpliwość. Bez mięsa — a jednak najgłębszy umami w rodzinie.

### Zakupy w DE

Kapusta kiszona w sklepie polskim. Suszone grzyby tam albo online.

### Technika

Farsz dobrze odciśnij. Mokry farsz = pękanie.

### Dalej

[Ruskie](/pl/rezepte/pierogi/ruskie) · [mięso](/pl/rezepte/pierogi/mieso) · [menu wigilijne](/pl/blog/menu-wigilijne) · [ciasto](/pl/techniken/ciasto)`,
      },
    },
    ingredients: [
      {
        id: "pc-1",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "pc-2",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "pc-3",
        name: { de: "Sauerkraut", pl: "Kapusta kiszona" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen / Kühlregal",
      },
      {
        id: "pc-4",
        name: { de: "Getrocknete Pilze", pl: "Suszone grzyby" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen oder Asia-Regal (Steinpilze)",
      },
      {
        id: "pc-5",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "pc-6",
        name: { de: "Öl oder Butter", pl: "Olej lub masło" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
    ],
    createdAt: "2026-01-12T11:00:00.000Z",
    updatedAt: "2026-07-19T10:00:00.000Z",
  },
];
