import { useNavigate } from "react-router-dom";
import useParticipantsList from "../state/hooks/useParticipantsList";
import { useRandomizer } from "../state/hooks/useRandomizer";

export default function Footer() {
  const participantsList = useParticipantsList();
  const navigate = useNavigate();

  const sweepstake = useRandomizer();

  const initSort = () => {
    sweepstake();
    navigate("/sorteio");
  };

  return (
    <footer>
      <button onClick={initSort} disabled={participantsList.length < 3}>
        Iniciar brincadeira
      </button>
    </footer>
  );
}
