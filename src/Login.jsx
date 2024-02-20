import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  console.log("reached login");
  const navigate = useNavigate(); // Initialize navigate function

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/user/login", {
        email: email,
        password: pass,
      });
      if (response.status === 200) {
        console.log(response.data);
        navigate("/projects"); // Navigate to the projects page
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };
  return (
    // <div>Hello</div>
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="************"
          id="password"
          name="password"
        />
        <button>Log In</button>
      </form>
      <button
        className="link-btn"
        onClick={() => {
          navigate("/register");
        }}
      >
        Don't have an account? Register
      </button>
    </div>
  );
};

export default Login;
