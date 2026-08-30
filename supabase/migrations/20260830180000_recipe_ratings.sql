-- Genuine per-user recipe ratings for Recipe aggregateRating (Google Review guidelines).
-- Never seed fake scores. Aggregates are public; individual votes stay private.

create table public.recipe_ratings (
  user_id uuid not null references public.profiles (id) on delete cascade,
  recipe_id text not null references public.recipes (id) on delete cascade,
  rating smallint not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, recipe_id),
  constraint recipe_ratings_rating_range check (rating >= 1 and rating <= 5)
);

create index recipe_ratings_recipe_id_idx on public.recipe_ratings (recipe_id);

comment on table public.recipe_ratings is
  'One 1–5 rating per signed-in user per recipe. Source of truth for Recipe.aggregateRating.';

alter table public.recipe_ratings enable row level security;

create policy recipe_ratings_select_own
  on public.recipe_ratings for select
  to authenticated
  using ((select auth.uid()) = user_id or private.is_staff());

create policy recipe_ratings_insert_own
  on public.recipe_ratings for insert
  to authenticated
  with check (
    (select auth.uid()) = user_id
    and exists (
      select 1
      from public.recipes r
      where r.id = recipe_id
        and r.status = 'published'
    )
  );

create policy recipe_ratings_update_own
  on public.recipe_ratings for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy recipe_ratings_delete_own
  on public.recipe_ratings for delete
  to authenticated
  using ((select auth.uid()) = user_id);

-- Owner view (security_invoker off): public averages without leaking user_id.
-- https://supabase.com/docs/guides/database/postgres/row-level-security
create view public.recipe_rating_stats
with (security_invoker = false, security_barrier = true) as
select
  recipe_id,
  round(avg(rating)::numeric, 1) as rating_value,
  count(*)::integer as rating_count
from public.recipe_ratings
group by recipe_id;

comment on view public.recipe_rating_stats is
  'Public rating averages. No user identities. Used for on-page stars and JSON-LD.';

revoke all on table public.recipe_ratings from anon, authenticated, public;
grant select, insert, update, delete on table public.recipe_ratings to authenticated;

revoke all on table public.recipe_rating_stats from anon, authenticated, public;
grant select on table public.recipe_rating_stats to anon, authenticated;
