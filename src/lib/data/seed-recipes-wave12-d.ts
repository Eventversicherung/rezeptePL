import type { Recipe } from "@/types/content";

/**
 * Wave 12 Paket D — +2 Rezepte (Alltag Fleisch + Rosół-Nudeln).
 * - recipe-klopsy — Hackfleischkugeln in Dillsoße ≠ Kotlet mielony (panierte Bulette)
 * - recipe-kluski-kladzione — Fallnudeln / dropped noodles ≠ Kluski śląskie / Kopytka
 *
 * Integrator (E): merge into seed aggregator + recipe-articles + related maps.
 * Affiliate: guide-only (no relatedProductIds).
 * NO SEED_VERSION bump here. No commit/push.
 */
export const seedRecipesWave12D: Recipe[] = [
  {
    id: "recipe-klopsy",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-klopsy/216ad15e-a2cc-4ed6-9540-4ed87c4b4570.webp",
    prepMinutes: 25,
    cookMinutes: 35,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-hauptgerichte", "category-schnell"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-panieren",
      "post-smietana-schmand",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Klopsy in Dillsoße",
        slug: "klopsy",
        excerpt:
          "Hackfleischkugeln, auf Polnisch Pulpety, ziehen in milder Dill-Sahnesoße gar, ein Alltags- und Sonntagsteller, klar zu unterscheiden vom panierten Kotlet mielony.",
        steps: [
          {
            text: "Hackfleisch mit ausgedrücktem, eingeweichtem Brötchen, Ei, fein gehackter Zwiebel, Salz, Pfeffer und etwas Majoran verkneten. Rundliche Klopsy formen, etwa walnuss- bis golfballgroß, und 10 Minuten kalt stellen.",
            tip: "Das sind Kugeln für die Soße, keine flachen panierten Buletten wie [Kotlet mielony](/de/rezepte/kotlet-mielony). Alles zur Panade findet sich im [Panieren-Guide](/de/blog/panieren-schabowy).",
          },
          {
            text: "In einem Topf oder einer tiefen Pfanne Butter oder Öl erhitzen. Die Klopsy rundum anbraten, bis sie Farbe angenommen haben, dann herausnehmen.",
            tip: "Zu heiß angebratene Klopsy bekommen außen eine feste Kruste, bevor sie innen durch sind, mittlere Hitze gart sie gleichmäßiger.",
          },
          {
            text: "Im selben Fett die Zwiebel glasig dünsten, mit etwas Mehl bestäuben, mit Brühe ablöschen und 5 Minuten köcheln lassen. Die Hitze reduzieren und temperierte Śmietana oder Schmand einrühren, ohne die Soße sprudelnd kochen zu lassen.",
            tip: "Wie du dich zwischen Śmietana und Schmand entscheidest, erklärt der Guide zu [Śmietana und Schmand](/de/blog/smietana-schmand): Kalte Sahne im heißen Topf flockt schnell aus.",
          },
          {
            text: "Die Klopsy in die Soße geben und zugedeckt 12 bis 15 Minuten bei kleiner Hitze garziehen lassen, bis sie durch sind. Mit reichlich frischem Dill abschmecken.",
          },
          {
            text: "Mit Kartoffeln, Reis oder Brot servieren. Den Dill erst ganz zum Schluss zugeben, so bleibt sein Aroma frisch statt stumpf zu werden.",
            tip: "Der Menüplatz dafür steht im [polnischen Sonntagsessen](/de/blog/sonntagsessen-polnisch), wer lieber die panierte Linie möchte, findet sie bei [Kotlet mielony](/de/rezepte/kotlet-mielony).",
          },
        ],
        seoTitle: "Klopsy Rezept | Pulpety in Dillsoße | Alemniam",
        seoDescription:
          "Klopsy / Pulpety in Dill-Sahnesoße: bilingualer Alltagsteller, klar getrennt vom panierten Kotlet mielony.",
      },
      pl: {
        title: "Klopsy w sosie koperkowym",
        slug: "klopsy",
        excerpt:
          "Kulki z mięsa mielonego, czyli pulpety, duszą się w łagodnym sosie śmietanowo-koperkowym, talerz na co dzień i na niedzielę, wyraźnie inny niż panierowany kotlet mielony.",
        steps: [
          {
            text: "Wymieszaj mięso z namoczoną i odciśniętą bułką, jajkiem, drobno posiekaną cebulą, solą, pieprzem i odrobiną majeranku. Uformuj okrągłe klopsy, od wielkości orzecha włoskiego do piłeczki golfowej, i odstaw na 10 minut do lodówki.",
            tip: "To kulki do sosu, a nie płaskie panierowane kotlety jak [kotlet mielony](/pl/rezepte/kotlet-mielony). Wszystko o panierce znajdziesz w [przewodniku panierowania](/pl/blog/panierowanie-kotlet).",
          },
          {
            text: "Na maśle lub oleju obsmaż klopsy ze wszystkich stron do zrumienienia, potem wyjmij.",
            tip: "Zbyt mocno rozgrzany tłuszcz tworzy twardą skórkę na zewnątrz, zanim środek zdąży się dogotować, umiarkowany ogień gotuje je równomierniej.",
          },
          {
            text: "Na tym samym tłuszczu zeszklij cebulę, oprósz mąką, zalej bulionem i gotuj 5 minut. Zmniejsz ogień i wlej letnią śmietanę, bez gwałtownego gotowania sosu.",
            tip: "Jak wybrać między śmietaną a schmandem, wyjaśnia przewodnik [śmietana czy schmand](/pl/blog/smietana-czy-schmand): zimna śmietana w gorącym garnku szybko się zwarzy.",
          },
          {
            text: "Włóż klopsy do sosu i duś pod przykryciem 12 do 15 minut na małym ogniu, aż będą gotowe. Dopraw obficie świeżym koperkiem.",
          },
          {
            text: "Podawaj z ziemniakami, ryżem lub chlebem. Koperek dodaj dopiero na końcu, dzięki temu jego aromat zostaje świeży, a nie przytępiony.",
            tip: "Miejsce w menu daje [obiad niedzielny](/pl/blog/obiad-niedzielny), kto woli linię panierowaną, znajdzie ją w [kotlecie mielonym](/pl/rezepte/kotlet-mielony).",
          },
        ],
        seoTitle: "Klopsy przepis | Pulpety w sosie koperkowym | Alemniam",
        seoDescription:
          "Klopsy / pulpety w sosie śmietanowo-koperkowym: dwujęzycznie, jasno osobno od panierowanego kotleta mielonego.",
      },
    },
    ingredients: [
      {
        id: "klp-1",
        name: { de: "Hackfleisch gemischt", pl: "Mięso mielone mieszane" },
        amount: 600,
        unit: { de: "g", pl: "g" },
        group: "other",
        storeHintDe: "Gemischtes Hack aus Schwein und Rind vom Metzger oder Supermarkt",
      },
      {
        id: "klp-2",
        name: { de: "Brötchen (alt)", pl: "Bułka (czerstwa)" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "pantry",
      },
      {
        id: "klp-3",
        name: { de: "Milch zum Einweichen", pl: "Mleko do namoczenia" },
        amount: 80,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "klp-4",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "klp-5",
        name: { de: "Zwiebeln", pl: "Cebule" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "klp-6",
        name: { de: "Fleischbrühe", pl: "Bulion mięsny" },
        amount: 400,
        unit: { de: "ml", pl: "ml" },
        group: "pantry",
      },
      {
        id: "klp-7",
        name: {
          de: "Śmietana 18 % oder Schmand",
          pl: "Śmietana 18 % lub schmand",
        },
        amount: 200,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
        storeHintDe: "Polnische Śmietana oder deutscher Schmand, mehr im Guide",
        substitute: {
          de: "Milde Crème fraîche funktioniert auch, das dann ehrlich benennen",
          pl: "Łagodna crème fraîche też się nada, tylko trzeba to uczciwie napisać",
        },
      },
      {
        id: "klp-8",
        name: { de: "Mehl zum Binden", pl: "Mąka do zagęszczenia" },
        amount: 1,
        unit: { de: "EL", pl: "łyżka" },
        group: "pantry",
      },
      {
        id: "klp-9",
        name: { de: "Frischer Dill", pl: "Świeży koperek" },
        amount: 1,
        unit: { de: "Bund", pl: "wiązka" },
        group: "produce",
      },
      {
        id: "klp-10",
        name: { de: "Butter oder Öl", pl: "Masło lub olej" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "klp-11",
        name: {
          de: "Salz, Pfeffer, Majoran",
          pl: "Sól, pieprz, majeranek",
        },
        amount: 1,
        unit: { de: "nach Geschmack", pl: "do smaku" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-21T12:00:00.000Z",
    updatedAt: "2026-07-21T12:00:00.000Z",
  },
  {
    id: "recipe-kluski-kladzione",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-kluski-kladzione/742db49e-1df8-4bde-a161-e7dc59bbc479.webp",
    prepMinutes: 15,
    cookMinutes: 20,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-teig"],
    categoryIds: ["category-hauptgerichte", "category-vegetarisch", "category-schnell"],
    relatedPostIds: [
      "post-rosol-technik",
      "post-polnische-suppen",
      "post-sonntagsessen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Kluski kładzione",
        slug: "kluski-kladzione",
        excerpt:
          "Fallnudeln aus Ei-Mehl-Teig, mit dem Löffel direkt in kochendes Wasser oder klaren Rosół gelegt, ein Alltagsbegleiter zur Brühe, klar zu unterscheiden von Kluski śląskie.",
        steps: [
          {
            text: "Eier mit einer Prise Salz verquirlen, Mehl und etwas Wasser oder Milch einarbeiten, bis ein zäher, löffelbarer Teig entsteht, der nicht knetfest wie Kartoffelteig sein sollte.",
            tip: "Das ist Fallnudel-Teig und keine Mulden-Klöße, [Kluski śląskie](/de/rezepte/kluski-slaskie) bleiben Kartoffel mit Stärke und Fingermulde, ebenso anders sind die gerollten [Kopytka](/de/rezepte/kopytka).",
          },
          {
            text: "Einen großen Topf Salzwasser oder klaren [Rosół](/de/rezepte/rosol) leicht kochen lassen. Den Teig mit zwei Löffeln in unregelmäßige Stücke abstechen und vorsichtig einlegen.",
            tip: "Wie die Brühe klar bleibt und wie das Timing gelingt, erklärt der Guide zur [Rosół-Technik](/de/blog/rosol-technik).",
          },
          {
            text: "Wenn die Kluski aufschwimmen, noch 1 bis 2 Minuten weiterköcheln lassen, dann mit dem Schaumlöffel herausnehmen. Nicht überkochen, sonst werden sie schwammig statt zart.",
          },
          {
            text: "In vorgewärmte Teller mit heißer Brühe geben oder mit Butter und Dill als Beilage servieren.",
            tip: "Einen Überblick über die ganze Suppenfamilie gibt [Polnische Suppen](/de/blog/polnische-suppen), den Menürahmen liefert das [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
          {
            text: "Reste getrennt von der Brühe kühlen, sonst quellen sie nach und werden matschig. Frisch gekocht schmecken die Kluski ohnehin am besten.",
          },
        ],
        seoTitle: "Kluski kładzione Rezept | Fallnudeln | Alemniam",
        seoDescription:
          "Kluski kładzione: polnische Fallnudeln zu Rosół. Bilingual, klar getrennt von Kluski śląskie und Kopytka.",
      },
      pl: {
        title: "Kluski kładzione",
        slug: "kluski-kladzione",
        excerpt:
          "Kluski z ciasta jajeczno-mącznego, wkładane łyżką prosto do wrzątku lub jasnego rosołu, codzienny dodatek do bulionu, wyraźnie inny niż kluski śląskie.",
        steps: [
          {
            text: "Roztrzep jajka ze szczyptą soli, dodaj mąkę i odrobinę wody lub mleka, aż powstanie gęste, łyżkowalne ciasto, które nie powinno być twarde jak ciasto ziemniaczane.",
            tip: "To ciasto na kluski kładzione, a nie knedle z dziurką, [kluski śląskie](/pl/rezepte/kluski-slaskie) zostają przy ziemniaku ze skrobią i wgłębieniem palca, inne są też wałkowane [kopytka](/pl/rezepte/kopytka).",
          },
          {
            text: "Zagotuj osoloną wodę lub jasny [rosół](/pl/rezepte/rosol). Dwoma łyżkami odkładaj nieregularne kawałki ciasta i ostrożnie wkładaj do wrzątku.",
            tip: "Jak zachować klarowność bulionu i dobrać timing, wyjaśnia [jak ugotować rosół](/pl/blog/jak-ugotowac-rosol).",
          },
          {
            text: "Gdy kluski wypłyną na powierzchnię, gotuj jeszcze 1 do 2 minut, potem wyławiaj łyżką cedzakową. Nie rozgotuj ich, inaczej zrobią się gąbczaste zamiast delikatne.",
          },
          {
            text: "Podawaj w gorącym bulionie na talerzu albo z masłem i koperkiem jako dodatek.",
            tip: "Przegląd całej rodziny zup daje [polskie zupy](/pl/blog/polskie-zupy), ramę menu niedzielnego [obiad niedzielny](/pl/blog/obiad-niedzielny).",
          },
          {
            text: "Resztki trzymaj osobno od bulionu, inaczej napęcznieją i zrobią się rozmokłe. Najlepiej smakują świeżo ugotowane.",
          },
        ],
        seoTitle: "Kluski kładzione przepis | Kluski do rosołu | Alemniam",
        seoDescription:
          "Kluski kładzione: polskie kluski do rosołu. Dwujęzycznie, jasno osobno od klusek śląskich i kopytek.",
      },
    },
    ingredients: [
      {
        id: "kkd-1",
        name: { de: "Eier", pl: "Jajka" },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "kkd-2",
        name: { de: "Weizenmehl", pl: "Mąka pszenna" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Type 405 oder 550, der Teig soll löffelbar bleiben",
      },
      {
        id: "kkd-3",
        name: {
          de: "Wasser oder Milch",
          pl: "Woda lub mleko",
        },
        amount: 60,
        unit: { de: "ml", pl: "ml" },
        group: "pantry",
      },
      {
        id: "kkd-4",
        name: { de: "Salz", pl: "Sól" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
      {
        id: "kkd-5",
        name: {
          de: "Rosół oder Salzwasser zum Kochen",
          pl: "Rosół lub woda osolona do gotowania",
        },
        amount: 2,
        unit: { de: "l", pl: "l" },
        group: "pantry",
        storeHintDe: "Idealerweise selbst gekochter Rosół, siehe das Rosół-Rezept und die Technik dazu",
      },
      {
        id: "kkd-6",
        name: {
          de: "Butter und Dill zum Servieren (optional)",
          pl: "Masło i koperek do podania (opcjonalnie)",
        },
        amount: 1,
        unit: { de: "nach Bedarf", pl: "według uznania" },
        group: "dairy",
      },
    ],
    createdAt: "2026-07-21T12:05:00.000Z",
    updatedAt: "2026-07-21T12:05:00.000Z",
  },
];
