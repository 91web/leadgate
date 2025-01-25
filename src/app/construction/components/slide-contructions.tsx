"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { keyframes } from "@mui/system";
import { SliderData, SliderType } from "./static-data/data";

const images: SliderType[] = SliderData;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const zoomOutIn = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9); /* Zoom out slightly */
  }
  100% {
    transform: scale(1); /* Zoom back in */
  }
`;

const fadeBackground = keyframes`
  from {
    background-color: #000;
  }
  to {
    background-color: transparent;
  }
`;

const overlayFadeOut = keyframes`
  from {
    background-color: rgba(0, 0, 0, 0.5);
  }
  to {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "650px", // desktop view
        backgroundColor: "#000", // Set background to black
        animation: `${fadeBackground} 6s ease`, // Apply fade effect to background
      }}
    >
      {images.map((image, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: index === currentSlide ? 1 : 0,
            animation:
              index === currentSlide
                ? `${slideIn} 1s ease, ${zoomOutIn} 3s 1s ease` // Image slide-in + zoom out and in
                : "none",
          }}
        >
          <Box
            component="img"
            src={image.src}
            alt={`Slide ${index + 1}`}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 1, // Ensure image is always visible
            }}
          />

          {/* Overlay */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent dark overlay
              animation:
                index === currentSlide
                  ? `${overlayFadeOut} 2s ease` // Apply overlay fade-out effect when sliding in
                  : "none",
            }}
          />
        </Box>
      ))}

      {/* Content (Typography & Button) */}
      <Box
        sx={{
          position: "absolute",
          // bottom: "10%",
          top: "30%",
          left: "10%",
          color: "#fff", // Make the content text color white
          opacity: 1, // Full opacity for the content
          animation: `${slideIn} 1s ease`, // Apply slide-in animation to content
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            fontSize: { xs: "36px", md: "40px" },
            fontFamily: "lora",
            fontWeight: "regular",
            width: { xs: "100%", md: "45%" },
          }}
        >
          {images[currentSlide].title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 2,
            fontSize: "17px",
            fontFamily: "inter",
            fontWeight: "regular",
            color: "#D0D5DD",
            width: { xs: "100%", md: "40%" },
          }}
        >
          {images[currentSlide].description}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#AE883B",
            color: "#fff",
            "&:hover": {
              backgroundColor: "darkgoldenrod",
            },
            textTransform: "none",
          }}
        >
          {images[currentSlide].buttonText}
        </Button>
      </Box>

      {/* Slide indicators */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "none", md: "40%" },
          bottom: { xs: "5%", md: "none" },
          right: { xs: "40%", md: "10%" },
          display: "flex",
          flexDirection: { xs: "row", sm: "column" },
          gap: 1,
          alignContent: "center",
          alignItems: "center",
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "white",
              fontWeight: index === currentSlide ? "bold" : "normal",
              opacity: index === currentSlide ? 1 : 0.5,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HeroSlider;
