import React, { useEffect, useRef } from "react";

const Editor = () => {
  const textareaRef = useRef();
  useEffect(() => {
    const editor = CodeMirror.fromTextArea(textareaRef.current, {
      lineNumbers: true,
      mode: "javascript",
      theme: "midnight",
      comment: true,
      autoCloseBrackets: true,
      autoCloseTag: true,
      showTrailingSpace: true,
      trailingspace: true, // Enable trailing space addon
    });

    editor.setSize("70%", "90vh");
  }, []);

  return (
    <div>
      <textarea ref={textareaRef} id="myTextarea" style={{ maxWidth: "70%" }} />
    </div>
  );
};

export default Editor;
