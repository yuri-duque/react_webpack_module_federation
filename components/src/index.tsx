import React from "react";
import ReactDOM from "react-dom/client";
import CartItem from "./CartItem";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CartItem quantity={1} add={() => {}} remove={() => {}} />
  </React.StrictMode>
);
