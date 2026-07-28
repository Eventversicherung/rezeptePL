# Wave 16 — Execution Plan (Planner → Implement → Integrator)

Status: **SHIPPED** (single-agent end-to-end · 2026-07-28)  
Basis vor Ship: SEED **41** · **87** Rezepte · **36** Blog  
Nach Ship: `SEED_VERSION` **42** · Rezepte **95** (+8) · Blog **37** (+1) · Families **3** (unverändert 4/4/4)  
Status-Doc: [`wave-16-status.md`](./wave-16-status.md)

**Priorität:** Nach Wave 15 + Prose/Silo-Cleanup die nächsten ownership-sicheren Diaspora-Lücken schließen — Beilage, Festfleisch-Huhn, Getreide-Cook, Backen, Süßknödel, Vorspeise, Ostern-Dip, Sonntagsgeflügel. **Kein Niche-Spray.** Czernina / Barszcz biały / Sękacz / Kwaśnica (Cover) bleiben HOLD. Optional **1** silo-sicherer Blog (Fehler über Gerichte, kein Cook-Duplikat). **PL-Routing nicht brechen.**

---

## 1. Ist-Stand

| Layer | LIVE | Notiz |
|-------|------|--------|
| Rezepte | **87** | inkl. Family-Varianten |
| RecipeFamilies | **3** | Pierogi 4 · Placki 4 · Naleśniki 4 |
| Blog | **36** | Silo-Cleanup bereits gelaufen |
| `SEED_VERSION` | **41** | Prose/Blog-Medien-Bumps nach W15 |
| Blog:Rezept | **~1 : 2.42** | +1 Blog hält Ratio sinnvoll |

---

## 2. Gap-Audit (Kurz)

| Gericht | Status | Entscheidung W16 |
|---------|--------|------------------|
| **Surówka z kapusty** | MISSING (W15 HOLD/später) | **SHIP** |
| **Kotlet de volaille** | MISSING (W15 HOLD Panade) | **SHIP** — klare Huhn+Butter/Käse-Füllung ≠ Schabowy-Schwein |
| **Kasza gryczana Cook** | MISSING (Lexikon Broad) | **SHIP** Cook-Money; Blog `post-kasza` bleibt Lexikon/Einkauf |
| **Pierniczki** | MISSING | **SHIP** — Plätzchen ≠ Piernik-Laib |
| **Knedle z truskawkami** | MISSING | **SHIP** ≠ Knedle ze śliwkami |
| **Tatar wołowy** | MISSING | **SHIP** |
| **Chrzan tarty** | MISSING | **SHIP** ≠ Ćwikła (Bete+Meerrettich) |
| **Kurczak pieczony** | MISSING | **SHIP** ≠ Kaczka ≠ Schabowy ≠ Schab |
| Kotlet family hub | HOLD | unverändert |
| Czernina / Barszcz biały / Sękacz / Kwaśnica | HOLD | Cover/Intent/Region |
| 5. Family-Variante | HOLD | Families satt |

---

## 3. Wave 16 Ziel — Ship-Set **+8 Rezepte + 1 Blog**

| # | ID (neu) | Gericht | Primary KW DE (eng) | Abgrenzung |
|---|----------|---------|---------------------|------------|
| 1 | `recipe-surowka` | Surówka z kapusty | Surówka / Krautsalat polnisch | ≠ Mizeria ≠ Sałatka jarzynowa |
| 2 | `recipe-de-volaille` | Kotlet de volaille | Kotlet de volaille / Cordon bleu polnisch | ≠ Kotlet schabowy (Schwein) |
| 3 | `recipe-kasza-gryczana` | Kasza gryczana na sypko | Kasza gryczana Rezept / Buchweizen kochen | ≠ `post-kasza` Lexikon |
| 4 | `recipe-pierniczki` | Pierniczki | Pierniczki / Lebkuchenplätzchen polnisch | ≠ Piernik (Laib/Kuchen) |
| 5 | `recipe-knedle-truskawki` | Knedle z truskawkami | Knedle Erdbeere / Knedle z truskawkami | ≠ Knedle ze śliwkami |
| 6 | `recipe-tatar` | Tatar wołowy | Tatar wołowy / Beefsteaktatar polnisch | ≠ Pasztet ≠ Mielony |
| 7 | `recipe-chrzan` | Chrzan tarty | Chrzan / Meerrettich polnisch gerieben | ≠ Ćwikła |
| 8 | `recipe-kurczak-pieczony` | Kurczak pieczony | Kurczak pieczony / Huhn polnisch Ofen | ≠ Kaczka ≠ Schabowy ≠ Schab |

**Blog (silo-sicher):**

