# Content voice rules (user-facing)

Alemniam recipe and blog copy is for cooks in the DE/PL diaspora — not for SEO reviewers.

## Never in user-facing text

Do **not** write internal SEO or editorial jargon into articles, tips, mistakes, variants, or step tips:

- Primary / Cook-Primary / Primary-KW
- Owner / Cook-Owner / Broad-Owner / Anlass-Owner / Kultur-Owner / Owner-URL
- Money Page, Cook-Intent, cannibalization / cannibal
- SEO-Hinweis, Topical Authority, “descriptiv(e)” as process note
- “Primary stehlen”, “Ownership stehlen”, “Guide als Cook-Owner beanspruchen”
- “Abgrenzung:” as a label (write a normal sentence instead)

Keep ownership mapping in `content/keyword-ownership.md` and file-header comments only.

## Never: brand padding / telegraphic filler

These phrases and patterns are banned in recipe expand templates and FACTS fields:

- “Alemniam denkt …” / “Alemniam myśli …”
- “Morgens die Liste, abends die Schritte” / “Rano lista, wieczorem kroki”
- “liefert Kontext, ohne den Kochmodus zu blockieren”
- “Upgrade, kein Muss” / “upgrade, nie obowiązek”
- “bilingual und praxisnah” as slogan
- Colon-label dumps: `Einkauf: [Link]`, `Technik: [Link]`, `Switcher: …`, `Einkaufsalternativen: …`

Gate: `npm run gate:reader-copy`.

## Write for readers (prose quality)

- Full grammatical sentences in German and Polish — not bullet-speak pasted into paragraphs
- Natural diaspora voice: calm, clear, useful; like a good food editor, not an SEO brief
- Prefer fewer, better paragraphs over many choppy sections
- Tips and “Typische Fehler” = real cooking advice (heat, dough, filling, moisture, storage) in complete sentences
- Links live inside sentences: “Im [Polenladen](/de/blog/…) findest du …” — not “Einkauf: Ersatzprodukte.”
- Polish must be real Polish, not German calques
- Short sentences are fine; fragments and slogan stacks are not
- No meta essays about why the article exists for search
- Cross-links may name related dishes; never explain keyword ownership

## Recipe longform (`expand()`)

Assembler in `src/lib/data/recipe-articles.ts` should stay lean: opening + ~2 earned sections (`Einkaufen und kochen` / `Am Tisch`). FACTS fields carry the substance; the template must not inject brand slogans or empty “Leben zwischen…” padding.
