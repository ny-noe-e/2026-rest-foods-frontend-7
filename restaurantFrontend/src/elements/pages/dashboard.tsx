import React from "react";
import { Login } from "../objects/login";
import { ReservationsDashBoard } from "../objects/dashboardReservations";
export function Dashboard() {
  document.title = "Rest Foods Dashboard";
  return (
    <div>
      <Login />
      <ReservationsDashBoard />
    </div>
  );
}
