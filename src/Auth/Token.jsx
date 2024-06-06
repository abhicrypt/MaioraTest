// src/App.js
import React, { useState } from 'react';
import Login from './Login';
import axios from 'axios';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  // Setup Axios interceptor to add token to headers
  axios.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return (
    <div>
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <div>
          <h2>Welcome!</h2>
          {/* Other components or content that require authentication can be added here */}
        </div>
      )}
    </div>
  );
};

export default App;
