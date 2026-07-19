"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import type { Locale, Recipe } from "@/types/content";
import { RichTextEditor } from "./RichTextEditor";
import { saveRecipeAction } from "@/app/actions/admin";

export function RecipeEditorForm({
  recipe,
  uiLocale,
}: {
  recipe: Recipe;
  uiLocale: string;
}) {
  const t = useTranslations("admin");
  const [editLocale, setEditLocale] = useState<Locale>("de");
  const translation = recipe.translations[editLocale];
  const other: Locale = editLocale === "de" ? "pl" : "de";
  const missingOther = !recipe.translations[other]?.title;

  const stepsText = useMemo(
    () => translation.steps.map((s) => s.text).join("\n"),
    [translation.steps],
  );

  const ingredientsJson = JSON.stringify(recipe.ingredients, null, 2);
  const bodyHtml = `<p>${translation.excerpt}</p>`;

  return (
    <form action={saveRecipeAction} className="space-y-6">
      <input type="hidden" name="id" value={recipe.id} />
      <input type="hidden" name="editLocale" value={editLocale} />
      <input type="hidden" name="uiLocale" value={uiLocale} />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div
          className="inline-flex rounded-full border border-border bg-elevated p-1"
          role="group"
        >
          {(["de", "pl"] as Locale[]).map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setEditLocale(code)}
              className={`min-h-10 rounded-full px-4 text-sm uppercase ${
                editLocale === code ? "segment-active" : "text-muted"
              }`}
            >
              {code}
            </button>
          ))}
        </div>
        {missingOther ? (
          <p className="text-sm text-accent">{t("missingTranslation")}</p>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t("locale")}>
          <span className="text-sm uppercase">{editLocale}</span>
        </Field>
        <label className="block space-y-1 text-sm">
          <span>Status</span>
          <select
            name="status"
            defaultValue={recipe.status}
            className="min-h-11 w-full rounded-[var(--radius)] border border-border bg-surface px-3"
          >
            <option value="draft">{t("draft")}</option>
            <option value="published">{t("publish")}</option>
          </select>
        </label>
      </div>

      <label className="block space-y-1">
        <span className="text-sm">Title</span>
        <input
          key={`title-${editLocale}`}
          name="title"
          required
          defaultValue={translation.title}
          className="min-h-11 w-full rounded-[var(--radius)] border border-border bg-surface px-3"
        />
      </label>

      <label className="block space-y-1">
        <span className="text-sm">Slug</span>
        <input
          key={`slug-${editLocale}`}
          name="slug"
          required
          defaultValue={translation.slug}
          className="min-h-11 w-full rounded-[var(--radius)] border border-border bg-surface px-3"
        />
      </label>

      <label className="block space-y-1">
        <span className="text-sm">Excerpt</span>
        <textarea
          key={`excerpt-${editLocale}`}
          name="excerpt"
          rows={3}
          defaultValue={translation.excerpt}
          className="w-full rounded-[var(--radius)] border border-border bg-surface px-3 py-2"
        />
      </label>

      <div className="space-y-1">
        <span className="text-sm">WYSIWYG</span>
        <RichTextEditor
          key={`body-${editLocale}`}
          name="bodyHtml"
          initialHtml={bodyHtml}
        />
      </div>

      <label className="block space-y-1">
        <span className="text-sm">SEO-Artikel (lang, unter dem Rezept)</span>
        <textarea
          key={`article-${editLocale}`}
          name="article"
          rows={12}
          defaultValue={translation.article ?? ""}
          className="w-full rounded-[var(--radius)] border border-border bg-surface px-3 py-2 text-sm"
          placeholder="Langer Text ~1000 Wörter…"
        />
      </label>

      <label className="block space-y-1">
        <span className="text-sm">Steps (one per line)</span>
        <textarea
          key={`steps-${editLocale}`}
          name="steps"
          rows={8}
          defaultValue={stepsText}
          className="w-full rounded-[var(--radius)] border border-border bg-surface px-3 py-2 font-mono text-sm"
        />
      </label>

      <label className="block space-y-1">
        <span className="text-sm">Ingredients JSON</span>
        <textarea
          name="ingredientsJson"
          rows={10}
          defaultValue={ingredientsJson}
          className="w-full rounded-[var(--radius)] border border-border bg-surface px-3 py-2 font-mono text-xs"
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField name="prepMinutes" label="Prep" defaultValue={recipe.prepMinutes} />
        <NumberField name="cookMinutes" label="Cook" defaultValue={recipe.cookMinutes} />
        <NumberField name="servings" label="Servings" defaultValue={recipe.servings} />
      </div>

      <label className="block space-y-1">
        <span className="text-sm">Cover URL</span>
        <input
          name="coverImage"
          defaultValue={recipe.coverImage}
          className="min-h-11 w-full rounded-[var(--radius)] border border-border bg-surface px-3"
        />
      </label>

      <label className="block space-y-1">
        <span className="text-sm">{t("seoTitle")}</span>
        <input
          key={`seoTitle-${editLocale}`}
          name="seoTitle"
          defaultValue={translation.seoTitle}
          className="min-h-11 w-full rounded-[var(--radius)] border border-border bg-surface px-3"
        />
      </label>

      <label className="block space-y-1">
        <span className="text-sm">{t("seoDescription")}</span>
        <textarea
          key={`seoDescription-${editLocale}`}
          name="seoDescription"
          rows={3}
          defaultValue={translation.seoDescription}
          className="w-full rounded-[var(--radius)] border border-border bg-surface px-3 py-2"
        />
      </label>

      <button
        type="submit"
        className="btn-primary"
      >
        {t("save")}
      </button>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1 text-sm">
      <div>{label}</div>
      {children}
    </div>
  );
}

function NumberField({
  name,
  label,
  defaultValue,
}: {
  name: string;
  label: string;
  defaultValue: number;
}) {
  return (
    <label className="block space-y-1 text-sm">
      <span>{label}</span>
      <input
        type="number"
        name={name}
        defaultValue={defaultValue}
        className="min-h-11 w-full rounded-[var(--radius)] border border-border bg-surface px-3"
      />
    </label>
  );
}
