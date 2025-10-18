import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Instagram Downloader</div>
      <nav>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#instructions">How to Use</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
