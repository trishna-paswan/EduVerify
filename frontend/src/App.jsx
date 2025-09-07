import React from "react";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import LoginRegister from "./pages/LoginRegister";
import StudentDashboard from "./pages/StudentDashboard";
import Home from "./pages/Home"; // ✅ Import your new Home page
import { auth } from "./services/auth";

// Header
function Header() {
  const user = auth.getUser();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <nav className="space-x-4">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        {user && user.role === "student" && (
          <Link to="/student" className="hover:text-blue-400">Student</Link>
        )}
      </nav>
      <div>
        {user ? (
          <span>
            {user.name} ({user.role}){" "}
            <button
              onClick={handleLogout}
              className="ml-2 px-3 py-1 bg-red-500 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </span>
        ) : (
          <Link to="/login" className="hover:text-blue-400">Login</Link>
        )}
      </div>
    </header>
  );
}

// Protected Route
function ProtectedRoute({ children, role }) {
  const user = auth.getUser();
  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) return <div>Unauthorized</div>;
  return children;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          {/* ✅ Use Home.jsx instead of inline h2 */}
          <Route path="/" element={<Home />} />  
          <Route path="/login" element={<LoginRegister />} />
          <Route
            path="/student"
            element={
              <ProtectedRoute role="student">
                <StudentDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
}
