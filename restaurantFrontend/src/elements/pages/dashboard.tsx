import React from "react";
import { Login } from "../objects/login";
import { ReservationsDashBoard } from "../objects/dashboardReservations";

export function Dashboard() {
  document.title = "Rest Foods Dashboard";
  return (
    <main className="dashboard-page">
      <Login />
      <div className="dashboard-shell">
        <div className="dashboard-toolbar" aria-label="Dashboard actions">
          <p className="dashboard-toolbar__label">Staff dashboard</p>
          <button
            type="button"
            className="dashboard-action dashboard-action--secondary"
            onClick={() => {
              localStorage.removeItem("JWT");
              localStorage.removeItem("login");
              window.location.href = "/";
            }}
          >
            Sign out
          </button>
        </div>
      </div>
      <ReservationsDashBoard />
    </main>
  );
}
