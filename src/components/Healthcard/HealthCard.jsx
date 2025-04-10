import React from "react";
import "./HealthCard.css";

const bodyParts = [
  {
    name: "Heart",
    image:
      "	https://pathkindwebsiteprod.blob.core.windows.net/websiteprod/assets/img/heart1.png",
  },
  {
    name: "Bone",
    image:
      "https://pathkindwebsiteprod.blob.core.windows.net/websiteprod/assets/img/bone.png",
  },
  {
    name: "Liver",
    image:
      "	https://pathkindwebsiteprod.blob.core.windows.net/websiteprod/assets/img/liver.png",
  },
  {
    name: "Kidneys",
    image:
      "https://pathkindwebsiteprod.blob.core.windows.net/websiteprod/assets/img/kidney_0.png",
  },
  {
    name: "Thyroid",
    image:
      "https://pathkindwebsiteprod.blob.core.windows.net/websiteprod/assets/img/thyroid.png",
  },
];

const HealthCard = () => {
  return (
    <>
      <div className="HealthCard-Headding">
        <h1>Test by Health Risks</h1>
        <button>View All</button>
      </div>
      <div className="cards-container">
        {bodyParts.map((part, index) => (
          <div className="cards" key={index}>
            <div className="image-circle">
              <img src={part.image} alt={part.name} />
            </div>
            <p>{part.name}</p>
            <button>Know More</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default HealthCard;
