import React, { useState } from "react";

import "./comp1.css";

function Btn({ onhandleRunClick }) {
  return (
    <div className="btn-div">
      <button onClick={onhandleRunClick}>
        <img src="../public/next.png" alt="" />
        <span>Run</span>
      </button>
    </div>
  );
}

export default Btn;
