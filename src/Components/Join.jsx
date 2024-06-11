import React, { useState } from "react";
import { Link } from "react-router-dom";
import Success from "./S";
import Failure from "./F";
import "./Join.css";

export default function Join() {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isRegistered, setIsRegistered] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(null);
  const [mode, setMode] = useState("join"); // "join" or "signin"

  const handleJoinSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, password }),
      });

      if (response.ok) {
        setIsRegistered(true); // Set to success
      } else {
        setIsRegistered(false); // Set to failure
      }
    } catch (error) {
      console.error("Error:", error);
      setIsRegistered(false); // Set to failure
    }
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token); // Store the token
        setIsSignedIn(true); // Set to success
      } else {
        setIsSignedIn(false); // Set to failure
      }
    } catch (error) {
      console.error("Error:", error);
      setIsSignedIn(false); // Set to failure
    }
  };

  return (
    <div className="join-container">
      {mode === "join" && isRegistered === null && (
        <div className="join-us-card">
          <h3 className="join-us-label">Join Us</h3>
          <form onSubmit={handleJoinSubmit}>
            <input
              className="name-input"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              className="email-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              className="password-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <div className="join-button-div">
              <button className="join-button" type="submit">
                Join Us
              </button>
            </div>
          </form>
          <div className="btn-center">
            <Link to="/signin">
              <button className="msg-join">
                Already have an account? SignIn
              </button>
            </Link>
          </div>
        </div>
      )}
      {mode === "signin" && isSignedIn === null && (
        <div className="signin-card">
          <h3 className="signin-label">Sign In</h3>
          <form onSubmit={handleSignInSubmit}>
            <input
              className="email-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              className="password-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <div className="signin-button-div">
              <button className="signin-button" type="submit">
                Sign In
              </button>
            </div>
          </form>
          <button onClick={() => setMode("join")}>
            Don't have an account? Join Us
          </button>
        </div>
      )}
      {isRegistered === true && <Success />}
      {isRegistered === false && <Failure />}
      {isSignedIn === true && <Success />}
      {isSignedIn === false && <Failure />}
    </div>
  );
}
