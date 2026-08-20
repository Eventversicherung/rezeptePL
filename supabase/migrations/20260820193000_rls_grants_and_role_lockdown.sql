-- Official Supabase RLS lockdown:
-- https://supabase.com/docs/guides/database/postgres/row-level-security
-- Grants AND policies both apply. Policies do not revoke table privileges.
-- Role is not self-assignable: authenticated may UPDATE only safe profile columns.
-- SECURITY DEFINER helpers live in private (not PostgREST-exposed).

create schema if not exists private;
revoke all on schema private from public;
grant usage on schema private to postgres, service_role, authenticated, anon;

create or replace function private.is_staff()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = (select auth.uid())
      and p.role in ('admin', 'moderator')
  );
$$;

revoke all on function private.is_staff() from public;
grant execute on function private.is_staff() to authenticated, anon, service_role;

-- Drop the role-guard trigger. Column grants replace it (Postgres privilege model).
drop trigger if exists protect_profile_role on public.profiles;
drop function if exists public.protect_profile_role();

-- Recreate policies that called public.is_staff() so they use private.is_staff().
-- Also name the role (to authenticated / anon) per official docs.

drop policy if exists profiles_select_own_or_staff on public.profiles;
create policy profiles_select_own_or_staff
  on public.profiles for select
  to authenticated
  using ((select auth.uid()) = id or private.is_staff());

drop policy if exists profiles_update_own on public.profiles;
create policy profiles_update_own
  on public.profiles for update
  to authenticated
  using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

drop policy if exists public_read_published_recipes on public.recipes;
create policy public_read_published_recipes
  on public.recipes for select
  to anon, authenticated
  using (status = 'published' or private.is_staff());

drop policy if exists staff_write_recipes on public.recipes;
create policy staff_write_recipes
  on public.recipes for all
  to authenticated
  using (private.is_staff())
  with check (private.is_staff());

drop policy if exists public_read_recipe_translations on public.recipe_translations;
create policy public_read_recipe_translations
  on public.recipe_translations for select
  to anon, authenticated
  using (
    exists (
      select 1 from public.recipes r
      where r.id = recipe_id
        and (r.status = 'published' or private.is_staff())
    )
  );

drop policy if exists staff_write_recipe_translations on public.recipe_translations;
create policy staff_write_recipe_translations
  on public.recipe_translations for all
  to authenticated
  using (private.is_staff())
  with check (private.is_staff());

drop policy if exists public_read_recipe_ingredients on public.recipe_ingredients;
create policy public_read_recipe_ingredients
  on public.recipe_ingredients for select
  to anon, authenticated
  using (
    exists (
      select 1 from public.recipes r
      where r.id = recipe_id
        and (r.status = 'published' or private.is_staff())
    )
  );

drop policy if exists staff_write_recipe_ingredients on public.recipe_ingredients;
create policy staff_write_recipe_ingredients
  on public.recipe_ingredients for all
  to authenticated
  using (private.is_staff())
  with check (private.is_staff());

drop policy if exists public_read_recipe_clusters on public.recipe_clusters;
create policy public_read_recipe_clusters
  on public.recipe_clusters for select
  to anon, authenticated
  using (true);

drop policy if exists staff_write_recipe_clusters on public.recipe_clusters;
create policy staff_write_recipe_clusters
  on public.recipe_clusters for all
  to authenticated
  using (private.is_staff())
  with check (private.is_staff());

drop policy if exists public_read_recipe_families on public.recipe_families;
create policy public_read_recipe_families
  on public.recipe_families for select
  to anon, authenticated
  using (true);

drop policy if exists staff_write_recipe_families on public.recipe_families;
create policy staff_write_recipe_families
  on public.recipe_families for all
  to authenticated
  using (private.is_staff())
  with check (private.is_staff());

drop policy if exists public_read_recipe_family_translations on public.recipe_family_translations;
create policy public_read_recipe_family_translations
  on public.recipe_family_translations for select
  to anon, authenticated
  using (true);

drop policy if exists staff_write_recipe_family_translations on public.recipe_family_translations;
create policy staff_write_recipe_family_translations
  on public.recipe_family_translations for all
  to authenticated
  using (private.is_staff())
  with check (private.is_staff());

