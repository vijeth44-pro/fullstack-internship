import React from 'react'

export default function arrow() {


    //function declaration old method
    // function Click(){
    //     alert("Button clicked")
    // }


    //arrow function most used in react
    const Click=(place)=>{
        alert("Button clicked" +" " + place)
    }


  return (
    <div>
        <div>Arrow</div>
        <button onClick={() => Click("India")}>Click me</button>
    </div>
  )
}
