// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-white text-xl font-bold">EduVerify</div>

        <nav className="hidden md:flex gap-6 items-center text-gray-300">
          <Link href="#features" className="hover:text-white">Features</Link>
          <Link href="/student/dashboard" className="hover:text-white">Student</Link>
          <Link href="/institution/issue" className="hover:text-white">Institution</Link>
        </nav>

        {/* Mobile: simple menu button (kept minimal) */}
        <div className="md:hidden text-gray-300">☰</div>
      </div>
    </header>
  );
}
