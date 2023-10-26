import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import AddToDo from "../components/AddToDo";

afterEach(cleanup);

describe("Testing AddToDo.js component", () => {
  it("Returns the contents of the input field using the onAdd prop", async () => {
    const onAddFn = jest.fn();
    const { getByPlaceholderText } = render(<AddToDo onAdd={onAddFn} />);
    const taskInput = getByPlaceholderText(/Add a task/i);

    fireEvent.change(taskInput, {
      target: { value: "This is a brand new task" }
    });
    fireEvent.keyUp(taskInput, { key: "Enter", keyCode: 13 });

    expect(taskInput.value).toBe("");
    expect(onAddFn).toBeCalledWith({
      done: false,
      title: "This is a brand new task"
    });
  });
});
