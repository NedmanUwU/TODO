import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/todo" style={linkStyle}>Todo</Link>
        <Link to="/about" style={linkStyle}>About</Link>
      </nav>
    </header>
  );
};

const headerStyle = {
  backgroundColor: "#66b888",
  textAlign: "center",
  color: "white",
  padding: "20px",
  width: "100%",
  boxSizing: "border-box",
  position: "fixed",
  top: 0,
  left: 0,
};

const navStyle = {
  display: "flex",
  gap: "20px", // Space between links
};

const linkStyle = {
  textDecoration: "none",
  color: "white",
  padding: "10px", // Padding around each link
};

export default Header;
