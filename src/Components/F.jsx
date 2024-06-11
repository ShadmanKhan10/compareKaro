import React from "react";
import { Link } from "react-router-dom";
import "./F.css";

function F() {
  return (
    <div className="success-container">
      <div className="succes-div">
        <div className="headin-msg">
          <h1>OOPS ! Error Logging In...</h1>
        </div>
        <div className="headin-des">
          <h2>Wrong Email or Password </h2>
        </div>
        <div className="headin-exit">
          {/* Redirect to SignIn page */}
          <Link to="/">
            <button className="btnf-props">Try Again</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default F;
