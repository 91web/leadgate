"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Grid2";
import Image from "next/image";

// Define the props interface
interface PropertyCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  description1?: string;
  highlightsTitle: string;
  highlights: string[];
  highlights1?: string[];
  buttonLabel: string;
  onButtonClick: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  description1,
  highlightsTitle,
  highlights,
  highlights1,
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <Box sx={{ py: { xs: 4, md: 10 } }}>
      <Grid2
        container
        spacing={4}
        alignItems="flex-start"
        direction={{ xs: "column", md: "row" }}
      >
        {/* Left Section */}
        <Grid2 size={{ xs: 12, md: 7 }}>
          <Box sx={{ width: { xs: "100%", md: "auto" } }}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              height={800}
              width={652}
              style={{ borderRadius: "2px" }}
            />
          </Box>
        </Grid2>

        {/* Right Section */}
        <Grid2 size={{ xs: 12, md: 5 }}>
          <Box>
            {/* Title */}
            <Typography
              sx={{
                fontFamily: "lora",
                fontWeight: "medium",
                color: "#344054",
                my: 5,
                textAlign: "left",
                fontSize: { xs: "18px", md: "30px" },
              }}
            >
              {title}
            </Typography>

            {/* Description */}
            <Box sx={{ width: { xs: "100%", md: "90%" } }}>
              <Typography
                sx={{
                  fontFamily: "inter",
                  color: "#344054",
                  lineHeight: 1.8,
                  mb: { xs: 0, md: 2 },
                  fontSize: "14px",
                  textAlign: "left",
                  fontWeight: "regular",
                }}
              >
                {description}
              </Typography>

              {/* Highlights (Bullet Points) */}
              <Box ml={3}>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "inter",
                    color: "#344054",
                    lineHeight: 1.8,
                    mb: { xs: 0, md: 2 },
                    fontSize: "14px",
                    textAlign: "left",
                    fontWeight: "regular",
                  }}
                >
                  <ul>
                    {highlights1?.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </Typography>
                </Box>
              {/* Highlights Title */}
              <Typography
                sx={{
                  fontFamily: "lora",
                  fontWeight: "bold",
                  color: "#344054",
                  my: 3,
                  textAlign: "left",
                  fontSize: { xs: "16px", md: "17px" },
                }}
              >
                {highlightsTitle}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "inter",
                  color: "#344054",
                  lineHeight: 1.8,
                  mb: { xs: 0, md: 2 },
                  fontSize: "14px",
                  textAlign: "left",
                  fontWeight: "regular",
                }}
              >
                {description1}
              </Typography>
              {/* Highlights (Bullet Points) */}
              <Box ml={3}>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "inter",
                    color: "#344054",
                    lineHeight: 1.8,
                    mb: { xs: 0, md: 2 },
                    fontSize: "14px",
                    textAlign: "left",
                    fontWeight: "regular",
                  }}
                >
                  <ul>
                    {highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </Typography>
              </Box>
            </Box>

            {/* Button */}
            <Box
              sx={{
                display: "flex",
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
                  my: { xs: 2, md: 3 },
                  borderRadius: 1,
                  fontSize: { xs: "14px", md: "17px" },
                  textTransform: "none",
                  "&:hover": { bgcolor: "#967234" },
                  width: { xs: "100%", md: "60%" },
                }}
                onClick={onButtonClick}
              >
                {buttonLabel}
              </Button>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default PropertyCard;
