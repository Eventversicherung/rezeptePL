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
  {
    id: "family-placki",
    defaultVariantId: "recipe-placki",
    coverImage:
      "https://images.unsplash.com/photo-1631453717818-536547643874?w=1600&q=80",
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-panieren"],
    categoryIds: [
      "category-schnell",
      "category-hauptgerichte",
      "category-vegetarisch",
    ],
    variantIds: [
      "recipe-placki",
      "recipe-placki-cukinia",
      "recipe-placki-ser",
      "recipe-placki-jablka",
    ],
    relatedPostIds: [
      "post-placki-guide",
      "post-gusseisen",
      "post-sonntagsessen",
      "post-kasza",
      "post-smietana-schmand",
    ],
    translations: {
      de: {
        title: "Placki",
        slug: "placki",
        excerpt:
          "Eine Familie, mehrere Mischungen. Kartoffelklassiker, Zucchini, Käse oder Apfel — oben wechseln.",
        seoTitle: "Placki Rezepte | Alle Varianten | Alemniam",
        seoDescription:
          "Placki bilingual: ziemniaczane, mit Zucchini, mit Käse, mit Apfel. Braten und Einkaufen in einer App.",
      },
      pl: {
        title: "Placki",
        slug: "placki",
        excerpt:
          "Jedna rodzina, kilka mas. Klasyk z ziemniaków, cukinia, ser albo jabłko — przełącz u góry.",
        seoTitle: "Placki przepisy | Wszystkie warianty | Alemniam",
        seoDescription:
          "Placki dwujęzycznie: ziemniaczane, z cukinią, z serem, z jabłkami. Gotowanie i zakupy.",
      },
    },
  },
];

