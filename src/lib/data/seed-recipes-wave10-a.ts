import type { Recipe } from "@/types/content";

/**
 * Wave 10 Paket A — Flaki + Schab pieczony.
 * E merges into seed.ts — do not import from seed.ts until Integrator.
 */
export const seedRecipesWave10A: Recipe[] = [
  {
    id: "recipe-flaki",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-flaki/b12717f8-dc1b-4cf6-9b11-eeb535d8dafc.webp",
    prepMinutes: 40,
    cookMinutes: 120,
    servings: 6,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-bulion"],
    categoryIds: ["category-suppen"],
    relatedPostIds: [
      "post-polnische-suppen",
      "post-majeranek",
      "post-polenladen",
      "post-sonntagsessen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Flaki",
        slug: "flaki",
        excerpt:
          "Flaki ist die deftige polnische Kuttelsuppe mit viel Majeranek, ein langsam gekochter Sonntagsklassiker mit jahrhundertealter Geschichte.",
        steps: [
          {
            text: "Kutteln (vorbereitet gekauft oder gut gereinigt) in feine Streifen schneiden. In leicht gesalzenem Wasser 45 bis 60 Minuten vorkochen, abgießen und mit klarem Wasser abspülen, damit die Suppe später mild statt streng schmeckt.",
            tip: "Fertig geputzte Rinderkutteln bekommst du oft frischer und günstiger im [Polenladen](/de/blog/polenladen-einkaufen), das erspart dir zu Hause viel Arbeit und Geruch in der Küche.",
          },
          {
            text: "In einem großen Topf Zwiebel, Karotte, Sellerie und Lauch in etwas Fett anschwitzen. Paprika und etwas Tomatenmark kurz mitrösten, dann mit Brühe auffüllen.",
            tip: "Das Fond-Gefühl erinnert an [Rosół](/de/rezepte/rosol), doch hier geht es um eine kräftige Kuttelsuppe und nicht um eine klare Sonntagsbrühe.",
          },
          {
            text: "Kutteln, Lorbeer, Piment und reichlich [Majeranek](/de/blog/majeranek) zugeben. Sanft 60 bis 90 Minuten köcheln lassen, bis die Kutteln weich sind, dann mit Salz, Pfeffer und nach Belieben etwas Paprikapulver abschmecken.",
            tip: "Gib den Majoran früh genug hinzu, damit er richtig ziehen kann, sonst bleibt die Suppe am Ende flach im Geschmack.",
          },
          {
            text: "Heiß mit frischem Brot servieren. Einen Überblick über die ganze Suppenfamilie gibt der Beitrag zu [polnischen Suppen](/de/blog/polnische-suppen).",
            tip: "Verwechsle Flaki nicht mit [Barszcz](/de/rezepte/barszcz-czerwony), [Żurek](/de/rezepte/zurek) oder [Ogórkowa](/de/rezepte/ogorkowa): Rote Bete, Sauerteig und Gurke geben jeweils einen völlig anderen Charakter.",
          },
        ],
        seoTitle: "Flaki Rezept | Kuttelsuppe polnisch | Alemniam",
        seoDescription:
          "Flaki, polnische Kuttelsuppe mit Majeranek. Bilingual mit DE-Einkauf, klar getrennt von Barszcz und Żurek.",
      },
      pl: {
        title: "Flaki",
        slug: "flaki",
        excerpt:
          "Flaki po polsku z dużą ilością majeranku, treściwa zupa gotowana godzinami, znana na polskich stołach od wieków.",
        steps: [
          {
            text: "Flaki (kupione przygotowane lub dobrze oczyszczone) pokrój w drobne paski. Podgotuj 45 do 60 minut w lekko osolonej wodzie, odcedź i przepłucz czystą wodą, żeby zupa wyszła później łagodna, a nie ostra.",
            tip: "Gotowe, oczyszczone flaki wołowe najłatwiej i najświeższe kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy), co oszczędza czas w kuchni.",
          },
          {
            text: "W dużym garnku zeszklij cebulę, marchew, seler i por na odrobinie tłuszczu. Krótko podsmaż paprykę i koncentrat pomidorowy, a potem zalej bulionem.",
            tip: "Wyczucie wywaru przypomina [rosół](/pl/rezepte/rosol), ale tutaj chodzi o mocną zupę z flakami, nie o klarowny bulion niedzielny.",
          },
          {
            text: "Dodaj flaki, liść laurowy, ziele angielskie i solidną porcję [majeranku](/pl/blog/majeranek-leksykon). Gotuj łagodnie 60 do 90 minut, aż flaki będą miękkie, a na końcu dopraw solą, pieprzem i ewentualnie papryką.",
            tip: "Majeranek dodaj wcześnie, żeby zdążył się rozwinąć, inaczej zupa wyjdzie płaska w smaku.",
          },
          {
            text: "Podawaj gorące z chlebem. Przegląd całej rodziny zup znajdziesz w artykule o [polskich zupach](/pl/blog/polskie-zupy).",
            tip: "Nie myl flaków z [barszczem](/pl/rezepte/barszcz-czerwony), [żurkiem](/pl/rezepte/zurek) czy [ogórkową](/pl/rezepte/ogorkowa): burak, zakwas i ogórek dają zupełnie inny charakter.",
          },
        ],
        seoTitle: "Flaki przepis | Zupa flaczki | Alemniam",
        seoDescription:
          "Flaki, polska zupa z flaków z majerankiem. Dwujęzycznie z zakupami w DE, osobno od barszczu i żurku.",
      },
    },
    ingredients: [
      {
        id: "fl-1",
        name: { de: "Rinderkutteln (vorbereitet)", pl: "Flaki wołowe (przygotowane)" },
        amount: 800,
        unit: { de: "g", pl: "g" },
        group: "other",
        storeHintDe: "Polenladen oder Fleischtheke, oft schon geputzt und vorgekocht",
      },
      {
        id: "fl-2",
        name: { de: "Fleisch- oder Knochenbrühe", pl: "Bulion mięsny lub kostny" },
        amount: 2,
        unit: { de: "l", pl: "l" },
        group: "pantry",
      },
      {
        id: "fl-3",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "fl-4",
        name: { de: "Karotte", pl: "Marchew" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "fl-5",
        name: { de: "Sellerie / Suppengrün", pl: "Seler / włoszczyzna" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "fl-6",
        name: { de: "Tomatenmark", pl: "Koncentrat pomidorowy" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "fl-7",
        name: { de: "Paprikapulver (edelsüß)", pl: "Papryka słodka" },
        amount: 1.5,
        unit: { de: "TL", pl: "łyżeczki" },
        group: "spices",
      },
      {
        id: "fl-8",
        name: { de: "Majoran getrocknet", pl: "Majeranek suszony" },
        amount: 2,
        unit: { de: "TL", pl: "łyżeczki" },
        group: "spices",
        storeHintDe: "Im Polenladen oft aromatischer, siehe auch das Majeranek-Lexikon",
      },
      {
        id: "fl-9",
        name: { de: "Lorbeerblatt", pl: "Liść laurowy" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
      {
        id: "fl-10",
        name: { de: "Pimentkörner", pl: "Ziele angielskie" },
        amount: 4,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
      {
        id: "fl-11",
        name: { de: "Öl oder Schmalz", pl: "Olej lub smalec" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "fl-12",
        name: { de: "Salz, Pfeffer", pl: "Sól, pieprz" },
        amount: 1,
        unit: { de: "nach Bedarf", pl: "do smaku" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-20T23:00:00.000Z",
    updatedAt: "2026-07-20T23:00:00.000Z",
  },
  {
    id: "recipe-schab-pieczony",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-schab-pieczony/9bc66840-1648-4957-ad82-67989c692788.webp",
    prepMinutes: 20,
    cookMinutes: 90,
    servings: 6,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-hauptgerichte"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-majeranek",
      "post-dutch-oven",
      "post-polenladen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Schab pieczony",
        slug: "schab-pieczony",
        excerpt:
          "Schab pieczony ist der polnische Schweinebraten aus dem Ofen mit Majeranek und Knoblauch, saftiges Sonntagsfleisch ohne Panade.",
        steps: [
          {
            text: "Schab (mit oder ohne Knochen) trocken tupfen und mit Salz, Pfeffer, Knoblauch und [Majeranek](/de/blog/majeranek) einreiben, optional dünn mit Senf bestreichen. Mindestens eine Stunde ruhen lassen, über Nacht ist noch besser.",
            tip: "Das ist reiner Ofenbraten ohne Panade. Wer den panierten Schnitzel sucht, findet ihn bei [Kotlet schabowy](/de/rezepte/kotlet-schabowy).",
          },
          {
            text: "Ofen auf 180 Grad Ober- und Unterhitze vorheizen. Das Fleisch in eine feste Form oder einen [Schmortopf](/de/blog/dutch-oven-kaufberatung) legen und etwas Wasser oder Brühe auf den Boden gießen.",
            tip: "Die Flüssigkeit im Boden verhindert, dass der austretende Bratensaft anbrennt, und hält die Luft im Ofen feucht genug für saftiges Fleisch.",
          },
          {
            text: "Etwa 75 bis 90 Minuten backen, je nach Größe des Stücks, und das Fleisch zwischendurch mit dem eigenen Bratensaft begießen. Das Innere soll saftig bleiben und darf nicht austrocknen. Vor dem Schneiden 10 Minuten ruhen lassen.",
            tip: "Am gleichen Tag passen auch [Żeberka pieczone](/de/rezepte/zeberka) gut auf den Tisch, ein anderes Stück Fleisch, aber dieselbe ruhige Ofenlogik.",
          },
          {
            text: "In Scheiben schneiden und mit Kartoffeln sowie [Mizeria](/de/rezepte/mizeria) oder einem einfachen Salat servieren.",
            tip: "Als ruhiger Fleisch-Mittelpunkt passt der Braten gut in ein [polnisches Sonntagsessen](/de/blog/sonntagsessen-polnisch), ganz ohne Pfannen-Stress in letzter Minute.",
          },
        ],
        seoTitle: "Schab pieczony Rezept | Schweinebraten polnisch Ofen | Alemniam",
        seoDescription:
          "Schab pieczony, polnischer Ofenschweinebraten mit Majeranek. Klar getrennt vom panierten Kotlet schabowy.",
      },
      pl: {
        title: "Schab pieczony",
        slug: "schab-pieczony",
        excerpt:
          "Schab pieczony to polska pieczeń z piekarnika z majerankiem i czosnkiem, soczyste niedzielne mięso bez panierki.",
        steps: [
          {
            text: "Schab (z kością lub bez) osusz i natrzyj solą, pieprzem, czosnkiem i [majerankiem](/pl/blog/majeranek-leksykon), opcjonalnie posmaruj cienko musztardą. Odczekaj co najmniej godzinę, najlepiej całą noc.",
            tip: "To czysta pieczeń z pieca, bez panierki. Kto szuka panierowanego kotleta, znajdzie go w przepisie na [kotlet schabowy](/pl/rezepte/kotlet-schabowy).",
          },
          {
            text: "Nagrzej piekarnik do 180 stopni, góra i dół. Ułóż mięso w solidnym naczyniu lub [garnku do duszenia](/pl/blog/garnek-do-duszenia) i wlej na dno odrobinę wody lub bulionu.",
            tip: "Płyn na dnie naczynia nie pozwala sokowi z pieczenia się spalić i utrzymuje w piekarniku wilgoć potrzebną do soczystego mięsa.",
          },
          {
            text: "Piecz 75 do 90 minut, zależnie od wielkości kawałka, i w trakcie polewaj mięso własnym sokiem. Środek ma zostać soczysty i nie może wyschnąć. Odstaw na 10 minut przed krojeniem.",
            tip: "Tego samego dnia dobrze smakują też [żeberka pieczone](/pl/rezepte/zeberka), inny kawałek mięsa, ale ta sama spokojna logika pieca.",
          },
          {
            text: "Kraj w plastry i podawaj z ziemniakami oraz [mizerią](/pl/rezepte/mizeria) lub prostą surówką.",
            tip: "Jako spokojne mięso na środku stołu pasuje dobrze do [obiadu niedzielnego](/pl/blog/obiad-niedzielny), bez maratonu przy patelni w ostatniej chwili.",
          },
        ],
        seoTitle: "Schab pieczony przepis | Pieczeń wieprzowa | Alemniam",
        seoDescription:
          "Schab pieczony, pieczeń z piekarnika z majerankiem. Wyraźnie osobno od panierowanego kotleta schabowego.",
      },
    },
    ingredients: [
      {
        id: "sp-1",
        name: {
          de: "Schweinenacken oder -kamm (Schab), mit/ohne Knochen",
          pl: "Schab wieprzowy z kością lub bez",
        },
        amount: 1200,
        unit: { de: "g", pl: "g" },
        group: "other",
        storeHintDe: "Fleischtheke, gleichmäßiges Stück mit etwas Fett für mehr Saft",
      },
      {
        id: "sp-2",
        name: { de: "Knoblauch", pl: "Czosnek" },
        amount: 4,
        unit: { de: "Zehen", pl: "ząbki" },
        group: "produce",
      },
      {
        id: "sp-3",
        name: { de: "Majoran getrocknet", pl: "Majeranek suszony" },
        amount: 2,
        unit: { de: "TL", pl: "łyżeczki" },
        group: "spices",
        storeHintDe: "Im Polenladen oft aromatischer",
      },
      {
        id: "sp-4",
        name: { de: "Senf (mittelscharf)", pl: "Musztarda (średnio ostra)" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "sp-5",
        name: { de: "Öl", pl: "Olej" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "sp-6",
        name: { de: "Salz", pl: "Sól" },
        amount: 1.5,
        unit: { de: "TL", pl: "łyżeczki" },
        group: "spices",
      },
      {
        id: "sp-7",
        name: { de: "Pfeffer", pl: "Pieprz" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
      {
        id: "sp-8",
        name: {
          de: "Wasser oder leichte Brühe (für die Form)",
          pl: "Woda lub lekki bulion (do naczynia)",
        },
        amount: 150,
        unit: { de: "ml", pl: "ml" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-20T23:05:00.000Z",
    updatedAt: "2026-07-20T23:05:00.000Z",
  },
];
