import React from "react";
import { wait, render, fireEvent, cleanup } from "@testing-library/react";

jest.mock("../services", () => {
  return {
    getToDos: () =>
      Promise.resolve([
        {
          title: "Book concert tickets",
          done: false,
          id: 1
        },
        {
          title: "Buy a new iPhone",
          done: true,
          id: 2
        },
        {
          title: "Write an article on React",
          done: true,
          id: 3
        }
      ]),
    addTodo: obj => Promise.resolve({ ...obj, id: 4 })
  };
});

import App from "../App";

afterEach(cleanup);

describe("Testing the App", () => {
  it("Renders successfully", async () => {
    const { asFragment, getByPlaceholderText } = render(<App />);
    // Render a basic snapshot
    await wait(() => expect(asFragment()).toMatchSnapshot());

    // Add a task and take a snapshot
    const taskInput = getByPlaceholderText(/Add a task/i);
    fireEvent.change(taskInput, {
      target: { value: "This is a brand new task" }
    });
    fireEvent.keyUp(taskInput, { key: "Enter", keyCode: 13 });
    await wait(() => expect(asFragment()).toMatchSnapshot());
  });
});
