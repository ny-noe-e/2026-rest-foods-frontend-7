import React from "react";

type HeaderProps = {
  onHomeClick: () => void;
  onMenuClick: () => void;
};

function Header({ onHomeClick, onMenuClick }: HeaderProps) {
  return (
    <div className="header">
      <img className="header-logo" src="../src/assets/logo.png" alt="" />
      <button className="header-button" onClick={onHomeClick}>
        home
      </button>
      <button className="header-button" onClick={onMenuClick}>
        menu
      </button>
    </div>
  );
}
export default Header;
