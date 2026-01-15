import React from 'react'
import {useState} from 'react'

export default function hooks() {
    //use state
    //use effect

    //1.use state
    //const [state, setstate] = useState(any value)
    //state-> variable , setstate-> function which we use to change value of state


    const[name,setName] = useState("hello")
    const[bg,setBg] = useState(false)
    const[user,setUser] = useState({
        name:"John",
        age:30,
        email:"john@gmail.com"
    })

//turnary operator
// condition ? true : false


//logic operator
// && -> (if condition is true then only execute the code after &&)
// || -> (if condition is false then only execute the code after ||)

  return (
    <div style={{
        backgroundColor: bg ? 'black' : 'white',
        color: bg ? 'white' : 'black'
    }
    }>
        <p>{name}</p>
        <button onClick={()=>setName("World")}>Change Text</button>
        <button onClick={()=>setBg(!bg)}>Change Bg</button>
        <p>{user.name}</p>
        <p>{user.age}</p>
        <p>{user.email}</p>
    </div>
  )
}
