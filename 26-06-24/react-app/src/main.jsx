import React from "react"; // line 13 package.json
import ReactDOM from "react-dom/client"; // line 14 package.json --> React is a library created to handle JSX. By reactDOM jsx communicates with the DOM
import App from "./App.jsx"; // line 6 App.jsx
import "./style/reset.css";

// createRoot creates react application on selected element
const element = document.getElementById("root");
ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
