'use client'

import '@styles/globals.css';
import React from 'react';
import { FaSearch, FaUser, FaBars } from 'react-icons/fa';
import Search from '@components/search';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const access = localStorage.getItem('access');
    if (access) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    router.push('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('access');
    setIsLoggedIn(false);

  };

  const handleProfile = () => {
    router.push('/profile'); 
  };

  const handleHome = () => {
    router.push('/');
  };

  return (
    <header>
      <nav>
        <div className="left">
          <h1 onClick={handleHome}>NEXKEYS</h1>
        </div>
        <div className="center">
          <Search />
        </div>
        <div className="right">
          {isLoggedIn ? (
            <>
              <button onClick={handleProfile}>
                <FaUser className="user-icon" />
                <span>Profile</span>
              </button>
              <button onClick={handleLogout}>
                <FaUser className="user-icon" />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <button onClick={handleLogin}>
              <FaUser className="user-icon" />
              <span>Login</span>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
