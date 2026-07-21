import type { Recipe } from "@/types/content";

/**
 * Wave 14 Paket B — Ostern-Beilagen (Jajka faszerowane + Ćwikła).
 * Isolated for Integrator E: do not import into seed.ts until merge.
 * Affiliate: guide-only (no relatedProductIds / no catalog recipeIds).
 * No new blog pillar.
 * Ownership:
 * - Jajka faszerowane ≠ Sałatka jarzynowa ≠ Mizeria ≠ Pasztet
 * - Ćwikła ≠ Buraczki (warm) ≠ Barszcz ≠ Botwinka ≠ Sałatka
 * Wielkanoc Speiseplan bleibt Anlass-Owner.
 * NO SEED_VERSION bump here. No commit/push.
 */
export const seedRecipesWave14B: Recipe[] = [
  {
    id: "recipe-jajka-faszerowane",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1626895597772-74988e263fab?w=1600&q=80",
    prepMinutes: 25,
    cookMinutes: 12,
    servings: 6,
    regionIds: [],
    occasionIds: ["occasion-wielkanoc", "occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-vegetarisch", "category-schnell"],
    relatedPostIds: [
      "post-wielkanoc",
      "post-sonntagsessen",
      "post-polenladen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Jajka faszerowane",
        slug: "jajka-faszerowane",
        excerpt:
          "Gefüllte Eier mit Eigelb-Mayo-Schnittlauch — Ostern-Buffet-Klassiker. Klar ≠ Sałatka jarzynowa und ≠ Mizeria.",
        steps: [
          {
            text: "Eier in reichlich Wasser hart kochen (ca. 9–11 Minuten ab Siedebeginn), abschrecken, schälen. Der Länge nach halbieren; Eigelb vorsichtig herauslösen und in eine Schüssel geben. Eiweiße auf einer Platte bereitlegen.",
            tip: "Das ist die gefüllte-Eier-Linie — kein Mayo-Gemüsesalat wie [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa) und kein Gurkensalat wie [Mizeria](/de/rezepte/mizeria).",
          },
          {
            text: "Eigelb mit Mayo, fein geschnittenem Schnittlauch, Prise Salz und Pfeffer zu einer cremigen, streichfähigen Masse verrühren. Optional ein Tropfen Senf — nicht dominant. Masse darf glänzen, nicht tropfen.",
            tip: "Gute Mayo und frischer Schnittlauch oft im [Polenladen](/de/blog/polenladen-einkaufen) oder Supermarkt; Ersatzlogik: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
          },
          {
            text: "Füllung mit Löffel oder Sterntülle in die Eiweiß-Hälften füllen. Mit etwas Schnittlauch oder Paprika bestreuen. Mindestens 30 Minuten kühlen, damit die Masse setzt.",
            tip: "Menü-Kontext Ostern descriptiv: [Wielkanoc Speiseplan](/de/blog/wielkanoc-speiseplan) — Speiseplan bleibt Anlass-Owner; hier nur Cook.",
          },
          {
            text: "Kalt als Buffet- oder Vorspeisenplatte servieren. Neben [Biała kiełbasa](/de/rezepte/biala-kielbasa) und [Pasztet](/de/rezepte/pasztet) oft auf der kalten Platte — Primary bleibt gefüllte Eier. Reste abgedeckt im Kühlschrank; Mayo-Hygiene beachten.",
            tip: "Sonntagsteller-Feeling: [polnisches Sonntagsessen](/de/blog/sonntagsessen-polnisch) — ohne Primary zu stehlen.",
          },
        ],
        seoTitle: "Jajka faszerowane Rezept | Gefüllte Eier polnisch | Alemniam",
        seoDescription:
          "Jajka faszerowane — Eigelb-Mayo-Schnittlauch, Ostern-Buffet. Bilingual, klar getrennt von Sałatka und Mizeria.",
      },
      pl: {
        title: "Jajka faszerowane",
        slug: "jajka-faszerowane",
        excerpt:
          "Jajka faszerowane z żółtkiem, majonezem i szczypiorkiem — klasyk wielkanocnego bufetu. Jasno ≠ sałatka jarzynowa i ≠ mizeria.",
        steps: [
          {
            text: "Jajka ugotuj na twardo (ok. 9–11 minut od wrzenia), ostudź, obierz. Przekrój wzdłuż; żółtka ostrożnie wyjmij do miski. Białka ułóż na półmisku.",
            tip: "To linia faszerowanych jaj — nie majonezowa sałatka jak [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa) i nie ogórkowa jak [mizeria](/pl/rezepte/mizeria).",
          },
          {
            text: "Rozetrzyj żółtka z majonezem, drobno pokrojonym szczypiorkiem, szczyptą soli i pieprzu do kremowej, smarownej masy. Opcjonalnie odrobina musztardy — bez dominacji. Masa ma błyszczeć, nie cieknąć.",
            tip: "Dobry majonez i świeży szczypiorek często w [sklepie polskim](/pl/blog/sklep-polski-zakupy) lub markecie; zamienniki: [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
          },
          {
            text: "Wypełnij białka łyżeczką lub rękawem cukierniczym. Posyp szczypiorkiem lub papryką. Chłodź co najmniej 30 minut, aż masa się ułoży.",
            tip: "Kontekst świąt opisowo: [menu wielkanocne](/pl/blog/menu-wielkanocne) — plan menu zostaje ownerem okazji; tu tylko cook.",
          },
          {
            text: "Podawaj na zimno jako półmisek bufetowy lub przystawkę. Obok [białej kiełbasy](/pl/rezepte/biala-kielbasa) i [pasztetu](/pl/rezepte/pasztet) często na zimnej półce — primary zostaje przy jajkach. Resztki przykryte w lodówce; higiena majonezu.",
            tip: "Niedzielne wyczucie: [obiad niedzielny](/pl/blog/obiad-niedzielny) — bez kradzieży primary.",
          },
        ],
        seoTitle: "Jajka faszerowane przepis | Żółtko majonez szczypiorek | Alemniam",
        seoDescription:
          "Jajka faszerowane — żółtko, majonez, szczypiorek. Na Wielkanoc, dwujęzycznie, jasno osobno od sałatki i mizerii.",
      },
    },
    ingredients: [
      {
        id: "jaj-1",
        name: { de: "Eier (Größe M/L)", pl: "Jajka (rozmiar M/L)" },
        amount: 8,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "jaj-2",
        name: { de: "Mayonnaise", pl: "Majonez" },
        amount: 4,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
        storeHintDe: "Supermarkt oder Polenladen — gute Qualität",
        substitute: {
          de: "Teilweise griechischer Joghurt — ehrlich als leichtere Variante benennen",
          pl: "Częściowo jogurt grecki — uczciwie jako lżejszy wariant",
        },
      },
      {
        id: "jaj-3",
        name: {
          de: "Schnittlauch, fein geschnitten",
          pl: "Szczypiorek, drobno pokrojony",
        },
        amount: 3,
        unit: { de: "EL", pl: "łyżki" },
        group: "produce",
      },
      {
        id: "jaj-4",
        name: { de: "Senf (optional)", pl: "Musztarda (opcjonalnie)" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "pantry",
      },
      {
        id: "jaj-5",
        name: { de: "Salz", pl: "Sól" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
      {
        id: "jaj-6",
        name: { de: "Schwarzer Pfeffer", pl: "Pieprz czarny" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
      {
        id: "jaj-7",
        name: {
          de: "Paprika edelsüß zum Bestreuen (optional)",
          pl: "Papryka słodka do oprószenia (opcjonalnie)",
        },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-21T12:00:00.000Z",
    updatedAt: "2026-07-21T12:00:00.000Z",
  },
  {
    id: "recipe-cwikla",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1541690325738-d4ba017004b6?w=1600&q=80",
    prepMinutes: 20,
    cookMinutes: 45,
    servings: 8,
    regionIds: [],
    occasionIds: ["occasion-wielkanoc", "occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-vegetarisch", "category-schnell"],
    relatedPostIds: [
      "post-wielkanoc",
      "post-polenladen",
      "post-ersatzprodukte-de",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Ćwikła",
        slug: "cwikla",
        excerpt:
          "Kalte Ćwikła: geriebene Rote Bete mit Meerrettich — scharfer Ostern-Relish. Klar ≠ warme Buraczki, ≠ Barszcz, ≠ Botwinka.",
        steps: [
          {
            text: "Rote Bete waschen, in Salzwasser weich kochen (oder vakuumierte gekochte nehmen). Abkühlen, schälen, grob bis mittel fein reiben — keine Würfel, kein Püree.",
            tip: "Das ist kalter Relish — keine warme Beilage wie [Buraczki](/de/rezepte/buraczki), keine Suppe wie [Barszcz](/de/rezepte/barszcz-czerwony) oder [Botwinka](/de/rezepte/botwinka).",
          },
          {
            text: "Geriebene Bete mit geriebenem Meerrettich (frisch oder Glas), etwas Essig oder Zitronensaft, Prise Zucker und Salz vermengen. Abschmecken: scharf-süß-säuerlich, nicht wässrig. Bei Bedarf mehr Meerrettich nachziehen.",
            tip: "Meerrettich und gute Bete oft im [Polenladen](/de/blog/polenladen-einkaufen); DE-Ersatz: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de) — Funktion vor Label.",
          },
          {
            text: "Mindestens 1–2 Stunden (besser über Nacht) kalt ziehen lassen, damit sich Schärfe und Farbe verbinden. Vor dem Servieren umrühren und nachwürzen.",
            tip: "Menüplatz Ostern descriptiv: [Wielkanoc Speiseplan](/de/blog/wielkanoc-speiseplan) — Speiseplan bleibt Anlass-Owner.",
          },
          {
            text: "Kalt in Schüssel oder Glas servieren zu Wurst, [Pasztet](/de/rezepte/pasztet), Ei und Brot. Neben [Biała kiełbasa](/de/rezepte/biala-kielbasa) klassisch. Hält einige Tage gekühlt; Farbe färbt — Handschuhe optional.",
          },
        ],
        seoTitle: "Ćwikła Rezept | Rote Bete Meerrettich | Alemniam",
        seoDescription:
          "Ćwikła — geriebene Rote Bete mit Meerrettich, kalt. Bilingual, klar getrennt von Buraczki, Barszcz und Botwinka.",
      },
      pl: {
        title: "Ćwikła",
        slug: "cwikla",
        excerpt:
          "Zimna ćwikła: tarty burak z chrzanem — ostry wielkanocny dodatek. Jasno ≠ ciepłe buraczki, ≠ barszcz, ≠ botwinka.",
        steps: [
          {
            text: "Ugotuj buraki w osolonej wodzie do miękkości (lub użyj gotowych gotowanych). Ostudź, obierz, zetrzyj na tarce o grubych/średnich oczkach — bez kostek i puree.",
            tip: "To zimny dodatek/relish — nie ciepły jak [buraczki](/pl/rezepte/buraczki), nie zupa jak [barszcz](/pl/rezepte/barszcz-czerwony) czy [botwinka](/pl/rezepte/botwinka).",
          },
          {
            text: "Wymieszaj tarty burak z startym chrzanem (świeżym lub ze słoika), odrobiną octu lub soku z cytryny, szczyptą cukru i soli. Dopraw: ostro-słodko-kwaśno, bez wodnistości. W razie potrzeby więcej chrzanu.",
            tip: "Chrzan i dobre buraki często w [sklepie polskim](/pl/blog/sklep-polski-zakupy); zamienniki: [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
          },
          {
            text: "Odstaw na zimno na 1–2 godziny (lepiej na noc), żeby ostrość i kolor się połączyły. Przed podaniem wymieszaj i dopraw.",
            tip: "Miejsce w menu opisowo: [menu wielkanocne](/pl/blog/menu-wielkanocne) — plan zostaje ownerem okazji.",
          },
          {
            text: "Podawaj na zimno w misce lub słoiku do kiełbasy, [pasztetu](/pl/rezepte/pasztet), jaj i chleba. Klasycznie obok [białej kiełbasy](/pl/rezepte/biala-kielbasa). Trzyma kilka dni w lodówce; barwi — rękawiczki opcjonalnie.",
          },
        ],
        seoTitle: "Ćwikła przepis | Burak chrzan | Alemniam",
        seoDescription:
          "Ćwikła — tarty burak z chrzanem, na zimno. Dwujęzycznie, jasno osobno od buraczków, barszczu i botwinki.",
      },
    },
    ingredients: [
      {
        id: "cwk-1",
        name: {
          de: "Rote Bete (roh zum Kochen oder vakuumiert gekocht)",
          pl: "Buraki (surowe do gotowania lub gotowane próżniowo)",
        },
        amount: 600,
        unit: { de: "g", pl: "g" },
        group: "produce",
        storeHintDe: "Supermarkt — vakuumiert spart Zeit",
      },
      {
        id: "cwk-2",
        name: {
          de: "Meerrettich, gerieben (frisch oder Glas)",
          pl: "Chrzan starty (świeży lub ze słoika)",
        },
        amount: 3,
        unit: { de: "EL", pl: "łyżki" },
        group: "polish",
        storeHintDe: "Polenladen — frisch gerieben bevorzugt",
        substitute: {
          de: "Fertiger Meerrettich aus dem Glas — Schärfe nach Geschmack",
          pl: "Gotowy chrzan ze słoika — ostrość według smaku",
        },
      },
      {
        id: "cwk-3",
        name: {
          de: "Essig (Wein- oder Apfelessig) oder Zitronensaft",
          pl: "Ocet (winny lub jabłkowy) albo sok z cytryny",
        },
        amount: 1,
        unit: { de: "EL", pl: "łyżka" },
        group: "pantry",
      },
      {
        id: "cwk-4",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "pantry",
      },
      {
        id: "cwk-5",
        name: { de: "Salz", pl: "Sól" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
      {
        id: "cwk-6",
        name: {
          de: "Schwarzer Pfeffer (optional)",
          pl: "Pieprz czarny (opcjonalnie)",
        },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-21T12:00:00.000Z",
    updatedAt: "2026-07-21T12:00:00.000Z",
  },
];
