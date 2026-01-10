import React from 'react'

export default function spread() {
    
    //spread operator is used to expand or spread iterables into single elements
    const number = [1,2,3]
    const newNumber = [...number,4,5,6,...number]
  return (
    <div>
        {newNumber}
    </div>
  )
}
