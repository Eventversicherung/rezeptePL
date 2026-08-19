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
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-galareta/28e5cd62-5aae-45e9-9997-27d4cba666bf.webp",
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
          "Kalte Sülze aus Schweinefüßen mit klarem Gelee und zarten Fleischstücken, ein Fest- und Buffet-Klassiker der polnischen Küche.",
        steps: [
          {
            text: "Schweinefüße (nóźki) und etwas Schweinefleisch mit Knochen kalt abspülen. Mit Zwiebel, Karotte, Sellerie, Lorbeer, Piment und Pfefferkörnern in reichlich Wasser ansetzen, aufkochen und den Schaum abschöpfen. Sehr sanft 3 bis 3,5 Stunden köcheln, bis das Fleisch sich vom Knochen löst und die Brühe deutlich klebrig wird.",
            tip: "Das ist Aspik und Sülze, keine Pastete wie der [Pasztet](/de/rezepte/pasztet) und kein Mayo-Salat wie die [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa).",
          },
          {
            text: "Fleisch herausnehmen, Knochen und Haut entfernen, das Fleisch in mundgerechte Stücke zupfen oder schneiden. Die Brühe durch ein feines Sieb, optional mit einem Tuch, klären und das Fett oben abschöpfen. Mit Salz und gehacktem Knoblauch abschmecken, denn kalt tritt der Geschmack zurück, weshalb die Brühe etwas kräftiger schmecken darf als eine Suppe.",
            tip: "Gute nóźki und die passenden Gewürze findest du oft im [Polenladen](/de/blog/polenladen-einkaufen), Ersatzlogik erklärt der Beitrag zu [Ersatzprodukten DE](/de/blog/ersatzprodukte-de).",
          },
          {
            text: "Fleisch und optional Karottenscheiben in Formen oder eine flache Schüssel schichten. Die heiße, geklärte Brühe darübergießen, sodass alles bedeckt ist. Abkühlen lassen, dann mindestens 6 bis 8 Stunden, besser über Nacht, im Kühlschrank fest werden lassen, bis das Gelee klar und schnittfest ist.",
            tip: "Zum Menü passt der [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan) oder der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch), der Anlass bleibt dort, hier geht es nur um das Rezept.",
          },
          {
            text: "Zum Servieren aus der Form stürzen oder in Scheiben beziehungsweise Würfel schneiden. Kalt mit Essig, Meerrettich oder Senf servieren. Auf der kalten Platte steht sie oft neben [Jajka faszerowane](/de/rezepte/jajka-faszerowane) und hält gekühlt 2 bis 3 Tage.",
            tip: "Kein warmer Topf und keine Pastetenmasse, die Galareta bleibt klar getrennt vom [Pasztet](/de/rezepte/pasztet).",
          },
        ],
        seoTitle: "Galareta Rezept | Nóźki w galarecie Aspik | Alemniam",
        seoDescription:
          "Galareta / nóźki w galarecie: klares Fleischgelee, kalt serviert und deutlich anders als Pasztet oder Mayo-Salat.",
      },
      pl: {
        title: "Galareta / nóźki w galarecie",
        slug: "galareta",
        excerpt:
          "Zimna galareta z nóżek z klarowną galaretką i kawałkami mięsa, klasyk świątecznego bufetu w polskiej kuchni.",
        steps: [
          {
            text: "Nóżki wieprzowe i odrobinę mięsa z kością opłucz na zimno. Zalej wodą razem z cebulą, marchewką, selerem, liściem laurowym, zielem angielskim i pieprzem, zagotuj i zbierz szumowiny. Gotuj bardzo delikatnie 3 do 3,5 godziny, aż mięso odejdzie od kości, a wywar zrobi się wyraźnie kleisty.",
            tip: "To aspik, czyli galareta, nie pasta jak [pasztet](/pl/rezepte/pasztet) i nie sałatka majonezowa jak [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa).",
          },
          {
            text: "Wyjmij mięso, usuń kości i skórę, rozdrobnij lub pokrój je na kawałki. Wywar przecedź przez sito, opcjonalnie przez płótno, i zbierz tłuszcz z powierzchni. Dopraw solą i drobno posiekanym czosnkiem, bo na zimno smak łagodnieje, więc wywar może być teraz odrobinę bardziej wyrazisty niż zwykła zupa.",
            tip: "Dobre nóżki i przyprawy często kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy), o zamiennikach pisze wpis o [zamiennikach składników](/pl/blog/zamienniki-skladnikow).",
          },
          {
            text: "Ułóż mięso i opcjonalnie plasterki marchewki w foremkach lub płaskiej misce. Zalej gorącym, klarownym wywarem, tak żeby wszystko było przykryte. Ostudź, a potem chłodź co najmniej 6 do 8 godzin, najlepiej przez całą noc, aż galaretka będzie klarowna i dobrze się kroić.",
            tip: "Do menu pasuje [menu wielkanocne](/pl/blog/menu-wielkanocne) lub [obiad niedzielny](/pl/blog/obiad-niedzielny), okazja zostaje tam, tu liczy się tylko przepis.",
          },
          {
            text: "Wyjmij z foremki albo pokrój w kostkę. Podawaj na zimno z octem, chrzanem lub musztardą. Na zimnej półmisce często stoi obok [jajek faszerowanych](/pl/rezepte/jajka-faszerowane) i trzyma się 2 do 3 dni w lodówce.",
            tip: "Bez gorącego garnka i bez masy pasztetowej, galareta zostaje jasno osobno od [pasztetu](/pl/rezepte/pasztet).",
          },
        ],
        seoTitle: "Galareta przepis | Nóźki w galarecie | Alemniam",
        seoDescription:
          "Galareta / nóźki w galarecie: klarowna galaretka mięsna na zimno, inna niż pasztet czy sałatka jarzynowa.",
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
        storeHintDe: "Polenladen oder Metzger, kollagenreich für das Gelee",
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
          de: "Senf als ehrlich benannte scharfe Alternative",
          pl: "Musztarda jako uczciwie nazwana ostra alternatywa",
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
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-salatka-sledziowa/217de80a-a53b-4bc0-be52-f8f5b426a592.webp",
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
          "Cremiger Heringssalat mit Mayonnaise, Zwiebel und Apfel, ein fester Buffet- und Wigilia-Klassiker in der polnischen Küche.",
        steps: [
          {
            text: "Matjes oder eingelegte Heringfilets abtropfen lassen und in mundgerechte Würfel schneiden. Zwiebel fein würfeln, wer die Schärfe mildern will, übergießt sie kurz mit heißem Wasser. Apfel schälen und würfeln, hartgekochte Eier und Gewürzgurken ebenfalls würfeln.",
            tip: "Das ist ein Mayo-Salat mit Hering, keine reinen Filets in Öl wie der [Śledź w oleju](/de/rezepte/sledz) und kein Gemüse-Mayo-Salat ohne Fisch wie die [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa).",
          },
          {
            text: "Hering, Zwiebel, Apfel, Ei und Gurke in einer Schüssel vermengen. Mayonnaise, optional etwas Śmietana, unterheben, bis alles cremig gebunden ist und nichts mehr schwimmt. Mit Salz, Pfeffer und einer Prise Zucker abschmecken.",
            tip: "Gute Filets und Mayonnaise findest du oft im [Polenladen](/de/blog/polenladen-einkaufen), Alternativen beschreibt der Beitrag zu [Ersatzprodukten DE](/de/blog/ersatzprodukte-de).",
          },
          {
            text: "Mindestens 1 bis 2 Stunden kalt durchziehen lassen, damit sich die Aromen verbinden. Vor dem Servieren noch einmal umrühren und nachwürzen, die Cremigkeit sollte dabei sichtbar bleiben.",
            tip: "Ihren Menüplatz bei der Wigilia beschreibt der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan), der Speiseplan bleibt der Menü-Rahmen, hier geht es nur um das Rezept.",
          },
          {
            text: "Kalt in einer Schüssel servieren, optional mit etwas Schnittlauch. Auf dem Tisch steht sie oft neben Öl-Hering, der Fokus bleibt aber dieser Mayo-Salat. Wegen der Mayonnaise die Sałatka bis kurz vor dem Servieren gekühlt halten.",
            tip: "Die Öl-Linie bleibt beim [Śledź](/de/rezepte/sledz), Festgemüse mit Mayo bei der [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa).",
          },
        ],
        seoTitle: "Sałatka śledziowa Rezept | Heringssalat Mayo | Alemniam",
        seoDescription:
          "Sałatka śledziowa: cremiger Heringssalat mit Mayonnaise, deutlich anders als Śledź w oleju oder Sałatka jarzynowa.",
      },
      pl: {
        title: "Sałatka śledziowa",
        slug: "salatka-sledziowa",
        excerpt:
          "Kremowa sałatka śledziowa z majonezem, cebulą i jabłkiem, stały klasyk bufetu i wigilijnego stołu.",
        steps: [
          {
            text: "Matjasy lub filety śledziowe odsącz i pokrój w kostkę. Cebulę drobno posiekaj, a jeśli chcesz zmniejszyć jej ostrość, krótko zalej wrzątkiem. Jabłko obierz i pokrój, jajka na twardo oraz ogórki kiszone lub konserwowe również pokrój w kostkę.",
            tip: "To sałatka majonezowa ze śledziem, nie same filety w oleju jak [śledź w oleju](/pl/rezepte/sledz) i nie warzywna sałatka bez ryby jak [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa).",
          },
          {
            text: "Wymieszaj śledzia, cebulę, jabłko, jajko i ogórek w misce. Dodaj majonez, opcjonalnie odrobinę śmietany, i wmieszaj, aż masa będzie kremowa, a nie rzadka. Dopraw solą, pieprzem i szczyptą cukru.",
            tip: "Dobre filety i majonez często kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy), o zamiennikach pisze wpis o [zamiennikach składników](/pl/blog/zamienniki-skladnikow).",
          },
          {
            text: "Chłodź co najmniej 1 do 2 godzin, żeby smaki się przegryzły. Przed podaniem wymieszaj i ewentualnie dopraw, kremowość powinna być dobrze widoczna.",
            tip: "Jej miejsce na Wigilii opisuje [menu wigilijne](/pl/blog/menu-wigilijne), plan zostaje ramą stołu, tu chodzi tylko o przepis.",
          },
          {
            text: "Podawaj na zimno, opcjonalnie ze szczypiorkiem. Na stole może stać obok śledzia w oleju, ale fokus zostaje przy tej majonezowej sałatce. Z powodu majonezu trzymaj ją w chłodzie do samego podania.",
            tip: "Linia olejowa zostaje przy [śledziu](/pl/rezepte/sledz), warzywa z majonezem przy [sałatce jarzynowej](/pl/rezepte/salatka-jarzynowa).",
          },
        ],
        seoTitle: "Sałatka śledziowa przepis | Majonez cebula jabłko | Alemniam",
        seoDescription:
          "Sałatka śledziowa: kremowa sałatka z majonezem, inna niż śledź w oleju czy sałatka jarzynowa.",
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
        storeHintDe: "Polenladen, gute Filets, nicht zu salzig",
      },
      {
        id: "ssl-2",
        name: { de: "Mayonnaise", pl: "Majonez" },
        amount: 5,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
        storeHintDe: "Supermarkt oder Polenladen, gute Qualität",
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
          de: "Nur Mayonnaise, etwas mehr davon, ehrlich als festere Variante benannt",
          pl: "Sam majonez, trochę więcej, uczciwie nazwany jako gęstszy wariant",
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
