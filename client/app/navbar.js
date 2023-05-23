import '@styles/globals.css';
import React from 'react';
import { FaSearch, FaUser, FaBars } from 'react-icons/fa';
import Search from '@components/search';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <h1>NEXKEYS</h1>
        </div>
        <div className="center">
          <Search />
        </div>
        <div className="right">
          <button>
            <FaUser className="user-icon" />
            <span>Login</span>
          </button>
          <FaBars className="menu-icon" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

