import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import "../Pages/ViewAllPriceCard.css";

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

const ViewAll = () => {
  const navigate = useNavigate();
  return (
    <div className="viewallcontainers">
      <h1>All Services</h1>
      <div className="gridcontainers">
        {testData.map((item) => (
          <div className="gridcards" key={item.id}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <button onClick={() => navigate("/")}>Back To Home</button>
    </div>
  );
};

export default ViewAll;
