import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header style = {headerStyle}>
      <h1 style={titleStyle}>Welcome to My Website</h1>
      <nav style= {navStyle} className="nav-links">
      <Link to="/">Home</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

const headerStyle = {
    color: "white",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

};

const titleStyle = {
    fontSize: "2rem",
    margin:"0",

};

const navStyle = {

};

export default Header;