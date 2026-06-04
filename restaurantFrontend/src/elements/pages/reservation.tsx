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
          As the Restaurant tends to be quite busy,<br />
          <br />
          we recommend making a reservation in advance. 
        </div>
        <div className="Reservation-Text-Title">Make your reservation in the form below.</div>
        <div className="Reservation-Text">
          Form placeholder{" "}
        </div>
      </div>
      <div className="Reservation-Form"></div>
    </div>
  );
}
export default Reservation;
