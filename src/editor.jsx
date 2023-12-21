import React, { useEffect, useRef } from "react";

const Editor = ({ onEditorChange, output, fn }) => {
  const textareaRef = useRef();
  const editorRef = useRef(null);
  let editor;

  useEffect(() => {
    if (!editorRef.current) {
      // Only create CodeMirror instance once
      editor = CodeMirror.fromTextArea(textareaRef.current, {
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
  }, [onEditorChange, fn]);

  useEffect(() => {
    if (fn === "javascript") {
      editorRef.current.setOption("mode", "javascript");
    }
    if (fn === "java") {
      editorRef.current.setOption("mode", "text/x-java");
    }

    if (fn === "c") {
      editorRef.current.setOption("mode", "text/x-csrc");
    }

    if (fn === "c++") {
      editorRef.current.setOption("mode", "text/x-c++src");
    }
    if (fn === "python") {
      editorRef.current.setOption("mode", "text/x-python");
    }
  }, [fn]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100vw",
      }}
    >
      <textarea ref={textareaRef} id="myTextarea" style={{ maxWidth: "70%" }} />
      {/* <div
        ref={termRef}
        id="terminal"
        style={{ width: "20%", height: "100vh" }}
      ></div> */}
      <div
        style={{
          width: "20%",
          // height: "100vh",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <p style={{ marginLeft: "50%" }}>{output}</p>
      </div>
    </div>
  );
};

export default Editor;