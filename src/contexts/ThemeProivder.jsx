import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext("light");

function ThemeProivder({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("app-theme");
  });

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("app-theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProivder;
