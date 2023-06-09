import React from "react";
import Card from "./Card/Card";
import ContainedButton from "./Button/ContainedButton";

import "./App.css";

const App = () => {
  return (
    <>
      <div className="m-8">
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
      </div>
      <div className="m-8">
        <div className="p-2">
          <Card title="milk">
            <div className="flex justify-between items-center">
              <ContainedButton color="error">-</ContainedButton>
              <p className="text-center font-bold px-4">0</p>
              <ContainedButton color="success">+</ContainedButton>
            </div>
          </Card>
        </div>
        <div className="p-2">
          <Card title="City Lights in New York" size="small">
            Test
          </Card>
        </div>
        <div className="p-2">
          <Card title="City Lights in New York" size="medium">
            Test
          </Card>
        </div>
        <div className="p-2">
          <Card title="City Lights in New York" size="large">
            Test
          </Card>
        </div>
      </div>
    </>
  );
};

export default App;
