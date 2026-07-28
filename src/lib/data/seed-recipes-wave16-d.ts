import type { Recipe } from "@/types/content";

/**
 * Wave 16 Paket D — Chrzan + Kurczak pieczony.
 * Affiliate: guide-only. NO SEED_VERSION bump here.
 */
export const seedRecipesWave16D: Recipe[] = [

  {
    id: "recipe-chrzan",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1678651535326-0aa4d7e4c0d4?w=1600&q=80",
    prepMinutes: 15,
    cookMinutes: 0,
    servings: 8,
    regionIds: [],
    occasionIds: ["occasion-wielkanoc", "occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-vegetarisch", "category-schnell"],
    relatedPostIds: ["post-wielkanoc", "post-polenladen", "post-smietana-schmand"],
    videoUrl: null,
    translations: {
      de: {
        title: "Chrzan tarty",
        slug: "chrzan",
        excerpt:
          "Scharfer geriebener Meerrettich mit Sahne — weißer Oster-Dip, klar getrennt von Ćwikła mit Roter Bete.",
        steps: [
          {
            text: "Frische Meerrettichwurzel schälen und fein reiben (besser belüftet). Oder gutes Glas abtropfen und nachwürzen.",
            tip: "Weiß und scharf — Rote Bete bleibt bei [Ćwikła](/de/rezepte/cwikla). Einkauf: [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "Mit 3–4 EL Sahne oder Schmand, Salz und 1 TL Essig oder Zitrone abschmecken. Optional geriebener Apfel mildert.",
            tip: "Śmietana-Fragen: [Śmietana/Schmand](/de/blog/smietana-schmand). Anlass: [Wielkanoc](/de/blog/wielkanoc-speiseplan).",
          },
          {
            text: "Kalt stellen. Zu Schinken, Wurst oder Braten servieren.",
            tip: "Passt zu [Biała kiełbasa](/de/rezepte/biala-kielbasa) und [Pasztet](/de/rezepte/pasztet). Ersatz: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
          },
        ],
        seoTitle: "Chrzan tarty Rezept | Meerrettich polnisch | Alemniam",
        seoDescription:
          "Chrzan tarty mit Sahne. Bilingual — weißer Meerrettich, nicht Ćwikła.",
      },
      pl: {
        title: "Chrzan tarty",
        slug: "chrzan",
        excerpt:
          "Ostry starty chrzan ze śmietaną — biały dodatek na Wielkanoc, jasno oddzielony od ćwikły z burakiem.",
        steps: [
          {
            text: "Obierz i zetrzyj świeży korzeń (lepiej na powietrzu). Albo odsącz dobre słoiki i dopraw.",
            tip: "Biały i ostry — buraki zostają przy [ćwikle](/pl/rezepte/cwikla). Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Dopraw 3–4 łyżkami śmietany, solą i 1 łyżeczką octu lub cytryny. Opcjonalnie jabłko łagodzi.",
            tip: "Śmietana: [przewodnik](/pl/blog/smietana-czy-schmand). Okazja: [Wielkanoc](/pl/blog/menu-wielkanocne).",
          },
          {
            text: "Schłodź. Podawaj do szynki, kiełbasy lub pieczystego.",
            tip: "Pasuje do [białej kiełbasy](/pl/rezepte/biala-kielbasa) i [pasztetu](/pl/rezepte/pasztet). Zamienniki: [zamienniki](/pl/blog/zamienniki-skladnikow).",
          },
        ],
        seoTitle: "Chrzan tarty przepis | Meerrettich | Alemniam",
        seoDescription:
          "Chrzan tarty ze śmietaną. Dwujęzycznie — biały chrzan, nie ćwikła.",
      },
    },
    ingredients: [
      { id: "ch-1", name: { de: "Meerrettichwurzel (oder Glas)", pl: "Korzeń chrzanu (lub słoik)" }, amount: 150, unit: { de: "g", pl: "g" }, group: "produce", storeHintDe: "Polenladen — frisch oder Glas" },
      { id: "ch-2", name: { de: "Sahne oder Schmand", pl: "Śmietana" }, amount: 80, unit: { de: "ml", pl: "ml" }, group: "dairy" },
      { id: "ch-3", name: { de: "Essig oder Zitrone", pl: "Ocet lub cytryna" }, amount: 1, unit: { de: "TL", pl: "łyżeczka" }, group: "pantry" },
      { id: "ch-4", name: { de: "Salz", pl: "Sól" }, amount: 0.5, unit: { de: "TL", pl: "łyżeczki" }, group: "spices" },
      { id: "ch-5", name: { de: "Apfel (optional)", pl: "Jabłko (opcjonalnie)" }, amount: 0.5, unit: { de: "Stück", pl: "szt." }, group: "produce" },
    ],
    createdAt: "2026-07-28T12:00:00.000Z",
    updatedAt: "2026-07-28T12:00:00.000Z",
  },
  {
    id: "recipe-kurczak-pieczony",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=1600&q=80",
    prepMinutes: 20,
    cookMinutes: 90,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-hauptgerichte"],
    relatedPostIds: ["post-sonntagsessen", "post-majeranek", "post-polenladen"],
    videoUrl: null,
    translations: {
      de: {
        title: "Kurczak pieczony",
        slug: "kurczak-pieczony",
        excerpt:
          "Ganzes Ofenhuhn mit Majeranek — Sonntagsgeflügel, klar getrennt von Ente, Schabowy und Schab.",
        steps: [
          {
            text: "Hähnchen (ca. 1,6 kg) trocken tupfen. Mit Salz, Pfeffer und Majeranek innen und außen einreiben. Zwiebel- oder Apfelstücke locker einfüllen.",
            tip: "Das ist Huhn — nicht [Kaczka](/de/rezepte/kaczka). Gewürz: [Majeranek](/de/blog/majeranek).",
          },
          {
            text: "In eine Form legen, etwas Wasser auf den Boden. Bei 190 °C ca. 75–90 Minuten braten, alle 20 Minuten begießen. Haut soll goldbraun sein.",
            tip: "Panade-Pfanne bleibt bei [Kotlet schabowy](/de/rezepte/kotlet-schabowy). Menü: [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
          {
            text: "10 Minuten ruhen, dann tranchieren. Mit Kartoffeln und Surówka servieren.",
            tip: "Beilage: [Surówka](/de/rezepte/surowka). Schweinekamm: [Schab pieczony](/de/rezepte/schab-pieczony). Einkauf: [Polenladen](/de/blog/polenladen-einkaufen).",
          },
        ],
        seoTitle: "Kurczak pieczony Rezept | Huhn polnisch Ofen | Alemniam",
        seoDescription:
          "Kurczak pieczony mit Majeranek. Bilingual — Ofenhuhn, nicht Ente und nicht Schabowy.",
      },
      pl: {
        title: "Kurczak pieczony",
        slug: "kurczak-pieczony",
        excerpt:
          "Cały kurczak z pieca z majerankiem — niedzielny ptak, jasno oddzielony od kaczki, schabowego i schabu.",
        steps: [
          {
            text: "Osusz kurczaka (ok. 1,6 kg). Natrzyj solą, pieprzem i majerankiem wewnątrz i zewnątrz. Włóż cebulę lub jabłko.",
            tip: "To kurczak — nie [kaczka](/pl/rezepte/kaczka). Przyprawa: [majeranek](/pl/blog/majeranek-leksykon).",
          },
          {
            text: "Ułóż w naczyniu z odrobiną wody. Piecz w 190 °C ok. 75–90 min, co 20 min polewaj. Skóra ma być złota.",
            tip: "Panierka zostaje przy [schabowym](/pl/rezepte/kotlet-schabowy). Menu: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
          },
          {
            text: "Odstaw 10 min, potem porcjuj. Podawaj z ziemniakami i surówką.",
            tip: "Dodatek: [surówka](/pl/rezepte/surowka). Schab: [schab pieczony](/pl/rezepte/schab-pieczony). Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy).",
          },
        ],
        seoTitle: "Kurczak pieczony przepis | Huhn z pieca | Alemniam",
        seoDescription:
          "Kurczak pieczony z majerankiem. Dwujęzycznie — kurczak, nie kaczka i nie schabowy.",
      },
    },
    ingredients: [
      { id: "ku-1", name: { de: "Ganzes Hähnchen", pl: "Cały kurczak" }, amount: 1600, unit: { de: "g", pl: "g" }, group: "other" },
      { id: "ku-2", name: { de: "Majoran getrocknet", pl: "Majeranek suszony" }, amount: 2, unit: { de: "TL", pl: "łyżeczki" }, group: "spices", storeHintDe: "Polenladen" },
      { id: "ku-3", name: { de: "Zwiebel oder Apfel", pl: "Cebula lub jabłko" }, amount: 1, unit: { de: "Stück", pl: "szt." }, group: "produce" },
      { id: "ku-4", name: { de: "Salz", pl: "Sól" }, amount: 2, unit: { de: "TL", pl: "łyżeczki" }, group: "spices" },
      { id: "ku-5", name: { de: "Pfeffer", pl: "Pieprz" }, amount: 1, unit: { de: "TL", pl: "łyżeczka" }, group: "spices" },
      { id: "ku-6", name: { de: "Öl oder Butter", pl: "Olej lub masło" }, amount: 2, unit: { de: "EL", pl: "łyżki" }, group: "pantry" },
      { id: "ku-7", name: { de: "Wasser (Form)", pl: "Woda (do naczynia)" }, amount: 150, unit: { de: "ml", pl: "ml" }, group: "pantry" },
    ],
    createdAt: "2026-07-28T12:00:00.000Z",
    updatedAt: "2026-07-28T12:00:00.000Z",
  },

];
