-- Content migration prep (recipes as own DB rows, no CMS editor yet).
--
-- 1) Switches recipes.id / clusters.id from uuid to text so the app's
--    existing stable string ids (e.g. "recipe-bigos", "category-schnell")
--    can be used as real primary keys instead of a separate mapping table.
-- 2) Adds long-form article storage + family/variant metadata to recipes.
-- 3) Adds recipe_families, blog_posts (+ translations) and affiliate_products,
--    all with text ids from the start for consistency.
--
-- Safe to run: every affected table has 0 rows on this project today
-- (verified via list_tables before writing this migration).

-- ---------------------------------------------------------------------
-- 1) cluster_kind: add 'category' (hub browsing categories, e.g. "Suppen")
-- ---------------------------------------------------------------------
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

-- ---------------------------------------------------------------------
-- 2) clusters.id: uuid -> text
-- ---------------------------------------------------------------------
alter table public.cluster_translations drop constraint if exists cluster_translations_cluster_id_fkey;
alter table public.recipe_clusters drop constraint if exists recipe_clusters_cluster_id_fkey;

alter table public.clusters alter column id drop default;
alter table public.clusters alter column id type text using id::text;

alter table public.cluster_translations alter column cluster_id type text using cluster_id::text;
alter table public.recipe_clusters alter column cluster_id type text using cluster_id::text;

alter table public.cluster_translations
  add constraint cluster_translations_cluster_id_fkey
  foreign key (cluster_id) references public.clusters (id) on delete cascade;

alter table public.recipe_clusters
  add constraint recipe_clusters_cluster_id_fkey
  foreign key (cluster_id) references public.clusters (id) on delete cascade;

alter table public.clusters add column if not exists cover_image text;

-- ---------------------------------------------------------------------
-- 3) recipes.id: uuid -> text
-- ---------------------------------------------------------------------
alter table public.recipe_translations drop constraint if exists recipe_translations_recipe_id_fkey;
alter table public.recipe_clusters drop constraint if exists recipe_clusters_recipe_id_fkey;
alter table public.recipe_ingredients drop constraint if exists recipe_ingredients_recipe_id_fkey;
alter table public.saved_recipes drop constraint if exists saved_recipes_recipe_id_fkey;
alter table public.shopping_list_items drop constraint if exists shopping_list_items_recipe_id_fkey;

-- Postgres refuses to alter a column's type while any RLS policy expression
-- references it (even transitively via a subquery on another table), so the
-- two policies that look up recipes.id have to be dropped and recreated.
drop policy if exists "public_read_recipe_translations" on public.recipe_translations;
drop policy if exists "public_read_recipe_ingredients" on public.recipe_ingredients;

alter table public.recipes alter column id drop default;
alter table public.recipes alter column id type text using id::text;

alter table public.recipe_translations alter column recipe_id type text using recipe_id::text;
alter table public.recipe_clusters alter column recipe_id type text using recipe_id::text;
alter table public.recipe_ingredients alter column recipe_id type text using recipe_id::text;
alter table public.saved_recipes alter column recipe_id type text using recipe_id::text;
alter table public.shopping_list_items alter column recipe_id type text using recipe_id::text;

alter table public.recipe_translations
  add constraint recipe_translations_recipe_id_fkey
  foreign key (recipe_id) references public.recipes (id) on delete cascade;

alter table public.recipe_clusters
  add constraint recipe_clusters_recipe_id_fkey
  foreign key (recipe_id) references public.recipes (id) on delete cascade;

alter table public.recipe_ingredients
  add constraint recipe_ingredients_recipe_id_fkey
  foreign key (recipe_id) references public.recipes (id) on delete cascade;

alter table public.saved_recipes
  add constraint saved_recipes_recipe_id_fkey
  foreign key (recipe_id) references public.recipes (id) on delete cascade;

alter table public.shopping_list_items
  add constraint shopping_list_items_recipe_id_fkey
  foreign key (recipe_id) references public.recipes (id) on delete set null;

create policy "public_read_recipe_translations"
  on public.recipe_translations for select
  using (
    exists (
      select 1 from public.recipes r
      where r.id = recipe_id
        and (r.status = 'published' or public.is_staff())
    )
  );

create policy "public_read_recipe_ingredients"
  on public.recipe_ingredients for select
  using (
    exists (
      select 1 from public.recipes r
      where r.id = recipe_id
        and (r.status = 'published' or public.is_staff())
    )
  );

-- ---------------------------------------------------------------------
-- 4) Long-form article text + family/variant metadata on recipes
-- ---------------------------------------------------------------------
alter table public.recipe_translations
  add column if not exists article text not null default '';

alter table public.recipes
  add column if not exists family_id text,
  add column if not exists variant_label jsonb not null default '{}'::jsonb,
  add column if not exists variant_image text not null default '',
  add column if not exists related_post_ids text[] not null default '{}';

-- ---------------------------------------------------------------------
-- 5) Recipe families (e.g. "Naleśniki" grouping its meat/sweet variants)
-- ---------------------------------------------------------------------
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

create index if not exists recipes_family_id_idx on public.recipes (family_id);

alter table public.recipes drop constraint if exists recipes_family_id_fkey;
alter table public.recipes
  add constraint recipes_family_id_fkey
  foreign key (family_id) references public.recipe_families (id) on delete set null;

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

-- ---------------------------------------------------------------------
-- 6) Blog posts
-- ---------------------------------------------------------------------
do $$
begin
  if not exists (select 1 from pg_type where typname = 'blog_post_type') then
    create type public.blog_post_type as enum (
      'guide', 'lexicon', 'culture', 'diaspora', 'buying-guide'
    );
  end if;
  if not exists (select 1 from pg_type where typname = 'blog_post_status') then
    create type public.blog_post_status as enum ('draft', 'published');
  end if;
end $$;

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

create index if not exists blog_posts_published_at_idx on public.blog_posts (published_at desc);

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

-- ---------------------------------------------------------------------
-- 7) Affiliate products (table did not exist yet on this project;
--    created directly with text id + post_ids, referenced by blog articles)
-- ---------------------------------------------------------------------
do $$
begin
  if not exists (select 1 from pg_type where typname = 'affiliate_partner') then
    create type public.affiliate_partner as enum ('amazon', 'other');
  end if;
end $$;

create table if not exists public.affiliate_products (
  id text primary key,
  partner public.affiliate_partner not null default 'amazon',
  url text not null,
  image_url text not null default '',
  title_de text not null,
  title_pl text not null,
  description_de text not null default '',
  description_pl text not null default '',
  cta_de text not null default 'Ansehen',
  cta_pl text not null default 'Zobacz',
  tags text[] not null default '{}',
  recipe_ids text[] not null default '{}',
  post_ids text[] not null default '{}',
  active boolean not null default true,
  sort_order int not null default 100,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists affiliate_products_active_sort_idx
  on public.affiliate_products (active, sort_order)
  where active = true;

alter table public.affiliate_products enable row level security;

drop policy if exists "affiliate_products_public_read_active" on public.affiliate_products;
create policy "affiliate_products_public_read_active"
  on public.affiliate_products
  for select
  to anon, authenticated
  using (active = true);

drop policy if exists "affiliate_products_staff_all" on public.affiliate_products;
create policy "affiliate_products_staff_all"
  on public.affiliate_products
  for all
  to authenticated
  using (public.is_staff())
  with check (public.is_staff());
