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
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-kasza-gryczana/1525c13f-8f09-4fbd-93d7-b047d7b8208b.webp",
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
          "Kasza gryczana na sypko ist körniger, nussiger Buchweizen aus dem Topf, die klassische polnische Beilage mit Butter.",
        steps: [
          {
            text: "250 g geröstete Kasza gryczana kurz unter fließendem Wasser abspülen. Mit 500 ml kaltem Wasser und einem Teelöffel Salz in einen Topf geben und aufkochen.",
            tip: "Mehr zu Sorten und Röstgrad erklärt der [Kasza-Guide](/de/blog/kasza-buchweizen), geröstete Prażona findest du oft zuverlässiger im [Polenladen](/de/blog/polenladen-einkaufen) als im Supermarktregal.",
          },
          {
            text: "Die Hitze stark reduzieren, den Deckel aufsetzen und 12 bis 15 Minuten quellen lassen, ohne zu rühren. Vom Herd nehmen und weitere acht Minuten zugedeckt nachziehen lassen.",
            tip: "Häufiges Rühren setzt Stärke frei und macht aus dem körnigen Buchweizen schnell einen Brei, deshalb lieber Geduld haben und den Deckel geschlossen lassen.",
          },
          {
            text: "Mit einer Gabel auflockern und 30 g Butter unterheben. Wer mag, brät vorher eine Zwiebel goldbraun an und mischt sie unter. Heiß als Beilage servieren.",
            tip: "Kasza passt gut zu geschmortem Fleisch wie [Gulasz wieprzowy](/de/rezepte/gulasz-wieprzowy) oder zu einem ganzen Ofenhuhn wie [Kurczak pieczony](/de/rezepte/kurczak-pieczony). Fehlt eine Zutat, hilft der Überblick zu [Ersatzprodukten](/de/blog/ersatzprodukte-de).",
          },
        ],
        seoTitle: "Kasza gryczana Rezept | Buchweizen kochen | Alemniam",
        seoDescription:
          "Kasza gryczana na sypko: körniger, nussiger Buchweizen mit Butter, die klassische polnische Beilage.",
      },
      pl: {
        title: "Kasza gryczana na sypko",
        slug: "kasza-gryczana",
        excerpt:
          "Kasza gryczana na sypko to sypka, orzechowa gryka z garnka, klasyczny polski dodatek z masłem.",
        steps: [
          {
            text: "250 g prażonej kaszy gryczanej krótko przepłucz pod bieżącą wodą. Zalej 500 ml zimnej wody z łyżeczką soli i zagotuj w garnku.",
            tip: "Więcej o odmianach i stopniu prażenia pisze [przewodnik po kaszy](/pl/blog/kasza-gryczana), a prażoną kaszę pewniej kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy) niż na sklepowej półce.",
          },
          {
            text: "Zmniejsz ogień, przykryj i gotuj 12 do 15 minut, nie mieszając. Zdejmij z ognia i odstaw pod przykryciem na kolejne osiem minut.",
            tip: "Częste mieszanie uwalnia skrobię i szybko zamienia sypką kaszę w papkę, więc lepiej uzbroić się w cierpliwość i nie podnosić pokrywki.",
          },
          {
            text: "Spulchnij widelcem i dodaj 30 g masła. Kto lubi, wcześniej podsmaża cebulę na złoto i miesza ją z kaszą. Podawaj na gorąco jako dodatek.",
            tip: "Kasza dobrze komponuje się z duszonym mięsem jak [gulasz wieprzowy](/pl/rezepte/gulasz-wieprzowy) albo z całym kurczakiem z pieca jak [kurczak pieczony](/pl/rezepte/kurczak-pieczony). Jeśli brakuje składnika, sprawdź [zamienniki](/pl/blog/zamienniki-skladnikow).",
          },
        ],
        seoTitle: "Kasza gryczana przepis | Buchweizen | Alemniam",
        seoDescription:
          "Kasza gryczana na sypko z masłem, sypka i aromatyczna, klasyczny polski dodatek.",
      },
    },
    ingredients: [
      { id: "kg-1", name: { de: "Kasza gryczana geröstet", pl: "Kasza gryczana prażona" }, amount: 250, unit: { de: "g", pl: "g" }, group: "pantry", storeHintDe: "Polenladen, geröstete Prażona" },
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
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-tatar/ccb2f7d5-4499-4b6a-b5f0-4a0917de92d7.webp",
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
          "Tatar wołowy ist fein gehacktes, sehr frisches Rindfleisch mit Eigelb und Zwiebel, eine kalte Vorspeise, die nur mit hochwertigem Fleisch vom Fleischer gelingt.",
        steps: [
          {
            text: "200 bis 250 g sehr frisches, mageres Rindfleisch direkt beim Fleischer deines Vertrauens kaufen und am selben Tag von Hand fein hacken. Fleisch, Messer und Brett die ganze Zeit kalt und sauber halten.",
            tip: "Nur wirklich frisches Fleisch von einer vertrauenswürdigen Quelle verarbeiten, denn beim Tatar gibt es keinen Garprozess, der Keime abtötet. Ein gebackenes Gericht mit ähnlichem Fleisch ist dagegen der [Pasztet](/de/rezepte/pasztet), der ganz anders zubereitet wird.",
          },
          {
            text: "Das Fleisch mit einem Esslöffel Öl, einem Teelöffel Senf, Salz, Pfeffer, fein gehackter Zwiebel und Gewürzgurke vermischen. Auf Tellern anrichten und in der Mitte eine kleine Mulde formen.",
            tip: "Frisches Fleisch bekommst du oft zuverlässig im [Polenladen](/de/blog/polenladen-einkaufen) oder direkt beim Metzger, der auch Fragen zur Herkunft beantwortet.",
          },
          {
            text: "Ein Eigelb in die Mulde setzen und das Tatar sofort servieren, mit frischem Brot dazu. Nicht warm stehen lassen, sondern kalt und zeitnah essen.",
            tip: "Gebratenes Hack aus dem gleichen Fleisch bleibt bei [Kotlet mielony](/de/rezepte/kotlet-mielony). Bei rohem Fleisch und rohem Ei gilt: Hygiene ist keine Nebensache, sondern die wichtigste Zutat.",
          },
        ],
        seoTitle: "Tatar wołowy Rezept | Beefsteaktatar polnisch | Alemniam",
        seoDescription:
          "Tatar wołowy mit Eigelb und Zwiebel, aus sehr frischem Rind vom Fleischer, kein Pasztet.",
      },
      pl: {
        title: "Tatar wołowy",
        slug: "tatar",
        excerpt:
          "Tatar wołowy to drobno siekana, bardzo świeża wołowina z żółtkiem i cebulą, zimna przystawka, która udaje się tylko z dobrego mięsa od rzeźnika.",
        steps: [
          {
            text: "200 do 250 g bardzo świeżej, chudej wołowiny kup u zaufanego rzeźnika i posiekaj drobno ręcznie tego samego dnia. Mięso, nóż i deskę trzymaj przez cały czas czyste i zimne.",
            tip: "Do tatara nadaje się tylko naprawdę świeże mięso z pewnego źródła, bo w tym daniu nie ma etapu gotowania, który zabija bakterie. Pieczone danie z podobnego mięsa to [pasztet](/pl/rezepte/pasztet), robiony zupełnie inaczej.",
          },
          {
            text: "Wymieszaj mięso z łyżką oleju, łyżeczką musztardy, solą, pieprzem, drobno posiekaną cebulą i ogórkiem kiszonym. Ułóż na talerzach i zrób wgłębienie na środku.",
            tip: "Świeże mięso najłatwiej kupić w [sklepie polskim](/pl/blog/sklep-polski-zakupy) albo prosto u rzeźnika, który odpowie na pytania o pochodzenie.",
          },
          {
            text: "Włóż żółtko do wgłębienia i podawaj od razu, z kawałkiem świeżego chleba. Nie trzymaj tatara w cieple, jedz go na chłodno i szybko po przygotowaniu.",
            tip: "Smażone mielone z tego samego mięsa to już [kotlet mielony](/pl/rezepte/kotlet-mielony). Przy surowym mięsie i surowym jajku higiena nie jest dodatkiem, tylko najważniejszym składnikiem.",
          },
        ],
        seoTitle: "Tatar wołowy przepis | Beefsteaktatar | Alemniam",
        seoDescription:
          "Tatar wołowy z żółtkiem i cebulą, ze świeżej wołowiny od rzeźnika, nie pasztet.",
      },
    },
    ingredients: [
      { id: "ta-1", name: { de: "Rinderfilet oder mageres Rind (frisch)", pl: "Polędwica lub chuda wołowina (świeża)" }, amount: 250, unit: { de: "g", pl: "g" }, group: "other", storeHintDe: "Nur vom Fleischer, am selben Tag verarbeiten" },
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
