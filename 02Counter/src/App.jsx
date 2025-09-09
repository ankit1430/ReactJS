import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  // let counter = 15;

  const addValue = ()=>{
    // console.log("Btn Click ", counter)
    // counter = counter + 1;
    if(counter >= 20)
    {
      return;
    }
    setCounter(counter+1);
  }

  const removeValue = ()=>{
    if(counter <= 0)
    {
      return;
    }
    setCounter(counter-1);
  }
  return(
    <>
    <h1>Chai Aur React</h1>
    <h2>Counter Value : {counter}</h2>
    <br />
    <button onClick={addValue}>Add Value {counter}</button>
    <button onClick={removeValue}>Remove Value {counter}</button>
    <p>Footer: {counter}</p>
    </>
  )
}

export default App
