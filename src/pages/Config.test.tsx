import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Config from "./Config";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe("Config.tsx behavior", () => {
  it("Should render correctly", () => {
    const { container } = render(
      <RecoilRoot>
        <Config />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});
