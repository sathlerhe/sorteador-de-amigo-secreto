import shuffle from "just-shuffle";

export function releaseSweepstake(participants: string[]) {
  const participantsTotal = participants.length;
  const randomParticipants: string[] = shuffle(participants);

  const result = new Map<string, string>();

  for (let i = 0; i < participantsTotal; i++) {
    const secretFriendIndex = i === participantsTotal - 1 ? 0 : i++;
    result.set(randomParticipants[i], randomParticipants[secretFriendIndex]);
  }

  return result;
}
