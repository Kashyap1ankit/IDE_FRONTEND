import React, { useEffect, useRef } from "react";

const Editor = ({ onEditorChange, output }) => {
  const textareaRef = useRef();
  const termRef = useRef();
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) {
      // Only create CodeMirror instance once
      const editor = CodeMirror.fromTextArea(textareaRef.current, {
        lineNumbers: true,
        mode: "javascript",
        theme: "midnight",
        autoCloseBrackets: true,
        autoCloseTag: true,
        showTrailingSpace: true,
      });

      editor.setSize("90%", "90vh");
      editorRef.current = editor;

      // Expose the CodeMirror instance to the parent component
      onEditorChange(editor);
    }
  }, [onEditorChange]);

  useEffect(() => {
    const term = new Terminal();
    term.open(termRef.current);
    term.write("hello");
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100vw",
      }}
    >
      <textarea ref={textareaRef} id="myTextarea" style={{ maxWidth: "70%" }} />
      <div
        ref={termRef}
        id="terminal"
        style={{ width: "20%", height: "100vh" }}
      >
        {output}
      </div>
    </div>
  );
};

export default Editor;
