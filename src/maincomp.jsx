import React, { useState } from "react";
import Btn from "./comp1";
import Editor from "./editor";
import axios from "axios";

function MainComp() {
  // Textarea fucntionality

  const [editor, setEditor] = useState(null);

  const handleEditorChange = (editorInstance) => {
    setEditor(editorInstance);
  };

  // Button functionality

  const [output, setOutput] = useState(null);

  const handleRunClick = async () => {
    if (!editor) {
      console.error("Editor not initialized");
      return;
    }

    const code = editor.getValue();

    try {
      const response = await axios.post("http://localhost:6969/run", { code });
      // Ensure the response has a property named 'output'
      if (response.data && response.data.hasOwnProperty("data")) {
        setOutput(response.data.data);
      } else {
        console.error("Invalid response format:", response);
      }

      // console.log(response);
    } catch (error) {
      console.error("Error running code:", error);
    }
  };

  return (
    <>
      <Btn onhandleRunClick={handleRunClick} />
      <Editor onEditorChange={handleEditorChange} output={output} />
    </>
  );
}

export default MainComp;
