import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
// import Contact from "../Contact/Contact";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const [icon, setIcon] = useState(false);

  return (
    <div className="Navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>

      {/* Search bar */}

      <div className="navbar-search-container">
        <FaSearch className="navbar-search-icon" />
        <input type="text" className="navbar-search" placeholder="Search..." />
      </div>

      <ul className={icon ? "Navbar-menu" : "Navbar-menu close"}>
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <Link
          to="/AboutUs"
          onClick={() => setMenu("AboutUs")}
          className={menu === "AboutUs" ? "active" : ""}
        >
          About Us
        </Link>
        <Link
          to="/Contact"
          onClick={() => {
            setMenu("Contact");
          }}
          className={menu === "Contact" ? "active" : ""}
        >
          Contact
        </Link>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </ul>
    </div>
  );
};

export default Navbar;
