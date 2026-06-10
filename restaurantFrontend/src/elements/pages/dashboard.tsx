import React from "react";
import { Login } from "../objects/login";
import { ReservationsDashBoard } from "../objects/dashboardReservations";
export function Dashboard() {
  return (
    <div>
      <Login />
      <ReservationsDashBoard />
    </div>
  );
}
