import React from 'react'
import '../styles/SignIn.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'
const SignIn = () => {
  return (
    <div className='mainSign-in'>
      <div className='sign-in'>
         <nav>
            <p>Home Page | My Account</p>
         </nav>
          <div className='sign-content'>
               <div className='login'>
                 
                    <h4>Login</h4>
                    <form>
                        <p>
                        <label>Username or Email Address</label><br/>
                    <input type='email'  />
                        </p>
                    <p>
                    <label>Password</label> <br/>
                    <input type='password'  />
                    </p>
                   
                    <button type='submit'>Login</button>
                    </form>
                    <div className='forgot-password'>
                       <p><input type='checkbox'/><span>Remember Me</span></p> 
                        <Link to='/'>Forgot Your Password?</Link>
                    </div>
               </div>
               <div className='register'>
                   <h4>Register</h4>
                   <form>
                    <p>
                    <label>Email Address</label> <br/>
                    <input type='email'  />
                    </p>
                     <p>
                     <label>Password</label><br/>
                    <input type='password'  />
                     </p>
                     
                    <p ><input type='checkbox' id='check'/><span>I am a customer</span></p>
                    <p ><input type='checkbox' id='check'/><span>I am a vendor</span></p>
                    <p className='register-info'>Your personal data will be use to support your experience <br/>
                        throughtout this website to mage access to your account <br/>
                        and for other purposes described in our policy
                    </p>
                    <button type='submit'>Register</button>
                   </form>

               </div>
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default SignIn
