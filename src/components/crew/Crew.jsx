import React, { useState } from "react";
import crewBg from "../../assets/crew/background-crew-desktop.jpg";
import data from "../../data.json";
import "./Crew.css";

// Import images from the src/assets folder
import douglasHurleyPng from "../../assets/crew/image-douglas-hurley.png";
import markShuttleworthPng from "../../assets/crew/image-mark-shuttleworth.png";
import victorGloverPng from "../../assets/crew/image-victor-glover.png";
import anoushehAnsariPng from "../../assets/crew/image-anousheh-ansari.png";

const imageMap = {
  "Douglas Hurley": douglasHurleyPng,
  "Mark Shuttleworth": markShuttleworthPng,
  "Victor Glover": victorGloverPng,
  "Anousheh Ansari": anoushehAnsariPng,
};

const Crew = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="crew-container">
      <img src={crewBg} className="crewBg" alt="background" />
      <div className="crew-header">02 meet your crew</div>

      <div className="crew-main-content">
        {/* Crew member details */}
        <div className="crew-info">
          <p className="crew-role">{data.crew[currentIndex].role}</p>
          <h2 className="crew-name">{data.crew[currentIndex].name}</h2>
          <p className="crew-bio">{data.crew[currentIndex].bio}</p>
        </div>

        {/* Crew member image */}
        <div className="crew-image">
          <img
            src={imageMap[data.crew[currentIndex].name]}
            alt={data.crew[currentIndex].name}
            className="crew-photo"
          />
        </div>
      </div>

      {/* Carousel Indicator */}
      <div className="carousel-indicators">
        {data.crew.map((_, index) => (
          <span
            key={index}
            className={`indicator-dot ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => handleIndicatorClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Crew;
