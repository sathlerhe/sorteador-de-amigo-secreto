import { useNavigate } from "react-router-dom";
import useParticipantsList from "../state/hooks/useParticipantsList";

export default function Footer() {
  const participantsList = useParticipantsList();
  const navigate = useNavigate()

  const initSort = () => {
    navigate('/sorteio')
  }

  return (
    <footer>
      <button onClick={initSort} disabled={participantsList.length < 3}>
        Iniciar brincadeira
      </button>
    </footer>
  );
}
