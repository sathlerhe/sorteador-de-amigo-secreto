import { useRecoilValue } from "recoil"
import { participantsList } from "../atom"

export default function useParticipantsList() {
  return useRecoilValue(participantsList)
}