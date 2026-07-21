import type { Recipe } from "@/types/content";

/**
 * Wave 15 Paket B — Fest / Wigilia-Buffet (Galareta + Sałatka śledziowa).
 * Isolated for Integrator E: do not import into seed.ts until merge.
 * Affiliate: guide-only (no relatedProductIds / no catalog recipeIds).
 * No new blog pillar.
 * Ownership:
 * - Galareta / nóźki w galarecie ≠ Pasztet ≠ Sałatka ≠ Jajka faszerowane
 * - Sałatka śledziowa ≠ Śledź w oleju ≠ Sałatka jarzynowa
 * Wigilia / Wielkanoc / Sonntagsessen bleiben Anlass-/Kultur-Owner.
 * NO SEED_VERSION bump here. No commit/push.
 */
export const seedRecipesWave15B: Recipe[] = [
  {
    id: "recipe-galareta",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1750874694799-ab25e24549d3?w=1600&q=80",
    prepMinutes: 40,
    cookMinutes: 210,
    servings: 8,
    regionIds: [],
    occasionIds: ["occasion-wielkanoc", "occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-hauptgerichte"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-polenladen",
      "post-wielkanoc",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Galareta / nóźki w galarecie",
        slug: "galareta",
        excerpt:
          "Kalte Sülze aus Schweinefüßen: klares Gelee mit Fleischstücken — Fest- und Buffet-Klassiker. Klar ≠ Pasztet und ≠ Mayo-Salat.",
        steps: [
          {
            text: "Schweinefüße (nóźki) und etwas Schweinefleisch mit Knochen kalt abspülen. Mit Zwiebel, Karotte, Sellerie, Lorbeer, Piment und Pfefferkörnern in reichlich Wasser ansetzen; aufkochen, Schaum abschöpfen. Sehr sanft 3–3,5 Stunden köcheln, bis das Fleisch sich vom Knochen löst und die Brühe stark gelieren würde.",
            tip: "Das ist Aspik/Sülze — keine Pastete wie [Pasztet](/de/rezepte/pasztet) und kein Mayo-Salat wie [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa).",
          },
          {
            text: "Fleisch herausnehmen, Knochen und Haut entfernen, Fleisch in mundgerechte Stücke zupfen oder schneiden. Brühe durch ein feines Sieb (optional mit Tuch) klären; Fett oben abschöpfen. Mit Salz und gehacktem Knoblauch abschmecken — die Brühe darf etwas kräftiger salzen als eine Suppe, weil kalt der Geschmack zurückgeht.",
            tip: "Gute nóźki und Gewürze oft im [Polenladen](/de/blog/polenladen-einkaufen); DE-Ersatzlogik: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
          },
          {
            text: "Fleisch und optional Karottenscheiben in Formen oder eine flache Schüssel schichten. Heiße, geklärte Brühe darüber gießen, sodass alles bedeckt ist. Abkühlen, dann mindestens 6–8 Stunden (besser über Nacht) im Kühlschrank fest werden lassen — das Gelee muss klar und schnittfest sein.",
            tip: "Menü-Kontext descriptiv: [Wielkanoc Speiseplan](/de/blog/wielkanoc-speiseplan) oder [Sonntagsessen](/de/blog/sonntagsessen-polnisch) — Anlass bleibt Owner; hier nur Cook.",
          },
          {
            text: "Zum Servieren aus der Form stürzen oder in Scheiben/Würfel schneiden. Kalt mit Essig, Meerrettich oder Senf. Neben [Jajka faszerowane](/de/rezepte/jajka-faszerowane) oft auf der kalten Platte — Fokus bleibt Galareta. Hält 2–3 Tage gekühlt.",
            tip: "Kein warmer Topf, keine Pastetenmasse: klar getrennt von [Pasztet](/de/rezepte/pasztet).",
          },
        ],
        seoTitle: "Galareta Rezept | Nóźki w galarecie Aspik | Alemniam",
        seoDescription:
          "Galareta / nóźki w galarecie — klares Fleischgelee, kalt. Bilingual, klar getrennt von Pasztet und Mayo-Salat.",
      },
      pl: {
        title: "Galareta / nóźki w galarecie",
        slug: "galareta",
        excerpt:
          "Zimna galareta z nóżek: klarna galaretka z kawałkami mięsa — klasyk bufetu. Jasno ≠ pasztet i ≠ sałatka majonezowa.",
        steps: [
          {
            text: "Nóżki wieprzowe i odrobinę mięsa z kością opłucz. Z cebulą, marchewką, selerem, liściem laurowym, zielem angielskim i pieprzem zalej wodą; zagotuj, zbierz szumowiny. Gotuj bardzo delikatnie 3–3,5 godziny, aż mięso odejdzie od kości, a wywar mocno żeluje.",
            tip: "To aspik/galareta — nie pasta jak [pasztet](/pl/rezepte/pasztet) i nie sałatka majonezowa jak [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa).",
          },
          {
            text: "Wyjmij mięso, usuń kości i skórę, rozdrobnij lub pokrój. Wywar przecedź przez sito (opcjonalnie przez płótno); zbierz tłuszcz. Dopraw solą i drobno posiekanym czosnkiem — na zimno smak łagodnieje, więc wywar może być nieco bardziej wyrazisty.",
            tip: "Dobre nóżki i przyprawy często w [sklepie polskim](/pl/blog/sklep-polski-zakupy); zamienniki: [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
          },
          {
            text: "Ułóż mięso i opcjonalnie plasterki marchewki w foremkach lub płaskiej misce. Zalej gorącym, klarownym wywarem. Ostudź, potem chłodź 6–8 godzin (lepiej na noc) — galaretka ma być klarowna i krajalna.",
            tip: "Kontekst menu opisowo: [menu wielkanocne](/pl/blog/menu-wielkanocne) lub [obiad niedzielny](/pl/blog/obiad-niedzielny) — okazja zostaje ownerem; tu tylko cook.",
          },
          {
            text: "Wyjmij z foremki lub pokrój. Podawaj na zimno z octem, chrzanem lub musztardą. Obok [jajek faszerowanych](/pl/rezepte/jajka-faszerowane) często na zimnej półce — fokus zostaje przy galarecie. Trzyma 2–3 dni w lodówce.",
            tip: "Bez gorącego garnka i masy pasztetowej: jasno osobno od [pasztetu](/pl/rezepte/pasztet).",
          },
        ],
        seoTitle: "Galareta przepis | Nóźki w galarecie | Alemniam",
        seoDescription:
          "Galareta / nóźki w galarecie — klarna galaretka mięsna, na zimno. Dwujęzycznie, jasno osobno od pasztetu i sałatki.",
      },
    },
    ingredients: [
      {
        id: "gal-1",
        name: {
          de: "Schweinefüße (nóźki), geputzt",
          pl: "Nóżki wieprzowe, oczyszczone",
        },
        amount: 1.2,
        unit: { de: "kg", pl: "kg" },
        group: "polish",
        storeHintDe: "Polenladen / Metzger — kollagenreich für Gelee",
      },
      {
        id: "gal-2",
        name: {
          de: "Schweinefleisch mit Knochen (Schulter/Haxe-Fleisch)",
          pl: "Mięso wieprzowe z kością (łopatka/golonka)",
        },
        amount: 600,
        unit: { de: "g", pl: "g" },
        group: "other",
      },
      {
        id: "gal-3",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "gal-4",
        name: { de: "Karotte", pl: "Marchew" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "gal-5",
        name: {
          de: "Sellerieknolle oder Stange",
          pl: "Seler (korzeń lub łodyga)",
        },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "gal-6",
        name: { de: "Lorbeerblatt", pl: "Liść laurowy" },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
      {
        id: "gal-7",
        name: { de: "Pimentkörner", pl: "Ziele angielskie" },
        amount: 6,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
      {
        id: "gal-8",
        name: { de: "Schwarze Pfefferkörner", pl: "Pieprz czarny ziarnisty" },
        amount: 10,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
      {
        id: "gal-9",
        name: { de: "Knoblauchzehen", pl: "Ząbki czosnku" },
        amount: 4,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "gal-10",
        name: { de: "Salz", pl: "Sól" },
        amount: 2,
        unit: { de: "TL", pl: "łyżeczki" },
        group: "spices",
      },
      {
        id: "gal-11",
        name: {
          de: "Essig oder Meerrettich zum Servieren",
          pl: "Ocet lub chrzan do podania",
        },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
        substitute: {
          de: "Senf — ehrlich als scharfe Alternative",
          pl: "Musztarda — uczciwie jako ostra alternatywa",
        },
      },
    ],
    createdAt: "2026-07-21T12:00:00.000Z",
    updatedAt: "2026-07-21T12:00:00.000Z",
  },
  {
    id: "recipe-salatka-sledziowa",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1719403196215-304b79398cad?w=1600&q=80",
    prepMinutes: 30,
    cookMinutes: 15,
    servings: 6,
    regionIds: [],
    occasionIds: ["occasion-wigilia", "occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-schnell", "category-vegetarisch"],
    relatedPostIds: [
      "post-wigilia",
      "post-polenladen",
      "post-ersatzprodukte-de",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Sałatka śledziowa",
        slug: "salatka-sledziowa",
        excerpt:
          "Cremiger Heringssalat mit Mayo, Zwiebel und Apfel — Buffet- und Wigilia-Klassiker. Klar ≠ Śledź w oleju und ≠ Sałatka jarzynowa.",
        steps: [
          {
            text: "Matjes oder eingelegte Heringfilets abtropfen, in mundgerechte Würfel schneiden. Zwiebel fein würfeln (optional kurz mit heißem Wasser übergießen gegen Schärfe). Apfel schälen, würfeln; hartgekochte Eier und Gewürzgurken würfeln.",
            tip: "Das ist Mayo-Salat mit Hering — keine reinen Filets in Öl wie [Śledź w oleju](/de/rezepte/sledz) und kein Gemüse-Mayo-Topf ohne Fisch wie [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa).",
          },
          {
            text: "Hering, Zwiebel, Apfel, Ei und Gurke in einer Schüssel vermengen. Mayonnaise (optional etwas Śmietana) unterheben, bis alles cremig gebunden ist — nicht schwimmend. Mit Salz, Pfeffer und Prise Zucker abschmecken.",
            tip: "Gute Filets und Mayo oft im [Polenladen](/de/blog/polenladen-einkaufen); Ersatz: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
          },
          {
            text: "Mindestens 1–2 Stunden kalt ziehen lassen, damit sich Aromen verbinden. Vor dem Servieren umrühren und nachwürzen — die Cremigkeit muss sichtbar bleiben.",
            tip: "Menüplatz Wigilia descriptiv: [Wigilia Speiseplan](/de/blog/wigilia-speiseplan) — Speiseplan bleibt Anlass-Owner; hier nur Cook.",
          },
          {
            text: "Kalt in Schüssel servieren, optional mit Schnittlauch. Neben Öl-Hering auf dem Tisch möglich — Fokus bleibt dieser Mayo-Salat. Mayo-Hygiene: gekühlt halten.",
            tip: "Abgrenzung bleibt: Öl-Linie = [Śledź](/de/rezepte/sledz); Festgemüse-Mayo = [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa).",
          },
        ],
        seoTitle: "Sałatka śledziowa Rezept | Heringssalat Mayo | Alemniam",
        seoDescription:
          "Sałatka śledziowa — cremiger Heringssalat mit Mayo. Bilingual, klar getrennt von Śledź w oleju und Sałatka jarzynowa.",
      },
      pl: {
        title: "Sałatka śledziowa",
        slug: "salatka-sledziowa",
        excerpt:
          "Kremowa sałatka śledziowa z majonezem, cebulą i jabłkiem — klasyk bufetu i Wigilii. Jasno ≠ śledź w oleju i ≠ sałatka jarzynowa.",
        steps: [
          {
            text: "Matjasy lub filety śledziowe odsącz, pokrój w kostkę. Cebulę drobno posiekaj (opcjonalnie zalej wrzątkiem). Jabłko obierz i pokrój; jajka na twardo i ogórki kiszone/konserwowe pokrój w kostkę.",
            tip: "To sałatka majonezowa ze śledziem — nie same filety w oleju jak [śledź w oleju](/pl/rezepte/sledz) i nie warzywny garnek bez ryby jak [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa).",
          },
          {
            text: "Wymieszaj śledzia, cebulę, jabłko, jajko i ogórek. Dodaj majonez (opcjonalnie odrobinę śmietany), aż masa będzie kremowa — nie rzadka. Dopraw solą, pieprzem i szczyptą cukru.",
            tip: "Dobre filety i majonez często w [sklepie polskim](/pl/blog/sklep-polski-zakupy); zamienniki: [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
          },
          {
            text: "Chłodź 1–2 godziny. Przed podaniem wymieszaj i dopraw — kremowość ma być widoczna.",
            tip: "Miejsce w menu opisowo: [menu wigilijne](/pl/blog/menu-wigilijne) — plan zostaje ownerem okazji; tu tylko cook.",
          },
          {
            text: "Podawaj na zimno, opcjonalnie ze szczypiorkiem. Obok śledzia w oleju możliwe — fokus zostaje przy tej majonezowej sałatce. Higiena majonezu: trzymać zimno.",
            tip: "Na stole: olej = [śledź](/pl/rezepte/sledz); warzywa majonezowe = [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa).",
          },
        ],
        seoTitle: "Sałatka śledziowa przepis | Majonez cebula jabłko | Alemniam",
        seoDescription:
          "Sałatka śledziowa — kremowa z majonezem. Dwujęzycznie, jasno osobno od śledzia w oleju i sałatki jarzynowej.",
      },
    },
    ingredients: [
      {
        id: "ssl-1",
        name: {
          de: "Matjes- oder Salzheringfilets (abgetropft)",
          pl: "Filety matjasów lub śledzi solonych (odsączone)",
        },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen — gute Filets, nicht zu salzig",
      },
      {
        id: "ssl-2",
        name: { de: "Mayonnaise", pl: "Majonez" },
        amount: 5,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
        storeHintDe: "Supermarkt oder Polenladen — gute Qualität",
      },
      {
        id: "ssl-3",
        name: {
          de: "Śmietana / saure Sahne (optional)",
          pl: "Śmietana (opcjonalnie)",
        },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "dairy",
        substitute: {
          de: "Nur Mayo — etwas mehr, ehrlich als festere Variante",
          pl: "Sam majonez — trochę więcej, uczciwie jako gęstszy wariant",
        },
      },
      {
        id: "ssl-4",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "große", pl: "duża" },
        group: "produce",
      },
      {
        id: "ssl-5",
        name: {
          de: "Apfel (säuerlich, z. B. Boskoop)",
          pl: "Jabłko (kwaskowe)",
        },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "ssl-6",
        name: { de: "Eier, hart gekocht", pl: "Jajka na twardo" },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "ssl-7",
        name: {
          de: "Gewürzgurken oder Salzgurken",
          pl: "Ogórki konserwowe lub kiszone",
        },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "polish",
      },
      {
        id: "ssl-8",
        name: { de: "Salz", pl: "Sól" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
      {
        id: "ssl-9",
        name: { de: "Schwarzer Pfeffer", pl: "Pieprz czarny" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
      {
        id: "ssl-10",
        name: { de: "Zucker (Prise)", pl: "Cukier (szczypta)" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "pantry",
      },
      {
        id: "ssl-11",
        name: {
          de: "Schnittlauch zum Bestreuen (optional)",
          pl: "Szczypiorek do posypania (opcjonalnie)",
        },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "produce",
      },
    ],
    createdAt: "2026-07-21T12:00:00.000Z",
    updatedAt: "2026-07-21T12:00:00.000Z",
  },
];
