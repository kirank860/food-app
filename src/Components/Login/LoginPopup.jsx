import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
const LoginPopup = ({setShowLogin}) => {
  const [currentstate, setCurrentState] = useState("sign up");
  return (
    <div className="LoginPopup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentstate}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentstate === "login" ? (
            <></>
          ) : (
            <input type="text" placeholder="your name" required />
          )}

          <input type="email" placeholder="your email" required />
          <input type="password" placeholder="password" required />
        </div>
        <button>
          {currentstate === "sign up" ? "create account" : "login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />

          <p>by continuing, i agree to the terms and conditions privacy policy</p>
        </div>
        {currentstate==="login"?     <p>Create a new account? <span onClick={()=>setCurrentState("sign up")}>Click here</span></p>:  <p>Already have an account? <span onClick={()=>setCurrentState("login")}>login in here</span></p>}
   
      
      </form>
    </div>
  );
};

export default LoginPopup;
