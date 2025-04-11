// import react from "react";
// // import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { HashRouter } from "react-router-dom";
// import "./index.css";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <HashRouter>
//     <App />
//   </HashRouter>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
