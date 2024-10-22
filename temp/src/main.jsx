// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
// function abc(){
//   return(
//     <App />
//   );
// }
createRoot(document.getElementById('root')).render(
  <App />
)
