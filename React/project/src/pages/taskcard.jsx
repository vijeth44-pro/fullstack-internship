import React from "react";
import { useState } from "react";

//rafce
//form
//input form with name and place and submit button
export default function taskcard() {
  const [userData, setUserData] = useState({
    name: "", //object
    price: "",
    category: "",
    description: ""
  });
  
  const [allData,setAllData] = useState([])

  const handleSubmit = () => {
    console.log("User Data:", userData);
    setAllData([...allData, userData])
    setUserData({name:"",price:"",category:"",description:""})
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
        onChange={(e) => setUserData({ ...userData, price: e.target.value })} //to extend the object
        value={userData.price}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Category"
        onChange={(e) => setUserData({ ...userData, category: e.target.value })}
        value={userData.category}
      />
      <br />
       <input
        type="text"
        placeholder="Enter Description"
        onChange={(e) => setUserData({ ...userData, description: e.target.value })}
        value={userData.description}
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


      {/* Implementing card here */}
      <div>
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {allData.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ffffff",
              padding: "15px",
              width: "200px",
              borderRadius: "8px",
              boxShadow: "2px 2px 8px #ddd"
            }}
          >
            <h4>{item.name}</h4>
            <p><b>Price:</b> ₹{item.price}</p>
            <p><b>Category:</b> {item.category}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
