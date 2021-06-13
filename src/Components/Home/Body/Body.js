import React from "react";
import DedicatedServer from "./DedicatedServer";
import Features from "./Features";
import GlobalNetwork from "./GlobalNetwork";
import Team from "./Team";
import Testimonials from "./Testimonials";
import "./body.css";
function Body() {
  return (
    <div className="body">
      <GlobalNetwork />
      <Features />
      <Team />
      <Testimonials />
      <DedicatedServer />
    </div>
  );
}

export default Body;
