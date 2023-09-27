import React from 'react';
import './Header.css'

const Header = (props) => {
  return (
    <header className="header">
      <div className="logo">Reeco</div>
      <nav className="nav">
        <ul>
          <li><a href="/">Store</a></li>
          <li><a href="/Orders">Orders</a></li>
          <li><a href="/Analytics">Analytics</a></li>
          <li><a href="/Profile">Profile</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
