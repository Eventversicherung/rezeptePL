import type { Recipe } from "@/types/content";

/**
 * Wave 14 Paket C — Composed Placki + Street.
 * - recipe-placek-po-wegiersku — Kartoffelpuffer + Gulasch-Topping (+ optional Käse)
 *   Primary = composed dish; Placki / Gulasz bleiben Einzeln-Owner
 * - recipe-zapiekanka — Baguette + Pilze/Schinken + Käse überbacken (klassische Linie)
 *
 * Integrator E: merge into seed aggregator + recipe-articles + related maps.
 * Affiliate: guide-only (no relatedProductIds).
 * NO SEED_VERSION bump here. No commit/push. Keine 5. Placki-Family-Variante.
 */
export const seedRecipesWave14C: Recipe[] = [
  {
    id: "recipe-placek-po-wegiersku",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-placek-po-wegiersku/ddab9a77-5412-49dc-9767-553605893db3.webp",
    prepMinutes: 35,
    cookMinutes: 90,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-schmoren", "technique-panieren"],
    categoryIds: ["category-hauptgerichte"],
    relatedPostIds: [
      "post-placki-guide",
      "post-sonntagsessen",
      "post-dutch-oven",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Placek po węgiersku",
        slug: "placek-po-wegiersku",
        excerpt:
          "Knusprige Kartoffelpuffer mit würzigem Schweinegulasch obenauf und optional geschmolzenem Käse, ein zusammengesetzter Teller, bei dem das Zusammenspiel zählt, nicht die Puffer oder das Gulasch allein.",
        steps: [
          {
            text: "Gulasch vorbereiten: Schweinenacken würfeln, anbraten, Zwiebel und Paprika dünsten, Tomatenmark und Paprikapulver kurz rösten, mit Brühe ablöschen und 60–90 Min zugedeckt schmoren, bis das Fleisch zart ist.",
            tip: "Das Schmorfleisch für sich allein bleibt bei [Gulasz wieprzowy](/de/rezepte/gulasz-wieprzowy), hier dient es nur als Topping für den Puffer-Teller. Einen passenden Schmortopf findest du in der [Dutch-Oven-Kaufberatung](/de/blog/dutch-oven-kaufberatung).",
          },
          {
            text: "Währenddessen Placki-Masse: Kartoffeln und Zwiebel reiben, kräftig ausdrücken, mit Ei, Mehl, Salz und Pfeffer verrühren.",
            tip: "Technik und Abtropfen erklärt ausführlich der [Placki-Guide](/de/blog/placki-guide). Nackte Puffer ohne Soße bleiben [Placki ziemniaczane](/de/rezepte/placki/ziemniaczane), ein eigenes Gericht.",
          },
          {
            text: "In heißem Öl (ca. 3–5 mm) mittelgroße Puffer goldbraun ausbacken. Warm halten im Ofen bei 90 °C, dabei einzeln auf dem Blech verteilen, nicht stapeln, sonst werden sie weich.",
            tip: "Gestapelte Puffer verlieren durch den eigenen Dampf schnell die Kruste, deshalb lohnt sich ein zweites Blech, wenn du größere Mengen warm halten willst.",
          },
          {
            text: "Auf dem Teller anrichten: zwei bis drei heiße Placki, großzügig Gulasch obenauf. Optional geriebenen Gouda oder Edamer darüberstreuen und kurz unter dem Grill schmelzen lassen.",
            tip: "Der Käse ist eine Hausvariante und kein Pflichtbestandteil, das darf ruhig ehrlich gesagt werden. Als Menüplatz passt der Teller gut ins [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
          {
            text: "Sofort servieren, sonst verlieren die Puffer unter der Soße schnell ihre Kruste. Optional einen Löffel Śmietana an den Tellerrand geben.",
            tip: "Wer Gäste erwartet, kocht Gulasch und Puffer bewusst getrennt und bringt beides erst auf dem Teller zusammen, so bleiben die Puffer bis zuletzt knusprig.",
          },
        ],
        seoTitle:
          "Placek po węgiersku Rezept | Ungarischer Kartoffelpuffer | Alemniam",
        seoDescription:
          "Placek po węgiersku: Kartoffelpuffer mit Gulasch-Topping und optional Käse. Ein zusammengesetzter Teller, bilingual, klar unterschieden von Placki allein und von Gulasz allein.",
      },
      pl: {
        title: "Placek po węgiersku",
        slug: "placek-po-wegiersku",
        excerpt:
          "Chrupiące placki ziemniaczane z aromatycznym gulaszem wieprzowym na wierzchu i opcjonalnym serem, złożony talerz, w którym liczy się całość, a nie same placki czy sam gulasz.",
        steps: [
          {
            text: "Przygotuj gulasz: kark wieprzowy w kostkę, obsmaż, zeszklij cebulę i paprykę, podsmaż koncentrat i paprykę w proszku, zalej bulionem i duś 60–90 min pod przykryciem, aż mięso będzie miękkie.",
            tip: "Sam gulasz zostaje przy [gulaszu wieprzowym](/pl/rezepte/gulasz-wieprzowy), tu służy tylko jako topping na placki. Odpowiedni garnek do duszenia opisuje przewodnik o [dutch oven](/pl/blog/garnek-do-duszenia).",
          },
          {
            text: "Równolegle masa na placki: zetrzyj ziemniaki i cebulę, mocno odciśnij, wymieszaj z jajkiem, mąką, solą i pieprzem.",
            tip: "Technikę i odsączanie opisuje szczegółowo [przewodnik po plackach](/pl/blog/placki-przewodnik). Gołe placki bez sosu to osobne danie, [placki ziemniaczane](/pl/rezepte/placki/ziemniaczane).",
          },
          {
            text: "Smaż średnie placki na złoto na gorącym oleju (ok. 3–5 mm). Trzymaj ciepłe w piekarniku w 90°C, układając je osobno na blasze, nie w stos, bo inaczej zmiękną.",
            tip: "Placki ułożone jeden na drugim tracą chrupkość pod wpływem własnej pary, dlatego przy większej ilości warto użyć dwóch blach.",
          },
          {
            text: "Na talerzu ułóż dwa do trzech gorących placków, hojnie polej gulaszem na wierzchu. Opcjonalnie posyp startą goudą lub edamem i wstaw na chwilę pod grill, aż ser się roztopi.",
            tip: "Ser to wariant domowy, a nie obowiązek, warto to uczciwie napisać. Jako danie na talerzu dobrze pasuje do [obiadu niedzielnego](/pl/blog/obiad-niedzielny).",
          },
          {
            text: "Podawaj od razu, inaczej placki miękną pod sosem. Opcjonalnie dodaj łyżkę śmietany z boku.",
            tip: "Gdy szykujesz danie dla gości, gotuj oba elementy osobno i połącz je dopiero na talerzu, dzięki temu placki zostają chrupiące aż do podania.",
          },
        ],
        seoTitle:
          "Placek po węgiersku przepis | Placki z gulaszem | Alemniam",
        seoDescription:
          "Placek po węgiersku: placki z gulaszem na wierzchu i opcjonalnym serem. Talerz złożony, dwujęzycznie, jasno różny od samych placków i samego gulaszu.",
      },
    },
    ingredients: [
      {
        id: "ppw-1",
        name: { de: "Schweinenacken", pl: "Kark wieprzowy" },
        amount: 700,
        unit: { de: "g", pl: "g" },
        group: "other",
      },
      {
        id: "ppw-2",
        name: { de: "Kartoffeln (für Placki)", pl: "Ziemniaki (na placki)" },
        amount: 800,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "ppw-3",
        name: { de: "Zwiebeln", pl: "Cebule" },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "ppw-4",
        name: { de: "Paprika (frisch)", pl: "Papryka (świeża)" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "ppw-5",
        name: { de: "Tomatenmark", pl: "Koncentrat pomidorowy" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "ppw-6",
        name: {
          de: "Paprikapulver edelsüß",
          pl: "Papryka słodka w proszku",
        },
        amount: 2,
        unit: { de: "TL", pl: "łyżeczki" },
        group: "spices",
        storeHintDe: "Oft aromatischer im Polenladen",
      },
      {
        id: "ppw-7",
        name: { de: "Fleischbrühe", pl: "Bulion mięsny" },
        amount: 400,
        unit: { de: "ml", pl: "ml" },
        group: "pantry",
      },
      {
        id: "ppw-8",
        name: { de: "Eier (Placki)", pl: "Jajka (placki)" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "ppw-9",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 4,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "ppw-10",
        name: {
          de: "Gouda oder Edamer (optional)",
          pl: "Gouda lub edam (opcjonalnie)",
        },
        amount: 100,
        unit: { de: "g", pl: "g" },
        group: "dairy",
        substitute: {
          de: "Weglassen, dann im Rezept klar als Variante ohne Käse benennen",
          pl: "Pominąć, wtedy jasno napisać, że danie jest bez sera",
        },
      },
      {
        id: "ppw-11",
        name: {
          de: "Öl zum Braten, Salz, Pfeffer",
          pl: "Olej do smażenia, sól, pieprz",
        },
        amount: 1,
        unit: { de: "nach Bedarf", pl: "według potrzeby" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-21T12:00:00.000Z",
    updatedAt: "2026-07-21T12:00:00.000Z",
  },
  {
    id: "recipe-zapiekanka",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-zapiekanka/136f0761-9145-4ca4-8820-16592a163737.webp",
    prepMinutes: 20,
    cookMinutes: 15,
    servings: 4,
    regionIds: [],
    occasionIds: [],
    techniqueIds: [],
    categoryIds: ["category-schnell", "category-hauptgerichte"],
    relatedPostIds: [
      "post-polenladen",
      "post-ersatzprodukte-de",
      "post-sonntagsessen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Zapiekanka",
        slug: "zapiekanka",
        excerpt:
          "Zapiekanka ist Polens bekanntestes Straßen-Baguette, längs aufgeschnitten und überbacken mit ausgedämpften Pilzen, Schinken und reichlich Käse, klassisch serviert mit einem Klecks Ketchup.",
        steps: [
          {
            text: "Champignons fein würfeln und die Zwiebel klein schneiden. Beides in Butter oder Öl anbraten, bis die austretende Flüssigkeit vollständig verdampft ist, dann mit Salz und Pfeffer abschmecken.",
            tip: "Im [Polenladen](/de/blog/polenladen-einkaufen) bekommst du Champignons und Schinken oft frischer und günstiger als im Supermarkt. Fehlt eine bestimmte Käsesorte, hilft der Beitrag zu [Ersatzprodukten](/de/blog/ersatzprodukte-de) weiter.",
          },
          {
            text: "Das Baguette längs halbieren oder in Portionen teilen und die Schnittflächen im auf 200 Grad Ober- und Unterhitze vorgeheizten Ofen kurz andrösten.",
            tip: "Die Form macht den Unterschied: Zapiekanka bleibt ein flaches Baguette, während [Krokiety](/de/rezepte/krokiety) gerollt und paniert sind und [Naleśniki](/de/rezepte/nalesniki/twarog) aus dünnem Pfannkuchenteig bestehen.",
          },
          {
            text: "Die Pilzmasse gleichmäßig auf beide Baguettehälften verteilen, die Schinkenwürfel darüberstreuen und zum Schluss großzügig geriebenen Käse aufsetzen.",
            tip: "Gouda und Edamer schmelzen zuverlässig und bräunen schön, Mozzarella zieht dafür lange Fäden. Wer mag, mischt beide Sorten.",
          },
          {
            text: "Auf dem Blech 10 bis 12 Minuten backen, bis der Käse vollständig geschmolzen ist und die Ränder des Baguettes knusprig werden. Nicht zu lange backen, sonst trocknet das Brot aus.",
            tip: "Der schnelle Alltagsgriff passt gut neben ein ausführliches [Sonntagsessen](/de/blog/sonntagsessen-polnisch), wenn nach dem Kochmarathon wenig Zeit bleibt.",
          },
          {
            text: "Heiß servieren, klassisch mit einem Streifen Ketchup und nach Belieben etwas Schnittlauch. Am besten sofort essen, denn der Käse wird beim Abkühlen wieder fest.",
            tip: "Zapiekanka hat mit [Pierogi](/de/rezepte/pierogi/ruskie) nichts zu tun, denn der Teig ist völlig anders. Reste am nächsten Tag kurz im Ofen aufbacken, in der Mikrowelle wird das Brot gummiartig.",
          },
        ],
        seoTitle:
          "Zapiekanka Rezept | Polnisches Baguette überbacken | Alemniam",
        seoDescription:
          "Zapiekanka Rezept: Baguette mit Pilzen, Schinken und Käse überbacken. Klassischer polnischer Straßenfood-Snack, klar unterschieden von Krokiety und Naleśniki.",
      },
      pl: {
        title: "Zapiekanka",
        slug: "zapiekanka",
        excerpt:
          "Zapiekanka to najbardziej znana polska bagietka uliczna, przekrojona wzdłuż i zapieczona z odparowanymi pieczarkami, szynką i dużą ilością sera, podawana klasycznie z odrobiną keczupu.",
        steps: [
          {
            text: "Pieczarki drobno pokrój, a cebulę posiekaj. Podsmaż obie rzeczy na maśle lub oleju, aż odparuje cała woda, i dopraw solą oraz pieprzem.",
            tip: "W [sklepie polskim](/pl/blog/sklep-polski-zakupy) pieczarki i szynkę często kupisz świeższe i taniej niż w markecie. Jeśli brakuje konkretnej odmiany sera, sprawdź [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
          },
          {
            text: "Bagietkę przekrój wzdłuż na pół albo podziel na porcje i lekko podpiecz powierzchnię w piekarniku nagrzanym do 200 stopni, góra i dół.",
            tip: "Forma robi różnicę: zapiekanka to zawsze płaska bagietka, podczas gdy [krokiety](/pl/rezepte/krokiety) są zwijane i panierowane, a [naleśniki](/pl/rezepte/nalesniki/twarog) robi się z cienkiego ciasta na patelni.",
          },
          {
            text: "Rozłóż równo masę pieczarkową na obu połówkach, dodaj kostki szynki i na końcu hojnie posyp startym serem.",
            tip: "Gouda i edam topią się pewnie i ładnie brązowieją, mozzarella ciągnie się długimi niciami. Możesz też połączyć obie odmiany.",
          },
          {
            text: "Piecz na blasze od 10 do 12 minut, aż ser całkowicie się roztopi, a brzegi bagietki zrobią się chrupiące. Nie piecz dłużej, bo chleb wyschnie.",
            tip: "To szybkie rozwiązanie na dzień powszedni, przydatne również obok pełnego [obiadu niedzielnego](/pl/blog/obiad-niedzielny), kiedy po dłuższym gotowaniu zostaje mało czasu.",
          },
          {
            text: "Podawaj na gorąco, klasycznie z paskiem keczupu i opcjonalnie szczypiorkiem. Jedz najlepiej od razu, bo ser podczas stygnięcia znowu twardnieje.",
            tip: "Zapiekanki nie łączy się z [pierogami](/pl/rezepte/pierogi/ruskie), bo ciasto jest zupełnie inne. Resztki odgrzej krótko w piekarniku, w mikrofalówce chleb robi się gumowaty.",
          },
        ],
        seoTitle:
          "Zapiekanka przepis | Polska bagietka zapiekana | Alemniam",
        seoDescription:
          "Przepis na zapiekankę: bagietka z pieczarkami, szynką i serem. Klasyczny polski street food, inny niż krokiety i naleśniki.",
      },
    },
    ingredients: [
      {
        id: "zap-1",
        name: { de: "Baguette", pl: "Bagietka" },
        amount: 1,
        unit: { de: "Stück (ca. 300 g)", pl: "szt. (ok. 300 g)" },
        group: "pantry",
        substitute: {
          de: "Ciabatta oder ein anderes längliches Weißbrot funktioniert auch, dann aber die abweichende Form ehrlich benennen",
          pl: "Ciabatta lub inny długi biały chleb też się nadaje, ale wtedy uczciwie napisać o innej formie",
        },
      },
      {
        id: "zap-2",
        name: { de: "Champignons", pl: "Pieczarki" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "zap-3",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "zap-4",
        name: { de: "Schinken (gekocht)", pl: "Szynka gotowana" },
        amount: 150,
        unit: { de: "g", pl: "g" },
        group: "other",
        storeHintDe: "Polenladen / Kühltruhe",
        substitute: {
          de: "Für die vegetarische Version einfach weglassen und im Titel klar „nur Pilze“ schreiben",
          pl: "W wersji wegetariańskiej po prostu pominąć i w tytule jasno napisać „tylko pieczarki”",
        },
      },
      {
        id: "zap-5",
        name: {
          de: "Gouda, Edamer oder Mozzarella",
          pl: "Gouda, edam lub mozzarella",
        },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "zap-6",
        name: { de: "Butter oder Öl", pl: "Masło lub olej" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "dairy",
      },
      {
        id: "zap-7",
        name: {
          de: "Ketchup zum Servieren",
          pl: "Keczup do podania",
        },
        amount: 4,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "zap-8",
        name: {
          de: "Salz, Pfeffer, optional Schnittlauch",
          pl: "Sól, pieprz, opcjonalnie szczypiorek",
        },
        amount: 1,
        unit: { de: "nach Geschmack", pl: "do smaku" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-21T12:00:00.000Z",
    updatedAt: "2026-07-21T12:00:00.000Z",
  },
];
