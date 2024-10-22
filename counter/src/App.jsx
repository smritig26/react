import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // useState(15)
  let [counter , setCounter] = useState(15)

  // let counter = 5;
  const addval = () => {
    // counter = counter + 1;
    if(counter <20)
    setCounter(counter + 1)
    
  }

  const decval = () =>{
    if(counter>0)
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>hello world</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addval}>add value</button>
      <br />
      <button onClick={decval}>Decrease value</button>
    </>
  )
}

export default App
