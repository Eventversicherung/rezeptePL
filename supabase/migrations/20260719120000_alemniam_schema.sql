-- Alemniam core schema (apply via supabase db push / migration)
-- Roles live in profiles.role — never authorize from user_metadata.

create extension if not exists "pgcrypto";

create type public.user_role as enum ('user', 'admin', 'moderator');
create type public.recipe_status as enum ('draft', 'published');
create type public.submission_status as enum ('pending', 'approved', 'rejected');
create type public.ingredient_group as enum (
  'produce', 'dairy', 'pantry', 'spices', 'polish', 'other'
);
create type public.cluster_kind as enum ('region', 'occasion', 'technique');
create type public.app_locale as enum ('de', 'pl');

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  display_name text not null default '',
  role public.user_role not null default 'user',
  preferred_locale public.app_locale not null default 'de',
  created_at timestamptz not null default now()
);

create table public.clusters (
  id uuid primary key default gen_random_uuid(),
  kind public.cluster_kind not null,
  created_at timestamptz not null default now()
);

create table public.cluster_translations (
  cluster_id uuid not null references public.clusters (id) on delete cascade,
  locale public.app_locale not null,
  slug text not null,
  title text not null,
  description text not null default '',
  seo_title text not null default '',
  seo_description text not null default '',
  primary key (cluster_id, locale),
  unique (locale, slug)
);

create table public.recipes (
  id uuid primary key default gen_random_uuid(),
  status public.recipe_status not null default 'draft',
  cover_image text not null default '',
  prep_minutes int not null default 0,
  cook_minutes int not null default 0,
  servings int not null default 4,
  author_id uuid references public.profiles (id) on delete set null,
  video_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.recipe_translations (
  recipe_id uuid not null references public.recipes (id) on delete cascade,
  locale public.app_locale not null,
  title text not null,
  slug text not null,
  excerpt text not null default '',
  steps jsonb not null default '[]'::jsonb,
  seo_title text not null default '',
  seo_description text not null default '',
  primary key (recipe_id, locale),
  unique (locale, slug)
);

create table public.recipe_clusters (
  recipe_id uuid not null references public.recipes (id) on delete cascade,
  cluster_id uuid not null references public.clusters (id) on delete cascade,
  primary key (recipe_id, cluster_id)
);

create table public.recipe_ingredients (
  id uuid primary key default gen_random_uuid(),
  recipe_id uuid not null references public.recipes (id) on delete cascade,
  sort_order int not null default 0,
  amount numeric not null default 1,
  unit_de text not null default '',
  unit_pl text not null default '',
  name_de text not null,
  name_pl text not null,
  group_name public.ingredient_group not null default 'other',
  store_hint_de text,
  substitute_de text,
  substitute_pl text
);

create table public.saved_recipes (
  user_id uuid not null references public.profiles (id) on delete cascade,
  recipe_id uuid not null references public.recipes (id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, recipe_id)
);

create table public.shopping_lists (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  name text not null default 'Meine Liste',
  updated_at timestamptz not null default now()
);

create table public.shopping_list_items (
  id uuid primary key default gen_random_uuid(),
  list_id uuid not null references public.shopping_lists (id) on delete cascade,
  name text not null,
  amount numeric not null default 1,
  unit text not null default '',
  group_name public.ingredient_group not null default 'other',
  checked boolean not null default false,
  recipe_id uuid references public.recipes (id) on delete set null,
  store_hint_de text
);

create table public.community_submissions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  status public.submission_status not null default 'pending',
  locale public.app_locale not null,
  title text not null,
  excerpt text not null default '',
  steps jsonb not null default '[]'::jsonb,
  ingredients jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create or replace function public.is_staff()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid()
      and p.role in ('admin', 'moderator')
  );
$$;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, display_name, role)
  values (
    new.id,
    coalesce(new.email, ''),
    coalesce(split_part(new.email, '@', 1), 'User'),
    case
      when coalesce(new.raw_app_meta_data->>'role', '') = 'admin' then 'admin'::public.user_role
      else 'user'::public.user_role
    end
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.clusters enable row level security;
alter table public.cluster_translations enable row level security;
alter table public.recipes enable row level security;
alter table public.recipe_translations enable row level security;
alter table public.recipe_clusters enable row level security;
alter table public.recipe_ingredients enable row level security;
alter table public.saved_recipes enable row level security;
alter table public.shopping_lists enable row level security;
alter table public.shopping_list_items enable row level security;
alter table public.community_submissions enable row level security;

create policy "profiles_select_own_or_staff"
  on public.profiles for select
  using (auth.uid() = id or public.is_staff());

create policy "profiles_update_own"
  on public.profiles for update
  using (auth.uid() = id);

create policy "public_read_clusters"
  on public.clusters for select using (true);

create policy "staff_write_clusters"
  on public.clusters for all using (public.is_staff());

create policy "public_read_cluster_translations"
  on public.cluster_translations for select using (true);

create policy "staff_write_cluster_translations"
  on public.cluster_translations for all using (public.is_staff());

create policy "public_read_published_recipes"
  on public.recipes for select
  using (status = 'published' or public.is_staff());

create policy "staff_write_recipes"
  on public.recipes for all using (public.is_staff());

create policy "public_read_recipe_translations"
  on public.recipe_translations for select
  using (
    exists (
      select 1 from public.recipes r
      where r.id = recipe_id
        and (r.status = 'published' or public.is_staff())
    )
  );

create policy "staff_write_recipe_translations"
  on public.recipe_translations for all using (public.is_staff());

create policy "public_read_recipe_clusters"
  on public.recipe_clusters for select using (true);

create policy "staff_write_recipe_clusters"
  on public.recipe_clusters for all using (public.is_staff());

create policy "public_read_recipe_ingredients"
  on public.recipe_ingredients for select
  using (
    exists (
      select 1 from public.recipes r
      where r.id = recipe_id
        and (r.status = 'published' or public.is_staff())
    )
  );

create policy "staff_write_recipe_ingredients"
  on public.recipe_ingredients for all using (public.is_staff());

create policy "saved_own"
  on public.saved_recipes for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "lists_own"
  on public.shopping_lists for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "list_items_own"
  on public.shopping_list_items for all
  using (
    exists (
      select 1 from public.shopping_lists l
      where l.id = list_id and l.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.shopping_lists l
      where l.id = list_id and l.user_id = auth.uid()
    )
  );

create policy "submissions_insert_own"
  on public.community_submissions for insert
  with check (auth.uid() = user_id);

create policy "submissions_select_own_or_staff"
  on public.community_submissions for select
  using (auth.uid() = user_id or public.is_staff());

create policy "submissions_staff_update"
  on public.community_submissions for update
  using (public.is_staff());

insert into storage.buckets (id, name, public)
values ('recipe-media', 'recipe-media', true)
on conflict (id) do nothing;

create policy "public_read_recipe_media"
  on storage.objects for select
  using (bucket_id = 'recipe-media');

create policy "staff_upload_recipe_media"
  on storage.objects for insert
  with check (bucket_id = 'recipe-media' and public.is_staff());

create policy "staff_update_recipe_media"
  on storage.objects for update
  using (bucket_id = 'recipe-media' and public.is_staff());
