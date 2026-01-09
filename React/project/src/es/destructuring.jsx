import React from 'react'

export default function destructuring() {

    //const onj = {key: value}
    const User = {
        name: "John",
        age: 30,
        city: "New York"
    }
  return (
    <div>
        <p>{User.name}</p>
        <p>{User.age}</p>
        <p>{User.city}</p>
    </div>
    
  )
}
