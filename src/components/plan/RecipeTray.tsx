"use client";

import { useDraggable, useDroppable } from "@dnd-kit/core";
import { PlusIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { PlanRecipe } from "@/lib/plan/recipe";
import { cn } from "@/lib/utils";

export const TRAY_DROP_ID = "drop-tray";

export function trayDragId(recipeId: string) {
  return `tray:${recipeId}`;
}

function TrayCard({
  recipe,
  onRemove,
}: {
  recipe: PlanRecipe;
  onRemove: () => void;
}) {
  const t = useTranslations("plan");
  const draggable = useDraggable({
    id: trayDragId(recipe.id),
    data: { kind: "tray", recipe },
  });

  return (
    <article
      ref={draggable.setNodeRef}
      className={cn("meal-tray__card", draggable.isDragging && "is-dragging")}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <span className="meal-tray__photo">
        <Image src={recipe.image} alt="" fill sizes="72px" className="object-cover" />
      </span>
      <span className="meal-tray__title">{recipe.title}</span>
      <button
        type="button"
        className="meal-tray__remove"
        onClick={(event) => {
          event.stopPropagation();
          onRemove();
        }}
        aria-label={t("remove")}
      >
        <XIcon />
      </button>
    </article>
  );
}

export function RecipeTray({
  recipes,
  onAdd,
  onRemove,
}: {
  recipes: PlanRecipe[];
  onAdd: () => void;
  onRemove: (recipeId: string) => void;
}) {
  const t = useTranslations("plan");
  const droppable = useDroppable({ id: TRAY_DROP_ID });

  return (
    <section
      ref={droppable.setNodeRef}
      className={cn("meal-tray", droppable.isOver && "is-over")}
    >
      <div className="meal-tray__head">
        <div>
          <h2>{t("tray")}</h2>
          <p>{t("trayHelp")}</p>
        </div>
        <button type="button" className="btn-secondary meal-tray__plus" onClick={onAdd}>
          <PlusIcon />
          {t("addRecipe")}
        </button>
      </div>
      {recipes.length ? (
        <div className="meal-tray__row">
          {recipes.map((recipe) => (
            <TrayCard
              key={recipe.id}
              recipe={recipe}
              onRemove={() => onRemove(recipe.id)}
            />
          ))}
        </div>
      ) : (
        <p className="meal-tray__empty">{t("trayEmpty")}</p>
      )}
    </section>
  );
}
