import React, { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Header from "./elements/header";
import "./style.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./elements/pages/home";
import Reservation from "./elements/pages/reservation";
import Menu from "./elements/pages/menu";
import Footer from "./elements/footer";
import { Dashboard } from "./elements/pages/dashboard";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
