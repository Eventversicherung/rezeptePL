import type { Recipe } from "@/types/content";

/**
 * Wave 8 Paket A — Beilagen (Mizeria, Kapusta zasmażana).
 * E merges into seed.ts — do not import from seed.ts until Integrator.
 */
export const seedRecipesWave8A: Recipe[] = [
  {
    id: "recipe-mizeria",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-mizeria/6f3ac245-1a4c-47cb-a36b-27f86d7d25c1.webp",
    prepMinutes: 20,
    cookMinutes: 0,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela", "occasion-wielkanoc"],
    techniqueIds: [],
    categoryIds: ["category-vegetarisch", "category-schnell"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-smietana-schmand",
      "post-wielkanoc",
      "post-panieren",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Mizeria",
        slug: "mizeria",
        excerpt:
          "Ganz dünn gehobelte Gurken ziehen unter Salz ihren Saft, dann verbindet kalte Śmietana mit frischem Dill alles zu einer kühlen, erfrischenden Beilage für Schabowy und den Sonntagstisch.",
        steps: [
          {
            text: "Gurken waschen, in sehr dünne Scheiben hobeln oder schneiden, leicht salzen und 10 bis 15 Minuten Saft ziehen lassen.",
            tip: "Salz entzieht der Gurke Wasser, sonst verdünnt der austretende Saft später die Śmietana. Wie sich das mit dem fertigen Teller verbindet, zeigt der [Panieren-Guide](/de/blog/panieren-schabowy) für Schabowy.",
          },
          {
            text: "Gurken leicht ausdrücken oder abgießen. Mit [Śmietana oder Schmand](/de/blog/smietana-schmand), gehacktem Dill, einer Prise Zucker und Pfeffer vermengen.",
          },
          {
            text: "Zum Schluss abschmecken, denn Säure und Salz kommen erst jetzt dazu. Wer mag, reibt noch etwas Zwiebel sehr fein hinein.",
            tip: "Mische den Salat nicht zu früh an, wenn Gäste erst später kommen, sonst wird er wässrig und verliert seinen Biss.",
          },
          {
            text: "Kalt servieren zu [Kotlet schabowy](/de/rezepte/kotlet-schabowy), Kartoffeln oder als Oster-Beilage nach dem [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan).",
            tip: "Ein Buffetsalat mit Mayonnaise und Gemüse ist ein ganz anderes Gericht, das findest du unter [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa).",
          },
        ],
        seoTitle: "Mizeria Rezept | Gurkensalat mit Śmietana | Alemniam",
        seoDescription:
          "Mizeria, polnischer Gurkensalat mit Śmietana und Dill. Beilage zu Schabowy, bilingual mit DE-Einkauf.",
      },
      pl: {
        title: "Mizeria",
        slug: "mizeria",
        excerpt:
          "Cienko pokrojone ogórki puszczają sok pod solą, a potem zimna śmietana ze świeżym koperkiem zamienia je w chłodny, orzeźwiający dodatek do schabowego i niedzielnego stołu.",
        steps: [
          {
            text: "Ogórki umyj, pokrój lub zetrzyj w bardzo cienkie plasterki, lekko posól i odstaw na 10 do 15 minut, żeby puściły sok.",
            tip: "Sól odciąga z ogórka wodę, inaczej sok później rozrzedzi śmietanę. Jak to się łączy z gotowym talerzem, pokazuje [przewodnik panierowania](/pl/blog/panierowanie-kotlet) schabowego.",
          },
          {
            text: "Lekko odciśnij lub odlej sok. Wymieszaj z [śmietaną lub Schmandem](/pl/blog/smietana-czy-schmand), siekanym koperkiem, szczyptą cukru i pieprzem.",
          },
          {
            text: "Dopraw na końcu, bo kwas i sól dodajesz dopiero teraz. Kto lubi, wciera jeszcze bardzo drobno startą cebulę.",
            tip: "Nie mieszaj sałatki za wcześnie, jeśli goście przyjdą później, bo zrobi się wodnista i straci chrupkość.",
          },
          {
            text: "Podawaj zimną do [kotleta schabowego](/pl/rezepte/kotlet-schabowy), ziemniaków albo jako dodatek wielkanocny według [menu wielkanocnego](/pl/blog/menu-wielkanocne).",
            tip: "Sałatka bufetowa z majonezem i warzywami to zupełnie inne danie, znajdziesz je jako [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa).",
          },
        ],
        seoTitle: "Mizeria przepis | Sałatka z ogórków | Alemniam",
        seoDescription:
          "Mizeria, ogórki ze śmietaną i koperkiem. Dodatek do schabowego, dwujęzycznie z zakupami w DE.",
      },
    },
    ingredients: [
      {
        id: "mz-1",
        name: { de: "Salatgurken", pl: "Ogórki gruntowe / sałatkowe" },
        amount: 4,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
        storeHintDe:
          "Feste Gurken nehmen, im Sommer eignen sich auch Feldgurken aus dem Polenladen",
      },
      {
        id: "mz-2",
        name: { de: "Śmietana oder Schmand", pl: "Śmietana lub Schmand" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "dairy",
        storeHintDe:
          "Schmand oder saure Sahne mit 20 bis 24 Prozent Fett, Details im Śmietana-Guide",
        substitute: {
          de: "Saure Sahne oder etwas weniger Crème fraîche",
          pl: "Kwaśna śmietana lub trochę mniej crème fraîche",
        },
      },
      {
        id: "mz-3",
        name: { de: "Dill frisch", pl: "Koperek świeży" },
        amount: 1,
        unit: { de: "Bund", pl: "pęczek" },
        group: "produce",
      },
      {
        id: "mz-4",
        name: { de: "Salz", pl: "Sól" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
      {
        id: "mz-5",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 0.5,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "pantry",
      },
      {
        id: "mz-6",
        name: { de: "Pfeffer", pl: "Pieprz" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
      {
        id: "mz-7",
        name: { de: "Zwiebel (optional)", pl: "Cebula (opcjonalnie)" },
        amount: 0.5,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
    ],
    createdAt: "2026-07-20T21:00:00.000Z",
    updatedAt: "2026-07-20T21:00:00.000Z",
  },
  {
    id: "recipe-kapusta-zasmażana",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-kapusta-zasmazana/c654bc3b-88e7-4165-aec5-c6ab3c83a573.webp",
    prepMinutes: 15,
    cookMinutes: 40,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-schmoren"],
    categoryIds: ["category-vegetarisch", "category-hauptgerichte"],
    relatedPostIds: [
      "post-kiszenie",
      "post-sonntagsessen",
      "post-kielbasa-arten",
      "post-majeranek",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Kapusta zasmażana",
        slug: "kapusta-zasmażana",
        excerpt:
          "Geschmortes Sauerkraut mit heller Zasmażka, eine warme, mild-säuerliche Beilage zu Schabowy und Sonntagsfleisch.",
        steps: [
          {
            text: "Sauerkraut ausdrücken, dabei die Säure je nach Geschmack behalten oder kurz spülen, dann grob hacken. Zwiebel in Fett glasig anschwitzen.",
            tip: "Die Kraut-Qualität und alles rund ums Fermentieren erklärt der [Kiszenie-Guide](/de/blog/kiszenie-guide) im Detail, hier geht es nur um die Verwertung des fertigen Krauts.",
          },
          {
            text: "Kraut dazugeben, mit wenig Wasser oder Brühe aufgießen, mit Lorbeer und Pfeffer würzen und bei mittlerer Hitze 25 bis 35 Minuten schmoren, bis es weich, aber nicht matschig ist.",
          },
          {
            text: "Für die Zasmażka Mehl in Butter hell anrösten, mit etwas Flüssigkeit vom Kraut glattrühren und unterheben, dann kurz aufkochen und abschmecken.",
            tip: "Röste das Mehl nicht zu dunkel, sonst schmeckt die Zasmażka bitter. Ein Klassiker-Teller entsteht mit [Kotlet schabowy](/de/rezepte/kotlet-schabowy).",
          },
          {
            text: "Heiß servieren zu Fleisch, zum [Rosół](/de/rezepte/rosol)-Sonntag oder zu Kartoffeln, eingebettet in den Rahmen des [polnischen Sonntagsessens](/de/blog/sonntagsessen-polnisch).",
          },
        ],
        seoTitle: "Kapusta zasmażana Rezept | Geschmortes Kraut | Alemniam",
        seoDescription:
          "Kapusta zasmażana, geschmortes Sauerkraut mit Mehlschwitze. Beilage zu Schabowy, bilingual.",
      },
      pl: {
        title: "Kapusta zasmażana",
        slug: "kapusta-zasmażana",
        excerpt:
          "Duszona kapusta kiszona z jasną zasmażką, ciepły, łagodnie kwaśny dodatek do schabowego i niedzielnego mięsa.",
        steps: [
          {
            text: "Odciśnij kapustę kiszoną, zostawiając kwas według smaku albo krótko ją wypłucz, potem posiekaj. Cebulę zeszklij na tłuszczu.",
            tip: "Jakość kiszonki i wszystko o fermentacji opisuje szczegółowo [przewodnik kiszenia](/pl/blog/kiszenie-w-domu), tu chodzi tylko o wykorzystanie gotowej kapusty.",
          },
          {
            text: "Dodaj kapustę, podlej odrobiną wody lub bulionu, dopraw liściem laurowym i pieprzem, a potem duś 25 do 35 minut na średnim ogniu, aż będzie miękka, ale nie rozgotowana.",
          },
          {
            text: "Zasmaż mąkę na maśle na jasno, rozprowadź płynem z kapusty, wlej i wymieszaj, krótko zagotuj i dopraw.",
            tip: "Nie zasmażaj mąki za ciemno, bo zasmażka zrobi się gorzka. Klasyczny talerz łączy ją z [kotletem schabowym](/pl/rezepte/kotlet-schabowy).",
          },
          {
            text: "Podawaj gorącą do mięsa, do niedzieli z [rosołem](/pl/rezepte/rosol) lub do ziemniaków, w ramach [obiadu niedzielnego](/pl/blog/obiad-niedzielny).",
          },
        ],
        seoTitle: "Kapusta zasmażana przepis | Alemniam",
        seoDescription:
          "Kapusta zasmażana, duszona kiszona z zasmażką. Dodatek do schabowego, dwujęzycznie.",
      },
    },
    ingredients: [
      {
        id: "kz-1",
        name: { de: "Sauerkraut", pl: "Kapusta kiszona" },
        amount: 800,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe:
          "Aus dem Polenladen oder Supermarkt, Säure vorher prüfen, es sollte nicht zu wässrig sein",
      },
      {
        id: "kz-2",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "große", pl: "duża" },
        group: "produce",
      },
      {
        id: "kz-3",
        name: { de: "Butter oder Schmalz", pl: "Masło lub smalec" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "kz-4",
        name: { de: "Mehl (Zasmażka)", pl: "Mąka (zasmażka)" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "kz-5",
        name: { de: "Butter für Zasmażka", pl: "Masło do zasmażki" },
        amount: 20,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "kz-6",
        name: { de: "Lorbeerblatt", pl: "Liść laurowy" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
      {
        id: "kz-7",
        name: { de: "Pfeffer, Salz", pl: "Pieprz, sól" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
      {
        id: "kz-8",
        name: {
          de: "Wasser oder leichte Brühe",
          pl: "Woda lub lekki bulion",
        },
        amount: 150,
        unit: { de: "ml", pl: "ml" },
        group: "pantry",
        storeHintDe:
          "Optional ein Rest vom Rosół, das macht daraus aber kein Suppenrezept",
      },
    ],
    createdAt: "2026-07-20T21:05:00.000Z",
    updatedAt: "2026-07-20T21:05:00.000Z",
  },
];
