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
    price: "$-00",
  },
  {
    id: 2,
    img: assets.HomeMade,
    title: "Home made",
    price: "$-00",
  },
  {
    id: 3,
    img: assets.Driver,
    title: " Driver",
    price: "$-00",
  },
  {
    id: 4,
    img: assets.Helperr,
    title: "Helper",
    price: "$-00",
  },
  {
    id: 5,
    img: assets.Electrician,
    title: "Electrician",
    price: "$-00",
  },
  {
    id: 6,
    img: assets.Plumberr,
    title: "Plumber",
    price: "$-00",
  },
  {
    id: 7,
    img: assets.Grocery,
    title: "Grocery",
    price: "$-00",
  },
  {
    id: 8,
    img: assets.PolicyAgent,
    title: "Police Agent",
    price: "$-00",
  },
  {
    id: 9,
    img: assets.LegalAdvisor,
    title: "Legal Advisor",
    price: "$-00",
  },
  {
    id: 10,
    img: assets.FinancialAdvisor,
    title: "Financial Advisor",
    price: "$-00",
  },
  {
    id: 11,
    img: assets.Esuvida,
    title: "E-Suvidha",
    price: "$-00",
  },
  {
    id: 12,
    img: assets.Pooja,
    title: "Puja Samagri",
    price: "$-00",
  },
  {
    id: 13,
    img: assets.SocialWork,
    title: "Social Worker ",
    price: "$-00",
  },
  {
    id: 14,
    img: assets.RealState,
    title: "Real Estate",
    price: "$-00",
  },
  {
    id: 15,
    img: assets.PestControl,
    title: "Pest Control",
    price: "$-00",
  },
  {
    id: 16,
    img: assets.Pujari,
    title: "Pujari",
    price: "$-00",
  },
  {
    id: 17,
    img: assets.Key,
    title: "Key maker",
    price: "$-00",
  },
  {
    id: 18,
    img: assets.Carpenter,
    title: "Carpenter ",
    price: "$-00",
  },
  {
    id: 19,
    img: assets.Garage,
    title: "Garage",
    price: "$-00",
  },
  {
    id: 20,
    img: assets.PetCare,
    title: "Pet Care",
    price: "$-00",
  },
  {
    id: 21,
    img: assets.Gavandi,
    title: "Gavandi",
    price: "$-00",
  },
  {
    id: 22,
    img: assets.Barber,
    title: "Barber",
    price: "$-00",
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
      {/* <div className="arrow left" onClick={() => scroll("left")}>
        &lt;
      </div> */}
      <span className="arrow-button left" onClick={() => scroll("left")}>
        &#10094;
      </span>
      <div className="card-row" ref={scrollRef}>
        {testData.map((test) => (
          <div className="cardd" key={test.id}>
            <h2>{test.title}</h2>
            <img src={test.img} alt={test.title} />
            <h3>{test.subtitle}</h3>
            <p>{test.desc}</p>
            <div className="priceBox">{test.price}</div>
          </div>
        ))}
      </div>
      {/* <div className="arrow right" onClick={() => scroll("right")}>
        &gt;
      </div> */}
      <span className="arrow-button right" onClick={() => scroll("right")}>
        &#10095;
      </span>
    </div>
  );
};

export default PriceCard;
