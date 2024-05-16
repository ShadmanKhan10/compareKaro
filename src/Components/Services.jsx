import React from "react";
import "./Services.css";
import ElectricLogo from "../assets/ElectricLogo.png";
import PlumbingLogo from "../assets/PlumbingLogo.png";
import ConstructionLogo from "../assets/ConstructionLogo.png";

export default function Services() {
  return (
    <section id="services">
      <div className="main-services-div">
        <div className="heading-contianer">
          <h1 className="main-heading">Our Services</h1>
          <p className="heading-description">
            We provide a one-stop platform for users to find, compare, and
            purchase home essentials from different categories. We offer
            efficient tools for comparing prices, features, and specifications
            of various products, allowing our customers to make informed
            decisions that lead to significant cost savings on their purchases.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            delectus magnam repudiandae laborum? Iste corrupti sequi aliquam ex
            consequuntur, accusantium exercitationem expedita eum magni commodi
            quisquam? Fugit ducimus expedita molestias? Quibusdam iusto porro
            deserunt, quasi eius distinctio sapiente exercitationem adipisci.
            Voluptates reiciendis deleniti inventore dignissimos doloribus
            maxime cum at voluptatum possimus, exercitationem aliquam.
          </p>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="img-container">
              <img src={PlumbingLogo} className="card-img" alt="card-logo" />
            </div>
            <h4 className="card-heading">PLUMBING ITEMS</h4>
            <p className="card-description">
              Wide range of plumbing supplies: pipes, faucets, sinks, toilets,
              and accessories. Compare prices from various suppliers for
              cost-effective choices.
            </p>
          </div>
          <div className="card">
            <div className="img-container">
              <img src={ElectricLogo} className="card-img" alt="card-logo" />
            </div>
            <h4 className="card-heading">ELECTRIC ITEMS</h4>
            <p className="card-description">
              Effortless online shopping for your electrical needs – wires,
              switches, outlets, lighting, and more. Compare prices across shops
              for the best deals on essentials
            </p>
          </div>
          <div className="card">
            <div className="img-container">
              <img
                src={ConstructionLogo}
                className="card-img"
                alt="card-logo"
              />
            </div>
            <h4 className="card-heading">CONSTRUCTION ITEMS</h4>
            <p className="card-description">
              Effortless online shopping for your electrical needs – wires,
              switches, outlets, lighting, and more. Compare prices across shops
              for the best deals on essentials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
