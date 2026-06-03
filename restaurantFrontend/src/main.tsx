import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./elements/header";
import "./style.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./elements/home";
import Reservation from "./elements/pages/reservation";
import Menu from "./elements/pages/menu";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/reservation" element={<Reservation />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
