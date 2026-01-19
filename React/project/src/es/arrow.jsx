import React from 'react'

//arrow function
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
        <button onClick={() => alert("India")}>Click me</button>
    </div>
  )
}
