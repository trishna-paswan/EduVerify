import React from "react";
import "./index.css";
import Navbar from "./Navbar"; 
import Spotlight from "./Spotlight";

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

  // ✅ Hero section
  const Hero = () => (
    <section className="hero">
      <Spotlight className="spotlight-animation" fill="white" />
      <h1>Master The Art Of Verification</h1>
      <p>
        The future of tamper-proof credential verification using Blockchain, AI, and DigiLocker.
      </p>
      <button>🚀 Explore Now</button>
    </section>
  );

  // ✅ Features section
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

  // ✅ Only one return
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
    </>
  );
}
