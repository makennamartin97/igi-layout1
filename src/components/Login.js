import React,{useContext,useEffect} from 'react';
import Navbar from './Navbar.js';
import Button from './Button';



function Login() {


 

    return (
      <>
      <Navbar/>
      
      <div className="login">

            <form>
                <h3>SIGN IN</h3>

                <label for="username">Username</label>
                <input type="text" placeholder="Email or Phone" id="username"/>

                <label for="password">Password</label>
                <input type="password" placeholder="Password" id="password"/>

                <Button><a href="/dash">SIGN IN</a></Button>
 
    
            </form>
            
       
          
      </div>
      </>
    );
  }
  
  export default Login;