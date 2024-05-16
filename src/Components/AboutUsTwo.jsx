import React from "react";
import "./AboutUsTwo.css";
import ElectricLogo from "../assets/ElectricLogo.png";

export default function AboutUsTwo() {
  return (
    <div className="aboutus2-main-container">
      <div className="about-us-container">
        <div>
          <img src={ElectricLogo} className="Aboutus-logo" alt="logo" />
        </div>
        <div className="text-paragraph">
          <p className="about-description">
            Our vision is to transform homes and empower lives through a
            philosophy centered on quality, affordability, and convenience. Our
            mantra is simple: Compare, Choose, Thrive.
          </p>
        </div>
      </div>
    </div>
  );
}
