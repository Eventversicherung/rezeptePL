import type { Recipe } from "@/types/content";

/**
 * Wave 13 Paket B — Kutia + Napoleonka.
 * Isolated for Integrator E: do not import into seed.ts until merge.
 * Affiliate: guide-only (no relatedProductIds / no catalog recipeIds).
 * No new blog pillar. NO Wuzetka.
 * Ownership: Kutia ≠ Makaron z makiem (Nudeln) ≠ Makowiec (Rolle) ≠ Kompot z suszu.
 * Napoleonka ≠ Szarlotka ≠ Sernik ≠ Mazurek ≠ Wuzetka (HOLD).
 * NO SEED_VERSION bump here. No commit/push.
 */
export const seedRecipesWave13B: Recipe[] = [
  {
    id: "recipe-kutia",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1558985212-fdbd3c3eb611?w=1600&q=80",
    prepMinutes: 25,
    cookMinutes: 90,
    servings: 8,
    regionIds: [],
    occasionIds: ["occasion-wigilia"],
    techniqueIds: [],
    categoryIds: [
      "category-suess",
      "category-vegetarisch",
      "category-hauptgerichte",
    ],
    relatedPostIds: [
      "post-wigilia",
      "post-makowiec-technik",
      "post-ersatzprodukte-de",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Kutia",
        slug: "kutia",
        excerpt:
          "Klassische Wigilia-Kutia aus Weizenkörnern, Mohn, Honig und Nüssen — süßes Getreide-Dessert, klar ≠ Makaron z makiem und ≠ Makowiec-Rolle.",
        steps: [
          {
            text: "Weizenkörner (geschälte Weizenbeeren / pszenica) waschen und in reichlich Wasser weich kochen, bis sie bissfest-weich sind (oft 60–90 Minuten; ggf. Vortag einweichen). Abgießen, abkühlen lassen.",
            tip: "Das sind ganze Körner in der Schüssel — keine Nudeln wie [Makaron z makiem](/de/rezepte/makaron-z-makiem). Menürahmen: [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
          },
          {
            text: "Blauen Mohn mit heißem Wasser oder Milch aufquellen lassen, abtropfen; möglichst mahlen oder fein zerreiben. Mit Honig (oder Zucker), gehackten Walnüssen oder Mandeln, Rosinen und optional Vanille/Zitronenschale zu einer bindenden, nicht trockenen Masse rühren.",
            tip: "Mohnqualität und Feiertagseinkauf: [Polenladen](/de/blog/polenladen-einkaufen). Masse-Feeling descriptiv wie [Makowiec-Technik](/de/blog/makowiec-technik) — Primary bleibt Getreide+Mohn, nicht die Hefe-Rolle.",
          },
          {
            text: "Weizen mit der Mohn-Nuss-Masse vermengen; bei Bedarf etwas Milch oder Honig für Glanz und Bindung. Abschmecken: süß, mohnig, nussig — nicht bitter, nicht sandig-trocken.",
            tip: "Kein Kompot hier — Getränk bleibt [Kompot z suszu](/de/rezepte/kompot-z-suszu). Ersatzlogik: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
          },
          {
            text: "Kühl stellen (oft besser nach einigen Stunden). In Schalen oder einer Schüssel servieren; optional mehr Nüsse oder Honig darüber. Reste abgedeckt im Kühlschrank.",
          },
        ],
        seoTitle: "Kutia Rezept | Weizen Mohn Wigilia | Alemniam",
        seoDescription:
          "Kutia — Weizenkörner mit Mohn, Honig und Nüssen. Wigilia-tauglich, bilingual. Klar getrennt von Makaron z makiem und Makowiec.",
      },
      pl: {
        title: "Kutia",
        slug: "kutia",
        excerpt:
          "Klasyczna wigilijna kutia z pszenicy, maku, miodu i orzechów — słodki deser zbożowy, jasno ≠ makaron z makiem i ≠ makowiec-rolada.",
        steps: [
          {
            text: "Opłucz ziarna pszenicy (obrane) i gotuj w dużej ilości wody do miękkości z lekkim gryzieniem (często 60–90 minut; ewentualnie namocz dzień wcześniej). Odcedź, ostudź.",
            tip: "To całe ziarna w misce — nie makaron jak [makaron z makiem](/pl/rezepte/makaron-z-makiem). Rama menu: [menu wigilijne](/pl/blog/menu-wigilijne).",
          },
          {
            text: "Mak niebieski zalej gorącą wodą lub mlekiem, odsącz; zmiel lub rozetrzyj. Wymieszaj z miodem (lub cukrem), posiekanymi orzechami włoskimi lub migdałami, rodzynkami oraz opcjonalnie wanilią/skórką cytryny do wiążącej, nie suchej masy.",
            tip: "Jakość maku i zakupy świąteczne: [sklep polski](/pl/blog/sklep-polski-zakupy). Wyczucie masy opisowo jak [technika makowca](/pl/blog/makowiec-technika) — primary zostaje zboże+mak, nie rolada drożdżowa.",
          },
          {
            text: "Wymieszaj pszenicę z masą makowo-orzechową; w razie potrzeby dodaj odrobinę mleka lub miodu. Dopraw: słodko, makowo, orzechowo — bez goryczy, bez piaszczystej suchości.",
            tip: "Bez kompotu tutaj — napój zostaje przy [kompocie z suszu](/pl/rezepte/kompot-z-suszu). Zamienniki: [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
          },
          {
            text: "Schłodź (często lepiej po kilku godzinach). Podawaj w miseczkach lub jednej misce; opcjonalnie więcej orzechów lub miodu. Resztki przykryte w lodówce.",
          },
        ],
        seoTitle: "Kutia przepis | Pszenica mak Wigilia | Alemniam",
        seoDescription:
          "Kutia — pszenica z makiem, miodem i orzechami. Na Wigilię, dwujęzycznie. Jasno osobno od makaronu z makiem i makowca.",
      },
    },
    ingredients: [
      {
        id: "kut-1",
        name: {
          de: "Weizenkörner (geschält / Weizenbeeren)",
          pl: "Pszenica (obrana / ziarna)",
        },
        amount: 300,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen — geschälte Weizenbeeren / pszenica",
        substitute: {
          de: "Perlgerste ehrlich als Ersatz benennen (≠ klassische Weizen-Kutia)",
          pl: "Pęczak nazwać uczciwie jako zamiennik (≠ klasyczna kutia z pszenicy)",
        },
      },
      {
        id: "kut-2",
        name: {
          de: "Blauer Mohn, gemahlen",
          pl: "Mak niebieski, mielony",
        },
        amount: 150,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen — frisch gemahlen bevorzugt",
        substitute: {
          de: "Ganze Samen selbst mahlen — ehrlich benennen",
          pl: "Całe ziarna zmiel samodzielnie — nazwać uczciwie",
        },
      },
      {
        id: "kut-3",
        name: { de: "Honig", pl: "Miód" },
        amount: 4,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "kut-4",
        name: {
          de: "Walnüsse oder Mandeln, gehackt",
          pl: "Orzechy włoskie lub migdały, posiekane",
        },
        amount: 100,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "kut-5",
        name: { de: "Rosinen", pl: "Rodzynki" },
        amount: 60,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "kut-6",
        name: {
          de: "Milch oder Wasser (zum Aufquellen / Binden)",
          pl: "Mleko lub woda (do namoczenia / wiązania)",
        },
        amount: 200,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "kut-7",
        name: {
          de: "Vanille oder Zitronenschale (optional)",
          pl: "Wanilia lub skórka cytryny (opcjonalnie)",
        },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
      {
        id: "kut-8",
        name: { de: "Prise Salz (Kochwasser)", pl: "Szczypta soli (woda)" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-21T11:00:00.000Z",
    updatedAt: "2026-07-21T11:00:00.000Z",
  },
  {
    id: "recipe-napoleonka",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1659275798960-ca2c2056d516?w=1600&q=80",
    prepMinutes: 45,
    cookMinutes: 35,
    servings: 12,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-suess", "category-vegetarisch"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-ersatzprodukte-de",
      "post-polenladen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Napoleonka / Kremówka",
        slug: "napoleonka",
        excerpt:
          "Haus-Napoleonka (Kremówka): Blätterteig-Schichten mit Vanillecreme — millefeuille-ähnlich. Klar ≠ Szarlotka, ≠ Sernik, ≠ Wuzetka.",
        steps: [
          {
            text: "Fertigen Blätterteig (oder selbst gemacht) auf zwei bis drei Blechen zu dünnen Platten ausrollen; mehrfach mit Gabel einstechen. Bei heißer Ofentemperatur goldbraun und knusprig backen; abkühlen, in Rechtecke schneiden.",
            tip: "Das ist Blätterteig+Creme — kein Apfelkuchen wie [Szarlotka](/de/rezepte/szarlotka) und kein Käsekuchen wie [Sernik](/de/rezepte/sernik).",
          },
          {
            text: "Vanillecreme (budyń-artig oder klassische Puddingcreme): Milch mit Vanille erhitzen; Eigelb, Zucker und Speisestärke verrühren, einrühren, dicklich kochen; Butter unterziehen. Abdecken und lauwarm bis kühl werden lassen — streichfähig, nicht flüssig.",
            tip: "Vanille und Stärke oft im [Polenladen](/de/blog/polenladen-einkaufen) oder Supermarkt; Ersatz: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Keine Schoko-Sahne-Torte (Wuzetka bleibt HOLD).",
          },
          {
            text: "Abwechselnd Teigplatte und Creme schichten (meist 2–3 Teiglagen). Oben mit Puderzucker bestäuben oder dünn glasieren. Mindestens 2–3 Stunden kühlen, damit sich schneiden lässt.",
            tip: "Sonntagskaffee-Feeling descriptiv: [polnisches Sonntagsessen](/de/blog/sonntagsessen-polnisch) — Primary bleibt Napoleonka/Kremówka.",
          },
          {
            text: "Mit scharfem Messer in Rechtecke schneiden; kalt servieren. Reste abgedeckt im Kühlschrank — Teig weicht mit der Zeit etwas auf, Geschmack bleibt.",
          },
        ],
        seoTitle: "Napoleonka Rezept | Kremówka | Alemniam",
        seoDescription:
          "Napoleonka / Kremówka — Blätterteig mit Vanillecreme. Bilingual, klar getrennt von Szarlotka, Sernik und Wuzetka.",
      },
      pl: {
        title: "Napoleonka / kremówka",
        slug: "napoleonka",
        excerpt:
          "Domowa napoleonka (kremówka): warstwy ciasta francuskiego z kremem waniliowym — w stylu millefeuille. Jasno ≠ szarlotka, ≠ sernik, ≠ wuzetka.",
        steps: [
          {
            text: "Ciasto francuskie (gotowe lub własne) rozwałkuj na 2–3 cienkie blachy; nakłuj widelcem. Piecz na złoto w wysokiej temperaturze; ostudź, pokrój w prostokąty.",
            tip: "To ciasto francuskie+krem — nie jabłecznik jak [szarlotka](/pl/rezepte/szarlotka) i nie sernik jak [sernik](/pl/rezepte/sernik).",
          },
          {
            text: "Krem waniliowy (budyniowy lub klasyczny): podgrzej mleko z wanilią; wymieszaj żółtka, cukier i skrobię, wlej, gotuj do gęstości; włącz masło. Przykryj i ostudź do smarowności — nie ma być płynny.",
            tip: "Wanilia i skrobia często w [sklepie polskim](/pl/blog/sklep-polski-zakupy) lub markecie; zamienniki: [zamienniki składników](/pl/blog/zamienniki-skladnikow). Bez tortu czekoladowo-śmietankowego (wuzetka zostaje HOLD).",
          },
          {
            text: "Układaj na przemian płat ciasta i krem (zwykle 2–3 warstwy ciasta). Wierzch oprósz cukrem pudrem lub lekko lukruj. Chłodź co najmniej 2–3 godziny przed krojeniem.",
            tip: "Kawowe niedzielne wyczucie opisowo: [obiad niedzielny](/pl/blog/obiad-niedzielny) — primary zostaje napoleonka/kremówka.",
          },
          {
            text: "Ostrym nożem pokrój w prostokąty; podawaj na zimno. Resztki przykryte w lodówce — ciasto z czasem mięknie, smak zostaje.",
          },
        ],
        seoTitle: "Napoleonka przepis | Kremówka | Alemniam",
        seoDescription:
          "Napoleonka / kremówka — ciasto francuskie z kremem waniliowym. Dwujęzycznie, jasno osobno od szarlotki, sernika i wuzetki.",
      },
    },
    ingredients: [
      {
        id: "nap-1",
        name: {
          de: "Blätterteig (fertig oder selbst)",
          pl: "Ciasto francuskie (gotowe lub własne)",
        },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Supermarkt — all-butter bevorzugt",
      },
      {
        id: "nap-2",
        name: { de: "Vollmilch", pl: "Mleko pełne" },
        amount: 700,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "nap-3",
        name: { de: "Eigelb", pl: "Żółtka" },
        amount: 4,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "nap-4",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 120,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "nap-5",
        name: {
          de: "Speisestärke / Puddingpulver Vanille",
          pl: "Skrobia / budyń waniliowy",
        },
        amount: 60,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Supermarkt oder Polenladen",
      },
      {
        id: "nap-6",
        name: { de: "Butter", pl: "Masło" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "nap-7",
        name: {
          de: "Vanille (Extrakt oder Mark)",
          pl: "Wanilia (ekstrakt lub miąższ)",
        },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
      {
        id: "nap-8",
        name: {
          de: "Puderzucker zum Bestäuben",
          pl: "Cukier puder do oprószenia",
        },
        amount: 3,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-21T11:00:00.000Z",
    updatedAt: "2026-07-21T11:00:00.000Z",
  },
];
