import React,{useContext,useState, useEffect} from 'react';
import particlesConfig from '../config/particlesConfig';
// import Particles from 'react-particles-js';
import Myparticle from './Particless.js';
import LoginContext from '../contexts/LoginContext';
import Login from './Login.js';







function Main() {
  const {loginpage} = useContext(LoginContext);

  useEffect(() => {
    

  }, [loginpage]);

  
    return (
      <div className="main">
        {
          loginpage ? (<Login/>) : (
          <div className='row'>
             <div className='s1'>
            <h2  >BYTE THE GLASS</h2>
            </div> 
            <div className='s1'>
            <h2 > BUILD THE FUTURE</h2>
            {/* <h2 className="glitch" data-text=" FUTURE"> FUTURE</h2> */}
            </div>
            </div>
  )
        }
         
          
      </div>
    );
  }
  
  export default Main;