import { useState } from 'react';
import './App.css';
import {FaCopy} from 'react-icons/fa';

const App = () => {
  
  const [password, setPassword] = useState(""); 
  const [plength, setPlength] = useState(4);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

   const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard");
   }


   const generatePassword = () => {
    let charset = "";
    const upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower ="abcdefghijklmnopqrstuvwxyz";
    const number ="0123456789";
    const symbol ="!@#$%^&*().";
    
    if(uppercase) charset  += upper;
    if(lowercase) charset  += lower;
    if(numbers) charset  += number;
    if(symbols) charset  += symbol;

    if(charset === ""){
      alert("Please select at least one checkbox");
      return;
    }

    let newPassword = "";

    for(let i=0; i<plength; i++){
      const finalPass = Math.floor(Math.random()*charset.length);
      newPassword += charset[finalPass];
    }

    setPassword(newPassword);

   };

  return(
    <div className='password-box'>
    <h1>Password Generator</h1> 
    <div className='output-box'>
      <input type="text" value={password} readOnly/> 
      <button onClick={copyToClipboard}><FaCopy/></button>
    </div>
    <div className='controls'>
      <label>Password Length: {plength}
      <input type="range" min="4" max="30" value={plength}
      onChange={(event) => setPlength(event.target.value)}/> 
      </label>


      <label> Include uppercase letters
      <input type="checkbox" checked={uppercase}
      onChange={() => setUppercase(!uppercase)}
      /> 
      </label>

      <label>Include lowercase letters
      <input type="checkbox" checked={lowercase}
      onChange={() => setLowercase(!lowercase)}
      />   
      </label>


      <label>Include numbers
      <input type="checkbox" checked={numbers}
      onChange={() => setNumbers(!numbers)}
      />     
      </label>


      <label>Include symbols
      <input type="checkbox" checked={symbols}
      onChange={() => setSymbols(!symbols)}
      />     
     </label> 

    <button className='generate-btn' onClick={generatePassword}>
      Generate Password</button>
      </div>
    </div>
  );
}

export default App; 