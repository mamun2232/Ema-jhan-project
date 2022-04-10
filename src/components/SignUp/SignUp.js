import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {
      return (
            <div className="from-container">
            <div>
            <p className='from-title'>Sign Up</p>

<form>

      <div className="from-grup">
            <label htmlFor="Email">Email</label>
            <input type="email" name="Email" id="" />
      </div>
      <div className="from-grup">
            <label htmlFor="Password">Password</label>
            <input type="password" name="password" id="" />
      </div>
      <div className="from-grup">
            <label htmlFor="Confirm-Password">Confirm Password</label>
            <input type="password" name="Confirm-password" id="" />
      </div>

     <div className="submit-btn">
     <input type="submit" value="Sign Up" />
     </div>
     <p>Allready have on account? <span><Link to='/login'>LogIn</Link></span></p>
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

export default SignUp;