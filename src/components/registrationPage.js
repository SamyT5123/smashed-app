import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";

export function Register (){

    const [newAccountInformation, setNewAccount] = useState([])
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    
   

    const handleSubmit = () => {
        newAccountInformation.push(
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        )

        console.log(newAccountInformation)
    }

    return (
        <>
        <div className="registerContainer">
                <div className="form">
                <div className="form-body">

                    <div className="username">
                        <label className="form__label" for="firstName">First Name </label>
                        <input 
                        className="form__input"
                         type="text" 
                        id="firstName" 
                        placeholder="First Name" 
                        onChange={event => setFirstName(event.target.value)} 
                        value={firstName}
                        />
                    </div>
                    <div className="lastname">
                        <label className="form__label" for="lastName">Last Name </label>
                        <input  
                        type="text" 
                        name="" 
                        id="lastName"  
                        className="form__input"
                        placeholder="LastName"
                        onChange={event => setLastName(event.target.value)}
                        value={lastName}
                        />
                    </div>
                    <div className="email">
                        <label className="form__label" for="email">Email </label>
                        <input  
                        type="email" 
                        id="email" 
                        className="form__input" 
                        placeholder="Email"
                        onChange={event => setEmail(event.target.value)}
                        value={email}
                        />
                    
                    </div>
                    <div className="password">
                        <label className="form__label" for="password">Password </label>
                        <input 
                        className="form__input" 
                        type="password"  
                        id="password" 
                        placeholder="Password"
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                        />
                    </div>
                    <div className="confirm-password">
                        <label className="form__label" for="confirmPassword">Confirm Password </label>
                        <input 
                        className="form__input" 
                        type="password" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                        onChange={event => setConfirmPassword(event.target.value)}
                        value={confirmPassword}
                        />
                    </div>

                </div>
                <div class="footer">
                    <button type="submit" className="btn" onClick={handleSubmit}>Register</button>
                </div>
            </div>      

        </div>
        </>
    )
}