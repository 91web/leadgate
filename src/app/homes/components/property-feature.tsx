"use client";
import React from "react";
import Grid2 from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { PropertyType, PropertyData } from "./static-data/data";

const properties: PropertyType[] = PropertyData;

const PropertyCards = () => {
  return (
    <Box>
      <Box py={2}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Column on mobile, row on desktop
            justifyContent: "space-between",
            alignItems: "center", // Adjust alignment for both layouts
            gap: 2, // Adds spacing between items
          }}
        >
          <Box textAlign={{ xs: "center", md: "left" }} mt={5}>
            <Typography
              variant="h2"
              sx={{
                color: "#000",
                fontWeight: "medium",
                fontSize: { xs: "24px", md: "30px" },
                lineHeight: "120%",
                fontFamily: "lora",
                mb: 2,
              }}
            >
              Best Properties
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#344054",
                fontWeight: "medium",
                fontSize: { xs: "14px", md: "17px" },
                lineHeight: "120%",
                fontFamily: "regular",
                mb: 2,
                width: { xs: "100%", md: "55%" },
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Integer euismod molestie
              tortor non laoreet tristique maecenas mauris.Best Properties
            </Typography>
          </Box>

          <Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#AE883B",
                color: "#fff",
                fontFamily: "Inter",
                fontWeight: "regular",
                textTransform: "none",
                borderRadius: 2,
                px: 3,
                // my: { xs: 2, md: 0 },

                // width: { xs: "80%", md: "auto" },
                marginX: 2,
                "&:hover": {
                  backgroundColor: "#8F6D25",
                },
              }}
            >
              See our Properties
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, p: 2, my: 2 }}>
        <Grid2 container spacing={3}>
          {properties.map((property, index) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  // boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  backgroundColor: "#F2F4F7",
                }}
              >
                {/* Image */}
                <CardMedia
                  component="img"
                  height="200"
                  image={property.image}
                  alt={property.title}
                />
                {/* Content */}
                <CardContent>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      color: "#344054",
                      fontSize: { xs: "16px", md: "18px" },
                      fontFamily: "inter",
                    }}
                  >
                    {property.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#475467",
                      mb: 2,
                      fontWeight: "regular",
                      fontSize: { xs: "14px", md: "15px" },
                      fontFamily: "'Inter'",
                      lineHeight: 1.6,
                    }}
                  >
                    {property.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
};

export default PropertyCards;
