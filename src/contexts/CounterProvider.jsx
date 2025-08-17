import React, { useState } from "react";
import { createContext } from "react";

export const CounterContext = createContext();

function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);
  function updateCounter() {
    setCounter(counter + 1);
    console.log("Clicked");
  }
  return (
    <CounterContext.Provider value={{ counter, updateCounter }}>
      {children}
    </CounterContext.Provider>
  );
}

export default CounterProvider;
