import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./elements/header";
import Menu from "./elements/menu";
import "./style.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

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
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home"></Route>
        <Route path="/menu"></Route>
        <Route path="/reservation"></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
