import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loginpage from './loginpage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Loginpage /> 
    </>
  )
}

export default App
