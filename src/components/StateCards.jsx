// src/components/StateCards.jsx
import React from "react";
import { Link } from "react-router-dom";
import { touristPlaces } from "../pages/TouristData";
import "./StateCards.css"; // Style as you like

const StateCards = () => {
  return (
    <div className="card-container">
      <h2 className="card-heading">Explore Indian States</h2>
      <div className="card-grid">
        {touristPlaces.map((place) => (
          <Link key={place.id} to={`/state/${place.id}`} className="card">
            <img src={place.image} alt={place.state} className="card-image" />
            <div className="card-overlay">
              <h3>{place.state}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StateCards;
