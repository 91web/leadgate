import React from "react";
import { Box, Typography, Grid2 } from "@mui/material"; // Use Grid2 for responsive design
import JourneyFeatures from "./journey-feature";

const FeatureEvents = () => {
  return (
    <Box py={5}>
      {/* Section Header */}

      {/* Responsive Grid Section */}
      <Grid2 container spacing={4} sx={{ justifyContent: "space-between" }}>
        {/* Left Box - Header */}
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ mt: { xs: 2, md: 5 } }}>
          <Box
            sx={{
              width: { xs: "100%", md: "70%" },
              textAlign: { xs: "center", md: "left" },
              mt: { xs: 2, md: 20 },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Lora",
                fontWeight: "medium",
                color: "#101828",
                mb: 1,
                fontSize: { xs: "24px", md: "30px" },
              }}
            >
              The journey so Far
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontFamily: "Lora", color: "#475467", fontSize: "16px" , fontWeight:'regular'}}
            >
              Lorem ipsum dolor sit amet consectetur. Vivamus magna habitant
              blandit lectus integer pulvinar dui est. Lorem ipsum dolor sit
              amet consectetur. Vivamus magna habitant blandit lectus integer
              pulvinar dui est.
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ my: { xs: 2, md: 5 } }}>
          <Box
            sx={{
              maxHeight: "60vh",
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                width: "8px", // Set the width of the scrollbar
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#6B7280", // Set the color of the thumb
                borderRadius: "10px", // Make the thumb rounded
                border: "2px solid #F3F4F6", // Optional: Adds a border to the thumb
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#F3F4F6", // Set the color of the track
                borderRadius: "10px", // Optional: Rounded corners for the track
              },
              "&::-webkit-scrollbar-button": {
                display: "none", // Optional: Hide the buttons (up/down arrows) on the scrollbar
              },
            }}
          >
            {/* Right Box - Divisions */}
            <JourneyFeatures />
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default FeatureEvents;
