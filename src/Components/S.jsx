import React from "react";
import { Link } from "react-router-dom";
import "./S.css";

function S() {
  return (
    <div className="success-container">
      <div className="success-div">
        <div className="heading-msg">
          <h1>Welcome to PriceWare !</h1>
        </div>
        <div className="heading-des">
          <h2>You are now successfully Logged In</h2>
        </div>
        <div className="heading-exit">
          <Link to="/items">
            <button className="btns-props">Begin Exploring</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default S;
