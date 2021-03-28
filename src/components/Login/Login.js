import React, { useState } from 'react';
import './Login.css';
import linkedin from "../images/linkedin.png";

function Login() {

    const loginToApp = () => {};
    const register = () => {};

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [profilePic, setProfilePic] = useState("")
    

    return (
        <div className="login">
            <img src={linkedin} alt="" />
            <div className="login_form">
                <input 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    type="text" 
                    placeholder="Full Name (Required while registering)" 
                />
                <input 
                    type="text" 
                    placeholder="Profile Pic Url (Optional)" 
                />
                <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    placeholder="Email Id" 
                />
                <input 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password" 
                    placeholder="Password" 
                />
                <button onClick={loginToApp}>Sign In</button>
                <p>Not a member? 
                    <span onClick={register}> Register Now</span>
                </p>
            </div>
        </div>
    )
}

export default Login;
