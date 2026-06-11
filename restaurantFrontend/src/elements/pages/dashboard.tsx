import React, { use } from "react";
import { Login } from "../objects/login";
import { ReservationsDashBoard } from "../objects/dashboardReservations";
import { useNavigate } from "react-router-dom";
export function Dashboard() {
  document.title = "Rest Foods Dashboard";
  return (
    <main className="dashboard-page">
      <Login />
      <button
        onClick={() => {
          localStorage.removeItem("JWT");
          localStorage.removeItem("login");
          window.location.href = "/";
          console.log("goTohome");
        }}
      >
        sign out
      </button>
      <ReservationsDashBoard />
    </main>
  );
}
