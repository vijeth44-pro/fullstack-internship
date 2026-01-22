import React from "react";
import { useState } from "react";

//rafce
//form
//input form with name and place and submit button
export default function taskcard() {
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
        placeholder="Enter Product Name"
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        value={userData.name}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Price"
        onChange={(e) => setUserData({ ...userData, place: e.target.value })} //to extend the object
        value={userData.place}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Category"
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        value={userData.name}
      />
      <br />
       <input
        type="text"
        placeholder="Enter Description"
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        value={userData.name}
      />
      <br />
      {/* important input values are onchange and value */}
      <br />
      <button onClick={handleSubmit}>Submit</button>
      {/* <div>
        <table border={{}}>
          <tr>
            <th>SL NO</th>
            <th>Name</th>
            <th>Place</th>
          </tr>
          {allData.map((item, index)=> (
            <tr>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.place}</td>
          </tr>
          ))}
        </table>
      </div> */}
      <div>

      </div>
    </div>
  );
}
