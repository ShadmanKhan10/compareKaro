// import React, { useState } from "react";
// import "./SignIn.css";

// export default function SignIn() {
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");

//   return (
//     <section id="signin">
//       <div className="signin-container">
//         <div className="sign-in-card">
//           <h3 className="sign-in-label">Sign In</h3>
//           <input
//             className="email-input"
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//           />
//           <br />
//           <input
//             className="password-input"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//           />
//           <br />
//           <div className="sign-in-button-div">
//             <button className="signin-button">Sign In</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import Success from "./S";
import Failure from "./F";
import "./SignIn.css";

export default function SignIn() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(null);

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
    <section id="signin">
      <div className="signin-container">
        {isSignedIn === null && (
          <div className="sign-in-card">
            <h3 className="sign-in-label">Sign In</h3>
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
              <div className="sign-in-button-div">
                <button className="signin-button" type="submit">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        )}
        {isSignedIn === true && <Success />}
        {isSignedIn === false && <Failure />}
      </div>
    </section>
  );
}
