import React from "react";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import { Box , Typography } from "@mui/material";
import MuiForm from "../components/Muiform";

export default function Home() {
  return (
    <div>
      <Navbar />
      <img
        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&h=400&fit=crop&auto=format&dpr=2"
        alt=""
        style={{ width: "100%", height: "700px", marginTop: "20px" }}
      />
      <Box >
        <Typography>Categories</Typography>
         <Category />
         <MuiForm />
      </Box>
    </div>
  );
}
