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
      "https://images.unsplash.com/photo-1600688685721-852c38f6e8a6?w=1600&q=80",
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
          "Hackfleischkugeln (Pulpety) in milder Dill-Sahnesoße — Alltags- und Sonntagsteller. Klar ≠ panierter Kotlet mielony.",
        steps: [
          {
            text: "Hack mit eingeweichtem Brötchen (ausdrücken), Ei, fein gehackter Zwiebel, Salz, Pfeffer und etwas Majoran verkneten. Rundliche Klopsy formen (etwa walnuss- bis golfballgroß), 10 Minuten kalt stellen.",
            tip: "Das sind Kugeln für die Soße — keine flachen panierten Buletten wie [Kotlet mielony](/de/rezepte/kotlet-mielony). Panade-Technik bleibt im [Panieren-Guide](/de/blog/panieren-schabowy).",
          },
          {
            text: "In einem Topf oder tiefer Pfanne Butter oder Öl erhitzen. Klopsy rundum anbraten, bis sie Farbe haben; herausnehmen.",
          },
          {
            text: "Im selben Fett Zwiebelglasig dünsten, mit etwas Mehl bestäuben, mit Brühe ablöschen und 5 Minuten köcheln. Hitze reduzieren, temperierte [Śmietana](/de/blog/smietana-schmand) oder Schmand einrühren — nicht sprudelnd kochen.",
            tip: "Śmietana vs. Schmand ehrlich wählen: [Śmietana/Schmand](/de/blog/smietana-schmand).",
          },
          {
            text: "Klopsy in die Soße geben, zugedeckt 12–15 Minuten bei kleiner Hitze garziehen, bis sie durch sind. Mit reichlich frischem Dill abschmecken.",
          },
          {
            text: "Mit Kartoffeln, Reis oder Brot servieren. Dill erst zum Schluss — so bleibt das Aroma frisch.",
            tip: "Menüplatz: [polnisches Sonntagsessen](/de/blog/sonntagsessen-polnisch). Wer die panierte Linie will: [Kotlet mielony](/de/rezepte/kotlet-mielony).",
          },
        ],
        seoTitle: "Klopsy Rezept | Pulpety in Dillsoße | Alemniam",
        seoDescription:
          "Klopsy / Pulpety in Dill-Sahnesoße — bilingualer Alltagsteller, klar getrennt vom panierten Kotlet mielony.",
      },
      pl: {
        title: "Klopsy w sosie koperkowym",
        slug: "klopsy",
        excerpt:
          "Kulki z mięsa mielonego (pulpety) w łagodnym sosie śmietanowo-koperkowym — talerz na co dzień i niedzielę. Jasno ≠ panierowany kotlet mielony.",
        steps: [
          {
            text: "Wymieszaj mięso z namoczoną i odciśniętą bułką, jajkiem, drobno posiekaną cebulą, solą, pieprzem i odrobiną majeranku. Uformuj okrągłe klopsy (od orzecha włoskiego do piłeczki golfowej), odstaw 10 minut do lodówki.",
            tip: "To kulki do sosu — nie płaskie panierowane kotlety jak [kotlet mielony](/pl/rezepte/kotlet-mielony). Panierka zostaje w [przewodniku panierowania](/pl/blog/panierowanie-kotlet).",
          },
          {
            text: "Na maśle lub oleju obsmaż klopsy ze wszystkich stron do zrumienienia; wyjmij.",
          },
          {
            text: "Na tym samym tłuszczu zeszklij cebulę, oprósz mąką, zalej bulionem i gotuj 5 minut. Zmniejsz ogień, wlej letnią [śmietanę](/pl/blog/smietana-czy-schmand) — nie gotuj gwałtownie.",
            tip: "Śmietana czy schmand: [przewodnik](/pl/blog/smietana-czy-schmand).",
          },
          {
            text: "Włóż klopsy do sosu, duś pod przykryciem 12–15 minut na małym ogniu, aż będą gotowe. Dopraw obficie świeżym koperkiem.",
          },
          {
            text: "Podawaj z ziemniakami, ryżem lub chlebem. Koper na końcu — aromat zostaje świeży.",
            tip: "Miejsce w menu: [obiad niedzielny](/pl/blog/obiad-niedzielny). Linia panierki: [kotlet mielony](/pl/rezepte/kotlet-mielony).",
          },
        ],
        seoTitle: "Klopsy przepis | Pulpety w sosie koperkowym | Alemniam",
        seoDescription:
          "Klopsy / pulpety w sosie śmietanowo-koperkowym — dwujęzycznie, jasno osobno od panierowanego kotleta mielonego.",
      },
    },
    ingredients: [
      {
        id: "klp-1",
        name: { de: "Hackfleisch gemischt", pl: "Mięso mielone mieszane" },
        amount: 600,
        unit: { de: "g", pl: "g" },
        group: "other",
        storeHintDe: "Hack gemischt / Schwein-Rind — Metzger oder Supermarkt",
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
        storeHintDe: "Polenladen Śmietana oder DE-Schmand — siehe Guide",
        substitute: {
          de: "Crème fraîche mild — ehrlich benennen",
          pl: "Crème fraîche łagodna — nazwać uczciwie",
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
      "https://images.unsplash.com/photo-1708782340699-599c20fa5eec?w=1600&q=80",
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
          "Fallnudeln aus Ei-Mehl-Teig — mit dem Löffel in kochendes Wasser oder klaren Rosół gelegt. Alltagsbegleiter zur Brühe, klar ≠ Kluski śląskie.",
        steps: [
          {
            text: "Eier mit Prise Salz verquirlen, Mehl und etwas Wasser oder Milch einarbeiten, bis ein zäher, löffelbarer Teig entsteht — nicht knetfest wie Kartoffelteig.",
            tip: "Das ist Fallnudeln-Teig, keine Mulden-Klöße: [Kluski śląskie](/de/rezepte/kluski-slaskie) bleiben Kartoffel+Stärke mit Finger-Mulde. Auch ≠ [Kopytka](/de/rezepte/kopytka).",
          },
          {
            text: "Großen Topf Salzwasser oder klaren [Rosół](/de/rezepte/rosol) zum leichten Kochen bringen. Teig mit zwei Löffeln in unregelmäßige Stücke abstechen und vorsichtig einlegen.",
            tip: "Brühe-Klarheit und Timing: [Rosół-Technik](/de/blog/rosol-technik).",
          },
          {
            text: "Wenn die Kluski aufschwimmen, 1–2 Minuten weiter köcheln lassen, dann mit Schaumlöffel herausnehmen. Nicht überkochen — sonst werden sie schwammig.",
          },
          {
            text: "In vorgewärmte Teller mit heißer Brühe geben oder mit Butter und Dill als Beilage servieren.",
            tip: "Suppen-Overview bleibt Überblick: [Polnische Suppen](/de/blog/polnische-suppen). Sonntagsmenü [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
          {
            text: "Reste separat von der Brühe kühlen — sonst quellen sie nach. Frisch gekocht schmecken sie am besten.",
          },
        ],
        seoTitle: "Kluski kładzione Rezept | Fallnudeln | Alemniam",
        seoDescription:
          "Kluski kładzione — polnische Fallnudeln zu Rosół. Bilingual, klar getrennt von Kluski śląskie und Kopytka.",
      },
      pl: {
        title: "Kluski kładzione",
        slug: "kluski-kladzione",
        excerpt:
          "Kluski z ciasta jajeczno-mącznego — łyżką wkładane do wrzątku lub jasnego rosołu. Codzienny dodatek do bulionu, jasno ≠ kluski śląskie.",
        steps: [
          {
            text: "Roztrzep jajka ze szczyptą soli, dodaj mąkę i odrobinę wody lub mleka, aż powstanie gęste, łyżkowalne ciasto — nie twarde jak ciasto ziemniaczane.",
            tip: "To ciasto na kluski kładzione, nie knedle z dziurką: [kluski śląskie](/pl/rezepte/kluski-slaskie) zostają ziemniak+skrobia. Też ≠ [kopytka](/pl/rezepte/kopytka).",
          },
          {
            text: "Zagotuj osoloną wodę lub jasny [rosół](/pl/rezepte/rosol). Dwoma łyżkami odkładaj nieregularne kawałki ciasta i ostrożnie wkładaj do wrzątku.",
            tip: "Klarowność i timing bulionu: [jak ugotować rosół](/pl/blog/jak-ugotowac-rosol).",
          },
          {
            text: "Gdy kluski wypłyną, gotuj jeszcze 1–2 minuty, potem wyławiaj łyżką cedzakową. Nie rozgotuj — staną się gąbczaste.",
          },
          {
            text: "Podawaj w gorącym bulionie na talerzu albo z masłem i koperkiem jako dodatek.",
            tip: "Przegląd zup zostaje Überblick: [polskie zupy](/pl/blog/polskie-zupy). Menu niedzielne [obiad niedzielny](/pl/blog/obiad-niedzielny).",
          },
          {
            text: "Resztki trzymaj osobno od bulionu — inaczej pęcznieją. Najlepsze świeżo ugotowane.",
          },
        ],
        seoTitle: "Kluski kładzione przepis | Kluski do rosołu | Alemniam",
        seoDescription:
          "Kluski kładzione — polskie kluski do rosołu. Dwujęzycznie, jasno osobno od klusek śląskich i kopytek.",
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
        storeHintDe: "Type 405/550 — Teig soll löffelbar bleiben",
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
        storeHintDe: "Idealerweise eigener Rosół — siehe Rosół-Rezept/Technik",
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
