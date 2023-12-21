import React, { useEffect, useState } from "react";
import Btn from "./comp1";
import Editor from "./editor";
import axios from "axios";

function MainComp() {
  const [output, setOutput] = useState(null);
  const [editor, setEditor] = useState(null);
  const [val, setVal] = useState("javascript");

  // Textarea fucntionality

  const handleEditorChange = (editorInstance) => {
    setEditor(editorInstance);
  };

  // Button functionality

  //Sending post request to backend and then fetching its value

  const handleRunClick = async () => {
    if (!editor) {
      console.error("Editor not initialized");
      return;
    }

    const code = editor.getValue();

    if (val === "javascript") {
      console.log("javascript");
    }
    if (val === "java") {
      console.log("java");
    }

    if (val === "c") {
      console.log("c");
    }

    if (val === "c++") {
      console.log("c++");
    }
    if (val === "python") {
      console.log("python");
    }

    try {
      const response = await axios.post(`http://localhost:6969/run-${val}`, { code });
      // Ensure the response has a property named 'output'
      if (response.data && response.data.hasOwnProperty("consoleOutput")) {
        setOutput(response.data.consoleOutput);
      } else {
        console.error("Invalid response format:", response);
      }

      // console.log(response);
    } catch (error) {
      console.error("Error running code:", error);
    }
  };

  //Getting the value of the select option;

  const getVal = (event) => {
    setVal(event.target.value);
  };

  return (
    <>
      <Btn onhandleRunClick={handleRunClick} fn={getVal} />
      <Editor onEditorChange={handleEditorChange} output={output} fn={val} />
    </>
  );
}

export default MainComp;
