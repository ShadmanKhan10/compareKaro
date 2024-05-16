import React from "react";
import "./Testimonial.css";
import PlumbingLogo from "../assets/PlumbingLogo.png";

export default function Testimonial() {
  return (
    <div className="main-testimonial-container">
      <div className="heading-container">
        <h1 className="testimonial-heading">Client Testimonial</h1>
        <p className="sub-heading">
          Let's take a moment to explore the perspectives of our valued
          customers regarding their experiences with our services
        </p>
      </div>
      <div className="testimonial-card-container">
        <div className="testimonial-card">
          <div className="testimonial-img-div ">
            <img src={PlumbingLogo} className="profile-pic" alt="profile-pic" />
          </div>
          <p className="testimonial-card-des">
            Boost your product and service's credibility by adding testimonials
            from your clients. People love recommendations so feedback from
            others who've tried it is invaluable.
          </p>
          <h6 className="card-name">Sami Adnan, Zakirnagar</h6>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-img-div ">
            <img src={PlumbingLogo} className="profile-pic" alt="profile-pic" />
          </div>
          <p className="testimonial-card-des">
            Boost your product and service's credibility by adding testimonials
            from your clients. People love recommendations so feedback from
            others who've tried it is invaluable.
          </p>
          <h6 className="card-name">Faisal Khan, Azadnagar</h6>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-img-div ">
            <img src={PlumbingLogo} className="profile-pic" alt="profile-pic" />
          </div>
          <p className="testimonial-card-des">
            Boost your product and service's credibility by adding testimonials
            from your clients. People love recommendations so feedback from
            others who've tried it is invaluable.
          </p>
          <h6 className="card-name"> Saifullah Usmani, Jawaharnagar</h6>
        </div>
      </div>
    </div>
  );
}
