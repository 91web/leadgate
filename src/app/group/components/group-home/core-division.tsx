import React from "react";
import { Box, Typography, Grid2 } from "@mui/material"; // Use Grid2 for responsive design
import Divisions from './division';

const CoreDivisions = () => {
  return (
    <Box sx={{ mt:{ xs:'none', md: 5 } }}>
      {/* Section Header */}
   
      {/* Responsive Grid Section */}
      <Grid2 container spacing={4} sx={{ justifyContent: "space-between" }}>
        {/* Left Box - Header */}
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ mt: { xs: 2, md: 5 } }}>
   
        <Box sx={{width:{ xs: '100%', md: '70%' },mt:10, textAlign:{ xs: 'center', md: 'left' } }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Lora",
            fontWeight: 600,
            color: "#000",
            mb: 1,
            fontSize:{ xs:'24px', md: '26px' }
          }}
        >
          Our Core Divisions at{" "}
          <Typography
            component="span"
            sx={{ color: "#AE883B", fontWeight: 600, fontSize: '26px' }}
          >
            Leadgate Group
          </Typography>
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: "Lora", color: "#6D6D6D", fontSize: "16px" }}
        >
          Lorem ipsum dolor sit amet consectetur. Vivamus magna habitant blandit
          lectus integer pulvinar dui est.
        </Typography>
      </Box>
      </Grid2>


        {/* Right Box - Divisions */}
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ mt: { xs: 2, md: 3 } }}>
          <Divisions />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default CoreDivisions;
