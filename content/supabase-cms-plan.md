# Supabase CMS-Plan — Rezepte, Blog, Media

**Ziel:** Alle Rezept-/Blog-Inhalte und Bilder leben in **Supabase (Postgres + Storage)** und werden über das Admin-CMS gepflegt (Upload/Löschen).  
**Heute:** TypeScript-Seeds sind die Source of Truth.  
**Stand Audit:** 2026-07-21 · `SEED_VERSION` **28** · **79** Rezepte · **36** Blog · **3** Families  
**Parallel:** Wave 15 kann weiter Seeds erweitern — bis Cutover bleibt Seed produktiv. SEO-Fixes in `recipe-articles*` nicht blockieren.

---

## 0. Kurzantwort (Verwirrung „79 / SEED 28“)

| Was du siehst | Bedeutung |
|---------------|-----------|
| **79 Rezepte** | Anzahl published Recipes im Seed-Katalog (live auf der Site) |
| **SEED 28** | Versionsnummer in `store.ts` — bei Bump wird der In-Memory-/Datei-Store neu aus Seeds geladen |
| **Supabase** | Clients + Migrationen existieren; **Content wird dort noch nicht gelesen/geschrieben** |

Es sind **keine zwei getrennten Kataloge** „79 in Supabase + 28 Seeds“. Es ist **ein** Seed-Katalog (79 Items) mit Versionsstand 28.

---

## 1. Phase 0 — Audit (erledigt)

### 1.1 Wie Content heute läuft

```
seed*.ts  →  seed.ts aggregiert  →  store.ts (SEED_VERSION)
                                      ↓
                              repository.ts (readStore)
                                      ↓
                              Seiten + Admin Actions
```

- **`src/lib/data/store.ts`**
  - `SEED_VERSION = 28`
  - Lokal: `.data/store.json` (persistiert CMS-Edits + User-Daten)
  - **Vercel/Lambda:** nur Memory-Seed (`VERCEL=1`) — Admin-Edits **überleben Deploy nicht**
  - Bei `seedVersion !== SEED_VERSION`: Content wird aus Seeds neu geladen; `saved` / `lists` / `submissions` bleiben erhalten
- **`src/lib/data/repository.ts`:** liest/schreibt ausschließlich `readStore` / `updateStore` — **kein** `supabase.from('recipes')`
- **Admin** (`/[locale]/admin`, `actions/admin.ts`): speichert Drafts/Edits in den File-/Memory-Store
- **Auth:** Cookie-Demo (`alemniam_session`) + Seed-Profile — nicht an Supabase Auth für Rollen gekoppelt (obwohl Schema `profiles.role` vorsieht)
- **Bilder:** externe Unsplash-URLs in `coverImage` — kein Storage-Upload im CMS

### 1.2 Was in Supabase schon im Repo liegt

Migrationen unter `supabase/migrations/`:

| Migration | Inhalt |
|-----------|--------|
| `20260719120000_alemniam_schema.sql` | `profiles`, `clusters` + translations, `recipes` + translations + ingredients + clusters-junction, saved/lists/submissions, `is_staff()`, Auth-Trigger, RLS, Bucket **`recipe-media`** (public read, staff insert/update) |
| `20260719180000_affiliate_products.sql` | `affiliate_products` + RLS |

Supabase-Helper: `src/lib/supabase/{client,server,middleware,env}.ts`  
Env (`.env.example`): `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (Fallback: `ANON_KEY`)

### 1.3 Schema-Lücken vs. App-Typen (`src/types/content.ts`)

Bereits in Migration, aber App nutzt sie nicht für Content:

- `recipes`, `recipe_translations`, `recipe_ingredients`, `recipe_clusters`, `clusters` …

**Fehlt / unvollständig** (nicht erfinden als Konflikt — **erweitern**):

| Bedarf App | Status Schema |
|------------|---------------|
| `article` (Long-form SEO-Body) | fehlt in `recipe_translations` |
| `familyId`, `variantLabel`, `variantImage`, `relatedPostIds` | fehlen an `recipes` |
| `RecipeFamily` + Translations | **keine** Tabellen |
| `BlogPost` + Translations + silo/related | **keine** Tabellen |
| Cluster-Kind `category` | Enum hat nur `region \| occasion \| technique` |
| Media-Metadaten (Pfad, Alt, Owner) | kein `media_assets` |
| Storage Delete | Policy für DELETE auf `recipe-media` fehlt |
| Blog-Covers Bucket | nur `recipe-media` |

### 1.4 Remote-Projekt

Über MCP sichtbare Projekte heißen u. a. Pcconfig / BudBase / … — **kein klar benanntes „Alemniam“**.  
Vor Phase 1: bestätigen, welches Project die Alemniam-Migrationen bekommen soll (oder neues Project anlegen).

### 1.5 SQL: Ist-Zustand im Supabase SQL Editor prüfen

```sql
-- Welche Content-Tabellen existieren schon?
select table_name
from information_schema.tables
where table_schema = 'public'
  and table_name in (
    'recipes', 'recipe_translations', 'recipe_ingredients',
    'recipe_clusters', 'clusters', 'cluster_translations',
    'recipe_families', 'recipe_family_translations',
    'blog_posts', 'blog_post_translations',
    'media_assets', 'affiliate_products', 'profiles'
  )
