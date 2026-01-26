import React from "react";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import { Box, Typography } from "@mui/material";
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
      <Typography variant="h3" sx={{ textAlign: "center", m: 3 }}>
        Categories
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <Category
          title={"Food"}
          description={"Healthy Kutta"}
          image={
            "https://th.bing.com/th/id/OIP.9BO5ezpeO0Qpe57cf4ywvgHaE8?w=241&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          }
        />
        <Category
          title={"Actor"}
          description={"rajini kanth"}
          image={
            "https://i.pinimg.com/736x/53/db/2d/53db2d20c494d9d589589a114339c975.jpg"
          }
        />
        <Category
          title={"Actor"}
          description={"Vijay"}
          image={
            "https://i.pinimg.com/736x/a6/93/3a/a6933af393283f495ca9a7d7bd103299.jpg"
          }
        />
        <Category
          title={"Frame"}
          description={"Beautiful photo Frame"}
          image={
            "https://i.pinimg.com/1200x/79/bd/25/79bd25995f9207b76ef3c1e5977505a1.jpg"
          }
        />
      </Box>
      {/* <MuiForm /> */}
      <Box
        sx={{
          backgroundColor: "#1976D2",
          borderRadius: 3,
          border: "2px solid black",
          height: "100px",
        }}
      >
        <Typography
          style={{
            color: "orange",
            textAlign: "center",
            fontWeight: "bold",
            p: 6,
          }}
        >
          Designed By Vijeth Rai
        </Typography>
      </Box>
    </div>
  );
}
