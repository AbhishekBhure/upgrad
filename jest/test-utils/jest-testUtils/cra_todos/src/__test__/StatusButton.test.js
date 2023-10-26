import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import StatusButton from "../components/StatusButton";

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

describe("Testing StatusButton Component", () => {
  it("Returns true when the status prop is false", async () => {
    let onDonefn = jest.fn();
    await act(async () => {
      render(<StatusButton status={false} onDone={onDonefn} />, div);
    });

    const statusBtn = document.querySelector(".status-btn");

    await act(async () => {
      await Simulate.click(statusBtn);
    });

    expect(onDonefn).toBeCalledWith(true);
  });

  it("Returns false when the status prop is true", async () => {
    let onDonefn = jest.fn();
    await act(async () => {
      render(<StatusButton status={true} onDone={onDonefn} />, div);
    });

    const statusBtn = document.querySelector(".status-btn");

    await act(async () => {
      await Simulate.click(statusBtn);
    });

    expect(onDonefn).toBeCalledWith(false);
  });
});
