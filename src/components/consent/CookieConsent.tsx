"use client";

import { useEffect, useId, useState, useSyncExternalStore, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Setting2, ShieldTick, Chart, Shop } from "iconsax-reactjs";
import {
  CONSENT_OPEN_EVENT,
  DEFAULT_CONSENT,
  type ConsentCategory,
  type ConsentChoice,
  affiliateHref,
  openConsentSettings,
  readConsent,
  subscribeConsent,
  writeConsent,
} from "@/lib/consent";

export { openConsentSettings };

const OPTIONAL: Exclude<ConsentCategory, "necessary">[] = [
  "preferences",
  "analytics",
  "marketing",
];

function subscribeHydrated() {
  return () => {};
}

export function useConsent() {
  const choice = useSyncExternalStore(subscribeConsent, readConsent, () => null);
  const hydrated = useSyncExternalStore(subscribeHydrated, () => true, () => false);

  return {
    ready: hydrated,
    choice,
    allowed: (category: ConsentCategory) =>
      category === "necessary" || Boolean(choice?.[category]),
  };
}

export function useAffiliateHref(url: string) {
  const { allowed } = useConsent();
  return affiliateHref(url, allowed("marketing"));
}

export function CookieSettingsButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button type="button" className={className} onClick={openConsentSettings}>
      {children}
    </button>
  );
}

export function CookieConsent() {
  const t = useTranslations("cookies");
  const titleId = useId();
  const { ready, choice } = useConsent();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [draft, setDraft] = useState(DEFAULT_CONSENT);

  useEffect(() => {
    const onOpen = () => {
      setDraft(readConsent() ?? DEFAULT_CONSENT);
      setDetails(true);
      setSettingsOpen(true);
    };
    window.addEventListener(CONSENT_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, onOpen);
  }, []);

  function persist(next: Pick<ConsentChoice, "preferences" | "analytics" | "marketing">) {
    writeConsent(next);
    setSettingsOpen(false);
    setDetails(false);
  }

  if (!ready || (choice && !settingsOpen)) return null;

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-modal="false"
      aria-labelledby={titleId}
    >
      <div className="cookie-banner__card">
        <div className="cookie-banner__intro">
          <p className="cookie-banner__kicker">{t("kicker")}</p>
          <h2 id={titleId} className="cookie-banner__title">
            {t("title")}
          </h2>
          <p className="cookie-banner__text">
            {t("body")}{" "}
            <Link href="/datenschutz" className="cookie-banner__link">
              {t("privacy")}
            </Link>
            .
          </p>
        </div>

        {details ? (
          <ul className="cookie-banner__list">
            <CategoryRow
              icon={<ShieldTick size={20} variant="Bold" />}
              title={t("necessaryTitle")}
              description={t("necessaryBody")}
              checked
              locked
              lockLabel={t("alwaysOn")}
            />
            {OPTIONAL.map((key) => (
              <CategoryRow
                key={key}
                icon={
                  key === "preferences" ? (
                    <Setting2 size={20} variant="Bold" />
                  ) : key === "analytics" ? (
                    <Chart size={20} variant="Bold" />
                  ) : (
                    <Shop size={20} variant="Bold" />
                  )
                }
                title={t(`${key}Title`)}
                description={t(`${key}Body`)}
                checked={draft[key]}
                onChange={(next) => setDraft((prev) => ({ ...prev, [key]: next }))}
              />
            ))}
          </ul>
        ) : null}

        <div className="cookie-banner__actions">
          <button
            type="button"
            className="btn-secondary cookie-banner__btn"
            onClick={() =>
              persist({ preferences: false, analytics: false, marketing: false })
            }
          >
            {t("reject")}
          </button>
          <button
            type="button"
            className="btn-primary cookie-banner__btn"
            onClick={() =>
              details
                ? persist({
                    preferences: draft.preferences,
                    analytics: draft.analytics,
                    marketing: draft.marketing,
                  })
                : persist({ preferences: true, analytics: true, marketing: true })
            }
          >
            {details ? t("save") : t("accept")}
          </button>
          <button
            type="button"
            className="cookie-banner__choose"
            onClick={() => setDetails((value) => !value)}
            aria-expanded={details}
          >
            {details ? t("hideChoices") : t("choose")}
          </button>
        </div>
      </div>
    </div>
  );
}

function CategoryRow({
  icon,
  title,
  description,
  checked,
  locked = false,
  lockLabel,
  onChange,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  checked: boolean;
  locked?: boolean;
  lockLabel?: string;
  onChange?: (next: boolean) => void;
}) {
  return (
    <li className="cookie-row">
      <div className="cookie-row__icon" aria-hidden>
        {icon}
      </div>
      <div className="cookie-row__copy">
        <p className="cookie-row__title">{title}</p>
        <p className="cookie-row__desc">{description}</p>
      </div>
      {locked ? (
        <span className="cookie-row__lock">{lockLabel}</span>
      ) : (
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          aria-label={title}
          className="cookie-switch"
          data-on={checked || undefined}
          onClick={() => onChange?.(!checked)}
        />
      )}
    </li>
  );
}
