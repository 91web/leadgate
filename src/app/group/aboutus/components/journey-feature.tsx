import React from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import {JourneyData , JourneyType} from "./static-data/data";



const JourneyFeatures: JourneyType [] = JourneyData;
 
const Divisions = () => {
  return (
    <Box sx={{mt:'50px'}}>
      {/* Cards Section */}
      <Grid2 container spacing={4} direction="column" alignItems="center">
        {JourneyFeatures.map((feature, index) => (
          <Grid2 size={12} key={index}>
            <Card
              sx={{
                boxShadow: "none",
                backgroundColor: "transparent",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex", 
                  flexDirection: "row", 
                  alignItems: "center", 
                  justifyContent: "flex-start", 
                  width: "100%", 
                }}
              >
                {/* Image Section */}
                <CardMedia
                  component="img"
                  height="200"
                  image={feature.image}
                  alt={feature.alt}
                  sx={{
                    borderRadius: "8px",
                    mb: 2,
                    width: "98%", // Takes the remaining width (98%)
                  }}
                />
              </Box>

              {/* Text Section */}
              <CardContent sx={{ p: 0 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "inter",
                    fontWeight: 'bold',
                    mb: 1,
                    fontSize:'20px',
                    color: "text.primary",
                    textAlign: "left", // Align title to the left
                  }}
                >
                  {feature.date}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#6D6D6D",
                    fontSize: "14px",
                    lineHeight: "1.6",
                    mb: 2,
                    textAlign: "left", // Align description text to the left
                  }}
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Divisions;
