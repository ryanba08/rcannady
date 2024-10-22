import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import PP from "./password";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PP />
  </React.StrictMode>
);
