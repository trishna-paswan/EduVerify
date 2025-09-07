import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/auth";

export default function LoginRegister() {
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("student");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    try {
      auth.register({ name, email, password, role });
      alert("Registered! Please login now.");
      setMode("login");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const ok = auth.login(email, password);
    if (!ok) return alert("Invalid credentials, try again!");
    const u = auth.getUser();
    if (u.role === "student") navigate("/student");
    else navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Authenticity Validator
        </h1>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-6 py-2 rounded-l-lg transition-colors duration-300 ${
              mode === "login"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setMode("login")}
          >
            Login
          </button>
          <button
            className={`px-6 py-2 rounded-r-lg transition-colors duration-300 ${
              mode === "register"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setMode("register")}
          >
            Register
          </button>
        </div>

        {/* Forms */}
        {mode === "register" ? (
          <form onSubmit={handleRegister} className="space-y-4">
            <input
              required
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <select
              className="select select-bordered w-full"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="student">Student</option>
              <option value="institution">Institution</option>
              <option value="recruiter">Recruiter</option>
              <option value="admin">Admin</option>
            </select>
            <input
              required
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
          </form>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              required
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <select
              className="select select-bordered w-full"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="student">Student</option>
              <option value="institution">Institution</option>
              <option value="recruiter">Recruiter</option>
              <option value="admin">Admin</option>
            </select>
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
