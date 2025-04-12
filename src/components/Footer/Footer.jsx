import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Get in Touch</h3>
          <ul>
            <li>Terms of Use</li>|<li>Disclaimer</li>|<li>Privacy Policy</li>
          </ul>
          <div className="footer-section-contact">
            <p>Call Us: 9223030360 | Mail Us: buddy360care@gmail.com</p>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Buddy-Care-360 | Unsubscribe</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
