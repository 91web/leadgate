import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid2";
import { JourneyData, JourneyType } from "./static-data/data";

const JourneyFeatures: JourneyType[] = JourneyData;

const JourneyEvents = () => {
  return (
    <Box sx={{ mt: { xs: "none", md: "50px" } }}>
      {/* Cards Section */}
      <Grid2 container spacing={4} direction="column" alignItems="center">
        {JourneyFeatures.map((feature, index) => (
          <Grid2 size={12} key={index}>
            <Card
              elevation={0}
              sx={{
                // boxShadow: "none",
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
                  sx={
                    {
                      //  borderRadius: "8px",
                      // mb: 2,
                      //  width: "100%",
                    }
                  }
                />
              </Box>

              {/* Text Section */}
              <CardContent sx={{ p: 0 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "inter",
                    fontWeight: "bold",
                    py: 1,
                    fontSize: { xs: "18px", md: "20px" },
                    color: "#344054",
                    textAlign: "left", // Align title to the left
                  }}
                >
                  {feature.date}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#6D6D6D",
                    fontSize: { xs: "14px", md: "16px" },
                    lineHeight: "1.6",
                    mb: 2,
                    fontFamily: "inter",
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

export default JourneyEvents;
