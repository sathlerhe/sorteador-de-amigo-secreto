import { useRecoilValue } from "recoil";
import { sweepstakeResult } from "../atom";

export function useSweepstakeResult() {
  return useRecoilValue(sweepstakeResult);
}
