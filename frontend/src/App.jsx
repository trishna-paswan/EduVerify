import React from "react";
import { Spotlight } from "./Spotlight";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <Spotlight className="spotlight" fill="white" />

        <div className="hero-content">
          <h1>Master The Art Of Verification</h1>
          <p>
            Secure, instant and tamper-proof verification of documents using
            Blockchain, AI, and DigiLocker.
          </p>
          <button className="explore-btn">🚀 Explore Features</button>
        </div>
      </section>
    </div>
  );
};

export default App;
