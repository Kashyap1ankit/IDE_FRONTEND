import React, { useState } from "react";
import axios from "axios";

function Btn({ editor }) {
  const [output, setOutput] = useState(null);

  const handleRunClick = async () => {
    if (!editor) {
      console.error("Editor not initialized");
      return;
    }

    const code = editor.getValue();
    try {
      const response = await axios.post("http://localhost:6969/run", { code });
      setOutput(response.data.output);
    } catch (error) {
      console.error("Error running code:", error);
    }
  };

  return (
    <div className="btn-div">
      <button onClick={handleRunClick}>
        <img src="../public/next.png" alt="" />
        <span>Run</span>
      </button>
      {output && <div>Output: {output}</div>}
    </div>
  );
}

export default Btn;
