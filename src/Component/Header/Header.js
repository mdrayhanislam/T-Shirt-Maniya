import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className='nav-container'>
           <Link className='link-style' to="/">Home</Link>
           <Link className='link-style' to="/order">Order</Link>
           <Link className='link-style' to="/about">About</Link>
        </nav>
    );
};

export default Header;