import useParticipantsList from "../state/hooks/useParticipantsList";

export default function Sweepstake() {
  const participants = useParticipantsList();

  return (
    <section>
      <form>
        <select name="this-time-participant" id="this-time-participant">
          {participants.map((participant) => (
            <option key={participant}>{participant}</option>
          ))}
        </select>
      </form>
    </section>
  );
}
