import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="healthcare-container">
      <section className="vision-section">
        <h2>Vision</h2>
        <p>
          To be a leading healthcare provider offering 360°, patient-centered
          care that is accessible, innovative, and compassionate, ensuring
          better health outcomes for all.
        </p>
      </section>

      <section className="objectives-section">
        <h2>Objectives</h2>
        <ul>
          <li>
            To offer 360-degree healthcare solutions, covering consultation,
            diagnostics, treatment, and follow-up.
          </li>
          <li>
            To ensure affordable, accessible, and high-quality medical care for
            all.
          </li>
          <li>
            To build a network of healthcare professionals dedicated to
            excellence.
          </li>
          <li>
            To integrate digital health solutions for seamless patient
            experiences.
          </li>
          <li>
            To establish elderly care and home healthcare services, ensuring
            dignity and well-being for senior citizens.
          </li>
        </ul>
      </section>

      <section className="mission-section">
        <h2>Mission</h2>
        <ul>
          <li>
            <strong>Comprehensive Healthcare:</strong> Provide a full spectrum
            of healthcare services under one roof, from prevention to treatment
            and rehabilitation.
          </li>
          <li>
            <strong>Patient-Centric Approach:</strong> Offer compassionate,
            personalized care that prioritizes the well-being of every
            individual.
          </li>
          <li>
            <strong>Innovative & Accessible Solutions:</strong> Leverage
            technology to enhance healthcare delivery, making quality care more
            convenient and efficient.
          </li>
          <li>
            <strong>Home & Elderly Care Excellence:</strong> Extend professional
            healthcare services to homes, ensuring dignity and comfort for
            elderly and homebound patients.
          </li>
          <li>
            <strong>Community Health & Wellness:</strong> Promote awareness,
            education, and preventive healthcare to build a healthier society.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
