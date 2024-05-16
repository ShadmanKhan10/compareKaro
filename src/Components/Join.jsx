import React, {useState} from "react";
import "./Join.css";

export default function Join() {

  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="join-container">
      <div className="join-us-card" >
        <h3 className="join-us-label">Join Us</h3>
        
        <input className="name-input" type="text" placeholder="Name" value={name} onChange={(e) => {
           setName(e.target.value)
      }} /> <br />
      <input className="email-input" type="email" placeholder="Email" value={email} onChange={(e) => {
           setEmail(e.target.value)
      }} /> <br />
      <input className="password-input" type="password" placeholder="Password" value={password} onChange={(e) => {
           setPassword(e.target.value)
      }} /> <br />

      <div className="join-button-div"><button className="join-button" >Join Us</button></div>
      </div>
      </div>
  );
}

