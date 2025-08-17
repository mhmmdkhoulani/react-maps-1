import React, { useContext, useEffect, useRef } from "react";
import { CounterContext } from "../../contexts/CounterProvider";

function ComponentB() {
  const { updateCounter } = useContext(CounterContext);
  const counterRef = useRef(0);

  console.log(counterRef.current);
  counterRef.current += 1;
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.value = "Cars";
  });

  return (
    <div>
      <button onClick={updateCounter}>Add</button>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default ComponentB;
