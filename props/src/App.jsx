import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400'>tailwind test</h1>
      <Card username="button1"/>
      <Card username="button2"/>
    </>
  )
}

export default App