| ID | Winkel | Warum kein Cook-Duplikat |
|----|--------|---------------------------|
| `post-fehler-diaspora` | Häufigste Fehler beim polnischen Kochen in DE/PL-Diaspora | Über Gerichte: Hitze, Feuchtigkeit, Ersatz, Timing — Links zu Rezepten, keine Mengenliste eines Gerichts |

**Nach Wave 16:**

| Metrik | Ist | Ziel |
|--------|-----|------|
| Rezepte | 87 | **95** (+8) |
| Blog | 36 | **37** (+1) |
| Families | 3 | **3** |
| `SEED_VERSION` | 41 | **42** |

### Cover Acceptance

| Gericht | Cover MUSS zeigen | Cover DARF NICHT sein |
|---------|-------------------|------------------------|
| Surówka | Fein geschnittener Krautsalat (Weißkohl±Karotte) | Mayo-Gemüsesalat Jarzynowa; Gurke-Mizeria |
| De volaille | Panierter Hähnchenbraten mit sichtbarer Füllung (Schnitt) | Flacher Schabowy ohne Füllung; Schweinekotelett |
| Kasza | Gekochte Buchweizenkörner in Schüssel | Roher Reis; Haferbrei mit Obst |
| Pierniczki | Gewürzplätzchen (Lebkuchenform) | Piernik-Laib/Schnitte; Schoko-Cookies |
| Knedle truskawki | Obstknödel/Fruchtdumplings mit Beeren | Gyoza/Asiatisch; nur Erdbeeren im Glas |
| Tatar | Rohes gehacktes Rind mit Eigelb/Zwiebel-Charakter | Gebratener Steak; Pastete |
| Chrzan | Cremig-weiße Meerrettichcreme/Dip | Rote Ćwikła; klare Suppe |
| Kurczak pieczony | Ganzer/halber Bratvogel Ofen (Huhn) | Ente; paniertes Schnitzel; Schweinebraten |
| Blog Fehler | Küchen-/Zutaten-Kontext | Einzelgericht-Hero als Cook-Guide |

### Linking-Gate

| Ort | Pflicht |
|-----|---------|
| FACTS expand() | ≥4 MD-Links / Locale (≥2 Rezept + ≥2 Blog) |
| Steps/Tips | ≥2 Inline-Links / Locale |
| Related | `relatedPostIds` ≥ 3 |
| Affiliate | **guide-only** auf Rezepten |
| Covers | dish-fit · GET 200 · Photo-ID global unique |
| Longform | ≥400 Wörter / Locale |
| Voice | `content-voice-rules.md` — volle Sätze, kein SEO-Jargon |
| Blog | Silo-Regeln — kein Cook-Duplikat |

---

## 4. Pakete A–D + Blog + Integrator E

### Paket A — Beilage + Festfleisch-Huhn
- `recipe-surowka`, `recipe-de-volaille`
- Dateien: `seed-recipes-wave16-a.ts`, `recipe-articles-w16-a.ts`, `wave-16-status-a.md`

### Paket B — Getreide + Vorspeise
- `recipe-kasza-gryczana`, `recipe-tatar`
- Dateien: `seed-recipes-wave16-b.ts`, `recipe-articles-w16-b.ts`, `wave-16-status-b.md`

### Paket C — Backen + Süßknödel
- `recipe-pierniczki`, `recipe-knedle-truskawki`
- Dateien: `seed-recipes-wave16-c.ts`, `recipe-articles-w16-c.ts`, `wave-16-status-c.md`

### Paket D — Ostern-Dip + Sonntagsgeflügel
- `recipe-chrzan`, `recipe-kurczak-pieczony`
- Dateien: `seed-recipes-wave16-d.ts`, `recipe-articles-w16-d.ts`, `wave-16-status-d.md`

### Paket Blog
- `post-fehler-diaspora` + bodies DE/PL
- Dateien: `seed-blog-w16.ts`, `blog-bodies-w16-de.ts`, `blog-bodies-w16-pl.ts`

### Paket E — Integrator
1. Merge A–D → `seed-recipes-wave16.ts` + wire `seed.ts`
2. FACTS Object.assign in `recipe-articles.ts`
3. Blog wire in `seed-blog.ts`
4. Ownership + topical docs
5. Cover-Dedup · `SEED_VERSION` 41→42
6. `npm run gate:reader-copy` + Build
7. Ein Push

---

## 5. Explizit HOLD

| Item | Warum |
|------|--------|
| Czernina / Barszcz biały / Sękacz | niche / Intent≈Żurek / regional |
| Kwaśnica | Cover-Fit unsicher → später |
| Kotlet family hub | Clash-Risiko |
| 5. Family-Variante | satt |
| Region-Hub Index | Intro ≥400 erst |

---

## Kurzfazit Planner

Wave 16 = **+8** ownership-sichere Diaspora-Klassiker + **1** Fehler-Blog (Silo-safe). Target: **95** Rezepte · **37** Blog · `SEED_VERSION` **42**.
