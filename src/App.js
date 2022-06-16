import './App.css';
import React,{useState, useEffect} from 'react'
import Main from './components/Main'
import Loading from './components/Loading.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import Myparticle from './components/Particless.js';
import LoginContext from './contexts/LoginContext';


function App(props) {
  const [loginpage, setloginpage] = useState(false)
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2150);
  })
  return (
    <LoginContext.Provider value={{loginpage, setloginpage}}>
    <div className="App">
       <Myparticle/>
      {/* {isLoading===true?
        <Loading/>: */}
        <div>
         <Navbar/>
        <Main/>
        <Footer/>
       
        </div>
        
        
{/* } */}
      
    </div>
    </LoginContext.Provider>
  );
}

export default App;
