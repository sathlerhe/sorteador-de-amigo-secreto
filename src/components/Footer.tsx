// import { useNavigation } from "react-router-dom";
import useParticipantsList from "../state/hooks/useParticipantsList";

export default function Footer() {
  const participantsList = useParticipantsList();
  // const navigation = useNavigation()

  return (
    <footer>
      <button disabled={participantsList.length < 3}>
        Iniciar brincadeira
      </button>
    </footer>
  );
}
