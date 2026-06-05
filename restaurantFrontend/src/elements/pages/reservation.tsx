import React from "react";
import HeroImg from "../../assets/reservationHero.png";
import { ReservationForm } from "../objects/reservationForm";
function Reservation() {
  return (
    <div className="reservation">
      <div className="Reservation-Hero-Box">
        <img className="Reservation-Hero" src={HeroImg} alt="" />
        <div className="Reservation-Hero-shade"></div>
        <div className="Reservation-Title">Reservation</div>
        <div className="Reservation-subtitle">
          As the Restaurant tends to be quite busy,
          <br />
          <br />
          we recommend making a reservation in advance.
        </div>
        <div className="Reservation-Text-Title">
          Make your reservation in the form below.
        </div>
        <div className="Reservation-Form">
          <ReservationForm />
        </div>
      </div>
    </div>
  );
}
export default Reservation;
