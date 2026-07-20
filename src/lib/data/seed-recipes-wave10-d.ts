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
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1600&q=80",
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
          "Heiße Nudeln mit Twaróg und Butter — süß mit Zucker oder salzig-haushaltlich. Diaspora-Alltagsteller, klar getrennt von Leniwe und Łazanki.",
        steps: [
          {
            text: "Nudeln in reichlich Salzwasser al dente kochen; 1 Tasse Nudelwasser abschöpfen, abgießen.",
            tip: "Kurze Eiernudeln oder Spiralen funktionieren gut. Twaróg-Qualität und Abseihen: [Twaróg-Guide](/de/blog/twarog-deutschland).",
          },
          {
            text: "Butter in der noch heißen Nudelpfanne oder im Topf schmelzen; abgetropften Twaróg oder Speisequark zerdrücken und unterheben.",
            tip: "Zu nasser Quark macht einen Brei — abseihen wie im Twaróg-Guide. Ersatzlogik: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
          },
          {
            text: "Nudeln zurückgeben, mit etwas Nudelwasser zu einer cremigen, aber nicht wässrigen Masse binden.",
          },
          {
            text: "Süß: Zucker und optional Vanille/Zitronenschale. Salzig: Salz, Pfeffer, optional Dill oder geröstete Semmelbrösel in Butter.",
            tip: "Das ist kein Teig-Klößchen wie [Pierogi leniwe](/de/rezepte/pierogi-leniwe) und kein Kapusta-Nudelteller wie [Łazanki](/de/rezepte/lazanki).",
          },
          {
            text: "Sofort servieren — auf Tellern verteilt, optional mit mehr Butter oder Bröseln. Reste kalt oder kurz in der Pfanne aufwärmen.",
          },
        ],
        seoTitle: "Makaron z serem Rezept | Nudeln mit Twaróg | Alemniam",
        seoDescription:
          "Makaron z serem — Nudeln mit Twaróg, Butter und Zucker oder salzig. Bilingualer Alltagsteller. Nicht Leniwe, nicht Łazanki.",
      },
      pl: {
        title: "Makaron z serem",
        slug: "makaron-z-serem",
        excerpt:
          "Gorący makaron z twarogiem i masłem — na słodko z cukrem albo wytrawnie domowo. Talerz diasporowy, wyraźnie inny niż leniwe i łazanki.",
        steps: [
          {
            text: "Ugotuj makaron al dente w osolonej wodzie; odlej szklankę wody z gotowania, odcedź.",
            tip: "Krótki makaron jajeczny lub świderki działają dobrze. Jakość twarogu i odsączanie: [przewodnik po twarogu](/pl/blog/twarog-w-niemczech).",
          },
          {
            text: "W jeszcze gorącym garnku rozpuść masło; rozduś odsączony twaróg lub Speisequark i wmieszaj.",
            tip: "Za mokry twaróg daje papkę — odsącz jak w przewodniku. Zamienniki: [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
          },
          {
            text: "Wróć makaron, zwiąż odrobiną wody z gotowania do kremowej, ale nie wodnistej masy.",
          },
          {
            text: "Na słodko: cukier i opcjonalnie wanilia/skórka cytryny. Na wytrawnie: sól, pieprz, opcjonalnie koperek lub bułka tarta na maśle.",
            tip: "To nie kluseczki jak [pierogi leniwe](/pl/rezepte/pierogi-leniwe) i nie talerz z kapustą jak [łazanki](/pl/rezepte/lazanki).",
          },
          {
            text: "Podawaj od razu — na talerzach, opcjonalnie z dodatkowym masłem lub bułką. Resztki na zimno albo krótko na patelni.",
          },
        ],
        seoTitle: "Makaron z serem przepis | Makaron z twarogiem | Alemniam",
        seoDescription:
          "Makaron z serem — makaron z twarogiem, masłem i cukrem lub wytrawnie. Dwujęzyczny talerz na co dzień. Nie leniwe, nie łazanki.",
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
        storeHintDe: "Supermarkt — keine Spezialform nötig",
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
          "Polenladen oder Supermarkt + abseihen — siehe Twaróg-Guide",
        substitute: {
          de: "Magerquark gut abgetropft — ehrlich benennen",
          pl: "Magerquark dobrze odsączony — nazwać uczciwie",
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
