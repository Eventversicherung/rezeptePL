-- Polenläden & Märkte (Markt finden)
-- Apply on AleMniam project only.

create extension if not exists postgis with schema extensions;

create type public.place_kind as enum ('shop', 'market');
create type public.place_status as enum ('draft', 'published', 'closed');
create type public.place_source as enum ('curated', 'scrape', 'community');

create table public.places (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  kind public.place_kind not null,
  status public.place_status not null default 'draft',
  lat double precision not null,
  lng double precision not null,
  location geography(Point, 4326)
    generated always as (
      st_setsrid(st_makepoint(lng, lat), 4326)::geography
    ) stored,
  street text not null default '',
  postal_code text not null default '',
  city text not null,
  state text not null default '',
  country text not null default 'DE',
  phone text,
  website text,
  email text,
  opening_hours jsonb not null default '{}'::jsonb,
  image_url text not null default '',
  tags text[] not null default '{}',
  source public.place_source not null default 'curated',
  source_url text,
  verified_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint places_lat_range check (lat >= -90 and lat <= 90),
  constraint places_lng_range check (lng >= -180 and lng <= 180)
);

create table public.place_translations (
  place_id uuid not null references public.places (id) on delete cascade,
  locale public.app_locale not null,
  name text not null,
  description text not null default '',
  schedule_note text not null default '',
  seo_title text not null default '',
  seo_description text not null default '',
  primary key (place_id, locale)
);

create index places_kind_status_idx on public.places (kind, status);
create index places_city_idx on public.places (city);
create index places_location_gix on public.places using gist (location);

alter table public.places enable row level security;
alter table public.place_translations enable row level security;

create policy "public_read_published_places"
  on public.places for select
  using (status = 'published' or public.is_staff());

create policy "staff_write_places"
  on public.places for all
  using (public.is_staff())
  with check (public.is_staff());

create policy "public_read_place_translations"
  on public.place_translations for select
  using (
    exists (
      select 1 from public.places p
      where p.id = place_id
        and (p.status = 'published' or public.is_staff())
    )
  );

create policy "staff_write_place_translations"
  on public.place_translations for all
  using (public.is_staff())
  with check (public.is_staff());

insert into storage.buckets (id, name, public)
values ('place-media', 'place-media', true)
on conflict (id) do nothing;

create policy "public_read_place_media"
  on storage.objects for select
  using (bucket_id = 'place-media');

create policy "staff_upload_place_media"
  on storage.objects for insert
  with check (bucket_id = 'place-media' and public.is_staff());

create policy "staff_update_place_media"
  on storage.objects for update
  using (bucket_id = 'place-media' and public.is_staff());
