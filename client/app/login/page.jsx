'use client'

import { useState } from 'react';
import axios from 'axios';
import '@styles/login.css';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const router = useRouter();
  
    const handleLogin = async (event) => {
      event.preventDefault();
  
        const response = await axios.post('http://localhost:8000/user/login/', {
          email: username,
          password: password,
        });
  
        if (response.status === 200) {
          router.push(`/`);
          localStorage.setItem('access', response.data.access);
          localStorage.setItem('refresh', response.data.refresh);
        }

    };
  return (
    <div className='login-container'>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {error && <p className='error'>{error}</p>}
        <input type='submit' value='Login' />
      </form>
    </div>
  );
};

export default Login;