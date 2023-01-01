import React, { useState } from 'react';
import icon from '../../assets/icon.png';
import './Auth.css';
import AboutAuth from './AboutAuth';

const Auth = () => {

  const [isSignup, setIsSignup] = useState(false);

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  }

  return (
    <>
    <section className='auth-section'>
      {
        isSignup && <AboutAuth />
      }
        <div className='auth-container-2'>
          {!isSignup && <img src={icon} alt='stack-clone' className='login-logo'/>}
          <form>

              {isSignup && (<label htmlFor='name'>
                <h4>Display Name</h4>
                <input type='text' name='name' id='name' required/>
              </label>)}
              <label htmlFor='email'>
                <h4>Email</h4>
                <input type='email' name='email' id='email' required/>
              </label>
              <label htmlFor='password'>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <h4>Password</h4>
                  {!isSignup && <p style={{color: 'blue', fontSize: '13px'}}>forgot password?</p>}
                </div>
                <input type='password' name='password' id='password' required/>
                {
                  isSignup && (<p style={{color:"#666767", fontSize: "15px"}}>Passwords must contain at least eight<br/>characters, including at least 1 letter and 1<br/>number</p>) 
                }
              </label>
                {
                  isSignup && (
                    <label htmlFor='check'>
                      <input type='checkbox' name='check' id='check'/>
                      <p style={{fontSize: "15px"}}>Opt-in to receive occasional<br/>product updates, user research invitations,<br/>company announcements, and digests.</p>
                    </label>
                  )
                }
              <button type='submit' className='auth-btn'>{ isSignup? 'Sign up':'Log in'}</button>
              {
                isSignup && (
                  <p style={{color:"#666767", fontSize: "13px"}}>By clicking “Sign up”, you agree to <span style={{color: "blue"}}>our terms of<br/>service,</span><span style={{color: "blue"}}> privacy policy</span> and <span style={{color: "blue"}}>cookie policy</span></p>
                )
              }
          </form>
          <p>
            {
            isSignup ? 'Already have an account?' : "Don't have an account?" 
            }
            <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{ isSignup? "Login" : "Sign Up"}</button>
          </p>

        </div>
    </section>

    
    </>
  )
}

export default Auth