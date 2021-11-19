import React from "react";
import "./body.css";

function GlobalNetwork() {
  return (
    <div className="global-network">
      <h2 className="heading heading-global">60 Tbps+ global network</h2>
      <p className="heading-text global-heading-text">
        DataPacket’s global network is designed and operated to ensure
        sustainably low latencies, zero packet loss, and no saturation –
        especially during peak times.
      </p>
      <div className="global-params">
        <div className="global-param">
          <h2 className="global-param-top">Up to 80GE</h2>
          <h6 className="global-param-bottom">uplink per server</h6>
        </div>
        <div className="global-param">
          <h2 className="global-param-top">14</h2>
          <h6 className="global-param-bottom">transit providers</h6>
        </div>
        <div className="global-param">
          <h2 className="global-param-top">5000+</h2>
          <h6 className="global-param-bottom">deployed servers</h6>
        </div>
      </div>
    </div>
  );
}

export default GlobalNetwork;
