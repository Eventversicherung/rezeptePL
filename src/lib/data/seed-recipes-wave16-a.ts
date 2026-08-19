import type { Recipe } from "@/types/content";

/**
 * Wave 16 Paket A — Surówka + Kotlet de volaille.
 * Affiliate: guide-only. NO SEED_VERSION bump here.
 */
export const seedRecipesWave16A: Recipe[] = [

  {
    id: "recipe-surowka",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-surowka/59d2b015-2967-4fcf-bc23-53afe6dbb174.webp",
    prepMinutes: 20,
    cookMinutes: 0,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-vegetarisch", "category-schnell"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-polenladen",
      "post-ersatzprodukte-de",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Surówka z kapusty",
        slug: "surowka",
        excerpt:
          "Knackiger polnischer Krautsalat mit Karotte — kühle Beilage zum Braten, nicht Mayo-Buffet und nicht Gurkensalat.",
        steps: [
          {
            text: "Weißkohl und Karotte sehr fein hobeln. Mit 1 TL Salz in einer Schüssel kneten, bis Saft austritt. 10 Minuten stehen lassen, überschüssige Flüssigkeit abgießen.",
            tip: "Das bleibt Rohkost-Salat — nicht warmes Schmorenkraut und nicht [Mizeria](/de/rezepte/mizeria). Menü: [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
          {
            text: "Mit Essig oder Zitronensaft, 2 EL Öl, Pfeffer und einer Prise Zucker abschmecken. Optional Kümmel. Wer Sahne mag: 2 EL Joghurt oder Schmand unterheben.",
            tip: "Sahne-Fragen: [Śmietana/Schmand](/de/blog/smietana-schmand). Mayo-Gemüse bleibt bei [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa).",
          },
          {
            text: "Kalt stellen. Vor dem Servieren nochmals abschmecken und lockern. Neben Braten, Schnitzel oder Huhn anrichten.",
            tip: "Einkauf Kümmel oft im [Polenladen](/de/blog/polenladen-einkaufen). Ersatzlogik: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
          },
        ],
        seoTitle: "Surówka z kapusty Rezept | Krautsalat polnisch | Alemniam",
        seoDescription:
          "Surówka z kapusty: knackiger Krautsalat mit Karotte. Bilingual, klar als Beilage — nicht Mizeria, nicht Jarzynowa.",
      },
      pl: {
        title: "Surówka z kapusty",
        slug: "surowka",
        excerpt:
          "Chrupiąca polska surówka z kapusty i marchewki — chłodny dodatek do pieczystego, nie majonezowy buffet i nie mizeria.",
        steps: [
          {
            text: "Kapustę i marchewkę szatkuj bardzo drobno. Z 1 łyżeczką soli ugniataj, aż puści sok. Odstaw 10 minut, odlej nadmiar płynu.",
            tip: "To surówka na zimno — nie duszona kapusta i nie [mizeria](/pl/rezepte/mizeria). Menu: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
          },
          {
            text: "Dopraw octem lub cytryną, 2 łyżkami oleju, pieprzem i szczyptą cukru. Opcjonalnie kminek. Kto lubi śmietanę: 2 łyżki jogurtu lub śmietany.",
            tip: "Śmietana: [przewodnik](/pl/blog/smietana-czy-schmand). Majonezowa sałatka zostaje przy [sałatce jarzynowej](/pl/rezepte/salatka-jarzynowa).",
          },
          {
            text: "Schłodź. Przed podaniem dopraw ponownie i spulchnij. Podawaj obok mięsa lub kurczaka.",
            tip: "Kminek często w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Zamienniki: [zamienniki](/pl/blog/zamienniki-skladnikow).",
          },
        ],
        seoTitle: "Surówka z kapusty przepis | Krautsalat | Alemniam",
        seoDescription:
          "Surówka z kapusty z marchewką. Dwujęzycznie — nie mizeria, nie sałatka jarzynowa.",
      },
    },
    ingredients: [
      { id: "su-1", name: { de: "Weißkohl", pl: "Kapusta biała" }, amount: 600, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "su-2", name: { de: "Karotte", pl: "Marchewka" }, amount: 2, unit: { de: "Stück", pl: "szt." }, group: "produce" },
      { id: "su-3", name: { de: "Essig oder Zitronensaft", pl: "Ocet lub sok z cytryny" }, amount: 2, unit: { de: "EL", pl: "łyżki" }, group: "pantry" },
      { id: "su-4", name: { de: "Öl", pl: "Olej" }, amount: 2, unit: { de: "EL", pl: "łyżki" }, group: "pantry" },
      { id: "su-5", name: { de: "Salz", pl: "Sól" }, amount: 1, unit: { de: "TL", pl: "łyżeczka" }, group: "spices" },
      { id: "su-6", name: { de: "Pfeffer", pl: "Pieprz" }, amount: 1, unit: { de: "Prise", pl: "szczypta" }, group: "spices" },
      { id: "su-7", name: { de: "Kümmel (optional)", pl: "Kminek (opcjonalnie)" }, amount: 0.5, unit: { de: "TL", pl: "łyżeczki" }, group: "spices", storeHintDe: "Polenladen oft aromatischer" },
    ],
    createdAt: "2026-07-28T12:00:00.000Z",
    updatedAt: "2026-07-28T12:00:00.000Z",
  },
  {
    id: "recipe-de-volaille",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-de-volaille/87147728-879d-49aa-9871-0e1a78285f4b.webp",
    prepMinutes: 30,
    cookMinutes: 25,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-panieren"],
    categoryIds: ["category-hauptgerichte"],
    relatedPostIds: [
      "post-panieren",
      "post-sonntagsessen",
      "post-polenladen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Kotlet de volaille",
        slug: "de-volaille",
        excerpt:
          "Paniertes Hähnchenfilet mit kalter Butterfüllung — polnischer Cordon-bleu-Klassiker, klar getrennt vom Schweine-Schabowy.",
        steps: [
          {
            text: "Hähnchenbrust flach klopfen. Kalte Butterportionen (mit Kräutern oder Knoblauch) mittig legen. Filet fest zuklappen, Ränder andrücken; bei Bedarf Zahnstocher.",
            tip: "Das ist gefülltes Huhn — nicht flacher [Kotlet schabowy](/de/rezepte/kotlet-schabowy). Panier-Hilfe: [Panieren](/de/blog/panieren-schabowy).",
          },
          {
            text: "In Mehl, verquirltem Ei und Semmelbröseln panieren; Brösel gut andrücken. 10 Minuten kalt stellen.",
            tip: "Gute Brösel oft im [Polenladen](/de/blog/polenladen-einkaufen). Menü: [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
          {
            text: "In Öl oder Butterschmalz bei mittlerer Hitze von beiden Seiten goldbraun braten (ca. 8–12 Min). Kurz Deckel, damit die Füllung schmilzt. Zahnstocher entfernen, ruhen, aufschneiden.",
            tip: "Ofenvogel bleibt bei [Kurczak pieczony](/de/rezepte/kurczak-pieczony). Zu hohe Hitze verbrennt die Panade.",
          },
          {
            text: "Mit Kartoffeln und Surówka servieren. Schnitt sollte Butterfüllung zeigen.",
            tip: "Beilage: [Surówka](/de/rezepte/surowka). Ersatzfragen: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
          },
        ],
        seoTitle: "Kotlet de volaille Rezept | Cordon bleu polnisch | Alemniam",
        seoDescription:
          "Kotlet de volaille mit Butterfüllung, paniert. Bilingual — Huhn, nicht Schweine-Schabowy.",
      },
      pl: {
        title: "Kotlet de volaille",
        slug: "de-volaille",
        excerpt:
          "Panierowany filet z kurczaka z zimnym masłem w środku — polski klasyk cordon bleu, jasno oddzielony od wieprzowego schabowego.",
        steps: [
          {
            text: "Rozbij pierś. Włóż zimne masło (z ziołami lub czosnkiem). Zawiń szczelnie; ewentualnie wykałaczka.",
            tip: "To nadziewany kurczak — nie płaski [schabowy](/pl/rezepte/kotlet-schabowy). Panierka: [panierowanie](/pl/blog/panierowanie-kotlet).",
          },
          {
            text: "Panieruj w mące, jajku i bułce tartej; dociśnij. Schłodź 10 minut.",
            tip: "Bułka często w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Menu: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
          },
          {
            text: "Smaż na oleju lub smalcu na średnim ogniu na złoto (ok. 8–12 min). Krótko pod pokrywką. Usuń wykałaczkę, odstaw, przekrój.",
            tip: "Ptak z pieca zostaje przy [kurczaku pieczonym](/pl/rezepte/kurczak-pieczony). Za mocny ogień pali panierkę.",
          },
          {
            text: "Podawaj z ziemniakami i surówką. Przekrój ma pokazać masło.",
            tip: "Dodatek: [surówka](/pl/rezepte/surowka). Zamienniki: [zamienniki](/pl/blog/zamienniki-skladnikow).",
          },
        ],
        seoTitle: "Kotlet de volaille przepis | Cordon bleu | Alemniam",
        seoDescription:
          "Kotlet de volaille z masłem, panierowany. Dwujęzycznie — kurczak, nie schabowy wieprzowy.",
      },
    },
    ingredients: [
      { id: "dv-1", name: { de: "Hähnchenbrust", pl: "Pierś z kurczaka" }, amount: 800, unit: { de: "g", pl: "g" }, group: "other" },
      { id: "dv-2", name: { de: "Kalte Butter", pl: "Zimne masło" }, amount: 80, unit: { de: "g", pl: "g" }, group: "dairy" },
      { id: "dv-3", name: { de: "Mehl", pl: "Mąka" }, amount: 60, unit: { de: "g", pl: "g" }, group: "pantry" },
      { id: "dv-4", name: { de: "Eier", pl: "Jajka" }, amount: 2, unit: { de: "Stück", pl: "szt." }, group: "dairy" },
      { id: "dv-5", name: { de: "Semmelbrösel", pl: "Bułka tarta" }, amount: 120, unit: { de: "g", pl: "g" }, group: "pantry", storeHintDe: "Polenladen oft besser" },
      { id: "dv-6", name: { de: "Öl zum Braten", pl: "Olej do smażenia" }, amount: 80, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "dv-7", name: { de: "Salz, Pfeffer, Kräuter", pl: "Sól, pieprz, zioła" }, amount: 1, unit: { de: "nach Bedarf", pl: "do smaku" }, group: "spices" },
    ],
    createdAt: "2026-07-28T12:00:00.000Z",
    updatedAt: "2026-07-28T12:00:00.000Z",
  },

];
