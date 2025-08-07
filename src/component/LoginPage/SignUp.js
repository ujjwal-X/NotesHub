import React from "react";
import axios from "axios";
import "./Login.css";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e?.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const payload = {
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
      };

      const response = await axios.post(
        "https://noteshub-backend-n7pt.onrender.com/api/auth/signup",
        payload
      );

      alert("Signup successful!");

      // Optionally reset fields
      setFormData({
        fullName: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      });
      setError("");
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");

  //   const { fullName, email, username, password, confirmPassword } = formData;

  //   // Validation
  //   if (!fullName || !email || !username || !password || !confirmPassword) {
  //     setError("All fields are required");
  //     return;
  //   }

  //   if (password !== confirmPassword) {
  //     setError("Passwords do not match");
  //     return;
  //   }

  //   try {
  //     const res = await axios.post(
  //       "https://noteshub-backend-n7pt.onrender.com/api/auth/signup",
  //       {
  //         fullName,
  //         email,
  //         username,
  //         password,
  //       }
  //     );
  //     alert("Signup successful!");
  //     setFormData({
  //       fullName: "",
  //       email: "",
  //       username: "",
  //       password: "",
  //       confirmPassword: "",
  //     });
  //     console.log(res.data);
  //   } catch (err) {
  //     console.error(err);
  //     setError("Signup failed. Try again.");
  //   }
  // };

  return (
    <section>
      {/* Background grid spans */}
      {Array.from({ length: 300 }).map((_, i) => (
        <span key={i}></span>
      ))}

      {/* Sign Up Form */}
      <div className="signin">
        <div className="content">
          <h2>Sign Up</h2>
          <div className="form">
            <div className="inputBox">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <i>Full Name</i>
            </div>
            <div className="inputBox">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <i>Email</i>
            </div>
            <div className="inputBox">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <i>Username</i>
            </div>
            <div className="inputBox">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <i>Password</i>
            </div>
            <div className="inputBox">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <i>Confirm Password</i>
            </div>
            <div className="links">
              <a href="#">Already have an account?</a>
              <a href="#">Login</a>
            </div>
            <div className="inputBox">
              <input type="submit" value="Register" onClick={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
