// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Auth/Login';
import ProtectedComponent from './Pages/ProtectedComponent';
import Sidebar from './Component/Sidebar';
import Forms from './Pages/Forms/Forms';
import Table from './Pages/Table/Table';
import Charts from './Pages/Charts/Charts'
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
          <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Forms/>} />
          <Route path="/Forms" element={<Forms />} />
          <Route path="/Table" element={<Table />} />
          <Route path="/Charts" element={<Charts />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
          
          {/* <ProtectedComponent /> */}
        </div>
      )}
    </div>
  );
};

export default App;
