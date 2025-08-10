import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function incerment() {
    setCounter(counter + 1);
  }
  function decerment() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={incerment}>Incerment</button>
      <button onClick={decerment}>Decerment</button>
    </div>
  );
}

export default Counter;
