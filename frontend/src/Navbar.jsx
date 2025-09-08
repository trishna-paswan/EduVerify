import React, { useState } from "react";

// Hovered Link
const HoveredLink = ({ href, children }) => (
  <a
    href={href}
    className="px-4 py-2 hover:bg-gray-800 hover:text-white transition-all rounded-lg"
  >
    {children}
  </a>
);

// Menu Item
const MenuItem = ({ item, active, setActive, children }) => (
  <div
    onMouseEnter={() => setActive(item)}
    onMouseLeave={() => setActive(null)}
    className="relative"
  >
    <button className="px-4 py-2 text-white hover:text-yellow-400 transition-all">
      {item}
    </button>

    {active === item && children && (
      <div className="absolute top-full left-0 mt-2 bg-black/90 rounded-lg shadow-lg p-4 space-y-2 min-w-[200px] z-50">
        {children}
      </div>
    )}
  </div>
);

const Navbar = ({ className = "" }) => {
  const [active, setActive] = useState(null);

  return (
    <nav
      className={`fixed top-5 inset-x-0 max-w-4xl mx-auto flex justify-between items-center 
      bg-black/70 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg z-50 ${className}`}
    >
      {/* Logo */}
      <span className="text-2xl font-bold text-yellow-400">EduVerify</span>

      {/* Menu */}
      <div className="flex space-x-6">
        <MenuItem item="Home" active={active} setActive={setActive}>
          <HoveredLink href="/">Dashboard</HoveredLink>
          <HoveredLink href="/about">About Us</HoveredLink>
        </MenuItem>

        <MenuItem item="Features" active={active} setActive={setActive}>
          <HoveredLink href="#features">Blockchain Validation</HoveredLink>
          <HoveredLink href="#features">AI Forgery Detection</HoveredLink>
          <HoveredLink href="#features">Analytics Dashboard</HoveredLink>
        </MenuItem>

        <MenuItem item="Contact" active={active} setActive={setActive}>
          <HoveredLink href="/contact">Contact Us</HoveredLink>
          <HoveredLink href="/support">Support</HoveredLink>
        </MenuItem>

        <a
          href="/login"
          className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
