import React, { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import CompareKaroLogo from "../assets/CompareKaroLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import "./NavItems.css";
import { CartContext } from "./CartContext"; // Import CartContext
import { SearchContext } from "./SearchContext"; // Import SearchContext

function NavItems() {
  const { cartCount } = useContext(CartContext); // Destructure cartCount from context
  const { query, setQuery } = useContext(SearchContext); // Destructure query and setQuery from SearchContext

  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleSearchInput = (e) => {
    setQuery(e.target.value);
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
                  <h1 className="company-name">PriceWare</h1>
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-items">
          <ul className="navbar-ul">
            <li className="navbar-list-items">
              <div className="nav-search">
                <input
                  className="input-nav-search"
                  type="search"
                  placeholder="Search items you're looking for..."
                  value={query}
                  onChange={handleSearchInput}
                />
                <button className="input-nav-button">Search</button>
              </div>
            </li>
            <div className="nav-items-right">
              <div className="cart-container">
                <div>
                  <li className="navbar-list-items">
                    <RouterLink className="router-link" to="/cart">
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </RouterLink>
                  </li>
                </div>
              </div>
              <div className="cart-update">
                <div className="cart-update-color">
                  <p>{cartCount}</p> {/* Display cart count */}
                </div>
              </div>

              {/* <li className="navbar-list-items">
                <RouterLink className="router-link" to="/become-a-seller">
                  Become a Seller
                </RouterLink>
              </li> */}
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
