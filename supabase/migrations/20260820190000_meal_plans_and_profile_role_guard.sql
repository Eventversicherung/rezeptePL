-- Meal plans for authenticated users + prevent self-promotion to admin

create table if not exists public.meal_plans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  week_start date not null,
  created_at timestamptz not null default now(),
  unique (user_id, week_start)
);

create table if not exists public.meal_plan_items (
  id uuid primary key default gen_random_uuid(),
  plan_id uuid not null references public.meal_plans (id) on delete cascade,
  weekday smallint not null check (weekday between 0 and 6),
  slot text not null check (slot in ('breakfast', 'lunch', 'dinner')),
  recipe_id text not null references public.recipes (id) on delete cascade,
  unique (plan_id, weekday, slot)
);

create index if not exists meal_plans_user_id_idx on public.meal_plans (user_id);
create index if not exists meal_plan_items_plan_id_idx on public.meal_plan_items (plan_id);

alter table public.meal_plans enable row level security;
alter table public.meal_plan_items enable row level security;

create policy "meal_plans_own"
  on public.meal_plans for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "meal_plan_items_own"
  on public.meal_plan_items for all
  using (
    exists (
      select 1 from public.meal_plans p
      where p.id = plan_id and p.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.meal_plans p
      where p.id = plan_id and p.user_id = auth.uid()
    )
  );

create or replace function public.protect_profile_role()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.role is distinct from old.role and not public.is_staff() then
    new.role := old.role;
  end if;
  return new;
end;
$$;

drop trigger if exists protect_profile_role on public.profiles;
create trigger protect_profile_role
  before update on public.profiles
  for each row execute function public.protect_profile_role();
