import React from 'react'

export default function arrow() {

    //arrow function most used in react
    const Click=()=>{
        alert("Button clicked")
    }


  return (
    <div>
        <div>Arrow</div>
        <button onClick={Click}>Click me</button>
    </div>
  )
}
