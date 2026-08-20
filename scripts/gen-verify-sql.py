#!/usr/bin/env python3
"""Print a Postgres query that computes matching sha256 digests for a given
recipe_id, to compare against the output of verify-chunk-hash.py."""
import sys

SEP = "chr(31)"


def main():
    recipe_id = sys.argv[1]
    t_cols = ["title", "slug", "excerpt", "article", "seo_title", "seo_description"]
    t_expr = (" || " + SEP + " || ").join(f"coalesce({c}, '')" for c in t_cols)
    steps_expr = (
        "(select string_agg(coalesce(elem->>'text', '') || chr(29) || coalesce(elem->>'tip', ''), "
        "chr(30)) from jsonb_array_elements(rt.steps) as elem)"
    )
    i_cols = ["unit_de", "unit_pl", "name_de", "name_pl", "group_name::text",
              "store_hint_de", "substitute_de", "substitute_pl"]
    i_expr = (" || " + SEP + " || ").join(f"coalesce({c}, '')" for c in i_cols)

    print(
        f"select 'TRANSLATION' as kind, rt.recipe_id, rt.locale::text as k2, "
        f"encode(digest({t_expr} || {SEP} || coalesce({steps_expr}, ''), 'sha256'), 'hex') as sha256 "
        f"from public.recipe_translations rt where recipe_id = '{recipe_id}' "
        f"union all "
        f"select 'INGREDIENT' as kind, recipe_id, sort_order::text as k2, "
        f"encode(digest({i_expr}, 'sha256'), 'hex') as sha256 "
        f"from public.recipe_ingredients where recipe_id = '{recipe_id}' "
        f"order by 1, 3;"
    )


if __name__ == "__main__":
    main()
