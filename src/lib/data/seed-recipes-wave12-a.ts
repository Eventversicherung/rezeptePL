import type { Recipe } from "@/types/content";

/**
 * Wave 12 Paket A — Suppen-Klassiker (+2).
 * - recipe-zupa-grzybowa — klare Pilzsuppe (getrocknete Pilze; Wigilia-/Herbst-Linie) ≠ Barszcz/Flaki
 * - recipe-grochowka — Grochówka mit Rauchwurst ≠ Fasolka/Kapuśniak
 *
 * Integrator E: merge into seed aggregator + recipe-articles + related maps.
 * Affiliate: guide-only (no relatedProductIds).
 * NO SEED_VERSION bump here. No commit/push.
 */
export const seedRecipesWave12A: Recipe[] = [
  {
    id: "recipe-zupa-grzybowa",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-zupa-grzybowa/4ae13a23-9f9d-4886-a2a9-e487414bd014.webp",
    prepMinutes: 25,
    cookMinutes: 50,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-wigilia", "occasion-niedziela"],
    techniqueIds: ["technique-bulion"],
    categoryIds: ["category-suppen", "category-vegetarisch"],
    relatedPostIds: [
      "post-polnische-suppen",
      "post-wigilia",
      "post-polenladen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Zupa grzybowa",
        slug: "zupa-grzybowa",
        excerpt:
          "Klare polnische Pilzsuppe aus eingeweichten Trockenpilzen, die zur Wigilia und im Herbst auf den Tisch kommt, oft verfeinert mit Nudeln oder Kartoffeln.",
        steps: [
          {
            text: "Getrocknete Steinpilze (Borowiki) in warmem Wasser 20 bis 30 Minuten einweichen. Die Pilze herausnehmen, die Flüssigkeit durch ein feines Sieb oder ein Tuch abseihen und aufbewahren, die Pilze grob schneiden.",
            tip: "Gute Trockenpilze findest du oft im [Polenladen](/de/blog/polenladen-einkaufen), wo die Qualität meist höher ist als in anonymen Supermarktmischungen. Diese Suppe hat mit der roten [Barszcz](/de/rezepte/barszcz-czerwony) aus Roter Bete oder mit der deftigen [Flaki](/de/rezepte/flaki)-Kuttelsuppe nichts zu tun.",
          },
          {
            text: "Zwiebel und Karotte in Butter oder Öl glasig dünsten, die Pilze zugeben und kurz mitrösten. Mit der Pilzflüssigkeit und etwas Wasser oder leichter Gemüsebrühe auffüllen, Lorbeer und Pfeffer dazugeben.",
            tip: "Einen Überblick über die ganze Familie der polnischen Suppen gibt der Beitrag zu [Polnischen Suppen](/de/blog/polnische-suppen), hier bleibt der Fokus auf dieser einen Pilzsuppe.",
          },
          {
            text: "20 bis 30 Minuten sanft köcheln lassen, bis die Pilze weich und der Fond aromatisch sind. Optional kleine Nudeln oder Kartoffelwürfel mitgaren. Mit Salz abschmecken und Säure nur sparsam einsetzen, etwa mit einer Prise Zitrone.",
            tip: "Wer eine saure Gurkensuppe sucht, findet sie bei [Ogórkowa](/de/rezepte/ogorkowa), die schmeckt völlig anders als diese milde Pilzsuppe. Den festlichen Rahmen für den ganzen Abend liefert der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
          },
          {
            text: "Heiß mit Dill oder Petersilie servieren. Für die Wigilia bleibt die Suppe oft klar und ohne Sahne, im Alltag darf ein Löffel temperierte Śmietana hinein, aber nicht kochend.",
            tip: "Warum die Śmietana erst temperiert eingerührt gehört, erklärt der Guide zu [Śmietana und Schmand](/de/blog/smietana-schmand): Kalte Sahne im heißen Topf gerinnt sonst leicht.",
          },
        ],
        seoTitle: "Zupa grzybowa Rezept | Polnische Pilzsuppe | Alemniam",
        seoDescription:
          "Zupa grzybowa: klare Pilzsuppe aus Trockenpilzen. Bilingual, Wigilia-tauglich, klar getrennt von Barszcz und Flaki.",
      },
      pl: {
        title: "Zupa grzybowa",
        slug: "zupa-grzybowa",
        excerpt:
          "Klarowna polska zupa z namoczonych suszonych grzybów, która trafia na stół na Wigilię i jesienią, często z makaronem lub ziemniakami.",
        steps: [
          {
            text: "Suszone borowiki namocz w ciepłej wodzie na 20 do 30 minut. Grzyby wyjmij, płyn przecedź przez gęste sito lub gazę i zachowaj, grzyby pokrój grubo.",
            tip: "Dobre suszone grzyby znajdziesz często w [sklepie polskim](/pl/blog/sklep-polski-zakupy), gdzie jakość bywa wyższa niż w anonimowych mieszankach z marketu. Ta zupa nie ma nic wspólnego z czerwonym [barszczem](/pl/rezepte/barszcz-czerwony) ani z treściwymi [flakami](/pl/rezepte/flaki).",
          },
          {
            text: "Cebulę i marchew zeszklij na maśle lub oleju, dodaj grzyby i krótko podsmaż. Zalej płynem z moczenia i odrobiną wody lub lekkiego bulionu warzywnego, dodaj liść laurowy i pieprz.",
            tip: "Przegląd całej rodziny polskich zup znajdziesz we wpisie [polskie zupy](/pl/blog/polskie-zupy), tutaj zostaje wąski fokus tej jednej zupy grzybowej.",
          },
          {
            text: "Gotuj łagodnie 20 do 30 minut, aż grzyby zmiękną, a wywar nabierze aromatu. Opcjonalnie dogotuj drobny makaron lub kostkę ziemniaka. Dopraw solą, a kwasu użyj oszczędnie, na przykład szczyptą soku z cytryny.",
            tip: "Kto szuka kwaśnej zupy ogórkowej, znajdzie ją w [ogórkowej](/pl/rezepte/ogorkowa), smakuje zupełnie inaczej niż ta łagodna zupa grzybowa. Świąteczną ramę całego wieczoru daje [menu wigilijne](/pl/blog/menu-wigilijne).",
          },
          {
            text: "Podawaj gorącą z koperkiem lub pietruszką. Na Wigilię zupa zostaje zwykle klarowna i bez śmietany, na co dzień można wmieszać łyżkę zahartowanej śmietany, ale nigdy do wrzątku.",
            tip: "Dlaczego śmietanę trzeba najpierw zahartować, wyjaśnia przewodnik [śmietana czy schmand](/pl/blog/smietana-czy-schmand): zimna śmietana wlana do gorącego wywaru łatwo się zwarzy.",
          },
        ],
        seoTitle: "Zupa grzybowa przepis | Zupa z suszonych grzybów | Alemniam",
        seoDescription:
          "Zupa grzybowa: klarowna zupa z suszonych grzybów. Dwujęzycznie, na Wigilię, jasno osobno od barszczu i flaków.",
      },
    },
    ingredients: [
      {
        id: "zg-1",
        name: {
          de: "Getrocknete Steinpilze (Borowiki)",
          pl: "Suszone borowiki",
        },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Polenladen, Qualität zählt hier mehr als Menge",
      },
      {
        id: "zg-2",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "zg-3",
        name: { de: "Karotte", pl: "Marchew" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "zg-4",
        name: { de: "Butter oder Öl", pl: "Masło lub olej" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "dairy",
      },
      {
        id: "zg-5",
        name: {
          de: "Wasser / leichte Gemüsebrühe (zusätzlich zur Pilzflüssigkeit)",
          pl: "Woda / lekki bulion warzywny (oprócz płynu z moczenia)",
        },
        amount: 1.2,
        unit: { de: "l", pl: "l" },
        group: "pantry",
      },
      {
        id: "zg-6",
        name: {
          de: "Kleine Suppennudeln oder Kartoffelwürfel (optional)",
          pl: "Drobny makaron lub kostka ziemniaka (opcjonalnie)",
        },
        amount: 80,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        substitute: {
          de: "Ganz ohne Einlage bleibt es ein klarer Wigilia-Teller",
          pl: "Zupełnie bez dodatku zostaje klarowny talerz wigilijny",
        },
      },
      {
        id: "zg-7",
        name: {
          de: "Lorbeer, Salz, Pfeffer, Dill",
          pl: "Liść laurowy, sól, pieprz, koperek",
        },
        amount: 1,
        unit: { de: "nach Geschmack", pl: "do smaku" },
        group: "spices",
      },
      {
        id: "zg-8",
        name: {
          de: "Śmietana zum Servieren (optional, Alltag)",
          pl: "Śmietana do podania (opcjonalnie, na co dzień)",
        },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "dairy",
        storeHintDe: "Erst temperieren, dann einrühren, nie kochend",
      },
    ],
    createdAt: "2026-07-21T10:00:00.000Z",
    updatedAt: "2026-07-21T10:00:00.000Z",
  },
  {
    id: "recipe-grochowka",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-grochowka/38e1c0c8-e5ce-42a8-b058-2d614bd19856.webp",
    prepMinutes: 20,
    cookMinutes: 90,
    servings: 6,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-bulion"],
    categoryIds: ["category-suppen"],
    relatedPostIds: [
      "post-polnische-suppen",
      "post-kielbasa-arten",
      "post-sonntagsessen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Grochówka",
        slug: "grochowka",
        excerpt:
          "Klassische polnische Erbsensuppe aus gelben Trockenerbsen mit Rauchwurst und Kartoffeln, deftig und gut zum Vorkochen für mehrere Tage.",
        steps: [
          {
            text: "Gelbe Trockenerbsen (groch) über Nacht einweichen oder nach Packungsangabe vorbereiten, dann abgießen. Mit frischem Wasser aufsetzen, Zwiebel, Karotte, Lorbeer und Majoran dazugeben und ruhig köcheln lassen, bis die Erbsen weich fallen.",
            tip: "Das sind Erbsen und keine Bohnen, das Bohnengericht [Fasolka po bretonsku](/de/rezepte/fasolka-po-bretonsku) bleibt ein eigenes Rezept. Einen Überblick über die Suppenfamilie gibt [Polnische Suppen](/de/blog/polnische-suppen).",
          },
          {
            text: "Kartoffelwürfel zugeben und weich kochen. Parallel geräucherte Kiełbasa oder Speckwürfel anbraten, dann Wurstscheiben und einen Teil des Bratfetts in den Topf geben.",
            tip: "Welche Wurst am besten passt, zeigen die [Kiełbasa-Arten](/de/blog/kielbasa-arten), eingekauft meist im [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "Optional einen Teil der Erbsen mit dem Pürierstab anstoßen, dick, aber nicht wie Babybrei. Mit Salz, Pfeffer und Majoran abschmecken und Säure nur sparsam einsetzen, das ist keine Sauerkraut-Linie.",
            tip: "Wer eine Sauerkrautsuppe sucht, findet sie bei [Kapuśniak](/de/rezepte/kapusniak). Als Menüplatz passt das [polnische Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
          {
            text: "Heiß mit frischem Dill oder Majoran servieren, dazu Brot. Reste halten sich gut und schmecken am zweiten Tag oft noch runder, portionsweises Einfrieren ist möglich.",
            tip: "Fehlt geräucherte Wurst, hilft ein ehrlicher Ersatz laut den [Ersatzprodukten DE](/de/blog/ersatzprodukte-de) weiter, der Fokus bleibt trotzdem diese Grochówka.",
          },
        ],
        seoTitle: "Grochówka Rezept | Polnische Erbsensuppe | Alemniam",
        seoDescription:
          "Grochówka: Erbsensuppe mit Rauchwurst und Kartoffeln. Bilingual, Diaspora-Einkauf in DE, klar getrennt von Fasolka und Kapuśniak.",
      },
      pl: {
        title: "Grochówka",
        slug: "grochowka",
        excerpt:
          "Klasyczna polska zupa z żółtego grochu z wędzoną kiełbasą i ziemniakami, treściwa i dobra na zapas na kilka dni.",
        steps: [
          {
            text: "Groch namocz na noc albo według instrukcji na opakowaniu, potem odlej wodę. Zalej świeżą wodą, dodaj cebulę, marchew, liść laurowy i majeranek, gotuj spokojnie, aż groch zmięknie.",
            tip: "To groch, nie fasola, danie z fasoli [fasolka po bretońsku](/pl/rezepte/fasolka-po-bretonsku) zostaje osobnym przepisem. Przegląd rodziny zup znajdziesz w [polskich zupach](/pl/blog/polskie-zupy).",
          },
          {
            text: "Dodaj kostkę ziemniaka i dogotuj do miękkości. Równolegle podsmaż wędzoną kiełbasę lub słoninę, potem dodaj plastry i część tłuszczu do garnka.",
            tip: "Która kiełbasa pasuje najlepiej, pokazują [rodzaje kiełbasy](/pl/blog/rodzaje-kielbasy), kupione najczęściej w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Opcjonalnie zblenduj część grochu, ma być gęsto, ale nie jak papka dla niemowląt. Dopraw solą, pieprzem i majerankiem, kwasu użyj oszczędnie, to nie jest zupa na bazie kapusty kiszonej.",
            tip: "Kto szuka zupy z kapustą kiszoną, znajdzie ją w [kapuśniaku](/pl/rezepte/kapusniak). Miejsce w menu daje [obiad niedzielny](/pl/blog/obiad-niedzielny).",
          },
          {
            text: "Podawaj gorącą z koperkiem lub majerankiem, chleb obok. Resztki dobrze się trzymają i często smakują lepiej następnego dnia, można je też zamrozić w porcjach.",
            tip: "Brak wędzonej kiełbasy zastąpią uczciwie dobrane [zamienniki składników](/pl/blog/zamienniki-skladnikow), fokus zostaje jednak przy tej grochówce.",
          },
        ],
        seoTitle: "Grochówka przepis | Zupa grochowa | Alemniam",
        seoDescription:
          "Grochówka: zupa z grochu z kiełbasą i ziemniakami. Dwujęzycznie, zakupy w Niemczech, jasno osobno od fasolki i kapuśniaku.",
      },
    },
    ingredients: [
      {
        id: "gh-1",
        name: {
          de: "Gelbe Trockenerbsen (groch)",
          pl: "Groch żółty suszony",
        },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Polenladen oder Supermarkt-Hülsenfrüchte",
      },
      {
        id: "gh-2",
        name: {
          de: "Geräucherte Kiełbasa oder Speck",
          pl: "Wędzona kiełbasa lub słonina",
        },
        amount: 250,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen, mehr dazu im Beitrag zu Kiełbasa-Arten",
        substitute: {
          de: "Mild geräucherter Schinken funktioniert auch, das dann aber ehrlich benennen",
          pl: "Łagodna wędzonka też się nada, tylko trzeba to uczciwie napisać",
        },
      },
      {
        id: "gh-3",
        name: { de: "Kartoffeln", pl: "Ziemniaki" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "gh-4",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "gh-5",
        name: { de: "Karotte", pl: "Marchew" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "gh-6",
        name: {
          de: "Wasser oder leichte Brühe",
          pl: "Woda lub lekki wywar",
        },
        amount: 2,
        unit: { de: "l", pl: "l" },
        group: "pantry",
      },
      {
        id: "gh-7",
        name: {
          de: "Majoran, Lorbeer, Salz, Pfeffer, Dill",
          pl: "Majeranek, liść laurowy, sól, pieprz, koperek",
        },
        amount: 1,
        unit: { de: "nach Geschmack", pl: "do smaku" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-21T10:00:00.000Z",
    updatedAt: "2026-07-21T10:00:00.000Z",
  },
];
