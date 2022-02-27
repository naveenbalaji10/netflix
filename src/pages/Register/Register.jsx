import React,{useRef} from 'react'
import { useState } from 'react'
import './register.scss'

const Register = () => {
      const [email,setEmail]=useState("")
      const [password,setPassword]=useState("")
      const emailRef=useRef()

      const passwordRef=useRef()

      const handleStart=()=>{
          setEmail(emailRef.current.value)
      }
      const handleFinish=()=>{
        setPassword(passwordRef.current.value)
    }
       
  return (
    <div className='register'>
    
     <div className='top'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" className='logo'/>
      <button className='login'>Sign in</button>
     </div>

     <div className='container'>
        <h1>Unlimited Movies,Tv shows and more</h1>
        <h2>Watch anywhere. Cancel Anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        { !email ?
        
        <div className="input">
            <input type="email" placeholder="email address" ref={emailRef}/>
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
        </div>
        :
        <form className='input'>
            <input type="password" placeholder="password" ref={passwordRef}/>
            <button className="registerButton" onClick={handleFinish}>
             Start
            </button>
        </form>
        }
     </div>

    </div>
  )
}

export default Register