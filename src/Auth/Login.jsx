import React, { useState } from 'react';
import './Login.css';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Dummy credentials validation
    if (username === 'user' && password === 'password') {
      // Simulate token generation
      const token = 'dummy-token-123';
      setToken(token);
      localStorage.setItem('token', token);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </div>
        <button type="submit" className="login-button">Login</button>

        <h6>UserName : user</h6>
      <h6>Password : password</h6>
      </form>
      
    </div>
  );
};

export default Login;





