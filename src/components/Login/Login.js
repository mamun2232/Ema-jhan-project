import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { FcGoogle } from 'react-icons/fc';
const Login = () => {
      return (
            <div className="from-container">
                  <div>
                  <p className='from-title'>Log in</p>

<form>

      <div className="from-grup">
            <label htmlFor="Email">Email</label>
            <input type="email" name="Email" id="" />
      </div>
      <div className="from-grup">
            <label htmlFor="Password">Password</label>
            <input type="password" name="password" id="" />
      </div>

     <div className="submit-btn">
     <input type="submit" value="Log in" />
     </div>
     <p>New to ema-jon? <span><Link to='/sign-up'>Create New Account</Link></span></p>
</form>
<div className="or">
      <div className='div'></div>
      <p>or</p>
      <div className='div'></div>
</div>
<div className='google-btn'>
<div>
<FcGoogle className='icon'></FcGoogle></div> <span className='text'>Continue With Google</span>
</div>
                  </div>

            </div>
      );
};

export default Login;