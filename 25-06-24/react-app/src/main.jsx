import React from "react"; // line 13 package.json
import ReactDOM from "react-dom/client"; // line 14 package.json --> React is a library created to handle JSX. By reactDOM jsx communicates with the DOM
import App from "./App.jsx"; // line 6 App.jsx
import "./index.css"; // CSS import is possible thanks to Vite (inline CSS)

// createRoot creates react application on selected element
const element = document.getElementById("root");
ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
