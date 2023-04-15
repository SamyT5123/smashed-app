import React from "react";
import { ReactDOM } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/loginPage.css'

export function LoginPage () {

    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
 

    return (
        <div className='loginBody'>
            <div className="loginCont">
                <form>
                    <h2>Sign in here</h2>

                    <div className="userName">
                        <label for="userName">Username: </label>
                        <input type="text" id="userName" value={userName} onChange={event => setUsername(event.target.value)} />
                    </div>
                    <div className="password">
                        <label for="password">Password: </label>
                        <input type="password" id="password" value={password} onChange={event => setPassword(event.target.value)} />
                    </div>

                    <button>Login</button>
                    
                </form>
            </div>
            <p>Don't have an account? sign up
           <Link to="/register">Here</Link></p>
        </div>
    )
}