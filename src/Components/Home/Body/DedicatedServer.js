import React from "react";
import ButtonImp from "../../Common/ButtonImp/ButtonImp";

function DedicatedServer() {
  return (
    <div className="home-dedicated-server">
      <h2 className="home-dedicated-server-heading">Dedicated Server</h2>
      <p className="home-dedicated-server-text">
        Fully customizable bare-metal servers with fast provisioning times.
      </p>
      <div className="home-dedicated-server-data">
        <div className="home-dedicated-server-mini">
          <h3 className="home-dedicated-server-mini-heading">
            4-hour deployments
          </h3>
          <p className="home-dedicated-server-mini-text">
            Any in-stock server is provisioned within 4 hours, no matter the
            location. With on‑demand configurations, we keep the waiting time
            down to a minimum and always keep you up‑to‑date about the delivery
            progress.
          </p>
          <ButtonImp color="red" text="Deploy now" />
        </div>
        <img
          className="home-dedicated-server-mini-img"
          src="https://www.datapacket.com/_next/static/images/delivery-1446.2c26d74f.webp"
          alt="dedicated-server"
        />
      </div>
      <div className="home-dedicated-server-data">
        <img
          className="home-dedicated-server-mini-img"
          src="https://www.datapacket.com/_next/static/images/delivery-1446.2c26d74f.webp"
          alt="dedicated-server"
        />
        <div className="home-dedicated-server-mini">
          <h3 className="home-dedicated-server-mini-heading">
            4-hour deployments
          </h3>
          <p className="home-dedicated-server-mini-text">
            Any in-stock server is provisioned within 4 hours, no matter the
            location. With on‑demand configurations, we keep the waiting time
            down to a minimum and always keep you up‑to‑date about the delivery
            progress.
          </p>
          <ButtonImp text="Deploy now" />
        </div>
      </div>
    </div>
  );
}

export default DedicatedServer;
