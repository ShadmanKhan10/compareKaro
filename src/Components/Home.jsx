import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import HeroImage from "../assets/HeroImage.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="body">
      <div className="main-div">
        <div className="text-content-div">
          <h1 className="text-item1">Save Smart: Upgrade</h1>
          <h1 className="text-item2"> Your Shopping with us.</h1>

          <p className="tagline">Behtareen Maan, Kifayati Daam!</p>
          <div className="search-container">
            <input
              className="input-search"
              type="search"
              placeholder="Search items you're looking for..."
            />
            <button className="search-button">Search</button>
          </div>
          <ScrollLink
            className="router-link"
            to="services"
            smooth={true}
            duration={200}
          >
            <button className="hero-button">OUR SERVICES</button>
          </ScrollLink>
        </div>
        <div className="image-div">
          <img src={HeroImage} className="hero-image" alt="hero-img" />
        </div>
      </div>
    </div>
  );
}