drop policy if exists public_read_clusters on public.clusters;
create policy public_read_clusters
  on public.clusters for select
  to anon, authenticated
  using (true);

drop policy if exists staff_write_clusters on public.clusters;
create policy staff_write_clusters
  on public.clusters for all
  to authenticated
  using (private.is_staff())
  with check (private.is_staff());

drop policy if exists public_read_cluster_translations on public.cluster_translations;
create policy public_read_cluster_translations
  on public.cluster_translations for select
  to anon, authenticated
  using (true);

drop policy if exists staff_write_cluster_translations on public.cluster_translations;
create policy staff_write_cluster_translations
  on public.cluster_translations for all
  to authenticated
  using (private.is_staff())
  with check (private.is_staff());

drop policy if exists public_read_published_blog_posts on public.blog_posts;
create policy public_read_published_blog_posts
  on public.blog_posts for select
  to anon, authenticated
  using (status = 'published' or private.is_staff());

drop policy if exists staff_write_blog_posts on public.blog_posts;
create policy staff_write_blog_posts
  on public.blog_posts for all
  to authenticated
  using (private.is_staff())
  with check (private.is_staff());

drop policy if exists public_read_blog_post_translations on public.blog_post_translations;
create policy public_read_blog_post_translations
  on public.blog_post_translations for select
  to anon, authenticated
  using (
    exists (
      select 1 from public.blog_posts p
      where p.id = post_id
        and (p.status = 'published' or private.is_staff())
    )
  );

drop policy if exists staff_write_blog_post_translations on public.blog_post_translations;
create policy staff_write_blog_post_translations
  on public.blog_post_translations for all
  to authenticated
  using (private.is_staff())
  with check (private.is_staff());

drop policy if exists public_read_published_places on public.places;
create policy public_read_published_places
  on public.places for select
  to anon, authenticated
  using (status = 'published' or private.is_staff());

drop policy if exists staff_write_places on public.places;
create policy staff_write_places
  on public.places for all
  to authenticated
  using (private.is_staff())
  with check (private.is_staff());

drop policy if exists public_read_place_translations on public.place_translations;
create policy public_read_place_translations
  on public.place_translations for select
  to anon, authenticated
  using (
    exists (
      select 1 from public.places p
      where p.id = place_id
        and (p.status = 'published' or private.is_staff())
    )
  );

drop policy if exists staff_write_place_translations on public.place_translations;
create policy staff_write_place_translations
  on public.place_translations for all
  to authenticated
  using (private.is_staff())
  with check (private.is_staff());

drop policy if exists affiliate_products_staff_all on public.affiliate_products;
create policy affiliate_products_staff_all
  on public.affiliate_products for all
  to authenticated
  using (private.is_staff())
  with check (private.is_staff());

drop policy if exists submissions_insert_own on public.community_submissions;
create policy submissions_insert_own
  on public.community_submissions for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists submissions_select_own_or_staff on public.community_submissions;
create policy submissions_select_own_or_staff
  on public.community_submissions for select
  to authenticated
  using ((select auth.uid()) = user_id or private.is_staff());

drop policy if exists submissions_staff_update on public.community_submissions;
create policy submissions_staff_update
  on public.community_submissions for update
  to authenticated
  using (private.is_staff())
  with check (private.is_staff());

drop policy if exists saved_own on public.saved_recipes;
create policy saved_own
  on public.saved_recipes for all
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists lists_own on public.shopping_lists;
create policy lists_own
  on public.shopping_lists for all
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists list_items_own on public.shopping_list_items;
create policy list_items_own
  on public.shopping_list_items for all
  to authenticated
  using (
    exists (
      select 1 from public.shopping_lists l
      where l.id = list_id and l.user_id = (select auth.uid())
    )
  )
  with check (
    exists (
      select 1 from public.shopping_lists l
      where l.id = list_id and l.user_id = (select auth.uid())
    )
  );

