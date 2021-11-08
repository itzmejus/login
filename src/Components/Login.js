import React from 'react'
import '../Styles/Login.css'
export default function Login() {
   
    return (
        <div>
          {/*   <button  type="button" class="btn btn-outline-primary">Login</button> */}

                    <div class="wrapper fadeInDown">
                        <div id="formContent">
                            <form>
                                <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" />
                                <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" />
                                <input type="submit" class="fadeIn fourth" value="Log In" />
                            </form>
                            <div id="formFooter">
                                <a class="underlineHover">Forgot Password?</a>
                               {/*  <br/>
                                <a class="underlineHover">Sign up?</a> */}
                            </div>
                        </div>
                    </div>
            
        </div>
    )
}
