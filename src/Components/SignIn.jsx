import React, { useState } from "react";
import "./SignIn.css";

export default function SignIn() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section id="signin">
      <div className="signin-container">
        <div className="sign-in-card">
          <h3 className="sign-in-label">Sign In</h3>
          <input
            className="email-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <input
            className="password-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <div className="sign-in-button-div">
            <button className="signin-button">Sign In</button>
          </div>
        </div>
      </div>
    </section>
  );
}
