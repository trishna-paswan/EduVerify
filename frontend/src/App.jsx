import React from "react";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import LoginRegister from "./pages/LoginRegister";
import StudentDashboard from "./pages/StudentDashboard";
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
    <header className="header">
      <nav>
        <Link to="/">Home</Link>{" | "}
        {user && user.role === "student" && <Link to="/student">Student</Link>}
      </nav>
      <div>
        {user ? (
          <span>
            {user.name} ({user.role}){" "}
            <button onClick={handleLogout}>Logout</button>
          </span>
        ) : (
          <Link to="/login">Login</Link>
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
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<h2>Welcome to Authenticity Validator</h2>} />
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
