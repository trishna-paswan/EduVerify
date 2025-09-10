// src/pages/index.tsx
import Spotlight from "../components/Spotlight";
import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import Link from "next/link";

export default function Home() {
  const features = [
    { title: "Blockchain Validation", desc: "Tamper-proof verification via on-chain hashes." },
    { title: "Digital Signatures + QR", desc: "Signed certificates and QR verification for offline use." },
    { title: "AI Forgery Detection", desc: "Image-forensics to detect tampered documents." },
    { title: "DigiLocker Pull", desc: "Import government-verified documents directly." },
    { title: "Offline QR Check", desc: "Validate without internet using cached public keys." },
    { title: "Role-based Access", desc: "Student / Institution / Recruiter flows with RBAC." },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative flex items-center justify-center text-center h-screen overflow-hidden">
        <Spotlight />
        <div className="hero-overlay" />

        <div className="z-20 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            EduVerify
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Verify academic credentials instantly — blockchain-backed signatures, AI forgery detection and DigiLocker integration.
          </p>

          {/* Explore button with rotating ring & dashed moving outline */}
          <div className="mt-10 flex justify-center">
            <div className="explore-wrap">
              <div className="explore-ring" />
              <Link href="#features" className="relative z-10 px-8 py-3 rounded-full bg-white/6 backdrop-blur-sm border border-white/10 text-white font-medium hover:bg-white hover:text-black transition">
                Explore Now
              </Link>

              <div className="explore-border z-30">
                <div className="dash" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wavy separator and features */}
      <section id="features" className="relative bg-gradient-to-b from-black to-slate-900 pt-4 pb-20">
        {/* Top wavy SVG */}
        <div className="w-full -mt-2">
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-20 fill-current text-black">
            <path d="M0,0 C150,80 350,80 540,40 C730,0 920,0 1100,40 C1280,80 1440,80 1440,80 L1440,120 L0,120 Z" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-8">
          <h2 className="text-3xl font-bold text-center mb-8">Why EduVerify?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <FeatureCard key={f.title} title={f.title} desc={f.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer text-gray-400 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-4">EduVerify — Academic Authenticity Validator</div>
          <div className="text-sm">© {new Date().getFullYear()} EduVerify. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
