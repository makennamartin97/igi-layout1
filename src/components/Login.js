import React,{useContext,useState, useEffect} from 'react';
import LoginContext from '../contexts/LoginContext';



function Login() {

    return (
      <div className="login">

            <form>
                <h3>SIGN IN</h3>

                <label for="username">Username</label>
                <input type="text" placeholder="Email or Phone" id="username"/>

                <label for="password">Password</label>
                <input type="password" placeholder="Password" id="password"/>

                <button>SIGN IN</button>
            </form>
       
          
      </div>
    );
  }
  
  export default Login;