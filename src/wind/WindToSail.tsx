import React from "react";
import { useRecoilValue } from "recoil";
import { windSpeedUnitState, weightState } from "../common/state";
import { WindSpeedUnitSelector } from "../windunit";
import { sailSizeForWindKts, sailSizeForWindMps } from "../math";

const windRangeKts = Array.from(new Array(23), (_, i) => i + 12);
const windRangeMps = Array.from(new Array(23), (_, i) => i / 2 + 6);

export const WindToSail: React.FC = () => {
  const windSpeedUnit = useRecoilValue(windSpeedUnitState);
  const weight = useRecoilValue(weightState);

  return (
    <div>
      <WindSpeedUnitSelector />
      <WindRangeToSails
        weight={weight}
        unit={windSpeedUnit}
      />
    </div>
  );
};

interface WindRangeToSailsProps {
  weight: number;
  unit: string;
}

const WindRangeToSails: React.FC<WindRangeToSailsProps> = props => {
  if (props.unit === "kts") {
    const sails = windRangeKts.map(windSpeed => (
      <WindAndSailSize
        key={windSpeed}
        windSpeed={windSpeed.toFixed(0)}
        unit="kts"
        sailSize={sailSizeForWindKts(props.weight, windSpeed).toFixed(1)}
      />
    ));
    return <div>{sails}</div>;
  } else if (props.unit === "mps") {
    const sails = windRangeMps.map(windSpeed => (
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
  // TODO: add a proper class
  const style = {
    lineHeight: "200%"
  }
  return (
    <div style={style}>
      {props.windSpeed} {props.unit} = {props.sailSize} m2
    </div>
  );
};
