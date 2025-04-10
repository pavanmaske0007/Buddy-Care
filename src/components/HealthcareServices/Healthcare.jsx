import React, { useRef } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import "./Healthcare.css";
import AllHealthcareCards from "../Pages/AllHealthCareCards";

const cards = [
  {
    id: 1,
    img: assets.HK,
    title: "Basic Life Support",
    text: "12 Profiles, 15Tests and 87 Parameters. Gender : (Recommended for Male,Female) ",
  },
  {
    id: 2,
    img: assets.Aed,
    title: "Doctor Consultation",
    text: "15 Profiles, 19Tests and 87 Parameters. Gender : (Recommended for Male,Female)",
  },
  {
    id: 3,
    img: assets.Attendant,
    title: "Home Care Nursing",
    text: "15 Profiles, 19Tests and 87 Parameters. Gender : (Recommended for Male,Female)",
  },
  {
    id: 4,
    img: assets.Pharmacy,
    title: "Pharmacy",
    text: "15 Profiles, 19Tests and 87 Parameters. Gender : (Recommended for Male,Female)",
  },
  {
    id: 5,
    img: assets.CPR,
    title: "Pathology ",
    text: "15 Profiles, 19Tests and 87 Parameters. Gender : (Recommended for Male,Female)",
  },
  {
    id: 6,
    img: assets.Brother,
    title: "Ecg",
    text: "15 Profiles, 19Tests and 87 Parameters. Gender : (Recommended for Male,Female)",
  },
  {
    id: 7,
    img: assets.XRay,
    title: "X-ray",
    text: "15 Profiles, 19Tests and 87 Parameters. Gender : (Recommended for Male,Female)",
  },
  {
    id: 8,
    img: assets.Physiotherapist,
    title: "Physiotherapist",
    text: "15 Profiles, 19Tests and 87 Parameters. Gender : (Recommended for Male,Female)",
  },
  {
    id: 9,
    img: assets.Ambulance,
    title: "Ambulance",
    text: "15 Profiles, 19Tests and 87 Parameters. Gender : (Recommended for Male,Female)",
  },
  {
    id: 10,
    img: assets.OldAgeHome,
    title: "Old Age Home",
    text: "15 Profiles, 19Tests and 87 Parameters. Gender : (Recommended for Male,Female)",
  },
  {
    id: 11,
    img: assets.SurgicalProduct,
    title: "Surgical product",
    text: "15 Profiles, 19Tests and 87 Parameters. Gender : (Recommended for Male,Female)",
  },
];

export default function ScrollingCards() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust scroll speed
      if (direction === "left") {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <>
      <div className="card-hedding">
        <h1>Healthcare Services</h1>
        <button onClick={() => navigate("/AllHealthcareCards")}>
          View All
        </button>
      </div>
      <div className="scrolling-container">
        <span className="scroll-button left" onClick={() => scroll("left")}>
          &#10094;
        </span>
        <div className="scrolling-wrapper" ref={scrollRef}>
          {cards.map((card) => (
            <div key={card.id} className="card">
              <img src={card.img} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <button>Read More</button>
            </div>
          ))}
        </div>
        <span className="scroll-button right" onClick={() => scroll("right")}>
          &#10095;
        </span>
      </div>
    </>
  );
}
