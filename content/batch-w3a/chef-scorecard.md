# Batch W3a — Chef Scorecard

**Chef run:** 2026-07-19  
**Inputs:** 6 body files + `batch-w3a-briefs.md` + `covers.json`  
**Word-count tool:** `node` whitespace split (post-edit verification below)

---

## Summary

| Post pair | Avg score | Verdict |
|-----------|-----------|---------|
| Gołąbki (DE+PL) | **9.7** | PASS |
| Naleśniki (DE+PL) | **9.6** | PASS |
| Oscypek (DE+PL) | **9.6** | PASS |
| **Batch overall** | **9.6** | **READY_TO_INTEGRATE** |

**Cover caveat (non-blocking):** Naleśniki and Oscypek cover images are usable (HTTP 200, unique vs recipe covers) but only partially match brief motifs — see criterion 7. Bodies do not require further edits for integration.

---

## Word counts (verified post-edit)

| File | Words | ≥1100 |
|------|------:|-------|
| `golabki.de.md` | 2229 | ✓ |
| `golabki.pl.md` | 1704 | ✓ |
| `nalesniki.de.md` | 1839 | ✓ |
| `nalesniki.pl.md` | 1723 | ✓ |
| `oscypek.de.md` | 1642 | ✓ |
| `oscypek.pl.md` | 1731 | ✓ |

---

## Post A — Gołąbki Pillar

| # | Criterion | Score | Notes |
|---|-----------|------:|-------|
| 1 | Word count ≥1100 | **10** | Both languages well above floor. |
| 2 | H2 coverage / DE↔PL parity | **9** | All 9 brief H2 topics present in order. PL H1 slightly expanded (“dlaczego warto”); FAQ now `###` on both sides. |
| 3 | Internal links | **10** | All slugs match `seed.ts` / `seed-blog-wave2.ts` (e.g. `/de/blog/rosol-technik` ↔ `/pl/blog/jak-ugotowac-rosol`, Dutch Oven ↔ garnek-do-duszenia). |
| 4 | FAQ voice (wir / my) | **10** | Fixed DE `ihr`/imperative → `wir`. PL FAQ converted to `my`/`nasze`/`robimy` throughout. |
| 5 | No keyword cannibalization | **9** | DE explicitly defers quantities to recipe. PL numbered blanch/roll steps softened to prose (guide, not recipe duplicate). |
| 6 | Tone: calm diaspora | **10** | No kitsch; REWE/Kaufland realism; PL rejects “prababci z wsi” theatrics. |
| 7 | Cover motif fit | **10** | `covers.json`: stuffed cabbage in tomato sauce — matches pot-schmor content. |

**Pair average: 9.7**

### Fixes applied
- `golabki.de.md`: FAQ + Weiterlesen — consistent **wir** voice (removed `ihr`, `Probiert`, `prüft`).
- `golabki.pl.md`: FAQ `**bold**` → `###` headers; blanch/roll numbered lists → prose; FAQ answers → **my** voice.

---

## Post B — Naleśniki Pillar

| # | Criterion | Score | Notes |
|---|-----------|------:|-------|
| 1 | Word count ≥1100 | **10** | Both well above floor. |
| 2 | H2 coverage / DE↔PL parity | **10** | All 8 brief sections aligned (entity vs Pfannkuchen → Teig → Braten → Füllung → Rollen → Meal-Prep → FAQ → Weiterlesen). |
| 3 | Internal links | **10** | Twaróg, Śmietana, Ersatz/Zamienniki, recipes — correct `/de/` vs `/pl/` map. |
| 4 | FAQ voice (wir / my) | **10** | Fixed PL `robicie` → `robimy`. DE/PL both use wir/my in FAQ. |
| 5 | No keyword cannibalization | **10** | Twaróg purchase/drainage delegated to owner post (`twarog-deutschland` / `twarog-w-niemczech`); naleśniki keeps technique only. |
| 6 | Tone: calm diaspora | **10** | Practical REWE/Aldi framing; no folklore. |
| 7 | Cover motif fit | **7** | Image = stacked sweet pancakes with berries, not thin rolled filled naleśniki. `covers.json` note flags acceptable interim; brief prefers rolled crepes. **Body content matches motif; image is partial fit.** |

