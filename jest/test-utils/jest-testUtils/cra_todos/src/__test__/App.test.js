import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "../App";

let div = null;
beforeEach(() => {
  div = document.createElement("div");
  document.body.append(div);
});

afterEach(() => {
  unmountComponentAtNode(div);
  div.remove();
  div = null;
});

jest.mock("../services", () => {
  return {
    getToDos: () =>
      Promise.resolve([
        {
          id: 1,
          title: "Book Concert Tickets",
          done: false,
        },
        {
          id: 2,
          title: "Write an article on react",
          done: true,
        },
      ]),
    addToDo: (obj) => Promise.resolve({ ...obj, id: 3 }),
  };
});

describe("Testing the App", () => {
  it("Renders a snapshot successfully!", async () => {
    await act(async () => {
      render(<App />, div);
    });
    expect(div.innerHTML).toMatchSnapshot();
  });
});
