import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Services from "./Services";
import AboutUs from "./AboutUs";
import AboutUsTwo from "./AboutUsTwo";
import Testimonial from "./Testimonial";

function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <AboutUs />
      <AboutUsTwo />
      <Testimonial />
    </>
  );
}

export default HomePage;