**Pair average: 9.6**

### Fixes applied
- `nalesniki.pl.md`: FAQ answer — `robicie` → `robimy`.

### Open (non-body)
- Optional W3 refresh: replace cover with thin rolled-crepe photo when available.

---

## Post C — Oscypek Lexicon

| # | Criterion | Score | Notes |
|---|-----------|------:|-------|
| 1 | Word count ≥1100 | **10** | Both well above floor. |
| 2 | H2 coverage / DE↔PL parity | **10** | PDO → echt vs ähnlich → grill/patelnia → dodatki → storage → FAQ → weiterlesen. |
| 3 | Internal links | **10** | Gusseisen ↔ patelnia-zelivna, Polenladen ↔ sklep-polski-zakupy, Ersatz ↔ zamienniki, recipes correct. |
| 4 | FAQ voice (wir / my) | **10** | Consistent wir/my in all FAQ answers. |
| 5 | No keyword cannibalization | **10** | Lexicon scope; recipe linked, not duplicated. |
| 6 | Tone: calm diaspora | **10** | “Ohne Bergromantik” / “Bez góralskiej dekoracji”; PDO explained honestly. |
| 7 | Cover motif fit | **7** | Generic aged hard cheese with rind — orientation OK, not spindle/grilled oscypek. `covers.json` note prefers grilled spindle in refresh. **Content describes grill/pfanne correctly.** |

**Pair average: 9.6**

### Fixes applied
- None required after review.

### Open (non-body)
- Optional W3 refresh: spindle grilled oscypek cover when sourced.

---

## Internal link audit (spot-check vs seed)

| DE | PL | Status |
|----|-----|--------|
| `/de/rezepte/golabki` | `/pl/rezepte/golabki` | ✓ |
| `/de/rezepte/rosol` | `/pl/rezepte/rosol` | ✓ |
| `/de/rezepte/bigos` | `/pl/rezepte/bigos` | ✓ |
| `/de/blog/sonntagsessen-polnisch` | `/pl/blog/obiad-niedzielny` | ✓ |
| `/de/blog/dutch-oven-kaufberatung` | `/pl/blog/garnek-do-duszenia` | ✓ |
| `/de/blog/rosol-technik` | `/pl/blog/jak-ugotowac-rosol` | ✓ |
| `/de/blog/smietana-schmand` | `/pl/blog/smietana-czy-schmand` | ✓ |
| `/de/rezepte/nalesniki-twarog` | `/pl/rezepte/nalesniki-twarog` | ✓ |
| `/de/blog/twarog-deutschland` | `/pl/blog/twarog-w-niemczech` | ✓ |
| `/de/blog/ersatzprodukte-de` | `/pl/blog/zamienniki-skladnikow` | ✓ |
| `/de/rezepte/oscypek-preiselbeeren` | `/pl/rezepte/oscypek-zurawina` | ✓ |
| `/de/rezepte/placki/ziemniaczane` | `/pl/rezepte/placki/ziemniaczane` | ✓ |
| `/de/blog/gusseisenpfanne` | `/pl/blog/patelnia-zelivna` | ✓ |
| `/de/blog/polenladen-einkaufen` | `/pl/blog/sklep-polski-zakupy` | ✓ |

---

## Final verdict

### **READY_TO_INTEGRATE**

All six body files meet brief requirements after chef edits. Batch average **9.6 / 10**. Cover images for Naleśniki and Oscypek score 7 on motif fit — documented in `covers.json`, not blocking body integration; recommend optional image refresh in a follow-up pass.
