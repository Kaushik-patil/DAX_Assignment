import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import InputField from "../components/Inputfield";
import '../styles/signupStyle.css'


const SignupForm = () => {

  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    const alphaRegex = /^[A-Za-z\s]+$/;
    const usernameRegex = /^[a-zA-Z0-9@._-]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const phoneRegex = /^\+\d{1,3}\d{10}$/;

    if (!alphaRegex.test(form.name)) {
      newErrors.name = "Name should only contain alphabets.";
    }

    if (!usernameRegex.test(form.username)) {
      newErrors.username = "Username must be alphanumeric or special characters.";
    }

    if (!usernameRegex.test(form.password)) {
      newErrors.password = "Password must be alphanumeric or special characters.";
    }

    if (form.username === form.password) {
      newErrors.password = "Password must not be same as Username.";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!emailRegex.test(form.email)) {
      newErrors.email = "Email must be a valid Gmail address.";
    }

    if (!phoneRegex.test(form.phone)) {
      newErrors.phone = "Phone must include country code (e.g. +911234567890)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = () => {
    if (validate()) {
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

      const userExists = existingUsers.some(user => user.username === form.username);

      if (userExists) {
        alert("Username already taken.");
        return;
      }

      const newUser = {
        name: form.name,
        username: form.username,
        password: form.password,
        email: form.email,
        phone: form.phone
      };


      localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));

      alert("Sign-Up Successful! Redirecting to login...");
      navigate("/");
    }
  };

  return (
    <div className="form-container">
      <div className="signup-header">
        <h1>Create new Account</h1>
      </div>

      <div className="signup-fields">

        <div className="signup-form">
          <InputField label="Name" type="text" name="name" value={form.name} onChange={handleChange} error={errors.name} placeholder="Name" />
          <InputField label="Username" type="text" name="username" value={form.username} onChange={handleChange} error={errors.username} placeholder="Username" />
          <InputField label="Email" type="email" name="email" value={form.email} onChange={handleChange} error={errors.email} placeholder="Email" />
          <InputField label="Phone" type="text" name="phone" value={form.phone} onChange={handleChange} error={errors.phone} placeholder="Phone No." />
          <InputField label="Password" type="password" name="password" value={form.password} onChange={handleChange} error={errors.password} placeholder="New Password" />
          <InputField label="Confirm Password" type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} error={errors.confirmPassword} placeholder="Confirm Password" />

        </div>

        <div className="signup-btn"><button onClick={handleSignUp}>Sign Up</button></div>

      </div>

    </div>

  );
};




export default SignupForm;

