import React from "react";


export default function Card({title,category,image}) {
    const newStyle= {backgroundColor: "blue",
          width: "300px",
          height: "500px",
          color: "black",
          borderRadius: "10px"
        }
  return (
    <div>
      {/* first bracket for jsx and second for style object */}
      <div
        style={
          newStyle
        }
      >
        <img src={image} alt="berserk" style={{width:'300px' , height:'300px', borderRadius:'10px'}}/>
        <h1>{title}</h1>
        <h6>{category}</h6>
      </div>
    </div>
  );
}
