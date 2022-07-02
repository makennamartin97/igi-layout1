import React,{useState,useContext,useEffect} from 'react';
import { ethers } from "ethers";
import LoginContext from '../contexts/LoginContext';
import Button from './Button';


function Connections() {
    const [amount, setAmount] = useState("")

    const [connected, setisconnected] = useState(false)
    const [address, setAddress] = useState('')


    

    async function detectProvider(){
      //check if metamasks exits
      if(window.ethereum){
        console.log('metamask exists')

        try{
          const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
          })
          console.log(accounts)
          setisconnected(true)
          setAddress(accounts[0])
          console.log('address', address)
          }catch(error){
            console.log('error')
          }

      }else{
        alert('Please install Metamask')
      }
    }

    const onChangeHandler = (field, val)=> {

          setAmount(val);
    }
    async function isMetaMaskConnected() {
      const {ethereum} = window;
      const accounts = await ethereum.request({method: 'eth_accounts'});
      if(accounts.length === 0){
        setisconnected(false)
        setAddress('')
      }else{
        setisconnected(true)

      }
      return accounts
  }
    async function handleSubmit (e) {
        //prevent refresh
        e.preventDefault();
        if(connected){

        if (amount === 0)
        {
          alert("Must be above 0");
        }else{
            console.log(amount)
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
           // const convert = amount.toString()
            //const convert = ethers.utils.parseUnits(amount.toString(), 10)

            const tx = signer.sendTransaction({
                to: "0x5de7b9bABdf5b6962Af75086eB831878a5c313Ad",
                value: amount.toString()
            });
            const createReceipt = await signer.sendTransaction(tx);
            console.log(createReceipt)
        }
      }else{
        alert("Please connect your wallet")
      }
    }
  



      useEffect(() => {

    }, [connected,address, isMetaMaskConnected]);
       

    return (
      <div>
        <div className='cont'>
            {
                connected === false ? (<button onClick={detectProvider} className='btn'>Connect to Metamask</button>):( <><p className='btn'>Address: {address}</p></>)
            }
        
        </div>
  
        <form id='connections'>
            <label>Enter Amount (ETH)</label>
            <input placeholder="amount" value={amount} type="text" name="amount" onChange={(e) => {onChangeHandler("amount",e.target.value)}}/>
            <Button onClick={handleSubmit}>Send</Button>
        </form>
        
        
            
          
      </div>
    );
  }
  
  export default Connections;