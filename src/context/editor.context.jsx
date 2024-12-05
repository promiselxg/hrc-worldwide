/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useRef, useState } from "react";

// Create a context
const EditorContext = createContext();

// Provider Component
export const EditorProvider = ({ children }) => {
  const quillRef = useRef(null);
  const [editorContent, setEditorContent] = useState("");
  const [readOnly, setReadOnly] = useState(false);

  const toggleEditorReadOnly = () => {
    if (quillRef.current) {
      // Save the current content before toggling
      const currentContent = quillRef.current.root.innerHTML;
      setEditorContent(currentContent);

      // Toggle readOnly
      setReadOnly((prev) => !prev);

      // Ensure content persists after toggling
      setTimeout(() => {
        if (quillRef.current) {
          quillRef.current.clipboard.dangerouslyPasteHTML(editorContent);
        }
      }, 0);
    }
  };

  return (
    <EditorContext.Provider
      value={{
        quillRef,
        editorContent,
        setEditorContent,
        readOnly,
        toggleEditorReadOnly,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

// Hook to use the Editor Context
export const useEditorContext = () => {
  return useContext(EditorContext);
};
