import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const SignUp = () => {

      const navigate = useNavigate()

      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [confirmPass, setConfirmPass] = useState('')
      const [errors, setError] = useState('')
      const [user] = useAuthState(auth)



      const [
            createUserWithEmailAndPassword,

            error] = useCreateUserWithEmailAndPassword(auth);

      const [sendEmailVerification, sending,] = useSendEmailVerification(auth)

      const emailHendeler = e => {
            setEmail(e.target.value)
      }
      const passwordHendeler = e => {
            setPassword(e.target.value)
      }
      const confrimpassdHendeler = e => {
            setConfirmPass(e.target.value)
      }

      const Submitfrom = event => {
            event.preventDefault()
            if (password !== confirmPass) {
                  setError('Your Password dont match, please try again')
                  return
            }
            setError('')
            if (error) {
                  setError('You All ready Create Account,Please Provide new email')
                  return
            }
            createUserWithEmailAndPassword(email, password)
            sendEmailVerification(email)

      }

      if (user) {
            navigate('/')
      }
      return (
            <div className="from-container">
                  <div>
                        <p className='from-title'>Sign Up</p>

                        <form onSubmit={Submitfrom}>

                              <div className="from-grup">
                                    <label htmlFor="Email">Email</label>
                                    <input onBlur={emailHendeler} type="email" name="Email" id="" />
                              </div>
                              <div className="from-grup">
                                    <label htmlFor="Password">Password</label>
                                    <input onBlur={passwordHendeler} type="password" name="password" id="" />
                              </div>
                              <div className="from-grup">
                                    <label htmlFor="Confirm-Password">Confirm Password</label>
                                    <input onBlur={confrimpassdHendeler} type="password" name="Confirm-password" id="" />
                                    <p>{errors}</p>
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