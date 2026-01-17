import React from 'react'

export default function form() {
    const [userData,setUserData] = useState({
        name:'',
        place:''
    });
    
  return (
    <div>
        <input type="text" placeholder='Enter your name'/>
        <br />
        <input type="text" placeholder='Enter your place'/>
        <br />
        <button>Submit</button>
    </div>
  )
}