import type { Recipe } from "@/types/content";

/**
 * Wave 10 Paket C — Family variants (Pierogi jagody + Naleśniki dżem).
 * Isolated export `seedRecipesWave10C`.
 *
 * Integrator E:
 * 1) Merge into wave10 aggregator / seed.ts (same path as other W10 packages), OR
 *    append these two recipes into `seedFamilyVariantRecipes` in seed-families.ts
 *    (see content/wave-10-status-c.md § wave10-c-family-patch).
 * 2) seed-families.ts variantIds + excerpts are already patched by C (local consistency).
 * No SEED_VERSION bump here. No Placki / kraut-pilze invent.
 */
export const seedRecipesWave10C: Recipe[] = [
  {
    id: "recipe-pierogi-jagody",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-pierogi-jagody/7a99e3b2-93c1-41b9-b3a0-2217cab6271d.webp",
    prepMinutes: 50,
    cookMinutes: 20,
    servings: 4,
    familyId: "family-pierogi",
    variantLabel: { de: "Heidelbeeren", pl: "z jagodami" },
    variantImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-pierogi-jagody/7a99e3b2-93c1-41b9-b3a0-2217cab6271d.webp",
    regionIds: [],
    occasionIds: [],
    techniqueIds: ["technique-teig", "technique-freezer"],
    categoryIds: [
      "category-suess",
      "category-hauptgerichte",
      "category-vegetarisch",
    ],
    relatedPostIds: [
      "post-pierogi-guide",
      "post-pierogi-teig",
      "post-freezer-meal-prep",
      "post-pierogi-formen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Pierogi mit Heidelbeeren",
        slug: "jagody",
        excerpt:
          "Süße Pierogi mit Heidelbeeren, gefaltete Teigtaschen mit fruchtiger Füllung, serviert mit Butter und Zucker.",
        steps: [
          {
            text: "Pierogi-Teig kneten, 20 bis 30 Minuten ruhen lassen, dünn ausrollen und Kreise ausstechen.",
            tip: "Das Teig-Gefühl erklärt der Beitrag [Pierogi-Teig](/de/blog/pierogi-teig), einen Überblick über alle Varianten gibt der [Pierogi-Guide](/de/blog/pierogi-guide).",
          },
          {
            text: "Heidelbeeren waschen, gut abtropfen lassen und mit Zucker und 1 TL Speisestärke mischen.",
            tip: "Die Beeren müssen wirklich trocken sein, denn eine nasse Füllung lässt den Teig beim Kochen aufplatzen. Das sind übrigens keine [Knedle ze śliwkami](/de/rezepte/knedle-sliwki), also keine runden Obst-Knödel aus Kartoffelteig.",
          },
          {
            text: "Wenig Füllung mittig auf jeden Kreis geben, die Ränder fest verschließen und dabei die Luft heraus streichen.",
            tip: "Für gleichmäßige Größe hilft der Beitrag zu [Pierogi-Formen](/de/blog/pierogi-formen), so garen alle Taschen in derselben Zeit.",
          },
          {
            text: "In leicht siedendem Salzwasser garen, bis die Pierogi aufschwimmen, dann noch 1 bis 2 Minuten nachziehen lassen.",
            tip: "Koche sie in kleinen Portionen, damit sie im Topf genug Platz haben und nicht aneinander kleben.",
          },
          {
            text: "Mit Butter und Zucker oder Puderzucker servieren, optional mit etwas Sahne.",
            tip: "Für später kannst du eine Charge roh einfrieren, wie im Beitrag [Pierogi einfrieren](/de/blog/freezer-meal-prep) beschrieben, beschrifte die Beeren-Charge aber separat.",
          },
        ],
        seoTitle: "Pierogi mit Heidelbeeren Rezept | Pierogi z jagodami | Alemniam",
        seoDescription:
          "Pierogi z jagodami: süße Heidelbeer-Füllung, Teig und Kochen, bilingual, klar getrennt von Knedle śliwki.",
        article: `## Pierogi mit Heidelbeeren, die süße Variante

Gefaltete Pierogi mit Heidelbeeren gehören zur selben Teigfamilie wie [Ruskie](/de/rezepte/pierogi/ruskie), [Fleisch](/de/rezepte/pierogi/fleisch) und [Kraut & Pilze](/de/rezepte/pierogi/kraut-pilze). Nur der Tag und die Füllung sind hier anders, oben auf der Seite kannst du jederzeit zu den herzhaften Geschwistern wechseln. Die Technik hinter dem Falten und Kochen erklärt der [Pierogi-Guide](/de/blog/pierogi-guide) ausführlich.

### Keine Knedle

[Knedle ze śliwkami](/de/rezepte/knedle-sliwki) sind runde Obst-Knödel aus Kartoffelteig mit einer ganzen Pflaume im Kern. Hier dagegen entstehen halbmondförmige Taschen aus Mehlteig mit einer Beerenfüllung, das Ergebnis ist leichter und die Form völlig anders.

### Technik

Die Füllung muss trocken und kalt bleiben, sonst platzt der Teig beim Kochen auf. Alles zum Teig selbst steht im Beitrag [Pierogi-Teig](/de/blog/pierogi-teig), und wer eine Charge für später vorbereiten will, findet die Details im [Freezer-Guide](/de/blog/freezer-meal-prep).

### Geschwister in der Familie

Oben auf der Seite kannst du jederzeit zu Ruskie, Fleisch oder Kraut-Pilze wechseln, wenn dir heute nach einer herzhaften Füllung ist.`,
      },
      pl: {
        title: "Pierogi z jagodami",
        slug: "jagody",
        excerpt:
          "Słodkie pierogi z jagodami, sklejane pierogi z owocowym farszem, podawane z masłem i cukrem.",
        steps: [
          {
            text: "Zagnieć ciasto na pierogi, odstaw na 20 do 30 minut, rozwałkuj cienko i wykrawaj kółka.",
            tip: "Wyczucie ciasta opisuje [ciasto na pierogi](/pl/blog/ciasto-na-pierogi), a przegląd wszystkich wariantów daje [przewodnik pierogi](/pl/blog/przewodnik-pierogi).",
          },
          {
            text: "Umyj jagody, dobrze odsącz i wymieszaj z cukrem oraz 1 łyżeczką skrobi ziemniaczanej.",
            tip: "Jagody muszą być naprawdę suche, bo mokry farsz rozsadza ciasto podczas gotowania. To nie [knedle ze śliwkami](/pl/rezepte/knedle-sliwki), czyli nie okrągłe knedle ziemniaczane.",
          },
          {
            text: "Nałóż niewielką porcję farszu na środek każdego kółka, szczelnie sklej brzegi i wypchnij powietrze.",
            tip: "Równy rozmiar ułatwiają [foremki do pierogów](/pl/blog/foremki-do-pierogow), dzięki nim wszystkie kęsy gotują się tyle samo czasu.",
          },
          {
            text: "Gotuj w lekko wrzącej osolonej wodzie, aż pierogi wypłyną na powierzchnię, potem dogotuj jeszcze 1 do 2 minut.",
            tip: "Gotuj w mniejszych partiach, żeby pierogi miały w garnku dość miejsca i nie sklejały się ze sobą.",
          },
          {
            text: "Podawaj z masłem i cukrem albo cukrem pudrem, opcjonalnie z odrobiną śmietany.",
            tip: "Część możesz zamrozić na surowo według opisu w [mrożeniu pierogów](/pl/blog/mrozenie-pierogow), ale oznacz partię z jagodami osobną etykietą.",
          },
        ],
        seoTitle: "Pierogi z jagodami przepis | Alemniam",
        seoDescription:
          "Pierogi z jagodami: słodki farsz, ciasto i gotowanie, dwujęzycznie, jasno inne niż knedle ze śliwkami.",
        article: `## Pierogi z jagodami, słodki wariant

Sklejane pierogi z jagodami należą do tej samej rodziny ciasta co [ruskie](/pl/rezepte/pierogi/ruskie), [mięso](/pl/rezepte/pierogi/mieso) i [kapusta z grzybami](/pl/rezepte/pierogi/kapusta-grzyby). Zmienia się tu tylko okazja i farsz, u góry strony możesz w każdej chwili przełączyć na wytrawne rodzeństwo. Technikę lepienia i gotowania szeroko opisuje [przewodnik pierogi](/pl/blog/przewodnik-pierogi).

### To nie knedle

[Knedle ze śliwkami](/pl/rezepte/knedle-sliwki) to okrągłe knedle z ciasta ziemniaczanego z całą śliwką w środku. Tutaj powstają za to półksiężycowe kieszonki z ciasta mącznego z farszem jagodowym, efekt jest lżejszy, a forma zupełnie inna.

### Technika

Farsz musi zostać suchy i zimny, inaczej ciasto rozsadza się podczas gotowania. Wszystko o samym cieście znajdziesz w [cieście na pierogi](/pl/blog/ciasto-na-pierogi), a kto chce przygotować partię na później, sprawdzi szczegóły w [przewodniku mrożenia](/pl/blog/mrozenie-pierogow).

### Rodzeństwo w rodzinie

U góry strony możesz w każdej chwili przełączyć na ruskie, mięso albo kapustę z grzybami, jeśli akurat masz ochotę na wytrawny farsz.`,
      },
    },
    ingredients: [
      {
        id: "pj-1",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "pj-2",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "pj-3",
        name: { de: "Heidelbeeren (frisch oder TK)", pl: "Jagody (świeże lub mrożone)" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "produce",
        storeHintDe: "TK-Beeren gut abtauen und gründlich abtropfen lassen",
      },
      {
        id: "pj-4",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 60,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "pj-5",
        name: { de: "Speisestärke", pl: "Skrobia ziemniaczana" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "pantry",
      },
      {
        id: "pj-6",
        name: { de: "Butter", pl: "Masło" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
    ],
    createdAt: "2026-07-20T18:00:00.000Z",
    updatedAt: "2026-07-20T18:00:00.000Z",
  },
  {
    id: "recipe-nalesniki-dzem",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-nalesniki-dzem/4bfe90e1-f421-4b50-a190-3f87825dcf9a.webp",
    prepMinutes: 25,
    cookMinutes: 25,
    servings: 4,
    familyId: "family-nalesniki",
    variantLabel: { de: "Marmelade", pl: "z dżemem" },
    variantImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-nalesniki-dzem/4bfe90e1-f421-4b50-a190-3f87825dcf9a.webp",
    regionIds: [],
    occasionIds: [],
    techniqueIds: ["technique-teig"],
    categoryIds: [
      "category-schnell",
      "category-suess",
      "category-vegetarisch",
    ],
    relatedPostIds: [
      "post-nalesniki-guide",
      "post-twarog",
      "post-ersatzprodukte-de",
      "post-tlusty-czwartek",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Naleśniki mit Marmelade",
        slug: "dzem",
        excerpt:
          "Süße Naleśniki mit Dżem oder Powidła, schnell gemacht und kinderfreundlich, die fruchtige Schwester der Quark-Füllung.",
        steps: [
          {
            text: "Naleśniki-Teig anrühren, 20 bis 30 Minuten ruhen lassen und dünne Pfannkuchen ausbacken.",
            tip: "Die Technik im Detail erklärt der [Naleśniki-Guide](/de/blog/nalesniki-guide). Verwechsle diese Variante nicht mit der [Twaróg-Füllung](/de/rezepte/nalesniki/twarog), das ist eine eigene, herzhaftere Richtung.",
          },
          {
            text: "Jeden Pfannkuchen mit dicker Marmelade oder Powidła bestreichen, dabei nicht bis an den Rand gehen.",
            tip: "Dickflüssiger Dżem hält beim Rollen besser als ein dünner. Fehlen Powidła aus dem Polenladen, hilft der Beitrag zu [Ersatzprodukten](/de/blog/ersatzprodukte-de) weiter.",
          },
          {
            text: "Fest rollen oder falten und optional in etwas Butter goldbraun anbraten.",
            tip: "Wer die zweite Bratrunde auslässt, bekommt eine leichtere, weniger süß-klebrige Version für den Alltag.",
          },
          {
            text: "Mit Puderzucker servieren, optional mit Śmietana oder frischen Beeren.",
            tip: "Quark für die herzhafte Schwester dieses Rezepts kaufst du am besten nach dem [Twaróg-Guide](/de/blog/twarog-deutschland), hier bleibt die Füllung aber bei Marmelade.",
          },
        ],
        seoTitle: "Naleśniki mit Marmelade Rezept | Naleśniki z dżemem | Alemniam",
        seoDescription:
          "Naleśniki z dżemem: süße Marmeladen-Variante bilingual, klar getrennt von Twaróg-Naleśniki.",
        article: `## Naleśniki mit Marmelade, die süße Variante

Diese Naleśniki nutzen dieselbe dünne Teigplattform wie [Twaróg](/de/rezepte/nalesniki/twarog), [Fleisch](/de/rezepte/nalesniki/fleisch) und [Spinat](/de/rezepte/nalesniki/szpinak), hier geht es aber ausschließlich um Dżem oder Marmelade als Füllung. Die Technik zum Teig und Wenden erklärt der [Naleśniki-Guide](/de/blog/nalesniki-guide) im Detail.

### Nicht die Quark-Variante

Die Quark-Füllung bleibt ein eigenes Rezept unter [Naleśniki mit Twaróg](/de/rezepte/nalesniki/twarog). Hier dagegen trägt dicker Dżem oder Powidła die ganze Süße, ohne Ei oder Quark in der Füllung.

### Technik

Der Teig soll dünn gebacken und die Rolle trocken geschlossen werden, damit die Marmelade nicht ausläuft. Mehr dazu im [Naleśniki-Guide](/de/blog/nalesniki-guide), zum Anlass passt außerdem der Beitrag [Tłusty Czwartek](/de/blog/tlusty-czwartek).

### Geschwister in der Familie

Oben auf der Seite kannst du jederzeit zu Twaróg, Fleisch oder Spinat wechseln, wenn du heute lieber eine herzhafte Füllung möchtest.`,
      },
      pl: {
        title: "Naleśniki z dżemem",
        slug: "dzem",
        excerpt:
          "Słodkie naleśniki z dżemem, szybki i przyjazny dzieciom wariant, owocowa siostra farszu z twarogiem.",
        steps: [
          {
            text: "Zrób ciasto na naleśniki, odstaw na 20 do 30 minut i usmaż cienkie placki.",
            tip: "Technikę dokładnie opisuje [przewodnik naleśników](/pl/blog/nalesniki-przewodnik). Nie myl tego wariantu z [twarogiem](/pl/rezepte/nalesniki/twarog), to osobny, bardziej wytrawny kierunek.",
          },
          {
            text: "Posmaruj każdy placek gęstym dżemem albo powidłami, nie dochodząc do samej krawędzi.",
            tip: "Gęsty dżem trzyma się lepiej podczas zwijania niż rzadki. Gdy brakuje powideł ze sklepu polskiego, pomaga przegląd [zamienników składników](/pl/blog/zamienniki-skladnikow).",
          },
          {
            text: "Szczelnie zawiń lub złóż i opcjonalnie podsmaż na maśle na złoty kolor.",
            tip: "Kto pomija drugie smażenie, dostaje lżejszą, mniej lepką wersję na dzień powszedni.",
          },
          {
            text: "Podawaj z cukrem pudrem, opcjonalnie ze śmietaną albo świeżymi owocami.",
            tip: "Twaróg do wytrawnej siostry tego przepisu najlepiej kupować według [poradnika twarogu](/pl/blog/twarog-w-niemczech), tutaj farsz zostaje jednak przy dżemie.",
          },
        ],
        seoTitle: "Naleśniki z dżemem przepis | Alemniam",
        seoDescription:
          "Naleśniki z dżemem: słodki wariant dwujęzycznie, jasno oddzielony od naleśników z twarogiem.",
        article: `## Naleśniki z dżemem, słodki wariant

Te naleśniki korzystają z tej samej cienkiej platformy ciasta co [twaróg](/pl/rezepte/nalesniki/twarog), [mięso](/pl/rezepte/nalesniki/mieso) i [szpinak](/pl/rezepte/nalesniki/szpinak), tutaj jednak farsz to wyłącznie dżem lub powidła. Technikę ciasta i obracania opisuje szczegółowo [przewodnik naleśników](/pl/blog/nalesniki-przewodnik).

### To nie wariant z twarogiem

Farsz twarogowy zostaje osobnym przepisem pod [naleśnikami z twarogiem](/pl/rezepte/nalesniki/twarog). Tutaj całą słodycz niesie gęsty dżem lub powidła, bez jajka czy twarogu w farszu.

### Technika

Ciasto ma być cienkie, a rolka sucho zamknięta, żeby dżem nie wypłynął. Więcej w [przewodniku naleśników](/pl/blog/nalesniki-przewodnik), do okazji pasuje też artykuł [Tłusty Czwartek](/pl/blog/tlusty-czwartek).

### Rodzeństwo w rodzinie

U góry strony możesz w każdej chwili przełączyć na twaróg, mięso albo szpinak, jeśli wolisz dziś wytrawny farsz.`,
      },
    },
    ingredients: [
      {
        id: "nd-1",
        name: { de: "Milch", pl: "Mleko" },
        amount: 400,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "nd-2",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "nd-3",
        name: { de: "Eier", pl: "Jajka" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "nd-4",
        name: { de: "Marmelade oder Powidła", pl: "Dżem lub powidła" },
        amount: 250,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Dicke Konfitüre oder Powidła gibt es im Polenladen",
        substitute: {
          de: "Dicke Aprikosen- oder Pflaumenmarmelade funktioniert ebenso gut",
          pl: "Gęsty dżem morelowy lub śliwkowy sprawdza się równie dobrze",
        },
      },
      {
        id: "nd-5",
        name: { de: "Butter", pl: "Masło" },
        amount: 30,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "nd-6",
        name: { de: "Puderzucker", pl: "Cukier puder" },
        amount: 30,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-20T18:30:00.000Z",
    updatedAt: "2026-07-20T18:30:00.000Z",
  },
];
