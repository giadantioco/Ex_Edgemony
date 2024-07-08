import React from "react";
import { useState } from "react";
import "./Counter.css";
import bunnyImage from "../../assets/rabbit.svg";
import carrotImage from "../../assets/carrot.svg";

function Counter() {
  const [carrots, setCarrots] = useState([]);

  const addCarrot = () => {
    console.log("add carrot clicked");
    setCarrots([...carrots, { id: carrots.length + 1 }]);
  };

  const removeCarrot = () => {
    console.log("remove carrot clicked");
    setCarrots([...carrots.slice(0, carrots.length - 1)]);
  };

  return (
    <div className="counter">
      <div className="btns">
        <button id="add" onClick={addCarrot}>
          Add Carrot
        </button>
        <button id="sub" disabled={carrots.length === 0} onClick={removeCarrot}>
          Remove Carrot
        </button>
      </div>
      <img src={bunnyImage} alt="bunny icon" />
      <div className="carrot-container">
        {carrots.map((carrot, index) => {
          console.log(carrot);
          return <img key={index} src={carrotImage} alt={`carrot ${index}`} />;
        })}
      </div>
    </div>
  );
}
export default Counter;
