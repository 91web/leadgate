import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Grid2 from "@mui/material/Grid2";
import Image from "next/image";
import {
  HomePageData,
  HomePageType,
} from "@/app/group/components/static-data/data";

const Divisions = () => {
  const divisions: HomePageType[] = HomePageData;
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
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex", // Aligns the children (image and SVG) in a row
                  flexDirection: "row", // Makes sure they are horizontally aligned
                  alignItems: "center", // Aligns them vertically in the center
                  justifyContent: "flex-start", // Aligns the children to the left
                  width: "100%", // Make sure the Box takes the full width
                }}
              >
                {/* Image Section */}
                <CardMedia
                  component="img"
                  height="200"
                  image={division.image}
                  alt={division.title}
                  sx={{
                    borderRadius: "8px",
                    mb: 2,
                    width: "98%", // Takes the remaining width (98%)
                  }}
                />

                {/* SVG Line Section */}
                <Box
                  sx={{
                    width: "2%", // SVG width takes 2% of the container
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100px", // Adjust the height of SVG
                  }}
                >
                  <Image
                    src={division.lineSvg} // Dynamically use the assigned SVG for each division
                    alt="line"
                    priority={true}
                    style={{
                      height: "100%", // Make SVG fill the container height
                      width: "auto", // Ensure SVG scales proportionally
                    }}
                  />
                </Box>
              </Box>

              {/* Text Section */}
              <CardContent sx={{ p: 0 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "inter",
                    fontWeight: "bold",
                    mb: 1,
                    fontSize: "20px",
                    color: "#344054",
                    textAlign: "left", // Align title to the left
                  }}
                >
                  {division.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#475467",
                    fontSize: "14px",
                    lineHeight: "1.6",
                    mb: 2,
                    textAlign: "left", // Align description text to the left
                  }}
                >
                  {division.description}
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    color: "#AE883B",
                    fontFamily: "inter",
                    fontWeight: "medium",
                    fontSize: "16px",
                    textTransform: "none",
                    "&:hover": { textDecoration: "none" },
                    textAlign: "left", // Align button text to the left
                  }}
                >
                  {division.link} →
                </Button>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Divisions;
