import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };     
  return (
    <>
      <div>
        {/* <h1>HI</h1> */}
        <button onClick={decrement}> - </button>
        <p>{count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
