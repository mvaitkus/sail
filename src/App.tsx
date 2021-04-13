import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { atom, RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { recoilPersist } from "recoil-persist";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RecoilRoot>
          <WindToSail />
        </RecoilRoot>
      </header>
    </div>
  );
}

const { persistAtom } = recoilPersist({ key: "config" });

const windSpeedUnitState = atom({
  key: "windSpeedUnit",
  default: "kts",
  effects_UNSTABLE: [persistAtom]
});

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

const weightState = atom({
  key: "weight",
  default: 82,
  effects_UNSTABLE: [persistAtom]
});

const windRangeKts = Array.from(new Array(27), (_, i) => i + 12);
const windRangeMps = Array.from(new Array(27), (_, i) => i / 2 + 6);

const sailSizeForWindKts = (weight: number, windStrengthKnots: number) =>
  (1.34 * weight) / windStrengthKnots;

const sailSizeForWindMps = (weight: number, windStrengthMps: number) =>
  (0.6893 * weight) / windStrengthMps;

const WindToSail: React.FC = () => {
  const windSpeedUnit = useRecoilValue(windSpeedUnitState);
  const weight = useRecoilValue(weightState);

  const sails = (
    <WindRangeToSails
      windRange={windSpeedUnit === "kts" ? windRangeKts : windRangeMps}
      weight={weight}
      unit={windSpeedUnit}
    />
  );
  return (
    <div>
      <div>
        <WindSpeedUnitSelector />
      </div>
      {sails}
    </div>
  );
};

interface WindRangeToSailsProps {
  windRange: Array<number>;
  weight: number;
  unit: string;
}

const WindRangeToSails: React.FC<WindRangeToSailsProps> = props => {
  if (props.unit === "kts") {
    const sails = props.windRange.map(windSpeed => (
      <WindAndSailSize
        key={windSpeed}
        windSpeed={windSpeed.toFixed(0)}
        unit="kts"
        sailSize={sailSizeForWindKts(props.weight, windSpeed).toFixed(1)}
      />
    ));
    return <div>{sails}</div>;
  } else if (props.unit === "mps") {
    const sails = props.windRange.map(windSpeed => (
      <WindAndSailSize
        key={windSpeed}
        windSpeed={windSpeed.toFixed(1)}
        unit="m\s"
        sailSize={sailSizeForWindMps(props.weight, windSpeed).toFixed(1)}
      />
    ));
    return <div>{sails}</div>;
  } else {
    return <div>TBD</div>;
  }
};

interface WindAndSailSizeProps {
  windSpeed: string;
  sailSize: string;
  unit: string;
}

const WindAndSailSize: React.FC<WindAndSailSizeProps> = props => {
  return (
    <div>
      {props.windSpeed} {props.unit} = {props.sailSize} m2
    </div>
  );
};

export default App;
