/**
 * Wave 12 Paket D — FACTS for klopsy, kluski-kladzione.
 *
 * Agent E merge into recipe-articles.ts:
 *   import { W12_FACTS_D } from "./recipe-articles-w12-d";
 *   Object.assign(FACTS, …, W12_FACTS_D);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Affiliate: guide-only (no relatedProductIds on recipes).
 *
 * Ownership:
 * - Klopsy / Pulpety (Kugeln in Dillsoße) ≠ Kotlet mielony (panierte Bulette)
 * - Kluski kładzione (Fallnudeln) ≠ Kluski śląskie / Kopytka / Makaron z serem
 */

export type ArticleFacts = {
  dishDe: string;
  dishPl: string;
  vibeDe: string;
  vibePl: string;
  originDe: string;
  originPl: string;
  shopDe: string;
  shopPl: string;
  techniqueDe: string;
  techniquePl: string;
  serveDe: string;
  servePl: string;
  diasporaDe: string;
  diasporaPl: string;
  mistakesDe: string;
  mistakesPl: string;
  variantsDe: string;
  variantsPl: string;
};

export const W12_FACTS_D: Record<string, ArticleFacts> = {
  "recipe-klopsy": {
    dishDe: "Klopsy in Dillsoße",
    dishPl: "Klopsy w sosie koperkowym",
    vibeDe: "mild, cremig, nach Dill und Brühe — Alltagsteller mit Soße",
    vibePl: "łagodny, kremowy, z koperkiem i bulionem — talerz codzienny w sosie",
    originDe:
      "Klopsy — auch Pulpety — sind der Rezept für Hackfleischkugeln, die in einer Soße garziehen, hier bewusst in der Dill-Sahnelinie. Das ist weder die panierte Bulette [Kotlet mielony](/de/rezepte/kotlet-mielony) noch der panierte Sonntags-Schnitzel [Kotlet schabowy](/de/rezepte/kotlet-schabowy). Form und Technik trennen die Gerichte: rund, ohne Panade, in Soße — nicht flach und knusprig. Menü-Kultur bleibt im [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch); Panade-Wissen bleibt im [Panieren-Guide](/de/blog/panieren-schabowy). In der Diaspora oft der pragmatische Hack-Teller, wenn die Pfanne nicht die Panade-Station werden soll.",
    originPl:
      "Klopsy — też pulpety — to przepis: kulki z mielonego mięsa duszone w sosie, tu świadomie linia koperkowo-śmietanowa. To ani panierowany [kotlet mielony](/pl/rezepte/kotlet-mielony), ani [schabowy](/pl/rezepte/kotlet-schabowy). Forma i technika dzielą dania: okrągłe, bez panierki, w sosie — nie płaskie i chrupiące. Kulturę menu zostawiamy w [obiadzie niedzielnym](/pl/blog/obiad-niedzielny); panierka w [przewodniku panierowania](/pl/blog/panierowanie-kotlet). W diasporze często pragmatyczny talerz z mielonego, gdy nie chce się stacji panierki.",
    shopDe:
      "Hack gemischt, altes Brötchen, Ei, Zwiebel, Brühe. Dill frisch aus dem Supermarkt. Śmietana 12–18 % oft im [Polenladen](/de/blog/polenladen-einkaufen); alternativ Schmand laut [Śmietana/Schmand](/de/blog/smietana-schmand) ehrlich benennen. Keine Semmelbrösel-Panade nötig — das hält den Intent klar neben [Kotlet mielony](/de/rezepte/kotlet-mielony).",
    shopPl:
      "Mięso mielone, czerstwa bułka, jajko, cebula, bulion. Koperek świeży z marketu. Śmietana 12–18 % często w [sklepie polskim](/pl/blog/sklep-polski-zakupy); schmand według [przewodnika](/pl/blog/smietana-czy-schmand) — nazwać uczciwie. Bułka tarta do panierki nie jest potrzebna — intent zostaje czysty obok [kotleta mielonego](/pl/rezepte/kotlet-mielony).",
    techniqueDe:
      "Masse binden, Kugeln formen, anbraten, Soße aufbauen, dann in der Soße garziehen. Śmietana erst bei reduzierter Hitze — sonst flockt sie. Dill am Ende. Zu große Klopsy bleiben innen roh; zu kleine trocknen. Keine Dreifach-Panade — das wäre die [Mielony](/de/rezepte/kotlet-mielony)-Linie.",
    techniquePl:
      "Związać farsz, uformować kulki, obsmażyć, zbudować sos, potem dusić w sosie. Śmietanę przy obniżonym ogniu — inaczej się zetnie. Koper na końcu. Za duże klopsy zostaną surowe w środku; za małe wyschną. Bez trójstopniowej panierki — to linia [mielonego](/pl/rezepte/kotlet-mielony).",
    serveDe:
      "Heiß mit Soße, Kartoffeln, Reis oder Brot. Dill und optional Gurke. Menü [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Wer knusprige Panade will: [Kotlet mielony](/de/rezepte/kotlet-mielony) oder [Schabowy](/de/rezepte/kotlet-schabowy). Reste in Soße aufwärmen — oft runder am zweiten Tag.",
    servePl:
      "Gorące z sosem, ziemniakami, ryżem lub chlebem. Koperek i opcjonalnie ogórek. Menu [obiad niedzielny](/pl/blog/obiad-niedzielny). Kto chce chrupiącą panierkę: [kotlet mielony](/pl/rezepte/kotlet-mielony) lub [schabowy](/pl/rezepte/kotlet-schabowy). Resztki w sosie — często lepsze nazajutrz.",
    diasporaDe:
      "Hack und Brötchen sind überall in DE greifbar; Dill und Śmietana machen den polnischen Charakter. Kinder formen Kugeln; heiße Soße bleibt bei Erwachsenen. Schneller als volle Panade-Station laut [Panieren](/de/blog/panieren-schabowy). Im [Polenladen](/de/blog/polenladen-einkaufen) findest du Śmietana und Majoran.",
    diasporaPl:
      "Mięso i bułka są w DE wszędzie; koperek i śmietana budują polski charakter. Dzieci formują kulki; gorący sos u dorosłych. Szybciej niż pełna stacja panierki według [panierowania](/pl/blog/panierowanie-kotlet). W [sklep polski](/pl/blog/sklep-polski-zakupy) kupisz śmietanę i majeranek.",
    mistakesDe:
      "Mit [Kotlet mielony](/de/rezepte/kotlet-mielony) verwechseln und panieren. Śmietana aufkochen lassen (flockt). Zu wenig Dill. Zu große Klopsy. Mengen und Schritte nicht mit dem verlinkten Nachbarn vermischen. nein, dort bleibt Kultur-Guide.",
    mistakesPl:
      "Mylenie z [kotletem mielonym](/pl/rezepte/kotlet-mielony) i panierowanie. Zagotowanie śmietany. Za mało koperku. Za duże klopsy. Nie mieszać ilości i kroków z sąsiednim przepisem. nie.",
    variantsDe:
      "Tomatensoße statt Dill als Hausvariante — Fokus bleibt Dill-Linie auf dieser URL. Mit Pute milder. Passende Nachbarn sind [Kotlet mielony](/de/rezepte/kotlet-mielony), [Schabowy](/de/rezepte/kotlet-schabowy). Guides: [Panieren](/de/blog/panieren-schabowy), [Śmietana](/de/blog/smietana-schmand), [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    variantsPl:
      "Sos pomidorowy zamiast koperkowego jako wariant domu — fokus tej URL zostaje linia koperkowa. Z indykiem łagodniej. Pasujący sąsiedzi to [kotlet mielony](/pl/rezepte/kotlet-mielony), [schabowy](/pl/rezepte/kotlet-schabowy). Przewodniki: [panierowanie](/pl/blog/panierowanie-kotlet), [śmietana](/pl/blog/smietana-czy-schmand), [obiad niedzielny](/pl/blog/obiad-niedzielny).",
  },

  "recipe-kluski-kladzione": {
    dishDe: "Kluski kładzione",
    dishPl: "Kluski kładzione",
    vibeDe: "weich, eiig, unregelmäßig — Fallnudeln für klare Brühe",
    vibePl: "miękkie, jajeczne, nieregularne — kluski do jasnego bulionu",
    originDe:
      "Kluski kładzione sind der Rezept für Fallnudeln: ein zäher Ei-Mehl-Teig, der mit dem Löffel in kochendes Wasser oder [Rosół](/de/rezepte/rosol) gelegt wird. Das ist weder die schlesische Mulden-Kartoffelklößchen-Linie [Kluski śląskie](/de/rezepte/kluski-slaskie) noch die ausgerollten Kartoffelstückchen [Kopytka](/de/rezepte/kopytka) noch die Pasta+Twaróg-Linie [Makaron z serem](/de/rezepte/makaron-z-serem). Technik-Guide für klare Brühe bleibt [Rosół-Technik](/de/blog/rosol-technik); Overview der Suppenfamilie: [Polnische Suppen](/de/blog/polnische-suppen). Hier liegt der enge Nudel-Rezept.",
    originPl:
      "Kluski kładzione to przepis: ciasto jajeczno-mączne odkładane łyżką do wrzątku lub [rosołu](/pl/rezepte/rosol). To ani linia śląskich knedli z dziurką [kluski śląskie](/pl/rezepte/kluski-slaskie), ani wałkowane [kopytka](/pl/rezepte/kopytka), ani pasta z twarogiem [makaron z serem](/pl/rezepte/makaron-z-serem). Owner techniki jasnego bulionu: [jak ugotować rosół](/pl/blog/jak-ugotowac-rosol); przegląd zup: [polskie zupy](/pl/blog/polskie-zupy). Tu wąski Rezept klusek.",
    shopDe:
      "Eier, Weizenmehl, Salz, etwas Wasser oder Milch. Brühe idealerweise eigener [Rosół](/de/rezepte/rosol). Dill und Butter optional. Alles im deutschen Supermarkt; kein Polenladen-Zwang. Wer die Brühe vertiefen will: [Rosół-Technik](/de/blog/rosol-technik) und Einordnung unter [Polnische Suppen](/de/blog/polnische-suppen).",
    shopPl:
      "Jajka, mąka pszenna, sól, odrobina wody lub mleka. Bulion najlepiej własny [rosół](/pl/rezepte/rosol). Koperek i masło opcjonalnie. Wszystko w niemieckim markecie. Głębia bulionu: [jak ugotować rosół](/pl/blog/jak-ugotowac-rosol) i [polskie zupy](/pl/blog/polskie-zupy).",
    techniqueDe:
      "Teig löffelbar, nicht knetfest. In leicht kochendes Wasser oder Brühe stechen; nach dem Aufschwimmen kurz nachgaren. Zu flüssiger Teig zerfällt; zu fest wird gummiartig. Fertige Fadenudeln aus der Packung sind eine andere Intent-Linie — hier zählt die Handarbeit mit dem Löffel.",
    techniquePl:
      "Ciasto łyżkowalne, nie do wyrabiania. Odkładać do lekko wrzącej wody lub bulionu; po wypłynięciu krótko dogotować. Za rzadkie ciasto się rozpada; za twarde robi się gumowate. Gotowe nitki z paczki to inna linia intent — tu liczy się praca łyżką.",
    serveDe:
      "In heißem [Rosół](/de/rezepte/rosol) mit Karotte und Petersilie, oder mit Butter und Dill als Beilage. Menü [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Andere Teig-Beilagen bleiben getrennt: [Kluski śląskie](/de/rezepte/kluski-slaskie), [Kopytka](/de/rezepte/kopytka). Nudeln nicht dauerhaft in Restbrühe lassen.",
    servePl:
      "W gorącym [rosołe](/pl/rezepte/rosol) z marchewką i pietruszką albo z masłem i koperkiem. Menu [obiad niedzielny](/pl/blog/obiad-niedzielny). Inne dodatki ciastowe osobno: [kluski śląskie](/pl/rezepte/kluski-slaskie), [kopytka](/pl/rezepte/kopytka). Nie trzymaj klusek w resztkach bulionu.",
    diasporaDe:
      "Schnellste frische Nudel zum Sonntags-[Rosół](/de/rezepte/rosol), wenn keine Packungsnudeln gewünscht sind. Kinder dürfen Teig rühren; heißer Topf bei Erwachsenen. Technik-Rahmen: [Rosół-Technik](/de/blog/rosol-technik). Overview [Polnische Suppen](/de/blog/polnische-suppen).",
    diasporaPl:
      "Najszybszy świeży makaron do niedzielnego [rosołu](/pl/rezepte/rosol), gdy nie chcesz nitek z paczki. Dzieci mieszają ciasto; gorący garnek u dorosłych. Rama: [jak ugotować rosół](/pl/blog/jak-ugotowac-rosol). Przegląd osobny farsz i osobne ilości.: [polskie zupy](/pl/blog/polskie-zupy).",
    mistakesDe:
      "Mit [Kluski śląskie](/de/rezepte/kluski-slaskie) oder [Kopytka](/de/rezepte/kopytka) verwechseln. Teig zu fest kneten. Zu stark sprudelnd kochen. Mengen und Schritte nicht mit dem verlinkten Nachbarn vermischen. nein.",
    mistakesPl:
      "Mylenie z [kluskami śląskimi](/pl/rezepte/kluski-slaskie) lub [kopytkami](/pl/rezepte/kopytka). Zbyt twarde wyrabianie. Zbyt gwałtowne gotowanie. Nie mieszać ilości i kroków z sąsiednim przepisem. nie.",
    variantsDe:
      "Mehr Ei fester; etwas Grieß. Mit Butter statt Brühe als Beilage. Passende Nachbarn sind [Rosół](/de/rezepte/rosol), [Kluski śląskie](/de/rezepte/kluski-slaskie), [Kopytka](/de/rezepte/kopytka). Guides: [Rosół-Technik](/de/blog/rosol-technik), [Polnische Suppen](/de/blog/polnische-suppen), [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    variantsPl:
      "Więcej jaj twardziej; odrobina kaszy manny. Z masłem zamiast bulionu jako dodatek. Pasujący sąsiedzi to [rosół](/pl/rezepte/rosol), [kluski śląskie](/pl/rezepte/kluski-slaskie), [kopytka](/pl/rezepte/kopytka). Przewodniki: [rosół](/pl/blog/jak-ugotowac-rosol), [polskie zupy](/pl/blog/polskie-zupy), [obiad niedzielny](/pl/blog/obiad-niedzielny).",
  },
};
