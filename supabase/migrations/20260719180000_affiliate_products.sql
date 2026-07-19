-- Affiliate / partner product catalog for inline article cards.
-- Public read of active rows; write via service role / admin only.

create type public.affiliate_partner as enum ('amazon', 'other');

create table public.affiliate_products (
  id uuid primary key default gen_random_uuid(),
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
  active boolean not null default true,
  sort_order int not null default 100,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index affiliate_products_active_sort_idx
  on public.affiliate_products (active, sort_order)
  where active = true;

alter table public.affiliate_products enable row level security;

-- Anyone can read active affiliate products (needed for public recipe pages)
create policy "affiliate_products_public_read_active"
  on public.affiliate_products
  for select
  to anon, authenticated
  using (active = true);

-- Admins/moderators manage catalog (role from profiles, not user_metadata)
create policy "affiliate_products_staff_all"
  on public.affiliate_products
  for all
  to authenticated
  using (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid()
        and p.role in ('admin', 'moderator')
    )
  )
  with check (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid()
        and p.role in ('admin', 'moderator')
    )
  );