drop policy if exists meal_plans_own on public.meal_plans;
create policy meal_plans_own
  on public.meal_plans for all
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists meal_plan_items_own on public.meal_plan_items;
create policy meal_plan_items_own
  on public.meal_plan_items for all
  to authenticated
  using (
    exists (
      select 1 from public.meal_plans p
      where p.id = plan_id and p.user_id = (select auth.uid())
    )
  )
  with check (
    exists (
      select 1 from public.meal_plans p
      where p.id = plan_id and p.user_id = (select auth.uid())
    )
  );

drop policy if exists staff_upload_recipe_media on storage.objects;
create policy staff_upload_recipe_media
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'recipe-media' and private.is_staff());

drop policy if exists staff_update_recipe_media on storage.objects;
create policy staff_update_recipe_media
  on storage.objects for update
  to authenticated
  using (bucket_id = 'recipe-media' and private.is_staff())
  with check (bucket_id = 'recipe-media' and private.is_staff());

drop policy if exists staff_upload_place_media on storage.objects;
create policy staff_upload_place_media
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'place-media' and private.is_staff());

drop policy if exists staff_update_place_media on storage.objects;
create policy staff_update_place_media
  on storage.objects for update
  to authenticated
  using (bucket_id = 'place-media' and private.is_staff())
  with check (bucket_id = 'place-media' and private.is_staff());

-- Remove public SECURITY DEFINER helpers from the Data API.
drop function if exists public.is_staff();
revoke all on function public.handle_new_user() from public, anon, authenticated;
revoke all on function public.rls_auto_enable() from public, anon, authenticated;

-- Lock down table grants (official: revoke, then grant only what the role needs).
do $$
declare
  t text;
begin
  foreach t in array array[
    'profiles',
    'recipes', 'recipe_translations', 'recipe_ingredients', 'recipe_clusters',
    'recipe_families', 'recipe_family_translations',
    'clusters', 'cluster_translations',
    'blog_posts', 'blog_post_translations',
    'places', 'place_translations',
    'affiliate_products',
    'saved_recipes', 'shopping_lists', 'shopping_list_items',
    'meal_plans', 'meal_plan_items',
    'community_submissions'
  ]
  loop
    execute format('revoke all on table public.%I from anon, authenticated, public', t);
  end loop;
end $$;

-- Public catalog: read-only for visitors.
grant select on table
  public.recipes,
  public.recipe_translations,
  public.recipe_ingredients,
  public.recipe_clusters,
  public.recipe_families,
  public.recipe_family_translations,
  public.clusters,
  public.cluster_translations,
  public.blog_posts,
  public.blog_post_translations,
  public.places,
  public.place_translations,
  public.affiliate_products
to anon, authenticated;

-- Staff CMS writes go through the authenticated JWT + private.is_staff() policies.
grant insert, update, delete on table
  public.recipes,
  public.recipe_translations,
  public.recipe_ingredients,
  public.recipe_clusters,
  public.recipe_families,
  public.recipe_family_translations,
  public.clusters,
  public.cluster_translations,
  public.blog_posts,
  public.blog_post_translations,
  public.places,
  public.place_translations,
  public.affiliate_products
to authenticated;

-- Profiles: users cannot UPDATE role (column privilege, not a trigger).
grant select on table public.profiles to authenticated;
grant update (display_name, preferred_locale) on table public.profiles to authenticated;

grant select, insert, delete on table public.saved_recipes to authenticated;
grant select, insert, update, delete on table
  public.shopping_lists,
  public.shopping_list_items,
  public.meal_plans,
  public.meal_plan_items
to authenticated;

grant select, insert, update on table public.community_submissions to authenticated;

-- Signups always start as user. Admin is owner-only SQL, never metadata.
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
    'user'::public.user_role
  );
  return new;
end;
$$;

revoke all on function public.handle_new_user() from public, anon, authenticated;

-- Official Data API lockdown: new objects are opt-in.
-- https://supabase.com/docs/guides/api/securing-your-api
alter default privileges for role postgres in schema public
  revoke select, insert, update, delete on tables from anon, authenticated, service_role;

alter default privileges for role postgres in schema public
  revoke execute on functions from anon, authenticated, service_role;

alter default privileges for role postgres in schema public
  revoke usage, select on sequences from anon, authenticated, service_role;

alter default privileges for role postgres in schema public
  revoke execute on functions from public;
