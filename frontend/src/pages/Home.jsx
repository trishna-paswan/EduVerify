import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center text-white text-center px-6">
        <div>
          <h1 className="text-5xl font-extrabold mb-4">
            Welcome to Authenticity Validator
          </h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Secure, reliable, and fast student verification made easy.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/login"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
            >
              Get Started
            </Link>
            <a
              href="#features"
              className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="bg-white text-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 shadow-lg rounded-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-3">🔒 Secure</h3>
            <p>
              We use the latest encryption methods to keep your data protected.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-3">⚡ Fast</h3>
            <p>
              Verification processes are quick and efficient, saving you time.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-3">✅ Reliable</h3>
            <p>
              Trusted by students and institutions for accurate results every
              time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        <p>© {new Date().getFullYear()} Authenticity Validator. All rights reserved.</p>
      </footer>
    </div>
  );
}
