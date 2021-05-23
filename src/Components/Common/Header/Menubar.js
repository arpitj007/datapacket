import React from "react";
import logo from "../../../logo-100gbps.png";
import "./Menubar.css";
import MenuItems from "./MenuItems";
function Menubar() {
  return (
    <div className="menubar">
      <div className="menubar-left">
        <img className="menubar-logo" src={logo} alt="logo" />
        <MenuItems />
      </div>
      <div className="menubar-right"></div>
    </div>
  );
}

export default Menubar;