/** Family variants (default variant per family stays in seedRecipes, patched with familyId). */
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
  {
    id: "recipe-placki-cukinia",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1565299500977-26105862a20b?w=1600&q=80",
    prepMinutes: 25,
    cookMinutes: 25,
    servings: 4,
    familyId: "family-placki",
    variantLabel: { de: "Mit Zucchini", pl: "z cukinią" },
    variantImage:
      "https://images.unsplash.com/photo-1565299500977-26105862a20b?w=400&q=80",
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-panieren"],
    categoryIds: [
      "category-schnell",
      "category-hauptgerichte",
      "category-vegetarisch",
    ],
    relatedPostIds: [
      "post-placki-guide",
      "post-gusseisen",
      "post-sonntagsessen",
      "post-kasza",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Placki mit Zucchini",
        slug: "cukinia",
        excerpt:
          "Leichtere Sommer-Placki: Kartoffel und Zucchini gerieben, knusprig gebraten.",
        steps: [
          {
            text: "Kartoffeln und Zucchini grob reiben, Zwiebel fein reiben. Masse kräftig ausdrücken.",
            tip: "Zucchini gibt viel Wasser — extra gut pressen.",
          },
          {
            text: "Mit Ei, Mehl, Salz und Pfeffer verrühren. 5 Minuten ruhen.",
          },
          {
            text: "In heißem Öl (3–5 mm) goldbraun ausbacken, einmal wenden.",
            tip: "Nicht zu viele auf einmal — Pfanne muss heiß bleiben.",
          },
          {
            text: "Auf Küchenpapier kurz abtropfen. Mit Śmietana oder Salat servieren.",
          },
        ],
        seoTitle: "Placki mit Zucchini Rezept | Alemniam",
        seoDescription:
          "Placki z cukinią: Sommer-Variante bilingual mit DE-Einkaufshinweisen.",
        article: `## Placki mit Zucchini — leichter, sommerlicher

Wenn im Garten oder im Rewe-Regal die Zucchini sich stapeln, ist diese Mischung der pragmatische Ausweg: etwa zwei Drittel Kartoffel, ein Drittel Zucchini. Technik bleibt dieselbe — reiben, ausdrücken, heiß braten.

### Warum extra ausdrücken

Zucchini gibt mehr Flüssigkeit als Kartoffeln. Wer die Masse nur „leicht“ abtropft, bekommt weiche Puffer statt Knusper. Küchentuch oder Nussbeutel, kräftig pressen.

### Einkaufen in DE

Festkochende Kartoffeln, mittelgroße Zucchini. Śmietana im Polenladen oder Schmand ersetzen — siehe [Śmietana-Lexikon](/de/blog/smietana-schmand). [Gusseisen](/de/blog/gusseisenpfanne) hilft bei gleichmäßiger Kruste.

### Geschwister

Oben wechseln zu [Kartoffelklassiker](/de/rezepte/placki/ziemniaczane), [Käse](/de/rezepte/placki/mit-kaese) oder [Apfel](/de/rezepte/placki/mit-apfel). Technik-Pillar: [Placki-Guide](/de/blog/placki-guide).`,
      },
      pl: {
        title: "Placki z cukinią",
        slug: "cukinia",
        excerpt:
          "Lżejsze letnie placki: ziemniak i cukinia starte, smażone na chrupko.",
        steps: [
          {
            text: "Starte ziemniaki i cukinię, cebulę drobno. Dobrze odciśnij masę.",
            tip: "Cukinia puszcza dużo wody — dociskaj mocniej.",
          },
          {
            text: "Wymieszaj z jajkiem, mąką, solą i pieprzem. Odstaw 5 min.",
          },
          {
            text: "Smaż na złoto na gorącym oleju (3–5 mm), przewróć raz.",
            tip: "Nie za dużo naraz — patelnia musi być gorąca.",
          },
          {
            text: "Odsącz na papierze. Podawaj ze śmietaną albo sałatą.",
          },
        ],
        seoTitle: "Placki z cukinią przepis | Alemniam",
        seoDescription:
          "Placki z cukinią — letni wariant, dwujęzycznie ze wskazówkami DE.",
        article: `## Placki z cukinią — lżejsze, letnie

Gdy cukinia zalewa ogród albo promocję w sklepie, mieszanka ok. ⅔ ziemniaka i ⅓ cukinii to rozsądny kierunek. Technika ta sama: tarcie, odciśnięcie, gorące smażenie.

### Dlaczego mocniej odciśnij

Cukinia puszcza więcej wody niż ziemniak. Lekkie odsączenie = gumowate placki zamiast chrupka.

### Zakupy w DE

Ziemniaki raczej mączyste, cukinia średnia. [Śmietana czy Schmand](/pl/blog/smietana-czy-schmand). [Patelnia żeliwna](/pl/blog/patelnia-zelivna) pomaga.

### Dalej

Przełącz u góry: [ziemniaczane](/pl/rezepte/placki/ziemniaczane), [ser](/pl/rezepte/placki/ser), [jabłka](/pl/rezepte/placki/jablka). [Przewodnik placki](/pl/blog/placki-przewodnik).`,
      },
    },
    ingredients: [
      {
        id: "plc-1",
        name: { de: "Kartoffeln", pl: "Ziemniaki" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "plc-2",
        name: { de: "Zucchini", pl: "Cukinia" },
        amount: 300,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "plc-3",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "plc-4",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "plc-5",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 45,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "plc-6",
        name: { de: "Sauerrahm", pl: "Śmietana" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "dairy",
        storeHintDe: "Schmand / saure Sahne 20%",
      },
    ],
    createdAt: "2026-07-20T10:00:00.000Z",
    updatedAt: "2026-07-20T10:00:00.000Z",
  },
  {
    id: "recipe-placki-ser",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1627308595229-245cf2199a7f?w=1600&q=80",
    prepMinutes: 25,
    cookMinutes: 25,
    servings: 4,
    familyId: "family-placki",
    variantLabel: { de: "Mit Käse", pl: "z serem" },
    variantImage:
      "https://images.unsplash.com/photo-1627308595229-245cf2199a7f?w=400&q=80",
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-panieren"],
    categoryIds: ["category-schnell", "category-hauptgerichte"],
    relatedPostIds: [
      "post-placki-guide",
      "post-gusseisen",
      "post-twarog",
      "post-ersatzprodukte-de",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Placki mit Käse",
        slug: "mit-kaese",
        excerpt:
          "Kartoffelpuffer mit Twaróg in der Masse — herzhaft, cremig, knusprig.",
        steps: [
          {
            text: "Kartoffeln und Zwiebel reiben, gründlich ausdrücken.",
          },
          {
            text: "Twaróg zerbröseln, mit Kartoffelmasse, Ei, Mehl, Salz und Pfeffer mischen.",
            tip: "Twaróg vorher abtropfen — zu nass macht die Masse weich.",
          },
          {
            text: "In heißem Öl goldbraun braten, einmal wenden.",
          },
          {
            text: "Heiß mit Śmietana oder Kräuterdip servieren.",
          },
        ],
        seoTitle: "Placki mit Käse Rezept | Alemniam",
        seoDescription:
          "Placki z serem mit Twaróg — Rezept bilingual mit DE-Ladenhinweisen.",
        article: `## Placki mit Käse — herzhaft und cremig

Twaróg in der Masse macht die Placki sattiger als der reine Kartoffelklassiker. Der Käse schmilzt leicht mit, die Kruste bleibt knusprig — wenn die Masse trocken genug ist.

### Twaróg in DE

Quark (Magerquark) gut abtropfen. Ausführlich: [Twaróg-Guide](/de/blog/twarog-deutschland). Zu feuchter Quark = weiche Puffer.

### Technik

Gleiche Regeln wie beim Klassiker: heiße Pfanne, nicht zu dick formen, Wasser auspressen. [Gusseisen-Guide](/de/blog/gusseisenpfanne) · [Placki-Guide](/de/blog/placki-guide).

### Varianten-Switcher

[Kartoffelklassiker](/de/rezepte/placki/ziemniaczane) · [Zucchini](/de/rezepte/placki/cukinia) · [Apfel](/de/rezepte/placki/mit-apfel).`,
      },
      pl: {
        title: "Placki z serem",
        slug: "ser",
        excerpt:
          "Placki z twarogiem w masie — wytrawnie, kremowo, na chrupko.",
        steps: [
          {
            text: "Starte ziemniaki i cebulę, dobrze odciśnij.",
          },
          {
            text: "Rozkrusz twaróg, wymieszaj z masą, jajkiem, mąką, solą i pieprzem.",
            tip: "Twaróg odsącz wcześniej — mokry psuje chrupkość.",
          },
          {
            text: "Smaż na złoto na gorącym oleju, przewróć raz.",
          },
          {
            text: "Podawaj gorące ze śmietaną albo ziołowym dipem.",
          },
        ],
        seoTitle: "Placki z serem przepis | Alemniam",
        seoDescription:
          "Placki z serem i twarogiem — przepis dwujęzyczny ze wskazówkami DE.",
        article: `## Placki z serem — wytrawnie i kremowo

Twaróg w masie robi placki bardziej sycące niż sam ziemniak. Ser lekko się topi, skórka zostaje chrupka — jeśli masa jest sucha.

### Twaróg w Niemczech

Quark odsącz. [Poradnik twaróg](/pl/blog/twarog-w-niemczech). Za mokry = miękkie placki.

### Technika

Te same zasady: gorąca patelnia, nie za grube, odciśnięcie wody. [Patelnia żeliwna](/pl/blog/patelnia-zelivna) · [Przewodnik placki](/pl/blog/placki-przewodnik).

### Warianty

[Ziemniaczane](/pl/rezepte/placki/ziemniaczane) · [cukinia](/pl/rezepte/placki/cukinia) · [jabłka](/pl/rezepte/placki/jablka).`,
      },
    },
    ingredients: [
      {
        id: "pls-1",
        name: { de: "Kartoffeln", pl: "Ziemniaki" },
        amount: 700,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "pls-2",
        name: { de: "Twaróg", pl: "Twaróg" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Quark (Magerquark), gut abgetropft",
        substitute: {
          de: "Magerquark, 30 Min abtropfen",
          pl: "Chudy twaróg lub Quark odsączony",
        },
      },
      {
        id: "pls-3",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "pls-4",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "pls-5",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 35,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-20T10:00:00.000Z",
    updatedAt: "2026-07-20T10:00:00.000Z",
  },
  {
    id: "recipe-placki-jablka",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1488477181941-6d2ea94eb813?w=1600&q=80",
    prepMinutes: 25,
    cookMinutes: 20,
    servings: 4,
    familyId: "family-placki",
    variantLabel: { de: "Mit Apfel", pl: "z jabłkami" },
    variantImage:
      "https://images.unsplash.com/photo-1488477181941-6d2ea94eb813?w=400&q=80",
    regionIds: [],
    occasionIds: [],
    techniqueIds: ["technique-panieren"],
    categoryIds: [
      "category-schnell",
      "category-suess",
      "category-vegetarisch",
    ],
    relatedPostIds: [
      "post-placki-guide",
      "post-gusseisen",
      "post-tlusty-czwartek",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Placki mit Apfel",
        slug: "mit-apfel",
        excerpt:
          "Süße Kartoffelpuffer mit geriebenem Apfel — mit Zimt und Puderzucker.",
        steps: [
          {
            text: "Kartoffeln reiben und ausdrücken. Apfel schälen, entkernen, grob reiben.",
          },
          {
            text: "Kartoffel, Apfel, Ei, Mehl, Prise Salz und Zimt vermischen.",
            tip: "Apfel gibt Saft — Masse kurz vor dem Braten nochmals leicht ausdrücken.",
          },
          {
            text: "In Butter und Öl goldbraun braten.",
          },
          {
            text: "Warm mit Puderzucker und optional Apfelmus servieren.",
          },
        ],
        seoTitle: "Placki mit Apfel Rezept | Alemniam",
        seoDescription:
          "Süße Placki z jabłkami — Rezept bilingual für die Diaspora-Küche.",
        article: `## Placki mit Apfel — süße Abzweigung

Geriebener Apfel in der Kartoffelmasse macht aus dem herzhaften Klassiker ein Dessert oder Sonntagsfrühstück. Zimt und Puderzucker — in manchen Familien auch Apfelmus dazu.

### Nicht verwechseln mit Racuchy

[Racuchy](/de/rezepte/racuchy-jablka) sind Hefeteig-Pfannkuchen mit Apfelstücken. Diese Variante bleibt **Placki-Technik**: rohe Kartoffel, reiben, braten.

### Tipps

Säuerliche Äpfel (Boskoop, Elstar) halten Form. Butter + Öl verhindert, dass die Kruste zu schnell verbrennt.

### Weitere Varianten

[Ziemniaczane](/de/rezepte/placki/ziemniaczane) · [Zucchini](/de/rezepte/placki/cukinia) · [Käse](/de/rezepte/placki/mit-kaese).`,
      },
      pl: {
        title: "Placki z jabłkami",
        slug: "jablka",
        excerpt:
          "Słodkie placki z tartym jabłkiem — z cynamonem i cukrem pudrem.",
        steps: [
          {
            text: "Starte ziemniaki i odciśnij. Obierz jabłka, starte na grubo.",
          },
          {
            text: "Wymieszaj z jajkiem, mąką, szczyptą soli i cynamonem.",
            tip: "Jabłko puszcza sok — tuż przed smażeniem lekko odciśnij.",
          },
          {
            text: "Smaż na złoto na maśle z odrobiną oleju.",
          },
          {
            text: "Podawaj ciepłe z cukrem pudrem i opcjonalnie musem.",
          },
        ],
        seoTitle: "Placki z jabłkami przepis | Alemniam",
        seoDescription:
          "Słodkie placki z jabłkami — przepis dwujęzyczny dla kuchni diasporowej.",
        article: `## Placki z jabłkami — słodka odnoga

Tarte jabłko w masie ziemniaczanej robi z wytrawnego klasyku deser albo niedzielne śniadanie. Cynamon, cukier puder — czasem mus jabłkowy obok.

### Nie mylić z racuchami

[Racuchy](/pl/rezepte/racuchy-jablka) to drożdżowe racuchy z kawałkami jabłka. Tu zostaje **technika placków**: surowy ziemniak, tarcie, smażenie.

### Wskazówki

Kwaśne jabłka (Antonówka, szara reneta) trzymają formę. Masło z olejem chroni skórkę przed przypaleniem.

### Inne warianty

[Ziemniaczane](/pl/rezepte/placki/ziemniaczane) · [cukinia](/pl/rezepte/placki/cukinia) · [ser](/pl/rezepte/placki/ser).`,
      },
    },
    ingredients: [
      {
        id: "plj-1",
        name: { de: "Kartoffeln", pl: "Ziemniaki" },
        amount: 600,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "plj-2",
        name: { de: "Äpfel", pl: "Jabłka" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
        storeHintDe: "Säuerliche Sorte (Boskoop, Elstar)",
      },
      {
        id: "plj-3",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "plj-4",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 50,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "plj-5",
        name: { de: "Zimt", pl: "Cynamon" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
      {
        id: "plj-6",
        name: { de: "Puderzucker", pl: "Cukier puder" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-20T10:00:00.000Z",
    updatedAt: "2026-07-20T10:00:00.000Z",
  },
];
