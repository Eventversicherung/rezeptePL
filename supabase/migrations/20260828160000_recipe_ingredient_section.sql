-- Optional cook-list grouping (dough / filling / finish), separate from store aisles.
alter table public.recipe_ingredients
  add column if not exists section text;

alter table public.recipe_ingredients
  drop constraint if exists recipe_ingredients_section_check;

alter table public.recipe_ingredients
  add constraint recipe_ingredients_section_check
  check (section is null or section in ('dough', 'filling', 'finish'));
