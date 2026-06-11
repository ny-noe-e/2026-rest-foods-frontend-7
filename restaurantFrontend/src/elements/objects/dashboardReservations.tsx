import React, { useEffect, useState } from "react";
import type { ReservationData } from "../../tools/reservation_Api";
import { Reservation_Api } from "../../tools/reservation_Api";

const formatDateTime = (value: string) => {
  if (!value) {
    return "-";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
};

export function ReservationsDashBoard() {
  const [reservationData, setReservationData] = useState<ReservationData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [reloade, triggerRelode] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await Reservation_Api.getReservations();
        setReservationData(data.data);
      } catch {
        setErrorMessage("Reservations could not be loaded.");
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [reloade]);

  return (
    <section
      className="dashboard-reservations"
      aria-labelledby="reservations-title"
    >
      <div className="dashboard-reservations__header">
        <div>
          <p className="dashboard-reservations__eyebrow">Reservations</p>
          <h1 id="reservations-title">Existing reservations</h1>
        </div>
        <button
          onClick={() => {
            triggerRelode("relode");
          }}
        >
          Relode
        </button>
        <span className="dashboard-reservations__count">
          {reservationData.length} total
        </span>
      </div>

      {isLoading && (
        <p className="dashboard-reservations__status">
          Loading reservations...
        </p>
      )}

      {!isLoading && errorMessage && (
        <p className="dashboard-reservations__status dashboard-reservations__status--error">
          {errorMessage}
        </p>
      )}

      {!isLoading && !errorMessage && reservationData.length === 0 && (
        <p className="dashboard-reservations__status">No reservations found.</p>
      )}

      {!isLoading && !errorMessage && reservationData.length > 0 && (
        <div className="dashboard-reservations__table-wrap">
          <table className="dashboard-reservations__table">
            <thead>
              <tr>
                <th scope="col">Guest</th>
                <th scope="col">People</th>
                <th scope="col">Phone</th>
                <th scope="col">Reserved from</th>
                <th scope="col">Reserved to</th>
                <th scope="col">Table</th>
              </tr>
            </thead>
            <tbody>
              {reservationData.map((data, index) => (
                <tr
                  key={`${data.customerName}-${data.reservedFrom}-${data.tableId}-${index}`}
                >
                  <td
                    data-label="Guest"
                    className="dashboard-reservations__guest"
                  >
                    {data.customerName}
                  </td>
                  <td data-label="People">{data.numberOfPersons}</td>
                  <td data-label="Phone">
                    <a href={`tel:${data.phoneNumber}`}>{data.phoneNumber}</a>
                  </td>
                  <td data-label="Reserved from">
                    {formatDateTime(data.reservedFrom)}
                  </td>
                  <td data-label="Reserved to">
                    {formatDateTime(data.reservedTo)}
                  </td>
                  <td data-label="Table">
                    <span className="dashboard-reservations__table-id">
                      {data.tableId}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
