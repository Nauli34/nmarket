import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {currState==="login"?<></>:<input type="text" placeholder='YourName' required />}
                <input type="Email" placeholder='YourEmail' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button>{currState==="Sign up"?"Create account":"Login"}</button>
            <div className='login-popup-condition'>
                <input type="checkbox" required />
                <p>By Continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="login"
            ?<p>Create a new account? <span onClick={()=>setCurrState("Sign up")}>Click Here</span></p>
            :<p>Already have an acoount? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
            }    
         </form>
    </div>
  )
}

export default LoginPopup
