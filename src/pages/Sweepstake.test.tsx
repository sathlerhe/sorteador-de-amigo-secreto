import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import useParticipantsList from "../state/hooks/useParticipantsList";
import Sweepstake from "./Sweepstake";

jest.mock("../state/hooks/useParticipantsList")

describe("In the Sweepstake page", () => {
  const participants = ["Ga", 'bri', 'ela']

  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants)
  })

  it("All participants shoul have their secret friend", () => {
    render(
      <RecoilRoot>
        <Sweepstake />
      </RecoilRoot>
    );

    const options = screen.queryAllByRole("option");
    expect(options).toHaveLength(participants.length);
  });
});
