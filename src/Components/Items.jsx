// import React, { useContext, useState } from "react";
// import NavItems from "./NavItems";
// import DemoCarousel from "./DemoCarousel";
// import ElectricLogo from "../assets/ElectricLogo.png";
// import PlumbingLogo from "../assets/PlumbingLogo.png";
// import "./Items.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
// import { CartContext } from "./CartContext"; // Import CartContext

// function Items() {
//   const items = [
//     {
//       id: 1,
//       rating: 4.5,
//       url: "https://cdn.moglix.com/p/I/D/2/d/MINID2VZIIE10-large.jpg",
//       name: "U-PVC",
//       description:
//         "Long lasting pipe, build with better quality. Strong and Durable. Make it your first choice",
//       dealer: "Prince Hardware",
//       brand: "Supreme",
//       location: "Zakirnagar",
//       price: 1300,
//     },
//     {
//       id: 2,
//       rating: 2.5,
//       url: "https://cdn.moglix.com/p/J/0/D/d/MINJ0D1OIZK54-large.jpg",
//       name: "C-PVC",
//       description:
//         "Long lasting pipe, build with better quality build with better quality build with better quality.",
//       dealer: "Fantasy Hardware",
//       brand: "Supreme",
//       location: "Jawaharnagar",
//       price: 1000,
//     },
//     {
//       id: 3,
//       rating: 4.5,
//       url: "https://cdn.moglix.com/p/p8hkQxaFW6tZf-large.jpg",
//       name: "U-PVC",
//       description:
//         "Long lasting pipe, build with better quality. Strong and Durable. Make it your first choice",
//       dealer: "Prince Hardware",
//       brand: "Supreme",
//       location: "Azadnagar",
//       price: 1300,
//     },
//     {
//       id: 4,
//       rating: 2.5,
//       url: "https://cdn.moglix.com/p/PVYlftuK1vQNK-large.jpg",
//       name: "C-PVC",
//       description:
//         "Long lasting pipe, build with better quality build with better quality build with better quality.",
//       dealer: "Fantasy Hardware",
//       brand: "Supreme",
//       location: "Zakirnagar",
//       price: 1000,
//     },
//     {
//       id: 5,
//       rating: 4.5,
//       url: ElectricLogo,
//       name: "U-PVC",
//       description:
//         "Long lasting pipe, build with better quality. Strong and Durable. Make it your first choice",
//       dealer: "Prince Hardware",
//       brand: "Supreme",
//       location: "Jawaharnagar",
//       price: 1300,
//     },
//     {
//       id: 6,
//       rating: 2.5,
//       url: PlumbingLogo,
//       name: "C-PVC",
//       description:
//         "Long lasting pipe, build with better quality build with better quality build with better quality.",
//       dealer: "Fantasy Hardware",
//       brand: "Prince",
//       location: "Azadnagar",
//       price: 1000,
//     },
//     {
//       id: 7,
//       rating: 4.5,
//       url: ElectricLogo,
//       name: "U-PVC",
//       description:
//         "Long lasting pipe, build with better quality. Strong and Durable. Make it your first choice",
//       dealer: "Prince Hardware",
//       brand: "Finolex",
//       location: "Zakirnagar",
//       price: 1300,
//     },
//     {
//       id: 8,
//       rating: 2.5,
//       url: PlumbingLogo,
//       name: "C-PVC",
//       description:
//         "Long lasting pipe, build with better quality build with better quality build with better quality.",
//       dealer: "Fantasy Hardware",
//       brand: "Astral",
//       location: "Azadnagar",
//       price: 1000,
//     },
//   ];

//   const { addToCart } = useContext(CartContext); // Destructure addToCart from context
//   const [query, setQuery] = useState("");
//   const [selectedOptionFilter, setSelectedOptionFilter] = useState("");
//   const [selectedSortOption, setSelectedSortOption] = useState("");
//   const [selectedBrand, setSelectedBrand] = useState("");

//   const handleSearchInput = (e) => {
//     setQuery(e.target.value);
//   };

//   const filteredItems = items
//     .filter((val) => {
//       if (query === "") {
//         return val;
//       } else if (val.name.toLowerCase().includes(query.toLowerCase())) {
//         return val;
//       }
//       return null;
//     })
//     .filter((val) => {
//       if (selectedBrand === "" || selectedBrand === "All") {
//         return val;
//       } else if (val.brand === selectedBrand) {
//         return val;
//       }
//       return null;
//     });

