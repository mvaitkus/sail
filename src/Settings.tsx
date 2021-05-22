import React from "react";
import { useRecoilState } from "recoil";
import styles from "./Settings.module.css";
import { weightState } from "./state";

export const Settings: React.FC = () => {
  const [weight, setWeight] = useRecoilState(weightState);
  const increment = () => setWeight(weight + 1);
  const decrement = () => setWeight(weight - 1);
  return (
    <div className={styles.container}>
      <div>Weight</div>
      <div className={styles.controls}>
        <button className={styles.minus} onClick={() => decrement()} />
        {weight}
        <button className={styles.plus} onClick={() => increment()} />
      </div>
    </div>
  );
};
