import React from 'react'

//map is a function
export default function () {
    const fruits = ['Apple', 'Banana', 'Orange', 'Mango' ,'papaya'];
    //syntax
    //{arrayVariable.map(arrowfunction)}
  return (
    <div>
        {fruits.map((item)=> (
            <div>{item}</div>
            ))}
    </div>
  )
}
