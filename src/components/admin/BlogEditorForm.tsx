"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { saveBlogPostAction } from "@/app/actions/admin";
import type { BlogPost, Locale } from "@/types/content";

export function BlogEditorForm({
  post,
  uiLocale,
}: {
  post: BlogPost;
  uiLocale: string;
}) {
  const t = useTranslations("admin");
  const [editLocale, setEditLocale] = useState<Locale>("de");
  const translation = post.translations[editLocale];

  return (
    <form action={saveBlogPostAction} className="space-y-6">
      <input type="hidden" name="id" value={post.id} />
      <input type="hidden" name="editLocale" value={editLocale} />
      <input type="hidden" name="uiLocale" value={uiLocale} />

      <div className="inline-flex rounded-full border border-border bg-elevated p-1">
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

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block space-y-1 text-sm">
          <span>{t("status")}</span>
          <select
            name="status"
            defaultValue={post.status}
            className="min-h-11 w-full rounded-[var(--radius)] border border-border bg-surface px-3"
          >
            <option value="draft">{t("draft")}</option>
            <option value="published">{t("publish")}</option>
          </select>
        </label>
        <label className="block space-y-1 text-sm">
          <span>{t("postType")}</span>
          <select
            name="postType"
            defaultValue={post.postType}
            className="min-h-11 w-full rounded-[var(--radius)] border border-border bg-surface px-3"
          >
            <option value="guide">guide</option>
            <option value="lexicon">lexicon</option>
            <option value="culture">culture</option>
            <option value="diaspora">diaspora</option>
            <option value="buying-guide">buying-guide</option>
          </select>
        </label>
      </div>

      <label className="block space-y-1">
        <span className="text-sm">{t("titleField")}</span>
        <input
          key={`title-${editLocale}`}
          name="title"
          defaultValue={translation.title}
          className="min-h-12 w-full rounded-[var(--radius)] border border-border bg-surface px-3"
        />
      </label>
      <label className="block space-y-1">
        <span className="text-sm">Slug</span>
        <input
          key={`slug-${editLocale}`}
          name="slug"
          defaultValue={translation.slug}
          className="min-h-12 w-full rounded-[var(--radius)] border border-border bg-surface px-3"
        />
      </label>
      <label className="block space-y-1">
        <span className="text-sm">{t("cover")}</span>
        <input
          name="coverImage"
          defaultValue={post.coverImage}
          className="min-h-12 w-full rounded-[var(--radius)] border border-border bg-surface px-3"
        />
      </label>
      <label className="block space-y-1">
        <span className="text-sm">{t("excerptField")}</span>
        <textarea
          key={`excerpt-${editLocale}`}
          name="excerpt"
          defaultValue={translation.excerpt}
          rows={3}
          className="w-full rounded-[var(--radius)] border border-border bg-surface px-3 py-2"
        />
      </label>
      <label className="block space-y-1">
        <span className="text-sm">{t("bodyField")}</span>
        <textarea
          key={`body-${editLocale}`}
          name="body"
          defaultValue={translation.body}
          rows={16}
          className="w-full rounded-[var(--radius)] border border-border bg-surface px-3 py-2 font-mono text-sm"
        />
      </label>
      <label className="block space-y-1">
        <span className="text-sm">{t("seoTitle")}</span>
        <input
          key={`seoTitle-${editLocale}`}
          name="seoTitle"
          defaultValue={translation.seoTitle}
          className="min-h-12 w-full rounded-[var(--radius)] border border-border bg-surface px-3"
        />
      </label>
      <label className="block space-y-1">
        <span className="text-sm">{t("seoDescription")}</span>
        <textarea
          key={`seoDescription-${editLocale}`}
          name="seoDescription"
          defaultValue={translation.seoDescription}
          rows={2}
          className="w-full rounded-[var(--radius)] border border-border bg-surface px-3 py-2"
        />
      </label>
      <button type="submit" className="btn-primary">
        {t("save")}
      </button>
    </form>
  );
}
