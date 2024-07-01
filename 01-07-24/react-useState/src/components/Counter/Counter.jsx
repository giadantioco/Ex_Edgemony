import React from "react";
import { useState } from "react";
import "./Counter.css";

function Counter() {
  // let counter = 0;

  const [counter, setCounter] = useState(0);

  const handleClick = (event) => {
    // setCounter(counter - 1);
    // console.log("clicked");
    const target = event.target.id;
    console.log(target);

    // if (target === "sub") {
    //   setCounter(counter - 1);
    // } else {
    //   setCounter(counter + 1);
    // }
    // return not necessary because we're calling setCounter, instead of returning a value from the handleClick function
    target === "sub" ? setCounter(counter - 1) : setCounter(counter + 1);
  };

  return (
    <div className="counter">
      <button
        disabled={counter === 0}
        id="sub"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        -
      </button>
      Counter: {counter}
      <button
        id="add"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
