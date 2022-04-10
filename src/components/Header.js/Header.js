import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg' 
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth)
    const logOut = () =>{
        signOut(auth)
    }
    return (
        <nav>
            <div >
                <img src={logo} alt="" />
            </div> 

            <div className='Menu'>
                <Link to='/'>Order</Link>
                <Link to='/orderReview' >Order Review</Link>
                <Link to="/ivantory">Manage Ivantory</Link>
                {user ? <button onClick={logOut}>Log Out</button> : <Link to='/login'>Log In</Link>}
            </div>
        </nav>
    );
};

export default Header;