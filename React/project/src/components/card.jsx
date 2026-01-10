import React from "react";
import Berserk from "../assets/berserk.jpg";

export default function () {
    const newStyle= {backgroundColor: "blue",
          width: "300px",
          height: "300px",
          color: "black",
          border:"2px solid red"}
  return (
    <div>
      {/* first bracket for jsx and second for style object */}
      <div
        style={
          newStyle
        }
      >
        <img src={Berserk} alt="berserk" style={{width:'300px' , height:'300px' }}/>
        <h1>Title</h1>
        <h6>Category</h6>
      </div>
    </div>
  );
}
