import React from "react";
import { Box, Typography, Grid2 } from "@mui/material"; // Use Grid2 for responsive design
import JourneyFeatures from './journey-feature';

const FeatureEvents = () => {
  return (
    <Box sx={{ mt:{ xs:'none', md: 15 } }}>
      {/* Section Header */}
   
      {/* Responsive Grid Section */}
      <Grid2 container spacing={4} sx={{ justifyContent: "space-between" }}>
        {/* Left Box - Header */}
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ mt: { xs: 2, md: 5 } }}>
   
        <Box sx={{width:{ xs: '100%', md: '70%' }, textAlign:{ xs: 'center', md: 'left' } , mt: 20}}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Lora",
            fontWeight: 'medium',
            color: "#101828",
            mb: 1,
            fontSize:{ xs:'24px', md: '26px' }
          }}
        >
          The journey so Far
         
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: "Lora", color: "#6D6D6D", fontSize: "16px" }}
        >
          Lorem ipsum dolor sit amet consectetur. Vivamus magna habitant blandit
          lectus integer pulvinar dui est.   Lorem ipsum dolor sit amet consectetur. Vivamus magna habitant blandit
          lectus integer pulvinar dui est.
        </Typography>
      </Box>
      </Grid2>


        {/* Right Box - Divisions */}
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ mt: { xs: 2, md: 3 } }}>
          <JourneyFeatures />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default FeatureEvents;
