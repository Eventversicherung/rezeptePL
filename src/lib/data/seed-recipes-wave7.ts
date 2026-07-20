import type { Recipe } from "@/types/content";

/** Wave 7: Karp, Krokiety, Sernik, Śledź — depth over spray, no new blog pillars. */
export const seedRecipesWave7: Recipe[] = [
  {
    id: "recipe-karp",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=1600&q=80",
    prepMinutes: 30,
    cookMinutes: 40,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-wigilia", "occasion-post"],
    techniqueIds: [],
    categoryIds: ["category-hauptgerichte"],
    videoUrl: null,
    translations: {
      de: {
        title: "Karp po polsku",
        slug: "karp",
        excerpt:
          "Gebackener Karpfen mit Zwiebel — festlicher Fischgang für Wigilia in DE.",
        steps: [
          {
            text: "Karpfenportionen abspülen, trockentupfen, salzen, pfeffern, mit Zitronensaft und Majoran einreiben; 20 Minuten ziehen lassen.",
            tip: "Frisch oder aus dem Polenladen — Gräten beachten. Menüplatz: [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
          },
          {
            text: "Zwiebeln in Ringe schneiden, in Butter oder Öl goldgelb anschwitzen.",
          },
          {
            text: "Fisch in eine Form legen, Zwiebeln darauf, bei 180 °C ca. 30–40 Minuten backen bis die Fleischfasern sich lösen.",
            tip: "Nicht austrocknen — Folie lockern, wenn die Oberfläche zu schnell bräunt.",
          },
          {
            text: "Mit Zitrone und Dill servieren — oft nach [Barszcz](/de/rezepte/barszcz-czerwony) und [Uszka](/de/rezepte/uszka).",
          },
        ],
        seoTitle: "Karp Rezept | Karpfen Wigilia | Alemniam",
        seoDescription:
          "Karpfen backen — polnischer Wigilia-Fisch, bilingual mit DE-Einkauf und Speiseplan-Kontext.",
      },
      pl: {
        title: "Karp po polsku",
        slug: "karp",
        excerpt:
          "Pieczony karp z cebulą — świąteczna ryba na Wigilię w DE.",
        steps: [
          {
            text: "Porcje karpia opłucz, osusz, posól, popieprz, natrzyj sokiem z cytryny i majerankiem; odstaw na 20 minut.",
            tip: "Świeży lub ze sklepu polskiego — uważaj na ości. Miejsce w menu: [menu wigilijne](/pl/blog/menu-wigilijne).",
          },
          {
            text: "Cebulę pokrój w krążki, zeszklij na maśle lub oleju.",
          },
          {
            text: "Ułóż rybę w formie, cebulę na wierzch, piecz w 180 °C ok. 30–40 minut aż mięso się oddziela.",
            tip: "Nie wysusz — poluzuj folią, gdy wierzch zbyt szybko brązowieje.",
          },
          {
            text: "Podawaj z cytryną i koperkiem — często po [barszczu](/pl/rezepte/barszcz-czerwony) i [uszkach](/pl/rezepte/uszka).",
          },
        ],
        seoTitle: "Karp przepis | Karp na Wigilię | Alemniam",
        seoDescription:
          "Karp pieczony — wigilijna ryba, dwujęzycznie z zakupami w DE i kontekstem menu.",
      },
    },
    ingredients: [
      {
        id: "kp-1",
        name: { de: "Karpfen (Portionen / Filets)", pl: "Karp (porcje / filety)" },
        amount: 800,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen / Fischtheke — frisch oder tiefgekühlt",
      },
      {
        id: "kp-2",
        name: { de: "Zwiebeln", pl: "Cebule" },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "kp-3",
        name: { de: "Zitrone", pl: "Cytryna" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "kp-4",
        name: { de: "Butter oder Öl", pl: "Masło lub olej" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "kp-5",
        name: { de: "Majoran", pl: "Majeranek" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
        storeHintDe: "Polenladen — siehe auch Majeranek-Lexikon",
      },
      {
        id: "kp-6",
        name: { de: "Salz, Pfeffer", pl: "Sól, pieprz" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
      {
        id: "kp-7",
        name: { de: "Dill (optional)", pl: "Koperek (opcjonalnie)" },
        amount: 1,
        unit: { de: "Bund", pl: "pęczek" },
        group: "produce",
      },
    ],
    createdAt: "2026-07-20T20:00:00.000Z",
    updatedAt: "2026-07-20T20:00:00.000Z",
  },
  {
    id: "recipe-krokiety",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=1600&q=80",
    prepMinutes: 50,
    cookMinutes: 25,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela", "occasion-wigilia"],
    techniqueIds: ["technique-teig", "technique-panieren"],
    categoryIds: ["category-hauptgerichte", "category-vegetarisch"],
    videoUrl: null,
    translations: {
      de: {
        title: "Krokiety",
        slug: "krokiety",
        excerpt:
          "Gerollte Naleśniki mit Kraut-Pilz-Füllung, paniert und knusprig gebraten.",
        steps: [
          {
            text: "Naleśniki-Teig rühren und dünne Pfannkuchen backen — Technik-Feeling im [Naleśniki-Guide](/de/blog/nalesniki-guide).",
            tip: "Teig dünn; zu dick lassen sich die Rollen schlecht schließen.",
          },
          {
            text: "Sauerkraut mit Pilzen und Zwiebel trocken schmoren, abkühlen, abschmecken.",
            tip: "Verwandte Füllungslogik: [Pierogi Kraut-Pilze](/de/rezepte/pierogi/kraut-pilze).",
          },
          {
            text: "Füllung auf Naleśniki verteilen, fest zu Rollen wickeln, Enden einklappen.",
          },
          {
            text: "In Mehl, Ei und Semmelbröseln panieren; in Fett goldbraun braten. Klassisch zu [Barszcz](/de/rezepte/barszcz-czerwony).",
            tip: "Panade-Feeling: [Panieren-Guide](/de/blog/panieren-schabowy) — hier für Rollen, nicht Kotlet.",
          },
        ],
        seoTitle: "Krokiety Rezept | Naleśniki gerollt | Alemniam",
        seoDescription:
          "Krokiety mit Kraut und Pilzen — panierte Naleśniki-Rollen, bilingual mit DE-Einkauf.",
      },
      pl: {
        title: "Krokiety",
        slug: "krokiety",
        excerpt:
          "Zwinięte naleśniki z farszem kapustno-grzybowym, panierowane i chrupiące.",
        steps: [
          {
            text: "Wymieszaj ciasto na naleśniki i usmaż cienkie placki — wyczucie w [przewodniku po naleśnikach](/pl/blog/nalesniki-przewodnik).",
            tip: "Ciasto cienkie; za grube trudno zwinąć.",
          },
          {
            text: "Uduś kapustę kiszoną z grzybami i cebulą na sucho, ostudź, dopraw.",
            tip: "Pokrewna logika farszu: [pierogi z kapustą](/pl/rezepte/pierogi/kapusta-grzyby).",
          },
          {
            text: "Nałóż farsz na naleśniki, zwiń mocno, końce wsuń do środka.",
          },
          {
            text: "Panieruj w mące, jajku i bułce tartej; smaż na złoto. Klasycznie do [barszczu](/pl/rezepte/barszcz-czerwony).",
            tip: "Panierka: [przewodnik panierowania](/pl/blog/panierowanie-kotlet) — tu do rolek, nie kotleta.",
          },
        ],
        seoTitle: "Krokiety przepis | Naleśniki zwinięte | Alemniam",
        seoDescription:
          "Krokiety z kapustą i grzybami — panierowane rolki, dwujęzycznie z zakupami w DE.",
      },
    },
    ingredients: [
      {
        id: "kr-1",
        name: { de: "Mehl (für Naleśniki)", pl: "Mąka (na naleśniki)" },
        amount: 250,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "kr-2",
        name: { de: "Milch", pl: "Mleko" },
        amount: 400,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "kr-3",
        name: { de: "Eier", pl: "Jajka" },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "kr-4",
        name: { de: "Sauerkraut", pl: "Kapusta kiszona" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen / Supermarkt — gut abtropfen",
      },
      {
        id: "kr-5",
        name: { de: "Getrocknete Pilze", pl: "Suszone grzyby" },
        amount: 30,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen — einweichen",
      },
      {
        id: "kr-6",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "kr-7",
        name: { de: "Semmelbrösel", pl: "Bułka tarta" },
        amount: 100,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "kr-8",
        name: { de: "Öl zum Braten", pl: "Olej do smażenia" },
        amount: 100,
        unit: { de: "ml", pl: "ml" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-20T20:10:00.000Z",
    updatedAt: "2026-07-20T20:10:00.000Z",
  },
  {
    id: "recipe-sernik",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1600&q=80",
    prepMinutes: 35,
    cookMinutes: 60,
    servings: 12,
    regionIds: [],
    occasionIds: ["occasion-niedziela", "occasion-wielkanoc"],
    techniqueIds: ["technique-teig"],
    categoryIds: ["category-suess", "category-vegetarisch"],
    videoUrl: null,
    translations: {
      de: {
        title: "Sernik",
        slug: "sernik",
        excerpt:
          "Polnischer Käsekuchen auf Twaróg-Basis — cremig, festlich, ohne Mohn-Kannibalismus.",
        steps: [
          {
            text: "Twaróg glatt rühren oder mahlen; mit Eiern, Zucker, etwas Mehl oder Puddingpulver und Vanille vermengen.",
            tip: "Twaróg-Einkauf: [Twaróg in DE](/de/blog/twarog-deutschland). Nicht mit Makowiec verwechseln — anderes Dessert.",
          },
          {
            text: "Optional Mürbeteig-Boden in Form legen; Masse darauf verteilen.",
          },
          {
            text: "Bei mittlerer Ofentemperatur backen, bis die Mitte noch leicht wackelt; im Ofen nachruhen lassen.",
            tip: "Back-Feeling und Ofengeduld: [Makowiec-Technik](/de/blog/makowiec-technik) — verwandtes Festtagsbacken, anderer Owner.",
          },
          {
            text: "Vollständig abkühlen, kalt stellen, in Stücke schneiden. Mit Puderzucker oder Früchten servieren.",
          },
        ],
        seoTitle: "Sernik Rezept | Polnischer Käsekuchen | Alemniam",
        seoDescription:
          "Sernik mit Twaróg — polnischer Käsekuchen, bilingual mit DE-Einkauf.",
      },
      pl: {
        title: "Sernik",
        slug: "sernik",
        excerpt:
          "Polski sernik na twarogu — kremowy, świąteczny, bez kanibalizacji makowca.",
        steps: [
          {
            text: "Twaróg utrzyj lub zmiel; wymieszaj z jajkami, cukrem, odrobiną mąki lub budyniu i wanilią.",
            tip: "Zakupy twarogu: [twaróg w DE](/pl/blog/twarog-w-niemczech). To nie makowiec — inny deser.",
          },
          {
            text: "Opcjonalnie spód kruchy w formie; wylej masę.",
          },
          {
            text: "Piecz w średniej temperaturze, aż środek lekko drga; dociągnij w wyłączonym piecu.",
            tip: "Wyczucie pieca: [technika makowca](/pl/blog/makowiec-technika) — pokrewne pieczenie świąteczne, inny owner.",
          },
          {
            text: "Całkowicie ostudź, schłodź, pokrój. Podawaj z cukrem pudrem lub owocami.",
          },
        ],
        seoTitle: "Sernik przepis | Polski sernik | Alemniam",
        seoDescription:
          "Sernik na twarogu — dwujęzycznie z zakupami w DE.",
      },
    },
    ingredients: [
      {
        id: "sn-1",
        name: { de: "Twaróg (sernikowy / Speisequark)", pl: "Twaróg sernikowy" },
        amount: 1000,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen oder abgetropfter Speisequark 20%",
      },
      {
        id: "sn-2",
        name: { de: "Eier", pl: "Jajka" },
        amount: 5,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "sn-3",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "sn-4",
        name: { de: "Butter", pl: "Masło" },
        amount: 100,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "sn-5",
        name: { de: "Mehl oder Vanillepuddingpulver", pl: "Mąka lub budyń waniliowy" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "sn-6",
        name: { de: "Vanillezucker / Vanille", pl: "Cukier waniliowy / wanilia" },
        amount: 1,
        unit: { de: "Päckchen", pl: "opak." },
        group: "pantry",
      },
      {
        id: "sn-7",
        name: { de: "Mehl für Boden (optional)", pl: "Mąka na spód (opcjonalnie)" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-20T20:20:00.000Z",
    updatedAt: "2026-07-20T20:20:00.000Z",
  },
  {
    id: "recipe-sledz",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&q=80",
    prepMinutes: 25,
    cookMinutes: 0,
    servings: 6,
    regionIds: [],
    occasionIds: ["occasion-wigilia", "occasion-post"],
    techniqueIds: [],
    categoryIds: ["category-hauptgerichte", "category-schnell"],
    videoUrl: null,
    translations: {
      de: {
        title: "Śledź w oleju",
        slug: "sledz",
        excerpt:
          "Eingelegter Hering mit Zwiebel und Öl — kalter Klassiker für Wigilia und Alltag.",
        steps: [
          {
            text: "Matjes oder Salzhering wässern bzw. abtropfen; in mundgerechte Stücke schneiden.",
            tip: "Polenladen für gute Matjes/Filets. Menülogik bleibt beim [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
          },
          {
            text: "Zwiebeln in feine Ringe schneiden, optional kurz mit heißem Wasser übergießen gegen Schärfe.",
          },
          {
            text: "Mit Öl, Lorbeer, Piment und Pfeffer schichten; mindestens einige Stunden ziehen lassen.",
            tip: "Anderer Fischgang: [Karp](/de/rezepte/karp) — warm gebacken, nicht kalt eingelegt.",
          },
          {
            text: "Kalt mit Brot servieren — oft neben Salaten und anderen kalten Vorspeisen.",
          },
        ],
        seoTitle: "Śledź Rezept | Hering in Öl | Alemniam",
        seoDescription:
          "Śledź w oleju — polnischer Hering, bilingual mit DE-Einkauf und Wigilia-Kontext.",
      },
      pl: {
        title: "Śledź w oleju",
        slug: "sledz",
        excerpt:
          "Śledź z cebulą w oleju — zimny klasyk na Wigilię i na co dzień.",
        steps: [
          {
            text: "Matjasa lub śledzia solonego namocz lub odsącz; pokrój na kawałki.",
            tip: "Sklep polski po dobre filety. Logika menu zostaje w [menu wigilijnym](/pl/blog/menu-wigilijne).",
          },
          {
            text: "Cebulę pokrój w cienkie krążki, opcjonalnie zalej wrzątkiem przeciw ostrości.",
          },
          {
            text: "Uwarstw z olejem, liściem laurowym, zielem angielskim i pieprzem; odstaw na kilka godzin.",
            tip: "Inna ryba: [karp](/pl/rezepte/karp) — pieczony na ciepło, nie marynowany na zimno.",
          },
          {
            text: "Podawaj zimne z chlebem — często obok sałatek i innych zimnych przekąsek.",
          },
        ],
        seoTitle: "Śledź przepis | Śledź w oleju | Alemniam",
        seoDescription:
          "Śledź w oleju — dwujęzycznie z zakupami w DE i kontekstem Wigilii.",
      },
    },
    ingredients: [
      {
        id: "sl-1",
        name: { de: "Matjes / Heringfilets", pl: "Matjas / filety śledziowe" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen oder Kühltruhe — abtropfen",
      },
      {
        id: "sl-2",
        name: { de: "Zwiebeln", pl: "Cebule" },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "sl-3",
        name: { de: "Rapsöl oder neutrales Öl", pl: "Olej rzepakowy" },
        amount: 150,
        unit: { de: "ml", pl: "ml" },
        group: "pantry",
      },
      {
        id: "sl-4",
        name: { de: "Lorbeerblätter", pl: "Liście laurowe" },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
      {
        id: "sl-5",
        name: { de: "Pimentkörner", pl: "Ziele angielskie" },
        amount: 6,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
      {
        id: "sl-6",
        name: { de: "Pfeffer", pl: "Pieprz" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-20T20:30:00.000Z",
    updatedAt: "2026-07-20T20:30:00.000Z",
  },
];
