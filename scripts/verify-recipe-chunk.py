#!/usr/bin/env python3
"""Ground-truth verifier for recipe SQL chunk imports.

Parses the two `insert into public.recipe_translations (...) values (...)`
statements in a generated chunk file (one per locale) and prints MD5
hashes + lengths of the text-heavy columns, computed directly from the
file on disk (no LLM transcription involved). These hashes can be
compared against `md5(column)` computed by Postgres after import to get
a cryptographic fidelity guarantee, without visually diffing huge
multi-KB strings.

Usage: python3 scripts/verify-recipe-chunk.py <chunk.sql>
"""
import re
import sys
import hashlib


def split_top_level(s: str):
    """Split a SQL VALUES-tuple's inner content on top-level commas,
    respecting single-quoted strings (with '' as an escaped quote) and
    bracket/paren nesting."""
    fields = []
    buf = []
    i = 0
    depth = 0
    in_str = False
    n = len(s)
    while i < n:
        c = s[i]
        if in_str:
            if c == "'":
                if i + 1 < n and s[i + 1] == "'":
                    buf.append("''")
                    i += 2
                    continue
                in_str = False
                buf.append(c)
                i += 1
                continue
            buf.append(c)
            i += 1
            continue
        else:
            if c == "'":
                in_str = True
                buf.append(c)
                i += 1
                continue
            if c in "([":
                depth += 1
                buf.append(c)
                i += 1
                continue
            if c in ")]":
                depth -= 1
                buf.append(c)
                i += 1
                continue
            if c == "," and depth == 0:
                fields.append("".join(buf))
                buf = []
                i += 1
                continue
            buf.append(c)
            i += 1
            continue
    if buf:
        fields.append("".join(buf))
    return fields


def unquote(field: str):
    field = field.strip()
    if field.startswith("'"):
        # strip trailing ::cast if present
        end = field.rfind("'")
        inner = field[1:end]
        return inner.replace("''", "'")
    if field == "null":
        return None
    return field


def main():
    path = sys.argv[1]
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    pattern = re.compile(
        r"insert into public\.recipe_translations \(recipe_id, locale, title, slug, excerpt, steps, article, seo_title, seo_description\) values \((.*?)\) on conflict \(recipe_id, locale\)",
        re.DOTALL,
    )
    matches = pattern.findall(content)
    if not matches:
        print("NO_MATCHES_FOUND")
        return

    col_names = [
        "recipe_id",
        "locale",
        "title",
        "slug",
        "excerpt",
        "steps",
        "article",
        "seo_title",
        "seo_description",
    ]

    for m in matches:
        fields = split_top_level(m)
        if len(fields) != 9:
            print(f"FIELD_COUNT_MISMATCH got={len(fields)}")
            continue
        values = [unquote(f) for f in fields]
        row = dict(zip(col_names, values))
        print(f"--- {row['recipe_id']} / {row['locale']} ---")
        for col in ["title", "slug", "excerpt", "steps", "article", "seo_title", "seo_description"]:
            val = row[col] or ""
            h = hashlib.md5(val.encode("utf-8")).hexdigest()
            print(f"{col}: len={len(val)} md5={h}")


if __name__ == "__main__":
    main()
