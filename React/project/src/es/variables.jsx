import React from 'react'

export default function variables() {
    
    //keyword and variable name = value
    //most used const
    //var old method
    var a= 10//bid ,function = scope,reassgined
    a=20
    let b= 10//block - scope ,reassigned
    const c= 10//block - scope ,not reassigned
    //c=20 not allowed

  return (
    <div>variables</div>
    
  )
}
