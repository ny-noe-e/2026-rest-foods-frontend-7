import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./elements/header";
import "./style.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Menu from "./elements/menu";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Menu />}></Route>
        <Route path="/menu"></Route>
        <Route path="/reservation"></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