//   const sortedItems = filteredItems.sort((a, b) => {
//     if (selectedSortOption === "Price") {
//       return a.price - b.price;
//     } else if (selectedSortOption === "Location") {
//       return a.location.localeCompare(b.location);
//     } else if (selectedSortOption === "Rating") {
//       return b.rating - a.rating; // Sorting by rating in descending order
//     }
//     return 0;
//   });

//   return (
//     <>
//       <NavItems />
//       <div className="demo-carousel-image">
//         <DemoCarousel />
//       </div>
//       <div>
//         <div className="search-items-main">
//           <input
//             className="input-main-search"
//             type="search"
//             value={query}
//             placeholder="Search items you're looking for..."
//             onChange={handleSearchInput}
//           />
//           <button className="input-main-button">Search</button>
//           <div className="spans">
//             <span className="span-sort">
//               <select
//                 className="span-filter-dropdown"
//                 value={selectedSortOption}
//                 onChange={(e) => setSelectedSortOption(e.target.value)}
//               >
//                 <option value="">Sort By</option>
//                 <option value="Price">Price</option>
//                 <option value="Location">Location</option>
//                 <option value="Rating">Rating</option>
//               </select>
//             </span>
//             <span className="span-brand">
//               <select
//                 className="span-filter-dropdown"
//                 value={selectedBrand}
//                 onChange={(e) => setSelectedBrand(e.target.value)}
//               >
//                 <option value="">Brands</option>
//                 <option value="All">All</option>
//                 <option value="Supreme">Supreme</option>
//                 <option value="Finolex">Finolex</option>
//                 <option value="Prince">Prince</option>
//                 <option value="Astral">Astral</option>
//               </select>
//             </span>
//           </div>
//         </div>
//         <div className="items-list">
//           {sortedItems.map((item) => (
//             <div key={item.id} className="item-card">
//               <div className="image-container">
//                 <div className="item-card-img-div">
//                   <img
//                     className="item-card-img"
//                     src={item.url}
//                     alt={item.name}
//                   />
//                 </div>
//               </div>

//               <div className="item-name">
//                 <h3>{item.name}</h3>
//               </div>
//               <span
//                 className={`item-rating ${
//                   item.rating <= 3 ? "rating-low" : "rating-high"
//                 }`}
//               >
//                 {item.rating}
//               </span>

//               <div className="item-description">
//                 {item.description.length > 91 ? (
//                   <p>{item.description.substring(0, 90) + "..."}</p>
//                 ) : (
//                   <p>{item.description}</p>
//                 )}
//               </div>
//               <p className="item-dealer">Dealer: {item.dealer}</p>
//               <p className="item-brand">Brand: {item.brand}</p>
//               <span className="item-location-pin">
//                 <FontAwesomeIcon icon={faMapMarkerAlt} />
//                 <p className="location">{item.location}</p>
//               </span>
//               <p className="item-price">Price: &#8377;{item.price}</p>

//               <div className="add-to-cart-div">
//                 <button
//                   className="add-to-cart-btn"
//                   onClick={() => addToCart(item)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Items;

