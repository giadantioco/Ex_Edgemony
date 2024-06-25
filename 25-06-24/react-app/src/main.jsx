import React from "react"; // line 13 package.json
import ReactDOM from "react-dom/client"; // line 14 package.json
import App from "./App.jsx"; // line 6 App.jsx
import "./index.css";

const element = document.getElementById("root");
ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// createRoot creates react application on selected element
