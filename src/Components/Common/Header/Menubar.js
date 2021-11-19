import React from "react";
import logo from "../../../logo-100gbps.png";
import "./Menubar.css";
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";
function Menubar() {
  return (
    <div className="menubar">
      <div className="menubar-left">
        <Link to="/">
          <img className="menubar-logo" src={logo} alt="logo" />
        </Link>
        <MenuItems />
      </div>
      <div className="menubar-right"></div>
    </div>
  );
}

export default Menubar;
