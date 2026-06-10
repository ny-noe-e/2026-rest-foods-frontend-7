import React, { useEffect, useState } from "react";
import type { ReservationData } from "../../tools/reservation_Api";
import { Reservation_Api } from "../../tools/reservation_Api";
export function ReservationsDashBoard() {
  const [ReservationData, SetReservationData] = useState<ReservationData[]>();
  useEffect(() => {
    const getData = async () => {
      const data = await Reservation_Api.getReservations();
      console.log(data);
      SetReservationData(data.data);
    };
    console.log("helo?");
    getData();
  }, []);
  return (
    <div>
      {ReservationData?.map((data) => {
        return (
          <div>
            <h1>{data.customerName}</h1>
            <h1>{data.numberOfPersons}</h1>
            <h1>{data.phoneNumber}</h1>
            <h1>{data.reservedFrom}</h1>
            <h1>{data.reservedTo}</h1>
            <h1>{data.tableId}</h1>
          </div>
        );
      })}
    </div>
  );
}
