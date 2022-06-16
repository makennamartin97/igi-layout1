import React,{useContext,useState, useEffect} from 'react';
import LoginContext from '../contexts/LoginContext';



function Navbar() {
  const {loginpage, setloginpage} = useContext(LoginContext);

  async function showLogin(){
    if(loginpage){
      setloginpage(false)
    }else{
      setloginpage(true)
    }
    
    console.log(loginpage,'showlogin')
  }

  useEffect(() => {
    

}, [loginpage]);

    return (
      <div className="navbar">
        <div className='n1'>Ironglass Investments</div>
        <div className='n2'>
        {loginpage ? (<div className='border' onClick={showLogin}>Go Back</div>) : (<div className='border'onClick={showLogin}>Investor Login</div>)}
        </div>
       
          
      </div>
    );
  }
  
  export default Navbar;