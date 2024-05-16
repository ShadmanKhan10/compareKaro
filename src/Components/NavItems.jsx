import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import CompareKaroLogo from "../assets/CompareKaroLogo.png";
import "./Navbar.css";
import "./NavItems.css";

function NavItems() {
  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="main">
      <div className="navbar1">
        <div className="logo-items-navItems">
          <div className="logo-itmes">
            <ul className="logo-ul">
              <li className="logo-list-items">
                <img src={CompareKaroLogo} className="logo-image" alt="logo" />
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
        </div>
        <div className="navbar-items">
          <ul className="navbar-ul">
            {/* <li className="navbar-list-items">
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                onClick={handleScrollToTop}
              >
                Home
              </ScrollLink>
            </li> */}
            <li className="navbar-list-items">
              <div className="nav-search">
                <input
                  className="input-nav-search"
                  type="serach"
                  placeholder="Search items you're looking for..."
                />
                <button className="input-nav-button">Search</button>
              </div>
            </li>
            <div className="nav-items-right">
              <li className="navbar-list-items">Cart</li>
              <li className="navbar-list-items">
                <RouterLink className="router-link" to="/become-a-seller">
                  Become a Seller
                </RouterLink>
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
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavItems;
