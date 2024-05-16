import React, { useState } from "react";
import NavItems from "./NavItems";
import DemoCarousel from "./DemoCarousel";
import "./Items.css";
import ElectricLogo from "../assets/ElectricLogo.png";
import PlumbingLogo from "../assets/PlumbingLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Items() {
  const items = [
    {
      id: 1,
      rating: 4.5,
      url: "https://cdn.moglix.com/p/I/D/2/d/MINID2VZIIE10-large.jpg",
      name: "U-PVC",
      description:
        "Long lasting pipe, build with better quality. Strong and Durable. Make it your first choice",
      dealer: "Prince Hardware",
      brand: "Supreme",
      location: "Zakirnagar",
      price: 1300,
    },
    {
      id: 2,
      rating: 2.5,
      url: "https://cdn.moglix.com/p/J/0/D/d/MINJ0D1OIZK54-large.jpg",
      name: "C-PVC",
      description:
        "Long lasting pipe, build with better quality build with better quality build with better quality.",
      dealer: "Fantasy Hardware",
      brand: "Supreme",
      location: "Jawaharnagar",
      price: 1000,
    },
    {
      id: 3,
      rating: 4.5,
      url: "https://cdn.moglix.com/p/p8hkQxaFW6tZf-large.jpg",
      name: "U-PVC",
      description:
        "Long lasting pipe, build with better quality. Strong and Durable. Make it your first choice",
      dealer: "Prince Hardware",
      brand: "Supreme",
      location: "Azadnagar",
      price: 1300,
    },
    {
      id: 4,
      rating: 2.5,
      url: "https://cdn.moglix.com/p/PVYlftuK1vQNK-large.jpg",
      name: "C-PVC",
      description:
        "Long lasting pipe, build with better quality build with better quality build with better quality.",
      dealer: "Fantasy Hardware",
      brand: "Supreme",
      location: "Zakirnagar",
      price: 1000,
    },
    {
      id: 5,
      rating: 4.5,
      url: ElectricLogo,
      name: "U-PVC",
      description:
        "Long lasting pipe, build with better quality. Strong and Durable. Make it your first choice",
      dealer: "Prince Hardware",
      brand: "Supreme",
      location: "Jawaharnagar",
      price: 1300,
    },
    {
      id: 6,
      rating: 2.5,
      url: PlumbingLogo,
      name: "C-PVC",
      description:
        "Long lasting pipe, build with better quality build with better quality build with better quality.",
      dealer: "Fantasy Hardware",
      brand: "Prince",
      location: "Azadnagar",
      price: 1000,
    },
    {
      id: 7,
      rating: 4.5,
      url: ElectricLogo,
      name: "U-PVC",
      description:
        "Long lasting pipe, build with better quality. Strong and Durable. Make it your first choice",
      dealer: "Prince Hardware",
      brand: "Finolex",
      location: "Zakirnagar",
      price: 1300,
    },
    {
      id: 8,
      rating: 2.5,
      url: PlumbingLogo,
      name: "C-PVC",
      description:
        "Long lasting pipe, build with better quality build with better quality build with better quality.",
      dealer: "Fantasy Hardware",
      brand: "Astral",
      location: "Azadnagar",
      price: 1000,
    },
  ];
  const [query, setQuery] = useState("");
  const [selectedOptionFilter, setSelectedOptionFilter] = useState("");
  const handleSearchInput = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <NavItems />
      <div className="demo-carousel-image">
        <DemoCarousel />
      </div>
      <div>
        <div className="search-items-main">
          <input
            className="input-main-search"
            type="search"
            value={query}
            placeholder="Search items you're looking for..."
            onChange={handleSearchInput}
          />
          <button className="input-main-button">Search</button>
          <div className="spans">
            <span className="span-filter">
              <select
                className="span-filter-dropdown" // Apply the styling from your CSS file
                value={selectedOptionFilter}
                onChange={(e) => {
                  setSelectedOptionFilter(e.target.value);
                }}
              >
                <option value="">Filter</option>
                <option value="Price">Price</option>
                <option value="Brands">Brands</option>
                <option value="Shops">Shops</option>
              </select>
            </span>
            <span className="span-sort">
              <select
                className="span-filter-dropdown" // Apply the styling from your CSS file
              >
                <option value="">Sort By</option>
                <option value="Price">Price</option>
                <option value="Brands">Location</option>
                <option value="Shops">Dealers</option>
              </select>
            </span>
            <span className="span-brand">
              <select
                className="span-filter-dropdown" // Apply the styling from your CSS file
              >
                <option value="">Brands</option>
                <option value="Shops">All</option>
                <option value="Brands">Supreme</option>
                <option value="Price">Finolex</option>
                <option value="Shops">Prince</option>
                <option value="Shops">Astral</option>
              </select>
            </span>
          </div>
        </div>
        <div className="items-list">
          {items
            .filter((val) => {
              if (query === "") {
                return val;
              } else if (val.name.toLowerCase().includes(query.toLowerCase())) {
                return val;
              }
              return null;
            })
            .map((item) => (
              <div key={item.id} className="item-card">
                <div className="image-container">
                  <div className="item-card-img-div">
                    <img
                      className="item-card-img"
                      src={item.url}
                      alt={item.name}
                    />
                  </div>
                </div>

                <div className="item-name">
                  <h3>{item.name}</h3>
                </div>
                <span className="item-rating">{item.rating} </span>

                <div className="item-description">
                  {item.description.length > 91 ? (
                    <p>{item.description.substring(0, 90) + "..."}</p>
                  ) : (
                    <p>{item.description}</p>
                  )}
                </div>
                <p className="item-dealer">Dealer: {item.dealer}</p>
                <p className="item-brand">Brand: {item.brand}</p>
                <span className="item-location-pin">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <p className="location">{item.location}</p>
                </span>
                <p className="item-price">Price: &#8377;{item.price}</p>

                <div className="add-to-cart-div">
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
            ))}
        </div>
      </div>
      Items
    </>
  );
}

export default Items;
