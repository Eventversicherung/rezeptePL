import type { Recipe } from "@/types/content";

/**
 * Wave 13 Paket C — Hefezopf + Aufschnitt.
 * - recipe-chalka — geflochtener Hefezopf/Laib, anders als Babka-Gugelhupf, Pączki und Racuchy
 * - recipe-pasztet — Haus-Pastete aus Geflügelleber, anders als Kaszanka und Kotlet mielony
 *
 * Integrator E: merge into seed aggregator + recipe-articles + related maps.
 * Affiliate: guide-only (no relatedProductIds).
 * NO SEED_VERSION bump here. No commit/push.
 */
export const seedRecipesWave13C: Recipe[] = [
  {
    id: "recipe-chalka",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-chalka/5f16e0c3-59ac-40de-86ba-5c61ac7cd71d.webp",
    prepMinutes: 40,
    cookMinutes: 35,
    servings: 12,
    regionIds: [],
    occasionIds: ["occasion-wielkanoc", "occasion-niedziela"],
    techniqueIds: ["technique-teig"],
    categoryIds: ["category-suess", "category-vegetarisch"],
    relatedPostIds: [
      "post-wielkanoc",
      "post-polenladen",
      "post-ersatzprodukte-de",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Chałka",
        slug: "chalka",
        excerpt:
          "Ein geflochtenes, helles Hefebrot mit optionalem Sesam, das als Laib oder Zopf auf den Frühstücks- und Ostertisch kommt und mit dem Gugelhupf Babka oder den frittierten Pączki nichts zu tun hat.",
        steps: [
          {
            text: "Die Hefe in lauwarmer Milch mit 1 Teelöffel Zucker auflösen und 10 Minuten stehen lassen, bis sie an der Oberfläche schäumt.",
            tip: "Die Milch darf wirklich nur lauwarm sein, zu heiß tötet die Hefe ab. Mehr zum Umgang mit Hefe zeigt die [Makowiec-Technik](/de/blog/makowiec-technik), die Gugelhupf-Form dagegen gehört zur [Babka](/de/rezepte/babka).",
          },
          {
            text: "Mehl, restlichen Zucker, Eier, weiche Butter und eine Prise Salz zu einem glatten, elastischen Teig verkneten. Den Teig abgedeckt gehen lassen, bis er sich verdoppelt hat, das dauert etwa 60 bis 90 Minuten.",
            tip: "Hier wird nichts frittiert, [Pączki](/de/rezepte/paczki) bleiben ein eigenes Rezept. Gute Zutaten für den Teig findest du im [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "Den Teig in drei oder vier gleich schwere Stränge teilen, zu Rollen formen und zu einem Zopf flechten. Die Enden gut unterschieben und den Zopf auf ein mit Backpapier ausgelegtes Blech legen.",
          },
          {
            text: "Den Zopf abgedeckt weitere 20 bis 30 Minuten gehen lassen. Mit verquirltem Ei bestreichen und optional mit Sesam bestreuen.",
            tip: "Der Zopf soll sichtbar bleiben, das ist keine Gugelhupf-Form wie bei der [Babka](/de/rezepte/babka). Apfelpfannkuchen bleiben ein eigenes Gericht, die [Racuchy](/de/rezepte/racuchy-jablka).",
          },
          {
            text: "Bei 180 Grad, mit Umluft etwas niedriger, 30 bis 35 Minuten goldbraun backen. Auf einem Gitter abkühlen lassen und warm oder lauwarm in Scheiben servieren.",
            tip: "Auf dem Ostertisch bleibt der [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan) der Menü-Rahmen. Fehlt eine Zutat, hilft der Beitrag zu [Ersatzprodukten](/de/blog/ersatzprodukte-de) weiter.",
          },
        ],
        seoTitle: "Chałka Rezept | Polnisches Hefezopf-Brot | Alemniam",
        seoDescription:
          "Chałka backen: geflochtener Hefezopf mit Sesam, klar getrennt von Babka und Pączki. Bilingual, für Ostern und den Sonntagstisch.",
      },
      pl: {
        title: "Chałka",
        slug: "chalka",
        excerpt:
          "Pleciony, jasny chleb drożdżowy z opcjonalnym sezamem, podawany jako bochenek lub warkocz na śniadanie i na Wielkanoc, zupełnie inny niż babka z formy czy pączki.",
        steps: [
          {
            text: "Rozpuść drożdże w letnim mleku z łyżeczką cukru i odstaw na 10 minut, aż na wierzchu pojawi się piana.",
            tip: "Mleko powinno być naprawdę tylko letnie, za gorące zabija drożdże. Więcej o pracy z drożdżami mówi [technika makowca](/pl/blog/makowiec-technika), a forma babkowa to zupełnie inny przepis, [babka](/pl/rezepte/babka).",
          },
          {
            text: "Zagnieć mąkę, resztę cukru, jajka, miękkie masło i szczyptę soli na gładkie, elastyczne ciasto. Odstaw przykryte, aż podwoi objętość, co zajmuje zwykle 60 do 90 minut.",
            tip: "Tu nic się nie smaży w tłuszczu, [pączki](/pl/rezepte/paczki) zostają osobnym przepisem. Dobre składniki na ciasto znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Podziel ciasto na trzy lub cztery równe wałki i zaplot je w warkocz. Końce dobrze spój i ułóż warkocz na blasze wyłożonej papierem.",
          },
          {
            text: "Odstaw przykryty warkocz na kolejne 20 do 30 minut do wyrastania. Posmaruj roztrzepanym jajkiem i opcjonalnie posyp sezamem.",
            tip: "Warkocz ma zostać widoczny, to nie forma babkowa jak przy [babce](/pl/rezepte/babka). Racuchy jabłkowe to osobne danie, [racuchy](/pl/rezepte/racuchy-jablka).",
          },
          {
            text: "Piecz w 180 stopniach, z termoobiegiem nieco niżej, 30 do 35 minut na złoto. Ostudź na kratce i kroić na ciepło lub letnio.",
            tip: "Przy wielkanocnym stole ramą menu zostaje [menu wielkanocne](/pl/blog/menu-wielkanocne). Gdy brakuje składnika, pomogą [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
          },
        ],
        seoTitle: "Chałka przepis | Polski chleb drożdżowy warkocz | Alemniam",
        seoDescription:
          "Chałka w domu: pleciony chleb drożdżowy z sezamem, jasno osobno od babki i pączków. Dwujęzycznie, na Wielkanoc i niedzielę.",
      },
    },
    ingredients: [
      {
        id: "ch-1",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "ch-2",
        name: { de: "Milch", pl: "Mleko" },
        amount: 200,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "ch-3",
        name: { de: "Frische Hefe oder Trockenhefe", pl: "Drożdże świeże lub suszone" },
        amount: 25,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Bei Trockenhefe die Angabe auf der Packung umrechnen",
        substitute: {
          de: "7 bis 8 g Trockenhefe statt 25 g frischer Hefe",
          pl: "7 do 8 g drożdży suszonych zamiast 25 g świeżych",
        },
      },
      {
        id: "ch-4",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 60,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "ch-5",
        name: { de: "Eier (Teig)", pl: "Jajka (ciasto)" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "ch-6",
        name: { de: "Weiche Butter", pl: "Miękkie masło" },
        amount: 60,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "ch-7",
        name: { de: "Prise Salz", pl: "Szczypta soli" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
      {
        id: "ch-8",
        name: { de: "Ei zum Bestreichen", pl: "Jajko do smarowania" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "ch-9",
        name: {
          de: "Sesam zum Bestreuen (optional)",
          pl: "Sezam do posypania (opcjonalnie)",
        },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
        storeHintDe: "Oft im Backregal oder im Polenladen erhältlich",
        substitute: {
          de: "Weglassen oder sparsam Mohn verwenden und das ehrlich benennen",
          pl: "Pominąć albo użyć oszczędnie maku i uczciwie to zaznaczyć",
        },
      },
    ],
    createdAt: "2026-07-21T11:00:00.000Z",
    updatedAt: "2026-07-21T11:00:00.000Z",
  },
  {
    id: "recipe-pasztet",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-pasztet/3dc0ec3c-bd40-4fe7-a285-48eba8dc8c3e.webp",
    prepMinutes: 35,
    cookMinutes: 70,
    servings: 10,
    regionIds: [],
    occasionIds: ["occasion-wielkanoc", "occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-hauptgerichte"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-wielkanoc",
      "post-kielbasa-arten",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Pasztet drobiowy",
        slug: "pasztet",
        excerpt:
          "Eine hausgemachte Pastete aus Geflügelleber, im Kasten gebacken und kalt in Scheiben geschnitten, ein klassischer Fest- und Aufschnitt-Teller, der weder mit Kaszanka noch mit paniertem Hackbraten verwechselt werden sollte.",
        steps: [
          {
            text: "Die Geflügelleber waschen und Sehnen entfernen. Zwiebel und Karotte grob würfeln und in Butter glasig dünsten, die Leber kurz mitbraten, ohne sie durchzugaren, und alles abkühlen lassen.",
            tip: "Hier entsteht eine Pastete beziehungsweise Terrine, keine Blutwurst wie [Kaszanka](/de/rezepte/kaszanka), das bleibt ein eigenes Rezept. Mehr zum Aufschnitt allgemein bietet der Beitrag zu [Kiełbasa-Arten](/de/blog/kielbasa-arten).",
          },
          {
            text: "Die Leber-Gemüse-Masse mit Eiern, eingeweichtem und gut ausgedrücktem Brötchen, Majoran, Salz und Pfeffer fein pürieren, bis sie streichfähig und homogen ist.",
          },
          {
            text: "Eine Kastenform ausfetten und mit Backpapier auslegen. Die Masse einfüllen, glatt streichen und optional mit ein paar Butterflocken belegen.",
            tip: "Es gibt keine Panade wie beim [Kotlet mielony](/de/rezepte/kotlet-mielony), das ist ein anderes Gericht. Zutaten dafür findest du im [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "Im Wasserbad bei 170 Grad etwa 60 bis 70 Minuten backen, bis die Mitte fest ist, das prüfst du mit der Stäbchenprobe. Abkühlen lassen und dann kalt stellen, idealerweise über Nacht.",
          },
          {
            text: "In Scheiben schneiden und mit Brot, Meerrettich oder Senf servieren, kalt als Aufschnitt oder auch lauwarm.",
            tip: "Als Menüplatz passt das [polnische Sonntagsessen](/de/blog/sonntagsessen-polnisch) oder der [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan), beide bleiben eigene Menü-Artikel.",
          },
        ],
        seoTitle: "Pasztet Rezept | Polnische Pastete Geflügelleber | Alemniam",
        seoDescription:
          "Pasztet drobiowy: Hausgemachte Pastete aus Geflügelleber, klar getrennt von Kaszanka und Kotlet mielony. Bilingual, als Festaufschnitt.",
      },
      pl: {
        title: "Pasztet drobiowy",
        slug: "pasztet",
        excerpt:
          "Domowy pasztet z wątróbki drobiowej, pieczony w keksówce i pokrojony na zimno, klasyczna wędlina świąteczna, którą łatwo pomylić z kaszanką albo panierowanym kotletem mielonym, choć to zupełnie inne dania.",
        steps: [
          {
            text: "Wątróbkę opłucz i usuń żyłki. Cebulę i marchew pokrój grubo, zeszklij na maśle, dodaj wątróbkę i podsmaż krótko, nie doprowadzając jej do pełnego ugotowania, a następnie ostudź całość.",
            tip: "To pasztet, czyli terrina, a nie kaszanka, [kaszanka](/pl/rezepte/kaszanka) zostaje osobnym przepisem. Więcej o wędlinach opisuje [przewodnik po rodzajach kiełbasy](/pl/blog/rodzaje-kielbasy).",
          },
          {
            text: "Zmiksuj masę z jajkami, namoczoną i dobrze odciśniętą bułką, majerankiem, solą i pieprzem na gładko, tak żeby dało się ją smarować.",
          },
          {
            text: "Formę keksową natłuść i wyłóż papierem. Włóż masę, wygładź powierzchnię i opcjonalnie połóż na wierzchu płatki masła.",
            tip: "Tu nie ma panierki jak przy [kotlecie mielonym](/pl/rezepte/kotlet-mielony), to inne danie. Składniki znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Piecz w kąpieli wodnej w 170 stopniach około 60 do 70 minut, aż środek będzie zwarty, sprawdź patyczkiem. Ostudź, a potem schłodź, najlepiej przez całą noc.",
          },
          {
            text: "Pokrój w plasterki i podawaj z chlebem, chrzanem lub musztardą, na zimno jako wędlinę albo na letnio.",
            tip: "Jako miejsce w menu pasuje [obiad niedzielny](/pl/blog/obiad-niedzielny) albo [menu wielkanocne](/pl/blog/menu-wielkanocne), oba zostają osobnymi artykułami o okazji.",
          },
        ],
        seoTitle: "Pasztet przepis | Pasztet drobiowy domowy | Alemniam",
        seoDescription:
          "Pasztet drobiowy: domowa pasteta z wątróbki, jasno osobno od kaszanki i kotleta mielonego. Dwujęzycznie, na święta i niedzielę.",
      },
    },
    ingredients: [
      {
        id: "pa-1",
        name: { de: "Geflügelleber", pl: "Wątróbka drobiowa" },
        amount: 600,
        unit: { de: "g", pl: "g" },
        group: "other",
        storeHintDe: "Frisch oder tiefgekühlt, Farbe und Geruch vor dem Kauf prüfen",
      },
      {
        id: "pa-2",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "pa-3",
        name: { de: "Karotte", pl: "Marchew" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "pa-4",
        name: { de: "Butter", pl: "Masło" },
        amount: 80,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "pa-5",
        name: { de: "Eier", pl: "Jajka" },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "pa-6",
        name: { de: "Altes Brötchen (eingeweicht)", pl: "Czerstwa bułka (namoczona)" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "pantry",
        substitute: {
          de: "2 Scheiben Toastbrot, gut ausgedrückt",
          pl: "2 kromki tosta, dobrze odciśnięte",
        },
      },
      {
        id: "pa-7",
        name: { de: "Majeranek", pl: "Majeranek" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
        storeHintDe: "Im Polenladen oft aromatischer als die Supermarktware",
      },
      {
        id: "pa-8",
        name: {
          de: "Salz, Pfeffer",
          pl: "Sól, pieprz",
        },
        amount: 1,
        unit: { de: "nach Geschmack", pl: "do smaku" },
        group: "spices",
      },
      {
        id: "pa-9",
        name: {
          de: "Meerrettich oder Senf zum Servieren",
          pl: "Chrzan lub musztarda do podania",
        },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
        storeHintDe: "Im Polenladen als Glasware erhältlich",
      },
    ],
    createdAt: "2026-07-21T11:00:00.000Z",
    updatedAt: "2026-07-21T11:00:00.000Z",
  },
];
