import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-black/80 text-white rounded-full px-10 py-4 shadow-lg z-50">
      <ul className="flex items-center gap-10 relative">
        <li>
          <a href="/" className="hover:text-gray-300 transition">Home</a>
        </li>

        {/* Dropdown */}
        <li className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="hover:text-gray-300 transition"
          >
            Solutions ▼
          </button>
          {open && (
            <ul className="absolute top-12 left-1/2 -translate-x-1/2 bg-black/90 rounded-xl shadow-lg py-3 px-4 w-52 text-left space-y-2">
              <li><a href="#blockchain" className="block hover:text-purple-400">Blockchain Validation</a></li>
              <li><a href="#signature" className="block hover:text-purple-400">Digital Signature + QR</a></li>
              <li><a href="#ai" className="block hover:text-purple-400">AI Forgery Detection</a></li>
              <li><a href="#digilocker" className="block hover:text-purple-400">DigiLocker Integration</a></li>
              <li><a href="#analytics" className="block hover:text-purple-400">Fraud Analytics</a></li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/login" className="hover:text-gray-300 transition">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default function Home() {
  return (
    <div className="w-full bg-black text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black via-gray-900 to-black">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold mb-6"
        >
          EduVerify
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10"
        >
          The future of <span className="font-semibold text-white">tamper-proof credential verification</span> using <span className="text-purple-400">Blockchain</span>, <span className="text-yellow-400">AI</span>, and <span className="text-blue-400">DigiLocker</span>.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link
            to="/login"
            className="px-8 py-4 border border-white rounded-full hover:bg-white hover:text-black transition text-lg font-medium"
          >
            🚀 Explore EduVerify
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
