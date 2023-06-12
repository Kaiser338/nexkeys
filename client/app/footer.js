'use client'

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '@styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies mauris vel
            quam faucibus, vitae sollicitudin odio ultrices. Suspendisse varius pharetra massa a
            facilisis.
          </p>
          <div className="social-icons">
            <a href="#">
              <FaFacebook className="social-icon" />
            </a>
            <a href="#">
              <FaTwitter className="social-icon" />
            </a>
            <a href="#">
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h2>Contact</h2>
          <p>Street</p>
          <p>City, </p>
          <p>Phone: </p>
          <p>Email: </p>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Nexkeys. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
