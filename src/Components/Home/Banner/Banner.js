import React from "react";
import ButtonImp from "../../Common/ButtonImp/ButtonImp";
import "./Banner.css";
import LocationSelector from "./LocationSelector";
import worldMap from "../../Common/SVG/WorldMap.svg";
import Body from "../Body/Body";
function Banner() {
  return (
    <>
      <div className="banner-full">
        <div className="banner-home">
          <div className="banner-home-left">
            <h1 className="heading banner-heading">
              High-bandwidth dedicated servers
            </h1>
            <p className="heading-text banner-text">
              840 servers available in 32 global locations, with 4‑hour
              delivery.
            </p>
            <ButtonImp text="Know why 100gbps" />
          </div>
          <div className="banner-home-right">
            <LocationSelector />
            <img src={worldMap} alt="" />
          </div>
        </div>
      </div>
      <Body />
    </>
  );
}

export default Banner;
