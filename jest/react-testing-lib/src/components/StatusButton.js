import React from "react";

const StatusButton = ({ status, onDone }) => {
  return (
    <div
      data-testid="statusBtn"
      className={status ? "status-btn status-done" : "status-btn"}
      onClick={() => onDone(!status)}
    />
  );
};

StatusButton.defaultProps = {
  status: false
};

export default StatusButton;
