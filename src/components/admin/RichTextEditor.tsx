"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect } from "react";

export function RichTextEditor({
  name,
  initialHtml,
  placeholder,
}: {
  name: string;
  initialHtml: string;
  placeholder?: string;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: placeholder ?? "Inhalt…",
      }),
    ],
    content: initialHtml || "<p></p>",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "min-h-40 rounded-[var(--radius)] border border-border bg-surface px-3 py-3 focus:outline-none prose prose-sm max-w-none",
      },
    },
  });

  useEffect(() => {
    if (!editor) return;
    const input = document.getElementById(name) as HTMLInputElement | null;
    if (!input) return;
    const sync = () => {
      input.value = editor.getHTML();
    };
    editor.on("update", sync);
    sync();
    return () => {
      editor.off("update", sync);
    };
  }, [editor, name]);

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-1">
        <ToolbarButton
          label="B"
          active={editor?.isActive("bold")}
          onClick={() => editor?.chain().focus().toggleBold().run()}
        />
        <ToolbarButton
          label="I"
          active={editor?.isActive("italic")}
          onClick={() => editor?.chain().focus().toggleItalic().run()}
        />
        <ToolbarButton
          label="H2"
          active={editor?.isActive("heading", { level: 2 })}
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 2 }).run()
          }
        />
        <ToolbarButton
          label="•"
          active={editor?.isActive("bulletList")}
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
        />
      </div>
      <EditorContent editor={editor} />
      <input type="hidden" id={name} name={name} defaultValue={initialHtml} />
    </div>
  );
}

function ToolbarButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-9 rounded-lg border px-3 text-sm ${
        active
          ? "border-foreground bg-foreground text-[var(--bg)]"
          : "border-border"
      }`}
    >
      {label}
    </button>
  );
}
