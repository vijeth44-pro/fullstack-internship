import React from 'react'
import { useState } from 'react';
import OutlinedCard from './Muicard';

export default function Muiform() {
     const [userData, setUserData] = useState({
    name: "",
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
    <div style={{
      margin: "50px auto",
      width: "600px",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      padding: "20px",
      boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
      borderRadius: "10px"
    }}>
      <input
        type="text"
        placeholder="Enter Product Name"
        style={{ padding: "10px", fontSize: "16px" }}
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        value={userData.name}
      />
      <input
        type="text"
        placeholder="Enter Price"
        style={{ padding: "10px", fontSize: "16px" }}
        onChange={(e) => setUserData({ ...userData, price: e.target.value })} //to extend the object
        value={userData.price}
      />
      <input
        type="text"
        placeholder="Enter Category"
        style={{ padding: "10px", fontSize: "16px" }}
        onChange={(e) => setUserData({ ...userData, category: e.target.value })}
        value={userData.category}
      />
       <input
        type="text"
        placeholder="Enter Description"
        style={{ padding: "10px", fontSize: "16px" }}
        onChange={(e) => setUserData({ ...userData, description: e.target.value })}
        value={userData.description}
      />
      <button 
        onClick={handleSubmit}
        style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}
      >
        Submit
      </button>
    </div>
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", padding: "20px" }}>
        {allData.map((item, index) => (
          <OutlinedCard 
            key={index}
            name={item.name}
            price={item.price}
            category={item.category}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}
