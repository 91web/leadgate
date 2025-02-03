import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Grid2 from "@mui/material/Grid2";
import { HomePageData, HomePageType } from "./static-data/data";

const divisions: HomePageType[] = HomePageData;

const Divisions = () => {
  return (
    <Box>
      {/* Cards Section */}
      <Grid2 container spacing={4} direction="column" alignItems="center">
        {divisions.map((division, index) => (
          <Grid2 size={12} key={index}>
            <Card
              sx={{
                boxShadow: "none",
                backgroundColor: "transparent",
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
              }}
            >
                {/* Image Section */}
                <CardMedia
                  component="img"
                  height="250"
                  image={division.image}
                  alt={division.description}
                  sx={{
                    borderRadius: "8px",
                    mb: 2,
                    width: "98%", // Takes the remaining width (98%)
                  }}
                />

             

              {/* Text Section */}
              <CardContent sx={{ p: 0 }}>
              
                <Typography
                  variant="body2"
                  sx={{
                    color: "#475467",
                    fontSize: "18px",
                    lineHeight: "1.6",
                    fontWeight:'medium',
                    mb: 2,
                    textAlign: "left", // Align description text to the left
                  }}
                >
                  {division.description}
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
