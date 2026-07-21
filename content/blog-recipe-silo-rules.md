# Blog ↔ Rezept Silo-Regeln

Editorial rules für Alemniam (DE/PL). Internes Doc — **nicht** in user-facing Copy zitieren.
Stimme: [`content-voice-rules.md`](./content-voice-rules.md). Ownership-Tabelle: [`keyword-ownership.md`](./keyword-ownership.md).

## Kernprinzip

1. **Das Rezept ist der Koch-Owner.** Longform unter dem Rezept (FACTS, Schritte, Tipps, Fehler) *ist* der Koch-Guide für dieses Gericht.
2. **Blog-Posts, die vor allem erklären, wie man Gericht X kocht**, konkurrieren mit dem Rezept um denselben Suchintent → **schlechte Cannibalization**. Google soll das Rezept für „… Rezept / przepis“ ranken, nicht den Blog.
3. **Blog ist wertvoll**, wenn der Winkel *nicht* schon im Rezept steckt:
   - Kultur / Geschichte / Diaspora-Alltag hinter dem Gericht
   - Technik **über mehrere Gerichte** hinweg (Teig, Panieren, Kiszenie, Freezer)
   - „10 Fehler…“, Einkauf/Polenladen, Ersatzprodukte, Gear/Kaufberatung
   - Anlässe & Speisepläne (Wigilia, Wielkanoc, Sonntag, Tłusty)
   - Zutaten-Lexika (Twaróg, Śmietana, Kiełbasa, Majeranek, Oscypek, Kasza)
4. **Ein Gericht = eine Money-Page für Cook-Intent** (Rezept-URL). Blog darf darauf zeigen; Rezept zeigt auf Blog nur für *anderen* Intent (Einkauf, Anlass, Gear).

## Was Blog tun darf

| Erlaubt | Beispiel |
|---------|----------|
| Varianten-Matrix / „welche Füllung wann“ | Naleśniki: Twaróg vs Fleisch vs Spinat vs Dżem — Links zu Rezepten |
| Kultur & Abgrenzung | Naleśniki vs deutsche Eierkuchen; Placki vs Reibekuchen |
| Technik-Tiefe ohne Mengenliste | Rosół klar halten; Barszcz absieben; Zakwas führen |
| Einkauf / Diaspora | Polenladen, Ersatzprodukte, Oscypek PDO |
| Anlass-Pläne | Wigilia-Menü, Sonntagsessen |
| Gear | Teigmaschine, Gusseisen, Freezer-Boxen |
| Fehlerlisten **über Varianten** | „Was bei allen Naleśniki schiefgeht“ — ohne Schritt-für-Schritt eines Rezepts |

## Was Blog nicht tun soll

- Vollständige Mengen + nummerierte Kochschritte für **ein** Gericht, das schon ein Rezept hat
- SEO-/Owner-Jargon in Lesertext (`Primary`, `Cook-Owner`, `Money Page`, `Cannibalization`, …) — siehe Voice-Rules
- Bidirektionale Konkurrenz um denselben Cook-Intent („Rezept hier, und auch hier im Guide nochmal mit Zeiten“)
- Dish-named Guides als Broad-Owner für „X Rezept“, wenn das Rezept bereits Longform hat

## Bei Überlappung (Workflow)

1. **Wichtige Koch-Fakten** aus dem Blog → in Rezept-FACTS / Schritte / Fehler verschieben (wenn dort fehlen).
2. Blog **verschlanken oder umschreiben**: Intro leitet Cook-Intent klar zum Rezept; einzigartige Winkel behalten.
3. Links: Blog → Rezept(e) für „jetzt kochen“. Rezept → Blog nur für Einkauf/Anlass/Technik-Cluster.
4. Ownership in `keyword-ownership.md` anpassen: Cook-KW → Rezept; Blog behält Kultur/Technik/Einkauf-KW.
5. Später optional: schwache Duplikate `HOLD` / Redirect — erst nach Slim + Messung.

## Klassifikation (Audit)

| Klasse | Bedeutung |
|--------|-----------|
| **KEEP** | Einzigartiger Winkel; kein Cook-Duplikat |
| **TRIM/REWRITE** | Überlappt Rezept; einzigartige Teile behalten, Koch-Schritte raus |
| **MERGE→RECIPE** | Kochinhalt gehört auf die Money-Page; Blog stark kürzen oder später redirecten |
| **HOLD/DEPRECATE** | Fast reiner Koch-Guide für ein Gericht; kein eigener Winkel mehr |

Audit-Stand: [`blog-recipe-audit.md`](./blog-recipe-audit.md).

## Wave-Koordination

Neue Rezept-Waves (z. B. Wave 15) nicht durch parallele Blog-Pillars blockieren. Silo-Cleanup bevorzugt **Blog-Bodies + Ownership + FACTS**, nicht Aggregator-/Seed-Merge von laufenden Waves.

## Checkliste vor Publish eines neuen Posts

- [ ] Gibt es schon ein Rezept für denselben Cook-Intent?
- [ ] Bringt der Post Kultur, Technik-über-Gerichte, Einkauf, Anlass oder Gear — nicht nur Schritte?
- [ ] Intro verweist Cook-Intent auf Rezept-URL(s)?
- [ ] Kein SEO-Jargon in Body/Excerpt/SEO-Description?
- [ ] `SEED_VERSION` bump bei Seed-/Body-Änderungen
- [ ] `npm run gate:reader-copy` + Build grün
