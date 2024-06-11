import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./Cart.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Cart() {
  const notify = () => toast("Item removed from cart!"); // Define toast notification
  const { cartItems, removeFromCart } = useContext(CartContext); // Destructure removeFromCart from CartContext

  const handleRemoveFromCart = (itemId) => {
    notify(); // Trigger toast notification
    removeFromCart(itemId); // Call removeFromCart function
  };

  const buyFunction = async () => {
    try {
      const response = await axios.post("http://localhost:3000/payment", {
        cartItems,
      });
      if (response && response.status === 200) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error("Error creating payment session:", error.message);
    }
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <div className="cart-heading">
        <h2 className="cart-title">YOUR BAG!</h2>
      </div>
      {cartItems.length === 0 ? (
        <p className="cart-des">No items in cart</p>
      ) : (
        <div className="items-container">
          {cartItems.map((item) => (
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
              <button
                className="remove-from-cart-btn"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove from Cart
              </button>{" "}
              {/* Call handleRemoveFromCart function on button click */}
            </div>
          ))}
        </div>
      )}
      <div className="button-cont">
        <div className="total-props">
          <p>Your Total is: &#8377;{calculateTotalPrice()}</p>
        </div>
        <div className="only-btn">
          <button onClick={buyFunction} className="button-props">
            Buy Now{" "}
          </button>
        </div>
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
      />{" "}
      {/* Add position prop */}
    </div>
  );
}

export default Cart;
