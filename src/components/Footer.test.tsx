import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Footer from "./Footer";
import useParticipantsList from "../state/hooks/useParticipantsList";

jest.mock("../state/hooks/useParticipantsList");

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe("When not exist enougth participants", () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([]);
  });

  it("Should not start the sweepstake", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });
});

describe("When exist enougth participants", () => {
  const participants = ["Ga", "bri", "e", "la"];
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
  });

  it("Should be able to start the sweepstake", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");

    expect(button).not.toBeDisabled();
  });

  it("The sweepstake have initianed", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(mockNavigate).toBeCalledTimes(1)
    expect(mockNavigate).toBeCalledWith('/sorteio')
  });
});
