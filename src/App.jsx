import { useState } from 'react'
import './App.css'
import DisplayEmployee from './components/DisplayEmployee'
import axios from 'axios'



function App() {
  const [employee, setEmployee] = useState(null)
  const getEmployee = () => {
    axios
      .get("https://randomuser.me/api?nat=en")
      .then((reponse) => {
        setEmployee(reponse.data.results[0])
      });
  };
  return (
    <>
      <DisplayEmployee employee={employee} />
      <button type='button' onClick={getEmployee}>Get employee</button>
    </>
  )
}

export default App
