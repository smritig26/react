import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [car , setcar] = useState({
    name : "ford",
    color : "red",
    price : 1000

  });
  const updatecolor = () =>{
    setcar(previousState => {
      return {...previousState , color : "blue"}
    });
  }

  

  return (
    <>
    <h1>my fav car is {car.name}</h1>
    <h2>my fav color is {car.color}</h2>
    <button onClick={updatecolor}>change color</button>
    {/* <button onClick={cgreen}>green</button> */}
    </>
  )
}

export default App
