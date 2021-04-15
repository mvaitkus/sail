import React from "react";
import { useRecoilState } from "recoil";
import { windSpeedUnitState } from "./state";

export const WindSpeedUnitSelector: React.FC = () => {
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
