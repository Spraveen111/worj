// SignInPage.js

import React from "react";
import "./index.css"; // Make sure the path is correct for your CSS file

function SignIn() {
  return (
    <>
 
      <div className="sign">
        <div className="sign-in-container">
          <h2>Sign In</h2>
          <form>
            <label>Email:</label>
            <input type="email" name="email" required />

            <label>Password:</label>
            <input type="password" name="password" required />

            <div className="remember-container">
              <input type="checkbox" id="remember" className="c" />
              <label htmlFor="remember">Remember Password</label>
            </div>

            <button className="sign-in-button">Sign In</button>
          </form>
          <hr />
          <div className="social-buttons">
            <button className="google-button">Sign In with Google</button>
            <button className="facebook-button">Sign In with Facebook</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;