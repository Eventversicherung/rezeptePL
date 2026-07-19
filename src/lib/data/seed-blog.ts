import type { BlogPost } from "@/types/content";

export const seedBlogPosts: BlogPost[] = [
  {
    id: "post-pierogi-teig",
    status: "published",
    postType: "guide",
    coverImage:
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1600&q=80",
    siloIds: ["dishFamily", "technique"],
    relatedRecipeIds: [
      "recipe-pierogi",
      "recipe-pierogi-meat",
      "recipe-pierogi-cabbage",
    ],
    relatedPostIds: ["post-teigmaschine", "post-twarog"],
    relatedProductIds: ["aff-rolling-pin", "aff-pierogi-form"],
    clusterIds: ["technique-teig"],
    translations: {
      de: {
        title: "Pierogi-Teig: weich, elastisch, ohne Drama",
        slug: "pierogi-teig",
        excerpt:
          "Der Teig entscheidet. Mengen, Ruhezeit, Ausrollen — klar erklärt für die Küche in Deutschland.",
        seoTitle: "Pierogi Teig Rezept | Schritt für Schritt | Alemniam",
        seoDescription:
          "Pierogi-Teig richtig kneten und ausrollen. Tipps für deutsche Mehle und große Batches.",
        body: `## Pierogi-Teig, der hält

Guter Pierogi-Teig ist weich, nicht klebrig, und dehnt sich ohne zu reißen. Du brauchst kein Geheimrezept — du brauchst Verhältnis, Ruhe und ein ruhiges Tempo.

### Grundverhältnis

Für ca. 4 Portionen: 500 g Weizenmehl (Type 405 oder 550), 1 Ei, ca. 200–220 ml warmes Wasser, 1 EL Öl, Prise Salz. Wasser nach Gefühl — Mehle in DE nehmen unterschiedlich auf.

### Kneten und ruhen

8–10 Minuten kneten, bis die Oberfläche glatt ist. Abdecken, 20–30 Minuten ruhen. Der Teig wird geschmeidiger; du sparst Kraft beim Ausrollen.

### Ausrollen

Dünn, aber nicht transparent. Zu dick = teigig. Zu dünn = Platzer an der Naht. Kreise gleichmäßig — eine Form hilft bei großen Mengen.

### Welche Variante füllen?

- [Pierogi Ruskie](/de/rezepte/pierogi/ruskie) — Kartoffel & Twaróg
- [Pierogi mit Fleisch](/de/rezepte/pierogi/fleisch)
- [Pierogi mit Kraut und Pilzen](/de/rezepte/pierogi/kraut-pilze)

Technik-Hub: [Teig](/de/techniken/teig). Wenn du oft batchst: [Teigmaschine für Pierogi](/de/blog/teigmaschine-pierogi).

### Freezer

Roh gefüllt einfrieren auf dem Blech, dann in Beutel. Nicht auftauen vor dem Kochen — direkt in leicht kochendes Wasser.`,
      },
      pl: {
        title: "Ciasto na pierogi: miękkie, elastyczne, bez dramatu",
        slug: "ciasto-na-pierogi",
        excerpt:
          "Ciasto decyduje. Proporcje, odpoczynek, wałkowanie — jasno, pod kuchnię w Niemczech.",
        seoTitle: "Ciasto na pierogi przepis | Krok po kroku | Alemniam",
        seoDescription:
          "Jak zrobić ciasto na pierogi. Wskazówki do mąki w DE i większych porcji.",
        body: `## Ciasto, które trzyma

Dobre ciasto jest miękkie, nie klei się i rozciąga bez pękania. Nie potrzebujesz sekretu — potrzebujesz proporcji, odpoczynku i spokojnego tempa.

### Proporcje

Na ok. 4 porcje: 500 g mąki, 1 jajko, ok. 200–220 ml ciepłej wody, 1 łyżka oleju, szczypta soli. Woda „na czucie” — mąki w DE różnie chłoną.

### Wyrabianie

8–10 minut, aż powierzchnia będzie gładka. Przykryj, odstaw 20–30 min.

### Wałkowanie

Cienko, ale nie na przezroczystość. Równe kółka — foremka pomaga przy większej ilości.

### Który farsz?

- [Pierogi ruskie](/pl/rezepte/pierogi/ruskie)
- [Pierogi z mięsem](/pl/rezepte/pierogi/mieso)
- [Pierogi z kapustą i grzybami](/pl/rezepte/pierogi/kapusta-grzyby)

Hub: [ciasto](/pl/techniken/ciasto). Przy większych partiach: [robot do ciasta](/pl/blog/robot-do-ciasta-pierogi).`,
      },
    },
    publishedAt: "2026-07-01T10:00:00.000Z",
    updatedAt: "2026-07-19T10:00:00.000Z",
  },
  {
    id: "post-teigmaschine",
    status: "published",
    postType: "buying-guide",
    coverImage:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80",
    siloIds: ["gear"],
    relatedRecipeIds: [
      "recipe-pierogi",
      "recipe-pierogi-meat",
      "recipe-pierogi-cabbage",
    ],
    relatedPostIds: ["post-pierogi-teig", "post-polenladen"],
    relatedProductIds: [
      "aff-stand-mixer",
      "aff-rolling-pin",
      "aff-pierogi-form",
      "aff-potato-ricer",
    ],
    clusterIds: ["technique-teig"],
    translations: {
      de: {
        title: "Teigmaschine für Pierogi: lohnt sich das?",
        slug: "teigmaschine-pierogi",
        excerpt:
          "Kriterien zuerst, dann Empfehlungsstufen. Für Wigilia-Mengen und ruhige Sonntage — ohne Hype.",
        seoTitle: "Teigmaschine Pierogi Kaufberatung | Alemniam",
        seoDescription:
          "Welche Küchenmaschine für Pierogi-Teig? Kriterien, Budget, Allround, Family-Batch — plus Links zu Rezepten.",
        body: `## Brauchst du eine Teigmaschine für Pierogi?

Nur wenn du regelmäßig größere Mengen machst — Wigilia, Freezer-Batch, Familie. Für zwei Portionen reicht Hand und Ruhe. Für fünf Kilo Teig rettet ein Motor die Schultern.

### Kriterien (vor dem Kauf)

1. **Schüsselgröße** — mind. 4–5 Liter für Familientage  
2. **Motor / Drehmoment** — Teig ist schwer; schwache Maschinen heißlaufen  
3. **Knethaken** — Metall, stabil  
4. **Reinigung** — wenig Aufsteckteile, die du hasst  
5. **Lärm & Stellplatz** — bleibt sie auf der Arbeitsfläche?

### Empfehlungsstufen

- **Budget:** guter Teigroller + Formen + Zeit. Kein Motor nötig.  
- **Allround:** stabile Küchenmaschine mit Knethaken für Teig und Hefe.  
- **Family-Batch:** größere Schüssel, starker Motor, optional Nudelaufsatz.

### Mit Rezepten verbinden

Lerne zuerst den [Teig von Hand](/de/blog/pierogi-teig), dann automatisiere. Varianten:

- [Ruskie](/de/rezepte/pierogi/ruskie)
- [Fleisch](/de/rezepte/pierogi/fleisch)
- [Kraut & Pilze](/de/rezepte/pierogi/kraut-pilze)

Cluster: [Teig](/de/techniken/teig).

### Transparenz

Produktlinks können Affiliate-Links sein. Wir empfehlen nur, was den Kochjob erleichtert — Kriterien stehen über Markennamen.`,
      },
      pl: {
        title: "Robot do ciasta na pierogi: czy warto?",
        slug: "robot-do-ciasta-pierogi",
        excerpt:
          "Najpierw kryteria, potem poziomy rekomendacji. Na ilości wigilijne — bez hype’u.",
        seoTitle: "Robot do ciasta pierogi — poradnik | Alemniam",
        seoDescription:
          "Jaki robot do ciasta na pierogi? Kryteria, budżet, allround, family-batch.",
        body: `## Czy potrzebujesz robota?

Tylko jeśli robisz większe ilości — Wigilia, mrożenie, rodzina. Na dwie porcje wystarczą ręce. Na kilka kilo ciasta silnik ratuje barki.

### Kryteria

1. **Misa** — min. 4–5 l  
2. **Moment obrotowy** — ciasto jest ciężkie  
3. **Hak** — metalowy, stabilny  
4. **Mycie** — mało części, których nienawidzisz  
5. **Hałas i miejsce**

### Poziomy

- **Budżet:** wałek + foremki + czas  
- **Allround:** solidny robot z hakiem  
- **Family-batch:** większa misa, mocniejszy silnik

### Przepisy

Najpierw [ciasto ręcznie](/pl/blog/ciasto-na-pierogi), potem automatyzacja:

- [Ruskie](/pl/rezepte/pierogi/ruskie)
- [Mięso](/pl/rezepte/pierogi/mieso)
- [Kapusta i grzyby](/pl/rezepte/pierogi/kapusta-grzyby)

### Transparentność

Linki mogą być afiliacyjne. Kryteria ważniejsze niż marka.`,
      },
    },
    publishedAt: "2026-07-05T10:00:00.000Z",
    updatedAt: "2026-07-19T10:00:00.000Z",
  },
  {
    id: "post-twarog",
    status: "published",
    postType: "lexicon",
    coverImage:
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=1600&q=80",
    siloIds: ["ingredient", "diaspora"],
    relatedRecipeIds: ["recipe-pierogi", "recipe-nalesniki"],
    relatedPostIds: ["post-polenladen", "post-pierogi-teig"],
    relatedProductIds: ["aff-potato-ricer"],
    clusterIds: [],
    translations: {
      de: {
        title: "Twaróg in Deutschland: was kaufen?",
        slug: "twarog-deutschland",
        excerpt:
          "Quark ist nicht gleich Twaróg. So findest du die richtige Konsistenz für Pierogi und Naleśniki.",
        seoTitle: "Twaróg Alternative Deutschland | Quark | Alemniam",
        seoDescription:
          "Twaróg vs. Speisequark vs. Magerquark. Einkaufen in DE für authentische Füllungen.",
        body: `## Twaróg ≠ jeder Quark

In Polen ist Twaróg oft körniger und trockener als deutscher Speisequark. Für [Pierogi Ruskie](/de/rezepte/pierogi/ruskie) brauchst du Masse, die nicht wässert.

### Was im DE-Supermarkt funktioniert

- **Magerquark / Speisequark (20 %)** gut abgetropft im Sieb  
- **Körniger Frischkäse** manchmal näher am Gefühl  
- **Echter Twaróg** im Polenladen — erste Wahl

### Trick

Quark 30–60 Min abtropfen. Zu nass = matschige Füllung. Mit Kartoffelpresse für Ruskie wird die Text fluffig.

### Rezepte

[Pierogi Ruskie](/de/rezepte/pierogi/ruskie) · [Naleśniki mit Twaróg](/de/rezepte/nalesniki-twarog) · [Polenladen-Guide](/de/blog/polenladen-einkaufen)`,
      },
      pl: {
        title: "Twaróg w Niemczech: co kupić?",
        slug: "twarog-w-niemczech",
        excerpt:
          "Quark to nie zawsze twaróg. Jak znaleźć konsystencję do pierogów i naleśników.",
        seoTitle: "Twaróg w Niemczech Quark | Alemniam",
        seoDescription:
          "Twaróg vs. Speisequark. Zakupy w DE do autentycznego farszu.",
        body: `## Twaróg ≠ każdy Quark

W Polsce twaróg bywa bardziej ziarnisty i suchy. Do [pierogów ruskich](/pl/rezepte/pierogi/ruskie) potrzebujesz masy, która nie puszcza wody.

### Co działa w DE

- Magerquark / Speisequark dobrze odsączony  
- Prawdziwy twaróg w sklepie polskim — pierwszy wybór

### Przepisy

[Ruskie](/pl/rezepte/pierogi/ruskie) · [Naleśniki](/pl/rezepte/nalesniki-twarog) · [Sklep polski](/pl/blog/sklep-polski-zakupy)`,
      },
    },
    publishedAt: "2026-07-08T10:00:00.000Z",
    updatedAt: "2026-07-19T10:00:00.000Z",
  },
  {
    id: "post-polenladen",
    status: "published",
    postType: "diaspora",
    coverImage:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=80",
    siloIds: ["diaspora"],
    relatedRecipeIds: [
      "recipe-pierogi",
      "recipe-bigos",
      "recipe-zurek",
      "recipe-barszcz",
    ],
    relatedPostIds: ["post-twarog", "post-wigilia"],
    relatedProductIds: [],
    clusterIds: [],
    translations: {
      de: {
        title: "Polenladen vs. REWE: was wo kaufen?",
        slug: "polenladen-einkaufen",
        excerpt:
          "Praktische Aufteilung für den Alltag in Deutschland — ohne Mythen, mit klarer Liste.",
        seoTitle: "Polenladen Einkaufen Guide | Alemniam",
        seoDescription:
          "Welche polnischen Zutaten im Polenladen, welche bei REWE/Kaufland? Für Bigos, Żurek, Pierogi.",
        body: `## Zwei Einkaufswege, ein Tisch

Du musst nicht alles im Polenladen holen. Und nicht alles im deutschen Supermarkt erzwingen.

### Immer im Polenladen sinnvoll

Kapusta kiszona (gute Qualität), Zakwas na żurek, echte Kiełbasa, Majeranek/Lubczyk-Bundles, manchmal Twaróg und getrocknete Pilze.

### Oft im REWE/Kaufland ok

Mehl, Eier, Kartoffeln, Zwiebeln, Sahne/Schmand-Näherungen, Rote Bete, Fleisch.

### Rezept-Links

[Pierogi Ruskie](/de/rezepte/pierogi/ruskie) · [Bigos](/de/rezepte/bigos) · [Żurek](/de/rezepte/zurek) · [Barszcz](/de/rezepte/barszcz-czerwony) · [Twaróg-Guide](/de/blog/twarog-deutschland)`,
      },
      pl: {
        title: "Sklep polski vs REWE: co gdzie kupić?",
        slug: "sklep-polski-zakupy",
        excerpt:
          "Praktyczny podział na co dzień w Niemczech — bez mitów, z jasną listą.",
        seoTitle: "Sklep polski zakupy Niemcy | Alemniam",
        seoDescription:
          "Co w sklepie polskim, co w REWE/Kaufland? Pod bigos, żurek, pierogi.",
        body: `## Dwa zakupy, jeden stół

Nie musisz wszystkiego brać w sklepie polskim. I nie musisz wszystkiego forsować w niemieckim.

### W sklepie polskim

Kapusta kiszona, zakwas, dobra kiełbasa, majeranek, często twaróg i suszone grzyby.

### W REWE/Kaufland

Mąka, jajka, ziemniaki, cebula, buraki, mięso.

### Przepisy

[Ruskie](/pl/rezepte/pierogi/ruskie) · [Bigos](/pl/rezepte/bigos) · [Żurek](/pl/rezepte/zurek) · [Barszcz](/pl/rezepte/barszcz-czerwony) · [Twaróg](/pl/blog/twarog-w-niemczech)`,
      },
    },
    publishedAt: "2026-07-10T10:00:00.000Z",
    updatedAt: "2026-07-19T10:00:00.000Z",
  },
  {
    id: "post-wigilia",
    status: "published",
    postType: "culture",
    coverImage:
      "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=1600&q=80",
    siloIds: ["culture", "occasion"],
    relatedRecipeIds: [
      "recipe-pierogi-cabbage",
      "recipe-barszcz",
      "recipe-pierogi",
    ],
    relatedPostIds: ["post-pierogi-teig", "post-polenladen"],
    relatedProductIds: ["aff-pierogi-form", "aff-freezer-boxes"],
    clusterIds: ["occasion-wigilia"],
    translations: {
      de: {
        title: "Wigilia Speiseplan: ruhig planen, klar kochen",
        slug: "wigilia-speiseplan",
        excerpt:
          "Zwölf Gerichte sind Tradition — kein Wettkampf. Ein machbarer Plan für Haushalte in DE.",
        seoTitle: "Wigilia Rezepte Speiseplan | Alemniam",
        seoDescription:
          "Polnischer Weihnachtsabend: Speiseplan, Pierogi, Barszcz — bilingual und alltagstauglich.",
        body: `## Wigilia ohne Chaos

Zwölf Gerichte sind ein Orientierungspunkt, kein Gesetz. Wähle Tiefe statt Menge: Barszcz, eine starke Pierogi-Variante, etwas Fisch oder eine klare Alternative, Kompott.

### Kern des Tisches

- [Barszcz czerwony](/de/rezepte/barszcz-czerwony)
- [Pierogi mit Kraut und Pilzen](/de/rezepte/pierogi/kraut-pilze)
- Optional [Ruskie](/de/rezepte/pierogi/ruskie) für Kinder und Gäste

### Zeitplan

Teig und Füllung 1–2 Tage vorher. Freezer nutzen ([Technik Freezer](/de/techniken/freezer)). Barszcz am Vortag. Am Tag selbst: kochen, anrichten, atmen.

### Cluster & Guides

[Wigilia](/de/anlaesse/wigilia) · [Pierogi-Teig](/de/blog/pierogi-teig) · [Polenladen](/de/blog/polenladen-einkaufen)

Respekt vor regionalen Unterschieden: es gibt nicht „die eine echte“ Wigilia.`,
      },
      pl: {
        title: "Menu wigilijne: spokojny plan, jasne gotowanie",
        slug: "menu-wigilijne",
        excerpt:
          "Dwanaście potraw to tradycja — nie zawody. Wykonalny plan dla domów w DE.",
        seoTitle: "Wigilia przepisy menu | Alemniam",
        seoDescription:
          "Polska Wigilia: menu, pierogi, barszcz — dwujęzycznie, bez chaosu.",
        body: `## Wigilia bez chaosu

Dwanaście potraw to punkt odniesienia, nie ustawa. Wybierz głębię zamiast ilości: barszcz, mocne pierogi, coś z ryby albo jasna alternatywa, kompot.

### Rdzeń stołu

- [Barszcz](/pl/rezepte/barszcz-czerwony)
- [Pierogi z kapustą i grzybami](/pl/rezepte/pierogi/kapusta-grzyby)
- Opcjonalnie [ruskie](/pl/rezepte/pierogi/ruskie)

### Harmonogram

Ciasto i farsz 1–2 dni wcześniej. Mrożenie ([technika](/pl/techniken/mrozenie)). Barszcz dzień wcześniej.

### Dalej

[Wigilia](/pl/anlaesse/wigilia) · [Ciasto](/pl/blog/ciasto-na-pierogi) · [Sklep polski](/pl/blog/sklep-polski-zakupy)

Szacunek dla różnic regionalnych: nie ma jednej „jedynej prawdziwej” Wigilii.`,
      },
    },
    publishedAt: "2026-07-12T10:00:00.000Z",
    updatedAt: "2026-07-19T10:00:00.000Z",
  },
];
