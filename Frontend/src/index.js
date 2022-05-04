import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NavBar from "./component/common/UIElements/nav";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
