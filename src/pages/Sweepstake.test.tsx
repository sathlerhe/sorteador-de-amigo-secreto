import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import useParticipantsList from "../state/hooks/useParticipantsList";
import Sweepstake from "./Sweepstake";
import { useSweepstakeResult } from "../state/hooks/useSweepstakeResult";

jest.mock("../state/hooks/useParticipantsList");
jest.mock("../state/hooks/useSweepstakeResult");

describe("In the Sweepstake page", () => {
  const participants = ["Ga", "bri", "ela"];

  
  const result = new Map([
    ["Ga", "bri"],
    ["bri", "ela"],
    ["ela", "Ga"],
  ]);
  
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
    (useSweepstakeResult as jest.Mock).mockReturnValue(result);
  });

  it("All participants shoul have their secret friend", () => {
    render(
      <RecoilRoot>
        <Sweepstake />
      </RecoilRoot>
    );

    const options = screen.queryAllByRole("option");
    expect(options).toHaveLength(participants.length + 1);
  });

  it("Should show the secret friend when requested", () => {
    render(
      <RecoilRoot>
        <Sweepstake />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText("Selecione o seu nome");

    fireEvent.change(select, {
      target: {
        value: participants[0],
      },
    });

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const secretFriend = screen.getByRole("alert");

    expect(secretFriend).toBeInTheDocument();
  });
});
