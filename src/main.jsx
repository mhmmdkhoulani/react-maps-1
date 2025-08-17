import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import ComponentA from "./components/dashboard/ComponentA";
import CounterProvider from "./contexts/CounterProvider.jsx";
import ThemeProivder from "./contexts/ThemeProivder.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <ThemeProivder>
      <CounterProvider>
        <ComponentA />
      </CounterProvider>
    </ThemeProivder>
  </StrictMode>
);
