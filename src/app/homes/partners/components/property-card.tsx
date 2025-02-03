"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Grid2";
import PropertyEvent from "../../../../assets/img/property-card.png";
import Image from "next/image";


const PropertyCard = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 10 } }}>
      <Grid2
        container
        spacing={4}
        alignItems="flex-start"
        direction={{ xs: "column", md: "row" }}
      >
        {/* left Section */}
        <Grid2 size={{ xs: 12, md: 7 }}>
          <Box sx={{ width: { xs: "100%", md: "auto" } }}>
            <Image
              src={PropertyEvent.src}
              alt={"Group Image"}
              height={800}
              width={652}
              style={{ borderRadius: "2px" }}
            />
          </Box>
        </Grid2>
        {/* right Section */}
        <Grid2 size={{ xs: 12, md: 5 }}>
          <Box>
            {/* Description and Button */}
            <Typography
              variant="body2"
              sx={{
                fontFamily: "lora",
                fontWeight: "bold",
                color: "#000",
                my: 5,
                textAlign: "left",
                fontSize: { xs: "18px", md: "20px" },
              }}
            >
              Property Description
            </Typography>

            {/* Description */}
            <Box sx={{ width: { xs: "100%", md: "90%" } }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "inter",
                  color: "#000000",
                  lineHeight: 1.8,
                  mb: { xs: 0, md: 2 },
                  fontSize: "14px",
                  textAlign: "left",
                  fontWeight: "regular",
                }}
              >
                Discover elevated living at Ighalo Residences, a modern
                sanctuary in the heart of [City/Neighborhood]. Inspired by
                contemporary elegance and crafted for comfort, this luxury
                property redefines city living with its upscale amenities,
                spacious layouts, and unbeatable views. Property Highlights
              </Typography>

              {/* Property Highlights */}

              {/* Bullet Points */}
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "inter",
                  color: "#000000",
                  lineHeight: 1.8,
                  mb: { xs: 0, md: 2 },
                  fontSize: "14px",
                  textAlign: "left",
                  fontWeight: "regular",
                }}
              >
                <li>
                  Lavish Interiors: Each apartment features
                  premium finishes, high ceilings, and expansive windows that
                  welcome abundant natural light, creating a bright and airy
                  ambiance.
                </li>
                <li>
                  Bedrooms: Choose from 2 to 4-bedroom units,
                  each designed with comfort in mind and complete with en-suite
                  bathrooms and generous closet space.
                </li>
                <li>
                  Gourmet Kitchens: Equipped with
                  state-of-the-art appliances, custom cabinetry, and ample
                  counter space, these kitchens are perfect for both casual
                  meals and entertaining guests.
                </li>
                <li>
                  Private Balconies: Enjoy breathtaking views
                  of [Cityscape/Landscape] from your private balcony—a serene
                  space for relaxation or entertaining.
                </li>
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#AE883B",
                  color: "#ffffff",
                  fontFamily: "'Inter'",
                  fontWeight: "medium",
                  my: { xs: 2, md: 10 },
                  borderRadius: 1,
                  fontSize: { xs: "14px", md: "17px" },
                  textTransform: "none",
                  "&:hover": { bgcolor: "#967234" },
                  width: { xs: "100%", md: "60%" },
                }}
              >
                Download Brochure
              </Button>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default PropertyCard;
