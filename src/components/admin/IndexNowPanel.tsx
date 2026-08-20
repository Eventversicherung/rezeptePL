"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { submitIndexNowAction } from "@/app/actions/admin";
import type { IndexNowResult } from "@/lib/seo/indexnow-types";

function statusMessage(
  t: (key: string, values?: Record<string, string | number>) => string,
  state: IndexNowResult,
) {
  if (state.ok) {
    return t("indexNowSuccess", {
      count: state.submitted,
      host: state.host,
      status: state.status ?? 200,
    });
  }
  if (state.skipped === "not-production") {
    return t("indexNowLocal");
  }
  if (state.skipped === "empty") {
    return t("indexNowEmpty");
  }
  if (state.skipped === "missing-key" || state.skipped === "invalid-key") {
    return t("indexNowKeyMissing");
  }
  return t("indexNowError", { error: state.error ?? "unknown" });
}

export function IndexNowPanel() {
  const t = useTranslations("admin");
  const [state, action, pending] = useActionState(submitIndexNowAction, null);

  return (
    <section className="rounded-2xl border border-border bg-surface p-4 sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <h2 className="font-display text-lg font-semibold">
            {t("indexNowTitle")}
          </h2>
          <p className="mt-1 text-sm text-muted">{t("indexNowHelp")}</p>
        </div>
        <form action={action} className="shrink-0">
          <button
            type="submit"
            disabled={pending}
            className="btn-primary w-full min-h-11 px-4 text-sm sm:w-auto"
          >
            {pending ? t("indexNowPending") : t("indexNowSubmit")}
          </button>
        </form>
      </div>
      {state ? (
        <p
          className={`mt-3 text-sm ${state.ok ? "text-foreground" : "text-accent"}`}
          role="status"
          aria-live="polite"
        >
          {statusMessage(t, state)}
        </p>
      ) : null}
    </section>
  );
}
