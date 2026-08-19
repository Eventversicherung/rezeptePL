import type { Recipe } from "@/types/content";

/**
 * Wave 15 Paket A — Festfleisch (+2).
 * - recipe-kaczka — Ofenente mit Apfel/Majoran (≠ Schab / Golonka / Żeberka)
 * - recipe-pieczen-rzymska — Ofen-Hackbraten mit Ei-Kern (≠ Kotlet mielony / Pasztet)
 *
 * Integrator E: merge into seed aggregator + recipe-articles + related maps.
 * Affiliate: guide-only (no relatedProductIds).
 * NO SEED_VERSION bump here. No commit/push.
 */
export const seedRecipesWave15A: Recipe[] = [
  {
    id: "recipe-kaczka",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-kaczka/b37d0905-1d46-4a90-95e4-7bfa5acfdca7.webp",
    prepMinutes: 35,
    cookMinutes: 120,
    servings: 6,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-hauptgerichte"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-majeranek",
      "post-polenladen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Kaczka pieczona",
        slug: "kaczka",
        excerpt:
          "Polnische Ofenente mit Apfel und Majoran, ein festlicher Braten vom ganzen Vogel mit knuspriger Haut und saftigem Fleisch.",
        steps: [
          {
            text: "Ente (ca. 2 bis 2,5 kg) innen und außen trocken tupfen und überschüssiges Fett an der Öffnung entfernen. Mit Salz, Pfeffer und Majoran einreiben, auch in der Bauchhöhle. Apfelviertel und optional etwas Zwiebel locker einfüllen und die Öffnung mit einem Zahnstocher oder Küchengarn schließen.",
            tip: "Das ist die ganze oder halbe Ente aus dem Ofen, also ein anderes Gericht als der [Schab pieczony](/de/rezepte/schab-pieczony) oder die [Golonka](/de/rezepte/golonka). Mehr zum Gewürz erklärt der [Majeranek](/de/blog/majeranek)-Beitrag.",
          },
          {
            text: "Den Ofen auf 180 °C Ober- und Unterhitze vorheizen. Die Ente mit der Brustseite nach oben in eine feste Form legen und etwas Wasser oder leichte Brühe auf den Boden geben. Die ersten 20 Minuten bei 200 °C anbräunen, dann die Temperatur auf 180 °C senken.",
            tip: "Die Flüssigkeit im Boden der Form verhindert, dass austretendes Fett verbrennt und bitter wird. Rippenfleisch gehört dagegen zu den [Żeberka pieczone](/de/rezepte/zeberka), die im [Sonntagsessen](/de/blog/sonntagsessen-polnisch) einen eigenen Platz haben.",
          },
          {
            text: "Etwa 90 bis 120 Minuten backen, je nach Gewicht etwa 45 bis 50 Minuten pro Kilogramm, und alle 20 bis 25 Minuten mit dem eigenen Bratensaft begießen. Die Haut soll dabei knusprig werden, während das Fleisch saftig bleibt. Für zusätzliche Bräune können die letzten 10 Minuten unter dem Grill helfen, dabei aber die Haut genau beobachten, damit sie nicht verbrennt.",
            tip: "Regelmäßiges Begießen ersetzt zusätzliches Fett und sorgt für eine gleichmäßig glänzende Haut. Ente und aromatischen Majoran findest du oft frischer im [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "Die Ente 10 bis 15 Minuten ruhen lassen, bevor du sie tranchierst, damit sich der Fleischsaft verteilen kann. Mit Kartoffeln, Rotkohl oder einer anderen Beilage servieren, dabei den Bratensaft abschmecken und überschüssiges Fett abschöpfen. Reste schmecken kalt oder aufgewärmt, die Haut hältst du am besten getrennt vom Fleisch, damit sie wieder knusprig wird.",
            tip: "Auf dem Festtagstisch stehen oft auch der [Schab pieczony](/de/rezepte/schab-pieczony) oder die [Golonka](/de/rezepte/golonka), beide stammen aber von einem anderen Tier und brauchen eine eigene Technik.",
          },
        ],
        seoTitle: "Kaczka pieczona Rezept | Ente polnisch Ofen | Alemniam",
        seoDescription:
          "Kaczka pieczona: Ofenente mit Apfel und Majeranek, anders als Schab pieczony, Golonka oder Żeberka.",
      },
      pl: {
        title: "Kaczka pieczona",
        slug: "kaczka",
        excerpt:
          "Polska kaczka z pieca z jabłkiem i majerankiem, świąteczna pieczeń z całego ptaka, z chrupiącą skórką i soczystym mięsem w środku.",
        steps: [
          {
            text: "Kaczkę (ok. 2 do 2,5 kg) osusz wewnątrz i na zewnątrz, a nadmiar tłuszczu przy otworze usuń. Natrzyj solą, pieprzem i majerankiem, także w brzuchu. Włóż swobodnie ćwiartki jabłka i opcjonalnie kawałki cebuli, a otwór zamknij wykałaczką lub sznurkiem.",
            tip: "To cała lub pół kaczki z pieca, więc inne danie niż [schab pieczony](/pl/rezepte/schab-pieczony) czy [golonka](/pl/rezepte/golonka). Więcej o przyprawie w [leksykonie majeranku](/pl/blog/majeranek-leksykon).",
          },
          {
            text: "Nagrzej piekarnik do 180 °C, góra i dół. Ułóż kaczkę piersią do góry w solidnym naczyniu i wlej na dno odrobinę wody lub lekkiego bulionu. Pierwsze 20 minut piecz przy 200 °C, potem zejdź do 180 °C.",
            tip: "Płyn na dnie naczynia chroni wytapiający się tłuszcz przed spaleniem i goryczą. Żebra zostają natomiast przy [żeberkach pieczonych](/pl/rezepte/zeberka), które mają swoje miejsce w [obiedzie niedzielnym](/pl/blog/obiad-niedzielny).",
          },
          {
            text: "Piecz około 90 do 120 minut, w zależności od wagi około 45 do 50 minut na kilogram, i co 20 do 25 minut polewaj własnym sokiem. Skóra ma zrobić się chrupiąca, a mięso zostać soczyste. Ostatnie 10 minut możesz dopiec pod grillem, ale pilnuj skóry, żeby się nie spaliła.",
            tip: "Regularne polewanie zastępuje dodatkowy tłuszcz i daje równomiernie błyszczącą skórę. Kaczkę i aromatyczny majeranek świeższe znajdziesz często w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Odstaw kaczkę na 10 do 15 minut, zanim ją porcjujesz, żeby sok mięsny się rozłożył. Podawaj z ziemniakami, czerwoną kapustą lub innym dodatkiem, doprawiając przy tym sos i zbierając nadmiar tłuszczu. Resztki smakują na zimno lub odgrzane, a skórę warto trzymać osobno od mięsa, żeby po podgrzaniu znowu była chrupiąca.",
            tip: "Na świątecznym stole często stoją też [schab pieczony](/pl/rezepte/schab-pieczony) lub [golonka](/pl/rezepte/golonka), ale to inne zwierzę i inna technika.",
          },
        ],
        seoTitle: "Kaczka pieczona przepis | Kaczka z piekarnika | Alemniam",
        seoDescription:
          "Kaczka pieczona z jabłkiem i majerankiem, inna niż schab pieczony, golonka czy żeberka.",
      },
    },
    ingredients: [
      {
        id: "ka-1",
        name: {
          de: "Ente (ganz, ca. 2–2,5 kg)",
          pl: "Kaczka (cała, ok. 2–2,5 kg)",
        },
        amount: 2300,
        unit: { de: "g", pl: "g" },
        group: "other",
        storeHintDe: "Geflügeltheke oder Polenladen, am besten frisch oder gut aufgetaut",
      },
      {
        id: "ka-2",
        name: { de: "Äpfel (säuerlich)", pl: "Jabłka (kwaskowate)" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "ka-3",
        name: { de: "Zwiebel (optional, Füllung)", pl: "Cebula (opcjonalnie)" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "ka-4",
        name: { de: "Majoran getrocknet", pl: "Majeranek suszony" },
        amount: 2,
        unit: { de: "TL", pl: "łyżeczki" },
        group: "spices",
        storeHintDe: "Im Polenladen oft aromatischer",
      },
      {
        id: "ka-5",
        name: { de: "Salz", pl: "Sól" },
        amount: 2,
        unit: { de: "TL", pl: "łyżeczki" },
        group: "spices",
      },
      {
        id: "ka-6",
        name: { de: "Pfeffer", pl: "Pieprz" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
      {
        id: "ka-7",
        name: {
          de: "Wasser oder leichte Brühe (Form)",
          pl: "Woda lub lekki bulion (do naczynia)",
        },
        amount: 200,
        unit: { de: "ml", pl: "ml" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-21T12:00:00.000Z",
    updatedAt: "2026-07-21T12:00:00.000Z",
  },
  {
    id: "recipe-pieczen-rzymska",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-pieczen-rzymska/fba8c48a-a20a-476a-9964-34918e8f5ab7.webp",
    prepMinutes: 30,
    cookMinutes: 70,
    servings: 8,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-hauptgerichte"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-fleischwolf",
      "post-ersatzprodukte-de",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Pieczeń rzymska",
        slug: "pieczen-rzymska",
        excerpt:
          "Polnischer Ofen-Hackbraten mit hartgekochtem Ei in der Mitte, ein Laib aus dem Ofen mit überraschendem Anschnitt.",
        steps: [
          {
            text: "Brötchen in Milch einweichen und ausdrücken. Zwiebel fein würfeln und glasig anbraten. Hack mit Brötchen, rohem Ei, Zwiebel, Salz, Pfeffer und Majoran verkneten, bis die Masse bindet, dann 15 bis 20 Minuten kalt stellen.",
            tip: "Das ist ein Ofen-Laib und keine flachen Pfannen-Frikadellen, dafür steht der [Kotlet mielony](/de/rezepte/kotlet-mielony) unter einer eigenen Adresse. Feiner gemahlenes Hack gelingt leichter mit der [Fleischwolf-Kaufberatung](/de/blog/fleischwolf-kaufberatung).",
          },
          {
            text: "Hartgekochte Eier schälen. Die Masse zu einem Laib formen: eine Hälfte flach drücken, die Eier längs in die Mitte legen, mit der restlichen Masse bedecken und zu einem festen Zylinder schließen. Optional dünn mit Speck umwickeln.",
            tip: "Das ist keine Pasteten-Terrine, der [Pasztet](/de/rezepte/pasztet) bleibt ein eigenes Gericht mit anderer Textur. Zum Menü passt der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch).",
          },
          {
            text: "Den Laib in eine gefettete Form oder auf ein Blech mit Backpapier legen. Bei 180 °C etwa 60 bis 75 Minuten backen, bis die Kruste braun und der Kern durchgezogen ist, die Kerntemperatur liegt dann bei etwa 75 °C. Zwischendurch bei Bedarf mit dem austretenden Bratensaft begießen.",
            tip: "Das ist kein panierter Pfannenbraten, Panade gehört zum [Kotlet mielony](/de/rezepte/kotlet-mielony) und zum [Panieren-Guide](/de/blog/panieren-schabowy).",
          },
          {
            text: "10 Minuten ruhen lassen, dann in Scheiben schneiden, sodass der Ei-Kern sichtbar wird. Mit Kartoffeln, Surówka oder einer Soße servieren. Reste schmecken kalt oder aufgewärmt und halten gekühlt 2 bis 3 Tage.",
            tip: "Fehlt gutes Brötchen oder Hack, hilft ein ehrlich benannter Ersatz laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
          },
        ],
        seoTitle:
          "Pieczeń rzymska Rezept | Polnischer Hackbraten Ofen | Alemniam",
        seoDescription:
          "Pieczeń rzymska: Ofen-Hackbraten mit Ei, anders als Kotlet mielony und Pasztet.",
      },
      pl: {
        title: "Pieczeń rzymska",
        slug: "pieczen-rzymska",
        excerpt:
          "Polska pieczeń mielona z pieca z jajkiem w środku, bochenek z piekarnika, który zaskakuje przy krojeniu.",
        steps: [
          {
            text: "Bułkę namocz w mleku i odciśnij. Cebulę drobno pokrój i zeszklij. Wymieszaj mielone z bułką, surowym jajkiem, cebulą, solą, pieprzem i majerankiem, aż masa się spoi, i odstaw na 15 do 20 minut w chłodne miejsce.",
            tip: "To bochenek z pieca, a nie płaskie kotlety z patelni, dla nich jest osobny przepis na [kotlet mielony](/pl/rezepte/kotlet-mielony). Drobniejsze mielenie ułatwia [wilk do mięsa](/pl/blog/wilk-do-miesa).",
          },
          {
            text: "Jajka na twardo obierz. Uformuj bochenek: połowę masy spłaszcz, ułóż jajka wzdłuż środka, przykryj resztą masy i domknij w zwarty walec. Opcjonalnie owiń cienkim boczkiem.",
            tip: "To nie terrina pasztetowa, [pasztet](/pl/rezepte/pasztet) zostaje osobnym daniem o innej strukturze. Do menu pasuje [obiad niedzielny](/pl/blog/obiad-niedzielny).",
          },
          {
            text: "Ułóż bochenek w natłuszczonej formie lub na blasze z papierem. Piecz w 180 °C około 60 do 75 minut, aż skórka będzie brązowa, a środek wypieczony, temperatura w środku powinna sięgać około 75 °C. W razie potrzeby polewaj wytapiającym się sokiem.",
            tip: "To nie panierowany kotlet z patelni, panierka należy do [kotleta mielonego](/pl/rezepte/kotlet-mielony) i [przewodnika o panierowaniu](/pl/blog/panierowanie-kotlet).",
          },
          {
            text: "Odstaw na 10 minut, potem kroić w plastry, tak żeby jajko w środku było widoczne. Podawaj z ziemniakami, surówką lub sosem. Resztki smakują na zimno lub odgrzane i trzymają się 2 do 3 dni w chłodzie.",
            tip: "Brak dobrej bułki albo mięsa uzupełnia uczciwie nazwany zamiennik z [zamienników składników](/pl/blog/zamienniki-skladnikow).",
          },
        ],
        seoTitle:
          "Pieczeń rzymska przepis | Pieczeń mielona z pieca | Alemniam",
        seoDescription:
          "Pieczeń rzymska z jajkiem w środku, inna niż kotlet mielony i pasztet.",
      },
    },
    ingredients: [
      {
        id: "pr-1",
        name: {
          de: "Hackfleisch gemischt (Schwein-Rind)",
          pl: "Mięso mielone mieszane",
        },
        amount: 1000,
        unit: { de: "g", pl: "g" },
        group: "other",
        storeHintDe: "Frisch hacken lassen oder gute Thekenware, nicht zu magere Mischung",
      },
      {
        id: "pr-2",
        name: { de: "Brötchen (alt)", pl: "Bułka (czerstwa)" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "pantry",
      },
      {
        id: "pr-3",
        name: { de: "Milch (zum Einweichen)", pl: "Mleko (do namoczenia)" },
        amount: 150,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "pr-4",
        name: { de: "Ei (in die Masse)", pl: "Jajko (do masy)" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "pr-5",
        name: {
          de: "Hartgekochte Eier (Kern)",
          pl: "Jajka na twardo (środek)",
        },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "pr-6",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "pr-7",
        name: { de: "Majoran getrocknet", pl: "Majeranek suszony" },
        amount: 1.5,
        unit: { de: "TL", pl: "łyżeczki" },
        group: "spices",
      },
      {
        id: "pr-8",
        name: { de: "Salz", pl: "Sól" },
        amount: 1.5,
        unit: { de: "TL", pl: "łyżeczki" },
        group: "spices",
      },
      {
        id: "pr-9",
        name: { de: "Pfeffer", pl: "Pieprz" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
      {
        id: "pr-10",
        name: {
          de: "Speckscheiben (optional, umwickeln)",
          pl: "Plastry boczku (opcjonalnie)",
        },
        amount: 6,
        unit: { de: "Scheiben", pl: "plastrów" },
        group: "other",
        substitute: {
          de: "Einfach weglassen, der Laib bleibt dann ohne Speckmantel",
          pl: "Można pominąć, bochenek zostaje wtedy bez boczku",
        },
      },
      {
        id: "pr-11",
        name: { de: "Öl oder Butter (Form)", pl: "Olej lub masło (forma)" },
        amount: 1,
        unit: { de: "EL", pl: "łyżka" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-21T12:00:00.000Z",
    updatedAt: "2026-07-21T12:00:00.000Z",
  },
];
