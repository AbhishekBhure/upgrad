import React from "react";

const LikeButtons = ({ value, onIncrement, onDecrement, disable }) => {
  return (
    <div>
      <span>
        <button onClick={onIncrement} disabled={disable}>
          👍
        </button>
        {value}
      </span>
      <button onClick={onDecrement} disabled={disable}>
        {" "}
        👎{" "}
      </button>
    </div>
  );
};

export default LikeButtons;
