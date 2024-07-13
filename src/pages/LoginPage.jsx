import React, { useState } from "react";
import axios from "axios";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/login",
        { email, password }
      );
      console.log("Login successful", response.data);
    } catch (error) {
      console.error("Login error", error);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <p>Enter your credential to access your account.</p>
      <form onSubmit={handleSubmit}>
        <label>Email address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@domain.com"
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <div className="forgot-password-container">
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="register-link-container">
        <p>Don't have an account?</p>
      </div>
    </div>
  );
};

export default LoginPage;
