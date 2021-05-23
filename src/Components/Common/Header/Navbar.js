import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">Sales: +1 98765-43210</div>
      <div className="navbar-right">
        <span className="navbar-button">FAQ</span>
        <span className="navbar-button">Cart</span>
        <span className="navbar-button">Log In</span>
      </div>
    </div>
  );
}

export default Navbar;
