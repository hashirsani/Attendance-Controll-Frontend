import React, { useState } from "react";
import useAuthStore from "./store";

function Login({ setShowForm }) {
  const login = useAuthStore((state) => state.login);
  const setError = useAuthStore((state) => state.setError);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const allowedEmails = [
    "Student@gmail.com",
    "Teacher@gmail.com",
    "Admin@gmail.com",
  ];

  const handleInput = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ EMAIL VALIDATION FIRST
    if (!allowedEmails.includes(formData.email)) {
      setError("Wrong email address. Please try again.");
      return;
    }

    // ✅ LOGIN ONLY IF VALID
    login(formData);

    // ✅ CLEANUP
    setFormData({ email: "", password: "" });
    setShowForm(null);
  };

  const handleCancel = () => {
    setFormData({ email: "", password: "" });
    setShowForm(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                 bg-white p-6 sm:p-8 rounded-2xl w-[90%] sm:w-[403px]
                 shadow-xl z-50"
    >
      <h2 className="text-2xl font-bold text-center mb-3">Login</h2>

      <p className="text-sm text-center text-gray-500 mb-6">
        Welcome! Please sign in to your account.
      </p>

      <label className="block mb-2 font-bold text-sm">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInput}
        required
        className="w-full h-[45px] border rounded-lg px-3 mb-4"
      />

      <label className="block mb-2 font-bold text-sm">Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInput}
        required
        className="w-full h-[45px] border rounded-lg px-3 mb-6"
      />

      <div className="flex gap-3">
        <button
          type="button"
          onClick={handleCancel}
          className="flex-1 py-2 rounded-full border-2 border-indigo-500 font-bold"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="flex-1 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold"
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;
