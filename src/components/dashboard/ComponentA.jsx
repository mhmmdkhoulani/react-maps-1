import React, { useContext, useState } from "react";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import { ThemeContext } from "../../contexts/ThemeProivder";
import "../../style.css";

function ComponentA() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <ComponentB />
      <ComponentC />
      <button onClick={changeTheme}>Change theme</button>
    </div>
  );
}

export default ComponentA;
