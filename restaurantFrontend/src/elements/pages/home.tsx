import React from "react";
import HeroImg from "../../assets/homeHero.png";
import PhilosophyChefImg from "../../assets/philosophyChef.png";
import FeaturedFiletImg from "../../assets/featuredFilet.png";
import FeaturedRibeyeImg from "../../assets/featuredRibeye.png";
import FeaturedTomahawkImg from "../../assets/featuredTomahawk.png";

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
      <section className="Home-Featured-Cuts">
        <div className="Home-Featured-Cuts-Header">
          <p className="Home-Philosophy-Eyebrow">Featured cuts</p>
          <h2>Selected from the finest parts of the cow</h2>
          <p>
            Three signature cuts, each chosen for a different kind of steak
            experience.
          </p>
        </div>
        <div className="Home-Cuts-Grid">
          <article className="Home-Cut-Card">
            <img src={FeaturedTomahawkImg} alt="Tomahawk steak cut" />
            <div>
              <h3>Tomahawk</h3>
              <p>
                A dramatic bone-in rib cut with generous marbling, built for a
                rich flavor, deep crust, and a memorable table presentation.
              </p>
            </div>
          </article>
          <article className="Home-Cut-Card">
            <img src={FeaturedRibeyeImg} alt="Ribeye steak cut" />
            <div>
              <h3>Ribeye</h3>
              <p>
                Cut from the rib section, the ribeye is prized for its balance
                of tenderness and fat, giving every bite a buttery finish.
              </p>
            </div>
          </article>
          <article className="Home-Cut-Card">
            <img src={FeaturedFiletImg} alt="Filet mignon steak cut" />
            <div>
              <h3>Filet Mignon</h3>
              <p>
                Taken from the tenderloin, filet mignon is lean, delicate, and
                exceptionally tender for a refined steakhouse classic.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Home;
