import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./elements/header";
import "./style.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
  </StrictMode>,
);
