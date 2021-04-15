import React from "react";
import { useRecoilValue } from "recoil";
import { windSpeedUnitState, weightState } from "./state";
import { WindSpeedUnitSelector } from "./WindSpeedUnitSelector";

const windRangeKts = Array.from(new Array(27), (_, i) => i + 12);
const windRangeMps = Array.from(new Array(27), (_, i) => i / 2 + 6);

const sailSizeForWindKts = (weight: number, windStrengthKnots: number) =>
  (1.34 * weight) / windStrengthKnots;

const sailSizeForWindMps = (weight: number, windStrengthMps: number) =>
  (0.6893 * weight) / windStrengthMps;

export const WindToSail: React.FC = () => {
  const windSpeedUnit = useRecoilValue(windSpeedUnitState);
  const weight = useRecoilValue(weightState);

  return (
    <div>
      <WindSpeedUnitSelector />
      <WindRangeToSails
        windRange={windSpeedUnit === "kts" ? windRangeKts : windRangeMps}
        weight={weight}
        unit={windSpeedUnit}
      />
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
        unit="m/s"
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
