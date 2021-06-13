import React from "react";
import ButtonImp from "../ButtonImp/ButtonImp";
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
      <ButtonImp text="Get started" />
    </div>
  );
}

export default MenuItems;
