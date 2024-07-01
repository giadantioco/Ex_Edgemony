// import React from "react";
import "./randomBtn.css";
import { useState } from "react";

function RandomBtn() {
  const [randomNum, setRandomNum] = useState("null");

  const handleRandomBtn = () => {
    setRandomNum(Math.floor(Math.random() * 100));
  };

  return (
    <div>
      <button className="random-btn" id="randomBtn" onClick={handleRandomBtn}>
        {randomNum}
      </button>
    </div>
  );
}

export default RandomBtn;
