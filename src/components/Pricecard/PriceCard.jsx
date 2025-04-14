// App.js or CardsRow.js
import React, { useRef } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import "./PriceCard.css";

const testData = [
  {
    id: 1,
    img: assets.Tiffin,
    title: "Daily Tiffin ",
    text: "Fresh, healthy meals delivered daily to your doorstep.",
  },
  {
    id: 2,
    img: assets.HomeMade,
    title: "Home made",
    text: "Authentic homemade food prepared with care and hygiene.",
  },
  {
    id: 3,
    img: assets.Driver,
    title: " Driver",
    text: "Reliable drivers available for daily, hourly, or long-distance travel.",
  },
  {
    id: 4,
    img: assets.Helperr,
    title: "Helper",
    text: "Skilled domestic helpers for cleaning, cooking, and other home tasks.",
  },
  {
    id: 5,
    img: assets.Electrician,
    title: "Electrician",
    text: "Certified electricians for safe and efficient electrical work.",
  },
  {
    id: 6,
    img: assets.Plumberr,
    title: "Plumber",
    text: "Quick plumbing solutions for leakage, fittings, and maintenance.",
  },
  {
    id: 7,
    img: assets.Grocery,
    title: "Grocery",
    text: "Essential groceries delivered fast and fresh to your home.",
  },
  {
    id: 8,
    img: assets.PolicyAgent,
    title: "Police Agent",
    text: "Assistance with police verification, documentation, and related tasks.",
  },
  {
    id: 9,
    img: assets.LegalAdvisor,
    title: "Legal Advisor",
    text: "Expert legal guidance for personal, property, and civil matters.",
  },
  {
    id: 10,
    img: assets.FinancialAdvisor,
    title: "Financial Advisor",
    text: "Professional advice on investments, insurance, and tax planning.",
  },
  {
    id: 11,
    img: assets.Esuvida,
    title: "E-Suvidha",
    text: "Help with online government services like PAN, Aadhar, and bill payments.",
  },
  {
    id: 12,
    img: assets.Pooja,
    title: "Puja Samagri",
    text: "All puja items and kits available for religious ceremonies.",
  },
  {
    id: 13,
    img: assets.SocialWork,
    title: "Social Worker ",
    text: "Support for community issues, elderly care, and social causes.",
  },
  {
    id: 14,
    img: assets.RealState,
    title: "Real Estate",
    text: "Buy, sell, or rent properties with trusted real estate experts.",
  },
  {
    id: 15,
    img: assets.PestControl,
    title: "Pest Control",
    text: "Safe and effective pest control services for homes and offices.",
  },
  {
    id: 16,
    img: assets.Pujari,
    title: "Pujari",
    text: "Book experienced priests for all religious rituals and pujas.",
  },
  {
    id: 17,
    img: assets.Key,
    title: "Key maker",
    text: "Fast and precise key duplication and lock repair services.",
  },
  {
    id: 18,
    img: assets.Carpenter,
    title: "Carpenter ",
    text: "Woodwork solutions including furniture repair and custom designs.",
  },
  {
    id: 19,
    img: assets.Garage,
    title: "Garage",
    text: "Vehicle servicing and repairs by trained mechanics.",
  },
  {
    id: 20,
    img: assets.PetCare,
    title: "Pet Care",
    text: "Grooming, walking, and veterinary care for your beloved pets.",
  },
  {
    id: 21,
    img: assets.Gavandi,
    title: "Gavandi",
    text: "Expert masonry work for construction, renovation, and repairs.",
  },
  {
    id: 22,
    img: assets.Barber,
    title: "Barber",
    text: "At-home haircuts and grooming services by professional barbers.",
  },
];

const PriceCard = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") current.scrollLeft -= 300;
    else current.scrollLeft += 300;
  };

  return (
    <div className="app-container ">
      <div className=" card-headding">
        <h1>Other Services </h1>
        <button onClick={() => navigate("/ViewAllPriceCard")}>View All</button>
      </div>
      <span className="arrow-button left" onClick={() => scroll("left")}>
        &#10094;
      </span>
      <div className="card-row" ref={scrollRef}>
        {testData.map((test) => (
          <div className="cardd" key={test.id}>
            <h2>{test.title}</h2>
            <img src={test.img} alt={test.title} />
            <p>{test.text}</p>
            <button className="read-more">Read More</button>
            <button className="book-now">Book Now</button>
          </div>
        ))}
      </div>
      <span className="arrow-button right" onClick={() => scroll("right")}>
        &#10095;
      </span>
    </div>
  );
};

export default PriceCard;
