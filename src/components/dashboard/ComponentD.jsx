import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { CounterContext } from "../../contexts/CounterProvider";

function ComponentD() {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>Component D {counter}</h1>

      <ComponentF />
    </div>
  );
}

export default ComponentD;
