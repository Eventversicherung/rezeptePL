-- Extra Berlin shop found via OSM, missing from Excel list
begin;
create temporary table tmp_berlin_extra (
  slug text primary key, kind public.place_kind, lat float8, lng float8,
  street text, postal_code text, city text, state text, website text,
  opening_hours jsonb, tags text[], name_de text, name_pl text,
  desc_de text, desc_pl text, source_url text
);
insert into tmp_berlin_extra values
('curated-xlsx-extra-haeusler-charlottenburg', 'shop'::public.place_kind, 52.4949779, 13.296142, 'Joachim-Friedrich-Straße 8', '10711', 'Berlin', 'Berlin', 'https://www.polskashop.de/', '{}'::jsonb, array['xlsx','feste-standorte','berlin-extra']::text[], 'Feinkost Häusler Charlottenburg', 'Feinkost Häusler Charlottenburg', 'Polnisch-schlesische Feinkost (OSM + Unternehmensseite).', 'Polnisch-schlesische Feinkost (OSM + Unternehmensseite).', 'https://www.polskashop.de/');

insert into public.places (
  slug, kind, status, lat, lng, street, postal_code, city, state,
  website, phone, opening_hours, tags, source, source_url, verified_at
)
select slug, kind, 'published', lat, lng, street, postal_code, city, state,
  website, null, opening_hours, tags, 'curated'::public.place_source, source_url, now()
from tmp_berlin_extra
on conflict (slug) do update set
  lat = excluded.lat, lng = excluded.lng, street = excluded.street,
  postal_code = excluded.postal_code, website = excluded.website,
  opening_hours = excluded.opening_hours, updated_at = now();

insert into public.place_translations (place_id, locale, name, description, schedule_note, seo_title, seo_description)
select p.id, 'de', s.name_de, s.desc_de, '', s.name_de || ' | Alemniam', left(s.desc_de, 155)
from tmp_berlin_extra s join public.places p on p.slug = s.slug
on conflict (place_id, locale) do update set
  name = excluded.name, description = excluded.description;

insert into public.place_translations (place_id, locale, name, description, schedule_note, seo_title, seo_description)
select p.id, 'pl', s.name_pl, s.desc_pl, '', s.name_pl || ' | Alemniam', left(s.desc_pl, 155)
from tmp_berlin_extra s join public.places p on p.slug = s.slug
on conflict (place_id, locale) do update set
  name = excluded.name, description = excluded.description;
commit;
