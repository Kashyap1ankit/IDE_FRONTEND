import React, { useState } from "react";
import Btn from "./comp1";
import Editor from "./editor";

function MainComp() {
  const [editor, setEditor] = useState(null);

  const handleEditorChange = (editorInstance) => {
    setEditor(editorInstance);
  };

  return (
    <>
      <Btn editor={editor} />
      <Editor onEditorChange={handleEditorChange} />
    </>
  );
} 

export default MainComp;
