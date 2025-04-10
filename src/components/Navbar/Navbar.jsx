import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const [icon, setIcon] = useState(false);
  // const handleClick = () => {
  //   setIcon(!icon);
  // };
  return (
    <div className="Navbar">
      <Link to="/foodweb">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className={icon ? "Navbar-menu" : "Navbar-menu close"}>
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <Link
          to="/Tests"
          onClick={() => setMenu("Tests")}
          className={menu === "Menu" ? "active" : ""}
        >
          Tests
        </Link>
        <Link
          to="/About"
          onClick={() => setMenu("About")}
          className={menu === "Contact" ? "active" : ""}
        >
          About
        </Link>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </ul>
    </div>
  );
};
export default Navbar;
