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
        <ContainedButton bold>enable</ContainedButton>
      </div>
      <div className="p-2">
        <ContainedButton bold disabled>
          disabled
        </ContainedButton>
      </div>
    </div>
    <div className="flex">
      <div className="p-2">
        <ContainedButton color="success" bold>
          enable
        </ContainedButton>
      </div>
      <div className="p-2">
        <ContainedButton color="success" bold disabled>
          disabled
        </ContainedButton>
      </div>
    </div>
    <div className="flex">
      <div className="p-2">
        <ContainedButton color="error" bold>
          enable
        </ContainedButton>
      </div>
      <div className="p-2">
        <ContainedButton color="error" bold disabled>
          disabled
        </ContainedButton>
      </div>
    </div>
  </React.StrictMode>
);
