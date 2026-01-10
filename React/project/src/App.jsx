import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Variables from './es/variables.jsx' //any name can be given but path should be correct
// ./to exit from file
// ../ to go back to previous folder
import Arrow from './es/arrow.jsx'
import Destructuring from './es/destructuring.jsx'
import Spread from './es/spread.jsx'
import Card from './components/card.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Variables />
      <Arrow />
      <Destructuring />
      <Spread />
      <Card title={"Guts"} category={"berserk"} image={'https://th.bing.com/th/id/OIP.ggFdv-VVFtDZt0GyrIJ-PAHaEJ?w=294&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3'}/>
      <Card title={"Guts 1"} category={"berserk"} image={'https://th.bing.com/th/id/OIP.1lqBaYIfofYuu_Jx-uzZXAHaEK?w=321&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3'}/>
      <Card title={"Guts 2"} category={"berserk"} image={'https://th.bing.com/th/id/OIP.nB09LfCa7RL50rCKsBn-ggHaId?w=197&h=220&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3'}/>
    </div>
  )
}

export default App
