import useParticipantsList from "./useParticipantsList";
import { useSetRecoilState } from "recoil";
import { sweepstakeResult } from "../atom";
import { releaseSweepstake } from "../helpers/releaseSweepstake";

export function useRandomizer() {
  const participants = useParticipantsList();
  
  const setResult = useSetRecoilState(sweepstakeResult)

  return () => {
    const result = releaseSweepstake(participants)

    setResult(result)
  };
}
