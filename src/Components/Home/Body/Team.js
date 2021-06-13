import React, { useState } from "react";
import { teamText } from "./teamsText";
import { FcExpand } from "react-icons/fc";
function Team() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="body-team">
      <h2 className="body-team-heading">Get to know our teams</h2>
      <p className="body-team-text">130 members and counting</p>
      <div className="body-team-items">
        <div className="body-team-left">
          {teamText.map((item, index) => {
            return (
              <>
                <h4
                  key={index}
                  // onClick={() => handleClick(index)}
                  className="body-team-left-item-heading"
                >
                  {item.item}
                  <span className="body-team-left-item-dropdown">
                    <FcExpand />
                  </span>
                </h4>
                <p
                  style={{ display: "none" }}
                  key={index + "para"}
                  className="body-team-left-item-text"
                >
                  {item.text}
                </p>
              </>
            );
          })}
        </div>
        <div className="body-team-right">
          <img
            className="body-team-img"
            src="https://www.datapacket.com/_next/static/images/support-1764.e2221acf.webp"
            alt="teams-100gbps"
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
