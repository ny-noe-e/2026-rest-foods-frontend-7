import React from "react";
import HeroImg from "../../assets/reservationHero.png";

function Reservation() {
  return (
    <div className="reservation">
      <div className="Reservation-Hero-Box">
        <img className="Reservation-Hero" src={HeroImg} alt="" />
        <div className="Reservation-Hero-shade"></div>
        <div className="Resevation-Hero-cover"></div>
        <div className="Reservation-Title">Reservation</div>
        <div className="Reservation-subtitle">
          for evryone that hates having no table...
          <br />
          <br />
          this wil be the best solution.
        </div>
        <div className="Reservation-Text-Title">How To reservate</div>
        <div className="Reservation-Text">
          just fill out the form and enjoy delicious food{" "}
        </div>
      </div>
      <div className="Reservation-Form"></div>
    </div>
  );
}
export default Reservation;
