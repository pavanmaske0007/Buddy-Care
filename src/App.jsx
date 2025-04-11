import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import AllHealthCareCards from "./components/Pages/AllHealthCareCards";
import ViewAllPriceCard from "./components/Pages/ViewAllPriceCard";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="App">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/AllHealthCareCards" element={<AllHealthCareCards />} />
          <Route path="/ViewAllPriceCard" element={<ViewAllPriceCard />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
