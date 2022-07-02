import './App.css';
import React,{useState, useEffect} from 'react'
import Main from './components/Main'
import Loading from './components/Loading.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import Myparticle from './components/Particless.js';
import LoginContext from './contexts/LoginContext';
import Dash from './components/Dash.js';
import { ethers } from "ethers";
import {Router} from '@reach/router';



function App() {
  const [loginpage, setloginpage] = useState(false)
  const [dashpage, setdashpage] = useState(false)
  

  return (
    <LoginContext.Provider value={{loginpage, setloginpage, dashpage, setdashpage}}>
    <div className="App">

        <Router>
          <Main path="/" />
          <Dash path="/dash" />
        </Router>
       
        
        
        
{/* } */}
      
    </div>
    </LoginContext.Provider>
  );
}

export default App;
