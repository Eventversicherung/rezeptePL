import type { Recipe } from "@/types/content";

/**
 * Wave 16 Paket B — Kasza gryczana + Tatar wołowy.
 * Affiliate: guide-only. NO SEED_VERSION bump here.
 */
export const seedRecipesWave16B: Recipe[] = [

  {
    id: "recipe-kasza-gryczana",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1670843629580-475c9d1da4e2?w=1600&q=80",
    prepMinutes: 5,
    cookMinutes: 25,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-vegetarisch", "category-schnell", "category-hauptgerichte"],
    relatedPostIds: ["post-kasza", "post-sonntagsessen", "post-polenladen"],
    videoUrl: null,
    translations: {
      de: {
        title: "Kasza gryczana na sypko",
        slug: "kasza-gryczana",
        excerpt:
          "Körniger Buchweizen aus dem Topf — polnische Beilage mit Butter, klar als Kochrezept neben dem Kasza-Lexikon.",
        steps: [
          {
            text: "250 g geröstete Kasza gryczana kurz spülen. Mit 500 ml kaltem Wasser und 1 TL Salz in einen Topf geben, aufkochen.",
            tip: "Sorten und Einkauf im [Kasza-Guide](/de/blog/kasza-buchweizen). Prażona oft im [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "Hitze stark reduzieren, Deckel drauf, 12–15 Minuten quellen lassen — nicht rühren. Vom Herd nehmen und 8 Minuten nachziehen.",
            tip: "Zu viel Rühren macht Brei. Menü: [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
          {
            text: "Mit Gabel lockern, 30 g Butter unterheben. Optional goldene Zwiebel untermischen. Heiß als Beilage servieren.",
            tip: "Passt zu [Gulasz](/de/rezepte/gulasz-wieprzowy) oder [Kurczak pieczony](/de/rezepte/kurczak-pieczony). Ersatz: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
          },
        ],
        seoTitle: "Kasza gryczana Rezept | Buchweizen kochen | Alemniam",
        seoDescription:
          "Kasza gryczana na sypko: körniger Buchweizen mit Butter. Bilingual — Kochrezept, Lexikon bleibt im Guide.",
      },
      pl: {
        title: "Kasza gryczana na sypko",
        slug: "kasza-gryczana",
        excerpt:
          "Sypka gryka z garnka — polski dodatek z masłem, jasno jako przepis obok leksykonu kaszy.",
        steps: [
          {
            text: "250 g prażonej kaszy krótko opłucz. Zalej 500 ml zimnej wody z 1 łyżeczką soli, zagotuj.",
            tip: "Odmiany i zakupy w [przewodniku kaszy](/pl/blog/kasza-gryczana). Prażona często w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Zmniejsz ogień, przykryj, 12–15 min — nie mieszaj. Zdejmij i odstaw 8 min.",
            tip: "Za częste mieszanie robi papkę. Menu: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
          },
          {
            text: "Spulchnij widelcem, dodaj 30 g masła. Opcjonalnie cebula na złoto. Podawaj gorącą.",
            tip: "Pasuje do [gulaszu](/pl/rezepte/gulasz-wieprzowy) lub [kurczaka pieczonego](/pl/rezepte/kurczak-pieczony). Zamienniki: [zamienniki](/pl/blog/zamienniki-skladnikow).",
          },
        ],
        seoTitle: "Kasza gryczana przepis | Buchweizen | Alemniam",
        seoDescription:
          "Kasza gryczana na sypko z masłem. Dwujęzycznie — przepis; leksykon w przewodniku.",
      },
    },
    ingredients: [
      { id: "kg-1", name: { de: "Kasza gryczana geröstet", pl: "Kasza gryczana prażona" }, amount: 250, unit: { de: "g", pl: "g" }, group: "pantry", storeHintDe: "Polenladen — prażona" },
      { id: "kg-2", name: { de: "Wasser", pl: "Woda" }, amount: 500, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "kg-3", name: { de: "Butter", pl: "Masło" }, amount: 30, unit: { de: "g", pl: "g" }, group: "dairy" },
      { id: "kg-4", name: { de: "Salz", pl: "Sól" }, amount: 1, unit: { de: "TL", pl: "łyżeczka" }, group: "spices" },
      { id: "kg-5", name: { de: "Zwiebel (optional)", pl: "Cebula (opcjonalnie)" }, amount: 1, unit: { de: "Stück", pl: "szt." }, group: "produce" },
    ],
    createdAt: "2026-07-28T12:00:00.000Z",
    updatedAt: "2026-07-28T12:00:00.000Z",
  },
  {
    id: "recipe-tatar",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1571513062809-2ac71eab2656?w=1600&q=80",
    prepMinutes: 25,
    cookMinutes: 0,
    servings: 2,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-hauptgerichte", "category-schnell"],
    relatedPostIds: ["post-sonntagsessen", "post-polenladen", "post-ersatzprodukte-de"],
    videoUrl: null,
    translations: {
      de: {
        title: "Tatar wołowy",
        slug: "tatar",
        excerpt:
          "Feines Rindertatar mit Eigelb und Zwiebel — kalte Vorspeise, nur mit frischem Fleisch vom Fleischer.",
        steps: [
          {
            text: "200–250 g sehr frisches, mageres Rind vom Fleischer fein von Hand hacken. Kalt halten. Messer und Brett sauber.",
            tip: "Keine Pastete — [Pasztet](/de/rezepte/pasztet) ist gebacken. Frische zuerst; sonst ehrlich [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
          },
          {
            text: "Mit 1 EL Öl, 1 TL Senf, Salz, Pfeffer, fein gehackter Zwiebel und Gewürzgurke mischen. Auf Tellern anrichten, Mulde formen.",
            tip: "Einkauf oft über [Polenladen](/de/blog/polenladen-einkaufen) oder Metzger. Menü: [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
          {
            text: "Eigelb in die Mulde setzen. Sofort mit Brot servieren. Nicht warm stehen lassen.",
            tip: "Gebratenes Hack bleibt bei [Kotlet mielony](/de/rezepte/kotlet-mielony). Hygiene nicht überspringen.",
          },
        ],
        seoTitle: "Tatar wołowy Rezept | Beefsteaktatar polnisch | Alemniam",
        seoDescription:
          "Tatar wołowy mit Eigelb und Zwiebel. Bilingual — nur mit frischem Rind, klar ≠ Pasztet.",
      },
      pl: {
        title: "Tatar wołowy",
        slug: "tatar",
        excerpt:
          "Drobno siekana wołowina z żółtkiem i cebulą — zimna przystawka tylko ze świeżego mięsa od rzeźnika.",
        steps: [
          {
            text: "200–250 g bardzo świeżej, chudej wołowiny siekaj drobno. Trzymaj zimno. Nóż i deska czyste.",
            tip: "To nie [pasztet](/pl/rezepte/pasztet). Świeżość najpierw; inaczej uczciwie [zamienniki](/pl/blog/zamienniki-skladnikow).",
          },
          {
            text: "Wymieszaj z 1 łyżką oleju, 1 łyżeczką musztardy, solą, pieprzem, drobną cebulą i ogórkiem. Ułóż, zrób wgłębienie.",
            tip: "Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy) lub rzeźnik. Menu: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
          },
          {
            text: "Włóż żółtko. Podawaj od razu z chlebem. Nie trzymaj w cieple.",
            tip: "Smażone mielone zostaje przy [kotlecie mielonym](/pl/rezepte/kotlet-mielony). Higiena obowiązkowa.",
          },
        ],
        seoTitle: "Tatar wołowy przepis | Beefsteaktatar | Alemniam",
        seoDescription:
          "Tatar wołowy z żółtkiem i cebulą. Dwujęzycznie — tylko świeża wołowina, jasno ≠ pasztet.",
      },
    },
    ingredients: [
      { id: "ta-1", name: { de: "Rinderfilet oder mageres Rind (frisch)", pl: "Polędwica lub chuda wołowina (świeża)" }, amount: 250, unit: { de: "g", pl: "g" }, group: "other", storeHintDe: "Nur vom Fleischer, am selben Tag" },
      { id: "ta-2", name: { de: "Eigelb", pl: "Żółtko" }, amount: 2, unit: { de: "Stück", pl: "szt." }, group: "dairy" },
      { id: "ta-3", name: { de: "Zwiebel", pl: "Cebula" }, amount: 0.5, unit: { de: "Stück", pl: "szt." }, group: "produce" },
      { id: "ta-4", name: { de: "Gewürzgurke", pl: "Ogórek kiszony" }, amount: 1, unit: { de: "Stück", pl: "szt." }, group: "produce" },
      { id: "ta-5", name: { de: "Senf", pl: "Musztarda" }, amount: 1, unit: { de: "TL", pl: "łyżeczka" }, group: "pantry" },
      { id: "ta-6", name: { de: "Öl", pl: "Olej" }, amount: 1, unit: { de: "EL", pl: "łyżka" }, group: "pantry" },
      { id: "ta-7", name: { de: "Salz, Pfeffer", pl: "Sól, pieprz" }, amount: 1, unit: { de: "nach Bedarf", pl: "do smaku" }, group: "spices" },
    ],
    createdAt: "2026-07-28T12:00:00.000Z",
    updatedAt: "2026-07-28T12:00:00.000Z",
  },

];
