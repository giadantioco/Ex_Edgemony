// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import { Button } from "./components/button/button";
import "./index.css";
import { Keyboard } from "./components/keyboard/keyboard";
import { Display } from "./components/display/display";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Display></Display>
        <Keyboard></Keyboard>
      </div>
    </>
  );
}

export default App;