order by 1;

-- Rezept-Zeilen (falls Schema schon applied)
select count(*) as recipes_total,
       count(*) filter (where status = 'published') as published
from public.recipes;

-- Storage-Buckets
select id, name, public, created_at
from storage.buckets
order by name;

-- Storage-Policies für Media
select policyname, cmd, qual::text, with_check::text
from pg_policies
where schemaname = 'storage' and tablename = 'objects'
  and (policyname ilike '%recipe%' or policyname ilike '%blog%' or policyname ilike '%media%');
```

---

## 2. Ist vs. Soll

| | **Ist** | **Soll** |
|--|---------|----------|
| Source of Truth | TS-Seeds + `SEED_VERSION` | Supabase Postgres |
| Deploy-Verhalten | Memory-Seed auf Vercel | DB-Read (optional Cache) |
| CMS-Edits | lokal `.data/store.json` / verloren auf Prod | persistiert in DB |
| Bilder | Unsplash-URLs im Seed | Supabase Storage + öffentliche URLs in `cover_image` / `media_assets` |
| Upload/Delete | manuell URL eintragen | CMS → Storage insert/delete + DB-Update |
| Blog / Families | nur Seed | eigene Tabellen + RLS |
| Wave-Arbeit | Seeds erweitern | bis Cutover weiter Seeds; danach CMS oder Import-Skript |

---

## 3. Empfohlenes Schema (an bestehende Migration anbinden)

**Prinzip:** Bestehende Tabellen **behalten und erweitern** — keine parallelen `recipes_v2`. IDs aus Seed als stabile Text-IDs behalten (`recipe-bigos` …), damit Slugs/Related nicht brechen. Dafür UUID-PKs der Migration auf **text** umstellen **oder** Mapping-Tabelle `legacy_id → uuid`.  
**Empfehlung für Alemniam:** Seed-IDs als `text` primary key (oder `id text unique` + intern uuid) — weniger Mapping-Schmerz beim Import. Wenn Remote schon UUID-Schema hat: `seed_key text unique not null` ergänzen.

### 3.1 Bestehend erweitern

```text
recipes
  + seed_key text unique          -- z.B. recipe-bigos (falls UUID-PK bleibt)
  + family_id text/uuid null
  + variant_label_de/pl oder jsonb
  + variant_image text
  + related_post_ids text[]
  + video_url (schon da)
  cover_image → Storage-URL oder media_assets.id

recipe_translations
  + article text not null default ''

clusters.kind
  + enum value 'category'  (ALTER TYPE … ADD VALUE)
```

Cluster-Zuordnung bleibt über `recipe_clusters` (region/occasion/technique/category als Cluster-Zeilen).

### 3.2 Neu

```text
recipe_families
  id, default_variant_id, cover_image,
  region/occasion/technique/category via family_clusters ODER arrays,
  variant_ids text[], related_post_ids text[],
  created_at, updated_at

recipe_family_translations
  (family_id, locale) PK — title, slug, excerpt, seo_*

blog_posts
  id, status, post_type, cover_image,
  silo_ids text[], related_recipe_ids text[],
  related_post_ids text[], related_product_ids text[],
  published_at, created_at, updated_at

blog_post_translations
  (post_id, locale) PK — title, slug, excerpt, body, seo_*

media_assets
  id, bucket_id, object_path, public_url,
  alt_de, alt_pl, mime_type, bytes,
  used_by_type ('recipe'|'blog'|'family'|'affiliate'),
  used_by_id text,
  uploaded_by uuid → profiles,
  created_at
