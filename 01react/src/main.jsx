import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
const ele = (
  <a href="hhtps://google.com" target='_blank'>Visit Google</a>
)
const user = "chai"
const reactelement = React.createElement(
  'a',
  {
    href:'https://google.com' , target: '_blank'
  },
  'click here google ',
  user
)


ReactDOM.createRoot(document.getElementById('root')).render(
  reactelement
)
