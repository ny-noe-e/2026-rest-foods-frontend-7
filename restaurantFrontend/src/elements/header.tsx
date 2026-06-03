import React from "react";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  onHomeClick: () => void;
  onMenuClick: () => void;
};

function Header({ onHomeClick, onMenuClick }: HeaderProps) {
  const nav = useNavigate();
  return (
    <div className="header">
      <img className="header-logo" src="../src/assets/logo.png" alt="" />
      <button className="header-button" onClick={() => nav("/home")}>
        Home
      </button>
      <button className="header-button" onClick={() => nav("/menu")}>
        Menu
      </button>
      <button className="header-button" onClick={() => nav("/reservation")}>
        Reservation
      </button>
    </div>
  );
}
export default Header;
