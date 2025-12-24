import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setUser }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please enter both email and password");
      return;
    }

    // ✅ HARDCODED LOGIN
    if (
      formData.email === "althaf@gmail.com" &&
      formData.password === "oys"
    ) {
      const userData = {
        name: "Althaf",
        email: formData.email,
      };

      // ✅ Save user to localStorage
      localStorage.setItem("user", JSON.stringify(userData));

      // ✅ CRITICAL FIX: Update parent state immediately
      setUser(userData);

      // ✅ Redirect to home
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl p-8 w-full max-w-md shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6">User Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button 
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4 text-sm">
          <button
            onClick={() => navigate("/pagination")}
            className="text-orange-600 font-semibold hover:underline"
          >
            Register Now
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;