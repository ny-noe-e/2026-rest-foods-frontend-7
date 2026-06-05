import React, { useEffect } from "react";
import { useState } from "react";
import type { ReservationData } from "../../tools/reservation_Api";

export function ReservationForm() {
  const [curr, setcurr] = useState<string>();
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setcurr(event.target.value);
  };

  const [formData, setFormData] = useState<ReservationData>({
    numberOfPersons: "2",
    phoneNumber: "+41637323222",
    reservedFrom: "2026-06-15T18:30:00",
    reservedTo: "2026-06-15T20:30:00",
    tableId: "T-03",
    customerName: "Michi",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Reservation Data:", formData);
  };

  const getTableStyle = (tableNum: string) => {
    return formData.tableId === tableNum ? { backgroundColor: "#ff1313" } : {};
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div>
          <label htmlFor="customerName" className="reservation_label">
            Customer Name:
          </label>
          <input
            className="Reservation-field"
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phoneNumber" className="reservation_label">
            Phone Number:
          </label>
          <input
            className="Reservation-field"
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="numberOfPersons" className="reservation_label">
            Number of Persons:
          </label>
          <input
            className="Reservation-field"
            type="number"
            id="numberOfPersons"
            name="numberOfPersons"
            value={formData.numberOfPersons}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        <div>
          <label htmlFor="reservedFrom" className="reservation_label">
            Reserved From:
          </label>
          <input
            className="Reservation-field"
            type="datetime-local"
            id="reservedFrom"
            name="reservedFrom"
            value={formData.reservedFrom}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="reservedTo" className="reservation_label">
            Reserved To:
          </label>
          <input
            className="Reservation-field"
            type="datetime-local"
            id="reservedTo"
            name="reservedTo"
            value={formData.reservedTo}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="tableId" className="reservation_label">
            Select Table:
          </label>
          <select
            name="tableId"
            id="tableId"
            className="reservation_Form_Selector"
            value={formData.tableId}
            onChange={handleChange}
          >
            <option value="T-01">T-01</option>
            <option value="T-02">T-02</option>
            <option value="T-03">T-03</option>
            <option value="T-04">T-04</option>
          </select>
        </div>

        <button type="submit">Submit Reservation</button>
        <hr />
        <h3>Table Status Visualizer</h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <div className="Reservation_Table" style={getTableStyle("T-01")}>
            t_01
          </div>
          <div className="Reservation_Table" style={getTableStyle("T-02")}>
            t_02
          </div>
          <div className="Reservation_Table" style={getTableStyle("T-03")}>
            t_03
          </div>
          <div className="Reservation_Table" style={getTableStyle("T-04")}>
            t_04
          </div>
        </div>
      </form>
    </div>
  );
}
