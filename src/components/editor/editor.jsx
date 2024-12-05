/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { forwardRef, useEffect, useLayoutEffect, useRef } from "react";
import { Quill } from "react-quill";

// Editor is an uncontrolled React component
const Editor = forwardRef(
  (
    { readOnly, defaultValue, onTextChange, onSelectionChange, ...clasName },
    ref
  ) => {
    const containerRef = useRef(null);
    const defaultValueRef = useRef(defaultValue);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);

    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange;
      onSelectionChangeRef.current = onSelectionChange;
    });

    useEffect(() => {
      ref.current?.enable(!readOnly);
    }, [ref, readOnly]);

    useEffect(() => {
      const container = containerRef.current;
      const editorContainer = container.appendChild(
        container.ownerDocument.createElement("div")
      );
      const quill = new Quill(editorContainer, {
        theme: "snow",
        readOnly,
      });

      ref.current = quill;

      if (typeof defaultValueRef.current === "string") {
        quill.clipboard.dangerouslyPasteHTML(defaultValueRef.current);
      } else if (defaultValueRef.current) {
        quill.setContents(defaultValueRef.current);
      }

      quill.on(Quill.events.TEXT_CHANGE, (...args) => {
        onTextChangeRef.current?.(...args);
      });

      quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
        onSelectionChangeRef.current?.(...args);
      });

      return () => {
        ref.current = null;
        container.innerHTML = "";
      };
    }, [ref, readOnly]);

    return <div ref={containerRef} {...clasName}></div>;
  }
);

Editor.displayName = "Editor";

export default Editor;
