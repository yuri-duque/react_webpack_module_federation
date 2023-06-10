import React from "react";
import ReactDOM from "react-dom/client";
import ContainedButton from "./Button/ContainedButton";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="flex">
      <div className="p-2">
        <ContainedButton>enable</ContainedButton>
      </div>
      <div className="p-2">
        <ContainedButton disabled>disabled</ContainedButton>
      </div>
    </div>
    <div className="flex">
      <div className="p-2">
        <ContainedButton color="success">enable</ContainedButton>
      </div>
      <div className="p-2">
        <ContainedButton color="success" disabled>
          disabled
        </ContainedButton>
      </div>
    </div>
    <div className="flex">
      <div className="p-2">
        <ContainedButton color="error">enable</ContainedButton>
      </div>
      <div className="p-2">
        <ContainedButton color="error" disabled>
          disabled
        </ContainedButton>
      </div>
    </div>
  </React.StrictMode>
);
