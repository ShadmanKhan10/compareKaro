import React, { useState } from "react";
import "./BecomeASeller.css";

function BecomeASeller() {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [shopName, setshopName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState();
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="join-container">
      <div className="join-us-card">
        <h3 className="join-us-label">Become A Seller</h3>
        <input
          className="name-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        <br />
        <input
          className="email-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />
        <input
          className="name-input"
          type="text"
          placeholder="Shop Name"
          value={shopName}
          onChange={(e) => {
            setshopName(e.target.value);
          }}
        />{" "}
        <br />
        <input
          className="phone-input"
          type="number"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => {
            setphone(e.target.value);
          }}
        />{" "}
        <br />
        {/* <div className="dropdown-container"> */}
        <select
          className="select-input" // Apply the styling from your CSS file
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value);
          }}
        >
          <option value="">Select your Dealership</option>
          <option value="electric">Electric items</option>
          <option value="plumbing">Plumbing items</option>
          <option value="construction">Construction Items</option>
        </select>
        {/* </div> */}
        <input
          className="password-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <br />
        <div className="join-button-div">
          <button className="join-button">Join Us</button>
        </div>
      </div>
    </div>
  );
}

export default BecomeASeller;
