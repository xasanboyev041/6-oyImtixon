import React, { useState } from "react";
import axios from "axios";
import "../styles/RegisterPage.css";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/register",
        { email, password }
      );
      console.log("Registration successful", response.data);
    } catch (error) {
      console.error("Registration error", error);
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <p>Create your account</p>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
