import React, { useContext } from "react";
import { CounterContext } from "../../contexts/CounterProvider.jsx";

function ComponentF() {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>Component F</h1>
      {counter}
    </div>
  );
}

export default ComponentF;
