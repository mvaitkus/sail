import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { atom, RecoilRoot, useRecoilState, useRecoilValue } from "recoil";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RecoilRoot>
          <SailSizes weight={82} />
        </RecoilRoot>
      </header>
    </div>
  );
}

const windSpeedUnitState = atom({
  key: "windSpeedUnit",
  default: "kts"
});

interface SailSizesProps {
  weight: number;
}

const SailSizes: React.FC<SailSizesProps> = props => {
  const windSpeedUnit = useRecoilValue(windSpeedUnitState)
  const sailSizeForWind = (windStrengthKnots: number) =>
    (1.34 * props.weight) / windStrengthKnots;

  const interestingWindRange = Array.from(new Array(27), (_, i) => i + 12);
  const sails = interestingWindRange.map(windKts => (
    <WindAndSailSize
      key={windKts}
      windStrengthKts={windKts}
      sailSize={sailSizeForWind(windKts)}
    />
  ));
  return (
    <div>
      <div>
        <WindSpeedUnitSelector />
      </div>
      <div>Selected unit: {windSpeedUnit}</div>
      {sails}
    </div>
  );
};

const WindSpeedUnitSelector: React.FC = () => {
  const [, setWindSpeedUnit] = useRecoilState(windSpeedUnitState);
  return (
    <div>
      <div>
        <button onClick={() => setWindSpeedUnit("kts")}>kts</button>
        <button onClick={() => setWindSpeedUnit("mps")}>m/s</button>
      </div>
    </div>
  );
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
