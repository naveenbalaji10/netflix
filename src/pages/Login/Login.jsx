import React from 'react'
import './Login.scss'

const Login = () => {
  return (
    <div className='login'>
    
     <div className='top'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" className='logo'/>
     </div>

     <div className='container'>
       <form>
           <h1>Sign in</h1>
           <input type={'email'} placeholder="email or phone" />
           <input type={"password"} placeholder="password"/>
           <button className='button'>Login</button>
           <span>new to netflix <b>sign in</b></span>
           <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
       </form>
     </div>

    </div>
  )
}

export default Login