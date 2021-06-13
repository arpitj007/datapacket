import React from "react";
import { locationList } from "./LocationList";
import "./LocationSelector.css";
function LocationSelector() {
  const location = locationList.map((location, index) => {
    return (
      <option key={index} className="location-option" value={location.code}>
        {location.location}
      </option>
    );
  });
  return (
    <div className="location-selector">
      <select className="location-select" name="locations" id="locations">
        {location.length > 0 ? (
          location
        ) : (
          <option className="location-option">No location Available</option>
        )}
      </select>
    </div>
  );
}

export default LocationSelector;
