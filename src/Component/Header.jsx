import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <ul>
               <Link to="/">Home</Link>   
               <Link to="/review">Order Review</Link>   
               <Link to="/about">About</Link>   
               <Link to="/contact">Contact</Link>   
        </ul>
    );
};

export default Header;