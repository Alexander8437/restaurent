import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <>
      <section className="heroSection" id="heroSection">
        <Navbar />
        <div className="banner">
          <div className="imageBox">
            <img src="./hero1.png" alt="hero" />
          </div>

          <div className="largeBox">
            <h1 className="title">Delicious</h1>
            <div className="food">
              <h1 className="title">Food</h1>
              {/* <img src="./threelines.svg" alt="threelines" /> */}
            </div>
            <h1 className="title dishes_title">Dishes</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