import React, { useContext, useState } from "react";
import NavItems from "./NavItems";
import DemoCarousel from "./DemoCarousel";
import ElectricLogo from "../assets/ElectricLogo.png";
import PlumbingLogo from "../assets/PlumbingLogo.png";
import "./Items.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "./CartContext"; // Import CartContext
import { SearchContext } from "./SearchContext"; // Import SearchContext
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Items() {
  const items = [
    {
      id: 1,
      rating: 4.2,
      url: "https://cdn.moglix.com/p/I/D/2/d/MINID2VZIIE10-large.jpg",
      name: "Faucet",
      description:
        "Long lasting pipe, build with better quality. Strong and Durable. Make it your first choice",
      dealer: "Prince Hardware",
      brand: "Supreme",
      location: "Zakirnagar",
      price: 1300,
    },
    {
      id: 2,
      rating: 4.0,
      url: "https://cdn.moglix.com/p/J/0/D/d/MINJ0D1OIZK54-large.jpg",
      name: "Shower",
      description:
        "Long lasting pipe, build with better quality build with better quality build with better quality.",
      dealer: "Fantasy Hardware",
      brand: "Supreme",
      location: "Jawaharnagar",
      price: 650,
    },
    {
      id: 3,
      rating: 3.5,
      url: "https://cdn.moglix.com/p/p8hkQxaFW6tZf-large.jpg",
      name: "Jet Spray",
      description:
        "Long lasting pipe, build with better quality. Strong and Durable. Make it your first choice",
      dealer: "Prince Hardware",
      brand: "Supreme",
      location: "Azadnagar",
      price: 800,
    },
    {
      id: 4,
      rating: 3.8,
      url: "https://cdn.moglix.com/p/PVYlftuK1vQNK-large.jpg",
      name: "Snake Sink Tap",
      description:
        "Long lasting pipe, build with better quality build with better quality build with better quality.",
      dealer: "Fantasy Hardware",
      brand: "Supreme",
      location: "Zakirnagar",
      price: 780,
    },
    {
      id: 5,
      rating: 4.4,
      url: "https://cdn.moglix.com/p/WaJ4PbLUxjGdF-large.jpg",
      name: "Geyser",
      description:
        "Long lasting pipe, build with better quality. Strong and Durable. Make it your first choice",
      dealer: "Prince Hardware",
      brand: "Supreme",
      location: "Jawaharnagar",
      price: 7300,
    },
    {
      id: 6,
      rating: 4.5,
      url: "https://cdn.moglix.com/p/Qf7jCBbtt37Fy-large.jpg",
      name: "Faucet",
      description:
        "Long lasting pipe, build with better quality build with better quality build with better quality.",
      dealer: "Fantasy Hardware",
      brand: "Prince",
      location: "Azadnagar",
      price: 2500,
    },
    {
      id: 7,
      rating: 4.1,
      url: "https://cdn.moglix.com/p/dAvIPK9z870Jy-large.jpg",
      name: "Tap",
      description:
        "Long lasting pipe, build with better quality. Strong and Durable. Make it your first choice",
      dealer: "Prince Hardware",
      brand: "Finolex",
      location: "Zakirnagar",
      price: 1300,
    },
    {
      id: 8,
      rating: 4.3,
      url: "https://cdn.moglix.com/p/DOFPEXbTeOjRg-large.jpg",
      name: "Shower Combo",
      description:
        "Long lasting pipe, build with better quality build with better quality build with better quality.",
      dealer: "Fantasy Hardware",
      brand: "Astral",
      location: "Azadnagar",
      price: 2000,
    },
    {
      id: 9,
      rating: 4.5,
      url: "https://cdn.moglix.com/p/Ily4Dd4OgD7i4-large.jpg",
      name: "Subimmersible",
      description:
        "Long lasting pipe, build with better quality build with better quality build with better quality.",
      dealer: "Fantasy Hardware",
      brand: "Astral",
      location: "Azadnagar",
      price: 12000,
    },
    {
      id: 10,
      rating: 4.2,
      url: "https://cdn.moglix.com/p/5siuB1NPi0EEk-large.jpg",
      name: "C-PVC",
      description:
        "Long lasting pipe, build with better quality build with better quality build with better quality.",
      dealer: "Fantasy Hardware",
      brand: "Astral",
      location: "Azadnagar",
      price: 21000,
    },
    {
      id: 11,
      rating: 4.6,
      url: "https://cdn.moglix.com/p/lfbjtKq73Xtz0-large.jpg",
      name: "Twin MCB",
      description:
        "Long lasting pipe, build with better quality build with better quality build with better quality.",
      dealer: "Fantasy Hardware",
      brand: "Astral",
      location: "Azadnagar",
      price: 2000,
    },
    {
      id: 12,
      rating: 4.4,
      url: "https://cdn.moglix.com/p/4bHGnRmKkvGAC-large.jpg",
      name: "Inverter",
      description:
        "Long lasting pipe, build with better quality build with better quality build with better quality.",
      dealer: "Fantasy Hardware",
      brand: "Astral",
      location: "Azadnagar",
      price: 18000,
    },
    {
      id: 13,
      rating: 2.5,
      url: "https://cdn.moglix.com/p/StVRmpPj3qROJ-large.jpg",
      name: "C-PVC",
      description:
        "Long lasting pipe, build with better quality build with better quality build with better quality.",
      dealer: "Fantasy Hardware",
      brand: "Astral",
      location: "Azadnagar",
      price: 1000,
    },
    {
      id: 14,
      rating: 3.9,
      url: "https://cdn.moglix.com/p/lzbBgKceOPhD1-large.jpg",
      name: "Stabilizer",
      description:
        "Long lasting pipe, build with better quality build with better quality build with better quality.",
      dealer: "Fantasy Hardware",
      brand: "Astral",
      location: "Azadnagar",
      price: 14000,
    },
    {
      id: 15,
      rating: 4.5,
      url: "https://cdn.moglix.com/p/g9BUnsV81ICnh-large.jpg",
      name: "Wash Basin",
      description:
        "Long lasting pipe, build with better quality build with better quality build with better quality.",
      dealer: "Fantasy Hardware",
      brand: "Astral",
      location: "Azadnagar",
      price: 4000,
    },
    {
      id: 16,
      rating: 4.7,
      url: "https://cdn.moglix.com/p/48bpQnjVPNBTI-large.jpg",
      name: "Wash Basin",
      description:
        "Long lasting pipe, build with better quality build with better quality build with better quality.",
      dealer: "Fantasy Hardware",
      brand: "Astral",
      location: "Azadnagar",
      price: 5500,
    },
    {
      id: 17,
      rating: 3.8,
      url: "https://cdn.moglix.com/p/lLmUl2fo1af3C-large.jpg",
      name: "Wash Sink",
      description:
        "Long lasting pipe, build with better quality build with better quality build with better quality.",
      dealer: "Fantasy Hardware",
      brand: "Astral",
      location: "Azadnagar",
      price: 3500,
    },
    {
      id: 18,
      rating: 4.1,
      url: "https://cdn.moglix.com/p/NirlJyS9dXrhO-large.jpg",
      name: "Wash Sink",
      description:
        "Long lasting pipe, build with better quality build with better quality build with better quality.",
      dealer: "Fantasy Hardware",
      brand: "Astral",
      location: "Azadnagar",
      price: 3400,
    },
    {
      id: 19,
      rating: 4.5,
      url: "https://cdn.moglix.com/p/Iya9LJzyFVNwA-large.jpg",
      name: "Kitchen Sink",
      description:
        "Long lasting pipe, build with better quality build with better quality build with better quality.",
      dealer: "Fantasy Hardware",
      brand: "Astral",
      location: "Azadnagar",
      price: 2800,
    },
    {
      id: 20,
      rating: 4.3,
      url: "https://cdn.moglix.com/p/E6rfn3G2Wzu5o-large.jpg",
      name: "Kitchen Sink",
      description:
        "Long lasting pipe, build with better quality build with better quality build with better quality.",
      dealer: "Fantasy Hardware",
      brand: "Astral",
      location: "Azadnagar",
      price: 1600,
    },
  ];

  const notify = () => toast("Item added to cart!");

  const { addToCart } = useContext(CartContext); // Destructure addToCart from context
  const { query } = useContext(SearchContext); // Destructure query from SearchContext
  const [selectedOptionFilter, setSelectedOptionFilter] = useState("");
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const filteredItems = items
    .filter((val) => {
      if (query === "") {
        return val;
      } else if (val.name.toLowerCase().includes(query.toLowerCase())) {
        return val;
      }
      return null;
    })
    .filter((val) => {
      if (selectedBrand === "" || selectedBrand === "All") {
        return val;
      } else if (val.brand === selectedBrand) {
        return val;
      }
      return null;
    });

  const sortedItems = filteredItems.sort((a, b) => {
    if (selectedSortOption === "Price") {
      return a.price - b.price;
    } else if (selectedSortOption === "Location") {
      return a.location.localeCompare(b.location);
    } else if (selectedSortOption === "Rating") {
      return b.rating - a.rating; // Sorting by rating in descending order
    }
    return 0;
  });

  return (
    <>
      <NavItems />
      <div className="demo-carousel-image">
        <DemoCarousel />
      </div>
      <div>
        <div className="search-items-main">
          {/* <input
            className="input-main-search"
            type="search"
            value={query}
            placeholder="Search items you're looking for..."
            onChange={(e) => setQuery(e.target.value)}
          /> */}
          {/* <button className="input-main-button">Search</button> */}
          <div className="spans">
            <span className="span-sort">
              <select
                className="span-filter-dropdown"
                value={selectedSortOption}
                onChange={(e) => setSelectedSortOption(e.target.value)}
              >
                <option value="">Sort By</option>
                <option value="Price">Price</option>
                <option value="Location">Location</option>
                <option value="Rating">Rating</option>
              </select>
            </span>
            <span className="span-brand">
              <select
                className="span-filter-dropdown"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                <option value="">Brands</option>
                <option value="All">All</option>
                <option value="Supreme">Supreme</option>
                <option value="Finolex">Finolex</option>
                <option value="Prince">Prince</option>
                <option value="Astral">Astral</option>
              </select>
            </span>
          </div>
        </div>
        <div className="items-list">
          {sortedItems.map((item) => (
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
              <span
                className={`item-rating ${
                  item.rating <= 3 ? "rating-low" : "rating-high"
                }`}
              >
                {item.rating}
              </span>

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
                <button
                  className="add-to-cart-btn"
                  onClick={() => {
                    addToCart(item);
                    notify(); // Trigger toast notification
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  );
}

export default Items;
