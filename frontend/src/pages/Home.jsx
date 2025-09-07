import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full h-full snap-y snap-mandatory overflow-y-scroll">
      {/* Hero Slide */}
      <section className="h-screen snap-start bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white flex flex-col items-center justify-center text-center relative">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl font-extrabold mb-6 drop-shadow-lg"
        >
          EduVerify
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-2xl max-w-2xl mb-10 text-gray-100"
        >
          Blockchain + AI + DigiLocker = <span className="font-bold">Tamper-Proof Academic Verification</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex gap-6"
        >
          <Link
            to="/login"
            className="px-10 py-4 bg-yellow-300 text-blue-900 font-bold rounded-xl shadow-lg hover:bg-yellow-400 transition transform hover:scale-110"
          >
            🚀 Try Demo
          </Link>
          <a
            href="#features"
            className="px-10 py-4 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-700 transition transform hover:scale-110"
          >
            🔍 Learn More
          </a>
        </motion.div>
      </section>

      {/* Features Slide */}
      <section
        id="features"
        className="h-screen snap-start bg-gray-100 flex flex-col items-center justify-center px-6 text-center"
      >
        <h2 className="text-5xl font-bold mb-12 text-blue-700">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
          {[
            {
              title: "Blockchain Validation",
              desc: "Immutable hashes of documents stored on blockchain.",
              img: "https://img.icons8.com/fluency/96/blockchain.png",
            },
            {
              title: "Digital Signature + QR",
              desc: "Certificates digitally signed & linked with QR codes.",
              img: "https://img.icons8.com/fluency/96/qr-code.png",
            },
            {
              title: "Unified Portal",
              desc: "One app for students, recruiters & institutions.",
              img: "https://img.icons8.com/fluency/96/cloud-database.png",
            },
            {
              title: "AI Forgery Detection",
              desc: "Detects tampering using ML & image forensics.",
              img: "https://img.icons8.com/fluency/96/artificial-intelligence.png",
            },
            {
              title: "DigiLocker Integration",
              desc: "Fetch govt-verified credentials directly.",
              img: "https://img.icons8.com/fluency/96/google-drive.png",
            },
            {
              title: "Fraud Analytics",
              desc: "Track fraud attempts & hotspot trends in real time.",
              img: "https://img.icons8.com/fluency/96/combo-chart.png",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-2xl font-bold mb-2 text-blue-600">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Slide */}
      <section
        id="stats"
        className="h-screen snap-start bg-gradient-to-r from-indigo-600 to-purple-700 text-white flex flex-col justify-center items-center"
      >
        <h2 className="text-5xl font-bold mb-16">Our Impact</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl">
          {[
            { num: "500+", text: "Certificates Verified" },
            { num: "20+", text: "Institutions Onboarded" },
            { num: "99.9%", text: "Forgery Detection Accuracy" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-10 bg-white/10 rounded-xl backdrop-blur-md shadow-lg hover:scale-105 transition text-center"
            >
              <h3 className="text-5xl font-extrabold mb-4 text-yellow-300">
                {stat.num}
              </h3>
              <p className="text-lg">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Slide */}
      <section
        id="cta"
        className="h-screen snap-start flex flex-col justify-center items-center text-center bg-yellow-300"
      >
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-blue-900 mb-6"
        >
          Ready to Trust Credentials Again?
        </motion.h2>
        <p className="text-xl text-blue-800 mb-10 max-w-2xl">
          Join <span className="font-semibold">EduVerify</span> today and help us
          build a transparent, fraud-proof academic ecosystem.
        </p>
        <Link
          to="/login"
          className="px-10 py-4 bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-800 transition transform hover:scale-110"
        >
          🚀 Get Started
        </Link>
      </section>
    </div>
  );
}
