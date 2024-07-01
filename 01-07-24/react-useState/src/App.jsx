import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter/Counter";
import RandomBtn from "./components/RandomBtn/RandomBtn";

function App() {
  const handleClick = () => {
    console.log("cliccato");
  };
  return (
    <>
      <div className="container">
        <RandomBtn />
        <br />
        <Counter />
        <h1>CB10</h1>
        <button onClick={handleClick}>Ciao</button>
        <button
          onClick={function handleClick() {
            console.log("clicked");
          }}
        >
          CLick me!
        </button>
        <button
          onClick={() => {
            console.log("clicked");
          }}
        >
          CLick me2!
        </button>
      </div>
    </>
  );
}

export default App;
