import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import InputField from "../components/Inputfield";

import "../styles/loginStyle.css"

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const regex = /^[a-zA-Z0-9@._-]+$/;

    if (!regex.test(username)) {
      newErrors.username = "Username must be alphanumeric or special characters.";
    }

    if (!regex.test(password)) {
      newErrors.password = "Password must be alphanumeric or special characters.";
    }

    if (username === password) {
      newErrors.password = "Username and password must not be the same.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    
      if (validate()) {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const matchedUser = users.find(user => 
      user.username === username && user.password === password
    );

    if (matchedUser) {
      localStorage.setItem('loggedInUser', JSON.stringify({ name: matchedUser.name }));
      navigate('/dashboard');
    } else {
      setErrors({ password: 'Invalid username or password' });
    }
  }
    
  };

  return (
    <div className="form-container">
      <div className="login-header">
      <h1>Login</h1>
      <p>Sign in to continue</p>
      </div>
      <div className="login-fields">
      <InputField
        label="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={errors.username}
        placeholder="Enter Username :"
      />
      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
        placeholder="Enter Password :"
      />
      <button className="login-button"  onClick={handleLogin}>login </button>
      <p>
        Don't have an account?{" "}
        <Link className="signup-link" to="/signup">Sign Up</Link>
      </p>
      </div>
    </div>
  );
};

export default LoginForm;
