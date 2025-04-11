import React from "react";
import { assets } from "../../assets/assets";
import "./PriorityCard.css";

const PriorityCard = () => {
  return (
    <div className="health-section">
      <div className="health-text">
        <h2>Your Health, Our Priority.</h2>
        <p>Book trusted at-home medical services in just a few seconds.</p>
      </div>
      <div className="health-image">
        <img src={assets.Care} alt="" />
      </div>
    </div>
  );
};

export default PriorityCard;
