import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { FcGoogle } from 'react-icons/fc';
import auth from '../../firebase.init';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Login = () => {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [errors, setError] = useState('')
      const navigate = useNavigate()
      const [user] = useAuthState(auth)
      const location = useLocation()
      const from = location.state?.from?.pathname || '/'

      const [
            signInWithEmailAndPassword,
            error,
      ] = useSignInWithEmailAndPassword(auth);
      const emailHendeler = e => {
            setEmail(e.target.value)
      }
      const passwordHendeler = e => {
            setPassword(e.target.value)
      }

      const submitfrom = event => {
            event.preventDefault()
            signInWithEmailAndPassword(email, password)

      }
      if (user) {
            navigate(from, { replace: true })
      }



      return (
            <div className="from-container">
                  <div>
                        <p className='from-title'>Log in</p>

                        <form onClick={submitfrom}>

                              <div className="from-grup">
                                    <label htmlFor="Email">Email</label>
                                    <input onBlur={emailHendeler} type="email" name="Email" id="" />
                              </div>
                              <div className="from-grup">
                                    <label htmlFor="Password">Password</label>
                                    <input onBlur={passwordHendeler} type="password" name="password" id="" />
                                    <p>{errors}</p>
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