```

### 3.3 Storage Buckets

| Bucket | Public | Zweck |
|--------|--------|-------|
| `recipe-media` | ja | Rezept-Cover (+ ggf. Inline später) — **bereits in Migration** |
| `blog-media` | ja | Blog-Cover |
| optional `family-media` | ja | Family-Cover (oder alles in `recipe-media` mit Prefix `families/`) |

**Pfad-Konvention:** `{entity}/{id}/{uuid}.{ext}` — erleichtert RLS und Löschen ohne Orphans-Chaos.

**RLS Storage (Outline):**

- `SELECT`: public (oder authenticated) für public buckets  
- `INSERT` / `UPDATE` / **`DELETE`**: nur `public.is_staff()`  
- Upsert braucht INSERT + SELECT + UPDATE (Supabase-Doku)

Affiliate-Bilder können vorerst URLs bleiben; später optional eigener Bucket.

### 3.4 Admin/CMS Upload–Delete Flow (Soll)

1. Staff eingeloggt (Supabase Auth + `profiles.role` in `admin|moderator`; JWT/`app_metadata` nicht als alleinige Autorisierung — Rolle in `profiles`)
2. CMS wählt Datei → Client-Upload zu Storage (oder signed upload via Server Action)
3. Nach Erfolg: `media_assets` Row + Entity `cover_image = public_url`
4. Delete: erst Entity-Feld leeren/ersetzen, dann Storage object delete + `media_assets` delete  
   (Reihenfolge schützt vor toten URLs auf Live-Seiten)
5. Nie `service_role` im Browser

---

## 4. Migrationspfad ohne Downtime

```text
Phase A — Seed primary (HEUTE)
  Site liest nur Seeds. Schema/Storage vorbereiten. Wave 15 darf Seeds bumpfen.

Phase B — Dual-write (optional, kurz)
  CMS schreibt Store UND Supabase (oder nur Import-Skript nach Seed-Ship).
  Site liest weiter Seed.

Phase C — Dual-read / Feature-Flag
  CONTENT_SOURCE=seed|supabase (Env)
  Prod noch seed; Staging supabase.
  Parität: Count, Slugs, Sample-Pages.

Phase D — DB primary
  CONTENT_SOURCE=supabase auf Prod.
  Seed bleibt Fallback bei DB-Fehler (fail-open nur mit Monitoring) ODER harter Fail + Alert.

Phase E — Seed einfrieren
  Keine neuen Wave-Seeds für Content; Waves = Import-Skripte oder CMS-only.
  Alte seed-Dateien als Archiv / Gold-Master für Diffs behalten.
```

**Wichtig:** Wave 15 und SEO-Arbeit an Seeds **nicht stoppen**, bis Phase D stabil ist. Plan: nach jedem Seed-Ship Import-Skript erneut laufen lassen (idempotent upsert by `seed_key` / id).

---

## 5. Was NICHT überstürzen

- Live-Site nicht auf leere DB umschalten
- Kein Big-Bang-CMS-Rewrite in einem PR
- Auth nicht halb migrieren (Cookie-Demo + Supabase RLS gleichzeitig ohne klare Staff-Quelle)
- Unsplash-URLs nicht massenhaft löschen, bevor Storage-Kopien existieren
- `SEED_VERSION`-Bump-Workflow von Wave-Integrator nicht durch parallele Store-Hacks stören
- Keine `service_role` in Client-Bundles
- Views mit RLS: `security_invoker` beachten
- PL-Routing / Family-Slugs nicht ändern während Import

---

## 6. Phased Roadmap

### Phase 0 — Audit ✅
Dieses Dokument + Inventar (`content/catalog-inventory.md`).

### Phase 1 — Schema + Storage
1. Alemniam-Supabase-Project bestätigen / anlegen  
2. Bestehende Migrationen anwenden (`supabase db push` oder SQL Editor)  
3. Erweiterungs-Migration: article, families, blog, media_assets, category enum, Storage-Delete + `blog-media`  
4. RLS prüfen (`get_advisors` / manuell)  
5. Staff-User: echter Auth-User mit `profiles.role = 'admin'`

### Phase 2 — Seed-Import (79 → DB)
Idempotentes Script (Node/TS, service role **nur lokal/CI**):

- clusters → families → recipes + translations + ingredients + junctions → blog  
- cover_image zunächst Unsplash-URL belassen  
- Dry-run + Diff-Report (fehlende Slugs, doppelte locale+slug)

### Phase 3 — CMS UI
- Repository: Feature-Flag Dual-Read  
- Recipe-Editor: Storage Upload/Delete statt nur Text-URL  
- Blog-Editor (neu oder schlank)  
- Auth: Admin über Supabase Session + `is_staff()`

### Phase 4 — Cutover
- Staging Parität → Prod Flag → Monitoring 48h → Seed einfrieren  
- Danach: Bilder schrittweise nach Storage migrieren (Skript + CMS)

---

## 7. Phase-1 SQL (SQL Editor) — Erweiterungen

> **Nur ausführen**, nachdem die Basis-Migration `20260719120000_alemniam_schema.sql` (und idealerweise Affiliate) bereits applied ist.  
> Vorher: Audit-SQL aus §1.5.  
> Bei Konflikten (Typ existiert schon): einzelne Statements überspringen / anpassen.

```sql
-- =============================================================================
-- Alemniam Phase 1 — Schema-Erweiterungen (CMS-ready)
-- Voraussetzung: public.recipes, public.is_staff(), Bucket recipe-media existieren
-- =============================================================================

