import { useState } from "react";
// components imports
import { Button } from "./components/atoms/Button/Button";
import { Counter } from "./components/components/Counter/Counter";
// icon imports
import iconCss from "./assets/css.png";
import iconHtml from "./assets/html5.png";
import iconJs from "./assets/js.png";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="title">Javasctipt Project</h1>
      <div className="counter-container">
        <Counter />
      </div>
      <div className="img-container">
        <img src={iconCss} alt="css logo" style={{ width: "100px" }} />
        <img src={iconHtml} alt="html logo" style={{ width: "100px" }} />
        <img src={iconJs} alt="js logo" style={{ width: "100px" }} />
      </div>
    </>
  );
}

export default App;
