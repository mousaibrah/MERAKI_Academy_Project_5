// LandingPage.js
import React from "react";
import "./Home.css";
import Features from "./Features";
import HowItWorks from "./HowItWorks";

import AboutUs from "./AboutUs";

import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleExploreButtonClick = () => {
    navigate("/home");
  };
  return (
    <>
      <div className="landing-page">
        <section className="hero-section">
          <div className="hero-text">
            <h1>Welcome to ClassMate Finder</h1>
            <button
              className="explore-button"
              onClick={handleExploreButtonClick}
            >
              Explore Schools
            </button>
          </div>
        </section>
      
        <AboutUs />
        <Features />
        <HowItWorks />
        <footer className="footer">
          <p>&copy; 2023 Your Website. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
