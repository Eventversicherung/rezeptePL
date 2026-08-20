import type { Recipe } from "@/types/content";

/**
 * Wave 12 Paket B — Makaron z makiem + Szarlotka.
 * Isolated for Integrator E: do not import into seed.ts until merge.
 * Affiliate: guide-only (no relatedProductIds / no catalog recipeIds).
 * No new blog pillar.
 * Ownership: Makaron z makiem ≠ Makowiec (Rolle) ≠ Makaron z serem (Twaróg).
 * Szarlotka ≠ Racuchy ≠ Piernik ≠ Sernik ≠ Babka.
 * NO SEED_VERSION bump here. No commit/push.
 */
export const seedRecipesWave12B: Recipe[] = [
  {
    id: "recipe-makaron-z-makiem",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-makaron-z-makiem/8433ad1c-f5da-46b5-841e-6ae4a4a27692.webp",
    prepMinutes: 15,
    cookMinutes: 20,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-wigilia"],
    techniqueIds: [],
    categoryIds: [
      "category-suess",
      "category-schnell",
      "category-vegetarisch",
      "category-hauptgerichte",
    ],
    relatedPostIds: [
      "post-wigilia",
      "post-makowiec-technik",
      "post-ersatzprodukte-de",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Makaron z makiem",
        slug: "makaron-z-makiem",
        excerpt:
          "Gekochte Nudeln mit Mohn, Butter und Zucker, eine klassische süße Wigilia-Speise, die sich klar von der Makowiec-Rolle und vom Makaron z serem unterscheidet.",
        steps: [
          {
            text: "Kurze Eiernudeln oder Bandnudeln in reichlich Salzwasser al dente kochen, abgießen und etwas Nudelwasser zurückhalten.",
            tip: "Das ist Pasta aus dem Topf, keine Hefe-Mohnrolle wie [Makowiec](/de/rezepte/makowiec). Den Menürahmen dafür liefert der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
          },
          {
            text: "Mohn (blau, möglichst gemahlen) mit heißer Milch oder Wasser kurz aufquellen lassen, abtropfen, dann mit Zucker, geschmolzener Butter und optional Honig, Rosinen und Zitronenschale zu einer streichfähigen, nicht tropfenden Masse rühren.",
            tip: "Frisch gemahlenen Mohn findest du für den Feiertagseinkauf oft im [Polenladen](/de/blog/polenladen-einkaufen). Wie sich die Masse anfühlen soll, zeigt auch der [Makowiec-Technik](/de/blog/makowiec-technik)-Guide, auch wenn hier keine Rolle entsteht, sondern Nudeln mit Mohn.",
          },
          {
            text: "Heiße Nudeln mit der Mohnmasse und Butter vermengen, bei Bedarf einen Schuss Nudelwasser für mehr Bindung zugeben. Abschmecken, bis es süß und mohnig, aber nicht bitter schmeckt.",
            tip: "Twaróg gehört hier nicht hinein, das wäre [Makaron z serem](/de/rezepte/makaron-z-serem). Fehlt Mohn oder eine andere Zutat, hilft der Beitrag zu [Ersatzprodukten DE](/de/blog/ersatzprodukte-de) weiter.",
          },
          {
            text: "Sofort warm servieren, auf Tellern, optional mit Puderzucker bestäubt. Reste schmecken kalt oder kurz in der Pfanne mit etwas Butter aufgewärmt.",
            tip: "Bleibt vom Mohn noch etwas übrig, lässt sich daraus am nächsten Tag ganz einfach eine kleine zweite Portion Nudeln mit Mohn zaubern, statt die Masse wegzuwerfen.",
          },
        ],
        seoTitle: "Makaron z makiem Rezept | Nudeln mit Mohn | Alemniam",
        seoDescription:
          "Makaron z makiem: Nudeln mit Mohn, Butter und Zucker. Wigilia-tauglich, bilingual, klar getrennt von Makowiec und Makaron z serem.",
      },
      pl: {
        title: "Makaron z makiem",
        slug: "makaron-z-makiem",
        excerpt:
          "Ugotowany makaron z makiem, masłem i cukrem, klasyczna słodka potrawa wigilijna, wyraźnie inna niż rolada makowiec i niż makaron z serem.",
        steps: [
          {
            text: "Ugotuj krótki makaron jajeczny lub wstążki al dente w osolonej wodzie, odcedź i zostaw odrobinę wody z gotowania.",
            tip: "To makaron z garnka, a nie drożdżowa rolada jak [makowiec](/pl/rezepte/makowiec). Ramę menu daje [menu wigilijne](/pl/blog/menu-wigilijne).",
          },
          {
            text: "Mak (niebieski, najlepiej mielony) zalej gorącym mlekiem lub wodą, odsącz, potem wymieszaj z cukrem, roztopionym masłem oraz opcjonalnie miodem, rodzynkami i skórką cytryny na smarowną, nie cieknącą masę.",
            tip: "Świeżo mielony mak na świąteczne zakupy znajdziesz często w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Jak powinna wyglądać dobra masa, pokazuje też [technika makowca](/pl/blog/makowiec-technika), choć tu nie powstaje rolada, tylko makaron z makiem.",
          },
          {
            text: "Wymieszaj gorący makaron z masą makową i masłem, w razie potrzeby dodaj odrobinę wody z gotowania dla lepszego związania. Dopraw, aż będzie słodko i makowo, bez goryczy.",
            tip: "Twaróg tu nie pasuje, to byłby [makaron z serem](/pl/rezepte/makaron-z-serem). Jeśli brakuje maku lub innego składnika, pomogą [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
          },
          {
            text: "Podawaj od razu na ciepło, na talerzach, opcjonalnie z cukrem pudrem. Resztki smakują na zimno albo krótko podgrzane na patelni z odrobiną masła.",
            tip: "Jeśli zostanie trochę masy makowej, następnego dnia łatwo zrobisz z niej kolejną małą porcję makaronu z makiem, zamiast ją wyrzucać.",
          },
        ],
        seoTitle: "Makaron z makiem przepis | Makaron z makiem | Alemniam",
        seoDescription:
          "Makaron z makiem: makaron z makiem, masłem i cukrem. Na Wigilię, dwujęzycznie, jasno osobno od makowca i makaronu z serem.",
      },
    },
    ingredients: [
      {
        id: "mzm-1",
        name: {
          de: "Kurze Eiernudeln oder Bandnudeln",
          pl: "Krótki makaron jajeczny lub wstążki",
        },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Supermarkt, eine Spezialform ist nicht nötig",
      },
      {
        id: "mzm-2",
        name: {
          de: "Blauer Mohn, gemahlen",
          pl: "Mak niebieski, mielony",
        },
        amount: 150,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen, frisch gemahlen ist am besten",
        substitute: {
          de: "Ganze Samen lassen sich auch selbst mahlen, dann aber ehrlich so benennen",
          pl: "Całe ziarna można też zmielić samodzielnie, tylko trzeba to uczciwie napisać",
        },
      },
      {
        id: "mzm-3",
        name: { de: "Butter", pl: "Masło" },
        amount: 60,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "mzm-4",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 4,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "mzm-5",
        name: {
          de: "Milch oder Wasser (zum Aufquellen)",
          pl: "Mleko lub woda (do namoczenia)",
        },
        amount: 150,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "mzm-6",
        name: {
          de: "Honig (optional)",
          pl: "Miód (opcjonalnie)",
        },
        amount: 1,
        unit: { de: "EL", pl: "łyżka" },
        group: "pantry",
      },
      {
        id: "mzm-7",
        name: {
          de: "Rosinen (optional)",
          pl: "Rodzynki (opcjonalnie)",
        },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "mzm-8",
        name: {
          de: "Zitronenschale (optional)",
          pl: "Skórka cytryny (opcjonalnie)",
        },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-21T10:00:00.000Z",
    updatedAt: "2026-07-21T10:00:00.000Z",
  },
  {
    id: "recipe-szarlotka",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-szarlotka/9fbe4a10-d95c-4763-ad73-a9797fafaf87.webp",
    prepMinutes: 35,
    cookMinutes: 50,
    servings: 12,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-suess", "category-vegetarisch"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-ersatzprodukte-de",
      "post-polenladen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Szarlotka",
        slug: "szarlotka",
        excerpt:
          "Polnischer Apfelkuchen vom Blech mit Mürbeteig und saftigen Äpfeln, oft mit Streusel, klar zu unterscheiden von Racuchy, Piernik und Sernik.",
        steps: [
          {
            text: "Für den Teig Mehl, kalte Butter, Zucker, Ei und eine Prise Salz zu einem glatten Mürbeteig verkneten, zwei Drittel für den Boden und ein Drittel für den Deckel oder die Streusel beiseitelegen. Den Teig 20 bis 30 Minuten kühlen.",
            tip: "Das ist Ofenteig vom Blech, keine Hefe-Pfanne wie [Racuchy](/de/rezepte/racuchy-jablka) und kein Honig-Gewürz-Kuchen wie [Piernik](/de/rezepte/piernik).",
          },
          {
            text: "Äpfel schälen, entkernen, in Scheiben oder Würfel schneiden und mit Zucker, Zimt und etwas Zitronensaft mischen. Optional Semmelbrösel dünn auf den Boden streuen, damit der austretende Saft gebunden wird.",
            tip: "Säuerliche Äpfel wie Boskoop oder Elstar tragen den Kuchen besser als süße Sorten. Zimt und andere Gewürze findest du oft im [Polenladen](/de/blog/polenladen-einkaufen), Alternativen zeigt der Beitrag zu [Ersatzprodukten DE](/de/blog/ersatzprodukte-de).",
          },
          {
            text: "Den Boden in eine gefettete Form oder aufs Blech drücken, die Apfelmasse verteilen und den restlichen Teig als Gitter, Deckel oder Streusel darauf verteilen. Bei mittlerer Ofentemperatur goldbraun backen, bis die Stäbchenprobe im Teig sauber bleibt und die Äpfel weich sind.",
            tip: "Als ruhiger Abschluss passt sie gut zum [polnischen Sonntagsessen](/de/blog/sonntagsessen-polnisch), auch wenn der Fokus hier klar bei der Szarlotka selbst bleibt.",
          },
          {
            text: "Vollständig auskühlen lassen, bevor du sie in Stücke schneidest, sonst bricht der Boden leicht. Optional mit Puderzucker bestäuben und warm oder bei Zimmertemperatur zu Tee oder Kaffee servieren.",
            tip: "Gut abgedeckt hält sich der Kuchen ein bis zwei Tage, einzelne Stücke lassen sich auch gut einfrieren und später kurz auftauen.",
          },
        ],
        seoTitle: "Szarlotka Rezept | Polnischer Apfelkuchen | Alemniam",
        seoDescription:
          "Szarlotka: polnischer Apfelkuchen vom Blech mit Mürbeteig. Bilingual, klar getrennt von Racuchy, Piernik und Sernik.",
      },
      pl: {
        title: "Szarlotka",
        slug: "szarlotka",
        excerpt:
          "Polskie ciasto jabłkowe z blachy na kruchym cieście z soczystymi jabłkami, często z kruszonką, wyraźnie inne niż racuchy, piernik i sernik.",
        steps: [
          {
            text: "Na ciasto zagnieć mąkę, zimne masło, cukier, jajko i szczyptę soli na gładkie kruche ciasto, dwie trzecie na spód, jedną trzecią na wierzch lub kruszonkę. Chłodź 20 do 30 minut.",
            tip: "To ciasto z pieca z blachy, a nie drożdże na patelni jak [racuchy](/pl/rezepte/racuchy-jablka) i nie miodowo-korzenny [piernik](/pl/rezepte/piernik).",
          },
          {
            text: "Jabłka obierz, wydrąż, pokrój w plastry lub kostkę i wymieszaj z cukrem, cynamonem i sokiem z cytryny. Opcjonalnie posyp spód cienką warstwą bułki tartej, żeby związać wydzielający się sok.",
            tip: "Kwaśniejsze jabłka, na przykład boskoop lub elstar, lepiej niosą ciasto niż słodkie odmiany. Cynamon i inne przyprawy znajdziesz często w [sklepie polskim](/pl/blog/sklep-polski-zakupy), a zamienniki opisują [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
          },
          {
            text: "Wciśnij spód w natłuszczoną formę lub na blachę, rozłóż jabłka, a resztę ciasta ułóż jako kratkę, pokrywę lub kruszonkę. Piecz na złoto w średniej temperaturze, aż patyczek wbity w ciasto wyjdzie czysty, a jabłka będą miękkie.",
            tip: "Jako spokojne zwieńczenie pasuje dobrze do [obiadu niedzielnego](/pl/blog/obiad-niedzielny), choć fokus zostaje wyraźnie przy samej szarlotce.",
          },
          {
            text: "Ostudź całkowicie przed krojeniem, inaczej spód łatwo się łamie. Opcjonalnie posyp cukrem pudrem i podawaj ciepłe lub w temperaturze pokojowej do herbaty lub kawy.",
            tip: "Dobrze przykryte ciasto trzyma się dzień lub dwa, a pojedyncze kawałki można też zamrozić i później krótko rozmrozić.",
          },
        ],
        seoTitle: "Szarlotka przepis | Ciasto jabłkowe | Alemniam",
        seoDescription:
          "Szarlotka: polskie ciasto jabłkowe z blachy na kruchym cieście. Dwujęzycznie, jasno osobno od racuchów, piernika i sernika.",
      },
    },
    ingredients: [
      {
        id: "sz-1",
        name: { de: "Mehl Type 405/550", pl: "Mąka typ 405/550" },
        amount: 350,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "sz-2",
        name: { de: "Kalte Butter", pl: "Zimne masło" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "sz-3",
        name: { de: "Zucker (Teig + Äpfel)", pl: "Cukier (ciasto + jabłka)" },
        amount: 120,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "sz-4",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "sz-5",
        name: {
          de: "Äpfel (säuerlich, z. B. Boskoop/Elstar)",
          pl: "Jabłka (kwaśniejsze, np. Boskoop/Elstar)",
        },
        amount: 1.2,
        unit: { de: "kg", pl: "kg" },
        group: "produce",
        storeHintDe: "Supermarkt, säuerliche Sorten bevorzugen",
      },
      {
        id: "sz-6",
        name: { de: "Zimt", pl: "Cynamon" },
        amount: 1.5,
        unit: { de: "TL", pl: "łyżeczki" },
        group: "spices",
      },
      {
        id: "sz-7",
        name: {
          de: "Zitronensaft",
          pl: "Sok z cytryny",
        },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "produce",
      },
      {
        id: "sz-8",
        name: {
          de: "Semmelbrösel (optional, gegen Saft)",
          pl: "Bułka tarta (opcjonalnie, na sok)",
        },
        amount: 3,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "sz-9",
        name: { de: "Prise Salz", pl: "Szczypta soli" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-21T10:00:00.000Z",
    updatedAt: "2026-07-21T10:00:00.000Z",
  },
];
