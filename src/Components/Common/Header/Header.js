import React from "react";
import "./Header.css";
import Menubar from "./Menubar";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="header">
      <Navbar />
      <Menubar />
    </div>
  );
}

export default Header;
