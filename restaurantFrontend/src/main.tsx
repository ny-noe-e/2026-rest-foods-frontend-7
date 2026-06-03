import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./elements/header";
import Menu from "./elements/menu";
import "./style.css";

function App() {
  const [page, setPage] = useState<"home" | "menu">("home");

  if (page === "menu") {
    return (
      <>
        <Header
          onHomeClick={() => setPage("home")}
          onMenuClick={() => setPage("menu")}
        />
        <Menu />
      </>
    );
  }

  return (
    <>
      <Header
        onHomeClick={() => setPage("home")}
        onMenuClick={() => setPage("menu")}
      />
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
