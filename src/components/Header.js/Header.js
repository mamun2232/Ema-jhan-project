import React from 'react';
import logo from '../../images/Logo.svg' 
import './Header.css'
const Header = () => {
    return (
        <nav>
            <div >
                <img src={logo} alt="" />
            </div> 

            <div className='Menu'>
                <a href="#">Order</a>
                <a href="#">Order Review</a>
                <a href="#">Manage Ivantory</a>
            </div>
        </nav>
    );
};

export default Header;