-- 1) Cluster-Kind: category (App nutzt category-Hubs)
do $$
begin
  if not exists (
    select 1 from pg_enum e
    join pg_type t on t.oid = e.enumtypid
    where t.typname = 'cluster_kind' and e.enumlabel = 'category'
  ) then
    alter type public.cluster_kind add value 'category';
  end if;
end $$;

-- 2) Long-form Artikel + Seed-Kompatibilität an recipes / translations
alter table public.recipe_translations
  add column if not exists article text not null default '';

alter table public.recipes
  add column if not exists seed_key text,
  add column if not exists family_id text,
  add column if not exists variant_label jsonb not null default '{}'::jsonb,
  add column if not exists variant_image text not null default '',
  add column if not exists related_post_ids text[] not null default '{}';

create unique index if not exists recipes_seed_key_uidx
  on public.recipes (seed_key)
  where seed_key is not null;

-- 3) Recipe Families
create table if not exists public.recipe_families (
  id text primary key,
  default_variant_id text not null,
  cover_image text not null default '',
  variant_ids text[] not null default '{}',
  related_post_ids text[] not null default '{}',
  region_ids text[] not null default '{}',
  occasion_ids text[] not null default '{}',
  technique_ids text[] not null default '{}',
  category_ids text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.recipe_family_translations (
  family_id text not null references public.recipe_families (id) on delete cascade,
  locale public.app_locale not null,
  title text not null,
  slug text not null,
  excerpt text not null default '',
  seo_title text not null default '',
  seo_description text not null default '',
  primary key (family_id, locale),
  unique (locale, slug)
);

alter table public.recipe_families enable row level security;
alter table public.recipe_family_translations enable row level security;

drop policy if exists "public_read_recipe_families" on public.recipe_families;
create policy "public_read_recipe_families"
  on public.recipe_families for select using (true);

drop policy if exists "staff_write_recipe_families" on public.recipe_families;
create policy "staff_write_recipe_families"
  on public.recipe_families for all using (public.is_staff());

drop policy if exists "public_read_recipe_family_translations" on public.recipe_family_translations;
create policy "public_read_recipe_family_translations"
  on public.recipe_family_translations for select using (true);

drop policy if exists "staff_write_recipe_family_translations" on public.recipe_family_translations;
create policy "staff_write_recipe_family_translations"
  on public.recipe_family_translations for all using (public.is_staff());

-- 4) Blog
create type public.blog_post_type as enum (
  'guide', 'lexicon', 'culture', 'diaspora', 'buying-guide'
);

create type public.blog_post_status as enum ('draft', 'published');

create table if not exists public.blog_posts (
  id text primary key,
  status public.blog_post_status not null default 'draft',
  post_type public.blog_post_type not null,
  cover_image text not null default '',
  silo_ids text[] not null default '{}',
  related_recipe_ids text[] not null default '{}',
  related_post_ids text[] not null default '{}',
  related_product_ids text[] not null default '{}',
  cluster_ids text[] not null default '{}',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_post_translations (
  post_id text not null references public.blog_posts (id) on delete cascade,
  locale public.app_locale not null,
  title text not null,
  slug text not null,
  excerpt text not null default '',
  body text not null default '',
  seo_title text not null default '',
  seo_description text not null default '',
  primary key (post_id, locale),
  unique (locale, slug)
);

alter table public.blog_posts enable row level security;
alter table public.blog_post_translations enable row level security;

drop policy if exists "public_read_published_blog_posts" on public.blog_posts;
create policy "public_read_published_blog_posts"
  on public.blog_posts for select
  using (status = 'published' or public.is_staff());

drop policy if exists "staff_write_blog_posts" on public.blog_posts;
create policy "staff_write_blog_posts"
  on public.blog_posts for all using (public.is_staff());

drop policy if exists "public_read_blog_post_translations" on public.blog_post_translations;
create policy "public_read_blog_post_translations"
  on public.blog_post_translations for select
  using (
    exists (
      select 1 from public.blog_posts p
      where p.id = post_id
        and (p.status = 'published' or public.is_staff())
    )
  );

drop policy if exists "staff_write_blog_post_translations" on public.blog_post_translations;
create policy "staff_write_blog_post_translations"
  on public.blog_post_translations for all using (public.is_staff());

-- 5) Media registry
create table if not exists public.media_assets (
  id uuid primary key default gen_random_uuid(),
  bucket_id text not null,
  object_path text not null,
  public_url text not null,
  alt_de text not null default '',
  alt_pl text not null default '',
  mime_type text not null default '',
  bytes bigint,
  used_by_type text,
  used_by_id text,
  uploaded_by uuid references public.profiles (id) on delete set null,
  created_at timestamptz not null default now(),
  unique (bucket_id, object_path)
);

