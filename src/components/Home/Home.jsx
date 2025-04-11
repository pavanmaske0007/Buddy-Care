import React, { useState } from "react";
import "./Home.css";
import About from "../About/About";
import PriceCard from "../Pricecard/PriceCard";
import PriorityCard from "../Prioritycard/PriorityCard";
import Healthcare from "../HealthcareServices/Healthcare";
import Download from "../Downlod/Download";
function Home() {
  const [category, setCategory] = useState("All");
  return (
    <div className="home-container">
      <Healthcare />
      <PriceCard />
      <PriorityCard />
      <Download />
      <About />
    </div>
  );
}
export default Home;
