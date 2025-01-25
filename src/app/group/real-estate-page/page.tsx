"use client";
import React from "react";
import EstateSlider from "./components/slide-real";
import Box from "@mui/material/Box";

const RealEstateHome = () => {
  return (
    <Box>
      <div>
        <h1>Real Estate Home</h1>
      </div>
      <Box>
        <EstateSlider />
      </Box>
    </Box>
  );
};

export default RealEstateHome;
