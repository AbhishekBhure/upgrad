import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import StatusButton from "../components/StatusButton";

afterEach(cleanup);

describe("Testing StatusButton component", () => {
  it("Returns true when the status prop is false", async () => {
    const onDoneFn = jest.fn();
    const { getByTestId } = render(
      <StatusButton status={false} onDone={onDoneFn} />
    );
    const statusBtn = getByTestId("statusBtn");
    fireEvent.click(statusBtn);
    expect(statusBtn.className).toBe("status-btn");
    expect(onDoneFn).toBeCalledWith(true);
  });

  it("Returns false when the status prop is true", async () => {
    const onDoneFn = jest.fn();
    const { getByTestId } = render(
      <StatusButton status={true} onDone={onDoneFn} />
    );
    const statusBtn = getByTestId("statusBtn");
    fireEvent.click(statusBtn);
    expect(statusBtn.className).toBe("status-btn status-done");
    expect(onDoneFn).toBeCalledWith(false);
  });
});
