import { useRef, useState } from "react";
import { useAddParticipant } from "../state/hooks/useAddParticipant";
import { useErrorMessage } from "../state/hooks/useErrorMessage";

export default function Form() {
  const [name, setName] = useState("");
  const inputName = useRef<HTMLInputElement>(null);
  const addInTheList = useAddParticipant()
  const errorMessage = useErrorMessage()

  const addParticipant = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    inputName.current?.focus()
    setName("");
    addInTheList(name)
  };

  return (
    <form onSubmit={addParticipant}>
      <input
        ref={inputName}
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Insira os nomes dos participantes"
      />
      <button disabled={!name}>Adicionar</button>
      {errorMessage && <p role="alert">{errorMessage}</p>}
    </form>
  );
}
