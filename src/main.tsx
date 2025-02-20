import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import App from "./App";

const rootELement = document.getElementById("root") as HTMLElement;

createRoot(rootELement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
