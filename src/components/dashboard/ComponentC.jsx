import React, { useContext } from "react";
import ComponentD from "./ComponentD";
import { ThemeContext } from "../../contexts/ThemeProivder";

function ComponentC() {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <h1
        style={{
          color: theme == "dark" && "red",
        }}
      >
        Component C
      </h1>
      <ComponentD />
    </div>
  );
}

export default ComponentC;
