import React from "react";
import "./MenuItem.css";
function MenuItem(props) {
  return (
    <div className="menu-item">
      <button className="menu-item-button">{props.name}</button>
    </div>
  );
}

export default MenuItem;
