import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import RandomBackground from "./components/RandomBackground/RandomBackground";

function App() {
  const [randomBkg, setRandomBkg] = useState("#fa2929;");
  return (
    <>
      <div className="container" style={{ backgroundColor: randomBkg }}>
        <RandomBackground randomBkg={randomBkg} setRandomBkg={setRandomBkg} />
        <br />
        <Counter />
      </div>
    </>
  );
}

export default App;
