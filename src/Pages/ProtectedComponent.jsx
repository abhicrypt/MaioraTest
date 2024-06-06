// src/ProtectedComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProtectedComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/protected');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching protected data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Protected Data</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
};

export default ProtectedComponent;
