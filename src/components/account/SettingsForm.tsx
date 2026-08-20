"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import {
  updateDisplayNameAction,
  type ProfileFormState,
} from "@/app/actions/account";

export function SettingsForm({
  displayName,
  email,
}: {
  displayName: string;
  email: string;
}) {
  const t = useTranslations("settings");
  const [state, formAction, pending] = useActionState<
    ProfileFormState,
    FormData
  >(updateDisplayNameAction, {});

  const errorKey = state.error
    ? (`error_${state.error}` as
        | "error_name"
        | "error_save"
        | "error_unauthorized")
    : null;

  return (
    <form action={formAction} className="max-w-lg space-y-5">
      <label className="block space-y-1 text-sm">
        <span>{t("email")}</span>
        <input
          type="email"
          value={email}
          readOnly
          className="min-h-12 w-full rounded-[var(--radius)] border border-border bg-muted/40 px-3 text-muted-foreground"
        />
      </label>
      <label className="block space-y-1 text-sm">
        <span>{t("displayName")}</span>
        <input
          name="displayName"
          type="text"
          required
          minLength={2}
          maxLength={80}
          defaultValue={displayName}
          autoComplete="name"
          className="min-h-12 w-full rounded-[var(--radius)] border border-border bg-surface px-3"
        />
      </label>
      {state.message === "saved" ? (
        <p className="rounded-[var(--radius)] bg-accent-soft px-4 py-3 text-sm">
          {t("saved")}
        </p>
      ) : null}
      {errorKey ? (
        <p
          className="rounded-[var(--radius)] border border-accent/30 bg-accent-soft px-4 py-3 text-sm text-accent"
          role="alert"
        >
          {t(errorKey)}
        </p>
      ) : null}
      <button type="submit" className="btn-primary" disabled={pending}>
        {t("save")}
      </button>
    </form>
  );
}
