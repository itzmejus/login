import React,{useState} from 'react'
import Login from './Login'
import Signup from './Signup'

function Home() {
    const [login, setLogin] = useState(false)
    const [signup,setSignup] = useState(false)
    return (
        <div>
            <div>
            <button onClick={()=>setLogin(!login)} type="button" class="btn btn-outline-primary">Login</button>
            {
                login? 
                <Login/> :null
            }
            
            <button onClick={()=>setSignup(!signup)} type="button" class="btn btn-outline-primary">Signup</button>
            {
                signup? <Signup/> :null
            }
            </div>
            
        </div>
    )
}

export default Home
