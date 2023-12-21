import React, { useState } from "react";

import "./comp1.css";

function Btn({ onhandleRunClick, fn }) {
  return (
    <div className="btn-div">
      <select
        name="languages"
        id="lang"
        onChange={fn}
        style={{
          width: "10%",
          borderRadius: "6px",
          border: "none",
          outline: "none",
          fontSize: "15px",
        }}
      >
        <option value="javascript">Js</option>
        <option value="java">Java</option>
        <option value="c">C</option>
        <option value="c++">C++</option>
        <option value="python">Python</option>
      </select>

      {/* <button>Select</button> */}

      <button onClick={onhandleRunClick}>
        <img src="../public/next.png" alt="" />

        <span>Run</span>
      </button>
    </div>
  );
}

export default Btn;