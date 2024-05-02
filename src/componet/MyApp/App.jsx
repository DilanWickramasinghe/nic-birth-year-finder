import { useEffect, useState } from 'react';
import Button from '../Button/Button'
import './App.css'
import {validateNumber,getBirthYear,getGender} from 'nic-no-sri-lanka'

function App() {

  const [nic, setNic] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  const submit = () => {

    const validationNum = validateNumber(nic)

    if(validationNum){
      const year = getBirthYear(nic)
      const gen = getGender(nic)

      setBirthYear(year)
      setGender(gen)
      console.log(year);
      console.log(gen);

    }else {
      alert("Invalid Number")
    }

    const currentYear = new Date().getFullYear()
    const ag = (currentYear - birthYear)
    setAge(ag)
    
  }

  const clear = () => {
    setNic('')
    setBirthYear('')
    setGender('')
  }

  return (
    <>
      <div className="main">

        <div className="wrapper">
          <input type="text" name="input" 
          id="input" 
          placeholder='Type NIC'
          value={nic}
          onChange={(e)=>setNic(e.target.value)}
          />
          
          <button onClick={submit}>SUBMIT</button>

          <div className="div">
            <h2>---Results---</h2>

            <form className='form'>
              <h3>ID Number : {nic}</h3>
              <h3>Gender : {gender}</h3>
              <h3>Birth Year : {birthYear}</h3>
              <h3>Age : {age}</h3>
            </form>
          </div>

          <div className="clear">
            <button onClick={clear}>Clear</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
