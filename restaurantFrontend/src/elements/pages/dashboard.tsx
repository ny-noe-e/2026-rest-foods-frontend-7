import React from "react";
import { Login } from "../objects/login";
import { ReservationsDashBoard } from "../objects/dashboardReservations";
export function Dashboard() {
  return (
    <main className="dashboard-page">
      <Login />
      <ReservationsDashBoard />
    </main>
  );
}
