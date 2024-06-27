import { useState } from "react";
import { Button } from "./components/atoms/Button/Button";
import { Counter } from "./components/components/Counter/Counter";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="title">Javasctipt Project</h1>
      <div className="counter-container">
        <Counter />
      </div>
    </>
  );
}

export default App;
