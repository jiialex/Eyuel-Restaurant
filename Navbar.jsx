import React, { useState } from 'react';
import logo from '../images/logo.png';
// import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';
import '../js/review.js'
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <nav className="navbar">
      <div className="leftside">
        <img src={logo} alt="Restaurant Logo" />
        <span>eyuel-traditional restaurant</span>
      </div>

      <div className={`rightside ${isMenuOpen ? 'open' : ''}`}>
      
        <a href="/">Home</a>
        <a href="/dishes">Dishes</a>
       <a href="/about">About</a>
      <a href="/menu">Menu</a>
        <a href="/review">Review</a>
       <a href="/order">Order</a>
         <a href="/reservation">Reservation</a>
       
      </div>
      
      <div className="menu-icon" onClick={toggleMenu}>
        <ReorderIcon />
      </div>
       <div className="icons">
        </div>
    </nav>
  );
}

export default Navbar;
