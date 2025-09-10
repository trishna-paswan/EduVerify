import { Spotlight } from "@/components/Spotlight";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center">
        <Spotlight className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <h1 className="text-5xl font-bold relative z-10">
          EduVerify: Authenticity Validator
        </h1>
        <p className="mt-4 text-lg text-gray-300 relative z-10">
          Validate academic documents instantly with Blockchain, AI & DigiLocker
        </p>

        {/* Explore Now Button */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="mt-10 relative z-10"
        >
          <Link
            href="#features"
            className="px-8 py-3 border-2 border-white rounded-full text-lg hover:bg-white hover:text-black transition"
          >
            Explore Now
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="relative bg-gradient-to-b from-black to-gray-900 py-20"
      >
        {/* Wavy Background */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-20 fill-current text-black"
          >
            <path d="M985.66 83.86C906.67 116.11 823.78 130.78 740 120 647.09 107.71 561.12 61.48 473.87 44.54 407.09 31.53 337.35 39.87 271.66 62.15 199.06 86.94 129.8 129.37 54.09 149.19 36.12 153.91 17.54 157.28 0 160V0h1200v27.35c-68.38 16.95-141.83 34.64-214.34 56.51z"></path>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose EduVerify?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Blockchain Validation",
                desc: "Tamper-proof verification of academic records on blockchain.",
              },
              {
                title: "AI Forgery Detection",
                desc: "Detect fake or manipulated certificates with AI models.",
              },
              {
                title: "DigiLocker Integration",
                desc: "Fetch government-verified documents directly.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-gray-800 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition transform"
              >
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-center py-6">
        <p>© {new Date().getFullYear()} EduVerify. All rights reserved.</p>
      </footer>
    </div>
  );
}
