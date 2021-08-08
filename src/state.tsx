import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({ key: "config" });

export const windSpeedUnitState = atom({
  key: "windSpeedUnit",
  default: "kts",
  effects_UNSTABLE: [persistAtom]
});

export const weightState = atom({
  key: "weight",
  default: 82,
  effects_UNSTABLE: [persistAtom]
});

export const sailsState = atom<Sail[]>({
  key: "sails",
  default: [] as Sail[],
  effects_UNSTABLE: [persistAtom]
})

export interface Sail {
  id: string,
  name: string;
  size: number;
}