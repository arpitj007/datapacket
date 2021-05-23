import React from "react";
import MenuItem from "./MenuItem";
import "./MenuItems.css";
function MenuItems() {
  return (
    <div className="menu-items-list">
      <MenuItem name="Pricing" />
      <MenuItem name="Why 100GBPS" />
      <MenuItem name="Locations" />
      <MenuItem name="Company" />
      <MenuItem name="Case Studies" />
    </div>
  );
}

export default MenuItems;
