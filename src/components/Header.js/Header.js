import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg' 
import './Header.css'
const Header = () => {
    return (
        <nav>
            <div >
                <img src={logo} alt="" />
            </div> 

            <div className='Menu'>
                <Link to='/'>Order</Link>
                <Link to='/orderReview' >Order Review</Link>
                <Link to="/ivantory">Manage Ivantory</Link>
                <Link to='/login'>Log In</Link>
            </div>
        </nav>
    );
};

export default Header;