import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Variables from './es/variables.jsx' //any name can be given but path should be correct
// ./to exit from file
// ../ to go back to previous folder
import Arrow from './es/arrow'
import Destructuring from './es/destructuring.jsx'
import Spread from './es/spread.jsx'
import Card from './components/card.jsx'
import Map from './es/map.jsx'
import  Hooks from './components/hooks.jsx'
import Form from './pages/form.jsx'
import TaskCard from './pages/taskcard.jsx'
import MuiComponents from './mui/MuiComponents.jsx'
import Home from './pages/Home.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes> 
         <Route path='/' element={<Home/>}/> {/*only / for home page*/}
         <Route path='/myform' element={<Form/>}/>
         <Route path='/mui' element={<MuiComponents/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Form /> */}
      {/* <TaskCard /> */}
      {/* <MuiComponents /> */}
      {/* <Home /> */}
    </div>
  )
}

export default App

//structuring or routing
//1.install react-router-dom
//2.import BrowserRouter,Routes,Route from react-router-dom
//3.wrap your app in <BrowserRouter> in App.jsx
//4.define all your routes inside <Routes>
//5.inside <Route> define path and element to be rendered
//6.path means url path {routing end point} and element means which component to be rendered
