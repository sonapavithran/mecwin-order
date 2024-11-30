import React from 'react';
import { FaBell, FaShoppingCart } from 'react-icons/fa'; // Import icons
import './Header.css';
import logo from './logo/mecwinlogo.png';
import profile from './logo/profile.jpg'; // Import profile picture

const Header = () => {
  const notificationCount = 5; // Example notification count
  const cartCount = 2; // Example cart item count

  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <div className="header-right">
        <div className="icons-left">
          {/* Notification Icon with Badge */}
          <div className="icon-container">
            <FaBell className="icon" />
            {notificationCount > 0 && (
              <span className="badge">{notificationCount}</span>
            )}
          </div>
          {/* Add to Cart Icon with Badge */}
          <div className="icon-container">
            <FaShoppingCart className="icon" />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </div>
        </div>
        {/* Profile Section */}
        <div className="profile">
          <img src={profile} alt="Profile" className="profile-picture" />
          <div className="profile-info">
            <span className="profile-name">Chitra</span>
            <span className="profile-role">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
