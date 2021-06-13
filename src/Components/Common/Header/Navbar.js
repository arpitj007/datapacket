import React, { useState } from "react";
import "./Navbar.css";
import { BiInfoCircle, BiServer } from "react-icons/bi";

function Navbar() {
  const [checkHover, isCheckHover] = useState(false);
  const handleMouseEnter = () => {
    isCheckHover(!checkHover);
    console.log(checkHover);
  };
  const handleMouseLeave = () => {
    isCheckHover(!checkHover);
    console.log(checkHover);
  };
  let hours = new Date().getHours().toString();
  let minutes = new Date().getMinutes().toString();
  let time = hours + ":" + minutes;
  let na, eu, ap, sh;
  na = Math.floor(Math.random() * 23) + 322;
  eu = Math.floor(Math.random() * 20) + 221;
  ap = Math.floor(Math.random() * 14) + 192;
  sh = Math.floor(Math.random() * 11) + 34;

  return (
    <div className="navbar">
      <div className="navbar-left">
        Sales: +1 98765-43210
        <span
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="nav-icon"
        >
          <BiInfoCircle />
        </span>
      </div>
      <div className="navbar-middle">
        <BiServer />
        <span className="navbar-middle-text">
          Server stock at {time}: {na} × Americas | {eu} × Europe | {ap} ×
          APAC | {sh} × shipping
        </span>
      </div>
      <div className="navbar-right">
        <span className="navbar-button">FAQ</span>
        <span className="navbar-button">Cart</span>
        <span className="navbar-button">Log In</span>
      </div>
    </div>
  );
}

export default Navbar;
