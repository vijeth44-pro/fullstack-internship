import React from "react";
import { useState } from "react";

//rafce
//form
//input form with name and place and submit button
export default function form() {
  const [userData, setUserData] = useState({
    name: "", //object
    place: ""
  });
  
  const [allData,setAllData] = useState([])

  const handleSubmit = () => {
    console.log("User Data:", userData);
    setAllData([...allData, userData])
    setUserData({name:"",place:""})
    alert("Form submitted successfully!")
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        value={userData.name}
      />
      <br />
      <input
        type="text"
        placeholder="Enter your place"
        onChange={(e) => setUserData({ ...userData, place: e.target.value })}
        value={userData.place}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        <table border={{}}>
          <tr>
            <th>SL NO</th>
            <th>Name</th>
            <th>Place</th>
          </tr>
          {allData.map(()=> (
            
          ))}
          <tr>
            <td>1</td>
            <td>John</td>
            <td>London</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
