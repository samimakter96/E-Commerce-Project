import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-title">The Generics</div>
      <div className="footer-icons">
        <ul>
          <li>
            <a href="https://www.youtube.com" target="_self">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="https://spotify.com" target="_self">
              <FaSpotify />
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_self">
              <FaFacebook />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
