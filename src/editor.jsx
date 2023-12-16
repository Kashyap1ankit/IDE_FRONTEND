
import React, { useEffect, useRef } from 'react';

const Editor = ({ onEditorChange }) => {
  const textareaRef = useRef();
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) {
      // Only create CodeMirror instance once
      const editor = CodeMirror.fromTextArea(textareaRef.current, {
        lineNumbers: true,
        mode: 'javascript',
        theme: 'midnight',
        autoCloseBrackets: true,
        autoCloseTag: true,
        showTrailingSpace: true,
      });

      editor.setSize('70%', '90vh');
      editorRef.current = editor;

      // Expose the CodeMirror instance to the parent component
      onEditorChange(editor);
    }
  }, [onEditorChange]);

  return (
    <div>
      <textarea ref={textareaRef} id="myTextarea" style={{ maxWidth: '70%' }} />
    </div>
  );
};

export default Editor;
