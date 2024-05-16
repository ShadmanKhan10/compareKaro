import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ElectricBanner from "../assets/ElectricBanner.jpg";
import Banner1 from "../assets/Banner1.jpg";
import Banner2 from "../assets/Banner2.jpg";
import Banner3 from "../assets/Banner3.jpg";
import Banner4 from "../assets/Banner4.jpg";
import "./DemoCarousel.css"; // Make sure to correct the CSS file extension

function DemoCarousel() {
  return (
    <div className="carousel-container">
      <Carousel autoPlay infiniteLoop interval={3000}>
        <div>
          <img src={Banner1} alt="HeroImage" />
        </div>
        <div>
          <img src={ElectricBanner} alt="ElectricLogo" />
        </div>
        <div>
          <img src={Banner2} alt="PlumbingLogo" />
        </div>
        <div>
          <img src={Banner3} alt="ElectricLogo" />
        </div>
        <div>
          <img src={Banner4} alt="ElectricLogo" />
        </div>
      </Carousel>
    </div>
  );
}

export default DemoCarousel;
