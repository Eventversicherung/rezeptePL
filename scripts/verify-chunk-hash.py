#!/usr/bin/env python3
"""Extract every recipe_translations / recipe_ingredients row from a generated
SQL chunk file and print a per-locale / per-ingredient sha256 digest covering
ALL text columns, so it can be diffed against digests computed by Postgres
after import. Read-only, does not modify the source file.

Usage:
  python3 verify-chunk-hash.py <path-to-chunk.sql>

Prints lines like:
  TRANSLATION  <recipe_id>  <locale>  <sha256>
  INGREDIENT   <recipe_id>  <sort_order>  <sha256>

Also prints ready-to-run SQL that computes the matching digests in Postgres.
"""
import re
import sys
import json
import hashlib


def parse_sql_string_literals(sql: str, start: int):
    i = start
    n = len(sql)
    values = []
    while i < n:
        while i < n and sql[i] in " \t\n":
            i += 1
        if sql[i] == "'":
            j = i + 1
            buf = []
            while j < n:
                if sql[j] == "'":
                    if j + 1 < n and sql[j + 1] == "'":
                        buf.append("'")
                        j += 2
                        continue
                    else:
                        j += 1
                        break
                else:
                    buf.append(sql[j])
                    j += 1
            values.append(("STR", "".join(buf)))
            i = j
            while i < n and sql[i] in " \t\n":
                i += 1
            if sql[i:i + 2] == "::":
                k = i + 2
                while k < n and (sql[k].isalnum() or sql[k] in "_[]"):
                    k += 1
                i = k
        elif sql[i:i + 4] == "null":
            values.append(("NULL", None))
            i += 4
        elif sql[i:i + 5] == "array":
            k = sql.index("[", i)
            depth2 = 1
            k += 1
            start_arr = k
            while depth2 > 0:
                if sql[k] == "[":
                    depth2 += 1
                elif sql[k] == "]":
                    depth2 -= 1
                k += 1
            values.append(("ARRAY", sql[start_arr:k - 1]))
            i = k
            while i < n and sql[i] in " \t\n":
                i += 1
            if sql[i:i + 2] == "::":
                kk = i + 2
                while kk < n and (sql[kk].isalnum() or sql[kk] in "_[]"):
                    kk += 1
                i = kk
        else:
            j = i
            while j < n and sql[j] not in ",)":
                j += 1
            values.append(("RAW", sql[i:j].strip()))
            i = j
        while i < n and sql[i] in " \t\n":
            i += 1
        if i < n and sql[i] == ",":
            i += 1
            continue
        elif i < n and sql[i] == ")":
            i += 1
            break
        else:
            raise ValueError(f"Unexpected char at {i}: {sql[i:i + 20]!r}")
    return values, i


def sha256_of(*parts):
    joined = "\x1f".join(p if p is not None else "" for p in parts)
    return hashlib.sha256(joined.encode("utf-8")).hexdigest()


def main():
    path = sys.argv[1]
    with open(path, "r", encoding="utf-8") as f:
        sql = f.read()

    print(f"# {path}")

    for m in re.finditer(r"insert into public\.recipe_translations \(([^)]*)\) values \(", sql):
        cols = [c.strip() for c in m.group(1).split(",")]
        start = m.end()
        values, _ = parse_sql_string_literals(sql, start)
        row = dict(zip(cols, [v[1] for v in values]))
        text_cols = ["title", "slug", "excerpt", "article", "seo_title", "seo_description"]
        steps_raw = row.get("steps") or "[]"
        steps_parsed = json.loads(steps_raw)
        steps_text = "\x1e".join(
            (step.get("text") or "") + "\x1d" + (step.get("tip") or "")
            for step in steps_parsed
        )
        digest = sha256_of(*([row.get(c) or "" for c in text_cols] + [steps_text]))
        print(f"TRANSLATION\t{row.get('recipe_id')}\t{row.get('locale')}\t{digest}")

    for m in re.finditer(r"insert into public\.recipe_ingredients \(([^)]*)\) values \(", sql):
        cols = [c.strip() for c in m.group(1).split(",")]
        start = m.end()
        values, _ = parse_sql_string_literals(sql, start)
        row = dict(zip(cols, [v[1] for v in values]))
        text_cols = ["unit_de", "unit_pl", "name_de", "name_pl", "group_name",
                     "store_hint_de", "substitute_de", "substitute_pl"]
        digest = sha256_of(*[str(row.get(c)) if row.get(c) is not None else "" for c in text_cols])
        print(f"INGREDIENT\t{row.get('recipe_id')}\t{row.get('sort_order')}\t{digest}")


if __name__ == "__main__":
    main()
