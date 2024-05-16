import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import CompareKaroLogo from "../assets/CompareKaroLogo.png";
import "./Navbar.css";

export default function Navbar() {
  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="main">
      <div className="navbar">
        <div className="logo-itmes">
          <ul className="logo-ul">
            <li className="logo-list-items">
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                onClick={handleScrollToTop}
              >
                <img src={CompareKaroLogo} className="logo-image" alt="logo" />
              </ScrollLink>
            </li>
            <li className="logo-list-items">
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                onClick={handleScrollToTop}
              >
                <h1 className="company-name">compareKaro</h1>
              </ScrollLink>
            </li>
          </ul>
        </div>
        <div className="navbar-items">
          <ul className="navbar-ul">
            <li className="navbar-list-items">
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                onClick={handleScrollToTop}
              >
                Home!
              </ScrollLink>
            </li>
            <li className="navbar-list-items">
              <ScrollLink to="about" smooth={true} duration={200}>
                About
              </ScrollLink>
            </li>
            <li className="navbar-list-items">
              <RouterLink className="router-link" to="/items">
                Items
              </RouterLink>
            </li>
            <li className="navbar-list-items">
              <ScrollLink to="services" smooth={true} duration={200}>
                Services
              </ScrollLink>
            </li>

            <li className="navbar-list-items">
              <RouterLink className="router-link" to="/signin">
                SignIn
              </RouterLink>
            </li>

            <li className="navbar-list-items">
              <RouterLink className="router-link-span" to="/join">
                <span className="join-span">JOIN</span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
