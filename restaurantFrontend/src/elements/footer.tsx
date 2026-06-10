import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const nav = useNavigate();
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_section">
          <h3 className="footer_title">Where</h3>
          <a
            href="https://maps.app.goo.gl/VF8hbb29ZrQrAgtp9"
            className="footer_link"
          >
            Herostrasse 312
          </a>
        </div>

        <div className="footer_section">
          <h3 className="footer_title">Contact</h3>
          <a href="mailto:Info@RestFoods.ch" className="footer_link">
            Info@RestFoods.ch
          </a>
          <a href="mailto:Support@RestFoods.ch" className="footer_link">
            Support@RestFoods.ch
          </a>
        </div>

        <div className="footer_section">
          <h3 className="footer_title">Follow Us</h3>
          <a
            href="https://www.youtube.com/@noseryoung"
            target="_blank"
            rel="noreferrer"
            className="footer_link"
          >
            Youtube
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
