import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import TodoContextProvider from "./context/TodoContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
