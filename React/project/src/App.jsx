import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Variables from './es/variables.jsx' //any name can be given but path should be correct
// ./to exit from file
// ../ to go back to previous folder
import Arrow from './es/arrow.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Variables />
      <Arrow />
    </div>
  )
}

export default App
