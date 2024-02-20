import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/user/register", {
        firstName: firstname,
        lastName: lastname,
        email: email,
        phoneNumber: phonenumber,
        address: address,
        password: pass,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          type="string"
          placeholder="John"
          id="firstname"
          name="firstname"
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          type="string"
          placeholder="Doe"
          id="lastname"
          name="lastname"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="address">Address</label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="string"
          placeholder="524 Harvard Street"
          id="address"
          name="address"
        />
        <label htmlFor="phonenumber">Phone Number</label>
        <input
          value={phonenumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="string"
          placeholder="(343) 233-3232"
          id="phonenumber"
          name="phonenumber"
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
        <button>Register</button>
      </form>
      <button
        className="link-btn"
        onClick={() => {
          navigate("/login");
        }}
      >
        Already have an account? Login here
      </button>
    </div>
  );
};

export default Register;
