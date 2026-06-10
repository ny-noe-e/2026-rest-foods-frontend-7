import { useState, type ChangeEvent, type FormEvent } from "react";
import type { ReservationData } from "../../tools/reservation_Api";
import { Reservation_Api } from "../../tools/reservation_Api";
import React from "react";
import { Verify_Reservation } from "../../tools/ReservationVerify";
export function ReservationForm() {
  const [formData, setFormData] = useState<ReservationData>({
    numberOfPersons: "2",
    phoneNumber: "+41637323222",
    reservedFrom: "2026-06-15T18:30:00",
    reservedTo: "2026-06-15T20:30:00",
    tableId: "T-03",
    customerName: "Michi",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (await Verify_Reservation(formData)) {
      Reservation_Api.postReservation(formData);
      console.log("Submitted Reservation Data:", formData);
    } else {
      console.log("Failed Reservation");
    }
  };

  const getTableStyle = (tableNum: string) => {
    return formData.tableId === tableNum ? { backgroundColor: "#c9a45c" } : {};
  };
  return (
    <div className="Reservation-Form-Card">
      <form onSubmit={handleSubmit} className="Reservation-form-grid">
        <div className="Reservation-form-field">
          <label htmlFor="customerName" className="reservation_label">
            Customer Name
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

        <div className="Reservation-form-field">
          <label htmlFor="phoneNumber" className="reservation_label">
            Phone Number
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

        <div className="Reservation-form-field">
          <label htmlFor="numberOfPersons" className="reservation_label">
            Guests
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

        <div className="Reservation-form-field">
          <label htmlFor="reservedFrom" className="reservation_label">
            From
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

        <div className="Reservation-form-field">
          <label htmlFor="reservedTo" className="reservation_label">
            To
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

        <div className="Reservation-form-field">
          <label htmlFor="tableId" className="reservation_label">
            Table
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

        <div className="Reservation-table-panel">
          <div>
            <p className="Reservation-panel-title">Table preview</p>
            <p className="Reservation-panel-text">
              Selected table is highlighted.
            </p>
          </div>
          <div className="Reservation-table-map">
            <div className="Reservation_Table" style={getTableStyle("T-01")}>
              T-01
            </div>
            <div className="Reservation_Table" style={getTableStyle("T-02")}>
              T-02
            </div>
            <div className="Reservation_Table" style={getTableStyle("T-03")}>
              T-03
            </div>
            <div className="Reservation_Table" style={getTableStyle("T-04")}>
              T-04
            </div>
          </div>
        </div>

        <button type="submit" className="Reservation-submit">
          Submit Reservation
        </button>
      </form>
    </div>
  );
}
