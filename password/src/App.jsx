import { useState , useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [num,setnum] = useState(false);
  const [char,setchar] = useState(false);
  const [pass,setpass] = useState("")

  const passgen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num) str += "0123456789"
    if(char) str += "!@#$%^&*~`{}[]+=_-"

    for (let i = 0; i <= array.length; i++) {
      // const element = array[index];
      let char = Math.floor(Math.random*str.length + 1)
      pass = str.charAt(char);
    }

    setpass(pass);
  } , [length,num,char,setpass]) 
  return (
    <>
       <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range" min={6} max={100} value={length} className='cursor-pointer' 
              onChange={(e) => {
                setlength(e.target.value)
              }}/> 
              <label> Length : {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
            <input
          type="checkbox"
          defaultChecked={num}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() => {
                  setchar((prev) => !prev )
              }}
          />
          <label>Characters</label>
            </div>
        </div>
      </div>
    </>
  );
  
}

export default App
