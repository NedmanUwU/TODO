import React from 'react';
import { Link } from 'react-router-dom';
import Nook from '../Assets/Icons/Tom Nook.svg'

const Header = () => {
  return (
    <div className='header'>
      <div className='title'>
      <img src={Nook} style={{width: '64px', transform: "rotate(-10deg)",}}/>
        <h1>Nook's Todo</h1>
      </div>
      <div className='nav'>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/todo" style={linkStyle}>Todo</Link>
        <Link to="/about" style={linkStyle}>About</Link>
      </div>
    </div>
  );
};

const linkStyle = {
  textDecoration: "none",
  padding: "10px",
};

export default Header;
