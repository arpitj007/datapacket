import React from "react";
import "./ButtonImp.css";
function ButtonImp(props) {
  const style = { color: props.color };
  return (
    <div className="button-wrapper">
      <a className="button-atag" href="/">
        <span className="button-span" style={{ style }}>
          {props.text}
        </span>
      </a>
    </div>
  );
}

export default ButtonImp;
