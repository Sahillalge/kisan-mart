import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Kisan<span>Mart</span></Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/rent">Rent</Link>
        <Link to="/buy">Buy</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/contact" className="navbar-btn">List Equipment</Link>
      </div>
    </nav>
  );
}