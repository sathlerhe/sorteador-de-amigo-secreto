import { useState } from "react";
import useParticipantsList from "../state/hooks/useParticipantsList";
import { useSweepstakeResult } from "../state/hooks/useSweepstakeResult";

export default function Sweepstake() {
  const [thisTimeParticipant, setThisTimeParticipant] = useState("");
  const [secretFriend, setSecretFriend] = useState("");
  const [chronometer, setChronometer] = useState(5);
  const participants = useParticipantsList();
  const sweepstakeResult = useSweepstakeResult();

  const getSecretFriend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (sweepstakeResult.has(thisTimeParticipant)) {
      setSecretFriend(sweepstakeResult.get(thisTimeParticipant)!);

      const chronometer = setInterval(() => {
        setChronometer((prev) => prev - 1);
      }, 1000);

      setTimeout(() => {
        setSecretFriend("");
        setChronometer(5);
        clearInterval(chronometer);
      }, 5000);
    }
  };

  return (
    <section>
      <form onSubmit={getSecretFriend}>
        <select
          required
          placeholder="Selecione o seu nome"
          name="this-time-participant"
          id="this-time-participant"
          value={thisTimeParticipant}
          onChange={(e) => setThisTimeParticipant(e.target.value)}
        >
          <option value="">Selecione um participante</option>
          {participants.map((participant) => (
            <option value={participant} key={participant}>
              {participant}
            </option>
          ))}
        </select>

        <button>Sortear</button>
      </form>

      {secretFriend && (
        <>
          <p role="alert">{secretFriend}</p>
          <p role="timer">{chronometer}</p>
        </>
      )}
    </section>
  );
}
