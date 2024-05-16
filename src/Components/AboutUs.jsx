import React from "react";
import "./AboutUs.css";
import ConstructorLogo from "../assets/ConstructorLogo.png";

export default function AboutUs() {
  return (
    <section id="about">
      <div className="About-us-Container">
        <div className="content-container-div">
          <h4 className="div-logo">compareKaro</h4>
          <p className="container-tagline">Behtareen Maan! Kifayati Daam.</p>
          <div className="card-div">
            <h2 className="container-div-heading">Welcome to compareKaro</h2>
            <p className="container-div-text-content">
              A platform where smart shopping meets exceptional value.
              Established in 2024, we have been dedicated to revolutionizing the
              way you shop for home essentials. Our commitment to quality,
              affordability, and convenience sets us apart as your trusted
              partner in creating the perfect home environment.
            </p>
            <button className="container-button">JOIN US TODAY!</button>
          </div>
        </div>
        <div>
          <img
            src={ConstructorLogo}
            className="constructor-img"
            alt="constructor"
          />
        </div>
      </div>
    </section>
  );
}
