import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import ParticipantsList from "./ParticipantsList";
import useParticipantsList from "../state/hooks/useParticipantsList";

jest.mock('../state/hooks/useParticipantsList')

describe("Empty Participants List", () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([])
  })
  it("should be rended without elements", () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole("listitem");

    expect(items).toHaveLength(0);
  });
});

describe("Filled Participants List", () => {
  const participants = ["Gabri", "Ela"];
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants)
  })

  it("should be rendered with the same quantity of elements as the participants const above", () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole("listitem");

    expect(items).toHaveLength(participants.length);
  });
});
