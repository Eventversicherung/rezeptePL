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
      "https://images.unsplash.com/photo-1756139705997-f92690428d66?w=1600&q=80",
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
          "Polnische Ofenente mit Apfel und Majeranek — Festbraten vom ganzen Vogel, klar ≠ Schab pieczony, ≠ Golonka, ≠ Żeberka.",
        steps: [
          {
            text: "Ente (ca. 2–2,5 kg) innen und außen trocken tupfen, überschüssiges Fett an der Öffnung entfernen. Mit Salz, Pfeffer und Majeranek einreiben — auch in der Bauchhöhle. Apfelviertel und optional Zwiebelstücke locker einfüllen; Öffnung mit Zahnstocher oder Küchengarn schließen.",
            tip: "Das ist ganze/halbe Ente aus dem Ofen — kein [Schab pieczony](/de/rezepte/schab-pieczony) und keine [Golonka](/de/rezepte/golonka). Gewürz-Feeling: [Majeranek](/de/blog/majeranek).",
          },
          {
            text: "Ofen auf 180 °C Ober-/Unterhitze vorheizen. Ente Brustseite nach oben in eine feste Form legen; etwas Wasser oder leichte Brühe auf den Boden. Erste 20 Minuten bei 200 °C anbräunen, dann auf 180 °C senken.",
            tip: "Rippen bleiben bei [Żeberka pieczone](/de/rezepte/zeberka). Menü-Rahmen descriptiv: [polnisches Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
          {
            text: "Ca. 90–120 Minuten backen (je nach Gewicht: ca. 45–50 Min pro kg), alle 20–25 Minuten mit Bratensaft begießen. Haut soll knusprig, Fleisch saftig bleiben. Optional letzte 10 Minuten Grillstufe — nicht verbrennen.",
            tip: "Einkauf Ente/Majoran oft im [Polenladen](/de/blog/polenladen-einkaufen). Kein Schweinekamm-Intent — Fokus bleibt Kaczka.",
          },
          {
            text: "10–15 Minuten ruhen lassen, dann tranchieren. Mit Kartoffeln, Rotkohl oder Beilage servieren. Bratensaft abschmecken; Fett abschöpfen. Reste kalt oder aufgewärmt — Haut separat knusprig halten.",
            tip: "Festbraten-Nachbar descriptiv: [Schab](/de/rezepte/schab-pieczony) / [Golonka](/de/rezepte/golonka) — andere Stücke, andere URLs.",
          },
        ],
        seoTitle: "Kaczka pieczona Rezept | Ente polnisch Ofen | Alemniam",
        seoDescription:
          "Kaczka pieczona: Ofenente mit Apfel und Majeranek. Bilingual, klar ≠ Schab, Golonka und Żeberka.",
      },
      pl: {
        title: "Kaczka pieczona",
        slug: "kaczka",
        excerpt:
          "Polska kaczka z pieca z jabłkiem i majerankiem — pieczeń z całego ptaka, jasno ≠ schab pieczony, ≠ golonka, ≠ żeberka.",
        steps: [
          {
            text: "Kaczkę (ok. 2–2,5 kg) osusz wewnątrz i na zewnątrz, nadmiar tłuszczu przy otworze usuń. Natrzyj solą, pieprzem i majerankiem — także w brzuchu. Włóż ćwiartki jabłka i opcjonalnie cebulę; otwór zamknij wykałaczką lub sznurkiem.",
            tip: "To cała/pół kaczki z pieca — nie [schab pieczony](/pl/rezepte/schab-pieczony) i nie [golonka](/pl/rezepte/golonka). Przyprawa: [majeranek](/pl/blog/majeranek-leksykon).",
          },
          {
            text: "Nagrzej piekarnik do 180 °C. Ułóż kaczkę piersią do góry w solidnym naczyniu; odrobinę wody lub lekkiego bulionu na dno. Pierwsze 20 min przy 200 °C, potem zejdź do 180 °C.",
            tip: "Żebra zostają przy [żeberkach pieczonych](/pl/rezepte/zeberka). Ramy menu opisowo: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
          },
          {
            text: "Piecz ok. 90–120 min (ok. 45–50 min na kg), co 20–25 min polewaj sokiem. Skóra ma być chrupiąca, mięso soczyste. Opcjonalnie ostatnie 10 min grill — bez przypalenia.",
            tip: "Zakupy kaczka/majeranek często w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Bez intentu schabu — tu zostaje kaczka.",
          },
          {
            text: "Odstaw 10–15 min, potem porcjuj. Podawaj z ziemniakami, czerwoną kapustą lub dodatkiem. Sos dopraw; tłuszcz zbierz. Resztki zimne lub odgrzane — skórę trzymaj osobno chrupką.",
            tip: "Sąsiedzi pieczenia opisowo: [schab](/pl/rezepte/schab-pieczony) / [golonka](/pl/rezepte/golonka) — inne kawałki, inne URL.",
          },
        ],
        seoTitle: "Kaczka pieczona przepis | Kaczka z piekarnika | Alemniam",
        seoDescription:
          "Kaczka pieczona z jabłkiem i majerankiem. Dwujęzycznie, jasno ≠ schab, golonka i żeberka.",
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
        storeHintDe: "Geflügeltheke / Polenladen — frisch oder tiefgekühlt auftauen",
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
        storeHintDe: "Polenladen oft aromatischer",
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
      "https://images.unsplash.com/photo-1774494248272-bf91a0219bfe?w=1600&q=80",
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
          "Polnischer Ofen-Hackbraten mit hartgekochtem Ei in der Mitte — Laib aus dem Ofen, klar ≠ Kotlet mielony (Pfanne) und ≠ Pasztet.",
        steps: [
          {
            text: "Brötchen in Milch einweichen, ausdrücken. Zwiebel fein würfeln und glasig anbraten. Hack mit Brötchen, Ei, Zwiebel, Salz, Pfeffer und Majeranek verkneten, bis die Masse bindet. 15–20 Minuten kalt stellen.",
            tip: "Das ist Ofen-Laib, keine flachen Pfannen-Frikadellen: [Kotlet mielony](/de/rezepte/kotlet-mielony) bleibt andere URL. Hack fein: [Fleischwolf-Kaufberatung](/de/blog/fleischwolf-kaufberatung).",
          },
          {
            text: "Hartgekochte Eier schälen. Masse zu einem Laib formen: Hälfte flach drücken, Eier längs in die Mitte legen, Restmasse darüber und zu einem festen Zylinder schließen. Optional dünn mit Speck umwickeln.",
            tip: "Keine Pasteten-Terrine — [Pasztet](/de/rezepte/pasztet) ist anderer Intent. Menü descriptiv: [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
          {
            text: "Laib in eine gefettete Form oder auf ein Blech mit Backpapier legen. Bei 180 °C ca. 60–75 Minuten backen, bis die Kruste braun und der Kern durch ist (Innere ca. 75 °C). Zwischendurch ggf. mit Bratensaft begießen.",
            tip: "Kein Panier-Pfannenbraten — Panade gehört zu [Kotlet mielony](/de/rezepte/kotlet-mielony) / [Panieren-Guide](/de/blog/panieren-schabowy).",
          },
          {
            text: "10 Minuten ruhen, dann in Scheiben schneiden — Ei-Kern soll sichtbar sein. Mit Kartoffeln, Surówka oder Soße servieren. Reste kalt oder aufgewärmt; hält 2–3 Tage gekühlt.",
            tip: "Fehlt Brötchen/Hack-Qualität: ehrlich laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Fokus bleibt Pieczeń rzymska.",
          },
        ],
        seoTitle:
          "Pieczeń rzymska Rezept | Polnischer Hackbraten Ofen | Alemniam",
        seoDescription:
          "Pieczeń rzymska: Ofen-Hackbraten mit Ei. Bilingual, klar ≠ Kotlet mielony und Pasztet.",
      },
      pl: {
        title: "Pieczeń rzymska",
        slug: "pieczen-rzymska",
        excerpt:
          "Polska pieczeń mielona z pieca z jajkiem w środku — bochenek z piekarnika, jasno ≠ kotlet mielony (patelnia) i ≠ pasztet.",
        steps: [
          {
            text: "Bułkę namocz w mleku, odciśnij. Cebulę drobno pokrój i zeszklij. Wymieszaj mielone z bułką, jajkiem, cebulą, solą, pieprzem i majerankiem, aż masa się spoi. Odstaw 15–20 min w chłodzie.",
            tip: "To bochenek z pieca, nie płaskie kotlety z patelni: [kotlet mielony](/pl/rezepte/kotlet-mielony) to inny URL. Mielenie: [wilk do mięsa](/pl/blog/wilk-do-miesa).",
          },
          {
            text: "Jajka na twardo obierz. Uformuj bochenek: połowę masy spłaszcz, ułóż jajka wzdłuż środka, przykryj resztą i domknij w walec. Opcjonalnie owiń cienkim boczkiem.",
            tip: "Bez terriny pasztetowej — [pasztet](/pl/rezepte/pasztet) to inny intent. Menu opisowo: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
          },
          {
            text: "Ułóż w natłuszczonej formie lub na blasze z papierem. Piecz w 180 °C ok. 60–75 min, aż skórka będzie brązowa, a środek wypieczony (ok. 75 °C). Polewaj sokiem w razie potrzeby.",
            tip: "Bez panierki na patelni — panierka należy do [kotleta mielonego](/pl/rezepte/kotlet-mielony) / [panierowania](/pl/blog/panierowanie-kotlet).",
          },
          {
            text: "Odstaw 10 min, kroić w plastry — jajko w środku ma być widoczne. Podawaj z ziemniakami, surówką lub sosem. Resztki 2–3 dni w chłodzie.",
            tip: "Brak bułki/jakości mięsa: uczciwie według [zamienników](/pl/blog/zamienniki-skladnikow). tu zostaje pieczeń rzymska.",
          },
        ],
        seoTitle:
          "Pieczeń rzymska przepis | Pieczeń mielona z pieca | Alemniam",
        seoDescription:
          "Pieczeń rzymska z jajkiem w środku. Dwujęzycznie, jasno ≠ kotlet mielony i pasztet.",
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
        storeHintDe: "Frisch hacken oder gute Thekenware — nicht zu mager",
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
          de: "Weglassen — Laib ohne Speckmantel",
          pl: "Pominąć — bochenek bez boczku",
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
