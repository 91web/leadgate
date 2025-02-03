import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Line1 from "../../../../assets/svg/line-dream.svg";
import Divisions from "./division";

import { HomeData, HomeType } from "./static-data/data";

const CoreDivisions = () => {
  const images: HomeType[] = HomeData;
  return (
    <Box>
      <Box sx={{ justifyContent: "center" ,py:2}}>
        <Box sx={{ mx: "2%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              py: { xs: 2, md: 10 },
            }}
          >
            <Grid2
              container
              spacing={2}
              sx={{ justifyContent: "center", width: "100%" }}
            >
              {/* Left Box - Header (Flex Start) */}
              <Grid2 size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{ alignSelf:{xs:'flex-start', md:"auto"}, textAlign: { md: "left" } }}
                >
                  <Box
                    sx={{
                      width: { xs: "100%", md: "80%" },
                      mr: { sx: 5, },ml:{md:15}
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        fontFamily: "Lora",
                        fontWeight: "medium",
                        color: "#344054",
                        fontSize: { xs: "32px", md: "30px" },
                        lineHeight: "40px",
                        px: { xs: 5, md:5 },
                        textTransform: { xs: "uppercase", md: "none" }, // Capitalized on mobile, normal on desktop
                        // display: { xs: "block", md: "block" }, // Ensure visibility on both screens
                      }}
                    >
                      Innovation. Excellence. Dependability.
                    </Typography>
                  </Box>
                </Box>
              </Grid2>

              {/* Right Box - Divisions (Flex End) */}
              <Grid2 size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    alignSelf: "flex-end",
                    textAlign: { xs: "right", md: "left" },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: "90%", md: "80%" },
                      mr: { sx: 2, md: 10 },
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Inter",
                        color: "#000",
                        fontSize: "16px",
                        fontWeight: "regular",
                        pl: 3,
                      }}
                    >
                      The idea of our company is based on a strong commitment to
                      redefine urban landscapes through innovation, excellence,
                      and dependability. We aim to create exceptional buildings
                      that elevate communities and provide enduring value for
                      residents, investors, and partners alike.
                    </Typography>
                  </Box>
                </Box>
              </Grid2>
            </Grid2>
          </Box>
        </Box>
        <Box>
          <Grid2
            container
            spacing={2}
            sx={{
              flexWrap: "nowrap",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            {images.map((image, index) => (
              <Grid2
                key={index}
                size={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  elevation={0}
                  sx={{
                    width: 800, // Full width on mobile, fixed width on desktop
                    height: index % 2 === 0 ? 400 : 350, // Alternating heights for step effect
                    borderRadius: 2,
                    overflow: "hidden",
                    position: "relative",
                    marginTop: index % 2 === 0 ? 0 : 5, // Push second and fourth card down
                  }}
                >
                  <CardMedia
                    component="img"
                    image={image.image}
                    alt={`Image ${index + 1}`}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Box mx={"5%"}>
          <Grid2 container spacing={4} sx={{ justifyContent: "space-between" }}>
            {/* Left Box - Header */}
            <Grid2 size={{ xs: 12, md: 6 }} sx={{ pt: { xs: 2, md: 5 } }}>
              <Box
                sx={{
                  width: { xs: "100%", md: "90%" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "16px",
                      color: "#AE883B",
                      fontWeight: "regular",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    OUR PROPERTIES
                  </Typography>
                  <Box
                    component="img"
                    src={Line1.src}
                    alt="Line decoration"
                    sx={{
                      width: "auto",
                      height: "2px",
                      flexShrink: 0,
                    }}
                  />
                </Box>

                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "Lora",
                    fontWeight: "medium",
                    color: "#344054",
                    //py: 5,
                    fontSize: { xs: "24px", md: "30px" },
                    mb: 2,
                  }}
                >
                  Current Property Offerings
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "inter",
                    color: "#475467",
                    fontSize: "16px",
                    fontWeight: "regular",
                    mb: 2,
                    width: { xs: "100%", md: "90%" },
                  }}
                >
                  Discover the perfect space that aligns with your vision for
                  the future. Our dedicated team is here to guide you through
                  the selection process, providing expert insights and support
                  to make your real estate journey seamless and rewarding.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                ></Box>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#AE883B",
                    color: "#fff",
                    py: 1,
                    px: 3,
                    fontFamily: "'Inter'",
                    fontWeight: "medium",
                    fontSize: { xs: "14px", md: "17px" },
                    //  textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#965F2A",
                    },
                    my: 2,
                  }}
                >
                  VIEW PROPERTIES
                </Button>
              </Box>
            </Grid2>

            {/* Right Box - Divisions */}
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  maxHeight: "70vh",
                  height: "1849px",
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
                  mb: { xs: 2 },
                }}
              >
                <Divisions />
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </Box>
  );
};

export default CoreDivisions;