alter table public.media_assets enable row level security;

drop policy if exists "public_read_media_assets" on public.media_assets;
create policy "public_read_media_assets"
  on public.media_assets for select using (true);

drop policy if exists "staff_write_media_assets" on public.media_assets;
create policy "staff_write_media_assets"
  on public.media_assets for all using (public.is_staff());

-- 6) Storage: blog-media + DELETE auf recipe-media
insert into storage.buckets (id, name, public)
values
  ('recipe-media', 'recipe-media', true),
  ('blog-media', 'blog-media', true)
on conflict (id) do nothing;

drop policy if exists "staff_delete_recipe_media" on storage.objects;
create policy "staff_delete_recipe_media"
  on storage.objects for delete
  using (bucket_id = 'recipe-media' and public.is_staff());

drop policy if exists "public_read_blog_media" on storage.objects;
create policy "public_read_blog_media"
  on storage.objects for select
  using (bucket_id = 'blog-media');

drop policy if exists "staff_upload_blog_media" on storage.objects;
create policy "staff_upload_blog_media"
  on storage.objects for insert
  with check (bucket_id = 'blog-media' and public.is_staff());

drop policy if exists "staff_update_blog_media" on storage.objects;
create policy "staff_update_blog_media"
  on storage.objects for update
  using (bucket_id = 'blog-media' and public.is_staff());

drop policy if exists "staff_delete_blog_media" on storage.objects;
create policy "staff_delete_blog_media"
  on storage.objects for delete
  using (bucket_id = 'blog-media' and public.is_staff());
```

**Hinweis IDs:** Basis-Migration nutzt `uuid` für `recipes.id`. Phase-2-Import sollte entweder:

- `seed_key` setzen und App weiter über seed_key mappen, **oder**
- in einer eigenen Migration `recipes.id` auf text umstellen (nur sinnvoll, wenn Remote noch leer ist).

Wenn die DB noch **leer** ist: vor Produktiv-Import lieber PKs auf Seed-Text-IDs angleichen (sauberer Cutover). Wenn schon User-Daten in `saved_recipes` liegen: UUID behalten + `seed_key`.

---

## 8. Nächste konkrete Schritte (nach diesem Doc)

1. Alemniam-Supabase-Project wählen / anlegen + Env setzen  
2. Audit-SQL (§1.5) ausführen und Ergebnis teilen  
3. Basis-Migration + Phase-1-SQL anwenden  
4. Import-Skript spezifizieren (Phase 2) — **kein** Cutover in demselben PR  
5. Wave 15 Seeds weiter erlauben; Import nach Ship wiederholen

---

## 9. Datei-Referenzen

| Pfad | Rolle |
|------|--------|
| `src/lib/data/store.ts` | SEED_VERSION, Memory/File Store |
| `src/lib/data/seed.ts` | Aggregator Rezepte/Blog/… |
| `src/lib/data/repository.ts` | App-Datenlayer (heute seed-only) |
| `src/app/actions/admin.ts` | CMS Mutations → Store |
| `supabase/migrations/20260719120000_alemniam_schema.sql` | Kernschema + `recipe-media` |
| `supabase/migrations/20260719180000_affiliate_products.sql` | Affiliate |
| `content/catalog-inventory.md` | Live-Zahlen 79 / 36 / SEED 28 |
| `content/wave-15-plan.md` | weitere Seed-Expansion geplant |

---

*Kein Full-CMS-Rewrite in diesem Schritt. Seeds bleiben produktiv bis Phase 4.*
