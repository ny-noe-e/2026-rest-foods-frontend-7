import React from "react";
import HeroImg from "../../assets/reservationHero.png";
import { ReservationForm } from "../objects/reservationForm";
function Reservation() {
  document.title = "Rest Foods Reservation";
  return (
    <div className="reservation">
      <div className="Reservation-Hero-Box">
        <img className="Reservation-Hero" src={HeroImg} alt="" />
        <div className="Reservation-Hero-shade"></div>
        <div className="Reservation-Hero-Content">
          <div className="Reservation-Title">Reservation</div>
          <div className="Reservation-subtitle">
            As the Restaurant tends to be quite busy, we recommend making a
            reservation in advance.
          </div>
        </div>
      </div>
      <section className="Reservation-Form-Section">
        <div className="Reservation-Text-Title">Make your reservation</div>
        <p className="Reservation-Text">
          Choose your table, time, and party size. We will prepare the room for
          your arrival.
        </p>
        <div className="Reservation-Form">
          <ReservationForm />
        </div>
      </section>
    </div>
  );
}
export default Reservation;
