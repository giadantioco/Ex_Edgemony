// import React from "react";
import "./randomBackground.css";
import { useState } from "react";

function RandomBackground({ randomBkg, setRandomBkg }) {
  const handleRandomBtn = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const randomColor = `rgb(${r}, ${g}, ${b})`;
    setRandomBkg(randomColor);
    console.log(randomBkg);
  };

  return (
    <div className="random-btn">
      <button id="randomBtn" onClick={handleRandomBtn}>
        change color
      </button>
    </div>
  );
}

export default RandomBackground;
