import styles from "./WindSpeedUnitSelector.module.css";
import React from "react";
import { useRecoilState } from "recoil";
import { windSpeedUnitState } from "./state";

export const WindSpeedUnitSelector: React.FC = () => {
  const [currentUnit, setWindSpeedUnit] = useRecoilState(windSpeedUnitState);
  
  const isSelectedStyle = (unit: string) =>
    currentUnit === unit ? styles.active : styles.inactive;
  const ktsStyle = styles.ktsButton + " " + isSelectedStyle("kts");
  const mpsStyle = styles.mpsButton + " " + isSelectedStyle("mps");
  
  return (
    <div className={styles.container}>
      <button className={ktsStyle} onClick={() => setWindSpeedUnit("kts")}>
        kts
      </button>
      <button className={mpsStyle} onClick={() => setWindSpeedUnit("mps")}>
        m/s
      </button>
    </div>
  );
};
