import React from "react";
import Grid2 from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

import { PharmaData, PharmaType } from "../conponents/static-data/data";

const ServiceCards: React.FC = () => {
  const services: PharmaType[] = PharmaData;

  return (
    <Box>
      {/* Service Grid */}
      <Grid2 container spacing={2}>
        {services.map((service, index) => (
          <Grid2 size={{ xs: 12, md: 4 }} key={index}>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 2,
                width: "100%", // Ensure full width
                height: "300px", // Equal height for cards
                "&:hover .MuiBox-overlay": {
                  opacity: 1,
                  transform: "translateY(0)", // Ensure content shows on hover
                },
                "&:hover .MuiTypography-title": {
                  opacity: 0, // Hide title on hover
                },
              }}
            >
              {/* Image */}
              <Card
                elevation={0}
                sx={{ borderRadius: 2, overflow: "hidden", height: "100%" }}
              >
                <Box
                  component="img"
                  src={service.image}
                  alt={service.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Card>

              {/* Title always visible */}
              <Typography
                variant="h6"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  //  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 18,
                  fontFamily: "Inter",
                  p: 2,
                  zIndex: 1,
                  transition: "opacity 0.3s ease",
                  opacity: 1, // Always visible unless hovered
                }}
                className="MuiTypography-title"
              >
                {service.title}
              </Typography>

              {/* Overlay for hover effect */}
              <Box
                className="MuiBox-overlay"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  opacity: 0, // Initially hidden
                  transform: "translateY(100%)",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                  p: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    fontFamily: "Inter",
                    p: 1,
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "12px",
                    fontFamily: "Inter",
                    p:1
                  }}
                >
                  {service.description}
                </Typography>
                <Link href="/your-target-path" passHref>
                  <Button
                    sx={{
                      color: "#F9FAFB",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        color: "#fff",
                        textDecoration: "none",
                      },
                    }}
                  >
                    {service.buttonText} →
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default ServiceCards;
