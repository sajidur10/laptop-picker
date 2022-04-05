import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <Link to="/home"><h1 className='font-bold text-2xl italic'>Laptop <span className='text-orange-400'>Picker</span></h1></Link>

            </div>
            <div >

                <Link className='nav-manu' to="/home">Home</Link>
                <Link className='nav-manu' to="/allreviews">Reviews</Link>
                <Link className='nav-manu' to="/dashboard">Dashboard</Link>
                <Link className='nav-manu' to="/blogs">Blogs</Link>
                <Link className='nav-manu' to="/about">About</Link>

            </div>
        </nav>
    );
};

export default Header;