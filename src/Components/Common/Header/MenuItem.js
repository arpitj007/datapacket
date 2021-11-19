import React, { useEffect, useState } from "react";
import "./MenuItem.css";
import { Link } from "react-router-dom";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import DropdownMenu from "./DropdownMenu/DropdownMenu";

function MenuItem(props) {
  let { name, isDropdown } = props;
  name = name.replace(" ", "-");
  const [isHover, setIsHover] = useState(false);
  const [dropDownIcon, setDropDownIcon] = useState("RiArrowDropDownLine");
  useEffect(() => {
    if (isHover) {
      return setDropDownIcon("RiArrowDropUpLine");
    } else {
      return setDropDownIcon("RiArrowDropDownLine");
    }
  }, [isHover]);
  return (
    <div className="menu-item">
      <Link to={name}>
        <button
          onMouseLeave={() => setIsHover(false)}
          onMouseEnter={() => setIsHover(true)}
          className="menu-item-button"
        >
          {props.name}{" "}
          <span>
            {" "}
            {isDropdown ? (
              dropDownIcon === "RiArrowDropUpLine" ? (
                <RiArrowUpSLine />
              ) : (
                <RiArrowDownSLine />
              )
            ) : (
              ""
            )}
          </span>
          {isDropdown && isHover ? <DropdownMenu /> : ""}
        </button>
      </Link>
    </div>
  );
}

export default MenuItem;
