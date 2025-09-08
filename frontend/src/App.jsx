import React from "react";
import "./index.css";

// Spotlight Component
const Spotlight = ({ className = "", fill = "white" }) => (
  <svg
    className={`spotlight ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 3787 2842"
    fill="none"
  >
    <g filter="url(#filter)">
      <ellipse
        cx="1924.71"
        cy="273.501"
        rx="1924.71"
        ry="273.501"
        transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
        fill={fill}
        fillOpacity="0.21"
      ></ellipse>
    </g>
    <defs>
      <filter
        id="filter"
        x="0.860352"
        y="0.838989"
        width="3785.16"
        height="2840.26"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feGaussianBlur
          stdDeviation="151"
          result="effect1_foregroundBlur"
        ></feGaussianBlur>
      </filter>
    </defs>
  </svg>
);

export default function App() {
  const features = [
    { title: "Blockchain Validation", description: "Store document hashes on blockchain for instant verification." },
    { title: "Digital Signature + QR", description: "Sign certificates digitally, generate QR codes for verification." },
    { title: "Unified Portal", description: "Web & mobile app for students, institutions, and recruiters." },
    { title: "AI Forgery Detection", description: "Detect tampering using ML: font mismatch, pixels, seals." },
    { title: "DigiLocker Integration", description: "Fetch official government-verified documents via DigiLocker APIs." },
    { title: "Offline Validation", description: "Verify documents offline with QR + hash; sync later." },
    { title: "RBAC", description: "Assign roles: Student, Institution, Recruiter, Admin." },
    { title: "Analytics Dashboard", description: "Track verification attempts & detect fraud trends." },
  ];

  const Navbar = () => (
    <nav className="navbar">
      <span className="logo">EduVerify</span>
      <div>
        <a href="/">Home</a>
        <a href="#features">Features</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );

  const Hero = () => (
    <section className="hero">
      {/* Gradient Blur Backgrounds */}
      <div className="blur-circle blur-purple"></div>
      <div className="blur-circle blur-pink"></div>
      <div className="blur-circle blur-blue"></div>
  
      {/* Spotlight SVG */}
      <Spotlight className="spotlight-animation" fill="white" />
  
      <h1>Master The Art Of Verification</h1>
      <p>
        The future of tamper-proof credential verification using Blockchain, AI, and DigiLocker.
      </p>
      <button>🚀 Explore Features</button>
    </section>
  );
  

  const Features = () => (
    <section className="features" id="features">
      <h2>Features</h2>
      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
    </>
  );
}
