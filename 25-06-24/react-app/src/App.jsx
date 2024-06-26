import { useState, Fragment } from "react"; // Fragment is a component tag, it can also be empty <></>
import "./App.css"; // this is possible because we're using Vite --> CSS inline in HTML
import { Header } from "./components/header";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <h1>CB10</h1>

        <div className="card">
          <button onClick={() => console.log("ciao")}>Click me!</button>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
