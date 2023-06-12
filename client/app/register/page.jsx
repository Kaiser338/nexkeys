'use client'

import { useState } from 'react';
import axios from 'axios';
import '@styles/login.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/user/register/', {
        username: username,
        password: password,
      });

      if (response.status === 201) {
        setError('Registered successfully');
      }
    } catch (error) {
      setError('Registration failed');
    }
  };

  return (
    <div className='login-container'>
      <form onSubmit={handleRegister}>
        <label>
          Username:
          <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {error && <p className='error'>{error}</p>}
        <input type='submit' value='Register' />
      </form>
    </div>
  );
};

export default Register;
