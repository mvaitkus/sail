import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SailSizes weight={82} />
      </header>
    </div>
  );
}

interface SailSizesProps {
  weight: number;
}

const SailSizes: React.FC<SailSizesProps> = props => {
  const sailSizeForWind = (windStrengthKnots: number) =>
    (1.34 * props.weight) / windStrengthKnots;

  const interestingWindRange = Array.from(new Array(27), (x, i) => i + 12);
  const sails = interestingWindRange.map(windKts => (
    <WindAndSailSize
      key={windKts}
      windStrengthKts={windKts}
      sailSize={sailSizeForWind(windKts)}
    />
  ));
  return <div>{sails}</div>;
};

interface WindAndSailSizeProps {
  windStrengthKts: number;
  sailSize: number;
}

const WindAndSailSize: React.FC<WindAndSailSizeProps> = props => {
  return (
    <div>
      {props.windStrengthKts} kts = {props.sailSize.toFixed(1)} m2
    </div>
  );
};

export default App;
