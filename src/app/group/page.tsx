"use client";
import Box from "@mui/material/Box";
import React from "react";
import HeroSlider from "./components/group-home/slide-home";
import Container from "@mui/material/Container";
import CoreDivisions from "./components/group-home/core-division";
import DreamGroup from "./components/group-home/dream-group";
import BuildingHero from "./components/group-home/building-hero";
import FeatureProject from "./components/group-home/feature-projects";
import useMediaQuery from "@mui/material/useMediaQuery";
import TestBg1 from "../../assets/img/bg-testimonial1.jpg";
import TestBg2 from "../../assets/img/bg-testimonial2.png";
import TestimonialHero from "./components/group-home/avatar-hero";

const AppGroup = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ backgroundColor: "#F9F5FF" }}>
      <HeroSlider />
      <Container>
        <CoreDivisions />
      </Container>
      <Box sx={{ backgroundColor: "#fff" }}>
        <Container>
          <DreamGroup />
        </Container>
      </Box>
      <Box>
        <Container>
          <FeatureProject />
        </Container>
      </Box>
      <Box >
        <BuildingHero />
      </Box>
      <Box
        sx={{
          backgroundImage: isMobile
            ? `url(${TestBg1.src})` //  the mobile image
            : `url(${TestBg2.src})`, // the desktop image
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: { xs: "50vh", md: "100vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TestimonialHero />
      </Box>
    </Box>
  );
};

export default AppGroup;
