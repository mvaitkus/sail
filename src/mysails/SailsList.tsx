import { FC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { sailsState, weightState, windSpeedUnitState } from "../common/state";
import { windForSailKts, windForSailMps } from "../math";
import styles from "./SailList.module.css";

export const SailsList: FC = () => {
  const [sails, setSails] = useRecoilState(sailsState);
  const unit = useRecoilValue(windSpeedUnitState);
  const weigt = useRecoilValue(weightState);

  function removeSail(id: string) {
    const sailsWithoutRemoved = sails.filter(sail => sail.id !== id);
    setSails(sailsWithoutRemoved);
  }

  const sortedSails = [...sails].sort(function (a, b) {
    return b.size - a.size;
  });

  const windRangeForUnit = (size: number) => unit === "kts" ? windForSailKts(weigt, size) : windForSailMps(weigt, size);

  return (
    <div>
      {sortedSails.map(sail => {
        const windRange = windRangeForUnit(sail.size)
        return (
          <div key={sail.id}>
            <div className={styles.sailContainer}>
              <div>{sail.size.toFixed(1)}</div>
              <div>{sail.name}</div>
              <div>
                <button type="button" onClick={_ => removeSail(sail.id)}>
                  X
                </button>
              </div>
            </div>
            <div className={styles.rangeContainer}>
              <div className={styles.rangeItem}>low: {windRange.min.toFixed(1)}</div>
              <div className={styles.rangeItem}>ideal: {windRange.ideal.toFixed(1)}</div>
              <div className={styles.rangeItem}>top: {windRange.max.toFixed(1)}</div>
            </div>
          </div>
        )
      })}
    </div>
  );
};
