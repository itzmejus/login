import React from 'react'
import '../Styles/Signup.css'
export default function Signup() {
    return (
        <div class="container">
            <form id="signup">
                <div class="header">
                    <h3>Sign Up</h3>
                    <p>You want to fill out this form</p>
                </div>
                <div class="sep"></div>
                <div class="inputs">
                    <input type="text" placeholder="First name" autofocus />
                    <input type="text" placeholder="Last name" autofocus />
                    <input type="email" placeholder="e-mail" autofocus />
                    <input type="password" placeholder="Password" />
                    <div class="checkboxy">
                     <input name="cecky" id="checky" value="1" type="checkbox" /><label class="terms">I accept the terms of use</label>
                    </div>
                    <a id="submit" href="#">SIGN UP NOW</a>   
                </div>
            </form>
        </div>
    )
}
