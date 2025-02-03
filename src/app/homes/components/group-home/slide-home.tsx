"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { keyframes } from "@mui/system";
import { SliderData, SliderType } from "../static-data/data";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNavigate = (path: string) => {
    switch (path) {
      case "Explore Now":
        router.push("/group/about-us");
        break;
      case "Discover More":
        router.push("/group/projects");
        break;
      case "Join Us":
        router.push("/group/contact-us");
        break;
      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "650px",
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
                ? `${slideIn} 1s ease, ${zoomOutIn} 3s 1s ease`
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
              opacity: 1,
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
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              animation:
                index === currentSlide ? `${overlayFadeOut} 2s ease` : "none",
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
          variant="h2"
          sx={{
            mb: 2,
            fontSize: { xs: "36px", md: "40px" },
            fontFamily: "'Lora'", // add Lora to the App
            fontWeight: "regular",
          }}
        >
          {images[currentSlide].title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 2,
            fontSize: "17px",
            fontFamily: "'Inter'", //add inter to the app
            fontWeight: "regular",
            color: "#D0D5DD",
            lineHeight: "130%",
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
          onClick={() => handleNavigate(images[currentSlide].buttonText)}
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
