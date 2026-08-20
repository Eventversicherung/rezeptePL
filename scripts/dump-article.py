#!/usr/bin/env python3
"""Dump the raw 'article' text for a given recipe_id + locale from a chunk file
to stdout, with zero transformation, for diffing against DB content."""
import re
import sys

sys.path.insert(0, "scripts")
import importlib.util

spec = importlib.util.spec_from_file_location("verify_chunk_hash", "scripts/verify-chunk-hash.py")
vch = importlib.util.module_from_spec(spec)
spec.loader.exec_module(vch)


def main():
    path, recipe_id, locale = sys.argv[1], sys.argv[2], sys.argv[3]
    field = sys.argv[4] if len(sys.argv) > 4 else "article"
    with open(path, "r", encoding="utf-8") as f:
        sql = f.read()
    for m in re.finditer(r"insert into public\.recipe_translations \(([^)]*)\) values \(", sql):
        cols = [c.strip() for c in m.group(1).split(",")]
        start = m.end()
        values, _ = vch.parse_sql_string_literals(sql, start)
        row = dict(zip(cols, [v[1] for v in values]))
        if row.get("recipe_id") == recipe_id and row.get("locale") == locale:
            if field == "steps_text":
                import json
                steps = json.loads(row.get("steps") or "[]")
                for i, step in enumerate(steps):
                    sys.stdout.write(f"--- step {i} text ---\n{step.get('text','')}\n")
                    sys.stdout.write(f"--- step {i} tip ---\n{step.get('tip','')}\n")
            else:
                sys.stdout.write(row.get(field) or "")
            return
    sys.exit("not found")


if __name__ == "__main__":
    main()
