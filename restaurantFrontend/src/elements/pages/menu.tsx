import menuHeroImage from "../../assets/menuHero.png";
import React from "react";
import { MenuList } from "../objects/menuList";
import { Filter } from "../objects/menuFilter";

function Menu() {
  return (
    <main className="menu-page">
      <section
        className="menu-hero"
        style={
          {
            "--menu-hero-image": `url(${menuHeroImage})`,
          } as React.CSSProperties
        }
        aria-labelledby="menu-title"
      >
        <div className="menu-hero-content">
          <h1 className="menu-title" id="menu-title">
            Our menu
          </h1>
          <p className="menu-subtitle">
            Seasonal dishes, curated specials, and cellar pairings presented
            with quiet attention to detail.
          </p>
        </div>
      </section>

      <section className="menu-content" aria-labelledby="menu-section-title">
        <div className="menu-section-header">
          <div>
            <h2 id="menu-section-title">Menu selection</h2>
            <p>A collection of dishes, handpicked by our chef.</p>
          </div>
        </div>

        <div className="menu-empty-state">
          <div className="menu-empty-copy">
            <Filter />
            <MenuList />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Menu;
