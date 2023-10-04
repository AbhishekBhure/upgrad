import React, { useState } from "react";

const App = () => {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [marker, setMarker] = useState([]);

  const onMouseMoveHandler = (e) => {
    setXPos(e.nativeEvent.offsetX);
    setYPos(e.nativeEvent.offsetY);
  };

  const onClickHandler = (e) => {
    setMarker([
      ...marker,
      {
        id: new Date().getTime(),
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
      },
    ]);
  };
  return (
    <div className="container">
      <div className="stats">
        {xPos}, {yPos}
        <button id="clear-btn" onClick={() => setMarker([])}>
          Clear
        </button>
      </div>
      <div
        className="canvas"
        onMouseMove={onMouseMoveHandler}
        onClick={onClickHandler}
      >
        {marker.map((m) => (
          <div key={m.id} className="dot" style={{ left: m.x, top: m.y }} />
        ))}
      </div>
    </div>
  );
};

export default App;
