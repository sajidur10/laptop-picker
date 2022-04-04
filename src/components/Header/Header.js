import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <h1 className='font-bold text-2xl italic'>Laptop <span className='text-orange-400'>Picker</span></h1>
            </div>
            <div>
                <Link to="/home">Home</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>

            </div>
        </nav>
    );
};

export default Header;