import type { Recipe, RecipeFamily } from "@/types/content";

export const seedFamilies: RecipeFamily[] = [
  {
    id: "family-nalesniki",
    defaultVariantId: "recipe-nalesniki",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-nalesniki/f97065d7-8db8-4d8c-83e8-45a6aa9521ef.webp",
    regionIds: [],
    occasionIds: [],
    techniqueIds: ["technique-teig", "technique-freezer"],
    categoryIds: [
      "category-schnell",
      "category-suess",
      "category-vegetarisch",
      "category-hauptgerichte",
    ],
    variantIds: [
      "recipe-nalesniki",
      "recipe-nalesniki-mieso",
      "recipe-nalesniki-szpinak",
      "recipe-nalesniki-dzem",
    ],
    relatedPostIds: [
      "post-nalesniki-guide",
      "post-twarog",
      "post-smietana-schmand",
      "post-ersatzprodukte-de",
      "post-freezer-meal-prep",
    ],
    translations: {
      de: {
        title: "Naleśniki",
        slug: "nalesniki",
        excerpt:
          "Eine Familie, mehrere Füllungen: Oben kannst du zwischen Twaróg, Fleisch, Spinat und Marmelade wechseln.",
        seoTitle: "Naleśniki Rezepte | Alle Varianten | Alemniam",
        seoDescription:
          "Naleśniki bilingual: mit Twaróg, mit Fleisch, mit Spinat, mit Marmelade. Backen und Einkaufen in einer App.",
      },
      pl: {
        title: "Naleśniki",
        slug: "nalesniki",
        excerpt:
          "Jedna rodzina, kilka farszów: u góry przełączysz między twarogiem, mięsem, szpinakiem i dżemem.",
        seoTitle: "Naleśniki przepisy | Wszystkie warianty | Alemniam",
        seoDescription:
          "Naleśniki dwujęzycznie: z twarogiem, z mięsem, ze szpinakiem, z dżemem. Gotowanie i zakupy.",
      },
    },
  },
  {
    id: "family-pierogi",
    defaultVariantId: "recipe-pierogi",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-pierogi/ffa4f850-6746-4b55-8710-b19e03abf532.webp",
    regionIds: [],
    occasionIds: ["occasion-wigilia", "occasion-niedziela"],
    techniqueIds: ["technique-teig", "technique-freezer"],
    categoryIds: ["category-hauptgerichte", "category-vegetarisch"],
    variantIds: [
      "recipe-pierogi",
      "recipe-pierogi-meat",
      "recipe-pierogi-cabbage",
      "recipe-pierogi-jagody",
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
          "Eine Familie mit mehreren Füllungen, von Ruskie über Fleisch und Kraut mit Pilzen bis zu süßen Heidelbeeren, wähle deine Variante oben in der Übersicht.",
        seoTitle: "Pierogi Rezepte | Alle Varianten | Alemniam",
        seoDescription:
          "Pierogi bilingual: Ruskie, mit Fleisch, mit Kraut und Pilzen, mit Heidelbeeren. Kochen und Einkaufen in einer App.",
      },
      pl: {
        title: "Pierogi",
        slug: "pierogi",
        excerpt:
          "Jedna rodzina z kilkoma farszami, od ruskich przez mięso i kapustę z grzybami po słodkie jagody, wybierz swój wariant w przełączniku powyżej.",
        seoTitle: "Pierogi przepisy | Wszystkie warianty | Alemniam",
        seoDescription:
          "Pierogi dwujęzycznie: ruskie, z mięsem, z kapustą i grzybami, z jagodami. Gotowanie i zakupy.",
      },
    },
  },
  {
    id: "family-placki",
    defaultVariantId: "recipe-placki",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-placki/27392e29-e109-488c-8da8-18fc88f28867.webp",
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
          "Eine Familie mit mehreren Mischungen, vom Kartoffelklassiker über Zucchini und Käse bis zum süßen Apfel, wähle deine Variante oben in der Übersicht.",
        seoTitle: "Placki Rezepte | Alle Varianten | Alemniam",
        seoDescription:
          "Placki bilingual: ziemniaczane, mit Zucchini, mit Käse, mit Apfel. Braten und Einkaufen in einer App.",
      },
      pl: {
        title: "Placki",
        slug: "placki",
        excerpt:
          "Jedna rodzina z kilkoma masami, od klasyka ziemniaczanego przez cukinię i ser po słodkie jabłko, wybierz swój wariant w przełączniku powyżej.",
        seoTitle: "Placki przepisy | Wszystkie warianty | Alemniam",
        seoDescription:
          "Placki dwujęzycznie: ziemniaczane, z cukinią, z serem, z jabłkami. Gotowanie i zakupy.",
      },
    },
  },
  {
    id: "family-ogorki-malosolne",
    defaultVariantId: "recipe-ogorki-malosolne",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-ogorki-malosolne/3fc53722-42c1-4572-870c-99f960c7ceaa.webp",
    regionIds: [],
    occasionIds: ["occasion-grill"],
    techniqueIds: ["technique-kiszenie"],
    categoryIds: [
      "category-eingelegt",
      "category-vegetarisch",
      "category-schnell",
    ],
    variantIds: [
      "recipe-ogorki-malosolne",
      "recipe-ogorki-malosolne-ostre",
      "recipe-ogorki-malosolne-miod",
      "recipe-ogorki-malosolne-deb",
    ],
    relatedPostIds: [
      "post-kiszenie",
      "post-ferment-glaeser",
      "post-polenladen",
      "post-ersatzprodukte-de",
    ],
    translations: {
      de: {
        title: "Ogórki małosolne",
        slug: "ogorki-malosolne",
        excerpt:
          "Eine Familie, mehrere Hausrezepte, klassisch, scharf, mit Honig oder mit Eichenblatt, oben lässt sich zwischen allen Varianten wechseln.",
        seoTitle: "Ogórki małosolne Rezepte | Alle Varianten | Alemniam",
        seoDescription:
          "Ogórki małosolne bilingual: klassisch, scharf, mit Honig, mit Eichenblatt. Kurzferment, klar getrennt von Kiszone und Essiggurken.",
      },
      pl: {
        title: "Ogórki małosolne",
        slug: "ogorki-malosolne",
        excerpt:
          "Jedna rodzina, kilka domowych wersji, klasyczne, ostre, z miodem albo z liściem dębu, przełącznik między wariantami znajdziesz u góry.",
        seoTitle: "Ogórki małosolne przepisy | Wszystkie warianty | Alemniam",
        seoDescription:
          "Ogórki małosolne dwujęzycznie: klasyczne, ostre, z miodem, z liściem dębu. Krótki kis, jasno osobno od kiszonych i konserwowych.",
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
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-pierogi-meat/eca2d558-97cf-431f-ac53-76375f409c61.webp",
    prepMinutes: 50,
    cookMinutes: 25,
    servings: 4,
    familyId: "family-pierogi",
    variantLabel: { de: "Fleisch", pl: "z mięsem" },
    variantImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-pierogi-meat/eca2d558-97cf-431f-ac53-76375f409c61.webp",
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
          "Kräftig gefüllte Pierogi mit gedünstetem, mit Zwiebel und Majoran gewürztem Hackfleisch, üppiger und für Gäste gedacht anders als die alltäglichen Ruskie und weniger fest an die Wigilia gebunden als die Kraut-Pilz-Füllung.",
        steps: [
          {
            text: "Würfle die Zwiebel fein und dünste sie in Butter glasig, ohne sie braun werden zu lassen.",
            tip: "Nimm dir für diesen Schritt Zeit, eine wirklich glasige, weiche Zwiebel macht die Füllung später deutlich runder im Geschmack.",
          },
          {
            text: "Brate das Hackfleisch krümelig an, würze es mit der Zwiebel, Salz, Pfeffer und Majoran und lasse es vollständig abkühlen.",
            tip: "Die Füllung muss wirklich kalt sein, bevor sie in den Teig kommt, sonst reißt der Teig beim Verschließen der Ränder auf.",
          },
          {
            text: "Knete den Pierogi-Teig, lasse ihn kurz ruhen, rolle ihn dünn aus und steche Kreise aus.",
            tip: "Lege die ausgestochenen Kreise unter ein leicht feuchtes Tuch, damit die Ränder nicht austrocknen, während du weiterarbeitest.",
          },
          {
            text: "Fülle die Kreise, verschließe die Ränder fest zwischen den Fingern und gare die Pierogi in leicht siedendem Salzwasser, bis sie an die Oberfläche steigen.",
            tip: "Koche nur kleine Chargen gleichzeitig, sonst kleben die Pierogi aneinander und die Nähte öffnen sich beim Rühren.",
          },
          {
            text: "Serviere die Pierogi heiß mit goldener Butterzwiebel oder einer leichten, klaren Soße.",
            tip: "Reste schmecken am nächsten Tag oft noch besser, kurz in der Pfanne gebraten wird die Naht schön knusprig.",
          },
        ],
        seoTitle: "Pierogi mit Fleisch Rezept | Alemniam",
        seoDescription:
          "Pierogi z mięsem: Fleischfüllung, Teig und Einkauf, bilingual mit Tipps aus der Diaspora.",
        article: `## Pierogi mit Fleisch, der Sonntagsklassiker

Pierogi mit Fleisch sind kein schneller Snack, sondern ein ruhiges Projekt für den Tag, an dem die Familie zusammenkommt. Die Füllung bleibt bewusst einfach: gut gedünstetes Fleisch, Zwiebel und Majoran, ohne Überwürzen, denn der Teig soll den Geschmack tragen.

### Warum diese Variante

In vielen Haushalten ist die Fleischfüllung die Variante für Gäste und den Sonntag, während [Ruskie](/de/rezepte/pierogi/ruskie) alltagstauglicher sind und Kraut mit Pilzen zur Wigilia gehört. Fleisch steht genau dazwischen, sättigend, klar im Geschmack und gut zu teilen.

### Füllung richtig machen

Das Fleisch kommt nie roh in den Teig, sondern wird immer angebraten und abgekühlt. Eine zu nasse Füllung weicht den Teig auf, eine zu trockene schmeckt fade, dann hilft ein Löffel Brühe oder Butter.

### Einkaufen in Deutschland

Gemischtes Hack oder eine Mischung aus Rind und Schwein funktionieren beide gut. Majoran ist im [Polenladen](/de/blog/polenladen-einkaufen) oft aromatischer als im deutschen Gewürzregal, Butter und Zwiebel gibt es überall.

### Weitere Varianten

Wechsle oben zu [Ruskie](/de/rezepte/pierogi/ruskie), [Kraut-Pilze](/de/rezepte/pierogi/kraut-pilze) oder [Heidelbeeren](/de/rezepte/pierogi/jagody). Mehr zur Technik im Guide zu [Pierogi-Teig](/de/blog/pierogi-teig) und zur [Teigmaschine](/de/blog/teigmaschine-pierogi).`,
      },
      pl: {
        title: "Pierogi z mięsem",
        slug: "mieso",
        excerpt:
          "Sycące pierogi z duszonym mięsem mielonym, doprawionym cebulą i majerankiem, bogatsze i bardziej gościnne niż codzienne ruskie i mniej związane z Wigilią niż farsz z kapusty i grzybów.",
        steps: [
          {
            text: "Pokrój cebulę drobno i zeszklij ją na maśle, uważając, żeby się nie zbrązowiła.",
            tip: "Poświęć na to chwilę, naprawdę szklista, miękka cebula robi farsz później dużo pełniejszym w smaku.",
          },
          {
            text: "Przesmaż mięso mielone na rozdrobnione kawałki, dodaj cebulę, sól, pieprz i majeranek, a potem całkowicie ostudź.",
            tip: "Farsz musi być naprawdę zimny, zanim trafi do ciasta, inaczej ciasto pęka przy zaklejaniu brzegów.",
          },
          {
            text: "Zagnieć ciasto na pierogi, odstaw je na chwilę, rozwałkuj tonko i wykrawaj kółka.",
            tip: "Przykryj wykrojone kółka lekko wilgotną ściereczką, żeby brzegi nie wyschły, gdy pracujesz dalej.",
          },
          {
            text: "Nadziewaj kółka, szczelnie sklejaj brzegi między palcami i gotuj pierogi w lekko wrzącej, osolonej wodzie, aż wypłyną na powierzchnię.",
            tip: "Gotuj tylko małe partie naraz, inaczej pierogi się kleją i szwy się otwierają podczas mieszania.",
          },
          {
            text: "Podawaj pierogi gorące ze złotą cebulką na maśle albo z lekkim, jasnym sosem.",
            tip: "Resztki następnego dnia często smakują jeszcze lepiej, usmażone krótko na patelni szew robi się przyjemnie chrupiący.",
          },
        ],
        seoTitle: "Pierogi z mięsem przepis | Alemniam",
        seoDescription:
          "Pierogi z mięsem: farsz mięsny, ciasto i zakupy, dwujęzycznie ze wskazówkami z diaspory.",
        article: `## Pierogi z mięsem, niedzielny klasyk

To nie szybka przekąska, ale spokojny projekt na dzień, kiedy dom się zbiera. Farsz jest prosty: dobrze podsmażone mięso, cebula, majeranek, bez przekombinowania, bo ciasto ma nosić ten smak dalej.

### Dlaczego ten wariant

W wielu domach mięso to wariant gościnny i niedzielny, podczas gdy [ruskie](/pl/rezepte/pierogi/ruskie) są bardziej codzienne, a kapusta z grzybami należy do Wigilii. Mięso jest gdzieś pośrodku, sycące, czytelne w smaku i łatwe do dzielenia.

### Farsz

Mięsa nigdy nie wkłada się surowego, tylko zawsze podsmażone i ostudzone. Zbyt mokry farsz rozmiękcza ciasto, zbyt suchy smakuje blado, wtedy pomaga łyżka bulionu albo masła.

### Zakupy w Niemczech

Mięso mielone mieszane albo wołowo-wieprzowe działa równie dobrze. Majeranek jest w [sklepie polskim](/pl/blog/sklep-polski-zakupy) często lepszy niż z niemieckiego regału z przyprawami.

### Dalej

Przełącz u góry na [ruskie](/pl/rezepte/pierogi/ruskie), [kapustę z grzybami](/pl/rezepte/pierogi/kapusta-grzyby) albo [jagody](/pl/rezepte/pierogi/jagody). Więcej o technice w przewodniku o [cieście na pierogi](/pl/blog/ciasto-na-pierogi) i o [robocie do ciasta](/pl/blog/robot-do-ciasta-pierogi).`,
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
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-pierogi-cabbage/3b6f2648-b78b-4bbe-a2fc-760e5e7aa65e.webp",
    prepMinutes: 55,
    cookMinutes: 25,
    servings: 4,
    familyId: "family-pierogi",
    variantLabel: { de: "Kraut & Pilze", pl: "kapusta i grzyby" },
    variantImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-pierogi-cabbage/3b6f2648-b78b-4bbe-a2fc-760e5e7aa65e.webp",
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
          "Fleischlose Wigilia-Füllung aus Sauerkraut und getrockneten Waldpilzen, würzig und tief im Geschmack, gerade weil sie fleischlos ist die festlichste und zugleich schlichteste aller Pierogi-Füllungen.",
        steps: [
          {
            text: "Weiche die getrockneten Pilze ein, koche sie weich und hacke sie fein, dabei hebst du den Sud für später auf.",
            tip: "Der Sud trägt die Tiefe, die sonst eine Fleischbrühe liefern würde, wirf ihn also auf keinen Fall weg.",
          },
          {
            text: "Lasse das Sauerkraut gut abtropfen, dünste es mit Zwiebel und den Pilzen und schmecke es mit etwas Pilzsud ab.",
            tip: "Ist das Kraut sehr sauer, spüle es vorher kurz mit Wasser ab, damit die Füllung nicht zu scharf wird.",
          },
          {
            text: "Bereite den Pierogi-Teig zu, lasse ihn kurz ruhen und rolle ihn dünn aus.",
            tip: "Bemehle deine Hände beim Ausrollen leicht, so bleibt der Teig geschmeidig und reißt beim Kochen später nicht.",
          },
          {
            text: "Fülle die Kreise, verschließe sie fest und gare die Pierogi in leicht siedendem Salzwasser.",
            tip: "Die Füllung muss gut ausgedrückt sein, denn nur eine trockene Füllung hält den Teig beim Kochen dicht.",
          },
          {
            text: "Serviere die Pierogi mit Öl oder Butterzwiebeln, zur Wigilia oft ganz ohne Speck.",
            tip: "Für viele Familien ist genau dieser Geschmack die Essenz des Heiligabends, ganz ohne Fleisch und trotzdem herzhaft.",
          },
        ],
        seoTitle: "Pierogi mit Kraut und Pilzen | Alemniam",
        seoDescription:
          "Pierogi z kapustą i grzybami: fleischloses Wigilia-Rezept, bilingual mit Einkaufstipps.",
        article: `## Pierogi mit Kraut und Pilzen zur Wigilia

Diese Variante trägt an Heiligabend oft den ganzen Tisch. Sauerkraut, getrocknete Waldpilze und etwas Geduld reichen aus, denn ganz ohne Fleisch entsteht hier trotzdem der tiefste, erdigste Geschmack der ganzen Pierogi-Familie.

### Einkaufen in Deutschland

Kapusta kiszona findest du im [Polenladen](/de/blog/polenladen-einkaufen), getrocknete Steinpilze oder Mischpilze dort oder online. Die Teigzutaten bekommst du überall.

### Technik

Die Füllung muss gut ausgepresst sein, eine zu nasse Füllung lässt den Teig beim Kochen platzen. Den Pilzsud setzt du sparsam zum Abschmecken ein, nicht um die Füllung zu schwemmen.

### Weitere Varianten

Wechsle oben zu [Ruskie](/de/rezepte/pierogi/ruskie), [Fleisch](/de/rezepte/pierogi/fleisch) oder [Heidelbeeren](/de/rezepte/pierogi/jagody). Den ganzen Rahmen liefert der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan), zur Technik hilft der Guide zu [Teig](/de/techniken/teig).`,
      },
      pl: {
        title: "Pierogi z kapustą i grzybami",
        slug: "kapusta-grzyby",
        excerpt:
          "Bezmięsny farsz wigilijny z kapusty kiszonej i suszonych grzybów leśnych, wyrazisty i głęboki w smaku, właśnie dzięki temu, że jest bezmięsny, najbardziej świąteczny i najprostszy ze wszystkich farszów pierogowych.",
        steps: [
          {
            text: "Namocz suszone grzyby, ugotuj je do miękkości i drobno posiekaj, a wywar odłóż na później.",
            tip: "Wywar niesie tę głębię, jaką inaczej dałby bulion mięsny, więc pod żadnym pretekstem go nie wylewaj.",
          },
          {
            text: "Odsącz kapustę, duś ją razem z cebulą i grzybami, a na koniec dopraw odłożonym wywarem.",
            tip: "Jeśli kapusta jest bardzo kwaśna, przepłucz ją krótko wodą, żeby farsz nie wyszedł za ostry.",
          },
          {
            text: "Przygotuj ciasto na pierogi, odstaw je na chwilę i rozwałkuj tonko.",
            tip: "Podczas wałkowania lekko mącz ręce, dzięki temu ciasto zostaje elastyczne i nie pęka później podczas gotowania.",
          },
          {
            text: "Nadziewaj kółka, szczelnie je sklejaj i gotuj pierogi w lekko wrzącej, osolonej wodzie.",
            tip: "Farsz musi być dobrze odciśnięty, bo tylko suchy farsz utrzyma ciasto szczelne podczas gotowania.",
          },
          {
            text: "Podawaj pierogi z olejem albo cebulką na maśle, na Wigilię często całkiem bez skwarków.",
            tip: "Dla wielu rodzin właśnie ten smak jest esencją Wigilii, sycący, choć całkowicie bez mięsa.",
          },
        ],
        seoTitle: "Pierogi z kapustą i grzybami przepis | Alemniam",
        seoDescription:
          "Pierogi wigilijne z kapustą i grzybami, bezmięsny przepis dwujęzyczny z zakupami w Niemczech.",
        article: `## Pierogi z kapustą i grzybami na Wigilię

Ten wariant niesie na Heiligabend często cały stół. Kapusta, suszone grzyby i odrobina cierpliwości wystarczą, bo bez mięsa powstaje tu jednak najgłębszy, najbardziej ziemisty smak w całej rodzinie pierogów.

### Zakupy w Niemczech

Kapustę kiszoną znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy), suszone grzyby tam albo online. Składniki na ciasto kupisz wszędzie.

### Technika

Farsz musi być dobrze odciśnięty, mokry farsz sprawia, że ciasto pęka podczas gotowania. Wywar z grzybów dodajesz oszczędnie do smaku, a nie żeby zalać nim całą masę.

### Dalej

Przełącz u góry na [ruskie](/pl/rezepte/pierogi/ruskie), [mięso](/pl/rezepte/pierogi/mieso) albo [jagody](/pl/rezepte/pierogi/jagody). Cały kontekst daje [menu wigilijne](/pl/blog/menu-wigilijne), do techniki pomaga przewodnik o [cieście](/pl/techniken/ciasto).`,
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
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-placki-cukinia/4d34373d-0681-4667-876b-b237b1f0a48e.webp",
    prepMinutes: 25,
    cookMinutes: 25,
    servings: 4,
    familyId: "family-placki",
    variantLabel: { de: "Mit Zucchini", pl: "z cukinią" },
    variantImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-placki-cukinia/4d34373d-0681-4667-876b-b237b1f0a48e.webp",
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
          "Leichte Sommer-Placki aus geriebener Kartoffel und Zucchini, knusprig gebraten und deutlich luftiger als der klassische Kartoffelpuffer.",
        steps: [
          {
            text: "Reibe Kartoffeln und Zucchini grob und die Zwiebel fein, dann drücke die Masse kräftig aus.",
            tip: "Zucchini gibt deutlich mehr Wasser ab als Kartoffeln, presse die Masse deshalb besonders gründlich aus.",
          },
          {
            text: "Verrühre die ausgedrückte Masse mit Ei, Mehl, Salz und Pfeffer und lasse sie 5 Minuten ruhen.",
            tip: "Diese kurze Ruhezeit bindet die Zutaten besser, dadurch halten die Placki beim Wenden in der Pfanne zuverlässiger zusammen.",
          },
          {
            text: "Backe die Placki in heißem Öl, etwa 3 bis 5 Millimeter hoch, goldbraun aus und wende sie einmal.",
            tip: "Gib nicht zu viele Placki gleichzeitig in die Pfanne, sonst kühlt das Öl ab und sie werden weich statt knusprig.",
          },
          {
            text: "Lasse die Placki kurz auf Küchenpapier abtropfen und serviere sie mit Śmietana oder einem leichten Salat.",
            tip: "So werden sie sommerlich leicht und deutlich weniger schwer als die reine Kartoffelvariante zum Sonntagsessen.",
          },
        ],
        seoTitle: "Placki mit Zucchini Rezept | Alemniam",
        seoDescription:
          "Placki z cukinią: leichte Sommer-Variante, bilingual mit Einkaufstipps für Deutschland.",
        article: `## Placki mit Zucchini, leichter und sommerlicher

Wenn im Garten oder im Supermarktregal die Zucchini sich stapeln, ist diese Mischung der pragmatische Ausweg: etwa zwei Drittel Kartoffel und ein Drittel Zucchini. Die Technik bleibt dabei dieselbe wie beim Klassiker, reiben, ausdrücken, heiß braten.

### Warum extra ausdrücken

Zucchini gibt deutlich mehr Flüssigkeit ab als Kartoffeln. Wer die Masse nur leicht abtropfen lässt, bekommt weiche Puffer statt Knusper, ein Küchentuch oder ein Nussbeutel hilft beim kräftigen Auspressen.

### Einkaufen in Deutschland

Festkochende Kartoffeln und eine mittelgroße Zucchini reichen aus. Śmietana findest du im Polenladen, oder du ersetzt sie durch Schmand, mehr dazu im [Śmietana-Lexikon](/de/blog/smietana-schmand). Eine [Gusseisenpfanne](/de/blog/gusseisenpfanne) hilft bei gleichmäßiger Kruste.

### Geschwister

Wechsle oben zum [Kartoffelklassiker](/de/rezepte/placki/ziemniaczane), zu [Käse](/de/rezepte/placki/mit-kaese) oder zu [Apfel](/de/rezepte/placki/mit-apfel). Zur Technik hilft der [Placki-Guide](/de/blog/placki-guide).`,
      },
      pl: {
        title: "Placki z cukinią",
        slug: "cukinia",
        excerpt:
          "Lekkie letnie placki z tartego ziemniaka i cukinii, smażone na chrupko i wyraźnie lżejsze niż klasyczny placek ziemniaczany.",
        steps: [
          {
            text: "Zetrzyj ziemniaki i cukinię na grubej tarce, a cebulę drobno, potem dobrze odciśnij całą masę.",
            tip: "Cukinia puszcza znacznie więcej wody niż ziemniak, dlatego dociskaj masę wyjątkowo dokładnie.",
          },
          {
            text: "Wymieszaj odciśniętą masę z jajkiem, mąką, solą i pieprzem i odstaw na 5 minut.",
            tip: "Ta krótka przerwa lepiej wiąże składniki, dzięki czemu placki trzymają się razem podczas przewracania na patelni.",
          },
          {
            text: "Smaż placki na gorącym oleju, na wysokość około 3 do 5 milimetrów, na złoto i przewróć je raz.",
            tip: "Nie kładź za dużo placków naraz, inaczej olej się wychładza i placki wychodzą miękkie, a nie chrupiące.",
          },
          {
            text: "Odsącz placki chwilę na papierowym ręczniku i podawaj ze śmietaną albo lekką sałatą.",
            tip: "Wychodzą letnie i wyraźnie lżejsze niż same ziemniaczane, bez ciężkiego niedzielnego talerza.",
          },
        ],
        seoTitle: "Placki z cukinią przepis | Alemniam",
        seoDescription:
          "Placki z cukinią, lekki letni wariant, dwujęzycznie ze wskazówkami zakupowymi w Niemczech.",
        article: `## Placki z cukinią, lżejsze i letnie

Gdy cukinia zalewa ogród albo promocję w sklepie, mieszanka około dwóch trzecich ziemniaka i jednej trzeciej cukinii to rozsądny kierunek. Technika zostaje ta sama, tarcie, odciśnięcie, gorące smażenie.

### Dlaczego mocniej odciśnij

Cukinia puszcza więcej wody niż ziemniak, a lekkie odsączenie daje gumowate placki zamiast chrupkich.

### Zakupy w Niemczech

Ziemniaki raczej mączyste i cukinia średniej wielkości wystarczą. Różnicę między [śmietaną a schmandem](/pl/blog/smietana-czy-schmand) wyjaśnia osobny wpis, a [patelnia żeliwna](/pl/blog/patelnia-zelivna) pomaga przy równym przypieczeniu.

### Dalej

Przełącz u góry na wersję [ziemniaczaną](/pl/rezepte/placki/ziemniaczane), [z serem](/pl/rezepte/placki/ser) albo [z jabłkami](/pl/rezepte/placki/jablka). Więcej w [przewodniku po plackach](/pl/blog/placki-przewodnik).`,
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
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-placki-ser/1014a446-ff43-45e4-9d16-b036ee622e1d.webp",
    prepMinutes: 25,
    cookMinutes: 25,
    servings: 4,
    familyId: "family-placki",
    variantLabel: { de: "Mit Käse", pl: "z serem" },
    variantImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-placki-ser/1014a446-ff43-45e4-9d16-b036ee622e1d.webp",
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
          "Kartoffelpuffer mit Twaróg in der Masse, cremiger und sättigender als der reine Kartoffelklassiker, mit einer Kruste, die trotz des Käses knusprig bleibt.",
        steps: [
          {
            text: "Reibe Kartoffeln und Zwiebel und drücke die Masse gründlich aus.",
            tip: "Je trockener die Kartoffelmasse zu Beginn ist, desto leichter lässt sich später der Twaróg unterheben, ohne dass alles zu weich wird.",
          },
          {
            text: "Zerbrösle den Twaróg und mische ihn mit der Kartoffelmasse, dem Ei, Mehl, Salz und Pfeffer.",
            tip: "Lasse den Twaróg vorher gut abtropfen, denn zu nasser Käse macht die ganze Masse weich und verhindert eine knusprige Kruste.",
          },
          {
            text: "Brate die Placki in heißem Öl goldbraun und wende sie einmal.",
            tip: "Forme sie nicht zu dick, sonst bleibt der Käse innen lauwarm, während außen die Kruste schon zu dunkel wird.",
          },
          {
            text: "Serviere die Placki heiß mit Śmietana oder einem Kräuterdip.",
            tip: "Das ist eine beliebte Alltagsvariante, wenn Twaróg im Kühlschrank steht und ein herzhafter Teller ohne großen Aufwand entstehen soll.",
          },
        ],
        seoTitle: "Placki mit Käse Rezept | Alemniam",
        seoDescription:
          "Placki z serem mit Twaróg, herzhaftes Rezept bilingual mit Einkaufstipps für Deutschland.",
        article: `## Placki mit Käse, herzhaft und cremig

Twaróg in der Masse macht die Placki sättigender und cremiger als der reine Kartoffelklassiker. Der Käse schmilzt leicht mit, während die Kruste knusprig bleibt, solange die Masse insgesamt trocken genug ist.

### Twaróg in Deutschland

Magerquark gut abtropfen zu lassen ist hier der wichtigste Schritt, ausführlich erklärt das der [Twaróg-Guide](/de/blog/twarog-deutschland). Zu feuchter Quark führt fast immer zu weichen, statt knusprigen Puffern.

### Technik

Es gelten dieselben Regeln wie beim Klassiker: eine heiße Pfanne, nicht zu dick geformte Placki und gründlich ausgepresstes Wasser. Mehr dazu im [Gusseisen-Guide](/de/blog/gusseisenpfanne) und im [Placki-Guide](/de/blog/placki-guide).

### Weitere Varianten

Wechsle oben zum [Kartoffelklassiker](/de/rezepte/placki/ziemniaczane), zu [Zucchini](/de/rezepte/placki/cukinia) oder zu [Apfel](/de/rezepte/placki/mit-apfel).`,
      },
      pl: {
        title: "Placki z serem",
        slug: "ser",
        excerpt:
          "Placki z twarogiem w masie, bardziej kremowe i sycące niż sam ziemniaczany klasyk, ze skórką, która zostaje chrupka mimo dodatku serowego.",
        steps: [
          {
            text: "Zetrzyj ziemniaki i cebulę i dobrze odciśnij całą masę.",
            tip: "Im suchsza jest masa ziemniaczana na starcie, tym łatwiej później wmieszać twaróg bez ryzyka, że wszystko zrobi się zbyt miękkie.",
          },
          {
            text: "Rozkrusz twaróg i wymieszaj go z masą ziemniaczaną, jajkiem, mąką, solą i pieprzem.",
            tip: "Twaróg wcześniej dobrze odsącz, bo za mokry ser rozmiękcza całą masę i nie pozwala uzyskać chrupiącej skórki.",
          },
          {
            text: "Smaż placki na gorącym oleju na złoty kolor i przewróć je raz.",
            tip: "Nie formuj ich za grubo, inaczej ser w środku zostanie letni, gdy na zewnątrz skórka już zbyt ciemna.",
          },
          {
            text: "Podawaj placki gorące ze śmietaną albo ziołowym dipem.",
            tip: "To popularna wersja na co dzień, gdy w lodówce jest twaróg, a chcesz szybko zrobić sycący, wytrawny obiad.",
          },
        ],
        seoTitle: "Placki z serem przepis | Alemniam",
        seoDescription:
          "Placki z serem i twarogiem, wytrawny przepis dwujęzyczny ze wskazówkami zakupowymi w Niemczech.",
        article: `## Placki z serem, wytrawnie i kremowo

Twaróg w masie robi placki bardziej sycące niż sam ziemniak. Ser lekko się topi w środku, a skórka zostaje chrupka, o ile masa jest wystarczająco sucha.

### Twaróg w Niemczech

Dobre odsączenie quarku to tutaj najważniejszy krok, opisuje go szerzej [poradnik o twarogu](/pl/blog/twarog-w-niemczech). Za mokry quark prawie zawsze daje miękkie, a nie chrupiące placki.

### Technika

Obowiązują te same zasady co w klasyku: gorąca patelnia, niezbyt grube placki i dobrze odciśnięta woda. Więcej w [poradniku o patelni żeliwnej](/pl/blog/patelnia-zelivna) i w [przewodniku po plackach](/pl/blog/placki-przewodnik).

### Warianty

Przełącz u góry na wersję [ziemniaczaną](/pl/rezepte/placki/ziemniaczane), [z cukinią](/pl/rezepte/placki/cukinia) albo [z jabłkami](/pl/rezepte/placki/jablka).`,
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
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-placki-jablka/518f80c7-b02e-4cc6-ae24-edae9e075431.webp",
    prepMinutes: 25,
    cookMinutes: 20,
    servings: 4,
    familyId: "family-placki",
    variantLabel: { de: "Mit Apfel", pl: "z jabłkami" },
    variantImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-placki-jablka/518f80c7-b02e-4cc6-ae24-edae9e075431.webp",
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
          "Süße Kartoffelpuffer mit geriebenem Apfel, Zimt und Puderzucker, ein Nachmittagsgebäck ohne Hefeteig und damit deutlich schneller als die luftigen Racuchy.",
        steps: [
          {
            text: "Reibe die Kartoffeln und drücke sie aus, schäle die Äpfel, entferne das Kerngehäuse und reibe sie grob.",
            tip: "Wähle säuerliche Sorten wie Boskoop oder Elstar, sie halten beim Braten die Form besser als weiche, süße Äpfel.",
          },
          {
            text: "Vermische Kartoffel und Apfel mit Ei, Mehl, einer Prise Salz und Zimt.",
            tip: "Der Apfel gibt beim Warten weiter Saft ab, drücke die Masse deshalb kurz vor dem Braten noch einmal leicht aus.",
          },
          {
            text: "Brate die Placki in Butter mit etwas Öl bei mittlerer Hitze goldbraun.",
            tip: "Die Mischung aus Butter und Öl schützt vor dem Anbrennen, während das Innere gleichzeitig durchgart.",
          },
          {
            text: "Serviere die Placki warm mit Puderzucker und optional etwas Apfelmus oder Sauerrahm.",
            tip: "Viele Familien essen sie sowohl mit Zucker als auch mit Sauerrahm, das bleibt reine Hausgewohnheit und keine feste Regel.",
          },
        ],
        seoTitle: "Placki mit Apfel Rezept | Alemniam",
        seoDescription:
          "Süße Placki z jabłkami: Rezept bilingual, klar abgegrenzt von den luftigen Racuchy.",
        article: `## Placki mit Apfel, die süße Abzweigung

Geriebener Apfel in der Kartoffelmasse macht aus dem herzhaften Klassiker ein Nachmittagsgebäck oder ein leichtes Sonntagsfrühstück, eher als ein klassisches Dessert. Zimt und Puderzucker gehören dazu, in manchen Familien auch etwas Apfelmus.

### Nicht verwechseln mit Racuchy

[Racuchy](/de/rezepte/racuchy-jablka) sind Hefeteig-Pfannkuchen mit Apfelstücken, bei denen der Teig erst gehen muss. Diese Variante bleibt bei der reinen Placki-Technik, roher, geriebener Kartoffelteig direkt in die Pfanne.

### Tipps

Säuerliche Äpfel wie Boskoop oder Elstar halten beim Braten ihre Form besser als weiche Sorten. Die Mischung aus Butter und Öl verhindert, dass die Kruste zu schnell verbrennt, bevor das Innere durchgegart ist.

### Weitere Varianten

Wechsle oben zu [Kartoffelklassiker](/de/rezepte/placki/ziemniaczane), [Zucchini](/de/rezepte/placki/cukinia) oder [Käse](/de/rezepte/placki/mit-kaese).`,
      },
      pl: {
        title: "Placki z jabłkami",
        slug: "jablka",
        excerpt:
          "Słodkie placki z tartym jabłkiem, cynamonem i cukrem pudrem, popołudniowe danie bez ciasta drożdżowego, a więc wyraźnie szybsze niż puszyste racuchy.",
        steps: [
          {
            text: "Zetrzyj ziemniaki i odciśnij je, obierz jabłka, usuń gniazda nasienne i zetrzyj je grubo.",
            tip: "Wybierz odmiany kwaśniejsze, jak antonówka albo szara reneta, lepiej trzymają formę podczas smażenia niż miękkie, słodkie jabłka.",
          },
          {
            text: "Wymieszaj tartą ziemniak i jabłko z jajkiem, mąką, szczyptą soli i cynamonem.",
            tip: "Jabłko puszcza sok podczas czekania, więc tuż przed smażeniem jeszcze raz lekko odciśnij masę.",
          },
          {
            text: "Smaż placki na maśle z odrobiną oleju na średnim ogniu, aż będą złote.",
            tip: "Ta kombinacja chroni przed przypaleniem, podczas gdy wnętrze placka spokojnie się dopieka.",
          },
          {
            text: "Podawaj placki ciepłe, posypane cukrem pudrem, opcjonalnie z musem jabłkowym albo śmietaną.",
            tip: "Wiele rodzin je je zarówno z cukrem, jak i ze śmietaną, to kwestia tradycji domowej, a nie sztywna reguła.",
          },
        ],
        seoTitle: "Placki z jabłkami przepis | Alemniam",
        seoDescription:
          "Słodkie placki z jabłkami, przepis dwujęzyczny, jasno odróżniony od puszystych racuchów.",
        article: `## Placki z jabłkami, słodka odnoga

Tarte jabłko w masie ziemniaczanej robi z wytrawnego klasyku raczej popołudniowe danie albo lekkie niedzielne śniadanie niż deser w ścisłym sensie. Cynamon i cukier puder należą do zestawu, czasem do tego mus jabłkowy.

### Nie mylić z racuchami

[Racuchy](/pl/rezepte/racuchy-jablka) to drożdżowe placuszki z kawałkami jabłka, w których ciasto musi najpierw wyrosnąć. Ten wariant zostaje przy czystej technice placków, surowy, tarty ziemniak trafia prosto na patelnię.

### Wskazówki

Kwaśne jabłka, na przykład antonówka czy szara reneta, lepiej trzymają formę podczas smażenia niż miękkie odmiany. Masło z olejem chroni skórkę przed przypaleniem, zanim środek się dopiecze.

### Inne warianty

Przełącz u góry na wersję [ziemniaczaną](/pl/rezepte/placki/ziemniaczane), [z cukinią](/pl/rezepte/placki/cukinia) albo [z serem](/pl/rezepte/placki/ser).`,
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
  {
    id: "recipe-nalesniki-mieso",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-nalesniki-mieso/31658e07-9ebc-4f2d-8a29-aa07e5cb188f.webp",
    prepMinutes: 35,
    cookMinutes: 30,
    servings: 4,
    familyId: "family-nalesniki",
    variantLabel: { de: "Fleisch", pl: "z mięsem" },
    variantImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-nalesniki-mieso/31658e07-9ebc-4f2d-8a29-aa07e5cb188f.webp",
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-teig", "technique-freezer"],
    categoryIds: ["category-hauptgerichte"],
    relatedPostIds: [
      "post-nalesniki-guide",
      "post-fleischwolf",
      "post-freezer-meal-prep",
      "post-sonntagsessen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Naleśniki mit Fleisch",
        slug: "fleisch",
        excerpt:
          "Herzhaft gefüllte Naleśniki mit gedünstetem Hack, satt und sonntagstauglich, die deftige Schwester der süßen Twaróg-Naleśniki.",
        steps: [
          {
            text: "Rühre den Naleśniki-Teig an, lass ihn 30 Minuten ruhen und backe daraus dünne Pfannkuchen.",
            tip: "Gieße den Teig dünn in die Pfanne und schwenke sie kurz, so verteilt er sich gleichmäßig bis zum Rand.",
          },
          {
            text: "Brate das Hack mit der Zwiebel an, würze es mit Salz, Pfeffer und Majoran und lass es abkühlen.",
            tip: "Die Füllung muss kalt und nicht zu saftig sein, sonst weicht der Pfannkuchen beim Füllen auf.",
          },
          {
            text: "Fülle die Pfannkuchen, rolle sie fest ein und brate sie in Butter goldbraun an.",
            tip: "Halte die Hitze beim zweiten Braten mittel, damit die Butter nicht verbrennt, bevor die Rolle durchgewärmt ist.",
          },
          {
            text: "Serviere die Rollen mit Dill oder einer klaren Soße.",
            tip: "Reste lassen sich am nächsten Tag gut in der Pfanne aufwärmen und bleiben dabei innen saftig.",
          },
        ],
        seoTitle: "Naleśniki mit Fleisch Rezept | Alemniam",
        seoDescription:
          "Naleśniki z mięsem: herzhafte Füllung, Teig und Braten, bilingual erklärt.",
        article: `## Naleśniki mit Fleisch, herzhaft statt süß

Diese Naleśniki nutzen dieselbe dünne Teigplattform wie die Twaróg-Variante, aber mit gedünstetem Hack gefüllt. Ideal, wenn der Tisch etwas Salziges will und trotzdem die vertraute Naleśniki-Technik bleiben soll.

### Füllung

Das Hack darf nie roh in den Pfannkuchen kommen, es muss vorher angebraten, abgekühlt und gut abgetropft sein, sonst weicht der Teig auf. Majoran verbindet die Füllung geschmacklich mit [Pierogi mit Fleisch](/de/rezepte/pierogi/fleisch).

### Technik

Teig und Wendetechnik erklärt der [Naleśniki-Guide](/de/blog/nalesniki-guide). Für den Vorrat kannst du leere Pfannkuchen einfrieren und die Füllung immer frisch zubereiten.

### Geschwister

Oben wechseln zu [Twaróg](/de/rezepte/nalesniki/twarog), [Spinat](/de/rezepte/nalesniki/szpinak) oder [Marmelade](/de/rezepte/nalesniki/dzem).`,
      },
      pl: {
        title: "Naleśniki z mięsem",
        slug: "mieso",
        excerpt:
          "Wytrawne naleśniki z duszonym mięsem, sycące na niedzielę, słona siostra słodkich naleśników z twarogiem.",
        steps: [
          {
            text: "Zrób ciasto na naleśniki, odstaw je na 30 minut i usmaż z niego cienkie placki.",
            tip: "Wylej ciasto na patelnię cienką warstwą i szybko przechyl patelnię, tak rozprowadzi się równo do samego brzegu.",
          },
          {
            text: "Przesmaż mięso z cebulą, dopraw solą, pieprzem i majerankiem, a potem ostudź.",
            tip: "Farsz musi być zimny i nie za mokry, inaczej placek pod nim rozmięknie podczas nadziewania.",
          },
          {
            text: "Nadziewaj naleśniki, szczelnie zawiń i podsmaż je na maśle na złoto.",
            tip: "Przy drugim smażeniu trzymaj średni ogień, żeby masło nie spaliło się, zanim rolka się dobrze podgrzeje.",
          },
          {
            text: "Podawaj naleśniki z koperkiem albo jasnym sosem.",
            tip: "Resztki dobrze odgrzewają się na patelni następnego dnia i zostają soczyste w środku.",
          },
        ],
        seoTitle: "Naleśniki z mięsem przepis | Alemniam",
        seoDescription:
          "Naleśniki z mięsem: farsz, ciasto i smażenie, wyjaśnione dwujęzycznie.",
        article: `## Naleśniki z mięsem, wytrawnie zamiast słodko

Te naleśniki korzystają z tej samej cienkiej platformy ciasta co wariant z twarogiem, ale są nadziewane duszonym mięsem. Sprawdzają się, gdy stół chce czegoś słonego, a technika naleśników ma zostać ta sama.

### Farsz

Mięsa nigdy nie wkładaj surowego, musi być wcześniej przesmażone, ostudzone i dobrze odcedzone, inaczej ciasto pod nim zmięknie. Majeranek łączy farsz smakowo z [pierogami z mięsem](/pl/rezepte/pierogi/mieso).

### Technika

Ciasto i technikę przewracania opisuje [przewodnik naleśników](/pl/blog/nalesniki-przewodnik). Na zapas możesz mrozić puste placki i zawsze przygotowywać świeży farsz.

### Rodzeństwo

Przełącz na [twaróg](/pl/rezepte/nalesniki/twarog), [szpinak](/pl/rezepte/nalesniki/szpinak) albo [dżem](/pl/rezepte/nalesniki/dzem).`,
      },
    },
    ingredients: [
      {
        id: "nm-1",
        name: { de: "Milch", pl: "Mleko" },
        amount: 400,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "nm-2",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "nm-3",
        name: { de: "Eier", pl: "Jajka" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "nm-4",
        name: { de: "Hackfleisch gemischt", pl: "Mięso mielone" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "other",
      },
      {
        id: "nm-5",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "nm-6",
        name: { de: "Majoran", pl: "Majeranek" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
      {
        id: "nm-7",
        name: { de: "Butter", pl: "Masło" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
    ],
    createdAt: "2026-07-20T14:00:00.000Z",
    updatedAt: "2026-07-20T14:00:00.000Z",
  },
  {
    id: "recipe-nalesniki-szpinak",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-nalesniki-szpinak/580056ff-e3d0-413a-b5e2-27c73286a884.webp",
    prepMinutes: 25,
    cookMinutes: 25,
    servings: 4,
    familyId: "family-nalesniki",
    variantLabel: { de: "Spinat", pl: "ze szpinakiem" },
    variantImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-nalesniki-szpinak/580056ff-e3d0-413a-b5e2-27c73286a884.webp",
    regionIds: [],
    occasionIds: [],
    techniqueIds: ["technique-teig"],
    categoryIds: [
      "category-schnell",
      "category-hauptgerichte",
      "category-vegetarisch",
    ],
    relatedPostIds: [
      "post-nalesniki-guide",
      "post-smietana-schmand",
      "post-ersatzprodukte-de",
      "post-kasza",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Naleśniki mit Spinat",
        slug: "szpinak",
        excerpt:
          "Herzhafte Naleśniki mit Spinat und Käse, leichter als die Fleischvariante und klarer im Geschmack als die süßen Füllungen.",
        steps: [
          {
            text: "Rühre den Teig an, lass ihn kurz ruhen und backe daraus dünne Naleśniki.",
            tip: "Gieße den Teig dünn aus und schwenke die Pfanne sofort, so verteilt er sich gleichmäßig bis zum Rand.",
          },
          {
            text: "Dünste den Spinat mit Knoblauch an, drücke ihn gut aus und mische ihn mit Käse und Salz.",
            tip: "Drücke den Spinat wirklich gründlich aus, denn nasser Spinat weicht den Teig auf und lässt den Käse auslaufen.",
          },
          {
            text: "Fülle die Pfannkuchen, rolle sie ein und brate sie optional noch einmal in Butter goldbraun an.",
            tip: "Lass die Füllung vor dem Rollen etwas abkühlen, damit der Teig an dieser Stelle nicht zu weich wird.",
          },
          {
            text: "Serviere die Rollen mit Śmietana oder Joghurt.",
            tip: "Ein Spritzer Zitrone in der Śmietana passt gut zum erdigen Spinat und macht die Sauce etwas frischer.",
          },
        ],
        seoTitle: "Naleśniki mit Spinat Rezept | Alemniam",
        seoDescription:
          "Naleśniki ze szpinakiem: herzhafte vegetarische Variante, bilingual erklärt.",
        article: `## Naleśniki mit Spinat, herzhaft vegetarisch

Diese Variante liegt zwischen dem süßen Twaróg und der Fleischfüllung: Spinat mit Knoblauch und etwas Käse. Sie ist alltagstauglich und meist auch kinderfreundlich, solange man sie nicht als grünes Gemüsegericht ankündigt.

### Spinat abtropfen

Drücke Tiefkühlspinat gründlich aus, Frischspinat dünstest du kurz an und presst ihn danach ebenso aus. Feuchtigkeit ist hier der größte Feind der Füllung.

### Einkaufen

Du brauchst Spinat, Knoblauch, geriebenen Käse oder salzigen Twaróg. [Śmietana](/de/blog/smietana-schmand) passt gut zum Servieren, die Technik der Pfannkuchen erklärt der [Naleśniki-Guide](/de/blog/nalesniki-guide).

### Geschwister

Oben wechseln zu [Twaróg](/de/rezepte/nalesniki/twarog), [Fleisch](/de/rezepte/nalesniki/fleisch) oder [Marmelade](/de/rezepte/nalesniki/dzem).`,
      },
      pl: {
        title: "Naleśniki ze szpinakiem",
        slug: "szpinak",
        excerpt:
          "Wytrawne naleśniki ze szpinakiem i serem, lżejsze niż wersja z mięsem i wyraźniejsze w smaku niż wersje słodkie.",
        steps: [
          {
            text: "Zrób ciasto, odstaw je na chwilę i usmaż z niego cienkie naleśniki.",
            tip: "Wylej ciasto cienką warstwą i od razu przechyl patelnię, dzięki temu rozprowadzi się równo do brzegu.",
          },
          {
            text: "Zeszklij szpinak z czosnkiem, dobrze go odciśnij i wymieszaj z serem i solą.",
            tip: "Odciśnij szpinak naprawdę dokładnie, bo mokry szpinak rozmiękcza ciasto i wypycha ser podczas smażenia.",
          },
          {
            text: "Nadziewaj naleśniki, zawiń je i opcjonalnie podsmaż jeszcze raz na maśle na złoto.",
            tip: "Daj farszowi trochę ostygnąć przed zwijaniem, żeby ciasto w tym miejscu nie zrobiło się za miękkie.",
          },
          {
            text: "Podawaj naleśniki ze śmietaną albo jogurtem.",
            tip: "Odrobina soku z cytryny w śmietanie dobrze łączy się z ziemistym smakiem szpinaku i odświeża sos.",
          },
        ],
        seoTitle: "Naleśniki ze szpinakiem przepis | Alemniam",
        seoDescription:
          "Naleśniki ze szpinakiem: wytrawny wariant wegetariański, opisany dwujęzycznie.",
        article: `## Naleśniki ze szpinakiem, wytrawnie wegetariańsko

Ten wariant leży między słodkim twarogiem a mięsem: szpinak z czosnkiem i odrobiną sera. Nadaje się na co dzień i zwykle jest przyjazny dzieciom, o ile nie ogłosimy z góry, że to danie z zielonym warzywem.

### Odciśnij szpinak

Mrożony szpinak odciśnij dokładnie, świeży krótko podsmaż, a potem również dobrze wyciśnij. Wilgoć jest tutaj największym wrogiem farszu.

### Zakupy

Potrzebujesz szpinaku, czosnku, tartego sera albo słonego twarogu. [Śmietana](/pl/blog/smietana-schmand) dobrze pasuje do podania, a technikę placków opisuje [przewodnik naleśników](/pl/blog/nalesniki-przewodnik).

### Rodzeństwo

Przełącz na [twaróg](/pl/rezepte/nalesniki/twarog), [mięso](/pl/rezepte/nalesniki/mieso) albo [dżem](/pl/rezepte/nalesniki/dzem).`,
      },
    },
    ingredients: [
      {
        id: "ns-1",
        name: { de: "Milch", pl: "Mleko" },
        amount: 400,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "ns-2",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "ns-3",
        name: { de: "Eier", pl: "Jajka" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "ns-4",
        name: { de: "Spinat (TK oder frisch)", pl: "Szpinak (mrożony lub świeży)" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "ns-5",
        name: { de: "Knoblauch", pl: "Czosnek" },
        amount: 2,
        unit: { de: "Zehen", pl: "ząbki" },
        group: "produce",
      },
      {
        id: "ns-6",
        name: { de: "Geriebener Käse", pl: "Tarty ser" },
        amount: 80,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "ns-7",
        name: { de: "Butter", pl: "Masło" },
        amount: 30,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
    ],
    createdAt: "2026-07-20T14:30:00.000Z",
    updatedAt: "2026-07-20T14:30:00.000Z",
  },
];
