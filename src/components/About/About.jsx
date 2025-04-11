import React from "react";
import "./About.css";
function About() {
  return (
    <section className="about-container">
      <div className="about-content">
        <h2>🏥 About Buddy360Care</h2>
        <p>
          <strong>Buddy360Care</strong> is a one-stop solution for a wide range
          of healthcare and essential home services – all delivered right at
          your doorstep.
        </p>
        <p>
          We understand that <strong>comfort, care, and convenience</strong> are
          the key needs of today’s families. Whether it’s elderly care,
          diagnostic tests, doctor visits, or essential home services like AC
          repair, plumbing, and electrical work – Buddy360Care brings
          professional, reliable, and timely services directly to your home.
        </p>

        <div className="offerings">
          <h3>💡 What We Offer:</h3>
          <ul>
            <li>
              <strong>Healthcare Services at Home –</strong> Doctor Visits, Lab
              Tests, Physiotherapy, ECG, Nursing Care, and more.
            </li>
            <li>
              <strong>Home Assistance Services –</strong> Electrician, Plumber,
              Carpenter, AC Services, CCTV Installation, Pest Control, and more.
            </li>
            <li>
              <strong>Affordable & Accessible –</strong> Transparent pricing and
              quality service you can trust.
            </li>
            <li>
              <strong>Convenient Booking –</strong> Book services anytime
              through our App, website, or phone.
            </li>
          </ul>
        </div>

        <p className="mission">
          Our mission is to simplify daily life and healthcare for everyone –
          from busy working families to senior citizens who need compassionate,
          doorstep support.
        </p>
      </div>
    </section>
  );
}

export default About;
