import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Variables from './es/variables.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>First line</div>
      <div>Second line</div>
    </div>
  )
}

export default App
