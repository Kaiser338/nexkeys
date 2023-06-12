'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import '@styles/profile_page.css';
import { useRouter } from 'next/navigation';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [error, setError] = useState(null);
  const [accessToken, setAccessToken] = useState('');
  const router = useRouter();

  useEffect(() => {
    const access = localStorage.getItem('access');
    if (access) {
      setAccessToken(access);
    }
    else{
        router.push(`/`);
    }

    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
      setNewUsername(storedUsername);
    }
  }, []);

  const handleUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleChangeUsername = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8000/user/change_username/',
        {
          username: newUsername,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        setUsername(newUsername);
        localStorage.setItem('username', newUsername); 
        setNewUsername('');
      }
    } catch (error) {
      setError('Failed to update username');
    }
  };

  return (
    <div className="container-profile">
      <div className="change_form">
        <h1 className="profile-heading">Profile</h1>
        <div className="centered-container">
          <form onSubmit={handleChangeUsername}>
            <div className="new-username-container">
              <label htmlFor="new-username" className="new-username-label">
                New Username:
              </label>
              <input
                type="text"
                id="new-username"
                className="new-username-input"
                value={newUsername}
                onChange={handleUsernameChange}
              />
            </div>
            <div className='center-button'>
                <button type="submit" className="confirm-button">
                Confirm Changes
                </button>
            </div>
          </form>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Profile;
