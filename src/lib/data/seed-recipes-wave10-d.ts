import type { Recipe } from "@/types/content";

/**
 * Wave 10 Paket D — Makaron z serem (Alltag / Diaspora-Comfort).
 * Cook-Intent: Pasta + Twaróg (+ Butter/Zucker oder salzig-haushaltlich).
 * Primary ≠ Pierogi leniwe (Klößchen), ≠ Łazanki (Kapusta), ≠ Knedle/Kopytka.
 * Integrator (E): merge into seed-recipes-wave10.ts + seed.ts related maps.
 * NO SEED_VERSION bump here.
 */
export const seedRecipesWave10D: Recipe[] = [
  {
    id: "recipe-makaron-z-serem",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-makaron-z-serem/ddeca4e3-012f-4a8d-a140-51426de5ac2a.webp",
    prepMinutes: 10,
    cookMinutes: 15,
    servings: 3,
    regionIds: [],
    occasionIds: [],
    techniqueIds: [],
    categoryIds: [
      "category-schnell",
      "category-hauptgerichte",
      "category-vegetarisch",
      "category-suess",
    ],
    relatedPostIds: [
      "post-twarog",
      "post-ersatzprodukte-de",
      "post-polenladen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Makaron z serem",
        slug: "makaron-z-serem",
        excerpt:
          "Heiße Nudeln mit Twaróg und Butter, ein PRL-Klassiker der Alltagsküche, süß mit Zucker oder salzig-haushaltlich.",
        steps: [
          {
            text: "Nudeln in reichlich Salzwasser al dente kochen, eine Tasse Nudelwasser abschöpfen und dann abgießen.",
            tip: "Kurze Eiernudeln oder Spiralen funktionieren am besten. Zur Twaróg-Qualität und zum Abseihen findest du mehr im [Twaróg-Guide](/de/blog/twarog-deutschland).",
          },
          {
            text: "Butter in der noch heißen Nudelpfanne oder im Topf schmelzen, den abgetropften Twaróg oder Speisequark zerdrücken und unterheben.",
            tip: "Zu nasser Quark macht schnell einen Brei, deshalb lieber wie im Twaróg-Guide beschrieben abseihen. Zur Ersatzlogik hilft der Beitrag [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
          },
          {
            text: "Die Nudeln zurückgeben und mit etwas Nudelwasser zu einer cremigen, aber nicht wässrigen Masse binden.",
            tip: "Gib das Wasser löffelweise dazu und rühre zwischendurch, so behältst du die Kontrolle über die Konsistenz.",
          },
          {
            text: "Süß abschmecken mit Zucker und optional Vanille oder Zitronenschale, salzig mit Salz, Pfeffer, optional Dill oder in Butter geröstete Semmelbrösel.",
            tip: "Das ist kein Teig-Klößchen wie [Pierogi leniwe](/de/rezepte/pierogi-leniwe) und kein Kapusta-Nudelteller wie [Łazanki](/de/rezepte/lazanki), hier bleibt es bei Pasta und Quark.",
          },
          {
            text: "Sofort servieren, auf Tellern verteilt und optional mit mehr Butter oder Bröseln. Reste kalt oder kurz in der Pfanne aufwärmen.",
          },
        ],
        seoTitle: "Makaron z serem Rezept | Nudeln mit Twaróg | Alemniam",
        seoDescription:
          "Makaron z serem, Nudeln mit Twaróg, Butter und Zucker oder salzig. Bilingualer Alltagsteller, nicht Leniwe, nicht Łazanki.",
      },
      pl: {
        title: "Makaron z serem",
        slug: "makaron-z-serem",
        excerpt:
          "Gorący makaron z twarogiem i masłem, klasyk kuchni z czasów PRL, na słodko z cukrem albo wytrawnie domowo.",
        steps: [
          {
            text: "Ugotuj makaron al dente w osolonej wodzie, odlej szklankę wody z gotowania i odcedź resztę.",
            tip: "Krótki makaron jajeczny lub świderki działają najlepiej. O jakości twarogu i odsączaniu więcej w [przewodniku po twarogu](/pl/blog/twarog-w-niemczech).",
          },
          {
            text: "W jeszcze gorącym garnku rozpuść masło, rozduś odsączony twaróg lub Speisequark i wmieszaj go do środka.",
            tip: "Za mokry twaróg daje papkę, więc lepiej odsącz go zgodnie z przewodnikiem. Przy zamiennikach pomaga artykuł [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
          },
          {
            text: "Wróć makaron do garnka i zwiąż go odrobiną wody z gotowania do kremowej, ale nie wodnistej masy.",
            tip: "Dolewaj wodę łyżką po łyżce i mieszaj między dolewkami, tak najłatwiej kontrolujesz konsystencję.",
          },
          {
            text: "Dopraw na słodko cukrem i opcjonalnie wanilią lub skórką cytryny, albo na wytrawnie solą, pieprzem, opcjonalnie koperkiem lub bułką tartą podsmażoną na maśle.",
            tip: "To nie kluseczki jak [pierogi leniwe](/pl/rezepte/pierogi-leniwe) i nie talerz z kapustą jak [łazanki](/pl/rezepte/lazanki), tu zostaje makaron z twarogiem.",
          },
          {
            text: "Podawaj od razu, rozłożone na talerzach, opcjonalnie z dodatkowym masłem lub bułką. Resztki jedz na zimno albo krótko odgrzej na patelni.",
          },
        ],
        seoTitle: "Makaron z serem przepis | Makaron z twarogiem | Alemniam",
        seoDescription:
          "Makaron z serem, makaron z twarogiem, masłem i cukrem lub wytrawnie. Dwujęzyczny talerz na co dzień, nie leniwe, nie łazanki.",
      },
    },
    ingredients: [
      {
        id: "mzs-1",
        name: {
          de: "Kurze Nudeln (Eiernudeln, Spiralen oder Farfalle)",
          pl: "Krótki makaron (jajeczny, świderki lub farfalle)",
        },
        amount: 350,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Aus dem Supermarkt, keine Spezialform nötig",
      },
      {
        id: "mzs-2",
        name: {
          de: "Twaróg oder abgetropfter Speisequark",
          pl: "Twaróg lub odsączony Speisequark",
        },
        amount: 250,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe:
          "Polenladen oder Supermarkt und dann abseihen, siehe Twaróg-Guide",
        substitute: {
          de: "Gut abgetropfter Magerquark, das solltest du dann ehrlich benennen",
          pl: "Dobrze odsączony Magerquark, warto to wtedy uczciwie nazwać",
        },
      },
      {
        id: "mzs-3",
        name: { de: "Butter", pl: "Masło" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "mzs-4",
        name: {
          de: "Zucker (süße Variante) oder Salz (salzige Variante)",
          pl: "Cukier (wersja słodka) lub sól (wersja wytrawna)",
        },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "mzs-5",
        name: {
          de: "Semmelbrösel (optional, in Butter geröstet)",
          pl: "Bułka tarta (opcjonalnie, na maśle)",
        },
        amount: 3,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "mzs-6",
        name: {
          de: "Vanille oder Zitronenschale (optional, süß)",
          pl: "Wanilia lub skórka cytryny (opcjonalnie, słodko)",
        },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
      {
        id: "mzs-7",
        name: {
          de: "Pfeffer / Dill (optional, salzig)",
          pl: "Pieprz / koperek (opcjonalnie, wytrawnie)",
        },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-20T23:00:00.000Z",
    updatedAt: "2026-07-20T23:00:00.000Z",
  },
];
