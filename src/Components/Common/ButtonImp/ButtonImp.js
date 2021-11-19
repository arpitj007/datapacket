import React from "react";
import { Link } from "react-router-dom";
import "./ButtonImp.css";
function ButtonImp(props) {
  const { text, color, to } = props;
  const style = { color: color };
  return (
    <div className="button-wrapper">
      <Link className="button-atag" to={to}>
        <span className="button-span" style={{ style }}>
          {text}
        </span>
      </Link>
    </div>
  );
}

export default ButtonImp;
