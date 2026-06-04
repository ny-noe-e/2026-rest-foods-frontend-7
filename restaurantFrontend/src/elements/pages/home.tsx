import React from "react";
import HeroImg from "../../assets/homeHero.png";
import PhilosophyChefImg from "../../assets/philosophyChef.png";

function Home() {
  return (
    <div className="home">
      <div className="Home-Hero-Box">
        <img className="Home-Hero" src={HeroImg} alt="" />
        <div className="Home-Hero-shade"></div>
        <div className="Home-Hero-cover"></div>
        <div className="Home-Title">REST-Foods</div>
        <div className="Home-subtitle">
          Premium Dry-Aged Steaks.<br />
          <br />
          Hand-selected cuts.<br />
          <br />
          An unforgettable dining experience.
        </div>
      </div>
      <section className="Home-Philosophy">
        <div className="Home-Philosophy-Text">
          <p className="Home-Philosophy-Eyebrow">Our philosophy</p>
          <h2>Crafted with care, served with warmth</h2>
          <p>
            At REST-Foods, we believe that exceptional dining begins with
            exceptional ingredients. Every cut of beef is carefully selected for
            its quality, marbling, and flavor, ensuring an experience that
            exceeds expectations with every visit.
          </p>
          <p>
            Our commitment goes beyond serving great food. We create an
            atmosphere where craftsmanship, hospitality, and attention to detail
            come together.
          </p>
          <p>
            Whether you're celebrating a special occasion, enjoying an evening
            with friends, or simply seeking the finest steak experience, our
            mission remains the same: unforgettable moments through outstanding
            food and genuine service.
          </p>
        </div>
        <img
          className="Home-Philosophy-Image"
          src={PhilosophyChefImg}
          alt="Chef preparing food in the REST-Foods kitchen"
        />
      </section>
    </div>
  );
}

export default Home;
