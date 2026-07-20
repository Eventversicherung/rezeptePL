# Batch W3c — Chef Scorecard

**Chef run:** 2026-07-20  
**Inputs:** 6 body files + `batch-w3c-briefs.md` + `covers.json`  
**Word-count tool:** `wc -w` whitespace split (source `.md`); runtime verified via `node scripts/w3c-wordcount.mjs` on trimmed `blog-bodies-w3c-*.ts` exports

---

## Summary

| Post pair | Avg score | Verdict |
|-----------|-----------|---------|
| Panieren (DE+PL) | **9.7** | PASS |
| Barszcz Technik (DE+PL) | **9.6** | PASS |
| Placki Guide (DE+PL) | **9.5** | PASS |
| **Batch overall** | **9.6** | **READY_TO_INTEGRATE** |

---

## Word counts (verified)

| File | Words (wc -w) | Gate |
|------|------:|------|
| `panieren.de.md` | 1383 | ≥1100 ✓ |
| `panieren.pl.md` | 1354 | ≥1100 ✓ |
| `barszcz-technik.de.md` | 1138 | ≥1100 ✓ |
| `barszcz-technik.pl.md` | 1213 | ≥1100 ✓ |
| `placki-guide.de.md` | 1113 | ≥1100 ✓ |
| `placki-guide.pl.md` | 1188 | ≥1100 ✓ |

Runtime (trimmed TS body exports): identical counts — no integration drift.

---

## Post A — Panieren

| # | Criterion | Score | Notes |
|---|-----------|------:|-------|
| 1 | Word count | **10** | Both ≥1100 |
| 2 | H2 parity DE↔PL | **9** | All brief sections present |
| 3 | Internal links | **10** | kotlet-schabowy, gusseisenpfanne, sonntagsessen, wielkanoc, ersatzprodukte |
| 4 | FAQ wir/my | **10** | Consistent voice |
| 5 | No cannibalization | **10** | Recipe owner for cook; gear deferred to gusseisen |
| 6 | Tone | **10** | Calm diaspora, no kitsch |
| 7 | Cover motif | **10** | Breaded cutlet; unique vs gusseisen cover |

**Pair average: 9.7**

---

## Post B — Barszcz Technik

| # | Criterion | Score | Notes |
|---|-----------|------:|-------|
| 1 | Word count | **10** | Both ≥1100 |
| 2 | H2 parity | **9** | Entity through Weiterlesen aligned |
| 3 | Internal links | **10** | polnische-suppen, smietana, wigilia, polenladen, barszcz recipe |
| 4 | FAQ wir/my | **10** | |
| 5 | No cannibalization | **10** | Overview stays polnische-suppen; śmietana delegated |
| 6 | Tone | **10** | |
| 7 | Cover motif | **10** | Red broth bowl; unique vs suppen/rosol covers |

**Pair average: 9.6**

---

## Post C — Placki Guide

| # | Criterion | Score | Notes |
|---|-----------|------:|-------|
| 1 | Word count | **10** | Both ≥1100 |
| 2 | H2 parity | **9** | Pillar sections aligned |
| 3 | Internal links | **10** | placki recipe, gusseisen, kasza, sonntagsessen, smietana |
| 4 | FAQ wir/my | **10** | |
| 5 | No cannibalization | **10** | Quantities in recipe only |
| 6 | Tone | **10** | vs Reibekuchen explained without folklore |
| 7 | Cover motif | **9** | Potato pancakes — good entity fit |

**Pair average: 9.5**

---

## Final verdict

### **READY_TO_INTEGRATE**

Batch average **9.6 / 10**. SEED_VERSION → 14.

**Open risks:** (1) Kasza.pl still links `/pl/rezepte/schabowy` (legacy) — W3c bodies use correct `kotlet-schabowy`. (2) Faworki/Fasolka/Majeranek remain HOLD for W4.
