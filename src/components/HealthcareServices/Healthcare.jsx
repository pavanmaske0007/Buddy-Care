import React, { useRef } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import "./Healthcare.css";
// import AllHealthcareCards from "../Pages/AllHealthCareCards";

const cards = [
  {
    id: 1,
    img: assets.HK,
    title: "Basic Life Support",
    text: "Immediate medical response services including CPR and emergency care by trained professionals.",
  },
  {
    id: 2,
    img: assets.Aed,
    title: "Doctor Consultation",
    text: "Connect with experienced doctors for in-person or virtual health consultations.",
  },
  {
    id: 3,
    img: assets.Attendant,
    title: "Home Care Nursing",
    text: "Professional nursing care at home for post-surgery recovery, chronic illness, or elderly support.",
  },
  {
    id: 4,
    img: assets.Pharmacy,
    title: "Pharmacy",
    text: "Wide range of genuine medicines and healthcare products with quick and safe delivery.",
  },
  {
    id: 5,
    img: assets.CPR,
    title: "Pathology ",
    text: "Accurate lab tests and diagnostics with home sample collection and timely reports.",
  },
  {
    id: 6,
    img: assets.Brother,
    title: "Ecg",
    text: "On-demand ECG tests at home with expert technicians and fast reporting.",
  },
  {
    id: 7,
    img: assets.XRay,
    title: "X-ray",
    text: "Portable X-ray services at your doorstep with high-quality imaging and care.",
  },
  {
    id: 8,
    img: assets.Physiotherapist,
    title: "Physiotherapist",
    text: "Skilled physiotherapy sessions at home to help you recover mobility and strength.",
  },
  {
    id: 9,
    img: assets.Ambulance,
    title: "Ambulance",
    text: "24/7 ambulance service for emergency and non-emergency medical transport.",
  },
  {
    id: 10,
    img: assets.OldAgeHome,
    title: "Old Age Home",
    text: "Comfortable and safe living space for the elderly with personalized medical care.",
  },
  {
    id: 11,
    img: assets.SurgicalProduct,
    title: "Surgical product",
    text: "Trusted surgical and medical equipment for hospitals, clinics, and home use.",
  },
];

export default function ScrollingCards() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      if (direction === "left") {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="Container">
      <div className="card-heading">
        <div className="heading-center">
          <h1>Healthcare Services</h1>
        </div>
        <button
          onClick={() => navigate("/AllHealthcareCards")}
          className="view-all-btn"
        >
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
              <button className="read-more">Read More</button>
              <button className="book-now">Book Now</button>
            </div>
          ))}
        </div>
        <span className="scroll-button right" onClick={() => scroll("right")}>
          &#10095;
        </span>
      </div>
    </div>
  );
}
