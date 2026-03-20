// src/pages/StateDetails.jsx
import React from "react";
import { touristPlaces } from "./TouristData";
import './StateDetails.css'
import { useParams } from "react-router-dom";

const StateDetails = () => {
  const { id } = useParams();
  const stateData = touristPlaces.find((state) => state.id === id);

  if (!stateData) return <h2>State not found!</h2>;

  return (
    <div className="tourist-data">
      <h1 className="tourist-data-h1">{stateData.state}</h1>
      <img src={stateData.image} alt={stateData.state} />
      <p className="tourist-data-p1"><strong>Capital:</strong> {stateData.capital}</p>
      <p className="tourist-data-p1"><strong>Famous For:</strong> {stateData.famousFor}</p>
      <p className="tourist-data-p1"><strong>Places:</strong> {stateData.places.join(", ")}</p>
      <p className="tourist-data-p1"><strong>Information:</strong>{stateData.description}</p>
      <p className="tourist-data-p1"><strong>Destination:</strong> {stateData.tourHighlights.destination}</p>
      <p className="tourist-data-p1"><strong>Duration:</strong> {stateData.tourHighlights.duration}</p>
      <p className="tourist-data-p1"><strong>Best Time to Visit:</strong> {stateData.tourHighlights.bestTime}</p>

      
    </div>
  );
};

export default StateDetails;
