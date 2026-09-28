"use client";

import { useTranslations } from "next-intl";
import { isAiExampleImage } from "@/lib/media/ai-example";
import { cn } from "@/lib/utils";

/**
 * Visible disclosure for synthetic food stills (Art. 50 AI Act).
 * Sits on the image itself. Compact form is for thumbs too small for
 * the full phrase; the full phrase stays available to assistive tech.
 */
export function AiExampleBadge({
  src,
  compact = false,
  className,
}: {
  src: string;
  compact?: boolean;
  className?: string;
}) {
  const t = useTranslations("media");
  if (!isAiExampleImage(src)) return null;

  const full = t("aiExample");

  return (
    <span
      className={cn(
        "ai-example-badge",
        compact && "ai-example-badge--compact",
        className,
      )}
    >
      {compact ? (
        <>
          <span className="sr-only">{full}</span>
          <span aria-hidden="true">{t("aiExampleShort")}</span>
        </>
      ) : (
        full
      )}
    </span>
  );
}
