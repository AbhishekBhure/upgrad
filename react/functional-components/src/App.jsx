import { useState, useEffect, useContext, createContext } from "react";
import "./App.css";

const NameContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <NameContext.Provider value={name}>
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
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <ComponentA />
      </div>
    </NameContext.Provider>
  );
}

function ComponentA() {
  return (
    <>
      <div>
        <h1>Component A</h1>
        <ComponentB />
      </div>
    </>
  );
}
function ComponentB() {
  return (
    <>
      <div>
        <h1>Component B</h1>
        <ComponentC />
      </div>
    </>
  );
}
function ComponentC() {
  return (
    <>
      <div>
        <h1>Component C</h1>
        <ComponentD />
      </div>
    </>
  );
}
function ComponentD() {
  const name = useContext(NameContext);
  return (
    <>
      <div>
        <h1>{`Component D ${name}`}</h1>
      </div>
    </>
  );
}

export default App;
