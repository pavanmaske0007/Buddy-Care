import React from "react";
import "./Download.css";
import { assets } from "../../assets/assets";

const Download = () => {
  return (
    <div className="download-app-container">
      <div className="image-container">
        <img
          src={assets.Mobile_Image}
          alt="Mobile App"
          className="mobile-image"
        />
      </div>
      <div className="content">
        <h2 className="title">Buddy-Care-360 Labs App Coming Soon...</h2>
        <p className="description">
          Download the app to book home collections, search for a specific test,
          <br />
          locate the nearest labs, and access health records, etc.
        </p>
        <div className="download-buttons">
          <img
            src="https://pathkindwebsiteprod.blob.core.windows.net/websiteprod/assets/img/google-play.png"
            alt="Google Play Store"
          />
          <img
            src="https://pathkindwebsiteprod.blob.core.windows.net/websiteprod/assets/img/App_Store.png"
            alt="Apple App Store"
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
