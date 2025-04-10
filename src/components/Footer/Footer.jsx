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
            <p>
              Call Us: 75000 75111 | Mail Us: care@buddycare360labs.com |
              Radiology Test Available only in Kolkata & Gurgaon
            </p>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; 2025 Buddy-Care-360 Diagnostics Pvt. Ltd. All Rights
              Reserved | Unsubscribe
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
