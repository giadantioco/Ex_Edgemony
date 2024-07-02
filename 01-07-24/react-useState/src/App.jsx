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
      </div>
    </>
  );
}

export default App;
