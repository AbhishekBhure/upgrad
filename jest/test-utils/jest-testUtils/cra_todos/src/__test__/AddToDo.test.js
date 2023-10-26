import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import AddToDo from "../components/AddToDo";
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

describe("Testing AddToDo Component", () => {
  it("Returns the contents of the input filed using the onADD prop", async () => {
    let onAddfn = jest.fn();
    await act(async () => {
      render(<AddToDo onAdd={onAddfn} />, div);
    });

    const inputFld = document.querySelector("input");

    await act(async () => {
      //Type in a value and press enter
      await Simulate.change(inputFld, {
        target: { value: "This is a test task" },
      });

      await Simulate.keyUp(inputFld, { key: "Enter", keyCode: 13 });
    });

    expect(onAddfn).toBeCalledWith({
      title: "This is a test task",
      done: false,
    });
  });
});
