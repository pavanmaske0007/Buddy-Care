import React, { useState } from "react";
import "./Home.css";
import About from "../About/About";
import PriceCard from "../Pricecard/PriceCard";
import HealthCard from "../Healthcard/HealthCard";
import Healthcare from "../HealthcareServices/Healthcare";
import Download from "../Downlod/Download";
function Home() {
  const [category, setCategory] = useState("All");
  return (
    <div className="home-container">
      <Healthcare />
      <HealthCard />
      <PriceCard />
      <Download />
      <About />
    </div>
  );
}
export default Home;
