import React from 'react'

//destructuring
export default function destructuring() {

    //const obj = {key: value}
    const User = {
        name: "John",
        age: 30,
        city: "New York"
    }
    //destructuring
    const{name,age,city} = User

  return (
    <div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{city}</p>
    </div>
    
  )
}
