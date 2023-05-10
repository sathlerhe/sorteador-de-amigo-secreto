import { releaseSweepstake } from "./releaseSweepstake";

describe("Given a secret friend sweepstake", () => {
  it("Each participant should not draw your own name", () => {
    const participants = ["Gabriela", "Elen", "Benjamin", "De", "Paula"];

    const sweepstake = releaseSweepstake(participants)

    participants.forEach(participant => {
      const secretFriend = sweepstake.get(participant)

      expect(secretFriend).not.toEqual(participant)
    })
  });
});
