/**
 * Wave 9 Paket D — Kaszanka FACTS (new).
 *
 * Agent E merge into recipe-articles.ts:
 * import { W9_FACTS_D } from "./recipe-articles-w9-d";
 * import { W9_FACTS_W8_RETROFIT } from "./recipe-articles-w9-d-retrofit";
 * Object.assign(FACTS, W9_FACTS_W8_RETROFIT, W9_FACTS_D);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Ownership: Cook-Primary „Kaszanka Rezept“ — Types bleiben bei post-kielbasa-arten.
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

export const W9_FACTS_D: Record<string, ArticleFacts> = {
 "recipe-kaszanka": {
 dishDe: "Kaszanka",
 dishPl: "Kaszanka",
 vibeDe: "deftig, würzig, nach Zwiebel und knuspriger Hülle",
 vibePl: "treściwa, korzenna, z cebulą i chrupką osłonką",
 originDe:
 "Kaszanka war in Polen bis ins 17. Jahrhundert praktisch unbekannt und kam wohl über Schlesien aus Deutschland oder Dänemark ins Land. Der Chronist Jan Chryzostom Pasek beschrieb 1658 auf einem Feldzug nach Dänemark, wie die dortigen Soldaten kein Blut vom geschlachteten Tier verschwenden, sondern es mit Grütze aus Gerste oder Buchweizen zu Würsten verarbeiten, die sie als besonderen Leckerbissen bei jedem Essen auftischen, während er selbst sich weigerte mitzuessen. Trotz ihres Rufs als einfaches Bauerngericht stammen die ältesten polnischen Rezepte für solche Wurst tatsächlich aus höfischen Kochbüchern, und noch vor hundert Jahren servierte man sie bei der Adelsfamilie Potocki fein aufgeschnitten und mit reduziertem Knochensud übergossen. In Schlesien entwickelte sich mit dem Krupniok eine eigene, dickere Variante, die traditionell zum Bergmannsfest Barbórka gehört und wegen ihres hohen Brennwerts besonders bei Kumpels beliebt war. Heute ist Kaszanka schlicht das Rezept fürs Braten oder Grillen mit Zwiebel. Welche Wurstsorten es sonst noch gibt und wofür sie sich eignen, erklärt der [Kiełbasa-Arten-Guide](/de/blog/kielbasa-arten).",
 originPl:
 "Kaszanka była w Polsce praktycznie nieznana aż do XVII wieku i najprawdopodobniej trafiła tu przez Śląsk z Niemiec albo Danii. Kronikarz Jan Chryzostom Pasek opisywał w 1658 roku podczas wyprawy do Danii, jak tamtejsi żołnierze nie marnują ani kropli krwi zabitego zwierzęcia, tylko mieszają ją z kaszą jęczmienną lub tatarczaną i robią z tego kiszki, które podają przy każdym posiłku jako wielki specjał, podczas gdy on sam odmawiał jedzenia tej potrawy. Wbrew swojej opinii prostego dania chłopskiego, najstarsze polskie przepisy na taką wędlinę pochodzą z kucharskich książek dworskich, a jeszcze sto lat temu u Potockich z Krzeszowic podawano ją cienko pokrojoną i polaną zredukowanym wywarem z kości. Na Śląsku wykształciła się osobna, grubsza odmiana zwana krupniokiem, tradycyjnie związana ze świętem górniczym Barbórką i ceniona przez górników za wysoką kaloryczność. Dziś kaszanka to po prostu przepis na smażenie lub grillowanie z cebulą, a jakie są inne rodzaje kiełbasy i do czego pasują, wyjaśnia [przewodnik rodzajów kiełbasy](/pl/blog/rodzaje-kielbasy).",
 shopDe:
 "Achte auf feste, würzige Kaszanka aus dem [Polenladen](/de/blog/polenladen-einkaufen) mit kurzer Zutatenliste, sichtbarer Grütze und einem Anschnitt, der nicht wässrig wirkt. Dazu Zwiebeln, Schmalz oder Öl, optional Apfel, Majoran sowie Brot oder Kartoffeln. Welche Wurstsorten es sonst gibt, erklärt der [Kiełbasa-Arten-Guide](/de/blog/kielbasa-arten), hier zählt nur der Kauf fürs Braten. Kühlkette und Mindesthaltbarkeit prüfen und eine geöffnete Packung zügig verbrauchen.",
 shopPl:
 "Wybieraj zwartą, korzenną kaszankę ze [sklepu polskiego](/pl/blog/sklep-polski-zakupy) z krótkim składem, widoczną kaszą i przekrojem, który nie wygląda wodnisto. Do tego cebula, smalec lub olej, opcjonalnie jabłko, majeranek oraz chleb lub ziemniaki. Jakie są inne rodzaje kiełbasy, wyjaśnia [przewodnik rodzajów kiełbasy](/pl/blog/rodzaje-kielbasy), tu liczy się tylko zakup pod smażenie. Sprawdź łańcuch chłodniczy i datę przydatności, a otwarte opakowanie zużyj szybko.",
 techniqueDe:
 "Bei mittlerer Hitze zuerst die Zwiebel Farbe holen lassen, dann die Kaszanka-Scheiben dazugeben, sodass die Hülle knusprig und das Innere warm wird, ohne dass man sie dabei zerdrückt. Zu hohe Hitze lässt die Hülle platzen und die Füllung austrocknen, zu niedrige macht sie gummiig und fettig. Majoran erst sparsam am Ende zugeben, mehr zu Dosierung und Charakter steht im [Majoran-Lexikon](/de/blog/majeranek). Auf dem Grill funktioniert indirekte Hitze mit häufigem Wenden am besten, während Apfel oder Zwiebel dabei separat gegart werden.",
 techniquePl:
 "Na średnim ogniu najpierw zrumień cebulę, potem dodaj plastry kaszanki, żeby osłonka zrobiła się chrupka, a środek ciepły, bez wyciskania farszu. Zbyt mocny ogień pęka osłonkę i wysusza farsz, zbyt słaby robi kaszankę gumowatą i tłustą. Majeranek dodaj oszczędnie dopiero na końcu, więcej o dawkowaniu pisze [leksykon majeranku](/pl/blog/majeranek-leksykon). Na grillu najlepiej sprawdza się ciepło pośrednie z częstym obracaniem, a jabłko lub cebulę smaż wtedy osobno.",
 serveDe:
 "Klassisch mit Zwiebel und Brot oder Kartoffeln servieren, dazu passt warm auch [Kapusta zasmażana](/de/rezepte/kapusta-zasmażana). Als deftiger Teller fügt sich das Gericht gut in den Rahmen des [polnischen Sonntagsessens](/de/blog/sonntagsessen-polnisch) ein. Wer lieber geschmorten Kohl mit Fleischlagen möchte, findet mit [Bigos](/de/rezepte/bigos) den passenden Nachbarn, allerdings ein ganz anderes Gericht.",
 servePl:
 "Podawaj klasycznie z cebulą i chlebem lub ziemniakami, dobrze pasuje też ciepła [kapusta zasmażana](/pl/rezepte/kapusta-zasmażana). Jako treściwy talerz świetnie wpisuje się w ramy [obiadu niedzielnego](/pl/blog/obiad-niedzielny). Kto woli duszoną kapustę z warstwami mięsa, znajdzie odpowiedni pomysł w [bigosie](/pl/rezepte/bigos), choć to zupełnie inne danie.",
 diasporaDe:
 "In Deutschland ist Kaszanka oft ein schnelles Freitagabend- oder Sonntagsgericht: eine Packung aus dem Laden, zwei Zwiebeln, fertig in einer halben Stunde. Kinder dürfen die Zwiebeln sortieren, während die heiße Pfanne bei den Erwachsenen bleibt. Reste wärmt man am nächsten Tag am besten in der Pfanne auf und hält sie nicht stundenlang warm, damit die Hülle nicht zäh wird.",
 diasporaPl:
 "W Niemczech kaszanka bywa szybkim piątkowym lub niedzielnym obiadem: jedna paczka ze sklepu, dwie cebule, gotowe w pół godziny. Dzieci mogą sortować cebulę, a gorąca patelnia zostaje przy dorosłych. Resztki najlepiej odgrzać następnego dnia na patelni, a nie trzymać godzinami na ciepło, bo osłonka wtedy robi się gumowata.",
 mistakesDe:
 "Zu hohe Hitze lässt die Kaszanka aufplatzen und austrocknen, während zu viel Majoran am Ende schnell bitter schmeckt. Wässrige Billigware ohne sichtbare Grütze bringt selten den erwarteten Geschmack. Verwechsle das Gericht auch nicht mit [Bigos](/de/rezepte/bigos), denn dort steht geschmorter Kohl mit Fleischlagen im Mittelpunkt, nicht die gebratene Wurst selbst.",
 mistakesPl:
 "Zbyt mocny ogień sprawia, że kaszanka pęka i wysycha, a za dużo majeranku na końcu szybko robi się gorzkie. Wodnista, tania kaszanka bez widocznej kaszy rzadko daje oczekiwany smak. Nie myl też tego dania z [bigosem](/pl/rezepte/bigos), bo tam w centrum stoi duszona kapusta z warstwami mięsa, a nie sama smażona wędlina.",
 variantsDe:
 "Beliebt sind Varianten mit Apfel, mit etwas Senf am Rand oder gegrillt statt in der Pfanne, dazu passt ein Teller mit Kapusta als Beilage. Der geschmorte Nachbar mit Kohl und Fleischlagen bleibt [Bigos](/de/rezepte/bigos), die passende Beilage ist [Kapusta zasmażana](/de/rezepte/kapusta-zasmażana). Eine gebackene Hauspastete, die nicht mit Blutwurst zu verwechseln ist, findet sich bei [Pasztet drobiowy](/de/rezepte/pasztet). Mehr zu Sorten und Qualität liefert der [Kiełbasa-Arten-Guide](/de/blog/kielbasa-arten).",
 variantsPl:
 "Popularne są warianty z jabłkiem, z musztardą z boku albo z grilla zamiast patelni, do tego dobrze pasuje talerz z kapustą jako dodatkiem. Duszonym sąsiadem z kapustą i warstwami mięsa zostaje [bigos](/pl/rezepte/bigos), a pasującym dodatkiem [kapusta zasmażana](/pl/rezepte/kapusta-zasmażana). Pieczony pasztet domowy, którego nie należy mylić z kaszanką, znajdziesz w [pasztecie drobiowym](/pl/rezepte/pasztet). Więcej o rodzajach i jakości pisze [przewodnik rodzajów kiełbasy](/pl/blog/rodzaje-kielbasy).",
 },
};
