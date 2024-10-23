import React, { useState } from "react";
import data from "../../data/data.json";
import destBg from "../../assets/destination/background-destination-desktop.jpg";
import "./Destination.css";
import moonImage from "../../assets/destination/image-moon.png";
import marsImage from "../../assets/destination/image-mars.png";
import europaImage from "../../assets/destination/image-europa.png";
import titanImage from "../../assets/destination/image-titan.png";

const Destination = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(data.destinations[0]); 

  const handlePlanetSelect = (planet) => {
    setSelectedPlanet(planet);
  };
  
  const imageMap = {
    Moon: moonImage,
    Mars: marsImage,
    Europa: europaImage,
    Titan: titanImage,
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
          <img src={imageMap[selectedPlanet.name]} alt={selectedPlanet.name} />
          <p>{selectedPlanet.description}</p>
          <p><strong>Distance:</strong> {selectedPlanet.distance}</p>
          <p><strong>Travel Time:</strong> {selectedPlanet.travel}</p>
        </div>
      </div>
    </div>
  );
};

export default Destination;
