"use client";

import React, { useEffect, useRef } from "react";
// import "jodit/esm/plugins/resizer/resizer";
import resizer from "jodit/esm/plugins/resizer/resizer";
import { Jodit } from "jodit";
import "./jodit.min.css";
import { Button } from "../ui/button";
import { placeholder } from "jodit/esm/plugins/placeholder/placeholder";

interface JoditEditorComponentProps {
  content: string;
}

const JoditEditorComponent: React.FC<JoditEditorComponentProps> = ({
  content,
}) => {
  console.log("content", content);
  const editor = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (!editor.current) return;

    const jodit = Jodit.make(editor.current, {
      uploader: {
        insertImageAsBase64URI: true,
      },
      toolbarAdaptive: false,
      askBeforePasteHTML: false,
    //   defaultMode: Jodit.MODE_WYSIWYG,
      spellcheck: true,
      height: 400,
      toolbar: true,
      useSearch: true,
      autofocus: true,
      showCharsCounter: true,
      showWordsCounter: true,
      showXPathInStatusbar: true,
      askBeforePasteFromWord: true,
      defaultActionOnPaste: "insert_clear_html",
      buttons: [
        "bold",
        "strikethrough",
        "underline",
        "italic",
        "|",
        "superscript",
        "subscript",
        "|",
        "ul",
        "ol",
        "|",
        "font",
        "fontsize",
        "brush",
        "paragraph",
        "|",
        "image",
        "table",
        "link",
        "|",
        "undo",
        "redo",
      ],
      enter: "P",
      defaultFontSize: "12pt",
      defaultFont: "Arial",
      locale: "pt_br",
    });

    jodit.value = content;

    return () => {
      jodit.destruct();
    };
  }, [content]);

  return (
    <>
      <textarea ref={editor}></textarea>
      <div className="flex items-center justify-content space-x-4 mt-4">
        <Button onClick={() => console.log(editor.current?.value)}>
          Salvar
        </Button>
        <Button onClick={() => console.log(editor.current?.value)}>
          Carregar o último conteúdo salvo
        </Button>
        <Button onClick={() => console.log(editor.current?.value)}>Novo</Button>
      </div>
    </>
  );
};

export default JoditEditorComponent;
