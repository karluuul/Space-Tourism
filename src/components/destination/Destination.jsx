import React, { useState } from "react";
import data from "../../data/data.json";
import destBg from "../../assets/destination/background-destination-desktop.jpg";
import "./Destination.css";

const Destination = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(data.destinations[0]); 

  const handlePlanetSelect = (planet) => {
    setSelectedPlanet(planet);
  };

  return (
    <div className="dest-container">
      <img src={destBg} className="destBg" alt="background" />
      <div className="dest-header">01 Pick Your Destination</div>
      <div className="dest-main-content">
        <div className="dest-navbar">
          <nav className="dest-navlinks">
            <ul>
              {data.destinations.map((planet) => (
                <li key={planet.name}>
                  <a 
                    href="#"
                    onClick={() => handlePlanetSelect(planet)} 
                    className="planet-link"
                  >
                    {planet.name.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="planet-details">
          <h2>{selectedPlanet.name}</h2>
          <img src={selectedPlanet.images.webp} alt={selectedPlanet.name} />
          <p>{selectedPlanet.description}</p>
          <p><strong>Distance:</strong> {selectedPlanet.distance}</p>
          <p><strong>Travel Time:</strong> {selectedPlanet.travel}</p>
        </div>
      </div>
    </div>
  );
};

export default Destination;
