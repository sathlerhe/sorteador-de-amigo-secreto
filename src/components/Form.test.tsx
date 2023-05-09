import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Form from "./Form";
import { RecoilRoot } from "recoil";
import { act } from "react-dom/test-utils";

describe("Form.tsx behavior", () => {
  test("When input is empty, cant add more participants", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    // Encontrar o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    // Encontrar o botão
    const button = screen.getByRole("button");
    // Garantir que o input esteja no documento
    expect(input).toBeInTheDocument();
    // Garantir que o botão esteja desabilitado
    expect(button).toBeDisabled();
  });

  test("Add participant if input is filled", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");
    fireEvent.change(input, {
      target: {
        value: "Gabriela",
      },
    });
    fireEvent.click(button);
    expect(input).toHaveFocus();
    expect(input).toHaveValue("");
  });

  test("Shoud not permit add two participants with the same name", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");
    fireEvent.change(input, {
      target: {
        value: "Gabriela",
      },
    });
    fireEvent.click(button);

    fireEvent.change(input, {
      target: {
        value: "Gabriela",
      },
    });
    fireEvent.click(button);

    const errorMessage = screen.getByRole("alert");
    expect(errorMessage.textContent).toBe(
      "Nomes duplicados não são permitidos."
    );
  });

  test("Error message should desapear after timers", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");
    fireEvent.change(input, {
      target: {
        value: "Gabriela",
      },
    });
    fireEvent.click(button);

    fireEvent.change(input, {
      target: {
        value: "Gabriela",
      },
    });
    fireEvent.click(button);

    let errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeNull();
  });
});
